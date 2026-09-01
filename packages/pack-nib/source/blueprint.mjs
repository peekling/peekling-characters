export const CHARACTER_ID = "nib";
export const CHARACTER_TITLE = "Nib";
export const VERSION = "1.0.1";
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
    "park",
    "ready",
    "rev",
    "cool-down",
    "sleep",
    "wake",
    "listen",
    "tune-up",
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
    "mirror-check:left",
    "mirror-check:right",
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
    "scroll",
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
    "ignition",
    "loading",
    "waiting",
    "success",
    "error",
    "warning",
    "notification",
    "telemetry",
    "pit-stop",
    "lap-complete",
    "scan",
    "hologram",
    "shield",
    "stealth",
    "drift",
    "overdrive",
  ]),
  motion: Object.freeze([
    "cruise:N",
    "cruise:NE",
    "cruise:E",
    "cruise:SE",
    "cruise:S",
    "cruise:SW",
    "cruise:W",
    "cruise:NW",
    "race:N",
    "race:NE",
    "race:E",
    "race:SE",
    "race:S",
    "race:SW",
    "race:W",
    "race:NW",
    "boost:N",
    "boost:NE",
    "boost:E",
    "boost:SE",
    "boost:S",
    "boost:SW",
    "boost:W",
    "boost:NW",
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
  rest: [0, 1, 1, 0, 17, 4, 0, 19, 12, 15, 22, 21],
  gaze: [0, 0, 0, 8, 6, 8, 0, 0, 15, 15, 15, 15],
  emotion: [
    12, 13, 13, 12, 14, 15, 15, 15, 16, 16, 16, 19, 17, 5, 17, 18, 16, 17, 13,
    12,
  ],
  interaction: [0, 6, 6, 15, 8, 0, 8, 10, 11, 10, 11, 11, 12, 18, 13, 13],
  tech: [0, 21, 15, 13, 16, 17, 15, 21, 22, 13, 21, 21, 23, 0, 9, 23],
});

const EFFECTS = Object.freeze({
  rest: [
    "none",
    "blink",
    "pulse",
    "none",
    "focus",
    "focus",
    "overclock",
    "soft-ring",
    "sleep",
    "wake",
    "listen",
    "pit-stop",
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
    "scroll",
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
    "pit-stop",
    "success",
    "scan",
    "hologram",
    "shield",
    "stealth",
    "drift",
    "overclock",
  ],
});

const MOTION_POSES = Object.freeze({
  cruise: [6, 8, 2, 8, 7, 8, 2, 8],
  race: [10, 4, 3, 9, 11, 9, 3, 9],
  boost: [4, 20, 23, 20, 4, 20, 23, 20],
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
        wheelPhase:
          group === "motion"
            ? { cruise: 0, race: 1, boost: 2 }[gait]
            : undefined,
        variant: frames.length,
      });
    });
  }
  if (frames.length !== FRAME_COUNT)
    throw new Error(`Nib blueprint must contain ${FRAME_COUNT} frames`);
  if (new Set(frames.map((frame) => frame.name)).size !== FRAME_COUNT)
    throw new Error("Nib blueprint contains duplicate state names");
  return frames;
}

export function createManifest(hashes) {
  const frames = createFrames();
  const indices = new Map(frames.map((frame) => [frame.name, frame.index]));
  const states = Object.fromEntries(
    frames.map((frame) => [frame.name, stateFor(frame, indices)]),
  );
  const directions = Object.fromEntries(
    DIRECTIONS.map((direction) => [direction, `race:${direction}`]),
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
        "A tiny futuristic racing car with expressive windshield eyes, rolling wheels, telemetry, drifting, and boost reactions.",
      tags: ["nib", "racing-car", "futuristic", "hd-adaptive", "states-100"],
    },
    assets: {
      atlases: {
        columns: COLUMNS,
        rows: ROWS,
        logicalCellSize: LOGICAL_CELL_SIZE,
        lineage: "nib-racing-car-hd-v3",
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
            { at: 0.16, advance: 0.1, lift: 0.01 },
            { at: 0.42, advance: 0.58, lift: 0.03 },
            { at: 0.74, advance: 0.92, lift: 0.01 },
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
    const cruise = indices.get(`cruise:${frame.direction}`);
    const race = indices.get(`race:${frame.direction}`);
    const boost = indices.get(`boost:${frame.direction}`);
    const sequences = {
      cruise: [cruise, race, boost, race],
      race: [race, boost, cruise, boost],
      boost: [boost, race, cruise],
    };
    return {
      frames: sequences[frame.gait],
      fps: frame.gait === "cruise" ? 7 : frame.gait === "race" ? 11 : 15,
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
      "telemetry",
      "pit-stop",
      "scan",
      "hologram",
      "shield",
      "stealth",
      "drift",
      "overdrive",
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
