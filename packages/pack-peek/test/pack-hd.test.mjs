import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validatePublishablePack } from "../../../scripts/license-policy.mjs";

test("publishable Peek pack is licensed, adaptive, and hash-addressed", async () => {
  const manifest = JSON.parse(
    await readFile(new URL("../character.json", import.meta.url), "utf8"),
  );
  const packageManifest = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );
  assert.equal(packageManifest.name, "@peekling/pack-peek");
  assert.notEqual(packageManifest.private, true);
  assert.deepEqual(packageManifest.author, {
    name: "Prajwal S. Venkateshmurthy",
    url: "https://prajwal.me",
  });
  assert.equal(manifest.license, "Apache-2.0");
  assert.equal(manifest.metadata.author, "Prajwal S. Venkateshmurthy");
  assert.deepEqual(manifest.metadata.tags, [
    "peek",
    "native-v0.1",
    "hd-adaptive",
  ]);
  assert.equal(manifest.assets.atlases.columns, 16);
  assert.equal(manifest.assets.atlases.logicalCellSize, 64);
  assert.deepEqual(
    manifest.assets.atlases.variants.map(({ density }) => density),
    [1, 2, 4],
  );
  for (const variant of manifest.assets.atlases.variants) {
    const atlas = await readFile(new URL(`../${variant.src}`, import.meta.url));
    assert.equal(atlas.readUInt32BE(16), 16 * variant.sourceCellSize);
    assert.equal(atlas.readUInt32BE(20), 3 * variant.sourceCellSize);
    assert.equal(
      createHash("sha256").update(atlas).digest("hex"),
      variant.sha256,
    );
  }
  assert.deepEqual(
    validatePublishablePack({
      manifest,
      packageManifest,
      licenseText: await readFile(
        new URL("../LICENSE", import.meta.url),
        "utf8",
      ),
      noticeText: await readFile(new URL("../NOTICE", import.meta.url), "utf8"),
      files: ["package.json", ...packageManifest.files],
    }),
    [],
  );
});
