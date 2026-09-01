import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { format } from "prettier";

const author = "Prajwal S. Venkateshmurthy";
const authorUrl = "https://prajwal.me";
const apacheLicense = await readFile("LICENSE", "utf8");
const packageDirectories = (await readdir("packages", { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && entry.name.startsWith("pack-"))
  .map((entry) => entry.name)
  .sort();

for (const directory of packageDirectories) {
  const root = path.join("packages", directory);
  const id = directory.slice("pack-".length);
  const title = id[0].toUpperCase() + id.slice(1);
  const packagePath = path.join(root, "package.json");
  const manifestPath = path.join(root, "character.json");
  const packageText = await readFile(packagePath, "utf8");
  const manifestText = await readFile(manifestPath, "utf8");
  const packageManifest = JSON.parse(packageText);
  const manifest = JSON.parse(manifestText);
  const originalPackageData = JSON.stringify(packageManifest);
  const originalManifestData = JSON.stringify(manifest);
  const introduction =
    id === "x3"
      ? "X3 is an independently publishable, data-only character pack for Peekling. Its two cyan LED eyes express 100 named states across rest, gaze, emotion, interaction, lifecycle, and motion without displaying identity text."
      : id === "posh"
        ? "Posh is an independently publishable, data-only character pack for Peekling. Its pearl-white orb and expressive navy eyes perform 100 named states across rest, gaze, emotion, interaction, lifecycle, and motion."
        : `${title} is an independently publishable, data-only character pack for Peekling. It uses the adaptive native v0.1 profile with 64, 128, and 256px source cells.`;

  delete packageManifest.private;
  packageManifest.license = "Apache-2.0";
  packageManifest.author = { name: author, url: authorUrl };
  packageManifest.repository = {
    type: "git",
    url: "git+https://github.com/peekling/peekling-characters.git",
    directory: `packages/${directory}`,
  };
  packageManifest.bugs = {
    url: "https://github.com/peekling/peekling-characters/issues",
  };
  packageManifest.publishConfig = { access: "public" };
  packageManifest.files = [
    "character.json",
    "atlas-1x.png",
    "atlas-2x.png",
    "atlas-4x.png",
    "thumbnail.png",
    "LICENSE",
    "NOTICE",
    "README.md",
  ];
  manifest.license = "Apache-2.0";
  manifest.metadata.author = author;

  if (JSON.stringify(packageManifest) !== originalPackageData)
    await writeFile(
      packagePath,
      await format(JSON.stringify(packageManifest), { parser: "json" }),
    );
  if (JSON.stringify(manifest) !== originalManifestData)
    await writeFile(
      manifestPath,
      await format(JSON.stringify(manifest), { parser: "json" }),
    );
  await writeFile(path.join(root, "LICENSE"), apacheLicense);
  await writeFile(
    path.join(root, "NOTICE"),
    `${title} Character Pack\nCopyright 2026 ${author}\n\nOriginal design and development of ${title} by ${author}.\nContact: ${authorUrl}\nProject: https://peekling.com/\n`,
  );
  await writeFile(
    path.join(root, "README.md"),
    `# \`@peekling/pack-${id}\`\n\n${introduction}\n\n## Install\n\n\`\`\`sh\nnpm install @peekling/pack-${id}@${packageManifest.version}\n\`\`\`\n\nThe package contains \`character.json\`, its referenced atlases, \`thumbnail.png\`, and the applicable public legal records. Atlas hashes are recorded in \`character.json\`. Development scripts, source material, and tests stay in this monorepo and are not published.\n\n${title} is licensed under Apache-2.0. Redistributions must comply with Section 4 of the Apache License 2.0, including its applicable notice-retention requirements. See this package's \`LICENSE\` and \`NOTICE\` files.\n\nRun \`npm test -w @peekling/pack-${id}\` to validate the pack, or \`npm run build -w @peekling/pack-${id}\` to rebuild and run artwork QA.\n`,
  );
}

console.log(`Synchronized ${packageDirectories.length} public pack records.`);
