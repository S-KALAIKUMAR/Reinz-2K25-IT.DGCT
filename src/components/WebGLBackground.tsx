
import { useEffect, useRef, useState } from 'react';
import { Point, MousePosition, POINTS_COUNT } from './webgl/types';
import { createPoints, createGradient } from './webgl/utils';
import { drawBackground, drawConnections, drawPoints, updatePoints } from './webgl/renderer';

export const WebGLBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);
  const gradientRef = useRef<CanvasGradient | null>(null);
  const timeRef = useRef<number>(0);
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create gradient based on theme with lavender colors
    const updateGradient = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      gradientRef.current = createGradient(ctx, canvas.width, canvas.height, isDarkMode);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      updateGradient();
      
      // Initialize points if not already or if window size changed significantly
      if (pointsRef.current.length === 0 || Math.abs(rect.width - (pointsRef.current[0]?.canvasWidth || 0)) > 200) {
        pointsRef.current = createPoints(rect.width, rect.height, POINTS_COUNT);
        // Store canvas dimensions with points for easier reference
        pointsRef.current.forEach(point => {
          point.canvasWidth = rect.width;
          point.canvasHeight = rect.height;
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      setCursorActive(true);
      
      // Reset cursor activity after inactivity
      resetCursorTimeout();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
        setCursorActive(true);
        resetCursorTimeout();
        e.preventDefault();
      }
    };

    // Create custom cursor effect for enhanced interaction
    const cursorEffect = document.createElement('div');
    cursorEffect.className = 'cursor-effect';
    document.body.appendChild(cursorEffect);

    // Handle cursor effect movement
    const handleCursorEffect = (e: MouseEvent) => {
      cursorEffect.style.left = `${e.clientX}px`;
      cursorEffect.style.top = `${e.clientY}px`;
      cursorEffect.style.opacity = '1';
    };

    // Add cursor effect styles
    const style = document.createElement('style');
    style.textContent = `
      .cursor-effect {
        position: fixed;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(155, 135, 245, 0.2);
        backdrop-filter: blur(4px);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s, opacity 0.3s, background 0.3s;
        box-shadow: 0 0 15px rgba(155, 135, 245, 0.5);
        opacity: 0;
      }
      
      a:hover ~ .cursor-effect,
      button:hover ~ .cursor-effect {
        width: 60px;
        height: 60px;
        background: rgba(155, 135, 245, 0.3);
      }
    `;
    document.head.appendChild(style);

    let cursorTimeout: number | null = null;
    const resetCursorTimeout = () => {
      if (cursorTimeout) {
        window.clearTimeout(cursorTimeout);
      }
      cursorTimeout = window.setTimeout(() => {
        setCursorActive(false);
      }, 3000); // Reset after 3 seconds of inactivity
    };

    const handleThemeChange = () => {
      updateGradient();
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      
      const rect = canvas.getBoundingClientRect();
      // Increase animation speed
      timeRef.current += 0.04; // Increased from 0.03 for faster animation
      
      // Draw gradient background with animated shader effect
      drawBackground(ctx, rect.width, rect.height, gradientRef.current, timeRef.current);
      
      // Update points position with higher speed and cursor interaction
      const interactionMultiplier = cursorActive ? 5 : 3.5;
      updatePoints(pointsRef.current, mouseRef.current, rect.width, rect.height, interactionMultiplier); 
      
      // Draw connections
      drawConnections(ctx, pointsRef.current);
      
      // Draw points
      drawPoints(ctx, pointsRef.current, timeRef.current);
      
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    // Listen for theme changes
    const themeObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });
    
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Add smooth scroll-driven animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / height, 1);
      
      // Adjust animation speed based on scroll position
      const speedMultiplier = 1 + progress * 2.5; // Ranges from 1 to 3.5
      
      // Update some points based on scroll
      pointsRef.current.forEach((point, i) => {
        if (i % 3 === 0) { // Only update 1/3 of points for performance
          point.speed = point.baseSpeed * speedMultiplier;
        }
      });
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleCursorEffect);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    resize();
    draw();
    resetCursorTimeout();
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleCursorEffect);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      themeObserver.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
      if (cursorTimeout) {
        window.clearTimeout(cursorTimeout);
      }
      if (document.body.contains(cursorEffect)) {
        document.body.removeChild(cursorEffect);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [cursorActive]);

  return (
    <canvas 
      ref={canvasRef} 
      className="webgl-background"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
