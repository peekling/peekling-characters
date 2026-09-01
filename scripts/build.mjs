import { execFileSync } from "node:child_process";
import { readdir } from "node:fs/promises";

execFileSync(process.execPath, ["scripts/build-character-roster.mjs"], {
  stdio: "inherit",
});
execFileSync("npm", ["run", "build", "-w", "@peekling/pack-x3"], {
  stdio: "inherit",
});
execFileSync(process.execPath, ["scripts/sync-pack-release-metadata.mjs"], {
  stdio: "inherit",
});

const names = (await readdir("packages", { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && entry.name.startsWith("pack-"))
  .map((entry) => entry.name.slice(5))
  .sort();

for (const name of names)
  execFileSync(process.execPath, ["scripts/qa-character-pack.mjs", name], {
    stdio: "inherit",
  });
