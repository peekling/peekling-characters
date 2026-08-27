import assert from "node:assert/strict";
import test from "node:test";
import { validatePublishablePack } from "../scripts/license-policy.mjs";

const valid = () => ({
  manifest: {
    license: "Apache-2.0",
    metadata: { author: "Example Artist" },
    assets: {
      atlases: {
        variants: [
          {
            src: "atlas-1x.png",
            density: 1,
            sourceCellSize: 64,
            sha256: "a".repeat(64),
          },
        ],
      },
    },
  },
  packageManifest: {
    name: "@peekling/pack-example",
    version: "1.0.0",
    license: "Apache-2.0",
    author: { name: "Example Artist" },
  },
  licenseText: "Apache License Version 2.0 full license terms.",
  noticeText: "Example attribution notice for the character pack.",
  files: [
    "package.json",
    "README.md",
    "LICENSE",
    "NOTICE",
    "character.json",
    "atlas-1x.png",
    "thumbnail.png",
  ],
});

test("the simplified publishable pack contract passes", () => {
  assert.deepEqual(validatePublishablePack(valid()), []);
});

test("missing metadata and required package files fail", () => {
  assert.match(
    validatePublishablePack({})[0],
    /character.json and package.json/,
  );
  const fixture = valid();
  fixture.files = ["package.json", "character.json"];
  assert.match(
    validatePublishablePack(fixture).join("\n"),
    /thumbnail.png|LICENSE|README.md|NOTICE/,
  );
});

test("license mismatches and contradictory terms fail", () => {
  const fixture = valid();
  fixture.packageManifest.license = "MIT";
  fixture.licenseText = "No license or permission to redistribute is granted.";
  assert.match(
    validatePublishablePack(fixture).join("\n"),
    /identifiers must match|non-contradictory/,
  );
});

test("unsafe, missing, duplicate, and unreferenced atlases fail", () => {
  const fixture = valid();
  fixture.manifest.assets.atlases.variants = [
    {
      src: "../atlas.png",
      density: 0,
      sourceCellSize: 0,
      sha256: "bad",
    },
    {
      src: "atlas-2x.png",
      density: 2,
      sourceCellSize: 128,
      sha256: "b".repeat(64),
    },
    {
      src: "atlas-2x.png",
      density: 2,
      sourceCellSize: 128,
      sha256: "b".repeat(64),
    },
  ];
  fixture.files.push("unused.png");
  assert.match(
    validatePublishablePack(fixture).join("\n"),
    /invalid atlas path|not packaged|repeats atlas|not referenced/,
  );
});
