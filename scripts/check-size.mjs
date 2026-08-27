import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const roster = [];
for (const entry of await readdir("packages", { withFileTypes: true })) {
  if (!entry.isDirectory() || !entry.name.startsWith("pack-")) continue;
  const root = path.join("packages", entry.name);
  const manifest = JSON.parse(
    await readFile(path.join(root, "character.json"), "utf8"),
  );
  const variants = [];
  for (const variant of manifest.assets.atlases?.variants ?? []) {
    const atlas = await stat(path.join(root, variant.src));
    const rows = manifest.assets.atlases.rows;
    const cell = variant.sourceCellSize;
    const measured = {
      density: variant.density,
      downloadBytes: atlas.size,
      decodeBytes: 16 * cell * rows * cell * 4,
    };
    if (measured.downloadBytes > 4 * 1024 * 1024)
      throw new Error(`${entry.name} ${variant.density}x exceeds 4 MiB`);
    if (measured.decodeBytes > 16 * 1024 * 1024)
      throw new Error(
        `${entry.name} ${variant.density}x exceeds 16 MiB decoded`,
      );
    variants.push(measured);
  }
  roster.push({ character: entry.name.slice(5), variants });
}

roster.sort((a, b) => a.character.localeCompare(b.character));
await mkdir("artifacts", { recursive: true });
await writeFile(
  "artifacts/roster-size-report.json",
  `${JSON.stringify({ generatedBy: "scripts/check-size.mjs", roster }, null, 2)}\n`,
);
console.log(
  JSON.stringify(
    {
      rosterPacksMeasured: roster.length,
      report: "artifacts/roster-size-report.json",
    },
    null,
    2,
  ),
);
