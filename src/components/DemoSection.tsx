import { useEffect, useRef, useState } from 'react';
import { Maximize2, Monitor, Smartphone, X } from 'lucide-react';
import type { Language } from '../utils/analytics';
import type { TranslationContent } from '../i18n/translations';
import { CleaningDemoSite } from './CleaningDemoSite';
import { FoldText } from './FoldText';

interface DemoSectionProps {
  lang: Language;
  copy: TranslationContent['demo'];
  onViewDemo: () => void;
}

export function DemoSection({ lang, copy, onViewDemo }: DemoSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasTrackedRef = useRef(false);

  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [demoLang, setDemoLang] = useState<Language>(lang);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const closeModalBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Sync initial demo language when user switches landing page language
  useEffect(() => {
    setDemoLang(lang);
  }, [lang]);

  // Fire view_demo once when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasTrackedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          hasTrackedRef.current = true;
          onViewDemo();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onViewDemo]);

  // Accessible ESC + focus return for full-screen demo modal
  useEffect(() => {
    if (!fullscreenOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeModalBtnRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setFullscreenOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [fullscreenOpen]);

  const activeSiteCopy = copy.siteCopy[demoLang];

  return (
    <section
      ref={sectionRef}
      id="demonstracao"
      className="relative z-10 border-b border-white/10 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono-detail text-xs sm:text-sm font-semibold text-[#A4C639]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl [text-wrap:balance]">
              <FoldText
                key={copy.title}
                text={copy.title}
                foldStyle="paper"
                splitBy="char"
                hinge="top"
                trigger="scroll"
                foldAngle={92}
                duration={0.65}
                stagger={0.025}
                staggerFrom="start"
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
              />
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#CBD5E1]">{copy.subtitle}</p>
          </div>

          {/* Controls: Viewport + Demo Language + Fullscreen */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Viewport toggle */}
            <div
              role="group"
              aria-label={copy.viewportLabel}
              className="inline-flex items-center rounded-xl border border-white/12 bg-[#0D1222] p-1"
            >
              <button
                type="button"
                onClick={() => setViewportMode('desktop')}
                aria-pressed={viewportMode === 'desktop'}
                className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition-colors whitespace-nowrap ${
                  viewportMode === 'desktop'
                    ? 'bg-[#1A2336] text-[#A4C639]'
                    : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{copy.desktopMode}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('mobile')}
                aria-pressed={viewportMode === 'mobile'}
                className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition-colors whitespace-nowrap ${
                  viewportMode === 'mobile'
                    ? 'bg-[#1A2336] text-[#A4C639]'
                    : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{copy.mobileMode}</span>
              </button>
            </div>

            {/* Independent Demo PT | EN switcher */}
            <div
              role="group"
              aria-label={copy.demoLangLabel}
              className="inline-flex items-center rounded-xl border border-white/12 bg-[#0D1222] p-1"
            >
              <button
                type="button"
                onClick={() => setDemoLang('pt')}
                aria-pressed={demoLang === 'pt'}
                className={`min-h-[36px] rounded-lg px-2.5 text-xs font-semibold transition-colors ${
                  demoLang === 'pt'
                    ? 'bg-[#1A2336] text-[#A4C639]'
                    : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setDemoLang('en')}
                aria-pressed={demoLang === 'en'}
                className={`min-h-[36px] rounded-lg px-2.5 text-xs font-semibold transition-colors ${
                  demoLang === 'en'
                    ? 'bg-[#1A2336] text-[#A4C639]'
                    : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setFullscreenOpen(true)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#A4C639]/40 bg-[#0D1222] px-4 py-2 text-xs sm:text-sm font-semibold text-[#C5E1A5] transition-colors hover:border-[#A4C639] hover:bg-[#1A2336] whitespace-nowrap"
            >
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
              <span>{copy.fullscreenCta}</span>
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#CBD5E1]/90">{copy.disclaimer}</p>

        {/* Preview Stage */}
        <div className="mt-8">
          {viewportMode === 'desktop' ? (
            <div className="relative">
              {/* Desktop browser mockup */}
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0D1222] shadow-[0_28px_70px_rgba(0,0,0,0.55)]">
                <div className="flex items-center justify-between border-b border-white/10 bg-[#060911] px-4 py-3">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="font-mono-detail text-xs text-[#CBD5E1]">
                    ClearLeaf Cleaning Co. · {demoLang.toUpperCase()}
                  </span>
                  <span className="font-mono-detail text-[11px] text-[#A4C639]">
                    US$ 149
                  </span>
                </div>

                <div className="max-h-[680px] overflow-y-auto">
                  <CleaningDemoSite
                    demoLang={demoLang}
                    onChangeDemoLang={setDemoLang}
                    copy={activeSiteCopy}
                  />
                </div>
              </div>

              {/* Overlapping Smartphone preview frame on large screens */}
              <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-6 lg:right-6 lg:w-[275px] overflow-hidden rounded-[26px] border-2 border-[#1A2336] bg-[#060911] shadow-[0_24px_60px_rgba(0,0,0,0.75)]">
                <div className="flex items-center justify-center border-b border-white/10 bg-[#060911] py-2">
                  <span className="h-1.5 w-14 rounded-full bg-white/20" aria-hidden="true" />
                </div>
                <div className="max-h-[360px] overflow-y-auto">
                  <CleaningDemoSite
                    demoLang={demoLang}
                    onChangeDemoLang={setDemoLang}
                    copy={activeSiteCopy}
                    compactMobileFrame
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-[380px] overflow-hidden rounded-[32px] border-4 border-[#1A2336] bg-[#060911] shadow-[0_28px_70px_rgba(0,0,0,0.65)]">
              <div className="flex items-center justify-center border-b border-white/10 bg-[#060911] py-2.5">
                <span className="h-1.5 w-16 rounded-full bg-white/20" aria-hidden="true" />
              </div>
              <div className="max-h-[680px] overflow-y-auto">
                <CleaningDemoSite
                  demoLang={demoLang}
                  onChangeDemoLang={setDemoLang}
                  copy={activeSiteCopy}
                  compactMobileFrame
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Interactive Preview Modal */}
      {fullscreenOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-fullscreen-title"
          className="fixed inset-0 z-50 flex flex-col bg-[#060911]/95 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#0B0F19] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-4">
              <h3
                id="demo-fullscreen-title"
                className="font-display text-sm sm:text-base font-semibold text-white"
              >
                {copy.fullscreenTitle}
              </h3>
              <div
                role="group"
                aria-label={copy.demoLangLabel}
                className="inline-flex items-center rounded-lg border border-white/12 bg-[#0D1222] p-0.5"
              >
                <button
                  type="button"
                  onClick={() => setDemoLang('pt')}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                    demoLang === 'pt' ? 'bg-[#1A2336] text-[#A4C639]' : 'text-[#CBD5E1]'
                  }`}
                >
                  PT
                </button>
                <button
                  type="button"
                  onClick={() => setDemoLang('en')}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                    demoLang === 'en' ? 'bg-[#1A2336] text-[#A4C639]' : 'text-[#CBD5E1]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              ref={closeModalBtnRef}
              type="button"
              onClick={() => setFullscreenOpen(false)}
              aria-label={copy.closeFullscreenLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#0D1222] text-[#CBD5E1] transition-colors hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 sm:p-6">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <CleaningDemoSite
                demoLang={demoLang}
                onChangeDemoLang={setDemoLang}
                copy={activeSiteCopy}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
