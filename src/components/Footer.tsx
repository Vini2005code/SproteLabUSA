import type { TranslationContent } from '../i18n/translations';
import { SproteLogo } from './SproteLogo';

interface FooterProps {
  copy: TranslationContent['footer'];
  onWhatsappClick: () => void;
  onEmailClick: (origin: string) => void;
}

export function Footer({ copy, onWhatsappClick, onEmailClick }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#060911] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <SproteLogo />
            <p className="mt-2.5 text-sm text-[#CBD5E1]">{copy.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#CBD5E1]">
            <a
              href="https://wa.me/553799237385"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onWhatsappClick}
              className="transition-colors hover:text-[#A4C639]"
            >
              {copy.whatsappLabel}: +55 (37) 9923-7385
            </a>
            <a
              href="mailto:riosvini42@gmail.com"
              onClick={() => onEmailClick('footer_email')}
              className="transition-colors hover:text-[#A4C639]"
            >
              {copy.emailLabel}: riosvini42@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-[#CBD5E1]/75">
          <p>{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
