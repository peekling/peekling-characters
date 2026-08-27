import { access, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const start = "<!-- PACK_ROSTER_START -->";
const end = "<!-- PACK_ROSTER_END -->";
const check = process.argv.includes("--check");
const packageDirectories = (await readdir("packages", { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && entry.name.startsWith("pack-"))
  .map((entry) => entry.name)
  .sort();
const seenPackages = new Set();
const packages = [];

for (const directory of packageDirectories) {
  const packageManifest = JSON.parse(
    await readFile(path.join("packages", directory, "package.json"), "utf8"),
  );
  const character = JSON.parse(
    await readFile(path.join("packages", directory, "character.json"), "utf8"),
  );
  const expectedName = `@peekling/${directory}`;
  if (packageManifest.name !== expectedName)
    throw new Error(`${directory} must use package name ${expectedName}`);
  if (seenPackages.has(packageManifest.name))
    throw new Error(`duplicate package name: ${packageManifest.name}`);
  seenPackages.add(packageManifest.name);
  if (character.name !== directory.slice("pack-".length))
    throw new Error(`${directory} has a stale character name`);
  if (character.version !== packageManifest.version)
    throw new Error(
      `${directory} has mismatched package and character versions`,
    );
  await access(path.join("packages", directory, "thumbnail.png"));
  const title = tableCell(character.metadata?.title);
  const description = tableCell(character.metadata?.description);
  if (!title || !description)
    throw new Error(`${directory} lacks a title or description`);
  packages.push({ directory, packageManifest, title, description });
}

const roster = await Promise.all(
  packages.map(async (entry) => ({
    ...entry,
    metadata: await publishedMetadata(entry.packageManifest.name),
  })),
);
const publishedCount = roster.filter((entry) => entry.metadata).length;
const unreleasedCount = roster.length - publishedCount;
const rows = roster.map(
  ({ directory, packageManifest, title, description, metadata }) => {
    const version = metadata
      ? `\`${metadata.version}\``
      : `\`${packageManifest.version}\` (unreleased)`;
    const packageCell = metadata
      ? `[\`${packageManifest.name}\`](https://www.npmjs.com/package/${packageManifest.name}/v/${metadata.version})`
      : `\`${packageManifest.name}\` (unreleased)`;
    return `| ![${title}](packages/${directory}/thumbnail.png) | [${title}](packages/${directory}) | ${description} | ${version} | ${packageCell} |`;
  },
);

const publicationSummary = `${publishedCount} character packs are published and installable from npm. ${unreleasedCount} ${unreleasedCount === 1 ? "pack is" : "packs are"} shown as unreleased for future follow-up.`;

const table = [
  start,
  publicationSummary,
  "",
  "| Preview | Character | Description | Version | Package |",
  "| :---: | --- | --- | --- | --- |",
  ...rows,
  end,
].join("\n");
const readme = await readFile("README.md", "utf8");
const startIndex = readme.indexOf(start);
const endIndex = readme.indexOf(end);
if (startIndex < 0 || endIndex < startIndex)
  throw new Error("README.md lacks the generated pack roster markers");
const updated = `${readme.slice(0, startIndex)}${table}${readme.slice(endIndex + end.length)}`;

if (check) {
  if (updated !== readme)
    throw new Error("README.md pack roster is stale; run npm run roster");
  console.log(
    `README pack roster is current for ${publishedCount} published and ${unreleasedCount} unreleased packages.`,
  );
} else {
  await writeFile("README.md", updated);
  console.log(
    `Updated README pack roster for ${publishedCount} published and ${unreleasedCount} unreleased packages.`,
  );
}

async function publishedMetadata(name) {
  const url = `https://registry.npmjs.org/${encodeURIComponent(name)}`;
  const response = await fetch(url, {
    headers: { accept: "application/vnd.npm.install-v1+json" },
  });
  if (response.status === 404) return null;
  if (!response.ok)
    throw new Error(
      `npm registry check failed for ${name}: ${response.status} ${response.statusText}`,
    );
  const packageMetadata = await response.json();
  const latestVersion = packageMetadata["dist-tags"]?.latest;
  const metadata = packageMetadata.versions?.[latestVersion];
  if (
    metadata?.name !== name ||
    metadata?.version !== latestVersion ||
    typeof metadata.dist?.tarball !== "string"
  )
    throw new Error(`${name} has incomplete npm registry metadata`);
  return metadata;
}

function tableCell(value) {
  return typeof value === "string"
    ? value.trim().replaceAll("|", "\\|").replaceAll(/\s+/g, " ")
    : "";
}
