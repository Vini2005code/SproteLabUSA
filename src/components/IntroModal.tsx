import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { TranslationContent } from '../i18n/translations';
import { EyeScanner } from './EyeScanner';

interface IntroModalProps {
  isOpen: boolean;
  copy: TranslationContent['introModal'];
  heroScannerCopy: {
    label: string;
    hint: string;
    activeStatus: string;
  };
  onClose: () => void;
}

export function IntroModal({ isOpen, copy, heroScannerCopy, onClose }: IntroModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sprote-intro-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#060911]/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#0D1222] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={copy.closeLabel}
          className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1A2336] text-[#CBD5E1] transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/assets/aistudio/logosprotelab_transparent.png"
              alt="Sprote Lab"
              className="h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(164,198,57,0.28)]"
            />
            <EyeScanner
              size="sm"
              label={heroScannerCopy.label}
              hint={heroScannerCopy.hint}
              activeStatusLabel={heroScannerCopy.activeStatus}
            />
          </div>

          <div>
            <p className="font-mono-detail text-xs text-[#A4C639]">{copy.subtitle}</p>
            <h2
              id="sprote-intro-modal-title"
              className="mt-1 font-display text-2xl font-bold text-white"
            >
              {copy.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#CBD5E1]">
              {copy.description}
            </p>
          </div>

          <a
            href="#inclui"
            onClick={onClose}
            className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#A4C639] px-5 py-2.5 text-sm font-semibold text-[#060911] transition-colors hover:bg-[#93B730]"
          >
            {copy.continueCta}
          </a>
        </div>
      </div>
    </div>
  );
}
