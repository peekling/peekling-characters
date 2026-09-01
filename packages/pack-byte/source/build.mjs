import { createHash } from "node:crypto";
import {
  copyFile,
  mkdir,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";
import { format } from "prettier";
import {
  CHARACTER_ID,
  COLUMNS,
  FRAME_COUNT,
  LOGICAL_CELL_SIZE,
  ROWS,
  STATE_GROUPS,
  createFrames,
  createManifest,
} from "./blueprint.mjs";

const sourceRoot = fileURLToPath(new URL(".", import.meta.url));
const artifactsRoot = path.resolve(sourceRoot, "../../../artifacts/art/byte");
const outputRoot = path.resolve(
  option("--out") ?? path.join(artifactsRoot, "generated-pack"),
);
const relativeOutput = path.relative(artifactsRoot, outputRoot);
if (
  relativeOutput.startsWith("..") ||
  path.isAbsolute(relativeOutput) ||
  relativeOutput === ""
)
  throw new Error("Byte generated output must stay under artifacts/art/byte");

const MASTER_SIZE = LOGICAL_CELL_SIZE * 4;
const maximumAtlasBytes = 4 * 1024 * 1024;
const CYAN = [61, 238, 244, 230];
const PALE_CYAN = [160, 252, 255, 220];
const GOLD = [244, 188, 62, 235];
const PINK = [255, 153, 202, 225];
const RED = [255, 92, 87, 235];
const PURPLE = [183, 166, 255, 220];
const DIRECTION_VECTORS = Object.freeze({
  N: [0, -1],
  NE: [0.72, -0.72],
  E: [1, 0],
  SE: [0.72, 0.72],
  S: [0, 1],
  SW: [-0.72, 0.72],
  W: [-1, 0],
  NW: [-0.72, -0.72],
});

export async function buildPack() {
  const sourceBytes = await readFile(
    path.join(sourceRoot, "byte-pose-sheet-v2.png"),
  );
  const sheet = PNG.sync.read(sourceBytes);
  if (sheet.width !== 1536 || sheet.height !== 1024)
    throw new Error("Byte source pose sheet must be 1536x1024");

  const poses = extractPoses(sheet);
  const frameBlueprints = createFrames();
  const masterFrames = frameBlueprints.map((frame) =>
    renderFrame(frame, poses),
  );
  const variants = new Map();
  const report = {
    contract: "peekling-byte-qa-v3",
    status: "release-candidate",
    character: CHARACTER_ID,
    sourceSha256: sha(sourceBytes),
    sourcePoses: poses.length,
    frames: FRAME_COUNT,
    states: FRAME_COUNT,
    cells: COLUMNS * ROWS,
    spareTransparentCells: COLUMNS * ROWS - FRAME_COUNT,
    uniqueRenderedFrames1x: 0,
    groupCounts: Object.fromEntries(
      Object.entries(STATE_GROUPS).map(([group, states]) => [
        group,
        states.length,
      ]),
    ),
    locomotion: {
      families: ["run", "chase", "dash"],
      directions: 8,
      signatureFrames: 24,
    },
    variants: {},
  };

  for (const density of [1, 2, 4]) {
    const cell = LOGICAL_CELL_SIZE * density;
    const atlas = new PNG({ width: COLUMNS * cell, height: ROWS * cell });
    masterFrames.forEach((master, index) => {
      const frame =
        cell === MASTER_SIZE ? master : resizePremultiplied(master, cell, cell);
      PNG.bitblt(
        frame,
        atlas,
        0,
        0,
        cell,
        cell,
        (index % COLUMNS) * cell,
        Math.floor(index / COLUMNS) * cell,
      );
    });
    const bytes = encode(atlas);
    if (bytes.byteLength > maximumAtlasBytes)
      throw new Error(
        `atlas-${density}x.png is ${bytes.byteLength} bytes, above the 4 MiB Pack limit`,
      );
    variants.set(density, { atlas, bytes, sha256: sha(bytes) });
    report.variants[density] = {
      bytes: bytes.byteLength,
      decodedBytes: atlas.width * atlas.height * 4,
      sha256: sha(bytes),
      width: atlas.width,
      height: atlas.height,
      sourceCellSize: cell,
      sourceDetail:
        density === 4 ? "native pose source" : "premultiplied reduction",
    };
  }

  const oneX = variants.get(1).atlas;
  const frameHashes = frameBlueprints.map((_, index) =>
    sha(encode(cropAtlasCell(oneX, index, LOGICAL_CELL_SIZE))),
  );
  report.uniqueRenderedFrames1x = new Set(frameHashes).size;
  if (report.uniqueRenderedFrames1x !== FRAME_COUNT)
    throw new Error("Byte contains repeated rendered signature frames at 1x");

  const hashes = Object.fromEntries(
    [...variants].map(([density, variant]) => [density, variant.sha256]),
  );
  const manifest = createManifest(hashes);
  const outputParent = path.dirname(outputRoot);
  const temporaryRoot = path.join(
    outputParent,
    `.${path.basename(outputRoot)}-tmp-${process.pid}`,
  );

  try {
    await mkdir(outputParent, { recursive: true });
    await rm(outputRoot, { recursive: true, force: true });
    await mkdir(temporaryRoot, { recursive: false });
    for (const [density, variant] of variants)
      await writeFile(
        path.join(temporaryRoot, `atlas-${density}x.png`),
        variant.bytes,
      );
    await writeFile(
      path.join(temporaryRoot, "character.json"),
      await format(JSON.stringify(manifest), { parser: "json" }),
    );
    await writeFile(
      path.join(temporaryRoot, "thumbnail.png"),
      encode(resizePremultiplied(masterFrames[0], 64, 64)),
    );
    await rename(temporaryRoot, outputRoot);
  } catch (error) {
    await rm(temporaryRoot, { recursive: true, force: true });
    throw error;
  }

  await writeFile(
    path.join(outputParent, "byte-qa.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  );
  await writeFile(
    path.join(outputParent, "byte-state-sheet.png"),
    encode(createStateSheet(oneX, frameBlueprints)),
  );
  await writeFile(
    path.join(outputParent, "byte-state-map.md"),
    createStateMap(frameBlueprints),
  );
  if (process.argv.includes("--sync")) {
    const packageRoot = path.resolve(sourceRoot, "..");
    for (const file of [
      "character.json",
      "atlas-1x.png",
      "atlas-2x.png",
      "atlas-4x.png",
      "thumbnail.png",
    ])
      await copyFile(path.join(outputRoot, file), path.join(packageRoot, file));
  }
  return { outputRoot, report };
}

function extractPoses(sheet) {
  removeNeutralBackground(sheet);
  const components = characterComponents(sheet);
  if (components.length !== 24)
    throw new Error(
      `Byte source must contain 24 connected character poses, found ${components.length}`,
    );
  return components.map((component) =>
    normalizePose(isolateComponent(sheet, component)),
  );
}

function removeNeutralBackground(image) {
  for (let offset = 0; offset < image.data.length; offset += 4) {
    const red = image.data[offset];
    const green = image.data[offset + 1];
    const blue = image.data[offset + 2];
    const minimum = Math.min(red, green, blue);
    const maximum = Math.max(red, green, blue);
    const neutral = maximum - minimum <= 18;
    let alpha = 255;
    if (neutral && minimum >= 244) alpha = 0;
    else if (neutral && minimum >= 224)
      alpha = Math.round(((244 - minimum) / 20) * 255);
    image.data[offset + 3] = alpha;
  }
}

function characterComponents(image) {
  const labels = new Int32Array(image.width * image.height);
  const components = [];
  let label = 0;
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const start = y * image.width + x;
      if (labels[start] || image.data[start * 4 + 3] <= 8) continue;
      label++;
      const queue = [start];
      labels[start] = label;
      let minX = x;
      let maxX = x;
      let minY = y;
      let maxY = y;
      let area = 0;
      for (let cursor = 0; cursor < queue.length; cursor++) {
        const point = queue[cursor];
        const pointX = point % image.width;
        const pointY = Math.floor(point / image.width);
        area++;
        minX = Math.min(minX, pointX);
        maxX = Math.max(maxX, pointX);
        minY = Math.min(minY, pointY);
        maxY = Math.max(maxY, pointY);
        for (const next of [
          point - 1,
          point + 1,
          point - image.width,
          point + image.width,
        ]) {
          if (next < 0 || next >= labels.length || labels[next]) continue;
          const nextX = next % image.width;
          if (Math.abs(nextX - pointX) > 1 || image.data[next * 4 + 3] <= 8)
            continue;
          labels[next] = label;
          queue.push(next);
        }
      }
      if (area > 1_500)
        components.push({ label, minX, maxX, minY, maxY, area, labels });
    }
  }
  const selected = components.sort((a, b) => b.area - a.area).slice(0, 24);
  selected.sort((a, b) => {
    const rowA = Math.min(3, Math.floor((a.minY + a.maxY) / 2 / 256));
    const rowB = Math.min(3, Math.floor((b.minY + b.maxY) / 2 / 256));
    return rowA - rowB || a.minX - b.minX;
  });
  return selected;
}

function isolateComponent(image, component) {
  const width = component.maxX - component.minX + 1;
  const height = component.maxY - component.minY + 1;
  const isolated = new PNG({ width, height });
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const sourcePoint =
        (component.minY + y) * image.width + component.minX + x;
      if (component.labels[sourcePoint] !== component.label) continue;
      const sourceOffset = sourcePoint * 4;
      const targetOffset = (y * width + x) * 4;
      image.data.copy(
        isolated.data,
        targetOffset,
        sourceOffset,
        sourceOffset + 4,
      );
    }
  }
  return isolated;
}

function normalizePose(input) {
  const bounds = visibleBounds(input);
  if (!bounds) throw new Error("Byte source pose is empty");
  const width = bounds.maxX - bounds.minX + 1;
  const height = bounds.maxY - bounds.minY + 1;
  const isolated = crop(input, bounds.minX, bounds.minY, width, height);
  const scale = Math.min(116 / width, 116 / height, 1);
  const resized = resizePremultiplied(
    isolated,
    Math.max(1, Math.round(width * scale)),
    Math.max(1, Math.round(height * scale)),
  );
  const output = new PNG({ width: MASTER_SIZE, height: MASTER_SIZE });
  blit(
    resized,
    output,
    Math.round((MASTER_SIZE - resized.width) / 2),
    124 - resized.height,
    false,
  );
  return output;
}

function renderFrame(frame, poses) {
  const output = new PNG({ width: MASTER_SIZE, height: MASTER_SIZE });
  drawEffect(output, frame, true);
  const base = poses[frame.basePose];
  const scale =
    frame.group === "motion"
      ? frame.gait === "dash"
        ? 0.96
        : 0.98
      : 0.96 + ((frame.variant % 3) - 1) * 0.012;
  const transformed = resizePremultiplied(
    base,
    Math.round(MASTER_SIZE * scale),
    Math.round(MASTER_SIZE * scale),
  );
  const xShift = ((frame.variant % 3) - 1) * 1.2;
  const yShift =
    frame.group === "motion"
      ? frame.gait === "chase"
        ? -2
        : frame.gait === "dash"
          ? -1
          : 0
      : frame.variant % 5 === 0
        ? -1
        : 0;
  blit(
    transformed,
    output,
    Math.round((MASTER_SIZE - transformed.width) / 2 + xShift),
    Math.round((MASTER_SIZE - transformed.height) / 2 + yShift),
    frame.mirror,
  );
  drawEffect(output, frame, false);
  drawCircuitSignature(output, frame.variant);
  clearBorder(output, 8);
  return output;
}

function drawEffect(image, frame, behind) {
  const direction = frame.direction
    ? DIRECTION_VECTORS[frame.direction]
    : undefined;
  const effect = frame.effect;

  if (frame.group === "motion") {
    if (!behind) return;
    drawMotionTrail(image, direction, frame.gait, frame.variant);
    return;
  }

  if (behind && ["shield", "hologram", "sync", "charge"].includes(effect)) {
    const color = effect === "charge" ? GOLD : CYAN;
    drawRing(image, 64, 69, effect === "shield" ? 50 : 43, 2, color);
    if (effect !== "shield") drawRing(image, 64, 69, 35, 1.2, color);
  }
  if (behind) return;

  switch (effect) {
    case "none":
      break;
    case "pulse":
    case "soft-ring":
      drawRing(image, 64, 65, effect === "pulse" ? 46 : 39, 1.4, CYAN);
      break;
    case "blink":
      drawLine(image, 48, 49, 78, 49, 2.2, PALE_CYAN);
      break;
    case "focus":
    case "near-focus":
    case "far-focus":
      drawReticle(image, 93, 42, effect === "far-focus" ? 13 : 8, CYAN);
      break;
    case "stretch":
    case "wake":
    case "release":
      drawBurst(image, 97, 33, effect === "stretch" ? GOLD : CYAN, 7);
      break;
    case "yawn":
      drawRing(image, 99, 47, 9, 2, PALE_CYAN);
      drawRing(image, 108, 37, 4, 1.4, PALE_CYAN);
      break;
    case "sleep":
      drawMoon(image, 101, 29, PURPLE);
      drawCircle(image, 91, 40, 3, PALE_CYAN);
      break;
    case "dream":
      drawStar(image, 99, 26, 6, PINK);
      drawCircle(image, 89, 39, 3, PALE_CYAN);
      break;
    case "listen":
      drawSound(image, 100, 48, CYAN);
      break;
    case "charge":
      drawBattery(image, 94, 24, GOLD);
      break;
    case "direction":
      drawDirection(image, direction, CYAN);
      break;
    case "scan-left":
    case "scan-right":
      drawScanBeam(image, effect === "scan-left" ? -1 : 1, CYAN);
      break;
    case "heart":
      drawHeart(image, 99, 28, 7, PINK);
      break;
    case "double-star":
      drawStar(image, 96, 28, 7, GOLD);
      drawStar(image, 109, 40, 4, PALE_CYAN);
      break;
    case "burst":
    case "cheer":
      drawBurst(image, 99, 31, GOLD, 9);
      break;
    case "proud":
      drawChevron(image, 99, 30, -1, GOLD);
      drawChevron(image, 108, 34, -1, GOLD);
      break;
    case "surprise":
      drawRing(image, 100, 31, 10, 2.4, PALE_CYAN);
      break;
    case "question":
    case "question-double":
    case "confused":
      drawQuestionGlyph(image, 99, 30, CYAN);
      if (effect === "question-double")
        drawQuestionGlyph(image, 111, 39, PURPLE);
      if (effect === "confused") drawZigzag(image, 88, 31, PURPLE);
      break;
    case "worry":
    case "anxious":
      drawDrop(image, 101, 34, effect === "anxious" ? 8 : 6, PALE_CYAN);
      if (effect === "anxious") drawZigzag(image, 88, 28, RED);
      break;
    case "tear":
      drawDrop(image, 98, 37, 9, PALE_CYAN);
      break;
    case "tired":
      drawLine(image, 91, 31, 106, 34, 2, PURPLE);
      drawLine(image, 94, 38, 109, 41, 1.4, PURPLE);
      break;
    case "annoyed":
      drawLine(image, 91, 29, 104, 24, 2, GOLD);
      break;
    case "angry":
      drawZigzag(image, 92, 28, RED);
      drawZigzag(image, 106, 34, RED);
      break;
    case "determined":
      drawChevron(image, 100, 30, 1, CYAN);
      break;
    case "brave":
      drawShield(image, 100, 32, CYAN);
      break;
    case "shy":
      drawCircle(image, 96, 36, 4, PINK);
      drawCircle(image, 107, 38, 3, PINK);
      break;
    case "mischief":
      drawChevron(image, 98, 32, 1, PURPLE);
      drawStar(image, 109, 24, 4, CYAN);
      break;
    case "play":
      drawArc(image, 101, 32, 10, Math.PI * 0.15, Math.PI * 1.35, 2, PINK);
      break;
    case "relieved":
      drawArc(image, 100, 32, 10, Math.PI * 0.1, Math.PI * 0.9, 2, CYAN);
      break;
    case "hover":
      drawRing(image, 64, 116, 12, 1.6, CYAN);
      break;
    case "click":
      drawClick(image, 103, 36, CYAN, 1);
      break;
    case "double-click":
      drawClick(image, 99, 33, CYAN, 1);
      drawClick(image, 108, 42, PALE_CYAN, 0.72);
      break;
    case "context":
      drawCircle(image, 96, 30, 2.5, CYAN);
      drawCircle(image, 103, 30, 2.5, CYAN);
      drawCircle(image, 110, 30, 2.5, CYAN);
      break;
    case "press":
      drawRing(image, 101, 39, 12, 3, CYAN);
      break;
    case "drag":
      drawDragPath(image, CYAN);
      break;
    case "scroll":
      drawScrollEffect(image, frame.variant % 2 ? 1 : -1, PINK);
      break;
    case "drop":
      drawReticle(image, 101, 37, 10, GOLD);
      break;
    case "fly":
    case "fall":
      drawScrollEffect(image, effect === "fly" ? -1 : 1, PURPLE);
      break;
    case "land":
      drawLand(image, CYAN);
      break;
    case "greet":
      drawArc(image, 104, 36, 10, -Math.PI * 0.6, Math.PI * 0.55, 2, CYAN);
      break;
    case "goodbye":
      drawArc(image, 104, 36, 12, -Math.PI * 0.7, Math.PI * 0.7, 2, PURPLE);
      break;
    case "high-five":
      drawBurst(image, 105, 30, CYAN, 8);
      drawRing(image, 105, 30, 10, 1.4, GOLD);
      break;
    case "boot":
      drawProgress(image, 88, 25, 4, CYAN);
      break;
    case "loading":
      drawArc(image, 100, 31, 11, -Math.PI * 0.5, Math.PI * 1.25, 2.5, CYAN);
      break;
    case "waiting":
      for (let index = 0; index < 3; index++)
        drawCircle(image, 93 + index * 8, 31, 2.4 + index * 0.3, CYAN);
      break;
    case "success":
      drawCheck(image, 94, 31, CYAN);
      break;
    case "error":
      drawX(image, 101, 32, 8, RED);
      break;
    case "warning":
      drawWarning(image, 101, 32, GOLD);
      break;
    case "notification":
      drawBurst(image, 101, 31, PINK, 6);
      drawCircle(image, 101, 31, 5, PINK);
      break;
    case "sync":
      drawSync(image, 101, 32, CYAN);
      break;
    case "upload":
      drawTransfer(image, 101, 33, -1, CYAN);
      break;
    case "download":
      drawTransfer(image, 101, 30, 1, CYAN);
      break;
    case "scan":
      drawGrid(image, 88, 21, 25, 25, CYAN);
      break;
    case "hologram":
      drawRing(image, 100, 38, 13, 1.7, CYAN);
      drawLine(image, 87, 38, 113, 38, 1.2, CYAN);
      break;
    case "decode":
      drawPixels(image, 88, 22, CYAN);
      break;
    case "shield":
      drawShield(image, 101, 34, CYAN);
      break;
    case "stealth":
      for (let index = 0; index < 4; index++)
        drawLine(image, 85, 23 + index * 7, 114, 23 + index * 7, 1.2, PURPLE);
      break;
    case "overclock":
      drawZigzag(image, 92, 28, GOLD);
      drawBurst(image, 108, 35, RED, 7);
      break;
    default:
      throw new Error(`Unknown Byte effect: ${effect}`);
  }
}

function drawMotionTrail(image, direction, gait, variant) {
  const [dx, dy] = direction;
  const color = gait === "dash" ? GOLD : gait === "chase" ? CYAN : PURPLE;
  const length = gait === "dash" ? 42 : gait === "chase" ? 32 : 24;
  const originX = 64 - dx * 34;
  const originY = 70 - dy * 28;
  for (let index = 0; index < 3; index++) {
    const crossX = -dy * (index - 1) * 8;
    const crossY = dx * (index - 1) * 8;
    drawLine(
      image,
      originX + crossX,
      originY + crossY,
      originX - dx * (length - index * 5) + crossX,
      originY - dy * (length - index * 5) + crossY,
      gait === "dash" ? 3 : 2,
      [...color.slice(0, 3), 150 + ((variant + index) % 3) * 28],
    );
  }
  drawDirection(image, direction, color);
}

function drawCircuitSignature(image, value) {
  const color = value % 5 === 0 ? GOLD : CYAN;
  for (let bit = 0; bit < 7; bit++) {
    if (((value + 1) & (1 << bit)) === 0) continue;
    const x = 16 + bit * 6;
    const y = 15 + (bit % 2) * 4;
    drawCircle(image, x, y, 1.8, color);
    if (bit > 0)
      drawLine(image, x - 4, y, x - 1.8, y, 0.8, [...color.slice(0, 3), 140]);
  }
}

function createStateSheet(atlas, frames) {
  const tile = 40;
  const columns = 10;
  const sheet = new PNG({ width: columns * tile, height: 10 * tile });
  fill(sheet, 13, 17, 24, 255);
  const colors = {
    rest: [84, 218, 233],
    gaze: [119, 171, 255],
    emotion: [255, 147, 195],
    interaction: [255, 192, 90],
    tech: [125, 221, 174],
    motion: [187, 147, 255],
  };
  frames.forEach((frame, index) => {
    const left = (index % columns) * tile;
    const top = Math.floor(index / columns) * tile;
    const [red, green, blue] = colors[frame.group];
    fillRect(sheet, left + 1, top + 1, tile - 2, tile - 2, 24, 29, 39, 255);
    fillRect(sheet, left + 2, top + 2, tile - 4, 2, red, green, blue, 255);
    PNG.bitblt(
      atlas,
      sheet,
      (index % COLUMNS) * LOGICAL_CELL_SIZE,
      Math.floor(index / COLUMNS) * LOGICAL_CELL_SIZE,
      LOGICAL_CELL_SIZE,
      LOGICAL_CELL_SIZE,
      left + 4,
      top + 5,
    );
  });
  return sheet;
}

function createStateMap(frames) {
  const lines = [
    "# Byte state map",
    "",
    "Every state starts on its own signature frame. Byte keeps the same visor, armor, circuit seams, and segmented tail while posture and tech effects communicate the performance.",
    "",
    "| # | State | Family | Source pose | Effect |",
    "|---:|---|---|---:|---|",
  ];
  for (const frame of frames)
    lines.push(
      `| ${frame.index + 1} | \`${frame.name}\` | ${frame.group} | ${frame.basePose + 1} | ${frame.effect} |`,
    );
  return `${lines.join("\n")}\n`;
}

function visibleBounds(image) {
  let minX = image.width;
  let minY = image.height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const alpha = image.data[(y * image.width + x) * 4 + 3];
      if (alpha <= 8) continue;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
  return maxX < minX ? undefined : { minX, minY, maxX, maxY };
}

function resizePremultiplied(input, width, height) {
  if (input.width === width && input.height === height) return input;
  const output = new PNG({ width, height });
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const sx = ((x + 0.5) * input.width) / width - 0.5;
      const sy = ((y + 0.5) * input.height) / height - 0.5;
      const x0 = Math.max(0, Math.floor(sx));
      const y0 = Math.max(0, Math.floor(sy));
      const x1 = Math.min(input.width - 1, x0 + 1);
      const y1 = Math.min(input.height - 1, y0 + 1);
      const fx = Math.max(0, sx - x0);
      const fy = Math.max(0, sy - y0);
      const samples = [
        [x0, y0, (1 - fx) * (1 - fy)],
        [x1, y0, fx * (1 - fy)],
        [x0, y1, (1 - fx) * fy],
        [x1, y1, fx * fy],
      ];
      let alpha = 0;
      let red = 0;
      let green = 0;
      let blue = 0;
      for (const [px, py, weight] of samples) {
        const offset = (py * input.width + px) * 4;
        const sampleAlpha = input.data[offset + 3] / 255;
        alpha += sampleAlpha * weight;
        red += input.data[offset] * sampleAlpha * weight;
        green += input.data[offset + 1] * sampleAlpha * weight;
        blue += input.data[offset + 2] * sampleAlpha * weight;
      }
      const offset = (y * width + x) * 4;
      output.data[offset + 3] = Math.round(alpha * 255);
      if (alpha > 0) {
        output.data[offset] = Math.round(red / alpha);
        output.data[offset + 1] = Math.round(green / alpha);
        output.data[offset + 2] = Math.round(blue / alpha);
      }
    }
  }
  return output;
}

function blit(source, target, left, top, mirrored) {
  for (let y = 0; y < source.height; y++) {
    for (let x = 0; x < source.width; x++) {
      const targetX = left + (mirrored ? source.width - 1 - x : x);
      const targetY = top + y;
      if (
        targetX < 0 ||
        targetY < 0 ||
        targetX >= target.width ||
        targetY >= target.height
      )
        continue;
      const sourceOffset = (y * source.width + x) * 4;
      const targetOffset = (targetY * target.width + targetX) * 4;
      blend(
        target.data,
        targetOffset,
        source.data[sourceOffset],
        source.data[sourceOffset + 1],
        source.data[sourceOffset + 2],
        source.data[sourceOffset + 3],
      );
    }
  }
}

function crop(image, left, top, width, height) {
  const output = new PNG({ width, height });
  PNG.bitblt(image, output, left, top, width, height, 0, 0);
  return output;
}

function cropAtlasCell(atlas, index, cell) {
  return crop(
    atlas,
    (index % COLUMNS) * cell,
    Math.floor(index / COLUMNS) * cell,
    cell,
    cell,
  );
}

function drawLine(image, x1, y1, x2, y2, width, color) {
  const steps = Math.max(1, Math.ceil(Math.hypot(x2 - x1, y2 - y1) * 1.5));
  for (let step = 0; step <= steps; step++) {
    const progress = step / steps;
    drawCircle(
      image,
      x1 + (x2 - x1) * progress,
      y1 + (y2 - y1) * progress,
      width / 2,
      color,
    );
  }
}

function drawCircle(image, centerX, centerY, radius, color) {
  const minX = Math.floor(centerX - radius - 1);
  const maxX = Math.ceil(centerX + radius + 1);
  const minY = Math.floor(centerY - radius - 1);
  const maxY = Math.ceil(centerY + radius + 1);
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const distance = Math.hypot(x + 0.5 - centerX, y + 0.5 - centerY);
      if (distance > radius + 0.75) continue;
      const coverage = Math.min(1, radius + 0.75 - distance);
      setPixel(image, x, y, [...color.slice(0, 3), color[3] * coverage]);
    }
  }
}

function drawRing(image, centerX, centerY, radius, width, color) {
  const segments = Math.max(32, Math.round(radius * 4));
  for (let index = 0; index < segments; index++) {
    const angle = (index / segments) * Math.PI * 2;
    drawCircle(
      image,
      centerX + Math.cos(angle) * radius,
      centerY + Math.sin(angle) * radius,
      width / 2,
      color,
    );
  }
}

function drawArc(image, centerX, centerY, radius, start, end, width, color) {
  const segments = 40;
  let previous;
  for (let index = 0; index <= segments; index++) {
    const angle = start + ((end - start) * index) / segments;
    const point = [
      centerX + Math.cos(angle) * radius,
      centerY + Math.sin(angle) * radius,
    ];
    if (previous)
      drawLine(
        image,
        previous[0],
        previous[1],
        point[0],
        point[1],
        width,
        color,
      );
    previous = point;
  }
}

function drawBurst(image, x, y, color, radius) {
  for (let index = 0; index < 8; index++) {
    const angle = (index / 8) * Math.PI * 2;
    drawLine(
      image,
      x + Math.cos(angle) * (radius * 0.45),
      y + Math.sin(angle) * (radius * 0.45),
      x + Math.cos(angle) * radius,
      y + Math.sin(angle) * radius,
      1.6,
      color,
    );
  }
}

function drawStar(image, x, y, radius, color) {
  drawLine(image, x - radius, y, x + radius, y, 1.8, color);
  drawLine(image, x, y - radius, x, y + radius, 1.8, color);
  drawLine(
    image,
    x - radius * 0.65,
    y - radius * 0.65,
    x + radius * 0.65,
    y + radius * 0.65,
    1.2,
    color,
  );
  drawLine(
    image,
    x + radius * 0.65,
    y - radius * 0.65,
    x - radius * 0.65,
    y + radius * 0.65,
    1.2,
    color,
  );
}

function drawHeart(image, x, y, scale, color) {
  drawCircle(image, x - scale * 0.35, y - scale * 0.2, scale * 0.38, color);
  drawCircle(image, x + scale * 0.35, y - scale * 0.2, scale * 0.38, color);
  for (let row = 0; row < scale; row++)
    drawLine(
      image,
      x - scale * 0.62 + row * 0.62,
      y + row * 0.2,
      x + scale * 0.62 - row * 0.62,
      y + row * 0.2,
      1.5,
      color,
    );
}

function drawMoon(image, x, y, color) {
  drawCircle(image, x, y, 8, color);
  drawCircle(image, x + 4, y - 2, 7, [13, 17, 24, 245]);
}

function drawDrop(image, x, y, size, color) {
  drawCircle(image, x, y + size * 0.25, size * 0.45, color);
  drawLine(image, x, y - size * 0.55, x, y + size * 0.15, size * 0.6, color);
}

function drawChevron(image, x, y, direction, color) {
  drawLine(image, x - 7, y - direction * 4, x, y + direction * 3, 2, color);
  drawLine(image, x, y + direction * 3, x + 7, y - direction * 4, 2, color);
}

function drawZigzag(image, x, y, color) {
  drawLine(image, x - 7, y - 4, x - 2, y + 3, 2, color);
  drawLine(image, x - 2, y + 3, x + 3, y - 4, 2, color);
  drawLine(image, x + 3, y - 4, x + 8, y + 3, 2, color);
}

function drawReticle(image, x, y, radius, color) {
  drawRing(image, x, y, radius, 1.5, color);
  drawLine(image, x - radius - 4, y, x - radius + 2, y, 1.5, color);
  drawLine(image, x + radius - 2, y, x + radius + 4, y, 1.5, color);
  drawLine(image, x, y - radius - 4, x, y - radius + 2, 1.5, color);
  drawLine(image, x, y + radius - 2, x, y + radius + 4, 1.5, color);
}

function drawSound(image, x, y, color) {
  drawArc(image, x, y, 6, -Math.PI * 0.5, Math.PI * 0.5, 1.5, color);
  drawArc(image, x, y, 12, -Math.PI * 0.5, Math.PI * 0.5, 1.5, color);
  drawArc(image, x, y, 18, -Math.PI * 0.5, Math.PI * 0.5, 1.5, color);
}

function drawBattery(image, x, y, color) {
  drawLine(image, x, y, x + 18, y, 2, color);
  drawLine(image, x, y, x, y + 10, 2, color);
  drawLine(image, x, y + 10, x + 18, y + 10, 2, color);
  drawLine(image, x + 18, y, x + 18, y + 10, 2, color);
  drawLine(image, x + 19, y + 3, x + 21, y + 3, 2.5, color);
  fillRect(image, x + 3, y + 3, 10, 4, ...color);
}

function drawDirection(image, direction, color) {
  const [dx, dy] = direction;
  const x = 64 + dx * 45;
  const y = 65 + dy * 43;
  drawLine(image, x - dx * 10, y - dy * 10, x, y, 2.2, color);
  drawLine(image, x, y, x - dx * 6 - dy * 5, y - dy * 6 + dx * 5, 2.2, color);
  drawLine(image, x, y, x - dx * 6 + dy * 5, y - dy * 6 - dx * 5, 2.2, color);
}

function drawScanBeam(image, direction, color) {
  const originX = direction < 0 ? 35 : 93;
  drawLine(image, originX, 43, originX + direction * 25, 34, 1.5, color);
  drawLine(image, originX, 49, originX + direction * 28, 49, 1.2, color);
  drawLine(image, originX, 55, originX + direction * 25, 64, 1.5, color);
}

function drawQuestionGlyph(image, x, y, color) {
  drawArc(image, x, y, 7, -Math.PI * 0.95, Math.PI * 0.35, 2.2, color);
  drawLine(image, x + 5, y + 3, x + 1, y + 8, 2, color);
  drawCircle(image, x, y + 14, 1.8, color);
}

function drawShield(image, x, y, color) {
  drawLine(image, x, y - 10, x + 9, y - 6, 2, color);
  drawLine(image, x + 9, y - 6, x + 7, y + 6, 2, color);
  drawLine(image, x + 7, y + 6, x, y + 12, 2, color);
  drawLine(image, x, y + 12, x - 7, y + 6, 2, color);
  drawLine(image, x - 7, y + 6, x - 9, y - 6, 2, color);
  drawLine(image, x - 9, y - 6, x, y - 10, 2, color);
}

function drawClick(image, x, y, color, scale) {
  drawLine(image, x, y, x + 4 * scale, y + 15 * scale, 2.2, color);
  drawLine(
    image,
    x + 4 * scale,
    y + 15 * scale,
    x + 8 * scale,
    y + 9 * scale,
    2.2,
    color,
  );
  drawLine(
    image,
    x + 8 * scale,
    y + 9 * scale,
    x + 13 * scale,
    y + 8 * scale,
    2.2,
    color,
  );
  drawLine(image, x + 13 * scale, y + 8 * scale, x, y, 2.2, color);
}

function drawDragPath(image, color) {
  drawLine(image, 86, 30, 110, 42, 1.8, color);
  drawCircle(image, 86, 30, 4, color);
  drawReticle(image, 110, 42, 6, color);
}

function drawScrollEffect(image, direction, color) {
  for (let index = 0; index < 3; index++) {
    const y = 25 + index * 9;
    drawChevron(image, 102, y, direction, color);
  }
}

function drawLand(image, color) {
  drawLine(image, 37, 116, 91, 116, 2, color);
  drawLine(image, 42, 111, 34, 104, 1.5, color);
  drawLine(image, 86, 111, 94, 104, 1.5, color);
}

function drawProgress(image, x, y, count, color) {
  for (let index = 0; index < count; index++)
    fillRect(image, x + index * 7, y, 5, 4 + index, ...color);
}

function drawCheck(image, x, y, color) {
  drawLine(image, x, y + 5, x + 6, y + 11, 3, color);
  drawLine(image, x + 6, y + 11, x + 18, y - 3, 3, color);
}

function drawX(image, x, y, size, color) {
  drawLine(image, x - size, y - size, x + size, y + size, 3, color);
  drawLine(image, x + size, y - size, x - size, y + size, 3, color);
}

function drawWarning(image, x, y, color) {
  drawLine(image, x, y - 11, x - 11, y + 10, 2.2, color);
  drawLine(image, x - 11, y + 10, x + 11, y + 10, 2.2, color);
  drawLine(image, x + 11, y + 10, x, y - 11, 2.2, color);
  drawLine(image, x, y - 4, x, y + 3, 2.4, color);
  drawCircle(image, x, y + 7, 1.5, color);
}

function drawSync(image, x, y, color) {
  drawArc(image, x, y, 11, -Math.PI * 0.2, Math.PI * 0.85, 2, color);
  drawArc(image, x, y, 11, Math.PI * 0.8, Math.PI * 1.85, 2, color);
  drawChevron(image, x + 9, y + 5, 1, color);
  drawChevron(image, x - 9, y - 5, -1, color);
}

function drawTransfer(image, x, y, direction, color) {
  drawLine(image, x, y - 10 * direction, x, y + 10 * direction, 2.5, color);
  drawLine(image, x, y + 10 * direction, x - 6, y + 4 * direction, 2.5, color);
  drawLine(image, x, y + 10 * direction, x + 6, y + 4 * direction, 2.5, color);
  drawLine(
    image,
    x - 10,
    y + 13 * direction,
    x + 10,
    y + 13 * direction,
    2,
    color,
  );
}

function drawGrid(image, x, y, width, height, color) {
  for (let index = 0; index <= 3; index++) {
    drawLine(
      image,
      x + (width * index) / 3,
      y,
      x + (width * index) / 3,
      y + height,
      1,
      color,
    );
    drawLine(
      image,
      x,
      y + (height * index) / 3,
      x + width,
      y + (height * index) / 3,
      1,
      color,
    );
  }
}

function drawPixels(image, x, y, color) {
  const pattern = [
    [0, 0],
    [7, 2],
    [14, 0],
    [21, 4],
    [3, 9],
    [11, 12],
    [19, 10],
    [26, 14],
  ];
  for (const [dx, dy] of pattern)
    fillRect(image, x + dx, y + dy, 3, 3, ...color);
}

function fill(image, red, green, blue, alpha) {
  fillRect(image, 0, 0, image.width, image.height, red, green, blue, alpha);
}

function clearBorder(image, inset) {
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      if (
        x >= inset &&
        y >= inset &&
        x < image.width - inset &&
        y < image.height - inset
      )
        continue;
      const offset = (y * image.width + x) * 4;
      image.data[offset] = 0;
      image.data[offset + 1] = 0;
      image.data[offset + 2] = 0;
      image.data[offset + 3] = 0;
    }
  }
}

function fillRect(image, left, top, width, height, red, green, blue, alpha) {
  for (let y = Math.floor(top); y < Math.ceil(top + height); y++)
    for (let x = Math.floor(left); x < Math.ceil(left + width); x++)
      setPixel(image, x, y, [red, green, blue, alpha]);
}

function setPixel(image, x, y, color) {
  if (x < 0 || y < 0 || x >= image.width || y >= image.height) return;
  blend(image.data, (y * image.width + x) * 4, ...color);
}

function blend(data, offset, red, green, blue, alpha) {
  const sourceAlpha = Math.max(0, Math.min(255, alpha)) / 255;
  if (sourceAlpha <= 0) return;
  const destinationAlpha = data[offset + 3] / 255;
  const outputAlpha = sourceAlpha + destinationAlpha * (1 - sourceAlpha);
  if (outputAlpha <= 0) return;
  data[offset] = Math.round(
    (red * sourceAlpha + data[offset] * destinationAlpha * (1 - sourceAlpha)) /
      outputAlpha,
  );
  data[offset + 1] = Math.round(
    (green * sourceAlpha +
      data[offset + 1] * destinationAlpha * (1 - sourceAlpha)) /
      outputAlpha,
  );
  data[offset + 2] = Math.round(
    (blue * sourceAlpha +
      data[offset + 2] * destinationAlpha * (1 - sourceAlpha)) /
      outputAlpha,
  );
  data[offset + 3] = Math.round(outputAlpha * 255);
}

function encode(image) {
  return PNG.sync.write(image, {
    colorType: 6,
    inputColorType: 6,
    inputHasAlpha: true,
    deflateLevel: 9,
    deflateStrategy: 3,
  });
}

function sha(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function option(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const result = await buildPack();
  console.log(
    `Built ${FRAME_COUNT} Byte states at 1x, 2x, and 4x in ${result.outputRoot}`,
  );
}
