import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { validatePublishablePack } from "../scripts/license-policy.mjs";

const author = "Prajwal S. Venkateshmurthy";
const authorUrl = "https://prajwal.me";
const packageDirectories = (await readdir("packages", { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && entry.name.startsWith("pack-"))
  .map((entry) => entry.name)
  .sort();
const repositoryLicense = await readFile("LICENSE", "utf8");

test("the private workspace preserves public authorship metadata", async () => {
  const workspace = JSON.parse(await readFile("package.json", "utf8"));
  const notice = await readFile("NOTICE", "utf8");

  assert.deepEqual(workspace.author, { name: author, url: authorUrl });
  assert.match(notice, /Prajwal S\. Venkateshmurthy/);
  assert.match(notice, /Contact: https:\/\/prajwal\.me/);
});

test("all official packs expose the independent release boundary", async () => {
  assert.equal(packageDirectories.length, 28);
  for (const directory of packageDirectories) {
    const root = path.join("packages", directory);
    const manifest = JSON.parse(
      await readFile(path.join(root, "character.json"), "utf8"),
    );
    const packageManifest = JSON.parse(
      await readFile(path.join(root, "package.json"), "utf8"),
    );
    const license = await readFile(path.join(root, "LICENSE"), "utf8");
    const notice = await readFile(path.join(root, "NOTICE"), "utf8");
    const readme = await readFile(path.join(root, "README.md"), "utf8");
    const id = directory.slice("pack-".length);

    assert.equal(packageManifest.name, `@peekling/pack-${id}`);
    assert.notEqual(packageManifest.private, true);
    assert.equal(packageManifest.license, "Apache-2.0");
    assert.deepEqual(packageManifest.author, { name: author, url: authorUrl });
    assert.deepEqual(packageManifest.repository, {
      type: "git",
      url: "git+https://github.com/peekling/peekling-characters.git",
      directory: `packages/${directory}`,
    });
    assert.deepEqual(packageManifest.bugs, {
      url: "https://github.com/peekling/peekling-characters/issues",
    });
    assert.deepEqual(packageManifest.publishConfig, { access: "public" });
    assert.equal(manifest.name, id);
    assert.equal(manifest.license, "Apache-2.0");
    assert.equal(manifest.metadata.author, author);
    assert.equal(license, repositoryLicense);
    assert.match(notice, new RegExp(author.replaceAll(".", "\\.")));
    assert.match(notice, /Contact: https:\/\/prajwal\.me/);
    assert.match(
      readme,
      new RegExp(`npm install @peekling/pack-${id}@0\\.1\\.0`),
    );
    assert.doesNotMatch(
      `${notice}\n${readme}`,
      /UNLICENSED|must not be published/i,
    );
    assert.deepEqual(
      validatePublishablePack({
        manifest,
        packageManifest,
        licenseText: license,
        noticeText: notice,
        files: ["package.json", ...packageManifest.files],
      }),
      [],
    );
  }
});
