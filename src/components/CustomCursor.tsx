import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPointerTarget, setIsPointerTarget] = useState(false);
  const [isTextTarget, setIsTextTarget] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springX = useSpring(rawX, { stiffness: 520, damping: 38, mass: 0.35 });
  const springY = useSpring(rawY, { stiffness: 520, damping: 38, mass: 0.35 });

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateMatch = () => setEnabled(mediaQuery.matches);
    updateMatch();

    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, [prefersReducedMotion]);

  // Preload /sprote_logo_cursor.png before hiding native cursor
  useEffect(() => {
    if (!enabled) return;
    let mounted = true;
    const img = new Image();
    img.src = '/sprote_logo_cursor.png';
    img.onload = () => {
      if (mounted) {
        setImageLoaded(true);
        document.body.classList.add('sprote-custom-cursor-ready');
      }
    };
    img.onerror = () => {
      if (mounted) {
        setImageLoaded(false);
        document.body.classList.remove('sprote-custom-cursor-ready');
      }
    };

    return () => {
      mounted = false;
      document.body.classList.remove('sprote-custom-cursor-ready');
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !imageLoaded) return;

    const handleMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const textElement = target.closest('input, textarea, select, [contenteditable="true"]');
      setIsTextTarget(Boolean(textElement));

      const interactiveElement = target.closest('a, button, [role="button"], summary');
      setIsPointerTarget(Boolean(interactiveElement) && !textElement);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [enabled, imageLoaded, rawX, rawY]);

  if (!enabled || !imageLoaded || !visible || isTextTarget) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Subtle brand green outer ring using spring physics */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointerTarget ? 1.18 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.16 }}
        className="absolute top-0 left-0 flex h-11 w-11 items-center justify-center"
      >
        <img
          src="/sprote_logo_cursor.png"
          alt=""
          className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(164,198,57,0.45)]"
        />
      </motion.div>

      {/* Crisp immediate center dot */}
      <motion.div
        style={{
          x: rawX,
          y: rawY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-[#A4C639]"
      />
    </div>
  );
}
