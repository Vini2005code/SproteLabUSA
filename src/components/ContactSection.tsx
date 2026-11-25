import { useMemo, useState } from 'react';
import { Check, Copy, Mail, MessageCircle } from 'lucide-react';
import type { TranslationContent } from '../i18n/translations';
import { FoldText } from './FoldText';

interface ContactSectionProps {
  copy: TranslationContent['contact'];
  onWhatsappClick: () => void;
  onEmailClick: (channelOrigin: string) => void;
}

const OFFICIAL_WHATSAPP_URL = 'https://wa.me/553799237385';
const OFFICIAL_EMAIL = 'riosvini42@gmail.com';

export function ContactSection({
  copy,
  onWhatsappClick,
  onEmailClick,
}: ContactSectionProps) {
  const [businessName, setBusinessName] = useState('');
  const [serviceLocation, setServiceLocation] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const composedMessage = useMemo(() => {
    const parts: string[] = [copy.whatsappPrefillBase];
    const cleanName = businessName.trim();
    const cleanLocation = serviceLocation.trim();

    if (cleanName) {
      parts.push(`${copy.whatsappNamePrefix}: ${cleanName}`);
    }
    if (cleanLocation) {
      parts.push(`${copy.whatsappLocationPrefix}: ${cleanLocation}`);
    }

    return parts.join('\n');
  }, [
    businessName,
    serviceLocation,
    copy.whatsappPrefillBase,
    copy.whatsappNamePrefix,
    copy.whatsappLocationPrefix,
  ]);

  const whatsappHref = `${OFFICIAL_WHATSAPP_URL}?text=${encodeURIComponent(composedMessage)}`;
  const mailtoHref = `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(
    copy.emailSubject
  )}&body=${encodeURIComponent(composedMessage)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setEmailCopied(true);
      onEmailClick('contact_copy_email');
      window.setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      onEmailClick('contact_copy_email_fallback');
    }
  };

  return (
    <section id="contratar" className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Summary & Clear Conditions */}
          <div className="lg:col-span-6">
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

            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
              {copy.summaryItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#CBD5E1]"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[#A4C639]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Optional Context Fields + WhatsApp & Email CTAs */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/12 bg-[#0D1222] p-6 sm:p-8">
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <label
                      htmlFor="contact-business-name"
                      className="text-sm font-medium text-white"
                    >
                      {copy.nameLabel}
                    </label>
                    <span className="font-mono-detail text-xs text-[#CBD5E1]/70">
                      {copy.optionalTag}
                    </span>
                  </div>
                  <input
                    id="contact-business-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={copy.namePlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#060911] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#A4C639] focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <label
                      htmlFor="contact-service-location"
                      className="text-sm font-medium text-white"
                    >
                      {copy.locationLabel}
                    </label>
                    <span className="font-mono-detail text-xs text-[#CBD5E1]/70">
                      {copy.optionalTag}
                    </span>
                  </div>
                  <input
                    id="contact-service-location"
                    type="text"
                    value={serviceLocation}
                    onChange={(e) => setServiceLocation(e.target.value)}
                    placeholder={copy.locationPlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#060911] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#A4C639] focus:outline-none"
                  />
                </div>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onWhatsappClick}
                className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#A4C639] px-5 py-3 text-sm sm:text-base font-semibold text-[#060911] transition-colors hover:bg-[#93B730]"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{copy.whatsappCta}</span>
              </a>

              <p className="mt-2.5 text-xs leading-relaxed text-[#CBD5E1]/85">
                {copy.privacyNote}
              </p>

              {/* Alternative official email contact */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-medium text-[#CBD5E1]">
                  {copy.emailAlternativeLabel}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={mailtoHref}
                    onClick={() => onEmailClick('contact_mailto')}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-white/15 bg-[#1A2336]/70 px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:border-[#A4C639]/60 hover:bg-[#1A2336]"
                  >
                    <Mail className="h-4 w-4 text-[#A4C639]" aria-hidden="true" />
                    <span>{copy.emailCta}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-white/10 bg-[#060911] px-3.5 py-2 text-xs font-semibold text-[#CBD5E1] transition-colors hover:border-white/25 hover:text-white"
                  >
                    <Copy className="h-3.5 w-3.5 text-[#A4C639]" aria-hidden="true" />
                    <span>{emailCopied ? copy.emailCopiedLabel : copy.copyEmailLabel}</span>
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#CBD5E1]/85 font-mono-detail">
                  <span>WhatsApp: {copy.directWhatsappNumber}</span>
                  <span>Email: {copy.directEmailAddress}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
