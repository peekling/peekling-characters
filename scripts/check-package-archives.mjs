import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";

const archives = JSON.parse(
  execFileSync("npm", ["pack", "--dry-run", "--json", "--workspaces"], {
    encoding: "utf8",
  }),
);
const required = [
  "LICENSE",
  "NOTICE",
  "README.md",
  "character.json",
  "atlas-1x.png",
  "atlas-2x.png",
  "atlas-4x.png",
  "thumbnail.png",
  "package.json",
];
const failures = [];
const repositoryLicense = await readFile("LICENSE", "utf8");

if (archives.length !== 30)
  failures.push(`expected 30 package dry-runs, received ${archives.length}`);

for (const archive of archives) {
  const files = new Set(archive.files.map((file) => file.path));
  const directory = path.join(
    "packages",
    archive.name.slice("@peekling/".length),
  );
  const packageManifestText = await readFile(
    path.join(directory, "package.json"),
    "utf8",
  );
  const characterManifestText = await readFile(
    path.join(directory, "character.json"),
    "utf8",
  );
  const packageManifest = JSON.parse(packageManifestText);
  const characterManifest = JSON.parse(characterManifestText);
  const notice = await readFile(path.join(directory, "NOTICE"), "utf8");
  const license = await readFile(path.join(directory, "LICENSE"), "utf8");
  if (!archive.name.startsWith("@peekling/pack-"))
    failures.push(`${archive.name} lacks an independent pack identity`);
  if (archive.version !== "0.1.0")
    failures.push(`${archive.name} changed its release version`);
  if (packageManifest.private === true)
    failures.push(`${archive.name} remains private`);
  if (
    packageManifest.license !== "Apache-2.0" ||
    characterManifest.license !== "Apache-2.0"
  )
    failures.push(`${archive.name} lacks consistent Apache-2.0 metadata`);
  if (/UNLICENSED/i.test(`${packageManifestText}\n${characterManifestText}`))
    failures.push(`${archive.name} retains holding metadata`);
  if (license !== repositoryLicense)
    failures.push(`${archive.name} has a modified Apache-2.0 LICENSE`);
  if (
    !notice.includes("Prajwal S. Venkateshmurthy.\nContact: https://prajwal.me")
  )
    failures.push(`${archive.name} lacks the required NOTICE contact line`);
  for (const file of required)
    if (!files.has(file)) failures.push(`${archive.name} omits ${file}`);
  for (const file of files)
    if (
      file === "atlas.png" ||
      file === "AGENTS.md" ||
      file === "CLAUDE.md" ||
      file.startsWith("scripts/") ||
      file.startsWith("test/")
    )
      failures.push(`${archive.name} includes unexpected ${file}`);
}

if (failures.length) throw new Error(failures.join("\n"));

const sizes = archives.map((archive) => archive.size);
console.log(
  JSON.stringify(
    {
      packages: archives.length,
      entriesPerPackage: [
        ...new Set(archives.map((archive) => archive.entryCount)),
      ],
      minTarballBytes: Math.min(...sizes),
      maxTarballBytes: Math.max(...sizes),
      totalTarballBytes: sizes.reduce((total, size) => total + size, 0),
    },
    null,
    2,
  ),
);
