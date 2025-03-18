
export interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number;
  size: number;
  color: string;
  angle: number;
  speed: number;
  baseSpeed: number; // Store original speed for reference
  canvasWidth?: number; // Store canvas width for reference
  canvasHeight?: number; // Store canvas height for reference
}

export interface MousePosition {
  x: number;
  y: number;
}

export const POINTS_COUNT = 100;
export const CONNECTION_DISTANCE = 150;

// Updated to lavender color palette
export const COLORS = [
  'rgba(155, 135, 245, 0.8)',  // lavender
  'rgba(126, 105, 171, 0.8)',  // mid lavender
  'rgba(110, 89, 165, 0.8)',   // deep lavender
  'rgba(214, 188, 250, 0.8)',  // light lavender
  'rgba(229, 222, 255, 0.8)',  // soft lavender
  'rgba(142, 45, 226, 0.8)',   // violet
];
