import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PNG } from "pngjs";

const DIRECTIONS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

export async function validateCharacterPackFiles({
  root,
  directory,
  manifest,
  packageManifest,
}) {
  const issues = [];
  const identifier = directory.slice("pack-".length);
  if (manifest.format !== 1) issues.push("character format must be 1");
  if (manifest.name !== identifier)
    issues.push(`character name must match ${identifier}`);
  if (packageManifest.name !== `@peekling/${directory}`)
    issues.push(`package name must match @peekling/${directory}`);
  if (manifest.version !== packageManifest.version)
    issues.push("package and character versions must match");
  for (const [label, value] of [
    ["title", manifest.metadata?.title],
    ["description", manifest.metadata?.description],
    ["author", manifest.metadata?.author],
  ])
    if (typeof value !== "string" || !value.trim())
      issues.push(`character metadata ${label} is required`);

  const atlases = manifest.assets?.atlases;
  const columns = atlases?.columns;
  const rows = atlases?.rows;
  const logicalCellSize = atlases?.logicalCellSize;
  if (!Number.isInteger(columns) || columns < 1)
    issues.push("atlas columns must be a positive integer");
  if (!Number.isInteger(rows) || rows < 1)
    issues.push("atlas rows must be a positive integer");
  if (!Number.isInteger(logicalCellSize) || logicalCellSize < 1)
    issues.push("logical cell size must be a positive integer");

  const variants = Array.isArray(atlases?.variants) ? atlases.variants : [];
  const densities = variants.map((variant) => variant?.density).sort();
  if (densities.join(",") !== "1,2,4")
    issues.push("official packs must define exactly 1x, 2x, and 4x atlases");
  const densitySet = new Set();
  for (const variant of variants) {
    const density = variant?.density;
    if (densitySet.has(density))
      issues.push(`atlas density ${density} repeats`);
    densitySet.add(density);
    const expectedSource = `atlas-${density}x.png`;
    if (variant?.src !== expectedSource)
      issues.push(`${density}x atlas must use ${expectedSource}`);
    if (
      Number.isInteger(logicalCellSize) &&
      variant?.sourceCellSize !== logicalCellSize * density
    )
      issues.push(`${density}x source cell size is inconsistent`);
    let bytes;
    let image;
    try {
      bytes = await readFile(path.join(root, variant?.src ?? ""));
      image = PNG.sync.read(bytes);
    } catch {
      issues.push(`${expectedSource} is missing or is not a valid PNG`);
      continue;
    }
    if (
      Number.isInteger(columns) &&
      Number.isInteger(rows) &&
      Number.isInteger(variant?.sourceCellSize) &&
      (image.width !== columns * variant.sourceCellSize ||
        image.height !== rows * variant.sourceCellSize)
    )
      issues.push(`${expectedSource} dimensions do not match its atlas grid`);
    if (createHash("sha256").update(bytes).digest("hex") !== variant?.sha256)
      issues.push(`${expectedSource} does not match its declared SHA-256`);
  }

  try {
    const thumbnail = PNG.sync.read(
      await readFile(path.join(root, "thumbnail.png")),
    );
    if (thumbnail.width !== 64 || thumbnail.height !== 64)
      issues.push("thumbnail.png must be 64x64 pixels");
  } catch {
    issues.push("thumbnail.png is missing or is not a valid PNG");
  }

  const capacity =
    Number.isInteger(columns) && Number.isInteger(rows) ? columns * rows : 0;
  const states = manifest.states;
  if (!states || typeof states !== "object" || Array.isArray(states))
    issues.push("character states must be an object");
  else
    for (const [name, state] of Object.entries(states)) {
      if (!Array.isArray(state?.frames) || state.frames.length === 0)
        issues.push(`${name} must declare at least one frame`);
      else if (
        state.frames.some(
          (frame) => !Number.isInteger(frame) || frame < 0 || frame >= capacity,
        )
      )
        issues.push(`${name} contains a frame outside the atlas grid`);
      const usesFps = Number.isFinite(state?.fps) && state.fps > 0;
      const usesDurations = Array.isArray(state?.durations);
      if (usesFps === usesDurations)
        issues.push(`${name} must use exactly one valid timing mode`);
      if (
        usesDurations &&
        (state.durations.length !== state.frames?.length ||
          state.durations.some(
            (duration) => !Number.isFinite(duration) || duration <= 0,
          ))
      )
        issues.push(`${name} durations must match its frames and be positive`);
      if (typeof state?.loop !== "boolean")
        issues.push(`${name} loop must be true or false`);
    }

  const directions = manifest.capabilities?.locomotion?.directions;
  if (!directions || typeof directions !== "object")
    issues.push("locomotion directions are required");
  else
    for (const direction of DIRECTIONS) {
      const stateName = directions[direction];
      if (typeof stateName !== "string" || !states?.[stateName])
        issues.push(`${direction} must reference a defined movement state`);
    }
  if (
    !Number.isFinite(manifest.defaults?.scale) ||
    manifest.defaults.scale <= 0
  )
    issues.push("default scale must be a positive number");
  return issues;
}
