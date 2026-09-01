import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export function parseChangeset(text) {
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
  if (!frontmatter) throw new Error("changeset lacks YAML frontmatter");
  const releases = new Map();
  for (const line of frontmatter.split(/\r?\n/)) {
    const match = line.match(
      /^\s*["']?(@[^"':\s]+\/[^"':\s]+)["']?\s*:\s*(patch|minor|major)\s*$/,
    );
    if (match) releases.set(match[1], match[2]);
  }
  if (releases.size === 0)
    throw new Error("changeset does not name a patch, minor, or major release");
  return releases;
}

export function missingReleasePlans(changedDirectories, releases) {
  return changedDirectories
    .map((directory) => `@peekling/${directory}`)
    .filter((name) => !releases.has(name))
    .sort();
}

async function main() {
  const base = process.env.BASE_SHA || process.argv[2];
  const head = process.env.HEAD_SHA || process.argv[3] || "HEAD";
  if (!base)
    throw new Error("BASE_SHA or a base revision argument is required");
  const changes = execFileSync(
    "git",
    ["diff", "--name-status", "--find-renames", `${base}...${head}`],
    { encoding: "utf8" },
  )
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split("\t"));
  const changedDirectories = [
    ...new Set(
      changes
        .flatMap((parts) => parts.slice(1))
        .map((file) => file.match(/^packages\/(pack-[^/]+)\//)?.[1])
        .filter(Boolean),
    ),
  ].sort();
  if (changedDirectories.length === 0) {
    console.log("No character package changes need a release plan.");
    return;
  }

  const changedChangesets = changes
    .flatMap(([change, ...files]) => {
      const relevantFiles = change.startsWith("R") ? files.slice(-1) : files;
      return relevantFiles.map((file) => ({ change, file }));
    })
    .filter(
      ({ file }) =>
        /^\.changeset\/[^/]+\.md$/.test(file) &&
        file !== ".changeset/README.md",
    );
  const releases = new Map();
  for (const { change, file } of changedChangesets) {
    let parsed;
    try {
      const text =
        change === "D"
          ? execFileSync("git", ["show", `${base}:${file}`], {
              encoding: "utf8",
            })
          : await readFile(file, "utf8");
      parsed = parseChangeset(text);
    } catch (error) {
      throw new Error(`${file}: ${error.message}`);
    }
    for (const [name, bump] of parsed) releases.set(name, bump);
  }
  const missing = missingReleasePlans(changedDirectories, releases);
  if (missing.length)
    throw new Error(
      `Every character package change needs a contributor-declared Changeset. Choose patch, minor, or major deliberately; automation will not infer it:\n${missing.join("\n")}`,
    );

  const newDirectories = changedDirectories.filter((directory) => {
    try {
      execFileSync(
        "git",
        ["cat-file", "-e", `${base}:packages/${directory}/package.json`],
        { stdio: "ignore" },
      );
      return false;
    } catch {
      return true;
    }
  });
  for (const directory of newDirectories) {
    const name = `@peekling/${directory}`;
    const response = await fetch(
      `https://registry.npmjs.org/${encodeURIComponent(name)}`,
      { headers: { accept: "application/vnd.npm.install-v1+json" } },
    );
    if (response.ok)
      throw new Error(
        `${name} already exists on npm. A new contribution cannot overwrite or assume ownership of an existing package identity.`,
      );
    if (response.status !== 404)
      throw new Error(
        `npm name-conflict check failed for ${name}: ${response.status} ${response.statusText}`,
      );
  }
  console.log(
    `PR release plan covers ${changedDirectories.length} changed character package${changedDirectories.length === 1 ? "" : "s"}; ${newDirectories.length} new npm ${newDirectories.length === 1 ? "name is" : "names are"} available.`,
  );
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url)
  await main();
