import { appendFile, readFile, readdir } from "node:fs/promises";
import path from "node:path";

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
      await readFile(path.join("packages", directory, "package.json"), "utf8"),
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

async function isPublished(name, version) {
  const url = `https://registry.npmjs.org/${encodeURIComponent(name)}/${encodeURIComponent(version)}`;
  const response = await fetch(url, {
    headers: { accept: "application/vnd.npm.install-v1+json" },
  });
  if (response.status === 404) return false;
  if (!response.ok)
    throw new Error(
      `npm registry check failed for ${name}@${version}: ${response.status} ${response.statusText}`,
    );
  const metadata = await response.json();
  if (
    metadata.name !== name ||
    metadata.version !== version ||
    typeof metadata.dist?.tarball !== "string"
  )
    throw new Error(`${name}@${version} has incomplete npm registry metadata`);
  return true;
}

function normalizeReleaseSet(value) {
  return value
    .split(/[\s,]+/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .sort()
    .join(",");
}
