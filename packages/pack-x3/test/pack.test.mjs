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
  screenEyeSignature,
} from "../source/blueprint.mjs";
import { renderAtlas, renderFrame } from "../source/render.mjs";

const DIRECTIONS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

test("X3 exposes 100 states across six intentional families", () => {
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
  assert.equal(COLUMNS * ROWS, FRAME_COUNT);
});

test("every state keeps the X and 3 screen eyes while giving them a unique performance", () => {
  const expressions = createExpressions();
  assert.equal(expressions.length, FRAME_COUNT);
  assert.equal(new Set(expressions.map(screenEyeSignature)).size, FRAME_COUNT);
  for (const expression of expressions) {
    assert.equal(
      expression.mechanics,
      "body-locked-screen-face",
      expression.name,
    );
    assert.equal(expression.eyes.left.glyph, "X", expression.name);
    assert.equal(expression.eyes.right.glyph, "3", expression.name);
    assert.ok(Number.isFinite(expression.eyes.left.gazeX), expression.name);
    assert.ok(Number.isFinite(expression.eyes.left.gazeY), expression.name);
    assert.ok(Number.isFinite(expression.eyes.right.gazeX), expression.name);
    assert.ok(Number.isFinite(expression.eyes.right.gazeY), expression.name);
  }
});

test("screen gaze and locomotion cover all eight engine directions", () => {
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

test("X3 covers a broad emotional vocabulary through its display", () => {
  const names = new Set(Object.values(STATE_GROUPS).flat());
  for (const state of [
    "content",
    "joyful",
    "delighted",
    "excited",
    "proud",
    "hopeful",
    "surprised",
    "startled",
    "confused",
    "puzzled",
    "worried",
    "anxious",
    "sad",
    "disappointed",
    "lonely",
    "tired",
    "annoyed",
    "angry",
    "determined",
    "brave",
    "shy",
    "bashful",
    "mischievous",
    "playful",
    "relieved",
  ])
    assert.ok(names.has(state), state);
});

test("every state starts on its own signature frame and animates the display", () => {
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

test("all 100 frames are visible, cyan-faced, transparent, and pixel-distinct at 1x", () => {
  const signatures = new Set();
  for (const expression of createExpressions()) {
    const frame = renderFrame(expression, 1);
    assert.equal(frame.width, LOGICAL_CELL_SIZE);
    assert.equal(frame.height, LOGICAL_CELL_SIZE);
    signatures.add(PNG.sync.write(frame).toString("base64"));
    assert.ok(
      countVisiblePixels(frame) > LOGICAL_CELL_SIZE * LOGICAL_CELL_SIZE * 0.2,
      expression.name,
    );
    assert.ok(countCyanPixels(frame) >= 3, expression.name);
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

function countCyanPixels(png) {
  let count = 0;
  for (let offset = 0; offset < png.data.length; offset += 4) {
    if (
      png.data[offset + 3] > 180 &&
      png.data[offset + 1] > 125 &&
      png.data[offset + 2] > 140 &&
      png.data[offset] < 80
    )
      count++;
  }
  return count;
}
