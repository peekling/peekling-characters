import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { PNG } from "pngjs";
import {
  COLUMNS,
  FRAME_COUNT,
  LOGICAL_CELL_SIZE,
  ROWS,
  STATE_GROUPS,
  createExpressions,
  createManifest,
  createStates,
  eyeSignature,
} from "../source/blueprint.mjs";
import { renderAtlas, renderFrame } from "../source/render.mjs";

const DIRECTIONS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

test("the catalog contains exactly 100 named states in six intentional groups", () => {
  assert.deepEqual(
    Object.fromEntries(
      Object.entries(STATE_GROUPS).map(([group, names]) => [
        group,
        names.length,
      ]),
    ),
    {
      rest: 12,
      gaze: 16,
      emotion: 24,
      interaction: 16,
      lifecycle: 16,
      motion: 16,
    },
  );

  const names = Object.values(STATE_GROUPS).flat();
  assert.equal(names.length, FRAME_COUNT);
  assert.equal(new Set(names).size, FRAME_COUNT);
  assert.ok(
    names.every((name) =>
      /^[a-z0-9-]+(?::(?:[a-z0-9-]+|N|NE|E|SE|S|SW|W|NW))?$/.test(name),
    ),
  );
  assert.equal(COLUMNS * ROWS, FRAME_COUNT);
});

test("every state owns a genuinely distinct eye performance", () => {
  const expressions = createExpressions();
  assert.equal(expressions.length, FRAME_COUNT);
  assert.equal(new Set(expressions.map(eyeSignature)).size, FRAME_COUNT);

  for (const expression of expressions) {
    assert.ok(expression.eyes.left, expression.name);
    assert.ok(expression.eyes.right, expression.name);
    assert.ok(Number.isFinite(expression.eyes.left.gazeX), expression.name);
    assert.ok(Number.isFinite(expression.eyes.left.gazeY), expression.name);
    assert.ok(Number.isFinite(expression.eyes.right.gazeX), expression.name);
    assert.ok(Number.isFinite(expression.eyes.right.gazeY), expression.name);
  }
});

test("gaze and locomotion cover all eight engine directions", () => {
  const expressions = createExpressions();
  for (const direction of DIRECTIONS) {
    assert.ok(expressions.some(({ name }) => name === `look:${direction}`));
  }

  const manifest = createManifest({
    1: "0".repeat(64),
    2: "0".repeat(64),
    4: "0".repeat(64),
  });
  assert.deepEqual(
    Object.keys(manifest.capabilities.locomotion.directions),
    DIRECTIONS,
  );
  for (const direction of DIRECTIONS) {
    assert.equal(
      manifest.capabilities.locomotion.directions[direction],
      `move:${direction}`,
    );
  }
});

test("the emotional range includes positive, vulnerable, alert, and difficult feelings", () => {
  const names = new Set(Object.values(STATE_GROUPS).flat());
  for (const state of [
    "content",
    "happy",
    "proud",
    "hopeful",
    "shy",
    "worried",
    "anxious",
    "sad",
    "lonely",
    "annoyed",
    "angry",
    "determined",
    "surprised",
    "confused",
    "mischievous",
    "playful",
  ]) {
    assert.ok(names.has(state), state);
  }
});

test("Posh exposes the canonical states used by engine interactions and website Plans", () => {
  const names = new Set(Object.values(STATE_GROUPS).flat());
  for (const state of [
    "idle",
    "happy",
    "scroll",
    "scroll:fly",
    "scroll:fall",
    "music:headphones",
  ])
    assert.ok(names.has(state), `missing canonical state ${state}`);
});

test("every state begins on its own signature frame and animates eye movement", () => {
  const states = createStates();
  assert.equal(Object.keys(states).length, FRAME_COUNT);
  assert.equal(
    new Set(Object.values(states).map(({ frames }) => frames[0])).size,
    FRAME_COUNT,
  );

  for (const [name, state] of Object.entries(states)) {
    assert.ok(state.frames.length >= 2 && state.frames.length <= 64, name);
    assert.ok(new Set(state.frames).size >= 2, name);
    assert.equal(typeof state.loop, "boolean", name);
    assert.notEqual(
      state.fps === undefined,
      state.durations === undefined,
      name,
    );
    if (state.durations)
      assert.equal(state.durations.length, state.frames.length, name);
  }
});

test("all 100 logical frames render visibly and remain pixel-distinct at 1x", () => {
  const expressions = createExpressions();
  const signatures = new Set();

  for (const expression of expressions) {
    const frame = renderFrame(expression, 1);
    assert.equal(frame.width, LOGICAL_CELL_SIZE);
    assert.equal(frame.height, LOGICAL_CELL_SIZE);
    const signature = PNG.sync.write(frame).toString("base64");
    signatures.add(signature);
    assert.ok(
      countVisiblePixels(frame) > LOGICAL_CELL_SIZE * LOGICAL_CELL_SIZE * 0.35,
      expression.name,
    );
    assert.ok(countDarkEyePixels(frame) > 35, expression.name);
    assert.equal(frame.data[3], 0, `${expression.name} top-left corner`);
  }

  assert.equal(signatures.size, FRAME_COUNT);
});

test("each true density has exact 10 by 10 geometry", () => {
  for (const density of [1, 2, 4]) {
    const atlas = renderAtlas(createExpressions(), density);
    const cell = LOGICAL_CELL_SIZE * density;
    assert.equal(atlas.width, COLUMNS * cell);
    assert.equal(atlas.height, ROWS * cell);
    assert.equal(atlas.width * atlas.height, COLUMNS * ROWS * cell * cell);
  }
});

test("the committed data-only pack matches the deterministic renderer", async () => {
  const manifest = JSON.parse(
    await readFile(new URL("../character.json", import.meta.url), "utf8"),
  );
  assert.equal(Object.keys(manifest.states).length, FRAME_COUNT);
  for (const density of [1, 2, 4]) {
    const rendered = PNG.sync.write(renderAtlas(createExpressions(), density), {
      colorType: 6,
      inputColorType: 6,
      inputHasAlpha: true,
      deflateLevel: 9,
      deflateStrategy: 3,
    });
    const committed = await readFile(
      new URL(`../atlas-${density}x.png`, import.meta.url),
    );
    assert.deepEqual(
      committed,
      rendered,
      `${density}x atlas drifted from source`,
    );
    const expectedHash = createHash("sha256").update(committed).digest("hex");
    assert.equal(
      manifest.assets.atlases.variants.find(
        (variant) => variant.density === density,
      ).sha256,
      expectedHash,
    );
  }
});

function countVisiblePixels(png) {
  let count = 0;
  for (let offset = 3; offset < png.data.length; offset += 4) {
    if (png.data[offset] > 8) count++;
  }
  return count;
}

function countDarkEyePixels(png) {
  let count = 0;
  for (let offset = 0; offset < png.data.length; offset += 4) {
    const alpha = png.data[offset + 3];
    const lightness =
      png.data[offset] + png.data[offset + 1] + png.data[offset + 2];
    if (alpha > 200 && lightness < 260) count++;
  }
  return count;
}
