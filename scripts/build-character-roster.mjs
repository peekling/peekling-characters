import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";
import { format } from "prettier";

const repositoryRoot = fileURLToPath(new URL("..", import.meta.url));

const names = [
  "peek",
  "mochi",
  "pip",
  "moss",
  "ember",
  "orbit",
  "waddle",
  "quill",
  "vali",
  "tumble",
  "rivet",
  "purl",
  "nova",
  "bramble",
  "fable",
  "halo",
  "rook",
  "crumb",
  "glint",
  "nori",
  "zesty",
  "tico",
  "buns",
  "terra",
  "sol",
  "luna",
];
const descriptions = {
  peek: "A curious kitten-fox who follows pointers and celebrates small wins.",
  mochi: "A lavender-eared bunny with soft, springy steps.",
  pip: "A warm-gold corgi who trots into every little celebration.",
  moss: "A mint-green frog who crosses the page in cheerful hops.",
  ember: "A rust-red forest friend with a bright, adventurous streak.",
  orbit: "A round little robot with a cool display and precise tiny steps.",
  waddle: "A scarf-wrapped penguin with a gentle side-to-side waddle.",
  quill: "A thoughtful scholar owl who flutters between bright ideas.",
  vali: "A brave little slime whose bouncy courage fills the room.",
  byte: "A quick cyber cat with a bright visor and quiet paws.",
  tumble: "A cheerful cactus wanderer with a tiny western swagger.",
  rivet: "A clockwork beetle who trundles along with careful purpose.",
  purl: "A woolly lamb who bounds forward on cloud-soft feet.",
  nova: "A cosmic creature who phases gently between little worlds.",
  bramble: "A warm forest bear with a slow, reassuring lumber.",
  fable: "A clever terracotta fox always ready for the next trail.",
  halo: "A tiny ringed planet rolling through its own bright orbit.",
  rook: "A curious raccoon who tiptoes toward every shiny surprise.",
  crumb: "A toast-sized friend who skips without dropping a crumb.",
  glint: "A glowing elemental wisp drifting wherever wonder leads.",
  nori: "A cozy sushi friend with a gentle rice-body shuffle.",
  zesty: "A lively pizza slice who scoots with a confident tilt.",
  tico: "A bright taco friend quick-stepping without spilling a thing.",
  buns: "A round burger buddy who rolls forward and settles softly.",
  terra: "A pocket-sized Earth gliding with a calm, steady spin.",
  sol: "A sunny companion who floats with a warm, radiant pulse.",
  luna: "A dreamy moon friend tracing a quiet little orbit.",
};
const locomotionPrefixes = {
  moss: "hop",
  waddle: "waddle",
  quill: "flutter-step",
  vali: "ooze-bounce",
  byte: "prowl",
  tumble: "boot-scoot",
  rivet: "trundle",
  purl: "bound",
  nova: "phase-glide",
  bramble: "lumber",
  fable: "lope",
  halo: "orbit-roll",
  rook: "tiptoe",
  crumb: "crumb-skip",
  glint: "drift",
  nori: "rice-shuffle",
  zesty: "slice-scoot",
  tico: "shell-step",
  buns: "roll-settle",
  terra: "world-glide",
  sol: "radiant-float",
  luna: "orbital-drift",
};
const motionTimelines = {
  moss: [
    [0, 0, 0],
    [0.16, 0.08, 0.2],
    [0.42, 0.68, 0.34],
    [0.68, 0.96, 0.08],
    [0.78, 1, 0],
    [1, 1, 0],
  ],
  waddle: [
    [0, 0, 0],
    [0.2, 0.17, 0.06],
    [0.42, 0.5, 0],
    [0.7, 0.83, 0.06],
    [1, 1, 0],
  ],
  quill: [
    [0, 0, 0],
    [0.18, 0.12, 0.12],
    [0.5, 0.62, 0.2],
    [0.82, 0.94, 0.05],
    [1, 1, 0],
  ],
  vali: [
    [0, 0, 0],
    [0.22, 0.08, 0.16],
    [0.48, 0.72, 0.28],
    [0.72, 1, 0],
    [1, 1, 0],
  ],
  tumble: [
    [0, 0, 0],
    [0.22, 0.14, 0.04],
    [0.5, 0.58, 0.09],
    [0.8, 0.9, 0.03],
    [1, 1, 0],
  ],
  purl: [
    [0, 0, 0],
    [0.2, 0.08, 0.2],
    [0.5, 0.64, 0.3],
    [0.78, 1, 0],
    [1, 1, 0],
  ],
  nova: [
    [0, 0, 0],
    [0.3, 0.24, 0.07],
    [0.62, 0.7, 0.12],
    [1, 1, 0],
  ],
  bramble: [
    [0, 0, 0],
    [0.3, 0.2, 0.03],
    [0.55, 0.58, 0.06],
    [0.85, 0.9, 0.02],
    [1, 1, 0],
  ],
  fable: [
    [0, 0, 0],
    [0.2, 0.16, 0.1],
    [0.52, 0.64, 0.16],
    [0.84, 0.94, 0.04],
    [1, 1, 0],
  ],
  halo: [
    [0, 0, 0],
    [0.25, 0.18, 0.08],
    [0.55, 0.62, 0.12],
    [0.8, 0.9, 0.04],
    [1, 1, 0],
  ],
  rook: [
    [0, 0, 0],
    [0.3, 0.18, 0.03],
    [0.55, 0.52, 0.07],
    [0.8, 0.86, 0.02],
    [1, 1, 0],
  ],
  crumb: [
    [0, 0, 0],
    [0.22, 0.12, 0.14],
    [0.5, 0.62, 0.22],
    [0.78, 1, 0],
    [1, 1, 0],
  ],
  glint: [
    [0, 0, 0],
    [0.3, 0.28, 0.08],
    [0.66, 0.72, 0.13],
    [1, 1, 0],
  ],
  nori: [
    [0, 0, 0],
    [0.24, 0.16, 0.08],
    [0.52, 0.58, 0.13],
    [0.8, 0.9, 0.03],
    [1, 1, 0],
  ],
  zesty: [
    [0, 0, 0],
    [0.2, 0.14, 0.05],
    [0.52, 0.62, 0.1],
    [0.82, 0.92, 0.03],
    [1, 1, 0],
  ],
  tico: [
    [0, 0, 0],
    [0.18, 0.16, 0.04],
    [0.44, 0.5, 0.08],
    [0.72, 0.84, 0.03],
    [1, 1, 0],
  ],
  buns: [
    [0, 0, 0],
    [0.3, 0.34, 0.06],
    [0.65, 0.86, 0.1],
    [0.82, 1, 0],
    [1, 1, 0],
  ],
  terra: [
    [0, 0, 0],
    [0.28, 0.24, 0.05],
    [0.62, 0.7, 0.09],
    [1, 1, 0],
  ],
  sol: [
    [0, 0, 0],
    [0.25, 0.22, 0.1],
    [0.55, 0.58, 0.16],
    [0.82, 0.9, 0.05],
    [1, 1, 0],
  ],
  luna: [
    [0, 0, 0],
    [0.2, 0.12, 0.06],
    [0.5, 0.52, 0.12],
    [0.78, 0.88, 0.06],
    [1, 1, 0],
  ],
};
const packed = [
  [0],
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [7],
  [8],
  [9],
  [6, true],
  [7, true],
  [8, true],
  [9, true],
  [4, true],
  [5, true],
  [10],
  [11],
  [14],
  [0],
  [15],
  [0],
  [16],
  [0],
  [17],
  [0],
  [18],
  [0],
  [19],
  [0],
  [20],
  [0],
  [12],
  [13],
];

const requestedNames = process.argv.slice(2);
for (const name of requestedNames.length ? requestedNames : names) {
  if (!names.includes(name)) throw new Error(`Unknown character: ${name}`);
  await build(name);
}

async function build(name) {
  const root = path.join(repositoryRoot, "packages", `pack-${name}`);
  const rawBytes = await readFile(
    path.join(root, "source/generated-sheet.png"),
  );
  const raw = PNG.sync.read(rawBytes);
  if (raw.width !== 1536 || raw.height !== 1024)
    throw new Error(`${name}: generated source must be 1536x1024`);
  const transparent = removeConnectedNeutralBackground(raw);
  await writeFile(
    path.join(root, "source/normalized-alpha.png"),
    PNG.sync.write(transparent, { colorType: 6, deflateLevel: 9 }),
  );
  const components = characterComponents(transparent);
  if (components.length !== 24)
    throw new Error(
      `${name}: expected 24 character components, found ${components.length}`,
    );
  const maxWidth = Math.max(
    ...components.map((item) => item.maxX - item.minX + 1),
  );
  const maxHeight = Math.max(
    ...components.map((item) => item.maxY - item.minY + 1),
  );
  const normalizationScale = Math.min(220 / maxWidth, 220 / maxHeight, 1);
  const sourceFrames = components.map((component) =>
    normalizeComponent(transparent, component, normalizationScale),
  );
  const variants = [];
  const report = {
    character: name,
    sourceSha256: sha(rawBytes),
    frames: [],
    variants: [],
  };
  for (const density of [1, 2, 4]) {
    const cell = 64 * density;
    const atlas = new PNG({ width: cell * 16, height: cell * 3 });
    for (const [index, [sourceIndex, mirrored = false]] of packed.entries()) {
      const resized = resizePremultiplied(sourceFrames[sourceIndex], cell);
      blit(
        resized,
        atlas,
        (index % 16) * cell,
        Math.floor(index / 16) * cell,
        mirrored,
      );
    }
    const bytes = PNG.sync.write(atlas, {
      colorType: 6,
      deflateLevel: 9,
      deflateStrategy: 3,
      filterType: 4,
    });
    const file = `atlas-${density}x.png`;
    await writeFile(path.join(root, file), bytes);
    variants.push({
      src: file,
      density,
      sourceCellSize: cell,
      sha256: sha(bytes),
    });
    report.variants.push({
      density,
      width: atlas.width,
      height: atlas.height,
      downloadBytes: bytes.length,
      decodeBytes: atlas.width * atlas.height * 4,
      sha256: sha(bytes),
    });
  }
  const title = name[0].toUpperCase() + name.slice(1);
  const locomotionPrefix = locomotionPrefixes[name] ?? "move";
  const states = statesFor(locomotionPrefix);
  const directions = Object.fromEntries(
    ["N", "NE", "E", "SE", "S", "SW", "W", "NW"].map((direction) => [
      direction,
      `${locomotionPrefix}:${direction}`,
    ]),
  );
  const manifest = {
    format: 1,
    name,
    version: "0.1.0",
    license: "Apache-2.0",
    metadata: {
      title,
      author: "Prajwal S. Venkateshmurthy",
      description: descriptions[name],
      tags: [name, "native-v0.1", "hd-adaptive"],
    },
    assets: {
      atlases: {
        columns: 16,
        rows: 3,
        logicalCellSize: 64,
        lineage: `${name}-generated-hd-v1`,
        variants,
      },
    },
    states,
    capabilities: {
      locomotion: {
        directions,
        ...(motionTimelines[name]
          ? {
              motion: {
                keyframes: motionTimelines[name].map(([at, advance, lift]) => ({
                  at,
                  advance,
                  lift,
                })),
              },
            }
          : {}),
      },
    },
    defaults: { scale: 1 },
  };
  const manifestPath = path.join(root, "character.json");
  const existingManifest = JSON.parse(await readFile(manifestPath, "utf8"));
  if (JSON.stringify(existingManifest) !== JSON.stringify(manifest))
    await writeFile(
      manifestPath,
      await format(JSON.stringify(manifest), { parser: "json" }),
    );
  const oneX = PNG.sync.read(await readFile(path.join(root, "atlas-1x.png")));
  report.frames = packed.map((_, index) =>
    metricsFrame(
      crop(oneX, (index % 16) * 64, Math.floor(index / 16) * 64, 64),
    ),
  );
  const artifactRoot = path.join(repositoryRoot, "artifacts/art", name);
  await mkdir(artifactRoot, { recursive: true });
  await writeFile(
    path.join(artifactRoot, "qa.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  );
  await writeFile(
    path.join(artifactRoot, "contact-sheet.png"),
    await readFile(path.join(root, "atlas-1x.png")),
  );
  await writeFile(
    path.join(root, "thumbnail.png"),
    PNG.sync.write(
      crop(
        PNG.sync.read(await readFile(path.join(root, "atlas-1x.png"))),
        0,
        0,
        64,
      ),
      { colorType: 6 },
    ),
  );
  console.log(
    `${name}: ${variants.map((item) => `${item.density}x=${item.sourceCellSize}px/${item.sha256.slice(0, 8)}`).join(" ")}`,
  );
}

function statesFor(prefix) {
  return {
    idle: { frames: [0, 1], durations: [900, 180], loop: true },
    [`${prefix}:N`]: { frames: [2, 3], fps: 6, loop: true },
    [`${prefix}:NE`]: { frames: [4, 5], fps: 6, loop: true },
    [`${prefix}:E`]: { frames: [6, 7], fps: 6, loop: true },
    [`${prefix}:SE`]: { frames: [8, 9], fps: 6, loop: true },
    [`${prefix}:W`]: { frames: [10, 11], fps: 6, loop: true },
    [`${prefix}:SW`]: { frames: [12, 13], fps: 6, loop: true },
    [`${prefix}:NW`]: { frames: [14, 15], fps: 6, loop: true },
    [`${prefix}:S`]: { frames: [16, 17], fps: 6, loop: true },
    click: { frames: [18, 19], durations: [260, 160], loop: false },
    "double-click": { frames: [20, 21], durations: [320, 160], loop: false },
    "context-click": { frames: [22, 23], durations: [300, 180], loop: false },
    scroll: { frames: [24, 25], durations: [280, 160], loop: false },
    happy: { frames: [26, 27], durations: [360, 180], loop: false },
    success: { frames: [28, 29], durations: [420, 180], loop: false },
    error: { frames: [30, 31], durations: [520, 220], loop: false },
    sleep: { frames: [32, 33], durations: [900, 1500], loop: true },
  };
}

function sha(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function backgroundPixel(data, index) {
  const r = data[index];
  const g = data[index + 1];
  const b = data[index + 2];
  return (
    Math.min(r, g, b) >= 230 && Math.max(r, g, b) - Math.min(r, g, b) <= 14
  );
}

function removeConnectedNeutralBackground(input) {
  const output = new PNG({ width: input.width, height: input.height });
  input.data.copy(output.data);
  const seen = new Uint8Array(input.width * input.height);
  const queue = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= input.width || y >= input.height) return;
    const point = y * input.width + x;
    if (seen[point] || !backgroundPixel(input.data, point * 4)) return;
    seen[point] = 1;
    queue.push(point);
  };
  for (let x = 0; x < input.width; x++) {
    push(x, 0);
    push(x, input.height - 1);
  }
  for (let y = 0; y < input.height; y++) {
    push(0, y);
    push(input.width - 1, y);
  }
  for (let cursor = 0; cursor < queue.length; cursor++) {
    const point = queue[cursor];
    const x = point % input.width;
    const y = Math.floor(point / input.width);
    output.data[point * 4 + 3] = 0;
    push(x - 1, y);
    push(x + 1, y);
    push(x, y - 1);
    push(x, y + 1);
  }
  return output;
}

function characterComponents(input) {
  const labels = new Int32Array(input.width * input.height);
  const components = [];
  let label = 0;
  for (let y = 0; y < input.height; y++)
    for (let x = 0; x < input.width; x++) {
      const start = y * input.width + x;
      if (labels[start] || input.data[start * 4 + 3] <= 8) continue;
      label++;
      const queue = [start];
      labels[start] = label;
      let minX = x,
        maxX = x,
        minY = y,
        maxY = y,
        area = 0;
      for (let cursor = 0; cursor < queue.length; cursor++) {
        const point = queue[cursor];
        const px = point % input.width;
        const py = Math.floor(point / input.width);
        area++;
        minX = Math.min(minX, px);
        maxX = Math.max(maxX, px);
        minY = Math.min(minY, py);
        maxY = Math.max(maxY, py);
        for (const next of [
          point - 1,
          point + 1,
          point - input.width,
          point + input.width,
        ]) {
          if (next < 0 || next >= labels.length || labels[next]) continue;
          const nx = next % input.width;
          if (Math.abs(nx - px) > 1 || input.data[next * 4 + 3] <= 8) continue;
          labels[next] = label;
          queue.push(next);
        }
      }
      if (area > 2_000)
        components.push({ label, minX, maxX, minY, maxY, area });
    }
  const selected = components.sort((a, b) => b.area - a.area).slice(0, 24);
  selected.sort((a, b) => {
    const rowA = Math.min(3, Math.floor((a.minY + a.maxY) / 2 / 256));
    const rowB = Math.min(3, Math.floor((b.minY + b.maxY) / 2 / 256));
    return rowA - rowB || a.minX - b.minX;
  });
  return selected.map((component) => ({ ...component, labels }));
}

function normalizeComponent(input, component, scale) {
  const width = component.maxX - component.minX + 1;
  const height = component.maxY - component.minY + 1;
  const isolated = new PNG({ width, height });
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      const sourcePoint =
        (component.minY + y) * input.width + component.minX + x;
      if (component.labels[sourcePoint] !== component.label) continue;
      const from = sourcePoint * 4;
      const to = (y * width + x) * 4;
      input.data.copy(isolated.data, to, from, from + 4);
    }
  const targetWidth = Math.max(1, Math.round(width * scale));
  const targetHeight = Math.max(1, Math.round(height * scale));
  const resized = resizeBilinear(isolated, targetWidth, targetHeight);
  const output = new PNG({ width: 256, height: 256 });
  blit(
    resized,
    output,
    Math.round((256 - targetWidth) / 2),
    242 - targetHeight,
    false,
  );
  return output;
}

function resizeBilinear(input, width, height) {
  if (input.width === width && input.height === height) return input;
  const output = new PNG({ width, height });
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      const sx = ((x + 0.5) * input.width) / width - 0.5;
      const sy = ((y + 0.5) * input.height) / height - 0.5;
      const x0 = Math.max(0, Math.floor(sx));
      const y0 = Math.max(0, Math.floor(sy));
      const x1 = Math.min(input.width - 1, x0 + 1);
      const y1 = Math.min(input.height - 1, y0 + 1);
      const fx = Math.max(0, sx - x0);
      const fy = Math.max(0, sy - y0);
      const weights = [
        [x0, y0, (1 - fx) * (1 - fy)],
        [x1, y0, fx * (1 - fy)],
        [x0, y1, (1 - fx) * fy],
        [x1, y1, fx * fy],
      ];
      let alpha = 0,
        red = 0,
        green = 0,
        blue = 0;
      for (const [px, py, weight] of weights) {
        const index = (py * input.width + px) * 4;
        const a = input.data[index + 3] / 255;
        alpha += a * weight;
        red += input.data[index] * a * weight;
        green += input.data[index + 1] * a * weight;
        blue += input.data[index + 2] * a * weight;
      }
      const index = (y * width + x) * 4;
      output.data[index + 3] = Math.round(alpha * 255);
      if (alpha) {
        output.data[index] = Math.round(red / alpha);
        output.data[index + 1] = Math.round(green / alpha);
        output.data[index + 2] = Math.round(blue / alpha);
      }
    }
  return output;
}

function crop(input, x0, y0, size) {
  const output = new PNG({ width: size, height: size });
  for (let y = 0; y < size; y++) {
    const source = ((y0 + y) * input.width + x0) * 4;
    input.data.copy(output.data, y * size * 4, source, source + size * 4);
  }
  return output;
}

function resizePremultiplied(input, size) {
  if (input.width === size) return input;
  const ratio = input.width / size;
  if (!Number.isInteger(ratio))
    throw new Error("only integer density reduction is supported");
  const output = new PNG({ width: size, height: size });
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      let alpha = 0,
        red = 0,
        green = 0,
        blue = 0;
      for (let yy = 0; yy < ratio; yy++)
        for (let xx = 0; xx < ratio; xx++) {
          const i = ((y * ratio + yy) * input.width + x * ratio + xx) * 4;
          const a = input.data[i + 3] / 255;
          alpha += a;
          red += input.data[i] * a;
          green += input.data[i + 1] * a;
          blue += input.data[i + 2] * a;
        }
      const count = ratio * ratio;
      const o = (y * size + x) * 4;
      output.data[o + 3] = Math.round((alpha / count) * 255);
      if (alpha) {
        output.data[o] = Math.round(red / alpha);
        output.data[o + 1] = Math.round(green / alpha);
        output.data[o + 2] = Math.round(blue / alpha);
      }
    }
  return output;
}

function blit(source, target, x0, y0, mirror) {
  for (let y = 0; y < source.height; y++)
    for (let x = 0; x < source.width; x++) {
      const sourceX = mirror ? source.width - 1 - x : x;
      const from = (y * source.width + sourceX) * 4;
      const to = ((y0 + y) * target.width + x0 + x) * 4;
      source.data.copy(target.data, to, from, from + 4);
    }
}

function metricsFrame(frame) {
  let minX = 64,
    minY = 64,
    maxX = -1,
    maxY = -1,
    visible = 0,
    partial = 0;
  for (let y = 0; y < 64; y++)
    for (let x = 0; x < 64; x++) {
      const alpha = frame.data[(y * 64 + x) * 4 + 3];
      if (alpha <= 8) continue;
      visible++;
      if (alpha < 247) partial++;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  return {
    minX,
    minY,
    maxX,
    maxY,
    visible,
    occupancy: visible / 4096,
    partial: partial / visible,
  };
}
