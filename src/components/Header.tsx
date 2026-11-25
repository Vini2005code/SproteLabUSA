import type { Language } from '../utils/analytics';
import type { TranslationContent } from '../i18n/translations';
import { SproteLogo } from './SproteLogo';
import { BrFlagIcon, UsFlagIcon } from './FlagIcons';

interface HeaderProps {
  lang: Language;
  copy: TranslationContent['nav'];
  onChangeLanguage: (next: Language) => void;
  onNavigate: (sectionId: string) => void;
  onPrimaryCtaClick: (origin: string) => void;
}

export function Header({
  lang,
  copy,
  onChangeLanguage,
  onNavigate,
  onPrimaryCtaClick,
}: HeaderProps) {
  const navItems = [
    { id: 'demonstracao', label: `01. ${copy.preview}` },
    { id: 'inclui', label: `02. ${copy.included}` },
    { id: 'como-funciona', label: `03. ${copy.howItWorks}` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-900/80 bg-[#0B0F19]/85 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between gap-3 sm:gap-8">
        {/* Zona 1: Marca em linha única */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center cursor-pointer shrink-0 whitespace-nowrap text-left rounded-md focus-visible:outline-2 focus-visible:outline-[#A4C639]"
          aria-label={lang === 'pt' ? 'Voltar ao início' : 'Back to top'}
        >
          <SproteLogo />
        </button>

        {/* Zona 2: Links limpos no Desktop */}
        <nav
          className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300"
          aria-label={lang === 'pt' ? 'Navegação principal' : 'Primary navigation'}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="hover:text-white hover:underline decoration-[#A4C639] underline-offset-4 transition-colors cursor-pointer whitespace-nowrap shrink-0 tabular-nums"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zona 3: Seletor de idioma (US / Brasil) + 1 CTA Principal */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            role="group"
            aria-label={copy.languageSelectorLabel}
            className="inline-flex items-center gap-1 sm:gap-1.5"
          >
            <button
              type="button"
              onClick={() => onChangeLanguage('en')}
              aria-pressed={lang === 'en'}
              aria-label="United States — English"
              className={`inline-flex min-h-[32px] sm:min-h-[36px] items-center gap-1.5 rounded-lg border px-1.5 sm:px-2.5 py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'border-[#A4C639]/75 bg-[#1A2336] text-white'
                  : 'border-white/12 bg-[#0D1222] text-slate-300 hover:border-white/30 hover:text-white'
              }`}
            >
              <UsFlagIcon className="h-3 w-4 sm:h-3.5 sm:w-5" />
              <span className="hidden sm:inline text-xs font-semibold">USA</span>
            </button>

            <button
              type="button"
              onClick={() => onChangeLanguage('pt')}
              aria-pressed={lang === 'pt'}
              aria-label="Brasil — Português"
              className={`inline-flex min-h-[32px] sm:min-h-[36px] items-center gap-1.5 rounded-lg border px-1.5 sm:px-2.5 py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'pt'
                  ? 'border-[#A4C639]/75 bg-[#1A2336] text-white'
                  : 'border-white/12 bg-[#0D1222] text-slate-300 hover:border-white/30 hover:text-white'
              }`}
            >
              <BrFlagIcon className="h-3 w-4 sm:h-3.5 sm:w-5" />
              <span className="hidden sm:inline text-xs font-semibold">Brasil</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onPrimaryCtaClick('header_cta');
              onNavigate('contratar');
            }}
            className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#A4C639] hover:bg-[#93B730] text-[#060911] text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            {copy.cta}
          </button>
        </div>
      </div>

      {/* Sub-barra compacta no Mobile */}
      <nav
        className="lg:hidden flex items-center justify-around border-t border-slate-900/80 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-300"
        aria-label={lang === 'pt' ? 'Navegação mobile' : 'Mobile navigation'}
      >
        {navItems.map((item, idx) => (
          <div key={item.id} className="contents">
            <button
              type="button"
              onClick={() => onNavigate(item.id)}
              className="px-1.5 py-1 hover:text-[#A4C639] transition-colors whitespace-nowrap tabular-nums cursor-pointer"
            >
              {item.label}
            </button>
            {idx < navItems.length - 1 && (
              <span className="text-slate-700" aria-hidden="true">
                ·
              </span>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
