import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

interface Shard {
  x: number;
  y: number;
  z: number;
  size: number;
  vx: number;
  vy: number;
  angle: number;
  vAngle: number;
  alpha: number;
  accent: boolean;
}

export function AeroShards() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [canvasReady, setCanvasReady] = useState(false);

  // Defer initialization slightly so first paint and primary offer copy render immediately
  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setTimeout(() => {
      setCanvasReady(true);
    }, 120);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!canvasReady || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let isPaused = document.hidden;

    const isMobile = window.innerWidth < 768;
    const shardCount = isMobile ? 10 : 22;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const shards: Shard[] = Array.from({ length: shardCount }, (_, idx) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: 0.4 + Math.random() * 0.8,
      size: (isMobile ? 16 : 22) + Math.random() * 28,
      vx: (Math.random() - 0.5) * 0.16,
      vy: -0.08 - Math.random() * 0.18,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.004,
      alpha: 0.04 + Math.random() * 0.07,
      accent: idx % 3 === 0,
    }));

    const drawFrame = () => {
      if (isPaused) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      for (const s of shards) {
        s.x += s.vx * s.z;
        s.y += s.vy * s.z;
        s.angle += s.vAngle;

        if (s.y < -60) {
          s.y = height + 60;
          s.x = Math.random() * width;
        }
        if (s.x < -60) s.x = width + 60;
        if (s.x > width + 60) s.x = -60;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);

        const half = s.size * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, -half);
        ctx.lineTo(half * 0.85, half * 0.35);
        ctx.lineTo(-half * 0.65, half * 0.85);
        ctx.closePath();

        if (s.accent) {
          ctx.fillStyle = `rgba(164, 198, 57, ${s.alpha * 0.65})`;
          ctx.strokeStyle = `rgba(197, 225, 165, ${s.alpha * 1.4})`;
        } else {
          ctx.fillStyle = `rgba(26, 35, 54, ${s.alpha * 2.1})`;
          ctx.strokeStyle = `rgba(203, 213, 225, ${s.alpha * 0.7})`;
        }

        ctx.lineWidth = 0.8;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = window.requestAnimationFrame(drawFrame);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    if (!isPaused) {
      animationFrameId = window.requestAnimationFrame(drawFrame);
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [canvasReady, prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Static ambient radial fallback always present */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 48% at 72% 14%, rgba(164, 198, 57, 0.08), transparent 68%), radial-gradient(ellipse 60% 45% at 15% 78%, rgba(26, 35, 54, 0.55), transparent 72%), linear-gradient(180deg, #060911 0%, #0B0F19 42%, #060911 100%)',
        }}
      />
      {/* Subtle architectural grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {!prefersReducedMotion && canvasReady && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-90"
        />
      )}
    </div>
  );
}
