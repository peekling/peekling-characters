export const CHARACTER_ID = "posh";
export const CHARACTER_TITLE = "Posh";
export const VERSION = "0.1.0";
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
    "breathe",
    "drowsy",
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
    "happy",
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
    "scroll:fly",
    "scroll:fall",
    "land",
    "greet",
    "goodbye",
    "cheer",
    "music:headphones",
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
    "scroll",
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
  E: [4.3, 0],
  SE: [3.2, 3.2],
  S: [0, 4.2],
  SW: [-3.2, 3.2],
  W: [-4.3, 0],
  NW: [-3.2, -3.2],
});

const BASE_EYE = Object.freeze({
  x: 0,
  y: 0,
  gazeX: 0,
  gazeY: 0,
  width: 7.2,
  height: 16.2,
  tilt: 0,
  lidTop: 0,
  lidBottom: 0,
  highlight: "double",
  highlightX: -0.9,
  highlightY: -2.1,
  symbol: "solid",
});

const BASE_BODY = Object.freeze({
  x: 32,
  y: 32,
  width: 49,
  height: 49,
  tilt: 0,
  lift: 0,
  squash: 0,
  glow: 0,
  rim: "balanced",
});

function pose(common = {}, left = {}, right = {}, body = {}) {
  return { common, left, right, body };
}

function directionalPose(direction, motion = false) {
  const [gazeX, gazeY] = DIRECTIONS[direction];
  const diagonal = direction.length === 2;
  return pose(
    {
      gazeX,
      gazeY,
      width: motion ? 7.8 : 7.3,
      height: motion ? 15.2 : 16.4,
      tilt: gazeX * 0.65,
      highlight: diagonal ? "star" : "double",
    },
    motion ? { height: 14.4, y: 0.4 } : {},
    motion ? { height: 16.4, y: -0.3 } : {},
    motion
      ? {
          tilt: gazeX * 0.45,
          lift: Math.max(0, -gazeY * 0.55),
          squash: diagonal ? 0.06 : 0.03,
          rim: direction,
        }
      : { tilt: gazeX * 0.18, rim: direction },
  );
}

const RECIPES = {
  idle: pose(),
  blink: pose(
    { height: 2.4, width: 8.2, highlight: "none" },
    { tilt: -3 },
    { tilt: 3 },
    { squash: 0.04 },
  ),
  "slow-blink": pose(
    { height: 5.2, width: 8.5, lidTop: 0.28, highlight: "single" },
    { tilt: -2 },
    { tilt: 2 },
    { squash: 0.025 },
  ),
  breathe: pose(
    { gazeY: -0.6, height: 16.8 },
    {},
    {},
    { lift: 0.7, squash: -0.025 },
  ),
  drowsy: pose(
    { gazeY: 1.5, height: 11.3, lidTop: 0.36, highlight: "single" },
    { tilt: -5 },
    { tilt: 4 },
    { squash: 0.035 },
  ),
  sleep: pose(
    { gazeY: 2.4, height: 2.2, width: 8.8, highlight: "none" },
    { tilt: -10 },
    { tilt: 10 },
    { squash: 0.09, lift: -1.2 },
  ),
  wake: pose(
    { gazeY: -2.5, width: 8.7, height: 19.3, highlight: "star" },
    {},
    {},
    { lift: 1.4, squash: -0.04, glow: 0.12 },
  ),
  listen: pose(
    { gazeX: -1.1, height: 17.6 },
    { width: 6.4, tilt: -5 },
    { width: 8.7, tilt: 5 },
    { tilt: -2 },
  ),
  curious: pose(
    { gazeX: 1.5, gazeY: -1.6, highlight: "star" },
    { width: 6.8, height: 15.1, tilt: -8 },
    { width: 9.4, height: 18.2, tilt: 7 },
    { tilt: 2, lift: 0.5 },
  ),
  thinking: pose(
    { gazeX: 2.8, gazeY: -3.2, highlight: "single" },
    { height: 13.4, tilt: -7 },
    { height: 16.4, tilt: 8 },
    { tilt: -2 },
  ),
  daydream: pose(
    { gazeX: -2.3, gazeY: -3.7, width: 7.9, height: 14.5, highlight: "star" },
    { tilt: -9 },
    { tilt: 7 },
    { glow: 0.12, lift: 0.6 },
  ),
  content: pose(
    {
      gazeY: 1.1,
      height: 8.1,
      width: 9.1,
      lidBottom: 0.34,
      highlight: "single",
    },
    { tilt: -6 },
    { tilt: 6 },
    { squash: 0.035 },
  ),

  ...Object.fromEntries(
    Object.keys(DIRECTIONS).map((direction) => [
      `look:${direction}`,
      directionalPose(direction),
    ]),
  ),
  "glance-left": pose(
    { gazeX: -4.9, gazeY: -0.5, width: 6.8, height: 15, highlight: "single" },
    { x: -1.4 },
    { x: -1.1 },
    { tilt: -1 },
  ),
  "glance-right": pose(
    { gazeX: 4.9, gazeY: 0.3, width: 6.8, height: 15, highlight: "single" },
    { x: 1.1 },
    { x: 1.4 },
    { tilt: 1 },
  ),
  "peek-left": pose(
    {
      gazeX: -5.1,
      gazeY: 1.2,
      width: 5.8,
      height: 14.2,
      lidTop: 0.12,
      highlight: "double",
    },
    { x: -2.2 },
    { x: -1.5 },
    { tilt: -4, squash: 0.04 },
  ),
  "peek-right": pose(
    {
      gazeX: 5.1,
      gazeY: 1.2,
      width: 5.8,
      height: 14.2,
      lidTop: 0.12,
      highlight: "double",
    },
    { x: 1.5 },
    { x: 2.2 },
    { tilt: 4, squash: 0.04 },
  ),
  "scan-left": pose(
    { gazeX: -3.8, gazeY: -1.1, width: 8.7, height: 9.2, highlight: "bar" },
    { tilt: -13 },
    { tilt: -8 },
    { tilt: -2 },
  ),
  "scan-right": pose(
    { gazeX: 3.8, gazeY: -1.1, width: 8.7, height: 9.2, highlight: "bar" },
    { tilt: 8 },
    { tilt: 13 },
    { tilt: 2 },
  ),
  "near-focus": pose(
    { gazeY: 2.1, width: 10.4, height: 18.4, highlight: "ring" },
    { gazeX: 2.8, tilt: 5 },
    { gazeX: -2.8, tilt: -5 },
    { squash: 0.025 },
  ),
  "far-focus": pose(
    { gazeY: -1.2, width: 5.2, height: 12.8, highlight: "pin" },
    { gazeX: -1.3 },
    { gazeX: 1.3 },
    { lift: 0.5 },
  ),

  happy: pose(
    {
      gazeY: -0.8,
      width: 9.2,
      height: 10.4,
      lidBottom: 0.34,
      highlight: "star",
    },
    { tilt: -8 },
    { tilt: 8 },
    { lift: 1.4, squash: -0.035, glow: 0.12 },
  ),
  delighted: pose(
    { width: 9.5, height: 6.7, lidBottom: 0.52, highlight: "double" },
    { tilt: -12 },
    { tilt: 12 },
    { lift: 1.8, squash: -0.06, glow: 0.18 },
  ),
  excited: pose(
    { gazeY: -2.1, width: 10.2, height: 20.2, highlight: "star" },
    { tilt: -5 },
    { tilt: 5 },
    { lift: 2, squash: -0.08, glow: 0.24 },
  ),
  proud: pose(
    {
      gazeY: -2.2,
      width: 8.2,
      height: 10.6,
      lidTop: 0.22,
      highlight: "single",
    },
    { tilt: -8 },
    { tilt: 8 },
    { lift: 1.2, squash: -0.02 },
  ),
  hopeful: pose(
    { gazeY: -4.1, width: 8.6, height: 18.1, highlight: "star" },
    { gazeX: -0.7, tilt: -4 },
    { gazeX: 0.7, tilt: 4 },
    { lift: 1.2, glow: 0.2 },
  ),
  surprised: pose(
    { width: 11.4, height: 20.8, highlight: "ring" },
    { tilt: -2 },
    { tilt: 2 },
    { squash: -0.07, lift: 1.1 },
  ),
  startled: pose(
    { gazeY: -1.6, width: 9.4, height: 21.6, highlight: "pin" },
    { x: -1.2, tilt: -10 },
    { x: 1.2, tilt: 10 },
    { lift: 2.3, squash: -0.1, tilt: -3 },
  ),
  confused: pose(
    { gazeX: 0.8, gazeY: -0.7, highlight: "single" },
    { width: 9.4, height: 10.7, tilt: -18 },
    { width: 6.2, height: 17.8, tilt: 12 },
    { tilt: -3 },
  ),
  puzzled: pose(
    { gazeX: -1.4, gazeY: -1.9, highlight: "bar" },
    { width: 6, height: 16.5, tilt: 14 },
    { width: 9.8, height: 11.2, tilt: -17 },
    { tilt: 3 },
  ),
  worried: pose(
    { gazeY: 2.2, width: 7.4, height: 14.2, lidTop: 0.12, highlight: "single" },
    { tilt: 13 },
    { tilt: -13 },
    { squash: 0.035, lift: -0.4 },
  ),
  anxious: pose(
    { gazeX: -2.2, gazeY: 2.7, width: 8.6, height: 17.8, highlight: "pin" },
    { tilt: 17, x: -0.6 },
    { tilt: -16, x: 0.8 },
    { squash: 0.065, tilt: -2 },
  ),
  sad: pose(
    { gazeY: 3.3, width: 7.2, height: 12.5, lidTop: 0.18, highlight: "tear" },
    { tilt: 16 },
    { tilt: -16 },
    { squash: 0.075, lift: -1.1 },
  ),
  disappointed: pose(
    {
      gazeX: -1.1,
      gazeY: 3.8,
      width: 8.2,
      height: 7.5,
      lidTop: 0.36,
      highlight: "single",
    },
    { tilt: 10 },
    { tilt: -10 },
    { squash: 0.08, lift: -1 },
  ),
  lonely: pose(
    { gazeX: -4.2, gazeY: 2.5, width: 6.2, height: 13.1, highlight: "tear" },
    { x: -1, tilt: 11 },
    { x: -0.7, tilt: -5 },
    { squash: 0.06, tilt: -2 },
  ),
  tired: pose(
    { gazeY: 2.7, width: 9.2, height: 6.4, lidTop: 0.42, highlight: "none" },
    { tilt: -4 },
    { tilt: 5 },
    { squash: 0.1, lift: -1.5 },
  ),
  annoyed: pose(
    { gazeX: -2.3, width: 8.4, height: 8.2, lidTop: 0.34, highlight: "bar" },
    { tilt: -10 },
    { tilt: -15 },
    { squash: 0.045 },
  ),
  angry: pose(
    { gazeY: -0.6, width: 9.5, height: 10.8, lidTop: 0.32, highlight: "pin" },
    { tilt: 22 },
    { tilt: -22 },
    { squash: 0.035, glow: 0.16 },
  ),
  determined: pose(
    { gazeY: -1.2, width: 7.6, height: 12.2, lidTop: 0.2, highlight: "bar" },
    { tilt: 14 },
    { tilt: -14 },
    { lift: 0.6, squash: -0.02 },
  ),
  brave: pose(
    { gazeY: -2.5, width: 8.2, height: 16.2, lidTop: 0.08, highlight: "star" },
    { tilt: 8 },
    { tilt: -8 },
    { lift: 1.3, squash: -0.04, glow: 0.1 },
  ),
  shy: pose(
    { gazeX: -3.5, gazeY: 2.3, width: 6.6, height: 13.5, highlight: "double" },
    { x: -0.6, tilt: 9 },
    { x: -0.4, tilt: -4 },
    { squash: 0.055, tilt: -2 },
  ),
  bashful: pose(
    {
      gazeX: 3.3,
      gazeY: 3,
      width: 7.4,
      height: 9.4,
      lidBottom: 0.14,
      highlight: "heart",
    },
    { tilt: -6 },
    { tilt: 12 },
    { squash: 0.065, tilt: 2 },
  ),
  mischievous: pose(
    {
      gazeX: 2.7,
      gazeY: -0.4,
      width: 8.8,
      height: 7.2,
      lidTop: 0.38,
      highlight: "pin",
    },
    { tilt: -18 },
    { tilt: -10 },
    { tilt: 4, squash: 0.025 },
  ),
  playful: pose(
    { gazeX: -1.7, gazeY: -1.1, width: 9.8, height: 15.3, highlight: "star" },
    { height: 5.2, lidBottom: 0.3, tilt: -14 },
    { height: 18.1, tilt: 10 },
    { lift: 1.6, squash: -0.05, tilt: -3 },
  ),
  relieved: pose(
    {
      gazeY: 1.1,
      width: 8.7,
      height: 6.1,
      lidBottom: 0.4,
      highlight: "single",
    },
    { tilt: -7 },
    { tilt: 7 },
    { squash: 0.055, lift: -0.4 },
  ),

  hover: pose(
    { gazeY: -3.8, width: 8.1, height: 17.5, highlight: "ring" },
    { gazeX: 0.7 },
    { gazeX: -0.7 },
    { lift: 1.3, glow: 0.12 },
  ),
  click: pose(
    { gazeY: 2.2, width: 9.4, height: 8.6, lidBottom: 0.22, highlight: "pin" },
    { tilt: -8 },
    { tilt: 8 },
    { squash: 0.13, lift: -1 },
  ),
  "double-click": pose(
    { gazeY: 1.4, width: 10.3, height: 5.2, highlight: "star" },
    { tilt: -13 },
    { tilt: 13 },
    { squash: 0.15, lift: -1.2, glow: 0.12 },
  ),
  "context-click": pose(
    {
      gazeX: 3.8,
      gazeY: 1.8,
      width: 7.1,
      height: 11.6,
      lidTop: 0.2,
      highlight: "bar",
    },
    { tilt: -7 },
    { tilt: 14 },
    { squash: 0.08, tilt: 3 },
  ),
  press: pose(
    { gazeY: 3.6, width: 10.2, height: 5.8, lidTop: 0.2, highlight: "none" },
    { tilt: -5 },
    { tilt: 5 },
    { squash: 0.16, lift: -1.6 },
  ),
  release: pose(
    { gazeY: -3.3, width: 8.9, height: 18.7, highlight: "double" },
    { tilt: -4 },
    { tilt: 4 },
    { squash: -0.11, lift: 2 },
  ),
  drag: pose(
    { gazeX: 4.6, width: 7.6, height: 12.5, lidTop: 0.16, highlight: "bar" },
    { tilt: 8 },
    { tilt: 14 },
    { tilt: 7, squash: 0.05 },
  ),
  "drag-hover": pose(
    { gazeX: 4.1, gazeY: -2.7, width: 8.5, height: 15.2, highlight: "ring" },
    { tilt: 5 },
    { tilt: 10 },
    { tilt: 6, lift: 1.1 },
  ),
  drop: pose(
    { gazeY: 4.6, width: 9.5, height: 18.7, highlight: "pin" },
    { tilt: -4 },
    { tilt: 4 },
    { squash: -0.05, lift: 1.5 },
  ),
  "scroll:fly": pose(
    { gazeY: -5, width: 7.5, height: 17.1, highlight: "star" },
    { tilt: -7 },
    { tilt: 7 },
    { lift: 2.7, squash: -0.07 },
  ),
  "scroll:fall": pose(
    { gazeY: 5, width: 9.6, height: 18.8, highlight: "ring" },
    { tilt: 7 },
    { tilt: -7 },
    { lift: 2.1, squash: -0.08, tilt: 3 },
  ),
  land: pose(
    {
      gazeY: 2.5,
      width: 10.6,
      height: 6.4,
      lidBottom: 0.24,
      highlight: "double",
    },
    { tilt: -10 },
    { tilt: 10 },
    { squash: 0.18, lift: -2.2 },
  ),
  greet: pose(
    { gazeX: -3, gazeY: -1.5, width: 8.6, height: 15.5, highlight: "star" },
    { height: 6.2, lidBottom: 0.36, tilt: -12 },
    { tilt: 8 },
    { tilt: -4, lift: 0.8 },
  ),
  goodbye: pose(
    { gazeX: 3.3, gazeY: 0.5, width: 7.4, height: 12.8, highlight: "double" },
    { tilt: -5 },
    { height: 5.8, lidBottom: 0.35, tilt: 15 },
    { tilt: 5, lift: 0.4 },
  ),
  cheer: pose(
    { gazeY: -2.7, width: 10.5, height: 19.5, highlight: "star" },
    { tilt: -11 },
    { tilt: 11 },
    { lift: 2, squash: -0.05, glow: 0.18 },
  ),
  "music:headphones": pose(
    {
      gazeX: 0.8,
      gazeY: -0.4,
      width: 9.8,
      height: 7.2,
      lidBottom: 0.3,
      highlight: "star",
    },
    { tilt: -15 },
    { tilt: 15 },
    { lift: 1.9, squash: -0.07, glow: 0.2 },
  ),

  loading: pose(
    { width: 7.4, height: 13.8, highlight: "ring" },
    { gazeX: -3.2, gazeY: -2.8, tilt: -8 },
    { gazeX: 3.2, gazeY: 2.8, tilt: 8 },
    { tilt: 3 },
  ),
  waiting: pose(
    {
      gazeX: -1.8,
      gazeY: 1.9,
      width: 8.4,
      height: 8.2,
      lidTop: 0.3,
      highlight: "single",
    },
    { tilt: -6 },
    { tilt: 5 },
    { squash: 0.035, lift: -0.5 },
  ),
  success: pose(
    { gazeY: -1.7, width: 10.4, height: 18.8, highlight: "star" },
    { tilt: -7 },
    { tilt: 7 },
    { lift: 2, squash: -0.08, glow: 0.3 },
  ),
  error: pose(
    { gazeY: 1.4, width: 9.5, height: 10.4, lidTop: 0.36, highlight: "bar" },
    { tilt: 24 },
    { tilt: -24 },
    { squash: 0.07, glow: 0.14 },
  ),
  notification: pose(
    { gazeX: 4.5, gazeY: -3.8, width: 9.5, height: 19.2, highlight: "ring" },
    { tilt: -4 },
    { tilt: 9 },
    { lift: 2.1, tilt: 4, glow: 0.22 },
  ),
  focus: pose(
    { width: 6.4, height: 17.2, highlight: "pin" },
    { gazeX: 2.6, tilt: 3 },
    { gazeX: -2.6, tilt: -3 },
    { squash: -0.015 },
  ),
  blur: pose(
    { gazeY: 1.5, width: 10.5, height: 8, lidTop: 0.25, highlight: "none" },
    { gazeX: -2.7, tilt: -9 },
    { gazeX: 2.7, tilt: 9 },
    { squash: 0.045 },
  ),
  "page-visible": pose(
    { gazeY: -1.1, width: 8.2, height: 17.4, highlight: "double" },
    { gazeX: -0.8 },
    { gazeX: 0.8 },
    { lift: 0.8, glow: 0.08 },
  ),
  "page-hidden": pose(
    { gazeY: 3.8, width: 8.9, height: 3.4, lidTop: 0.36, highlight: "none" },
    { tilt: -5 },
    { tilt: 5 },
    { squash: 0.08, lift: -1.1 },
  ),
  "page-freeze": pose(
    { width: 7.4, height: 14.8, highlight: "square" },
    { gazeX: -1.5, gazeY: -1.5, tilt: -2 },
    { gazeX: 1.5, gazeY: 1.5, tilt: 2 },
    { glow: 0.2 },
  ),
  "page-resume": pose(
    { gazeY: -2.2, width: 9.2, height: 18.2, highlight: "star" },
    { tilt: -5 },
    { tilt: 5 },
    { lift: 1.8, squash: -0.06, glow: 0.18 },
  ),
  "section-enter": pose(
    { gazeX: -4.2, width: 8.1, height: 16.2, highlight: "ring" },
    { tilt: -8 },
    { tilt: -3 },
    { tilt: -5, lift: 0.7 },
  ),
  "section-leave": pose(
    { gazeX: 4.2, gazeY: 1.2, width: 6.8, height: 13.5, highlight: "single" },
    { tilt: 4 },
    { tilt: 10 },
    { tilt: 6, lift: -0.4 },
  ),
  scroll: pose(
    { gazeY: -4.8, width: 7.7, height: 13.5, highlight: "bar" },
    { tilt: -5 },
    { tilt: 5 },
    { lift: 1.8, squash: -0.05 },
  ),
  "scroll-down": pose(
    { gazeY: 4.8, width: 9, height: 15.1, highlight: "bar" },
    { tilt: 5 },
    { tilt: -5 },
    { lift: -0.9, squash: 0.07 },
  ),
  resize: pose(
    { width: 11.2, height: 10.5, highlight: "ring" },
    { x: -2.3, tilt: -12 },
    { x: 2.3, tilt: 12 },
    { squash: 0.12 },
  ),

  ...Object.fromEntries(
    Object.keys(DIRECTIONS).map((direction) => [
      `move:${direction}`,
      directionalPose(direction, true),
    ]),
  ),
  bounce: pose(
    { gazeY: -2, width: 9.3, height: 17.2, highlight: "double" },
    { tilt: -6 },
    { tilt: 6 },
    { lift: 2.2, squash: -0.06 },
  ),
  hop: pose(
    { gazeX: 2.1, gazeY: -3.7, width: 8.1, height: 16.8, highlight: "star" },
    { tilt: -9 },
    { tilt: 8 },
    { lift: 2.6, squash: -0.08, tilt: 4 },
  ),
  jump: pose(
    { gazeY: -5.1, width: 9.8, height: 19.1, highlight: "ring" },
    { tilt: -7 },
    { tilt: 7 },
    { lift: 3, squash: -0.08 },
  ),
  dash: pose(
    { gazeX: 5.3, width: 6.7, height: 12.2, lidTop: 0.18, highlight: "bar" },
    { tilt: 12 },
    { tilt: 18 },
    { tilt: 9, squash: -0.1 },
  ),
  slide: pose(
    {
      gazeX: 4.5,
      gazeY: 2.8,
      width: 8.8,
      height: 7.5,
      lidTop: 0.24,
      highlight: "single",
    },
    { tilt: 3 },
    { tilt: 11 },
    { tilt: 12, squash: 0.16, lift: -1.8 },
  ),
  skid: pose(
    { gazeX: -4.8, gazeY: 1.8, width: 10.1, height: 13.4, highlight: "pin" },
    { tilt: -18 },
    { tilt: -10 },
    { tilt: -12, squash: 0.13, lift: -1.4 },
  ),
  orbit: pose(
    { width: 7.5, height: 14.8, highlight: "ring" },
    { gazeX: -3.8, gazeY: 3.5, tilt: -14 },
    { gazeX: 3.8, gazeY: -3.5, tilt: 14 },
    { tilt: 8, lift: 1.8, glow: 0.12 },
  ),
  settle: pose(
    {
      gazeY: 1.5,
      width: 8.8,
      height: 9.4,
      lidBottom: 0.22,
      highlight: "double",
    },
    { tilt: -5 },
    { tilt: 5 },
    { squash: 0.09, lift: -1 },
  ),
};

function mergeEye(base, common, side, index, isLeft) {
  const phaseX = ((index % 7) - 3) * 0.07;
  const phaseY = ((Math.floor(index / 7) % 7) - 3) * 0.055;
  const highlightPhase = ((index * (isLeft ? 7 : 11)) % 13) / 12 - 0.5;
  return {
    ...base,
    ...common,
    ...side,
    x: (side.x ?? common.x ?? base.x) + phaseX * (isLeft ? 1 : -1),
    y: (side.y ?? common.y ?? base.y) + phaseY * (isLeft ? -1 : 1),
    highlightPhase,
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
        mechanics: "body-locked-surface-eyes",
        body: { ...BASE_BODY, ...recipe.body },
        eyes: {
          left: mergeEye(BASE_EYE, recipe.common, recipe.left, index, true),
          right: mergeEye(BASE_EYE, recipe.common, recipe.right, index, false),
        },
      });
    }
  }

  if (expressions.length !== FRAME_COUNT) {
    throw new Error(`Expression catalog must contain ${FRAME_COUNT} states`);
  }
  if (new Set(expressions.map(eyeSignature)).size !== FRAME_COUNT) {
    throw new Error("Every state must have a unique eye performance");
  }
  return expressions;
}

export function eyeSignature(expression) {
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
    "scroll:fly",
    "scroll:fall",
    "loading",
    "waiting",
    "page-visible",
    "page-hidden",
    "page-freeze",
    "scroll",
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
      const frames = continuous.has(name)
        ? [index, companion, index, blink]
        : [index, companion, index];
      return [
        name,
        continuous.has(name)
          ? {
              frames,
              fps: group === "motion" ? 8 : 5,
              loop: true,
            }
          : {
              frames,
              durations: [
                130 + (index % 4) * 20,
                190 + (index % 5) * 25,
                310 + (index % 6) * 30,
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
        "A pearl-white orb whose expressive eyes turn every movement and feeling into a readable performance.",
      tags: ["posh", "orb", "eye-driven", "hd-adaptive", "states-100"],
    },
    assets: {
      atlases: {
        columns: COLUMNS,
        rows: ROWS,
        logicalCellSize: LOGICAL_CELL_SIZE,
        lineage: "posh-procedural-hd-v1",
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
            { at: 0.24, advance: 0.2, lift: 0.12 },
            { at: 0.52, advance: 0.58, lift: 0.18 },
            { at: 0.8, advance: 0.9, lift: 0.05 },
            { at: 1, advance: 1, lift: 0 },
          ],
        },
      },
    },
    defaults: { scale: 2 },
  };
}
