import { appendFile, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

async function main() {
  const requiredIndex = process.argv.indexOf("--require");
  const requiredReleaseSet =
    requiredIndex >= 0 ? process.argv[requiredIndex + 1] : undefined;
  const writeGitHubOutput = process.argv.includes("--github-output");
  const directories = (await readdir("packages", { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("pack-"))
    .map((entry) => entry.name)
    .sort();

  const records = await Promise.all(
    directories.map(async (directory) => {
      const manifest = JSON.parse(
        await readFile(
          path.join("packages", directory, "package.json"),
          "utf8",
        ),
      );
      return {
        name: manifest.name,
        version: manifest.version,
        published: await isPublished(manifest.name, manifest.version),
      };
    }),
  );
  const candidates = records
    .filter((record) => !record.published)
    .map((record) => `${record.name}@${record.version}`)
    .sort();
  const canonicalReleaseSet = candidates.join(",");

  if (requiredReleaseSet === undefined && requiredIndex >= 0)
    throw new Error("--require needs an explicit comma-separated release set");
  if (
    requiredReleaseSet !== undefined &&
    normalizeReleaseSet(requiredReleaseSet) !== canonicalReleaseSet
  )
    throw new Error(
      [
        "The confirmed release set does not match the current unpublished package versions.",
        `Expected: ${canonicalReleaseSet || "(none)"}`,
        `Received: ${normalizeReleaseSet(requiredReleaseSet) || "(none)"}`,
      ].join("\n"),
    );

  console.log(
    candidates.length
      ? `Release candidates (${candidates.length}):\n${candidates.join("\n")}`
      : "Release candidates: none",
  );

  if (writeGitHubOutput) {
    const output = process.env.GITHUB_OUTPUT;
    if (!output) throw new Error("GITHUB_OUTPUT is unavailable");
    await appendFile(
      output,
      `count=${candidates.length}\nrelease_set=${canonicalReleaseSet}\n`,
    );
    const summary = process.env.GITHUB_STEP_SUMMARY;
    if (summary)
      await appendFile(
        summary,
        candidates.length
          ? `## npm release candidates\n\n${candidates.map((candidate) => `- \`${candidate}\``).join("\n")}\n`
          : "## npm release candidates\n\nNo unpublished package versions were found.\n",
      );
  }
}

export async function isPublished(name, version, fetchImpl = fetch) {
  const url = `https://registry.npmjs.org/${encodeURIComponent(name)}`;
  const response = await fetchImpl(url, {
    headers: { accept: "application/json" },
  });
  if (response.status === 404) return false;
  if (!response.ok)
    throw new Error(
      `npm registry check failed for ${name}@${version}: ${response.status} ${response.statusText}`,
    );
  const metadata = await response.json();
  if (metadata.name !== name || typeof metadata.versions !== "object")
    throw new Error(`${name} has incomplete npm registry metadata`);

  const requested = parseStableVersion(version);
  if (!requested) throw new Error(`${name}@${version} is not a stable semver`);
  return Object.entries(metadata.versions).some(
    ([publishedVersion, manifest]) =>
      typeof manifest?.dist?.tarball === "string" &&
      compareStableVersions(publishedVersion, requested) >= 0,
  );
}

function compareStableVersions(publishedVersion, requested) {
  const published = parseStableVersion(publishedVersion);
  if (!published) return -1;
  for (let index = 0; index < requested.length; index += 1) {
    if (published[index] !== requested[index])
      return Math.sign(published[index] - requested[index]);
  }
  return 0;
}

function parseStableVersion(version) {
  const match = version.match(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/);
  return match ? match.slice(1).map(Number) : undefined;
}

function normalizeReleaseSet(value) {
  return value
    .split(/[\s,]+/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .sort()
    .join(",");
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url)
  await main();
