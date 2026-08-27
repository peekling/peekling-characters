import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { validatePublishablePack } from "./license-policy.mjs";

const failures = [];
const packages = await readdir("packages", { withFileTypes: true });
const workspace = JSON.parse(await readFile("package.json", "utf8"));
const gitignore = await readFile(".gitignore", "utf8");

if (workspace.private !== true)
  failures.push("the characters monorepo root must remain private");
if (
  workspace.scripts?.prepublishOnly !== "node scripts/refuse-root-publish.mjs"
)
  failures.push("the private workspace must refuse root publication");
for (const ignoredInstruction of ["/AGENTS.md", "/CLAUDE.md"])
  if (!gitignore.split(/\r?\n/).includes(ignoredInstruction))
    failures.push(
      `${ignoredInstruction} must remain root-anchored in .gitignore`,
    );
if (
  !Array.isArray(workspace.workspaces) ||
  workspace.workspaces.length !== 1 ||
  workspace.workspaces[0] !== "packages/*"
)
  failures.push("the root workspace must cover packages/* exactly");

for (const entry of packages) {
  if (!entry.isDirectory()) continue;
  if (!entry.name.startsWith("pack-"))
    failures.push(`${entry.name} is not an independent pack-* package`);
  const root = path.join("packages", entry.name);
  const metadata = JSON.parse(
    await readFile(path.join(root, "package.json"), "utf8"),
  );
  for (const required of [
    "README.md",
    "LICENSE",
    "NOTICE",
    "character.json",
    "thumbnail.png",
    "test",
  ])
    await access(path.join(root, required)).catch(() =>
      failures.push(`${entry.name} lacks ${required}`),
    );
  if (!metadata.name?.startsWith("@peekling/"))
    failures.push(`${entry.name} lacks a Peekling package identity`);
  const publishablePack =
    entry.name.startsWith("pack-") && metadata.private !== true;
  if (!publishablePack)
    failures.push(`${entry.name} must remain independently publishable`);
  if (!metadata.scripts?.test)
    failures.push(`${entry.name} lacks an independent test command`);

  if (publishablePack) {
    const files = [
      "package.json",
      ...(metadata.files ?? []).filter(
        (file) => typeof file === "string" && !file.includes("*"),
      ),
    ];
    const readJson = async (file) =>
      JSON.parse(await readFile(path.join(root, file), "utf8"));
    const packIssues = validatePublishablePack({
      manifest: await readJson("character.json"),
      packageManifest: metadata,
      licenseText: await readFile(path.join(root, "LICENSE"), "utf8"),
      noticeText: await readFile(path.join(root, "NOTICE"), "utf8"),
      files,
    });
    failures.push(...packIssues.map((issue) => `${entry.name}: ${issue}`));
  }
}

const publicText = await repositoryText(".");
for (const forbidden of [
  "/Users/",
  "CONTEXT.md",
  "daijin",
  "oleafly",
  "maltipoo",
  "leaf-queen",
])
  if (publicText.toLowerCase().includes(forbidden.toLowerCase()))
    failures.push(`repository contains forbidden reference: ${forbidden}`);

if (failures.length) throw new Error(failures.join("\n"));
console.log(
  "Character repository boundaries and public pack license gates passed.",
);

async function repositoryText(root) {
  let output = "";
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (
      [".git", "artifacts", "node_modules", "AGENTS.md", "CLAUDE.md"].includes(
        entry.name,
      )
    )
      continue;
    const target = path.join(root, entry.name);
    if (entry.isDirectory()) output += await repositoryText(target);
    else if (target.endsWith("scripts/check-boundaries.mjs")) continue;
    else if (/\.(?:md|json|mjs)$/.test(entry.name))
      output += await readFile(target, "utf8");
  }
  return output;
}
