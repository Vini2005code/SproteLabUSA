# Sprote Lab — Analytics & Conversion Measurement Notes

This file documents the pending analytics/pixel configuration outside the commercial landing page UI.

## Client Interaction Events Prepared (`src/utils/analytics.ts`)

All events automatically include:
- `language`: `'pt' | 'en'`
- `origin`: component/section identifier (e.g. `'hero_primary'`, `'header_cta'`, `'contact_whatsapp'`)
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` (captured from URL and preserved in `sessionStorage`)

**Strict Privacy Rule**: No PII (`name`, `email`, `phone`, `city`, `message`) is ever attached to front-end analytics events.

Prepared events:
1. `view_offer` — Fired once when the offer / scope section enters the viewport.
2. `view_demo` — Fired once when the live demonstration section enters the viewport.
3. `change_language` — Fired when the user toggles `PT | EN` on the landing page.
4. `click_primary_cta` — Fired on primary anchor CTAs leading to `#contratar`.
5. `click_whatsapp` — Fired when opening `https://wa.me/553799237385`.
6. `click_email` — Fired when clicking `mailto:riosvini42@gmail.com` or copying the email address.

## Funnel Stage Separation

Do **not** fire `Purchase` on WhatsApp or email clicks. Keep commercial stages separated:
- `click_whatsapp` / `click_email` (front-end click intent)
- `lead_received` (CRM / inbox receipt)
- `commercial_conversation` (active WhatsApp/email qualification)
- `proposal` (external costs & scope confirmed)
- `purchase` (only after real payment confirmation)
- `upsell_sold` (optional US$79 advanced form + auto-confirmation or custom scope)

## Pending External Setup

- Add real GA4 Measurement ID or GTM container snippet in `index.html` (or host tag injector) when ready for production traffic.
- Add real Meta Pixel ID only via environment/host injection; never commit placeholder or fake pixel IDs.
