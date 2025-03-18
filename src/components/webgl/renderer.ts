
import { Point, CONNECTION_DISTANCE } from './types';
import { isValidCoordinate } from './utils';

export const drawBackground = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  gradient: CanvasGradient | null,
  time: number
) => {
  if (!gradient) return;
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add subtle wave effect
  const isDarkMode = document.documentElement.classList.contains('dark');
  const waveColor = isDarkMode ? 'rgba(155, 135, 245, 0.03)' : 'rgba(155, 135, 245, 0.02)';
  
  // Create wave patterns with increased speed
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.strokeStyle = waveColor;
    ctx.lineWidth = height / 20;
    
    for (let x = 0; x < width; x += 5) {
      // Increased wave frequency and amplitude for more dynamic motion
      const y = Math.sin(x / (60 + i * 15) + time * 1.5 + i) * 20 + height / 2 + i * 30;
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
};

export const drawConnections = (
  ctx: CanvasRenderingContext2D,
  points: Point[]
) => {
  ctx.globalAlpha = 0.25;
  
  // Using a more efficient approach to avoid checking all pairs
  const grid: Record<string, Point[]> = {};
  const cellSize = CONNECTION_DISTANCE;
  
  // Place points in grid cells
  points.forEach(point => {
    const cellX = Math.floor(point.x / cellSize);
    const cellY = Math.floor(point.y / cellSize);
    const cellKey = `${cellX},${cellY}`;
    
    if (!grid[cellKey]) grid[cellKey] = [];
    grid[cellKey].push(point);
  });
  
  // For each point, only check nearby cells
  points.forEach(point => {
    const cellX = Math.floor(point.x / cellSize);
    const cellY = Math.floor(point.y / cellSize);
    
    // Check surrounding cells
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const nearCellKey = `${cellX + i},${cellY + j}`;
        const nearPoints = grid[nearCellKey];
        
        if (!nearPoints) continue;
        
        nearPoints.forEach(otherPoint => {
          if (point === otherPoint) return;
          
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.5;
            ctx.strokeStyle = point.color;
            ctx.globalAlpha = opacity * point.z * otherPoint.z;
            ctx.lineWidth = 1 * Math.min(point.z, otherPoint.z);
            
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      }
    }
  });
};

export const drawPoints = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
  time: number
) => {
  points.forEach(point => {
    ctx.globalAlpha = point.z * 0.8;
    ctx.fillStyle = point.color;
    
    // Glass effect with mini shadow
    const glowSize = point.size * 1.5;
    
    // Check for invalid point coordinates before creating gradient
    if (isValidCoordinate(point.x) && isValidCoordinate(point.y) && isValidCoordinate(glowSize)) {
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0, 
        point.x, point.y, glowSize
      );
      gradient.addColorStop(0, point.color);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Add faster pulsing effect
      const pulseSize = point.size * (1 + 0.3 * Math.sin(time * 4 + point.x)); // Increased pulse speed
      
      // Actual point
      ctx.fillStyle = point.color;
      ctx.beginPath();
      ctx.arc(point.x, point.y, pulseSize * point.z, 0, Math.PI * 2);
      ctx.fill();
    }
  });
};

export const updatePoints = (
  points: Point[],
  mousePos: { x: number; y: number },
  width: number,
  height: number,
  speedMultiplier: number = 1 // Default to 1x speed if not specified
) => {
  points.forEach(point => {
    // Add a stronger gravitational pull toward mouse with enhanced interaction
    const dx = mousePos.x - point.x;
    const dy = mousePos.y - point.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Enhanced cursor interaction - stronger pull and effect radius
    const interactionRadius = 250; // Increased from 200
    if (dist < interactionRadius) {
      // Calculate strength based on distance - closer means stronger effect
      const strength = (1 - dist / interactionRadius) * 0.5 * point.z * speedMultiplier;
      
      // Add gentle vortex effect
      const vortexFactor = 0.15;
      const vortexX = -dy * vortexFactor;
      const vortexY = dx * vortexFactor;
      
      // Combine direct pull with vortex motion
      point.vx += (dx / dist * 0.7 + vortexX) * strength;
      point.vy += (dy / dist * 0.7 + vortexY) * strength;
      
      // Add subtle color shift based on cursor proximity
      if (dist < interactionRadius * 0.5) {
        // This effect happens only in canvas drawing, not affecting stored color
        point.z = Math.min(1, point.z + 0.01); // Slightly increase opacity near cursor
      }
    }
    
    // Update position with dynamic movement - faster angle rotation speed
    point.angle += 0.02 * speedMultiplier; // Increased rotation speed
    
    // Blend between direct mouse influence and circular/sinusoidal motion
    const circleInfluence = Math.max(0, 1 - (dist / 400));
    point.x += (point.vx * (1 - circleInfluence) + Math.cos(point.angle) * point.speed * circleInfluence) * speedMultiplier;
    point.y += (point.vy * (1 - circleInfluence) + Math.sin(point.angle) * point.speed * circleInfluence) * speedMultiplier;
    
    // Apply friction - adjust based on speed multiplier for more natural deceleration
    const friction = 0.98 - (speedMultiplier * 0.001); // Slightly stronger friction at higher speeds
    point.vx *= friction;
    point.vy *= friction;
    
    // Slowly normalize z value back to original
    point.z = point.z * 0.99 + 0.5 * 0.01; // Gradually return to mid opacity
    
    // Wrap around edges for infinite movement effect
    if (point.x < -50) point.x = width + 50;
    if (point.x > width + 50) point.x = -50;
    if (point.y < -50) point.y = height + 50;
    if (point.y > height + 50) point.y = -50;
  });
};
