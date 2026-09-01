import { PNG } from "pngjs";
import {
  COLUMNS,
  LOGICAL_CELL_SIZE,
  ROWS,
  createExpressions,
} from "./blueprint.mjs";

const TAU = Math.PI * 2;
const SUPERSAMPLE = 3;

export function renderFrame(expression, density = 1) {
  if (![1, 4 / 3, 2, 4].includes(density))
    throw new Error(`Unsupported density ${density}`);
  const size = LOGICAL_CELL_SIZE * density;
  const output = new PNG({ width: size, height: size });
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const total = [0, 0, 0, 0];
      for (let sy = 0; sy < SUPERSAMPLE; sy++) {
        for (let sx = 0; sx < SUPERSAMPLE; sx++) {
          const designScale = 64 / LOGICAL_CELL_SIZE;
          const logicalX =
            ((x + (sx + 0.5) / SUPERSAMPLE) / density) * designScale;
          const logicalY =
            ((y + (sy + 0.5) / SUPERSAMPLE) / density) * designScale;
          const sample = sampleExpression(expression, logicalX, logicalY);
          for (let channel = 0; channel < 4; channel++)
            total[channel] += sample[channel];
        }
      }
      const samples = SUPERSAMPLE * SUPERSAMPLE;
      const offset = (y * size + x) * 4;
      for (let channel = 0; channel < 4; channel++)
        output.data[offset + channel] = Math.round(total[channel] / samples);
    }
  }
  return output;
}

export function renderAtlas(expressions = createExpressions(), density = 1) {
  const cell = LOGICAL_CELL_SIZE * density;
  const atlas = new PNG({ width: COLUMNS * cell, height: ROWS * cell });
  expressions.forEach((expression, index) => {
    const frame = renderFrame(expression, density);
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
  return atlas;
}

function sampleExpression(expression, x, y) {
  const body = expression.body;
  const [rotatedX, rotatedY] = rotatePoint(
    x - body.x,
    y - (body.y - body.lift),
    -body.tilt,
  );
  const framingScale = 0.85;
  const localX = rotatedX / (framingScale * (1 + body.squash)) + 32;
  const localY = rotatedY / (framingScale * (1 - body.squash)) + 32;
  const color = sampleTerminalBody(expression, localX, localY);
  return color ?? [0, 0, 0, 0];
}

function sampleTerminalBody(expression, x, y) {
  const body = expression.body;

  const keyboard = roundedRectSdf(x, y, 32, 53.4, 27.2, 6.2, 2.3);
  if (keyboard <= 0) {
    if (keyboard > -1.35) return [36, 39, 49, 255];
    if (y > 56.7) return [126, 125, 119, 255];
    if (x < 20.5) {
      const ventLine = Math.floor((y - 49.4) / 1.55);
      if (
        ventLine >= 0 &&
        ventLine <= 4 &&
        x > 9 &&
        x < 18.2 + body.vent * 0.3 &&
        Math.abs((y - 50.1) % 1.55) < 0.42
      ) {
        return [116, 115, 109, 255];
      }
      return [151, 149, 141, 255];
    }
    if (y < 52 && x > 25 && x < 43) return [39, 40, 42, 255];
    if (y > 52.8 && x > 25 && x < 48) return [221, 221, 209, 255];
    return [188, 187, 177, 255];
  }

  const pedestal = roundedRectSdf(x, y, 32, 46.5, 9.2, 5.2, 1.5);
  if (pedestal <= 0) {
    if (pedestal > -1.15) return [42, 44, 54, 255];
    return y < 46 ? [181, 180, 169, 255] : [155, 154, 147, 255];
  }

  const backCase = roundedRectSdf(x, y, 10.2, 28.5, 6.3, 12.8, 4.2);
  if (backCase <= 0) {
    if (backCase > -1.2) return [43, 45, 54, 255];
    return mixColor([151, 148, 140], [176, 173, 164], clamp01((y - 15) / 25));
  }

  const monitor = roundedRectSdf(x, y, 32.5, 25.5, 24.2, 21.2, 4.2);
  if (monitor > 0) return null;
  if (monitor > -1.35) return [35, 39, 51, 255];

  if (Math.hypot(x - 49.2, y - 41.4) < 0.78) {
    return body.power === "amber" ? [244, 188, 62, 255] : [4, 201, 223, 255];
  }
  if (x > 43.8 && x < 47.8 && y > 40.8 && y < 42) return [120, 118, 111, 255];

  const screenBezel = roundedRectSdf(x, y, 34, 25.2, 17.6, 14.5, 3.4);
  if (screenBezel > 0) {
    const leftShade = clamp01((22 - x) / 16) * 0.34;
    const topLight = clamp01((19 - y) / 13) * 0.18;
    let caseColor = mixColor([204, 204, 193], [160, 158, 150], leftShade);
    caseColor = mixColor(caseColor, [231, 231, 218], topLight);
    return caseColor;
  }
  if (screenBezel > -1.45) return [153, 152, 145, 255];

  const screen = roundedRectSdf(x, y, 34, 25.1, 15.2, 12.1, 2.5);
  if (screen > 0) return [181, 180, 170, 255];
  if (screen > -0.8) return [24, 28, 36, 255];

  const eyeColor = sampleScreenEyes(expression, x, y);
  if (eyeColor) return eyeColor;

  const scanline = Math.abs(((y * 1.45) % 2.4) - 1.2) < 0.12 ? 1 : 0;
  const glow =
    body.screenGlow * Math.max(0, 1 - Math.hypot(x - 34, y - 25) / 18);
  return [
    Math.round(3 + glow * 8),
    Math.round(12 + glow * 38 + scanline * 3),
    Math.round(17 + glow * 46 + scanline * 4),
    255,
  ];
}

function sampleScreenEyes(expression, x, y) {
  const anchors = [
    ["left", 26.2],
    ["right", 40.8],
  ];
  for (const [side, anchorX] of anchors) {
    const eye = expression.eyes[side];
    const centerX = anchorX + eye.x + eye.gazeX * 0.38;
    const centerY = 25.2 + eye.y + eye.gazeY * 0.38;
    const [localX, localY] = rotatePoint(x - centerX, y - centerY, -eye.tilt);
    const scaledX = localX / eye.scaleX;
    const scaledY = localY / eye.scaleY;
    const halfHeight = 7.4;
    if (scaledY < -halfHeight + eye.lidTop * halfHeight * 2) continue;
    if (scaledY > halfHeight - eye.lidBottom * halfHeight * 2) continue;
    if (glyphPixel(eye, scaledX, scaledY)) return glyphColor(eye, scaledY);
    if (sparkPixel(eye, scaledX, scaledY)) return sparkColor(eye.spark);
  }
  return null;
}

function glyphPixel(eye, x, y) {
  const scanPitch = 1.72;
  const phase = eye.scanPhase * scanPitch;
  const scanPosition = (((y + 8 + phase) % scanPitch) + scanPitch) % scanPitch;
  const gap = Math.min(0.7, eye.scanGap * 0.9);
  if (scanPosition < gap) return false;

  let segment;
  if (eye.glyph === "X") {
    segment = Math.min(
      distanceToSegment(x, y, -4.3, -6.8, 4.3, 6.8),
      distanceToSegment(x, y, 4.3, -6.8, -4.3, 6.8),
    );
  } else {
    segment = Math.min(
      distanceToSegment(x, y, -3.8, -6.6, 2.6, -6.6),
      distanceToSegment(x, y, 2.6, -6.6, 4.1, -5.1),
      distanceToSegment(x, y, 4.1, -5.1, 4.1, -1),
      distanceToSegment(x, y, -1.4, 0, 3.6, 0),
      distanceToSegment(x, y, 4.1, 1, 4.1, 5.1),
      distanceToSegment(x, y, 4.1, 5.1, 2.6, 6.6),
      distanceToSegment(x, y, -3.8, 6.6, 2.6, 6.6),
    );
  }

  const missingBand =
    eye.glitch > 0 &&
    Math.floor((y + 8.5) / 2.4 + eye.identityPhase) %
      (7 - Math.min(3, eye.glitch)) ===
      0;
  if (missingBand && x < -0.3 + eye.glitch * 0.35) return false;
  return segment <= eye.stroke;
}

function sparkPixel(eye, x, y) {
  if (eye.spark === "none") return false;
  const px = x + 2.8 - eye.scanPhase * 0.8;
  const py = y + 4.8 + eye.scanPhase * 0.5;
  switch (eye.spark) {
    case "pin":
      return Math.hypot(px, py) <= 0.55;
    case "corner":
      return (
        (Math.abs(px) < 0.42 && Math.abs(py) < 1.3) ||
        (Math.abs(py) < 0.42 && Math.abs(px) < 1.3)
      );
    case "cursor":
      return Math.abs(py - 8.1) < 0.42 && px > -1.2 && px < 2.4;
    case "star":
      return (
        Math.abs(px) < 0.42 ||
        Math.abs(py) < 0.42 ||
        Math.abs(px + py) < 0.38 ||
        Math.abs(px - py) < 0.38
      );
    case "double-star":
      return star(px, py, 1.15) || star(px - 4.8, py - 1.5, 0.75);
    case "ring": {
      const radius = Math.hypot(px, py);
      return radius > 0.7 && radius < 1.25;
    }
    case "soft":
      return Math.hypot(px, py) < 0.72;
    case "drop":
      return (
        Math.hypot(px, py + 0.3) < 0.65 ||
        (py > 0.2 && py < 1.8 && Math.abs(px) < 0.55 - py * 0.18)
      );
    case "heart":
      return heart(px, py);
    case "hot":
      return Math.abs(px) < 0.55 && py > -1.4 && py < 1.4 - Math.abs(px) * 0.7;
    case "square":
      return Math.abs(px) < 0.72 && Math.abs(py) < 0.72;
    default:
      throw new Error(`Unknown screen spark ${eye.spark}`);
  }
}

function glyphColor(eye, y) {
  const brightness = Math.max(0.7, eye.brightness);
  const lower = clamp01((y + 7) / 14);
  const base = eye.spark === "hot" ? [10, 188, 203] : [3, 202, 224];
  const bright = eye.spark === "hot" ? [55, 242, 245] : [69, 244, 255];
  const color = mixColor(base, bright, 0.22 + lower * 0.32);
  return [
    Math.min(255, Math.round(color[0] * brightness)),
    Math.min(255, Math.round(color[1] * brightness)),
    Math.min(255, Math.round(color[2] * brightness)),
    255,
  ];
}

function sparkColor(kind) {
  if (kind === "hot") return [255, 194, 74, 255];
  if (kind === "heart") return [255, 153, 202, 255];
  if (kind === "drop") return [126, 218, 255, 255];
  if (kind === "star" || kind === "double-star") return [255, 237, 142, 255];
  return [164, 250, 255, 255];
}

function star(x, y, size) {
  return (
    (Math.abs(x) < size * 0.25 && Math.abs(y) < size) ||
    (Math.abs(y) < size * 0.25 && Math.abs(x) < size)
  );
}

function heart(x, y) {
  const upper =
    Math.hypot(x - 0.45, y + 0.25) < 0.58 ||
    Math.hypot(x + 0.45, y + 0.25) < 0.58;
  const lower = y > 0.1 && y < 1.45 && Math.abs(x) < 1.15 - y * 0.6;
  return upper || lower;
}

function distanceToSegment(px, py, ax, ay, bx, by) {
  const abx = bx - ax;
  const aby = by - ay;
  const lengthSquared = abx * abx + aby * aby;
  const t = clamp01(((px - ax) * abx + (py - ay) * aby) / lengthSquared);
  return Math.hypot(px - (ax + abx * t), py - (ay + aby * t));
}

function roundedRectSdf(x, y, centerX, centerY, halfWidth, halfHeight, radius) {
  const qx = Math.abs(x - centerX) - (halfWidth - radius);
  const qy = Math.abs(y - centerY) - (halfHeight - radius);
  return (
    Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) +
    Math.min(Math.max(qx, qy), 0) -
    radius
  );
}

function rotatePoint(x, y, degrees) {
  const radians = (degrees / 360) * TAU;
  const cosine = Math.cos(radians);
  const sine = Math.sin(radians);
  return [x * cosine - y * sine, x * sine + y * cosine];
}

function mixColor(from, to, amount) {
  const t = clamp01(amount);
  return from.map((value, index) =>
    Math.round(value + (to[index] - value) * t),
  );
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}
