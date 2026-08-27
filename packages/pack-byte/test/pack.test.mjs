import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Byte is an Apache-2.0 adaptive HD native gallery pack", async () => {
  const pack = JSON.parse(
    await readFile(new URL("../character.json", import.meta.url)),
  );
  assert.deepEqual(
    pack.assets.atlases.variants.map(({ density }) => density),
    [1, 2, 4],
  );
  assert.equal(pack.assets.atlases.logicalCellSize, 64);
  assert.equal(pack.capabilities.locomotion.directions.E, "prowl:E");
});
