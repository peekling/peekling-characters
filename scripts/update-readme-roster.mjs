import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const start = "<!-- PACK_ROSTER_START -->";
const end = "<!-- PACK_ROSTER_END -->";
const check = process.argv.includes("--check");
const packageDirectories = (await readdir("packages", { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && entry.name.startsWith("pack-"))
  .map((entry) => entry.name)
  .sort();
const seenPackages = new Set();
const rows = [];

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
  const title = tableCell(character.metadata?.title);
  const description = tableCell(character.metadata?.description);
  if (!title || !description)
    throw new Error(`${directory} lacks a title or description`);
  rows.push(
    `| [${title}](packages/${directory}) | \`${packageManifest.name}\` | \`${packageManifest.version}\` | ${description} |`,
  );
}

const table = [
  start,
  "| Character | npm Package | Version | Description |",
  "| --- | --- | --- | --- |",
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
  console.log(`README pack roster is current for ${rows.length} packages.`);
} else {
  await writeFile("README.md", updated);
  console.log(`Updated README pack roster for ${rows.length} packages.`);
}

function tableCell(value) {
  return typeof value === "string"
    ? value.trim().replaceAll("|", "\\|").replaceAll(/\s+/g, " ")
    : "";
}
