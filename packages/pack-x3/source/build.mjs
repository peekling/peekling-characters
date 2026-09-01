import { createHash } from "node:crypto";
import { mkdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";
import {
  CHARACTER_ID,
  CHARACTER_TITLE,
  COLUMNS,
  FRAME_COUNT,
  LICENSE_ID,
  LOGICAL_CELL_SIZE,
  ROWS,
  STATE_GROUPS,
  VERSION,
  createExpressions,
  createManifest,
  screenEyeSignature,
} from "./blueprint.mjs";
import { renderAtlas, renderFrame } from "./render.mjs";

const sourceRoot = fileURLToPath(new URL(".", import.meta.url));
const artifactsRoot = path.resolve(sourceRoot, "../../../artifacts/art/x3");
const outputRoot = path.resolve(
  option("--out") ?? path.join(artifactsRoot, "generated-pack"),
);
const relativeOutput = path.relative(artifactsRoot, outputRoot);
if (
  relativeOutput.startsWith("..") ||
  path.isAbsolute(relativeOutput) ||
  relativeOutput === ""
)
  throw new Error("X3 generated output must stay under artifacts/art/x3");
const outputParent = path.dirname(outputRoot);
const temporaryRoot = path.join(
  outputParent,
  `.${path.basename(outputRoot)}-tmp-${process.pid}`,
);
const maximumAtlasBytes = 4 * 1024 * 1024;

export async function buildPack() {
  const expressions = createExpressions();
  const atlases = new Map();
  const report = {
    contract: "peekling-x3-qa-v1",
    status: "release-candidate",
    character: CHARACTER_ID,
    frames: FRAME_COUNT,
    cells: COLUMNS * ROWS,
    spareTransparentCells: COLUMNS * ROWS - FRAME_COUNT,
    states: FRAME_COUNT,
    uniqueScreenEyeSignatures: new Set(expressions.map(screenEyeSignature))
      .size,
    uniqueRenderedFrames1x: 0,
    displayMechanics: "body-locked-screen-face",
    groupCounts: Object.fromEntries(
      Object.entries(STATE_GROUPS).map(([group, names]) => [
        group,
        names.length,
      ]),
    ),
    variants: {},
  };

  for (const density of [1, 2, 4]) {
    const atlas = renderAtlas(expressions, density);
    const bytes = encode(atlas);
    if (bytes.byteLength > maximumAtlasBytes)
      throw new Error(
        `atlas-${density}x.png is ${bytes.byteLength} bytes, above the 4 MiB pack limit`,
      );
    const sha256 = sha(bytes);
    atlases.set(density, { atlas, bytes, sha256 });
    report.variants[density] = {
      bytes: bytes.byteLength,
      sha256,
      width: atlas.width,
      height: atlas.height,
      sourceCellSize: LOGICAL_CELL_SIZE * density,
      renderedDirectly: true,
    };
  }

  const frameHashes = expressions.map((expression) =>
    sha(encode(renderFrame(expression, 1))),
  );
  report.uniqueRenderedFrames1x = new Set(frameHashes).size;
  if (report.uniqueRenderedFrames1x !== FRAME_COUNT)
    throw new Error("The 1x atlas contains duplicate rendered state frames");

  const hashes = Object.fromEntries(
    [...atlases].map(([density, atlas]) => [density, atlas.sha256]),
  );
  const manifest = createManifest(hashes);
  const thumbnail = renderFrame(expressions[0], 4 / 3);
  const stateSheet = createStateSheet(atlases.get(1).atlas, expressions);

  try {
    await mkdir(outputParent, { recursive: true });
    await rm(outputRoot, { recursive: true, force: true });
    await mkdir(temporaryRoot, { recursive: false });
    for (const [density, atlas] of atlases)
      await writeFile(
        path.join(temporaryRoot, `atlas-${density}x.png`),
        atlas.bytes,
      );
    await writeFile(
      path.join(temporaryRoot, "thumbnail.png"),
      encode(thumbnail),
    );
    await writeFile(
      path.join(temporaryRoot, "character.json"),
      `${JSON.stringify(manifest, null, 2)}\n`,
    );
    await writeFile(
      path.join(temporaryRoot, "package.json"),
      `${JSON.stringify(packageManifest(), null, 2)}\n`,
    );
    await writeFile(path.join(temporaryRoot, "LICENSE"), licenseText());
    await writeFile(path.join(temporaryRoot, "NOTICE"), noticeText());
    await writeFile(path.join(temporaryRoot, "README.md"), packReadme());
    await rename(temporaryRoot, outputRoot);
  } catch (error) {
    await rm(temporaryRoot, { recursive: true, force: true });
    throw error;
  }

  await writeFile(
    path.join(outputParent, "x3-qa.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  );
  await writeFile(
    path.join(outputParent, "x3-state-sheet.png"),
    encode(stateSheet),
  );
  await writeFile(
    path.join(outputParent, "x3-screen-state-map.md"),
    screenStateMap(expressions),
  );
  return { outputRoot, report };
}

function createStateSheet(atlas, expressions) {
  const columns = 10;
  const tileWidth = 72;
  const tileHeight = 76;
  const sheet = new PNG({
    width: columns * tileWidth,
    height: 10 * tileHeight,
  });
  fill(sheet, 13, 17, 24, 255);
  const groupColor = {
    rest: [84, 218, 233],
    gaze: [119, 171, 255],
    emotion: [255, 147, 195],
    interaction: [255, 192, 90],
    lifecycle: [125, 221, 174],
    motion: [187, 147, 255],
  };
  expressions.forEach((expression, index) => {
    const tileX = (index % columns) * tileWidth;
    const tileY = Math.floor(index / columns) * tileHeight;
    fillRect(
      sheet,
      tileX + 2,
      tileY + 2,
      tileWidth - 4,
      tileHeight - 4,
      24,
      29,
      39,
      255,
    );
    const [red, green, blue] = groupColor[expression.group];
    fillRect(
      sheet,
      tileX + 3,
      tileY + 3,
      tileWidth - 6,
      2,
      red,
      green,
      blue,
      255,
    );
    PNG.bitblt(
      atlas,
      sheet,
      (index % COLUMNS) * LOGICAL_CELL_SIZE,
      Math.floor(index / COLUMNS) * LOGICAL_CELL_SIZE,
      LOGICAL_CELL_SIZE,
      LOGICAL_CELL_SIZE,
      tileX + 4,
      tileY + 4,
    );
    drawNumber(sheet, index + 1, tileX + 4, tileY + 68, red, green, blue);
  });
  return sheet;
}

const DIGITS = {
  0: ["111", "101", "101", "101", "111"],
  1: ["010", "110", "010", "010", "111"],
  2: ["111", "001", "111", "100", "111"],
  3: ["111", "001", "111", "001", "111"],
  4: ["101", "101", "111", "001", "001"],
  5: ["111", "100", "111", "001", "111"],
  6: ["111", "100", "111", "101", "111"],
  7: ["111", "001", "010", "010", "010"],
  8: ["111", "101", "111", "101", "111"],
  9: ["111", "101", "111", "001", "111"],
};

function drawNumber(image, value, left, top, red, green, blue) {
  String(value)
    .split("")
    .forEach((digit, digitIndex) => {
      DIGITS[digit].forEach((row, rowIndex) => {
        [...row].forEach((bit, columnIndex) => {
          if (bit === "1")
            setPixel(
              image,
              left + digitIndex * 4 + columnIndex,
              top + rowIndex,
              red,
              green,
              blue,
              255,
            );
        });
      });
    });
}

function screenStateMap(expressions) {
  const lines = [
    "# X3 screen-state map",
    "",
    "Every state begins on the numbered signature frame shown in `x3-state-sheet.png`. The monitor body stays coherent while its cyan X and 3 glyph-eyes perform the expression.",
    "",
    "| # | State | Family | Gaze | X and 3 treatment |",
    "|---:|---|---|---|---|",
  ];
  for (const expression of expressions) {
    const left = expression.eyes.left;
    const right = expression.eyes.right;
    const gazeX = ((left.gazeX + right.gazeX) / 2).toFixed(1);
    const gazeY = ((left.gazeY + right.gazeY) / 2).toFixed(1);
    const treatment = `${left.scaleX.toFixed(2)}x${left.scaleY.toFixed(2)} / ${right.scaleX.toFixed(2)}x${right.scaleY.toFixed(2)}, ${left.spark}, glitch ${left.glitch}`;
    lines.push(
      `| ${expression.index + 1} | \`${expression.name}\` | ${expression.group} | ${gazeX}, ${gazeY} | ${treatment} |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function packageManifest() {
  return {
    name: "@peekling/pack-x3",
    version: VERSION,
    description:
      "Retro terminal Peekling character pack with 100 expressive screen-eye states",
    license: LICENSE_ID,
    author: {
      name: "Prajwal S. Venkateshmurthy",
      url: "https://prajwal.me",
    },
    files: [
      "character.json",
      "atlas-1x.png",
      "atlas-2x.png",
      "atlas-4x.png",
      "thumbnail.png",
      "LICENSE",
      "NOTICE",
      "README.md",
    ],
  };
}

function packReadme() {
  return `# \`@peekling/pack-x3\`\n\nX3 is a data-only Peekling character pack. A compact retro terminal acts as the body, while permanent cyan X and 3 glyph-eyes express one hundred named states.\n\nThe pack contains independent 64, 128, and 256px atlas densities. Every state begins on its own signature frame and every animation moves between at least two distinct display performances.\n`;
}

function licenseText() {
  return `Apache-2.0\n`;
}

function noticeText() {
  return `X3 Character Pack\nCopyright 2026 Prajwal S. Venkateshmurthy\n\nOriginal design and development of X3 by Prajwal S. Venkateshmurthy.\nContact: https://prajwal.me\nProject: https://peekling.com/\n`;
}

function encode(png) {
  return PNG.sync.write(png, {
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

function fill(image, red, green, blue, alpha) {
  fillRect(image, 0, 0, image.width, image.height, red, green, blue, alpha);
}

function fillRect(image, left, top, width, height, red, green, blue, alpha) {
  for (let y = top; y < top + height; y++) {
    for (let x = left; x < left + width; x++)
      setPixel(image, x, y, red, green, blue, alpha);
  }
}

function setPixel(image, x, y, red, green, blue, alpha) {
  if (x < 0 || y < 0 || x >= image.width || y >= image.height) return;
  const offset = (y * image.width + x) * 4;
  image.data[offset] = red;
  image.data[offset + 1] = green;
  image.data[offset + 2] = blue;
  image.data[offset + 3] = alpha;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const result = await buildPack();
  console.log(
    `Built ${FRAME_COUNT} X3 states at 1x, 2x, and 4x in ${result.outputRoot}`,
  );
}
