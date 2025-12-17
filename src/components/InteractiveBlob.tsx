import { useRef, useEffect, useState } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

interface InteractiveBlobProps {
  className?: string;
}

const InteractiveBlob = ({ className = '' }: InteractiveBlobProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initPoints(rect.width, rect.height);
    };

    const initPoints = (width: number, height: number) => {
      const points: Point[] = [];
      const gridSize = 40;
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          points.push({
            x: i * gridSize,
            y: j * gridSize,
            originX: i * gridSize,
            originY: j * gridSize,
            vx: 0,
            vy: 0
          });
        }
      }
      pointsRef.current = points;
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const points = pointsRef.current;
      const mouse = mouseRef.current;

      points.forEach((point) => {
        if (mouse.active) {
          const dx = mouse.x - point.x;
          const dy = mouse.y - point.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 30;
            point.vx -= (dx / dist) * force * 0.02;
            point.vy -= (dy / dist) * force * 0.02;
          }
        }

        const springX = (point.originX - point.x) * 0.03;
        const springY = (point.originY - point.y) * 0.03;
        
        point.vx += springX;
        point.vy += springY;
        
        point.vx *= 0.92;
        point.vy *= 0.92;
        
        point.x += point.vx;
        point.y += point.vy;
      });

      // Draw connecting lines
      ctx.strokeStyle = 'hsla(270, 15%, 35%, 0.08)';
      ctx.lineWidth = 1;

      points.forEach((point, i) => {
        points.slice(i + 1).forEach((other) => {
          const dx = other.x - point.x;
          const dy = other.y - point.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Draw points
      ctx.fillStyle = 'hsla(270, 15%, 35%, 0.15)';
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
};

export default InteractiveBlob;
