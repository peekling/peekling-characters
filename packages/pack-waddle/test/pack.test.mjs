import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Waddle uses Apache-2.0 HD art and declarative waddle motion", async () => {
  const pack = JSON.parse(
    await readFile(new URL("../character.json", import.meta.url)),
  );
  assert.equal(pack.private, undefined);
  assert.equal(pack.capabilities.locomotion.directions.E, "waddle:E");
  assert.ok(pack.capabilities.locomotion.motion.keyframes.length >= 2);
  assert.deepEqual(
    pack.assets.atlases.variants.map(({ density }) => density),
    [1, 2, 4],
  );
});
