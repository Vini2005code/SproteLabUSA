import { useState, type FormEvent } from 'react';
import { CheckCircle2, MapPin, RotateCcw, Sparkles } from 'lucide-react';
import type { Language } from '../utils/analytics';
import type { DemoCleaningSiteCopy } from '../i18n/translations';

interface CleaningDemoSiteProps {
  demoLang: Language;
  onChangeDemoLang: (next: Language) => void;
  copy: DemoCleaningSiteCopy;
  compactMobileFrame?: boolean;
}

interface DemoSubmissionPreview {
  name: string;
  contact: string;
  service: string;
  message: string;
}

export function CleaningDemoSite({
  demoLang,
  onChangeDemoLang,
  copy,
  compactMobileFrame = false,
}: CleaningDemoSiteProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submittedPreview, setSubmittedPreview] = useState<DemoSubmissionPreview | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedContact = contact.trim();
    const trimmedService = service.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedContact || !trimmedService) {
      setError(copy.formErrorRequired);
      return;
    }

    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);
    const digitsCount = trimmedContact.replace(/\D/g, '').length;
    if (!looksLikeEmail && digitsCount < 7) {
      setError(copy.formErrorContact);
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmittedPreview({
        name: trimmedName,
        contact: trimmedContact,
        service: trimmedService,
        message: trimmedMessage || '—',
      });
    }, 280);
  };

  const handleReset = () => {
    setSubmittedPreview(null);
    setError(null);
  };

  return (
    <div className="bg-white text-slate-900">
      {/* Top Demo Banner explicitly identifying fictional example */}
      <div className="border-b border-emerald-900/10 bg-emerald-950 px-4 py-2 text-center text-[11px] sm:text-xs font-medium text-emerald-100">
        {copy.demoTag}
      </div>

      {/* Cleaning Site Navbar */}
      <div className="border-b border-slate-200 bg-white px-4 py-3.5 sm:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7CB342] text-white"
            >
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-sm sm:text-base font-bold text-slate-900 whitespace-nowrap">
              {copy.brandName}
            </span>
          </div>

          {!compactMobileFrame && (
            <div className="hidden sm:flex items-center gap-5 text-xs font-medium text-slate-600">
              <span>{copy.navServices}</span>
              <span>{copy.navArea}</span>
              <span>{copy.navQuote}</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label="Demo site language"
              className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 p-0.5 text-[11px] font-semibold"
            >
              <button
                type="button"
                onClick={() => onChangeDemoLang('pt')}
                className={`rounded px-2 py-1 transition-colors ${
                  demoLang === 'pt'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => onChangeDemoLang('en')}
                className={`rounded px-2 py-1 transition-colors ${
                  demoLang === 'en'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cleaning Site Hero */}
      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <div
          className={`mx-auto grid max-w-4xl gap-6 ${
            compactMobileFrame ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-12 md:items-center'
          }`}
        >
          <div className={compactMobileFrame ? '' : 'md:col-span-6'}>
            <p className="text-xs font-medium text-[#5B8A2B]">{copy.serviceAreaTag}</p>
            <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold leading-tight text-slate-900">
              {copy.heroTitle}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{copy.heroSubtitle}</p>
            <a
              href="#demo-quote-form"
              onClick={(e) => {
                e.preventDefault();
                const el = e.currentTarget.closest('.bg-white')?.querySelector('#demo-quote-form');
                el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }}
              className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#7CB342] px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#6A9C36]"
            >
              {copy.heroCta}
            </a>
          </div>

          <div className={compactMobileFrame ? '' : 'md:col-span-6'}>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/src/assets/images/cleaning_demo_hero_1795619569516.jpg"
                  alt={copy.brandName}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="border-t border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] text-slate-500">
                {copy.photosNote}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="border-t border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-4xl">
          <h4 className="font-display text-lg font-bold text-slate-900">{copy.servicesHeading}</h4>

          <div
            className={`mt-4 grid gap-3.5 ${
              compactMobileFrame ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
            }`}
          >
            {copy.services.map((srv) => (
              <div
                key={srv.title}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <h5 className="text-sm font-semibold text-slate-900">{srv.title}</h5>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          {/* 2 secondary sample photos matching services */}
          <div
            className={`mt-4 grid gap-3.5 ${
              compactMobileFrame ? 'grid-cols-1' : 'grid-cols-2'
            }`}
          >
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/cleaning_demo_kitchen_1795619570922.jpg"
                  alt={copy.services[1]?.title ?? 'Kitchen cleaning'}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/cleaning_demo_office_1795619570879.jpg"
                  alt={copy.services[3]?.title ?? 'Office cleaning'}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area Section */}
      <div className="border-t border-slate-200 bg-white px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#5B8A2B]" aria-hidden="true" />
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
                {copy.areaHeading}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">{copy.areaDescription}</p>
              <p className="mt-2.5 text-xs sm:text-sm font-medium text-slate-800">
                {copy.areaCities.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Quote Request Form (Included in US$149 package) */}
      <div
        id="demo-quote-form"
        className="border-t border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 sm:py-8"
      >
        <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
          <h4 className="font-display text-lg font-bold text-slate-900">{copy.formHeading}</h4>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">{copy.formSubheading}</p>

          {submittedPreview ? (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-emerald-950">
                    {copy.formDemoResultTitle}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-emerald-900">
                    {copy.formDemoResultNote}
                  </p>

                  <dl className="mt-3 space-y-1.5 border-t border-emerald-200 pt-3 text-xs text-slate-800">
                    <div className="flex gap-2">
                      <dt className="font-semibold">{copy.formPayloadLabels.name}:</dt>
                      <dd className="truncate">{submittedPreview.name}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold">{copy.formPayloadLabels.contact}:</dt>
                      <dd className="truncate">{submittedPreview.contact}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold">{copy.formPayloadLabels.service}:</dt>
                      <dd className="truncate">{submittedPreview.service}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold">{copy.formPayloadLabels.message}:</dt>
                      <dd className="break-words">{submittedPreview.message}</dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{copy.formDemoResetLabel}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-3.5">
              <div>
                <label
                  htmlFor={`demo-name-${compactMobileFrame ? 'm' : 'd'}`}
                  className="block text-xs font-semibold text-slate-800"
                >
                  {copy.formNameLabel}
                </label>
                <input
                  id={`demo-name-${compactMobileFrame ? 'm' : 'd'}`}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={copy.formNamePlaceholder}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#7CB342] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor={`demo-contact-${compactMobileFrame ? 'm' : 'd'}`}
                  className="block text-xs font-semibold text-slate-800"
                >
                  {copy.formContactLabel}
                </label>
                <input
                  id={`demo-contact-${compactMobileFrame ? 'm' : 'd'}`}
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={copy.formContactPlaceholder}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#7CB342] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor={`demo-service-${compactMobileFrame ? 'm' : 'd'}`}
                  className="block text-xs font-semibold text-slate-800"
                >
                  {copy.formServiceLabel}
                </label>
                <select
                  id={`demo-service-${compactMobileFrame ? 'm' : 'd'}`}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#7CB342] focus:outline-none"
                >
                  <option value="">{copy.formServicePlaceholder}</option>
                  {copy.services.map((srv) => (
                    <option key={srv.title} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor={`demo-msg-${compactMobileFrame ? 'm' : 'd'}`}
                  className="block text-xs font-semibold text-slate-800"
                >
                  {copy.formMessageLabel}
                </label>
                <textarea
                  id={`demo-msg-${compactMobileFrame ? 'm' : 'd'}`}
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={copy.formMessagePlaceholder}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#7CB342] focus:outline-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs font-medium text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-[42px] w-full items-center justify-center rounded-lg bg-[#7CB342] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6A9C36] disabled:opacity-60"
              >
                {submitting ? copy.formSubmittingLabel : copy.formSubmitLabel}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer disclaimer inside demo */}
      <div className="border-t border-slate-200 bg-white px-4 py-4 text-center text-[11px] text-slate-500">
        {copy.footerDemoDisclaimer}
      </div>
    </div>
  );
}
