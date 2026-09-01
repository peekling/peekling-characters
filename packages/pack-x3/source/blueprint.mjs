export const CHARACTER_ID = "x3";
export const CHARACTER_TITLE = "X3";
export const VERSION = "0.1.0";
export const LICENSE_ID = "Apache-2.0";
export const COLUMNS = 10;
export const ROWS = 10;
export const LOGICAL_CELL_SIZE = 48;
export const FRAME_COUNT = 100;

export const STATE_GROUPS = Object.freeze({
  rest: Object.freeze([
    "idle",
    "blink",
    "slow-blink",
    "boot",
    "standby",
    "sleep",
    "wake",
    "listen",
    "curious",
    "thinking",
    "daydream",
    "content",
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
    "glance-left",
    "glance-right",
    "peek-left",
    "peek-right",
    "scan-left",
    "scan-right",
    "near-focus",
    "far-focus",
  ]),
  emotion: Object.freeze([
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
    "throw:rise",
    "throw:fall",
    "land",
    "greet",
    "goodbye",
    "cheer",
    "applause",
  ]),
  lifecycle: Object.freeze([
    "loading",
    "waiting",
    "success",
    "error",
    "notification",
    "focus",
    "blur",
    "page-visible",
    "page-hidden",
    "page-freeze",
    "page-resume",
    "section-enter",
    "section-leave",
    "scroll-up",
    "scroll-down",
    "resize",
  ]),
  motion: Object.freeze([
    "move:N",
    "move:NE",
    "move:E",
    "move:SE",
    "move:S",
    "move:SW",
    "move:W",
    "move:NW",
    "bounce",
    "hop",
    "jump",
    "dash",
    "slide",
    "skid",
    "orbit",
    "settle",
  ]),
});

const DIRECTIONS = Object.freeze({
  N: [0, -4.2],
  NE: [3.2, -3.2],
  E: [4.5, 0],
  SE: [3.2, 3.2],
  S: [0, 4.2],
  SW: [-3.2, 3.2],
  W: [-4.5, 0],
  NW: [-3.2, -3.2],
});

const BASE_EYE = Object.freeze({
  style: "led-capsule",
  x: 0,
  y: 0,
  gazeX: 0,
  gazeY: 0,
  scaleX: 1,
  scaleY: 1,
  tilt: 0,
  lidTop: 0,
  lidBottom: 0,
  brightness: 1,
  stroke: 1.15,
  scanGap: 0.18,
  glitch: 0,
  spark: "none",
});

const BASE_BODY = Object.freeze({
  x: 32,
  y: 32,
  tilt: 0,
  lift: 0,
  squash: 0,
  screenGlow: 0.12,
  power: "cyan",
  vent: 0,
});

function pose(common = {}, left = {}, right = {}, body = {}) {
  return { common, left, right, body };
}

function directionalPose(direction, moving = false) {
  const [gazeX, gazeY] = DIRECTIONS[direction];
  return pose(
    {
      gazeX,
      gazeY,
      scaleX: moving ? 0.88 : 0.96,
      scaleY: moving ? 1.04 : 1,
      tilt: gazeX * 0.72,
      spark: direction.length === 2 ? "corner" : "none",
      scanGap: moving ? 0.28 : 0.16,
    },
    moving ? { scaleY: 0.93 } : {},
    moving ? { scaleY: 1.08 } : {},
    moving
      ? {
          tilt: gazeX * 0.55,
          lift: Math.max(0, -gazeY * 0.45),
          squash: direction.length === 2 ? 0.055 : 0.025,
          vent:
            direction === "W" || direction === "SW" || direction === "NW"
              ? -1
              : 1,
        }
      : {},
  );
}

const RECIPES = {
  idle: pose(),
  blink: pose(
    { scaleY: 0.2, stroke: 1.5, scanGap: 0, spark: "none" },
    {},
    {},
    { squash: 0.035 },
  ),
  "slow-blink": pose(
    { scaleY: 0.36, lidTop: 0.22, stroke: 1.28, scanGap: 0.08 },
    {},
    {},
    { squash: 0.02 },
  ),
  boot: pose(
    {
      gazeY: 1.5,
      scaleX: 0.78,
      scaleY: 0.74,
      brightness: 0.72,
      scanGap: 0.42,
      glitch: 2,
      spark: "cursor",
    },
    {},
    {},
    { power: "amber", screenGlow: 0.04 },
  ),
  standby: pose(
    {
      gazeY: 2.2,
      scaleX: 0.72,
      scaleY: 0.7,
      brightness: 0.48,
      lidTop: 0.16,
      scanGap: 0.2,
    },
    {},
    {},
    { power: "amber", screenGlow: 0.02 },
  ),
  sleep: pose(
    {
      gazeY: 2.6,
      scaleY: 0.32,
      stroke: 1.55,
      brightness: 0.38,
      scanGap: 0,
      spark: "none",
    },
    { tilt: -8 },
    { tilt: 8 },
    { power: "amber", squash: 0.05, screenGlow: 0 },
  ),
  wake: pose(
    {
      gazeY: -2.8,
      scaleX: 1.12,
      scaleY: 1.22,
      brightness: 1.18,
      spark: "star",
    },
    {},
    {},
    { lift: 1.3, squash: -0.035, screenGlow: 0.25 },
  ),
  listen: pose(
    { gazeX: -1.2, scaleY: 1.08 },
    { scaleX: 0.76, tilt: -5 },
    { scaleX: 1.12, tilt: 5 },
    { tilt: -1.5 },
  ),
  curious: pose(
    { gazeX: 1.6, gazeY: -1.8, spark: "corner" },
    { scaleX: 0.82, scaleY: 0.92, tilt: -9 },
    { scaleX: 1.22, scaleY: 1.16, tilt: 8 },
    { tilt: 2, lift: 0.5 },
  ),
  thinking: pose(
    {
      gazeX: 2.9,
      gazeY: -3.1,
      scaleY: 0.88,
      brightness: 0.9,
      scanGap: 0.28,
      spark: "cursor",
    },
    { tilt: -8 },
    { tilt: 9 },
    { tilt: -2 },
  ),
  daydream: pose(
    {
      gazeX: -2.5,
      gazeY: -3.8,
      scaleX: 1.05,
      scaleY: 0.9,
      brightness: 0.84,
      spark: "star",
    },
    { tilt: -10 },
    { tilt: 8 },
    { lift: 0.7, screenGlow: 0.2 },
  ),
  content: pose(
    { gazeY: 1, scaleX: 1.12, scaleY: 0.54, lidBottom: 0.16, spark: "soft" },
    { tilt: -6 },
    { tilt: 6 },
    { squash: 0.025 },
  ),

  ...Object.fromEntries(
    Object.keys(DIRECTIONS).map((direction) => [
      `look:${direction}`,
      directionalPose(direction),
    ]),
  ),
  "glance-left": pose(
    { gazeX: -5.1, gazeY: -0.4, scaleX: 0.84, scaleY: 0.94, scanGap: 0.24 },
    { x: -1.1 },
    { x: -0.8 },
    {},
  ),
  "glance-right": pose(
    { gazeX: 5.1, gazeY: 0.4, scaleX: 0.84, scaleY: 0.94, scanGap: 0.24 },
    { x: 0.8 },
    { x: 1.1 },
    {},
  ),
  "peek-left": pose(
    {
      gazeX: -5.3,
      gazeY: 1.1,
      scaleX: 0.7,
      scaleY: 0.86,
      lidTop: 0.12,
      glitch: 1,
    },
    { x: -1.7 },
    { x: -1.2 },
    { tilt: -2 },
  ),
  "peek-right": pose(
    {
      gazeX: 5.3,
      gazeY: 1.1,
      scaleX: 0.7,
      scaleY: 0.86,
      lidTop: 0.12,
      glitch: 1,
    },
    { x: 1.2 },
    { x: 1.7 },
    { tilt: 2 },
  ),
  "scan-left": pose(
    {
      gazeX: -4.2,
      gazeY: -1,
      scaleX: 1.15,
      scaleY: 0.56,
      tilt: -9,
      scanGap: 0.42,
      spark: "cursor",
    },
    {},
    {},
    {},
  ),
  "scan-right": pose(
    {
      gazeX: 4.2,
      gazeY: -1,
      scaleX: 1.15,
      scaleY: 0.56,
      tilt: 9,
      scanGap: 0.42,
      spark: "cursor",
    },
    {},
    {},
    {},
  ),
  "near-focus": pose(
    { gazeY: 2, scaleX: 1.34, scaleY: 1.28, stroke: 1.38, spark: "ring" },
    { gazeX: 2.3 },
    { gazeX: -2.3 },
    { screenGlow: 0.22 },
  ),
  "far-focus": pose(
    {
      gazeY: -1.2,
      scaleX: 0.58,
      scaleY: 0.72,
      stroke: 0.98,
      brightness: 0.78,
      spark: "pin",
    },
    { gazeX: -1.2 },
    { gazeX: 1.2 },
    { screenGlow: 0.04 },
  ),

  joyful: pose(
    {
      gazeY: -0.8,
      scaleX: 1.18,
      scaleY: 0.68,
      lidBottom: 0.2,
      brightness: 1.12,
      spark: "star",
    },
    { tilt: -8 },
    { tilt: 8 },
    { lift: 1.2, squash: -0.035, screenGlow: 0.24 },
  ),
  delighted: pose(
    {
      scaleX: 1.22,
      scaleY: 0.42,
      lidBottom: 0.28,
      brightness: 1.2,
      spark: "double-star",
    },
    { tilt: -12 },
    { tilt: 12 },
    { lift: 1.7, squash: -0.05, screenGlow: 0.3 },
  ),
  excited: pose(
    {
      gazeY: -2.2,
      scaleX: 1.25,
      scaleY: 1.34,
      stroke: 1.34,
      brightness: 1.22,
      spark: "star",
    },
    { tilt: -5 },
    { tilt: 5 },
    { lift: 2.3, squash: -0.07, screenGlow: 0.34 },
  ),
  proud: pose(
    {
      gazeY: -2,
      scaleX: 1.1,
      scaleY: 0.65,
      lidTop: 0.18,
      brightness: 1.05,
      spark: "soft",
    },
    { tilt: -8 },
    { tilt: 8 },
    { lift: 1 },
  ),
  hopeful: pose(
    {
      gazeY: -4.4,
      scaleX: 1.05,
      scaleY: 1.18,
      brightness: 1.16,
      spark: "star",
    },
    { gazeX: -0.6, tilt: -4 },
    { gazeX: 0.6, tilt: 4 },
    { lift: 1.2, screenGlow: 0.28 },
  ),
  surprised: pose(
    { scaleX: 1.38, scaleY: 1.42, stroke: 1.42, spark: "ring" },
    {},
    {},
    { lift: 1, squash: -0.065, screenGlow: 0.24 },
  ),
  startled: pose(
    {
      gazeY: -1.7,
      scaleX: 1.2,
      scaleY: 1.5,
      stroke: 1.32,
      glitch: 1,
      spark: "pin",
    },
    { x: -1, tilt: -10 },
    { x: 1, tilt: 10 },
    { lift: 2.7, squash: -0.09, tilt: -2 },
  ),
  confused: pose(
    { gazeX: 0.8, gazeY: -0.6, spark: "cursor" },
    { scaleX: 1.22, scaleY: 0.68, tilt: -18 },
    { scaleX: 0.72, scaleY: 1.2, tilt: 13 },
    { tilt: -3 },
  ),
  puzzled: pose(
    { gazeX: -1.3, gazeY: -1.8, scanGap: 0.32, glitch: 1 },
    { scaleX: 0.7, scaleY: 1.2, tilt: 14 },
    { scaleX: 1.26, scaleY: 0.72, tilt: -18 },
    { tilt: 3 },
  ),
  worried: pose(
    {
      gazeY: 2.2,
      scaleX: 0.92,
      scaleY: 0.88,
      lidTop: 0.12,
      brightness: 0.88,
      spark: "soft",
    },
    { tilt: 14 },
    { tilt: -14 },
    { squash: 0.03, lift: -0.3 },
  ),
  anxious: pose(
    {
      gazeX: -2.2,
      gazeY: 2.8,
      scaleX: 1.04,
      scaleY: 1.12,
      scanGap: 0.4,
      glitch: 2,
      spark: "cursor",
    },
    { tilt: 18, x: -0.5 },
    { tilt: -17, x: 0.7 },
    { squash: 0.055, tilt: -2 },
  ),
  sad: pose(
    {
      gazeY: 3.5,
      scaleX: 0.92,
      scaleY: 0.72,
      lidTop: 0.15,
      brightness: 0.76,
      spark: "drop",
    },
    { tilt: 17 },
    { tilt: -17 },
    { squash: 0.065, lift: -1, screenGlow: 0.03 },
  ),
  disappointed: pose(
    {
      gazeX: -1,
      gazeY: 3.9,
      scaleX: 1.08,
      scaleY: 0.52,
      lidTop: 0.24,
      brightness: 0.7,
      scanGap: 0.2,
    },
    { tilt: 10 },
    { tilt: -10 },
    { squash: 0.075, lift: -0.8 },
  ),
  lonely: pose(
    {
      gazeX: -4.3,
      gazeY: 2.5,
      scaleX: 0.74,
      scaleY: 0.8,
      brightness: 0.68,
      spark: "drop",
    },
    { x: -0.8, tilt: 12 },
    { x: -0.5, tilt: -5 },
    { squash: 0.055, tilt: -2, screenGlow: 0.02 },
  ),
  tired: pose(
    {
      gazeY: 2.8,
      scaleX: 1.12,
      scaleY: 0.6,
      lidTop: 0.22,
      brightness: 0.56,
      scanGap: 0.16,
      spark: "none",
    },
    { tilt: -4 },
    { tilt: 5 },
    { squash: 0.085, lift: -1.3, power: "amber" },
  ),
  annoyed: pose(
    {
      gazeX: -2.4,
      scaleX: 1.1,
      scaleY: 0.48,
      lidTop: 0.28,
      scanGap: 0.3,
      spark: "cursor",
    },
    { tilt: -10 },
    { tilt: -15 },
    { squash: 0.035 },
  ),
  angry: pose(
    {
      gazeY: -0.5,
      scaleX: 1.18,
      scaleY: 0.68,
      lidTop: 0.28,
      stroke: 1.42,
      brightness: 1.16,
      glitch: 1,
      spark: "hot",
    },
    { tilt: 22 },
    { tilt: -22 },
    { squash: 0.03, screenGlow: 0.3, power: "amber" },
  ),
  determined: pose(
    {
      gazeY: -1.2,
      scaleX: 0.94,
      scaleY: 0.78,
      lidTop: 0.16,
      brightness: 1.08,
      spark: "cursor",
    },
    { tilt: 14 },
    { tilt: -14 },
    { lift: 0.5, squash: -0.02 },
  ),
  brave: pose(
    {
      gazeY: -2.6,
      scaleX: 1.04,
      scaleY: 1.04,
      lidTop: 0.06,
      brightness: 1.14,
      spark: "star",
    },
    { tilt: 8 },
    { tilt: -8 },
    { lift: 1.2, squash: -0.035, screenGlow: 0.22 },
  ),
  shy: pose(
    {
      gazeX: -3.6,
      gazeY: 2.4,
      scaleX: 0.8,
      scaleY: 0.82,
      brightness: 0.84,
      spark: "soft",
    },
    { x: -0.5, tilt: 9 },
    { x: -0.3, tilt: -4 },
    { squash: 0.045, tilt: -2 },
  ),
  bashful: pose(
    {
      gazeX: 3.4,
      gazeY: 3,
      scaleX: 0.9,
      scaleY: 0.58,
      lidBottom: 0.12,
      brightness: 0.92,
      spark: "heart",
    },
    { tilt: -6 },
    { tilt: 12 },
    { squash: 0.055, tilt: 2 },
  ),
  mischievous: pose(
    {
      gazeX: 2.8,
      gazeY: -0.3,
      scaleX: 1.12,
      scaleY: 0.42,
      lidTop: 0.32,
      glitch: 1,
      spark: "pin",
    },
    { tilt: -18 },
    { tilt: -10 },
    { tilt: 4, squash: 0.02 },
  ),
  playful: pose(
    {
      gazeX: -1.8,
      gazeY: -1,
      scaleX: 1.18,
      scaleY: 1.02,
      brightness: 1.16,
      spark: "star",
    },
    { scaleY: 0.28, lidBottom: 0.2, tilt: -14 },
    { scaleY: 1.24, tilt: 10 },
    { lift: 1.5, squash: -0.045, tilt: -3, screenGlow: 0.26 },
  ),
  relieved: pose(
    {
      gazeY: 1,
      scaleX: 1.12,
      scaleY: 0.38,
      lidBottom: 0.28,
      brightness: 0.86,
      spark: "soft",
    },
    { tilt: -7 },
    { tilt: 7 },
    { squash: 0.045, lift: -0.3 },
  ),

  hover: pose(
    { gazeY: -3.8, scaleX: 1.04, scaleY: 1.12, spark: "ring" },
    { gazeX: 0.6 },
    { gazeX: -0.6 },
    { lift: 1.2, screenGlow: 0.24 },
  ),
  click: pose(
    { gazeY: 2.3, scaleX: 1.16, scaleY: 0.54, lidBottom: 0.16, spark: "pin" },
    { tilt: -8 },
    { tilt: 8 },
    { squash: 0.12, lift: -0.8 },
  ),
  "double-click": pose(
    {
      gazeY: 1.5,
      scaleX: 1.26,
      scaleY: 0.3,
      brightness: 1.15,
      spark: "double-star",
    },
    { tilt: -13 },
    { tilt: 13 },
    { squash: 0.16, lift: -1, screenGlow: 0.25 },
  ),
  "context-click": pose(
    {
      gazeX: 3.9,
      gazeY: 1.8,
      scaleX: 0.9,
      scaleY: 0.72,
      lidTop: 0.16,
      scanGap: 0.34,
    },
    { tilt: -7 },
    { tilt: 14 },
    { squash: 0.07, tilt: 3 },
  ),
  press: pose(
    {
      gazeY: 3.7,
      scaleX: 1.28,
      scaleY: 0.42,
      lidTop: 0.12,
      brightness: 0.82,
      spark: "none",
    },
    { tilt: -5 },
    { tilt: 5 },
    { squash: 0.2, lift: -1.8 },
  ),
  release: pose(
    {
      gazeY: -3.4,
      scaleX: 1.12,
      scaleY: 1.22,
      brightness: 1.18,
      spark: "corner",
    },
    { tilt: -4 },
    { tilt: 4 },
    { squash: -0.1, lift: 2.2, screenGlow: 0.22 },
  ),
  drag: pose(
    {
      gazeX: 4.7,
      scaleX: 0.96,
      scaleY: 0.78,
      lidTop: 0.12,
      scanGap: 0.32,
      spark: "cursor",
    },
    { tilt: 8 },
    { tilt: 14 },
    { tilt: 7, squash: 0.045 },
  ),
  "drag-hover": pose(
    { gazeX: 4.2, gazeY: -2.8, scaleX: 1.08, scaleY: 1, spark: "ring" },
    { tilt: 5 },
    { tilt: 10 },
    { tilt: 6, lift: 1 },
  ),
  drop: pose(
    { gazeY: 4.7, scaleX: 1.2, scaleY: 1.18, stroke: 1.34, spark: "pin" },
    { tilt: -4 },
    { tilt: 4 },
    { squash: -0.045, lift: 1.3 },
  ),
  "throw:rise": pose(
    { gazeY: -5.2, scaleX: 0.94, scaleY: 1.1, brightness: 1.15, spark: "star" },
    { tilt: -7 },
    { tilt: 7 },
    { lift: 3.6, squash: -0.11 },
  ),
  "throw:fall": pose(
    { gazeY: 5.2, scaleX: 1.22, scaleY: 1.22, glitch: 1, spark: "ring" },
    { tilt: 7 },
    { tilt: -7 },
    { lift: 2, squash: -0.07, tilt: 3 },
  ),
  land: pose(
    { gazeY: 2.6, scaleX: 1.3, scaleY: 0.36, lidBottom: 0.18, spark: "soft" },
    { tilt: -10 },
    { tilt: 10 },
    { squash: 0.18, lift: -2 },
  ),
  greet: pose(
    { gazeX: -3.1, gazeY: -1.6, scaleX: 1.08, scaleY: 1, spark: "star" },
    { scaleY: 0.32, lidBottom: 0.24, tilt: -12 },
    { tilt: 8 },
    { tilt: -4, lift: 0.7 },
  ),
  goodbye: pose(
    { gazeX: 3.4, gazeY: 0.5, scaleX: 0.92, scaleY: 0.82, spark: "corner" },
    { tilt: -5 },
    { scaleY: 0.34, lidBottom: 0.22, tilt: 15 },
    { tilt: 5, lift: 0.3 },
  ),
  cheer: pose(
    {
      gazeY: -2.8,
      scaleX: 1.3,
      scaleY: 1.3,
      stroke: 1.4,
      brightness: 1.24,
      spark: "double-star",
    },
    { tilt: -11 },
    { tilt: 11 },
    { lift: 2.8, squash: -0.09, screenGlow: 0.36 },
  ),
  applause: pose(
    {
      gazeX: 0.8,
      gazeY: -0.4,
      scaleX: 1.22,
      scaleY: 0.42,
      lidBottom: 0.2,
      brightness: 1.18,
      spark: "star",
    },
    { tilt: -15 },
    { tilt: 15 },
    { lift: 1.7, squash: -0.06, screenGlow: 0.28 },
  ),

  loading: pose(
    { scaleX: 0.92, scaleY: 0.9, scanGap: 0.46, glitch: 2, spark: "cursor" },
    { gazeX: -3.1, gazeY: -2.8, tilt: -8 },
    { gazeX: 3.1, gazeY: 2.8, tilt: 8 },
    { tilt: 2, power: "amber" },
  ),
  waiting: pose(
    {
      gazeX: -1.8,
      gazeY: 2,
      scaleX: 1.05,
      scaleY: 0.52,
      lidTop: 0.24,
      brightness: 0.72,
      spark: "cursor",
    },
    { tilt: -6 },
    { tilt: 5 },
    { squash: 0.03, lift: -0.4 },
  ),
  success: pose(
    {
      gazeY: -1.8,
      scaleX: 1.3,
      scaleY: 1.22,
      brightness: 1.25,
      spark: "double-star",
    },
    { tilt: -7 },
    { tilt: 7 },
    { lift: 2.1, squash: -0.07, screenGlow: 0.38 },
  ),
  error: pose(
    {
      gazeY: 1.5,
      scaleX: 1.18,
      scaleY: 0.68,
      lidTop: 0.3,
      brightness: 1.12,
      glitch: 3,
      spark: "hot",
    },
    { tilt: 24 },
    { tilt: -24 },
    { squash: 0.06, screenGlow: 0.3, power: "amber" },
  ),
  notification: pose(
    {
      gazeX: 4.6,
      gazeY: -4,
      scaleX: 1.2,
      scaleY: 1.26,
      brightness: 1.22,
      spark: "ring",
    },
    { tilt: -4 },
    { tilt: 9 },
    { lift: 2, tilt: 4, screenGlow: 0.34 },
  ),
  focus: pose(
    { scaleX: 0.76, scaleY: 1.12, stroke: 1.32, spark: "pin" },
    { gazeX: 2.5, tilt: 3 },
    { gazeX: -2.5, tilt: -3 },
    { screenGlow: 0.2 },
  ),
  blur: pose(
    {
      gazeY: 1.6,
      scaleX: 1.32,
      scaleY: 0.58,
      lidTop: 0.16,
      brightness: 0.52,
      scanGap: 0.28,
      glitch: 1,
      spark: "none",
    },
    { gazeX: -2.6, tilt: -9 },
    { gazeX: 2.6, tilt: 9 },
    { squash: 0.04 },
  ),
  "page-visible": pose(
    {
      gazeY: -1.1,
      scaleX: 1.05,
      scaleY: 1.12,
      brightness: 1.08,
      spark: "corner",
    },
    { gazeX: -0.7 },
    { gazeX: 0.7 },
    { lift: 0.7, screenGlow: 0.18 },
  ),
  "page-hidden": pose(
    {
      gazeY: 3.9,
      scaleX: 1.12,
      scaleY: 0.44,
      lidTop: 0.16,
      brightness: 0.38,
      scanGap: 0,
      spark: "none",
    },
    { tilt: -5 },
    { tilt: 5 },
    { squash: 0.07, lift: -1, power: "amber" },
  ),
  "page-freeze": pose(
    {
      scaleX: 0.96,
      scaleY: 0.96,
      brightness: 0.78,
      scanGap: 0.5,
      glitch: 3,
      spark: "square",
    },
    { gazeX: -1.5, gazeY: -1.5, tilt: -2 },
    { gazeX: 1.5, gazeY: 1.5, tilt: 2 },
    { screenGlow: 0.08 },
  ),
  "page-resume": pose(
    { gazeY: -2.3, scaleX: 1.16, scaleY: 1.18, brightness: 1.2, spark: "star" },
    { tilt: -5 },
    { tilt: 5 },
    { lift: 1.7, squash: -0.05, screenGlow: 0.3 },
  ),
  "section-enter": pose(
    { gazeX: -4.3, scaleX: 1.02, scaleY: 1.04, spark: "ring" },
    { tilt: -8 },
    { tilt: -3 },
    { tilt: -5, lift: 0.6 },
  ),
  "section-leave": pose(
    {
      gazeX: 4.3,
      gazeY: 1.2,
      scaleX: 0.82,
      scaleY: 0.86,
      brightness: 0.76,
      spark: "soft",
    },
    { tilt: 4 },
    { tilt: 10 },
    { tilt: 6, lift: -0.3 },
  ),
  "scroll-up": pose(
    { gazeY: -5, scaleX: 0.96, scaleY: 0.86, scanGap: 0.4, spark: "cursor" },
    { tilt: -5 },
    { tilt: 5 },
    { lift: 1.7, squash: -0.045 },
  ),
  "scroll-down": pose(
    { gazeY: 5, scaleX: 1.12, scaleY: 0.96, scanGap: 0.4, spark: "cursor" },
    { tilt: 5 },
    { tilt: -5 },
    { lift: -0.8, squash: 0.06 },
  ),
  resize: pose(
    { scaleX: 1.42, scaleY: 0.66, stroke: 1.28, spark: "ring" },
    { x: -1.9, tilt: -12 },
    { x: 1.9, tilt: 12 },
    { squash: 0.1 },
  ),

  ...Object.fromEntries(
    Object.keys(DIRECTIONS).map((direction) => [
      `move:${direction}`,
      directionalPose(direction, true),
    ]),
  ),
  bounce: pose(
    { gazeY: -2, scaleX: 1.16, scaleY: 1.12, spark: "corner" },
    { tilt: -6 },
    { tilt: 6 },
    { lift: 3, squash: -0.11 },
  ),
  hop: pose(
    {
      gazeX: 2.1,
      gazeY: -3.8,
      scaleX: 1.02,
      scaleY: 1.08,
      brightness: 1.14,
      spark: "star",
    },
    { tilt: -9 },
    { tilt: 8 },
    { lift: 2.4, squash: -0.14, tilt: 5 },
  ),
  jump: pose(
    { gazeY: -5.3, scaleX: 1.22, scaleY: 1.24, stroke: 1.34, spark: "ring" },
    { tilt: -7 },
    { tilt: 7 },
    { lift: 2.8, squash: -0.16 },
  ),
  dash: pose(
    {
      gazeX: 5.4,
      scaleX: 0.82,
      scaleY: 0.78,
      lidTop: 0.14,
      scanGap: 0.42,
      glitch: 1,
      spark: "cursor",
    },
    { tilt: 12 },
    { tilt: 18 },
    { tilt: 9, squash: -0.08, vent: 1 },
  ),
  slide: pose(
    {
      gazeX: 4.6,
      gazeY: 2.9,
      scaleX: 1.1,
      scaleY: 0.46,
      lidTop: 0.18,
      brightness: 0.9,
      spark: "soft",
    },
    { tilt: 3 },
    { tilt: 11 },
    { tilt: 11, squash: 0.14, lift: -1.6 },
  ),
  skid: pose(
    {
      gazeX: -4.9,
      gazeY: 1.9,
      scaleX: 1.28,
      scaleY: 0.86,
      glitch: 2,
      spark: "pin",
    },
    { tilt: -18 },
    { tilt: -10 },
    { tilt: -11, squash: 0.12, lift: -1.2, vent: -1 },
  ),
  orbit: pose(
    { scaleX: 0.94, scaleY: 0.92, scanGap: 0.44, spark: "ring" },
    { gazeX: -3.8, gazeY: 3.5, tilt: -14 },
    { gazeX: 3.8, gazeY: -3.5, tilt: 14 },
    { tilt: 7, lift: 1.6, screenGlow: 0.22 },
  ),
  settle: pose(
    {
      gazeY: 1.5,
      scaleX: 1.1,
      scaleY: 0.58,
      lidBottom: 0.16,
      brightness: 0.88,
      spark: "soft",
    },
    { tilt: -5 },
    { tilt: 5 },
    { squash: 0.08, lift: -0.8 },
  ),
};

function mergeEye(common, side, index, isLeft) {
  const phaseX = ((index % 9) - 4) * 0.045;
  const phaseY = ((Math.floor(index / 9) % 9) - 4) * 0.035;
  return {
    ...BASE_EYE,
    ...common,
    ...side,
    x: (side.x ?? common.x ?? BASE_EYE.x) + phaseX * (isLeft ? 1 : -1),
    y: (side.y ?? common.y ?? BASE_EYE.y) + phaseY * (isLeft ? -1 : 1),
    scanPhase: ((index * (isLeft ? 7 : 11)) % 29) / 29,
    identityPhase: index,
  };
}

export function createExpressions() {
  const expressions = [];
  for (const [group, names] of Object.entries(STATE_GROUPS)) {
    for (const name of names) {
      const index = expressions.length;
      const recipe = RECIPES[name];
      if (!recipe) throw new Error(`Missing expression recipe for ${name}`);
      expressions.push({
        index,
        name,
        group,
        mechanics: "body-locked-screen-face",
        body: { ...BASE_BODY, ...recipe.body },
        eyes: {
          left: mergeEye(recipe.common, recipe.left, index, true),
          right: mergeEye(recipe.common, recipe.right, index, false),
        },
      });
    }
  }
  if (expressions.length !== FRAME_COUNT)
    throw new Error(`Expression catalog must contain ${FRAME_COUNT} states`);
  if (new Set(expressions.map(screenEyeSignature)).size !== FRAME_COUNT)
    throw new Error("Every state must have a unique screen-eye performance");
  return expressions;
}

export function screenEyeSignature(expression) {
  return JSON.stringify(expression.eyes);
}

export function createStates() {
  const expressions = createExpressions();
  const indexByName = new Map(
    expressions.map(({ name, index }) => [name, index]),
  );
  const continuous = new Set([
    ...STATE_GROUPS.rest,
    ...STATE_GROUPS.gaze,
    "hover",
    "press",
    "drag",
    "drag-hover",
    "throw:rise",
    "throw:fall",
    "loading",
    "waiting",
    "page-visible",
    "page-hidden",
    "page-freeze",
    "scroll-up",
    "scroll-down",
    ...STATE_GROUPS.motion,
  ]);
  const blink = indexByName.get("blink");
  return Object.fromEntries(
    expressions.map(({ name, index, group }) => {
      const names = STATE_GROUPS[group];
      const localIndex = names.indexOf(name);
      const neighbor = indexByName.get(names[(localIndex + 1) % names.length]);
      const direction = name.split(":")[1];
      const gazeCompanion = direction
        ? indexByName.get(`look:${direction}`)
        : undefined;
      const companion =
        gazeCompanion === index ? neighbor : (gazeCompanion ?? neighbor);
      const looping = continuous.has(name);
      const frames = looping
        ? [index, companion, index, blink]
        : [index, companion, index];
      return [
        name,
        looping
          ? { frames, fps: group === "motion" ? 8 : 5, loop: true }
          : {
              frames,
              durations: [
                125 + (index % 4) * 20,
                185 + (index % 5) * 25,
                300 + (index % 6) * 30,
              ],
              loop: false,
            },
      ];
    }),
  );
}

export function createManifest(hashes) {
  return {
    format: 1,
    name: CHARACTER_ID,
    version: VERSION,
    license: LICENSE_ID,
    metadata: {
      title: CHARACTER_TITLE,
      author: "Prajwal S. Venkateshmurthy",
      description:
        "A gentle retro terminal whose cyan LED eyes turn activity into expressive companionship.",
      tags: [
        "x3",
        "screen-face",
        "retro-computer",
        "hd-adaptive",
        "100-states",
      ],
    },
    assets: {
      atlases: {
        columns: COLUMNS,
        rows: ROWS,
        logicalCellSize: LOGICAL_CELL_SIZE,
        lineage: "x3-procedural-hd-v1",
        variants: [1, 2, 4].map((density) => ({
          src: `atlas-${density}x.png`,
          density,
          sourceCellSize: LOGICAL_CELL_SIZE * density,
          sha256: hashes[density],
        })),
      },
    },
    states: createStates(),
    capabilities: {
      locomotion: {
        directions: {
          N: "move:N",
          NE: "move:NE",
          E: "move:E",
          SE: "move:SE",
          S: "move:S",
          SW: "move:SW",
          W: "move:W",
          NW: "move:NW",
        },
        motion: {
          keyframes: [
            { at: 0, advance: 0, lift: 0 },
            { at: 0.24, advance: 0.2, lift: 0.08 },
            { at: 0.52, advance: 0.58, lift: 0.14 },
            { at: 0.8, advance: 0.9, lift: 0.04 },
            { at: 1, advance: 1, lift: 0 },
          ],
        },
      },
    },
    defaults: { scale: 4 / 3 },
  };
}
