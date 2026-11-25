import { useState, type KeyboardEvent, type MouseEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface EyeScannerProps {
  label: string;
  hint: string;
  activeStatusLabel: string;
  onScan?: () => void;
  size?: 'sm' | 'md';
}

export function EyeScanner({
  label,
  hint,
  activeStatusLabel,
  onScan,
  size = 'md',
}: EyeScannerProps) {
  const prefersReducedMotion = useReducedMotion();
  const [irisOffset, setIrisOffset] = useState({ x: 0, y: 0 });
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const triggerScan = () => {
    setScanning(true);
    setScanComplete(false);
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(12);
      } catch {
        // Optional haptic feedback ignored when unsupported
      }
    }
    onScan?.();
    window.setTimeout(() => {
      setScanning(false);
      setScanComplete(true);
    }, 650);
  };

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    setIrisOffset({
      x: Math.max(-7, Math.min(7, nx * 16)),
      y: Math.max(-4, Math.min(4, ny * 10)),
    });
  };

  const handleMouseLeave = () => {
    setIrisOffset({ x: 0, y: 0 });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      triggerScan();
    }
  };

  const dim = size === 'sm' ? 'w-24 h-16' : 'w-32 h-22 sm:w-36 sm:h-24';

  return (
    <div className="inline-flex flex-col items-start gap-1.5">
      <button
        type="button"
        onClick={triggerScan}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        aria-label={label}
        title={hint}
        className={`group relative flex items-center justify-center rounded-xl border border-[#A4C639]/30 bg-[#0D1222]/90 p-2 transition-colors hover:border-[#A4C639]/75 focus-visible:outline-2 focus-visible:outline-[#A4C639] ${dim}`}
      >
        <svg
          viewBox="0 0 150 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sproteCircuitGrad" x1="14" y1="48" x2="136" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A4C639" />
              <stop offset="55%" stopColor="#589B54" />
              <stop offset="100%" stopColor="#286D82" />
            </linearGradient>
          </defs>

          {/* Main eye contour matching Sprote Lab circuit logo */}
          <path
            d="M22 48C34 25 53 16 75 16C98 16 118 27 130 48C118 69 98 80 75 80C53 80 34 71 22 48Z"
            stroke="url(#sproteCircuitGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#060911"
          />

          {/* Top-left circuit branches */}
          <path
            d="M44 21H32L18 35"
            stroke="#A4C639"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="15.5" cy="37.5" r="3" stroke="#A4C639" strokeWidth="2.2" fill="#060911" />
          <path
            d="M52 29H40L32 37"
            stroke="#A4C639"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="43.5" cy="29" r="3" stroke="#A4C639" strokeWidth="2.2" fill="#060911" />

          {/* Top-left 3 micro-dots */}
          <rect x="52" y="21" width="3.5" height="3.5" rx="0.6" fill="#A4C639" />
          <rect x="58" y="19.5" width="3.5" height="3.5" rx="0.6" fill="#7CB342" />
          <rect x="64" y="18.5" width="3.5" height="3.5" rx="0.6" fill="#589B54" />

          {/* Bottom-right circuit branches */}
          <path
            d="M106 75H118L132 61"
            stroke="#286D82"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="134.5" cy="58.5" r="3" stroke="#3688A1" strokeWidth="2.2" fill="#060911" />
          <path
            d="M98 67H110L118 59"
            stroke="#286D82"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="106.5" cy="67" r="3" stroke="#3688A1" strokeWidth="2.2" fill="#060911" />

          {/* Bottom-right 3 micro-dots */}
          <rect x="94.5" y="71.5" width="3.5" height="3.5" rx="0.6" fill="#286D82" />
          <rect x="88.5" y="73" width="3.5" height="3.5" rx="0.6" fill="#3B8778" />
          <rect x="82.5" y="74" width="3.5" height="3.5" rx="0.6" fill="#589B54" />

          {/* Moving iris ring matching official logo center ring */}
          <motion.g
            animate={{
              x: irisOffset.x,
              y: irisOffset.y,
              scale: scanning ? 1.08 : 1,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <circle
              cx="75"
              cy="48"
              r="16.5"
              stroke="#7CB342"
              strokeWidth="4.2"
              fill="#0D1222"
            />
            <circle
              cx="75"
              cy="48"
              r="6.5"
              fill="#A4C639"
              fillOpacity={scanning ? '0.95' : '0.35'}
            />
            <circle cx="71.5" cy="44.5" r="1.8" fill="#C5E1A5" fillOpacity="0.85" />
          </motion.g>

          {/* Laser sweep line */}
          {!prefersReducedMotion && (
            <motion.line
              x1="28"
              x2="122"
              y1="48"
              y2="48"
              stroke="#C5E1A5"
              strokeWidth="1.5"
              initial={{ opacity: 0, y: -18 }}
              animate={
                scanning
                  ? { opacity: [0.2, 0.95, 0.2], y: [-20, 20, -20] }
                  : { opacity: 0, y: 0 }
              }
              transition={{ duration: 0.65, ease: 'easeInOut' }}
            />
          )}
        </svg>
      </button>
      {scanComplete && (
        <span className="font-mono-detail text-[11px] text-[#C5E1A5]" aria-live="polite">
          {activeStatusLabel}
        </span>
      )}
    </div>
  );
}
