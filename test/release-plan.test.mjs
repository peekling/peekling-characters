import assert from "node:assert/strict";
import test from "node:test";
import {
  missingReleasePlans,
  parseChangeset,
} from "../scripts/check-pr-release-plan.mjs";

test("a Changeset declares intentional package bump levels", () => {
  const releases = parseChangeset(`---
"@peekling/pack-peek": patch
'@peekling/pack-mochi': minor
---

Improve two friends.
`);
  assert.deepEqual(
    [...releases],
    [
      ["@peekling/pack-peek", "patch"],
      ["@peekling/pack-mochi", "minor"],
    ],
  );
});

test("changed packs without a release declaration are reported", () => {
  assert.deepEqual(
    missingReleasePlans(
      ["pack-peek", "pack-mochi"],
      new Map([["@peekling/pack-peek", "patch"]]),
    ),
    ["@peekling/pack-mochi"],
  );
});

test("invalid Changesets fail closed", () => {
  assert.throws(
    () => parseChangeset("No frontmatter here."),
    /lacks YAML frontmatter/,
  );
  assert.throws(
    () => parseChangeset('---\n"@peekling/pack-peek": tiny\n---\n'),
    /does not name a patch, minor, or major release/,
  );
});
