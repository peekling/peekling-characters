import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { PNG } from "pngjs";
import {
  FRAME_COUNT,
  STATE_GROUPS,
  createFrames,
} from "../source/blueprint.mjs";

const pack = JSON.parse(
  await readFile(new URL("../character.json", import.meta.url)),
);

test("Nib exposes 100 states across six intentional performance families", () => {
  assert.equal(Object.keys(pack.states).length, FRAME_COUNT);
  assert.deepEqual(
    Object.fromEntries(
      Object.entries(STATE_GROUPS).map(([group, states]) => [
        group,
        states.length,
      ]),
    ),
    {
      rest: 12,
      gaze: 12,
      emotion: 20,
      interaction: 16,
      tech: 16,
      motion: 24,
    },
  );
  assert.deepEqual(
    Object.keys(pack.states),
    Object.values(STATE_GROUPS).flat(),
  );
});

test("Nib uses adaptive densities while retaining its 64px rendered presence", () => {
  assert.deepEqual(
    pack.assets.atlases.variants.map(({ density }) => density),
    [1, 2, 4],
  );
  assert.equal(pack.assets.atlases.logicalCellSize, 32);
  assert.equal(pack.defaults.scale, 2);
  assert.equal(pack.assets.atlases.columns, 16);
  assert.equal(pack.assets.atlases.rows, 7);
});

test("windshield eyes cover a broad emotional range", () => {
  for (const emotion of [
    "happy",
    "delighted",
    "surprised",
    "curious",
    "worried",
    "sad",
    "angry",
    "determined",
    "shy",
    "relieved",
  ])
    assert.ok(pack.states[emotion], `missing ${emotion}`);
});

test("pointer pursuit resolves to eight proper race cycles", () => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  for (const direction of directions) {
    assert.equal(
      pack.capabilities.locomotion.directions[direction],
      `race:${direction}`,
    );
    for (const gait of ["cruise", "race", "boost"]) {
      const name = `${gait}:${direction}`;
      const state = pack.states[name];
      assert.ok(state.loop);
      assert.ok(state.frames.length >= 3);
      assert.equal(new Set(state.frames).size, 3);
      assert.equal(state.frames[0], Object.keys(pack.states).indexOf(name));
    }
  }
});

test("every racing direction cycles through three rolling wheel phases", () => {
  const frames = createFrames();
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  for (const direction of directions) {
    const phases = ["cruise", "race", "boost"].map(
      (gait) =>
        frames.find((frame) => frame.name === `${gait}:${direction}`)
          .wheelPhase,
    );
    assert.deepEqual(phases, [0, 1, 2]);
  }
});

test("compiled motion frames render readable and changing wheel spokes", async () => {
  const atlas = PNG.sync.read(
    await readFile(new URL("../atlas-4x.png", import.meta.url)),
  );
  const cell = 128;
  const frames = createFrames();
  const wheelCenters = [
    [38, 99],
    [91, 99],
  ];
  const wheelHash = (frameIndex) => {
    const bytes = [];
    let brightSpokePixels = 0;
    const left = (frameIndex % 16) * cell;
    const top = Math.floor(frameIndex / 16) * cell;
    for (const [centerX, centerY] of wheelCenters) {
      for (let y = -10; y <= 10; y++) {
        for (let x = -10; x <= 10; x++) {
          if (x * x + y * y > 100) continue;
          const offset =
            ((top + centerY + y) * atlas.width + left + centerX + x) * 4;
          const red = atlas.data[offset];
          const green = atlas.data[offset + 1];
          const blue = atlas.data[offset + 2];
          const alpha = atlas.data[offset + 3];
          bytes.push(red, green, blue, alpha);
          if (
            alpha > 160 &&
            ((red > 200 && green > 140 && blue < 120) ||
              (red < 120 && green > 180 && blue > 180))
          )
            brightSpokePixels++;
        }
      }
    }
    assert.ok(
      brightSpokePixels >= 10,
      `frame ${frameIndex} needs readable wheel spokes`,
    );
    return createHash("sha256").update(Buffer.from(bytes)).digest("hex");
  };

  for (const direction of ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]) {
    const hashes = ["cruise", "race", "boost"].map((gait) => {
      const frame = frames.find(
        (candidate) => candidate.name === `${gait}:${direction}`,
      );
      return wheelHash(frame.index);
    });
    assert.equal(new Set(hashes).size, 3);
  }
});

test("every state starts on its own dense signature frame", () => {
  const signatures = Object.values(pack.states).map((state) => state.frames[0]);
  assert.deepEqual(signatures, [...Array(FRAME_COUNT).keys()]);
  const used = new Set(
    Object.values(pack.states).flatMap((state) => state.frames),
  );
  assert.equal(used.size, FRAME_COUNT);
});

test("all 100 signature frames remain visible and pixel-distinct at 1x", async () => {
  const atlas = PNG.sync.read(
    await readFile(new URL("../atlas-1x.png", import.meta.url)),
  );
  const cell = pack.assets.atlases.logicalCellSize;
  const hashes = [];
  for (let frame = 0; frame < FRAME_COUNT; frame++) {
    const bytes = Buffer.alloc(cell * cell * 4);
    let visible = 0;
    for (let y = 0; y < cell; y++) {
      for (let x = 0; x < cell; x++) {
        const source =
          ((Math.floor(frame / 16) * cell + y) * atlas.width +
            (frame % 16) * cell +
            x) *
          4;
        const target = (y * cell + x) * 4;
        atlas.data.copy(bytes, target, source, source + 4);
        if (atlas.data[source + 3] > 8) visible++;
      }
    }
    assert.ok(visible > cell * cell * 0.08, `frame ${frame} must be visible`);
    hashes.push(createHash("sha256").update(bytes).digest("hex"));
  }
  assert.equal(new Set(hashes).size, FRAME_COUNT);
});

test("manifest atlas hashes match all generated bytes", async () => {
  for (const variant of pack.assets.atlases.variants) {
    const bytes = await readFile(new URL(`../${variant.src}`, import.meta.url));
    assert.equal(
      createHash("sha256").update(bytes).digest("hex"),
      variant.sha256,
    );
  }
});
