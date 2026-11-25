import type { TranslationContent } from '../i18n/translations';
import { FoldText } from './FoldText';

interface HowItWorksSectionProps {
  copy: TranslationContent['howItWorks'];
}

export function HowItWorksSection({ copy }: HowItWorksSectionProps) {
  return (
    <section id="como-funciona" className="relative z-10 border-b border-white/10 py-16 sm:py-24">
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

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#0D1222] p-6"
            >
              <span className="font-mono-detail text-sm font-semibold text-[#A4C639]">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#CBD5E1]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
