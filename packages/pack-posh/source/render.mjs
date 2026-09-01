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
  if (![1, 4 / 3, 2, 4].includes(density)) {
    throw new Error(`Unsupported density ${density}`);
  }
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
      for (let channel = 0; channel < 4; channel++) {
        output.data[offset + channel] = Math.round(total[channel] / samples);
      }
    }
  }
  return output;
}

export function renderAtlas(expressions = createExpressions(), density = 1) {
  const cell = LOGICAL_CELL_SIZE * density;
  const atlas = new PNG({ width: COLUMNS * cell, height: ROWS * cell });
  expressions.forEach((expression, index) => {
    const frame = renderFrame(expression, density);
    const left = (index % COLUMNS) * cell;
    const top = Math.floor(index / COLUMNS) * cell;
    PNG.bitblt(frame, atlas, 0, 0, cell, cell, left, top);
  });
  return atlas;
}

function sampleExpression(expression, x, y) {
  const body = expression.body;
  const centerX = body.x;
  const centerY = body.y - body.lift;
  const width = body.width * (1 + body.squash);
  const height = body.height * (1 - body.squash);
  const [bodyX, bodyY] = rotatePoint(x - centerX, y - centerY, -body.tilt);
  const rx = width / 2;
  const ry = height / 2;
  const radial = Math.sqrt((bodyX / rx) ** 2 + (bodyY / ry) ** 2);

  if (radial > 1.095) return [0, 0, 0, 0];
  if (radial > 1) {
    const halo = Math.max(0, 1 - (radial - 1) / 0.095);
    const glow = Math.min(0.34, 0.08 + body.glow);
    return [151, 164, 255, Math.round(255 * halo * glow)];
  }

  const outlineLogical = 1.55;
  const edgeDistance = (1 - radial) * Math.min(rx, ry);
  let color;
  if (edgeDistance <= outlineLogical) {
    color = [14, 22, 49, 255];
  } else {
    color = bodyColor(body, bodyX / rx, bodyY / ry, radial);
  }

  const eyeLayer = sampleEyes(expression, x, y, centerX, centerY);
  return eyeLayer ?? color;
}

function bodyColor(body, nx, ny, radial) {
  const lowerLeft = clamp01((-nx * 0.48 + ny * 0.72 - 0.16) * 0.72);
  const rightRim = clamp01((nx - 0.47) * 2.5) * clamp01((radial - 0.58) * 2.4);
  const upperGlow = clamp01((-ny - 0.25) * 0.85) * 0.08;
  const directional = rimVector(body.rim);
  const directedRim =
    clamp01(nx * directional[0] + ny * directional[1] - 0.55) * 0.11;
  const shade = clamp01(lowerLeft * 0.62 + directedRim);
  const gold = clamp01(rightRim * 0.82 + body.glow * 0.35);

  const pearl = [249, 250, 255];
  const periwinkle = [186, 197, 255];
  const warm = [255, 222, 151];
  let rgb = mix(pearl, periwinkle, shade);
  rgb = mix(rgb, warm, gold);
  rgb = mix(rgb, [255, 255, 255], upperGlow);
  return [...rgb.map(Math.round), 255];
}

function rimVector(rim) {
  if (rim === "balanced") return [0.7, 0.35];
  const direction = {
    N: [0, -1],
    NE: [0.7, -0.7],
    E: [1, 0],
    SE: [0.7, 0.7],
    S: [0, 1],
    SW: [-0.7, 0.7],
    W: [-1, 0],
    NW: [-0.7, -0.7],
  }[rim];
  return direction ?? [0.7, 0.35];
}

function sampleEyes(expression, x, y, centerX, centerY) {
  const anchors = [
    ["left", -7],
    ["right", 7],
  ];
  for (const [side, anchorX] of anchors) {
    const eye = expression.eyes[side];
    const eyeCenterX = centerX + anchorX + eye.x + eye.gazeX * 0.48;
    const eyeCenterY = centerY - 4 + eye.y + eye.gazeY * 0.48;
    const [localX, localY] = rotatePoint(
      x - eyeCenterX,
      y - eyeCenterY,
      -(eye.tilt + expression.body.tilt * 0.35),
    );
    if (!insideEye(eye, localX, localY)) continue;
    if (insideHighlight(eye, localX, localY)) {
      return highlightColor(eye.highlight);
    }
    const depth = clamp01((localY / Math.max(eye.height, 1) + 0.5) * 1.25);
    const navy = [11, 20, 47];
    const blue = [24, 79, 126];
    return [...mix(navy, blue, depth).map(Math.round), 255];
  }
  return null;
}

function insideEye(eye, x, y) {
  const halfWidth = eye.width / 2;
  const halfHeight = eye.height / 2;
  if (y < -halfHeight + eye.lidTop * eye.height) return false;
  if (y > halfHeight - eye.lidBottom * eye.height) return false;
  if (eye.symbol === "diamond") {
    return Math.abs(x / halfWidth) + Math.abs(y / halfHeight) <= 1;
  }
  return roundedRectDistance(x, y, halfWidth, halfHeight) <= 0;
}

function roundedRectDistance(x, y, halfWidth, halfHeight) {
  const radius = Math.min(halfWidth, halfHeight);
  const qx = Math.abs(x) - (halfWidth - radius);
  const qy = Math.abs(y) - (halfHeight - radius);
  return (
    Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) +
    Math.min(Math.max(qx, qy), 0) -
    radius
  );
}

function insideHighlight(eye, x, y) {
  if (eye.highlight === "none") return false;
  const phase = eye.highlightPhase ?? 0;
  const hx = -eye.width * 0.13 + eye.highlightX * 0.22 + phase * 0.7;
  const hy = -eye.height * 0.22 + eye.highlightY * 0.12 - phase * 0.45;
  const px = x - hx;
  const py = y - hy;

  switch (eye.highlight) {
    case "double":
      return (
        circle(px, py, Math.max(0.66, eye.width * 0.13)) ||
        circle(px - eye.width * 0.23, py - eye.height * 0.16, 0.48)
      );
    case "single":
      return circle(px, py, Math.max(0.62, eye.width * 0.12));
    case "star": {
      const size = Math.max(0.9, eye.width * 0.18);
      return (
        Math.abs(px) <= size * (1 - Math.abs(py) / (size * 1.9)) ||
        Math.abs(py) <= size * (1 - Math.abs(px) / (size * 1.9))
      );
    }
    case "ring": {
      const radius = Math.hypot(px, py);
      const outer = Math.max(0.95, eye.width * 0.18);
      return radius <= outer && radius >= outer * 0.52;
    }
    case "pin":
      return circle(px, py, 0.58);
    case "bar":
      return (
        roundedRectDistance(px, py, 0.48, Math.max(0.85, eye.height * 0.12)) <=
        0
      );
    case "tear":
      return (
        circle(px, py, 0.68) ||
        (Math.abs(px - 0.2) < 0.48 && py > 0.4 && py < 2.4 - Math.abs(px - 0.2))
      );
    case "heart": {
      const upper =
        circle(px - 0.45, py + 0.25, 0.58) ||
        circle(px + 0.45, py + 0.25, 0.58);
      const lower = py >= 0.2 && py <= 1.55 && Math.abs(px) <= 1.2 - py * 0.62;
      return upper || lower;
    }
    case "square":
      return Math.abs(px) <= 0.72 && Math.abs(py) <= 0.72;
    default:
      throw new Error(`Unknown eye highlight ${eye.highlight}`);
  }
}

function highlightColor(kind) {
  if (kind === "tear") return [194, 232, 255, 255];
  if (kind === "heart") return [255, 224, 245, 255];
  if (kind === "star") return [255, 246, 188, 255];
  return [245, 250, 255, 255];
}

function circle(x, y, radius) {
  return x * x + y * y <= radius * radius;
}

function rotatePoint(x, y, degrees) {
  const radians = (degrees / 360) * TAU;
  const cosine = Math.cos(radians);
  const sine = Math.sin(radians);
  return [x * cosine - y * sine, x * sine + y * cosine];
}

function mix(from, to, amount) {
  const t = clamp01(amount);
  return from.map((value, index) => value + (to[index] - value) * t);
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}
