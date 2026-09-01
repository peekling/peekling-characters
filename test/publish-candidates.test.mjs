import assert from "node:assert/strict";
import test from "node:test";
import { isPublished } from "../scripts/check-publish-candidates.mjs";

test("published-version checks request the npm package document as JSON", async () => {
  const name = "@peekling/pack-x3";
  const version = "0.1.1";
  let request;
  const published = await isPublished(name, version, async (url, options) => {
    request = { url, options };
    return {
      ok: true,
      status: 200,
      async json() {
        return {
          name,
          versions: {
            [version]: {
              dist: { tarball: "https://registry.npmjs.org/example.tgz" },
            },
          },
        };
      },
    };
  });

  assert.equal(published, true);
  assert.equal(request.url, "https://registry.npmjs.org/%40peekling%2Fpack-x3");
  assert.equal(request.options.headers.accept, "application/json");
});

test("a newer published stable version prevents an older back-publish", async () => {
  const published = await isPublished(
    "@peekling/pack-vali",
    "0.1.0",
    async () => ({
      ok: true,
      status: 200,
      async json() {
        return {
          name: "@peekling/pack-vali",
          versions: {
            "0.1.1": {
              dist: { tarball: "https://registry.npmjs.org/example.tgz" },
            },
          },
        };
      },
    }),
  );

  assert.equal(published, true);
});

test("an absent npm version remains an unpublished candidate", async () => {
  const published = await isPublished(
    "@peekling/pack-x3",
    "0.1.1",
    async () => ({ ok: false, status: 404 }),
  );

  assert.equal(published, false);
});
