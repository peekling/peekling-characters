import assert from "node:assert/strict";
import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  parseConfirmedReleaseSet,
  resolveConfirmedPackages,
} from "../scripts/publish-confirmed.mjs";

test("confirmed releases resolve only the explicitly named stable packages", () => {
  assert.deepEqual(
    parseConfirmedReleaseSet(
      "@peekling/pack-byte@0.1.2, @peekling/pack-nib@1.0.0",
    ),
    [
      {
        name: "@peekling/pack-byte",
        version: "0.1.2",
        directory: path.join("packages", "pack-byte"),
      },
      {
        name: "@peekling/pack-nib",
        version: "1.0.0",
        directory: path.join("packages", "pack-nib"),
      },
    ],
  );
});

for (const [label, releaseSet] of [
  ["empty", ""],
  ["foreign scope", "@example/pack-byte@0.1.2"],
  ["prerelease", "@peekling/pack-byte@0.1.2-beta.1"],
  ["duplicate", "@peekling/pack-byte@0.1.2,@peekling/pack-byte@0.1.3"],
])
  test(`confirmed releases reject ${label} input`, () => {
    assert.throws(() => parseConfirmedReleaseSet(releaseSet));
  });

test("confirmed releases must match the committed public package manifest", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "peekling-publish-test-"));
  const directory = path.join(root, "packages", "pack-byte");
  await mkdir(directory, { recursive: true });
  await writeFile(
    path.join(directory, "package.json"),
    JSON.stringify({
      name: "@peekling/pack-byte",
      version: "0.1.1",
      publishConfig: { access: "public" },
    }),
  );

  await assert.rejects(
    resolveConfirmedPackages("@peekling/pack-byte@0.1.2", root),
    /does not match/,
  );
});
