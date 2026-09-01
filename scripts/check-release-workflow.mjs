import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const failures = [];
const repositoryUrl = "git+https://github.com/peekling/peekling-characters.git";
const issuesUrl = "https://github.com/peekling/peekling-characters/issues";
const workspace = JSON.parse(await readFile("package.json", "utf8"));
const changesets = JSON.parse(await readFile(".changeset/config.json", "utf8"));
const releasePr = await readFile(".github/workflows/release-pr.yml", "utf8");
const publish = await readFile(".github/workflows/publish.yml", "utf8");

if (workspace.private !== true)
  failures.push("workspace root must remain private");
if (workspace.repository?.url !== repositoryUrl)
  failures.push("workspace repository URL is inconsistent");
if (workspace.bugs?.url !== issuesUrl)
  failures.push("workspace issues URL is inconsistent");
if (workspace.scripts?.release !== "changeset publish")
  failures.push("release must use Changesets publication");
if (
  workspace.scripts?.["generated:check"] !==
  "node scripts/check-generated-drift.mjs"
)
  failures.push("generated pack output must be checked for committed drift");
if (changesets.access !== "public" || changesets.baseBranch !== "main")
  failures.push("Changesets must target public packages from main");
if (
  changesets.privatePackages?.version !== false ||
  changesets.privatePackages?.tag !== false
)
  failures.push("Changesets must not version or tag the private root");

const packageDirectories = (await readdir("packages", { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
if (packageDirectories.length !== 29)
  failures.push(
    `expected 29 pack workspaces, found ${packageDirectories.length}`,
  );
for (const directory of packageDirectories) {
  if (!directory.startsWith("pack-")) {
    failures.push(`${directory} is not a pack workspace`);
    continue;
  }
  const packageManifest = JSON.parse(
    await readFile(path.join("packages", directory, "package.json"), "utf8"),
  );
  if (packageManifest.private === true)
    failures.push(`${directory} remains private`);
  if (packageManifest.publishConfig?.access !== "public")
    failures.push(`${directory} must declare public npm access`);
  if (
    packageManifest.repository?.type !== "git" ||
    packageManifest.repository?.url !== repositoryUrl ||
    packageManifest.repository?.directory !== `packages/${directory}`
  )
    failures.push(`${directory} has inconsistent repository metadata`);
  if (packageManifest.bugs?.url !== issuesUrl)
    failures.push(`${directory} has inconsistent issues metadata`);
}

for (const expected of [
  "changesets/action@a45c4d594aa4e2c509dc14a9f2b3b67ba3780d0d",
  "version: npm run version-packages",
  "pull-requests: write",
])
  if (!releasePr.includes(expected))
    failures.push(`release-pr.yml lacks ${expected}`);
if (/id-token:\s*write/.test(releasePr))
  failures.push("release-pr.yml must not request an OIDC publishing token");

for (const expected of [
  "workflow_dispatch:",
  "workflow_run:",
  "workflows: [Character packs]",
  "github.ref == 'refs/heads/main'",
  "vars.PEEKLING_AUTO_PUBLISH == 'true'",
  "npm run release:candidates -- --github-output",
  'npm run release:candidates -- --require "$CONFIRMED_RELEASE_SET"',
  "environment: npm",
  "id-token: write",
  'node-version: "24"',
  "registry-url: https://registry.npmjs.org",
  "package-manager-cache: false",
  "npm run check",
  "npm run release",
])
  if (!publish.includes(expected))
    failures.push(`publish.yml lacks ${expected}`);
if (/NPM_TOKEN|NODE_AUTH_TOKEN|npm_[A-Za-z0-9]{20,}/.test(publish))
  failures.push("publish.yml must not use a long-lived npm token");

if (failures.length) throw new Error(failures.join("\n"));
console.log(
  "Changesets and OIDC release preparation passed for 29 pack workspaces.",
);
