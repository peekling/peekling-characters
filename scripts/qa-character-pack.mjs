import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const repositoryRoot = fileURLToPath(new URL("..", import.meta.url));

const name = process.argv[2];
if (!/^[a-z][a-z0-9-]*$/.test(name ?? ""))
  throw new Error("Usage: qa-character-pack.mjs <character>");
const root = path.join(repositoryRoot, "packages", `pack-${name}`);
const manifest = JSON.parse(
  await readFile(path.join(root, "character.json"), "utf8"),
);
const failures = [];
const images = new Map();
for (const variant of manifest.assets.atlases.variants) {
  const bytes = await readFile(path.join(root, variant.src));
  const image = PNG.sync.read(bytes);
  images.set(variant.density, image);
  if (
    image.width !== 16 * variant.sourceCellSize ||
    image.height !== 3 * variant.sourceCellSize
  )
    failures.push(`${variant.density}x geometry is invalid`);
  if (createHash("sha256").update(bytes).digest("hex") !== variant.sha256)
    failures.push(`${variant.density}x hash is invalid`);
  if (![3, 4, 6].includes(image.colorType))
    failures.push(`${variant.density}x lacks alpha`);
}

const one = images.get(1);
const four = images.get(4);
const used = [
  ...new Set(Object.values(manifest.states).flatMap((state) => state.frames)),
];
const locomotionStates = new Set(
  Object.values(manifest.capabilities.locomotion.directions),
);
const metrics = used.map((frame) => metric(one, frame, 64));
for (const item of metrics) {
  if (!item.visible) failures.push(`frame ${item.frame} is empty`);
  if (item.minX === 0 || item.minY === 0 || item.maxX === 63)
    failures.push(`frame ${item.frame} touches a non-ground edge`);
  if (item.occupancy < 0.08 || item.occupancy > 0.8)
    failures.push(`frame ${item.frame} occupancy is implausible`);
}
for (const [stateName, state] of Object.entries(manifest.states)) {
  if ((state.fps === undefined) === (state.durations === undefined))
    failures.push(`${stateName} must use exactly one timing mode`);
  if (locomotionStates.has(stateName)) {
    const [a, b] = state.frames;
    const delta = difference(one, a, b, 64);
    if (delta < 1.5 || delta > 110)
      failures.push(
        `${stateName} pair difference ${delta.toFixed(2)} is implausible`,
      );
    const ma = metric(one, a, 64);
    const mb = metric(one, b, 64);
    if (Math.abs(ma.maxY - mb.maxY) > 6)
      failures.push(`${stateName} baseline moves more than 6 logical pixels`);
  }
}
if (uniqueColors(four) <= uniqueColors(one))
  failures.push(
    "4x source has no additional color detail over the 1x derivative",
  );

const artifact = path.join(repositoryRoot, "artifacts/art", name);
const loops = Object.entries(manifest.states)
  .filter(([, state]) => state.loop)
  .map(
    ([stateName, state]) =>
      `<figure><div class="frames">${state.frames.map((frame) => `<i style="--x:${frame % 16};--y:${Math.floor(frame / 16)}"></i>`).join("")}</div><figcaption>${stateName}</figcaption></figure>`,
  )
  .join("");
await writeFile(
  path.join(artifact, "loop-review.html"),
  `<!doctype html><meta charset="utf-8"><title>${name} loop review</title><style>body{font:16px system-ui;background:#fafafa;color:#262626}.frames{display:flex;gap:8px}.frames i{width:128px;height:128px;background:url(../../../packages/pack-${name}/atlas-1x.png) calc(var(--x)*-128px) calc(var(--y)*-128px)/2048px 384px no-repeat}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}</style><h1>${name} deterministic loop review</h1><main>${loops}</main>`,
);
if (failures.length)
  throw new Error(`${name} artwork QA failed:\n- ${failures.join("\n- ")}`);
console.log(
  `${name} artwork QA passed: ${used.length} dense frames, adaptive 1x/2x/4x.`,
);

function metric(image, frame, cell) {
  let minX = cell,
    minY = cell,
    maxX = -1,
    maxY = -1,
    visible = 0;
  const originX = (frame % 16) * cell;
  const originY = Math.floor(frame / 16) * cell;
  for (let y = 0; y < cell; y++)
    for (let x = 0; x < cell; x++) {
      const alpha =
        image.data[((originY + y) * image.width + originX + x) * 4 + 3];
      if (alpha <= 8) continue;
      visible++;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  return {
    frame,
    minX,
    minY,
    maxX,
    maxY,
    visible,
    occupancy: visible / (cell * cell),
  };
}

function difference(image, a, b, cell) {
  let total = 0;
  for (let y = 0; y < cell; y++)
    for (let x = 0; x < cell; x++)
      for (let channel = 0; channel < 4; channel++) {
        const ai =
          ((Math.floor(a / 16) * cell + y) * image.width +
            (a % 16) * cell +
            x) *
            4 +
          channel;
        const bi =
          ((Math.floor(b / 16) * cell + y) * image.width +
            (b % 16) * cell +
            x) *
            4 +
          channel;
        total += Math.abs(image.data[ai] - image.data[bi]);
      }
  return total / (cell * cell * 4);
}

function uniqueColors(image) {
  const values = new Set();
  for (let index = 0; index < image.data.length; index += 16)
    if (image.data[index + 3])
      values.add(
        `${image.data[index]}/${image.data[index + 1]}/${image.data[index + 2]}/${image.data[index + 3]}`,
      );
  return values.size;
}
