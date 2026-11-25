import { useState, type MouseEvent, type ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';

interface HoloCardProps {
  children: ReactNode;
  className?: string;
}

export function HoloCard({ children, className = '' }: HoloCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 20 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 4.5;
    const rotateX = (0.5 - py) * 4.5;
    setTilt({
      rotateX,
      rotateY,
      glareX: px * 100,
      glareY: py * 100,
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 20 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transform: `perspective(1100px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transition: hovered ? 'transform 120ms ease-out' : 'transform 280ms ease-out',
            }
      }
      className={`relative overflow-hidden rounded-2xl border border-white/12 bg-[#0D1222] shadow-[0_24px_60px_rgba(0,0,0,0.45)] ${className}`}
    >
      {/* Top luminous hairline accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A4C639]/65 to-transparent"
      />

      {/* Subtle glare reflection */}
      {!prefersReducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-200"
          style={{
            opacity: hovered ? 0.5 : 0,
            background: `radial-gradient(420px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(164, 198, 57, 0.12), transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
