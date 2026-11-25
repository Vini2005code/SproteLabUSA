import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { TranslationContent } from '../i18n/translations';
import { FoldText } from './FoldText';

interface FaqSectionProps {
  copy: TranslationContent['faq'];
}

export function FaqSection({ copy }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative z-10 border-b border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
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

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0D1222]">
          {copy.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 text-left transition-colors hover:bg-[#1A2336]/50"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-[#A4C639] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 sm:px-6 text-sm sm:text-base leading-relaxed text-[#CBD5E1]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
