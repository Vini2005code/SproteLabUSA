import { ArrowRight, Eye } from 'lucide-react';
import type { Language } from '../utils/analytics';
import type { TranslationContent } from '../i18n/translations';
import { EyeScanner } from './EyeScanner';
import { FoldText } from './FoldText';

interface HeroSectionProps {
  lang: Language;
  copy: TranslationContent['hero'];
  onPrimaryCtaClick: (origin: string) => void;
  onSecondaryCtaClick: () => void;
  onOpenIntroModal: () => void;
}

export function HeroSection({
  lang,
  copy,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  onOpenIntroModal,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative z-10 border-b border-white/10 pt-32 pb-14 sm:pt-36 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Offer, Price, Conditions, CTAs */}
          <div className="lg:col-span-7">
            <p className="font-mono-detail text-xs sm:text-sm font-semibold text-[#A4C639]">
              {copy.eyebrow}
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[52px] [text-wrap:balance]">
              <FoldText
                key={copy.title}
                text={copy.title}
                foldStyle="paper"
                splitBy="char"
                hinge="top"
                trigger="mount"
                foldAngle={92}
                duration={0.65}
                stagger={0.02}
                staggerFrom="start"
                ease="power3.out"
                loopDelay={1.4}
                perspective={700}
                creaseShading={0.55}
                fontSize="inherit"
                fontWeight="inherit"
              />
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
              {copy.subtitle}
            </p>

            {/* Primary + Secondary CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href="#contratar"
                onClick={() => onPrimaryCtaClick('hero_primary')}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#A4C639] px-6 py-3 text-sm sm:text-base font-semibold text-[#060911] transition-colors hover:bg-[#93B730]"
              >
                <span>{copy.primaryCta}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#demonstracao"
                onClick={onSecondaryCtaClick}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#0D1222] px-5 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:border-[#A4C639]/50 hover:bg-[#1A2336]"
              >
                <Eye className="h-4 w-4 shrink-0 text-[#A4C639]" aria-hidden="true" />
                <span>{copy.secondaryCta}</span>
              </a>
            </div>

            {/* Price & clear conditions */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0D1222]/90 p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#A4C639] tabular-nums whitespace-nowrap">
                  {copy.priceValue}
                </span>
                <span className="text-sm sm:text-base font-medium text-white">
                  {copy.priceLabel}
                </span>
              </div>

              <div className="mt-3 space-y-2 border-t border-white/10 pt-3 text-sm leading-relaxed text-[#CBD5E1]">
                <p>{copy.domainNote}</p>
                <p>{copy.deliveryNote}</p>
              </div>
            </div>
          </div>

          {/* Right column: Readable Desktop + Mobile Preview + Signature EyeScanner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/12 bg-[#0D1222] p-4 sm:p-5 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
              {/* Top row integrating EyeScanner + optional intro modal button */}
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <EyeScanner
                  size="sm"
                  label={copy.scannerLabel}
                  hint={copy.scannerHint}
                  activeStatusLabel={copy.scannerActiveStatus}
                />

                <div className="flex flex-col items-end text-right gap-1.5">
                  <span className="font-mono-detail text-xs text-[#C5E1A5]">
                    {copy.previewBadge}
                  </span>
                  <button
                    type="button"
                    onClick={onOpenIntroModal}
                    className="text-xs font-medium text-[#CBD5E1] underline decoration-white/25 underline-offset-4 transition-colors hover:text-[#A4C639] hover:decoration-[#A4C639]"
                  >
                    {copy.optionalIntroTrigger}
                  </button>
                </div>
              </div>

              {/* Desktop + Overlapping Mobile Preview Composition */}
              <div className="relative pb-6 sm:pb-8">
                {/* Desktop mini browser preview */}
                <div className="overflow-hidden rounded-xl border border-white/15 bg-[#F8FAFC] text-[#0F172A] shadow-lg">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-3 py-2">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-600">
                      ClearLeaf Cleaning Co. · Demo
                    </span>
                    <span className="text-[10px] font-semibold text-slate-700">PT | EN</span>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                    <img
                      src="/src/assets/images/cleaning_demo_hero_1795619569516.jpg"
                      alt={
                        lang === 'pt'
                          ? 'Sala de estar e cozinha limpas e iluminadas na prévia do site de limpeza'
                          : 'Bright freshly cleaned living room and kitchen in the cleaning website preview'
                      }
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="text-[11px] font-medium text-[#C5E1A5]">
                        {lang === 'pt'
                          ? 'Orlando & Central Florida (Exemplo)'
                          : 'Greater Orlando & Central Florida (Sample)'}
                      </p>
                      <p className="mt-0.5 font-display text-sm sm:text-base font-bold leading-snug">
                        {lang === 'pt'
                          ? 'Limpeza residencial e comercial com cuidado em cada detalhe.'
                          : 'Residential and small office cleaning presented clearly.'}
                      </p>
                      <span className="mt-2 inline-block rounded-md bg-[#A4C639] px-2.5 py-1 text-[11px] font-semibold text-[#060911]">
                        {lang === 'pt' ? 'Solicitar orçamento' : 'Request a quote'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Overlapping smartphone preview card */}
                <div className="absolute -bottom-1 right-2 w-36 sm:w-44 overflow-hidden rounded-2xl border-2 border-[#1A2336] bg-[#0B0F19] shadow-2xl">
                  <div className="flex items-center justify-center border-b border-white/10 bg-[#060911] py-1">
                    <span className="h-1 w-8 rounded-full bg-white/20" aria-hidden="true" />
                  </div>
                  <div className="bg-white p-2.5 text-slate-900">
                    <p className="text-[10px] font-bold text-slate-900">ClearLeaf Cleaning</p>
                    <p className="mt-1 text-[9px] leading-tight text-slate-600">
                      {lang === 'pt' ? 'Orçamento rápido · PT | EN' : 'Quote Request · PT | EN'}
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="h-4 rounded border border-slate-200 bg-slate-50 px-1.5 text-[8px] leading-4 text-slate-500">
                        {lang === 'pt' ? 'Nome' : 'Name'}
                      </div>
                      <div className="h-4 rounded border border-slate-200 bg-slate-50 px-1.5 text-[8px] leading-4 text-slate-500">
                        {lang === 'pt' ? 'Contato' : 'Contact'}
                      </div>
                      <div className="rounded bg-[#7CB342] py-1 text-center text-[8px] font-semibold text-white">
                        {lang === 'pt' ? 'Enviar pedido' : 'Send request'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-[#CBD5E1]">
                {copy.previewCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
