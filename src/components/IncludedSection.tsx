import { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import type { TranslationContent } from '../i18n/translations';
import { HoloCard } from './HoloCard';
import { FoldText } from './FoldText';

interface IncludedSectionProps {
  copy: TranslationContent['included'];
  onViewOffer: () => void;
  onPrimaryCtaClick: (origin: string) => void;
}

export function IncludedSection({
  copy,
  onViewOffer,
  onPrimaryCtaClick,
}: IncludedSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasTrackedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          hasTrackedRef.current = true;
          onViewOffer();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onViewOffer]);

  return (
    <section
      ref={sectionRef}
      id="inclui"
      className="relative z-10 border-b border-white/10 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

        {/* Single Offer Card + Full Scope */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Single HoloCard Offer Summary */}
          <div className="lg:col-span-5">
            <HoloCard className="p-6 sm:p-8">
              <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="font-display text-4xl sm:text-5xl font-bold text-[#A4C639] tabular-nums whitespace-nowrap">
                    {copy.priceValue}
                  </p>
                  <p className="mt-2 text-sm sm:text-base font-medium text-white">
                    {copy.priceLabel}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#CBD5E1]">
                <p>{copy.deliveryNote}</p>
                <p>{copy.revisionNote}</p>
                <p className="border-t border-white/10 pt-3 text-white/90">{copy.domainNote}</p>
                <div className="border-t border-white/10 pt-3 text-xs text-[#CBD5E1]/90 space-y-1">
                  <p className="font-medium text-[#C5E1A5]">{copy.languageAvailability}</p>
                  <p>{copy.baseNote}</p>
                </div>
              </div>

              <a
                href="#contratar"
                onClick={() => onPrimaryCtaClick('offer_card')}
                className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#A4C639] px-5 py-3 text-sm sm:text-base font-semibold text-[#060911] transition-colors hover:bg-[#93B730]"
              >
                <span>{copy.cardCta}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </HoloCard>
          </div>

          {/* Right: Included Items & Explicit Boundaries */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                {copy.includedHeading}
              </h3>
              <ul className="mt-4 space-y-3">
                {copy.includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#CBD5E1]"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#A4C639]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Single discreet line for optional advanced quote form or automations */}
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-[#C5E1A5]">
                <a
                  href="#contratar"
                  onClick={() => onPrimaryCtaClick('offer_options_note')}
                  className="underline decoration-[#A4C639]/40 underline-offset-4 transition-colors hover:text-[#A4C639]"
                >
                  {copy.upsellLine}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
