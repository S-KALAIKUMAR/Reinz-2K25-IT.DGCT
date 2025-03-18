
import { Point, COLORS } from './types';

export const createPoints = (width: number, height: number, count: number): Point[] => {
  return Array.from({ length: count }, () => {
    const size = Math.random() * 3 + 1;
    const angle = Math.random() * Math.PI * 2;
    const baseSpeed = Math.random() * 0.5 + 0.1;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.5 + 0.5, // depth factor
      vx: Math.cos(angle) * baseSpeed,
      vy: Math.sin(angle) * baseSpeed,
      size,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle,
      speed: baseSpeed,
      baseSpeed
    };
  });
};

export const createGradient = (
  ctx: CanvasRenderingContext2D, 
  width: number, 
  height: number, 
  isDarkMode: boolean
): CanvasGradient => {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  
  if (isDarkMode) {
    // Dark lavender gradient
    gradient.addColorStop(0, 'rgba(25, 15, 50, 0.8)');
    gradient.addColorStop(0.5, 'rgba(30, 20, 70, 0.8)');
    gradient.addColorStop(1, 'rgba(40, 30, 90, 0.9)');
  } else {
    // Light lavender gradient
    gradient.addColorStop(0, 'rgba(245, 240, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(235, 225, 254, 0.8)');
    gradient.addColorStop(1, 'rgba(225, 215, 253, 0.9)');
  }
  
  return gradient;
};

export const isValidCoordinate = (value: number): boolean => {
  return isFinite(value) && !isNaN(value);
};
