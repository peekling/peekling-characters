import path from "node:path";

const LICENSE_ID =
  /^(?:[A-Za-z0-9][A-Za-z0-9.-]{0,63}|DocumentRef-[A-Za-z0-9][A-Za-z0-9.-]{0,31}:LicenseRef-[A-Za-z0-9][A-Za-z0-9.-]{0,31}|LicenseRef-[A-Za-z0-9][A-Za-z0-9.-]{0,63})$/;
const PACKAGE_NAME = /^@peekling\/pack-[a-z0-9][a-z0-9-]*$/;
const SAFE_PATH = /^[A-Za-z0-9][A-Za-z0-9._/-]{0,255}$/;
const VERSION = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;

export function validatePublishablePack({
  manifest,
  packageManifest,
  licenseText,
  noticeText,
  files,
}) {
  const issues = [];
  if (!manifest || !packageManifest)
    return ["character.json and package.json are required"];

  const available = new Set(files ?? []);
  for (const file of [
    "package.json",
    "character.json",
    "thumbnail.png",
    "LICENSE",
    "README.md",
  ])
    if (!available.has(file)) issues.push(`${file} must be packaged`);

  if (packageManifest.private === true)
    issues.push("publishable pack cannot remain private");
  if (!PACKAGE_NAME.test(packageManifest.name ?? ""))
    issues.push("package name must use @peekling/pack-*");
  if (!VERSION.test(packageManifest.version ?? ""))
    issues.push("package version must be a semantic version");
  if (!LICENSE_ID.test(manifest.license ?? ""))
    issues.push(
      "manifest license must be an SPDX identifier or bounded LicenseRef",
    );
  if (packageManifest.license !== manifest.license)
    issues.push("package and manifest license identifiers must match");
  if (
    typeof packageManifest.author?.name !== "string" ||
    !packageManifest.author.name.trim()
  )
    issues.push("package author name is required");
  if (
    typeof manifest.metadata?.author !== "string" ||
    !manifest.metadata.author.trim()
  )
    issues.push("manifest author name is required");
  if (
    typeof licenseText !== "string" ||
    licenseText.trim().length < 20 ||
    /\b(?:unlicensed|no licen[cs]e|no (?:right|permission).{0,40}(?:distribut|redistribut))\b/i.test(
      licenseText,
    )
  )
    issues.push("LICENSE must contain non-contradictory full license terms");

  if (manifest.license === "Apache-2.0") {
    if (!available.has("NOTICE"))
      issues.push("Apache-2.0 official packs must package NOTICE");
    if (typeof noticeText !== "string" || noticeText.trim().length < 20)
      issues.push("NOTICE must contain the applicable attribution");
  }

  const variants = manifest.assets?.atlases?.variants;
  if (!Array.isArray(variants) || variants.length === 0)
    issues.push("character.json must reference at least one atlas");
  else {
    const referencedAtlases = new Set();
    for (const variant of variants) {
      const source = variant?.src;
      if (!isSafeFile(source)) {
        issues.push(`character.json contains an invalid atlas path: ${source}`);
        continue;
      }
      if (referencedAtlases.has(source))
        issues.push(`character.json repeats atlas path: ${source}`);
      referencedAtlases.add(source);
      if (!available.has(source))
        issues.push(`referenced atlas is not packaged: ${source}`);
      if (!Number.isInteger(variant.density) || variant.density < 1)
        issues.push(`${source} has an invalid density`);
      if (
        !Number.isInteger(variant.sourceCellSize) ||
        variant.sourceCellSize < 1
      )
        issues.push(`${source} has an invalid source cell size`);
      if (!/^[a-f0-9]{64}$/.test(variant.sha256 ?? ""))
        issues.push(`${source} has an invalid SHA-256 hash`);
    }
    for (const file of available)
      if (
        file.endsWith(".png") &&
        file !== "thumbnail.png" &&
        !referencedAtlases.has(file)
      )
        issues.push(`packaged atlas is not referenced: ${file}`);
  }

  for (const file of available)
    if (!isSafeFile(file))
      issues.push(`package contains an invalid path: ${file}`);

  return issues;
}

function isSafeFile(file) {
  return (
    typeof file === "string" &&
    SAFE_PATH.test(file) &&
    !path.isAbsolute(file) &&
    !file.split("/").includes("..") &&
    !/[*?{}[\]]/.test(file)
  );
}
