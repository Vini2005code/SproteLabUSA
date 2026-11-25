import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { TRANSLATIONS } from './i18n/translations';
import { getPersistedUtms, trackEvent, type Language } from './utils/analytics';
import { AeroShards } from './components/AeroShards';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DemoSection } from './components/DemoSection';
import { BenefitsSection } from './components/BenefitsSection';
import { IncludedSection } from './components/IncludedSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { IntroModal } from './components/IntroModal';

const LANG_STORAGE_KEY = 'sprote_lab_preferred_lang_v1';

function resolveInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  // 1. Explicit URL parameter ?lang=pt or ?lang=en takes highest precedence
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang')?.toLowerCase();
    if (urlLang === 'pt' || urlLang === 'en') {
      return urlLang;
    }
  } catch {
    // Ignore URL errors
  }

  // 2. Persisted user preference in localStorage
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }

  // 3. Default to English (no IP-based redirect)
  return 'en';
}

function updateMetaTag(selector: string, content: string) {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (el) {
    el.setAttribute('content', content);
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => resolveInitialLanguage());
  const [introModalOpen, setIntroModalOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  // Capture any UTM params on initial load
  useEffect(() => {
    getPersistedUtms();
  }, []);

  // Sync document lang attribute, page title, and OpenGraph metadata
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    updateMetaTag('meta[name="description"]', t.meta.description);
    updateMetaTag('meta[property="og:title"]', t.meta.title);
    updateMetaTag('meta[property="og:description"]', t.meta.description);
    updateMetaTag('meta[name="twitter:title"]', t.meta.title);
    updateMetaTag('meta[name="twitter:description"]', t.meta.description);
  }, [t]);

  const handleLanguageChange = useCallback(
    (nextLang: Language) => {
      if (nextLang === lang) return;

      const currentScrollY = window.scrollY;
      setLang(nextLang);

      try {
        window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);
      } catch {
        // Ignore storage errors
      }

      try {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', nextLang);
        window.history.replaceState(null, '', url.toString());
      } catch {
        // Ignore history errors
      }

      trackEvent('change_language', {
        language: nextLang,
        targetLanguage: nextLang,
        origin: 'header_selector',
      });

      // Preserve exact scroll position after DOM re-render
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: currentScrollY, behavior: 'auto' });
      });
    },
    [lang]
  );

  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handlePrimaryCtaClick = useCallback(
    (origin: string) => {
      trackEvent('click_primary_cta', {
        language: lang,
        origin,
        channel: 'anchor',
      });
    },
    [lang]
  );

  const handleViewDemo = useCallback(() => {
    trackEvent('view_demo', {
      language: lang,
      origin: 'demo_section',
    });
  }, [lang]);

  const handleViewOffer = useCallback(() => {
    trackEvent('view_offer', {
      language: lang,
      origin: 'included_section',
    });
  }, [lang]);

  const handleWhatsappClick = useCallback(
    (origin: string) => {
      trackEvent('click_whatsapp', {
        language: lang,
        origin,
        channel: 'whatsapp',
      });
    },
    [lang]
  );

  const handleEmailClick = useCallback(
    (origin: string) => {
      trackEvent('click_email', {
        language: lang,
        origin,
        channel: 'email',
      });
    },
    [lang]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0B0F19] text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#A4C639] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#060911]"
        >
          {t.nav.skipToContent}
        </a>

        <AeroShards />
        <CustomCursor />

        <Header
          lang={lang}
          copy={t.nav}
          onChangeLanguage={handleLanguageChange}
          onNavigate={handleNavigate}
          onPrimaryCtaClick={handlePrimaryCtaClick}
        />

        <main id="main-content">
          <HeroSection
            lang={lang}
            copy={t.hero}
            onPrimaryCtaClick={handlePrimaryCtaClick}
            onSecondaryCtaClick={() => handlePrimaryCtaClick('hero_secondary_demo')}
            onOpenIntroModal={() => setIntroModalOpen(true)}
          />

          <DemoSection lang={lang} copy={t.demo} onViewDemo={handleViewDemo} />

          <BenefitsSection copy={t.benefits} />

          <IncludedSection
            copy={t.included}
            onViewOffer={handleViewOffer}
            onPrimaryCtaClick={handlePrimaryCtaClick}
          />

          <HowItWorksSection copy={t.howItWorks} />

          <FaqSection copy={t.faq} />

          <ContactSection
            copy={t.contact}
            onWhatsappClick={() => handleWhatsappClick('contact_section')}
            onEmailClick={handleEmailClick}
          />
        </main>

        <Footer
          copy={t.footer}
          onWhatsappClick={() => handleWhatsappClick('footer')}
          onEmailClick={handleEmailClick}
        />

        <IntroModal
          isOpen={introModalOpen}
          copy={t.introModal}
          heroScannerCopy={{
            label: t.hero.scannerLabel,
            hint: t.hero.scannerHint,
            activeStatus: t.hero.scannerActiveStatus,
          }}
          onClose={() => setIntroModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
