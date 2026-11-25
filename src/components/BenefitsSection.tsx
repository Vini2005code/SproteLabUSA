import type { TranslationContent } from '../i18n/translations';
import { FoldText } from './FoldText';

interface BenefitsSectionProps {
  copy: TranslationContent['benefits'];
}

function PillarIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="6" width="24" height="20" rx="4" stroke="#A4C639" strokeWidth="1.75" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="#A4C639" strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="9" y1="17.5" x2="18" y2="17.5" stroke="#C5E1A5" strokeWidth="1.75" strokeLinecap="round" />
        <line x1="9" y1="21.5" x2="22" y2="21.5" stroke="#CBD5E1" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 9.5C5 7.84315 6.34315 6.5 8 6.5H24C25.6569 6.5 27 7.84315 27 9.5V22.5C27 24.1569 25.6569 25.5 24 25.5H8C6.34315 25.5 5 24.1569 5 22.5V9.5Z"
          stroke="#A4C639"
          strokeWidth="1.75"
        />
        <path
          d="M6.5 9L16 16.5L25.5 9"
          stroke="#C5E1A5"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="11" stroke="#A4C639" strokeWidth="1.75" />
      <ellipse cx="16" cy="16" rx="5.5" ry="11" stroke="#C5E1A5" strokeOpacity="0.75" strokeWidth="1.5" />
      <line x1="5.5" y1="16" x2="26.5" y2="16" stroke="#A4C639" strokeOpacity="0.7" strokeWidth="1.5" />
    </svg>
  );
}

export function BenefitsSection({ copy }: BenefitsSectionProps) {
  return (
    <section className="relative z-10 border-b border-white/10 py-16 sm:py-24">
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

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {copy.items.map((item, idx) => (
            <div
              key={item.index}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0D1222] p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <PillarIcon index={idx} />
                  <span className="font-mono-detail text-xs font-medium text-[#A4C639]/80">
                    {item.index}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#CBD5E1]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
