export const CHARACTER_ID = "byte";
export const CHARACTER_TITLE = "Byte";
export const VERSION = "0.1.1";
export const LICENSE_ID = "Apache-2.0";
export const COLUMNS = 16;
export const ROWS = 7;
export const LOGICAL_CELL_SIZE = 32;
export const FRAME_COUNT = 100;

export const STATE_GROUPS = Object.freeze({
  rest: Object.freeze([
    "idle",
    "blink",
    "slow-blink",
    "sit",
    "crouch",
    "stretch",
    "yawn",
    "sleep",
    "dream",
    "wake",
    "listen",
    "recharge",
  ]),
  gaze: Object.freeze([
    "look:N",
    "look:NE",
    "look:E",
    "look:SE",
    "look:S",
    "look:SW",
    "look:W",
    "look:NW",
    "scan-left",
    "scan-right",
    "near-focus",
    "far-focus",
  ]),
  emotion: Object.freeze([
    "happy",
    "delighted",
    "excited",
    "proud",
    "surprised",
    "curious",
    "puzzled",
    "confused",
    "worried",
    "anxious",
    "sad",
    "tired",
    "annoyed",
    "angry",
    "determined",
    "brave",
    "shy",
    "mischievous",
    "playful",
    "relieved",
  ]),
  interaction: Object.freeze([
    "hover",
    "click",
    "double-click",
    "context-click",
    "press",
    "release",
    "drag",
    "drag-hover",
    "drop",
    "scroll:fly",
    "scroll:fall",
    "land",
    "greet",
    "goodbye",
    "cheer",
    "high-five",
  ]),
  tech: Object.freeze([
    "boot",
    "loading",
    "waiting",
    "success",
    "error",
    "warning",
    "notification",
    "sync",
    "upload",
    "download",
    "scan",
    "hologram",
    "decode",
    "shield",
    "stealth",
    "overclock",
  ]),
  motion: Object.freeze([
    "run:N",
    "run:NE",
    "run:E",
    "run:SE",
    "run:S",
    "run:SW",
    "run:W",
    "run:NW",
    "chase:N",
    "chase:NE",
    "chase:E",
    "chase:SE",
    "chase:S",
    "chase:SW",
    "chase:W",
    "chase:NW",
    "dash:N",
    "dash:NE",
    "dash:E",
    "dash:SE",
    "dash:S",
    "dash:SW",
    "dash:W",
    "dash:NW",
  ]),
});

export const DIRECTIONS = Object.freeze([
  "N",
  "NE",
  "E",
  "SE",
  "S",
  "SW",
  "W",
  "NW",
]);

const GROUP_POSES = Object.freeze({
  rest: [0, 0, 0, 0, 1, 12, 13, 14, 15, 0, 13, 17],
  gaze: [0, 0, 1, 1, 6, 1, 1, 0, 22, 22, 0, 0],
  emotion: [
    19, 20, 20, 19, 22, 13, 22, 22, 21, 22, 15, 13, 21, 21, 1, 1, 0, 19, 20, 19,
  ],
  interaction: [0, 16, 16, 22, 16, 0, 16, 17, 5, 4, 5, 3, 19, 23, 20, 16],
  tech: [0, 17, 0, 20, 21, 21, 22, 17, 18, 18, 18, 17, 18, 17, 12, 5],
});

const EFFECTS = Object.freeze({
  rest: [
    "pulse",
    "blink",
    "soft-ring",
    "none",
    "focus",
    "stretch",
    "yawn",
    "sleep",
    "dream",
    "wake",
    "listen",
    "charge",
  ],
  gaze: [
    "direction",
    "direction",
    "direction",
    "direction",
    "direction",
    "direction",
    "direction",
    "direction",
    "scan-left",
    "scan-right",
    "near-focus",
    "far-focus",
  ],
  emotion: [
    "heart",
    "double-star",
    "burst",
    "proud",
    "surprise",
    "question",
    "question-double",
    "confused",
    "worry",
    "anxious",
    "tear",
    "tired",
    "annoyed",
    "angry",
    "determined",
    "brave",
    "shy",
    "mischief",
    "play",
    "relieved",
  ],
  interaction: [
    "hover",
    "click",
    "double-click",
    "context",
    "press",
    "release",
    "drag",
    "drag-hover",
    "drop",
    "fly",
    "fall",
    "land",
    "greet",
    "goodbye",
    "cheer",
    "high-five",
  ],
  tech: [
    "boot",
    "loading",
    "waiting",
    "success",
    "error",
    "warning",
    "notification",
    "sync",
    "upload",
    "download",
    "scan",
    "hologram",
    "decode",
    "shield",
    "stealth",
    "overclock",
  ],
});

const MOTION_POSES = Object.freeze({
  run: [7, 3, 3, 8, 6, 8, 3, 3],
  chase: [9, 4, 4, 9, 10, 9, 4, 4],
  dash: [5, 5, 5, 5, 5, 5, 5, 5],
});

const MIRRORED_DIRECTIONS = new Set(["SW", "W", "NW"]);

export function createFrames() {
  const frames = [];
  for (const [group, names] of Object.entries(STATE_GROUPS)) {
    names.forEach((name, groupIndex) => {
      const direction = directionFromName(name);
      const gait = group === "motion" ? name.split(":")[0] : undefined;
      const directionIndex = direction ? DIRECTIONS.indexOf(direction) : -1;
      frames.push({
        index: frames.length,
        name,
        group,
        groupIndex,
        direction,
        gait,
        basePose:
          group === "motion"
            ? MOTION_POSES[gait][directionIndex]
            : GROUP_POSES[group][groupIndex],
        mirror:
          Boolean(direction && MIRRORED_DIRECTIONS.has(direction)) ||
          (group === "gaze" && groupIndex === 8),
        effect:
          group === "motion" ? `${gait}-trail` : EFFECTS[group][groupIndex],
        variant: frames.length,
      });
    });
  }
  if (frames.length !== FRAME_COUNT)
    throw new Error(`Byte blueprint must contain ${FRAME_COUNT} frames`);
  if (new Set(frames.map((frame) => frame.name)).size !== FRAME_COUNT)
    throw new Error("Byte blueprint contains duplicate state names");
  return frames;
}

export function createManifest(hashes) {
  const frames = createFrames();
  const indices = new Map(frames.map((frame) => [frame.name, frame.index]));
  const states = Object.fromEntries(
    frames.map((frame) => [frame.name, stateFor(frame, indices)]),
  );
  const directions = Object.fromEntries(
    DIRECTIONS.map((direction) => [direction, `chase:${direction}`]),
  );
  return {
    format: 1,
    name: CHARACTER_ID,
    version: VERSION,
    license: LICENSE_ID,
    metadata: {
      title: CHARACTER_TITLE,
      author: "Prajwal S. Venkateshmurthy",
      description:
        "A futuristic cyber cat that runs, chases, scans, and reacts through a cyan visor and animated tech effects.",
      tags: ["byte", "cyber-cat", "futuristic", "hd-adaptive", "states-100"],
    },
    assets: {
      atlases: {
        columns: COLUMNS,
        rows: ROWS,
        logicalCellSize: LOGICAL_CELL_SIZE,
        lineage: "byte-cyber-cat-hd-v3",
        variants: [1, 2, 4].map((density) => ({
          src: `atlas-${density}x.png`,
          density,
          sourceCellSize: LOGICAL_CELL_SIZE * density,
          sha256: hashes[density],
        })),
      },
    },
    states,
    capabilities: {
      locomotion: {
        directions,
        motion: {
          keyframes: [
            { at: 0, advance: 0, lift: 0 },
            { at: 0.18, advance: 0.08, lift: 0.08 },
            { at: 0.45, advance: 0.56, lift: 0.16 },
            { at: 0.72, advance: 0.9, lift: 0.05 },
            { at: 1, advance: 1, lift: 0 },
          ],
        },
      },
    },
    defaults: { scale: 2 },
  };
}

function stateFor(frame, indices) {
  if (frame.group === "motion") {
    const run = indices.get(`run:${frame.direction}`);
    const chase = indices.get(`chase:${frame.direction}`);
    const dash = indices.get(`dash:${frame.direction}`);
    const sequences = {
      run: [run, chase, dash, chase],
      chase: [chase, dash, run, dash],
      dash: [dash, chase, run],
    };
    return {
      frames: sequences[frame.gait],
      fps: frame.gait === "run" ? 8 : frame.gait === "chase" ? 11 : 14,
      loop: true,
    };
  }

  const groupNames = STATE_GROUPS[frame.group];
  const nextName = groupNames[(frame.groupIndex + 1) % groupNames.length];
  const next = indices.get(nextName);
  const looping =
    frame.group === "rest" ||
    frame.group === "gaze" ||
    [
      "loading",
      "waiting",
      "notification",
      "sync",
      "scan",
      "hologram",
      "decode",
      "shield",
      "stealth",
      "overclock",
    ].includes(frame.name);
  if (looping)
    return {
      frames: [frame.index, next],
      durations: frame.name === "sleep" ? [1100, 1700] : [420, 180],
      loop: true,
    };
  return {
    frames: [frame.index, next],
    durations: [180, 260],
    loop: false,
  };
}

function directionFromName(name) {
  const candidate = name.split(":")[1];
  return DIRECTIONS.includes(candidate) ? candidate : undefined;
}
