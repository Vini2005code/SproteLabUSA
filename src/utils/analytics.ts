export type Language = 'pt' | 'en';

export type AnalyticsEventName =
  | 'view_offer'
  | 'view_demo'
  | 'change_language'
  | 'click_primary_cta'
  | 'click_whatsapp'
  | 'click_email';

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface TrackEventOptions {
  language: Language;
  origin: string;
  targetLanguage?: Language;
  channel?: 'whatsapp' | 'email' | 'anchor';
}

const UTM_STORAGE_KEY = 'sprote_lab_utm_attribution_v1';
const UTM_KEYS: Array<keyof UtmParams> = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

/**
 * Reads UTM parameters from the current URL and persists them for the active browser session
 * so anchor navigation does not drop campaign attribution.
 */
export function getPersistedUtms(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const urlUtms: UtmParams = {};
    let hasUrlUtms = false;

    for (const key of UTM_KEYS) {
      const value = searchParams.get(key)?.trim();
      if (value) {
        urlUtms[key] = value.slice(0, 120);
        hasUrlUtms = true;
      }
    }

    if (hasUrlUtms) {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(urlUtms));
      return urlUtms;
    }

    const savedRaw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (savedRaw) {
      const parsed = JSON.parse(savedRaw) as UtmParams;
      return parsed && typeof parsed === 'object' ? parsed : {};
    }
  } catch {
    // Ignore storage/URL parsing errors in restricted browser contexts
  }

  return {};
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispatches non-PII interaction events to configured analytics hooks (dataLayer / gtag / fbq).
 * NOTE: Commercial conversion stages (lead_received, commercial_conversation, proposal,
 * purchase, upsell_sold) are tracked strictly outside front-end click handlers; `purchase`
 * must only be fired after confirmed payment, never on WhatsApp or email clicks.
 */
export function trackEvent(eventName: AnalyticsEventName, options: TrackEventOptions): void {
  if (typeof window === 'undefined') return;

  const utms = getPersistedUtms();
  const payload: Record<string, unknown> = {
    event: eventName,
    language: options.language,
    origin: options.origin,
    page_path: window.location.pathname,
    ...utms,
  };

  if (options.targetLanguage) {
    payload.target_language = options.targetLanguage;
  }

  if (options.channel) {
    payload.channel = options.channel;
  }

  // Forward to Google Tag Manager dataLayer if present
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // Forward to GA4 gtag if externally configured (no hardcoded/fake pixel IDs)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      language: options.language,
      origin: options.origin,
      ...utms,
    });
  }

  // Forward custom interaction event to Meta Pixel if externally initialized
  // Never fires 'Purchase' from client click events.
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, {
      language: options.language,
      origin: options.origin,
      ...utms,
    });
  }
}
