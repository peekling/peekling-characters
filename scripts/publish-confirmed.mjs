import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

export function parseConfirmedReleaseSet(value) {
  if (typeof value !== "string" || value.trim() === "")
    throw new Error("CONFIRMED_RELEASE_SET must name at least one package");

  const seen = new Set();
  return value
    .split(/[\s,]+/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((specifier) => {
      const versionSeparator = specifier.lastIndexOf("@");
      const name = specifier.slice(0, versionSeparator);
      const version = specifier.slice(versionSeparator + 1);
      if (!/^@peekling\/pack-[a-z0-9-]+$/.test(name))
        throw new Error(`Invalid Peekling package name: ${name || specifier}`);
      if (!/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(version))
        throw new Error(`${specifier} does not use a stable semantic version`);
      if (seen.has(name))
        throw new Error(`Duplicate package in confirmed release set: ${name}`);
      seen.add(name);
      return {
        name,
        version,
        directory: path.join("packages", name.slice("@peekling/".length)),
      };
    });
}

export async function resolveConfirmedPackages(value, root = process.cwd()) {
  const entries = parseConfirmedReleaseSet(value);
  return Promise.all(
    entries.map(async (entry) => {
      const directory = path.join(root, entry.directory);
      const manifest = JSON.parse(
        await readFile(path.join(directory, "package.json"), "utf8"),
      );
      if (manifest.name !== entry.name || manifest.version !== entry.version)
        throw new Error(
          `${entry.name}@${entry.version} does not match ${manifest.name}@${manifest.version}`,
        );
      if (manifest.publishConfig?.access !== "public")
        throw new Error(`${entry.name} must declare public npm access`);
      return { ...entry, directory };
    }),
  );
}

async function publishPackage(entry) {
  console.log(`Publishing confirmed package ${entry.name}@${entry.version}`);
  await new Promise((resolve, reject) => {
    const child = spawn("npm", ["publish", "--access", "public"], {
      cwd: entry.directory,
      stdio: "inherit",
      shell: false,
    });
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (code === 0) resolve();
      else
        reject(
          new Error(
            `${entry.name}@${entry.version} publish failed${signal ? ` with signal ${signal}` : ` with exit code ${code}`}`,
          ),
        );
    });
  });
}

async function main() {
  const packages = await resolveConfirmedPackages(
    process.env.CONFIRMED_RELEASE_SET,
  );
  for (const entry of packages) await publishPackage(entry);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url)
  await main();
