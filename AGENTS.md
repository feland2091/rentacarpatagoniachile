# AGENTS.md

Single-page landing site for **Rent a Car Patagonia Chile** (rentacarpatagoniachile.cl), car rental in Puerto Natales. The parent brand site is rentacarpatagonia.com.

## Architecture

- TanStack Start + React 19 + Tailwind v4. Single route: `src/routes/index.tsx` (all landing sections as local components).
- `src/routes/__root.tsx`: Spanish SEO metadata, canonical, Open Graph and `AutoRental` JSON-LD (built from `src/lib/site.ts`). Google Fonts: Fraunces (display) + Manrope (body).
- `src/lib/site.ts`: business data (WhatsApp link/phone, address, rating, fleet, pickup location IDs). Edit facts here, not in components.
- `src/lib/i18n.tsx`: client-side translations (`es`, `en`, `fr`, `pt`, `zh`). The `es` dictionary defines the `Dict` type, so every language must have the same keys. The server always renders Spanish (best for the Chilean SEO target). After hydration the provider applies `?lang=`, then the saved choice in localStorage (`rcp-lang`), then the browser language, and updates `<html lang>`.
- `src/components/`: `Header` (with language select), `QuickBooking` (form + `openWhatsApp` helper), `ContactForm` (vehicle inquiry via Netlify Forms), `WhatsAppIcon`.
- `src/styles.css`: theme tokens (`navy`, `navy-deep`, `glacier`, `lagoon`, `ice`, `mist`, `whatsapp`) and small animations.
- `public/img/fleet/*.jpg`: real vehicle photos from rentacarpatagonia.com (set per vehicle in `FLEET[].photo`). `public/img/*.png`: AI-generated scenery photos. Always reference them through the Netlify Image CDN (`/.netlify/images?url=/img/<file>&w=<w>&fm=webp`) via the `img()` helper in the index route.

## Conventions and decisions

- Fleet categories are Sedán, Hatchback, SUV, 4x4 and 7 pasajeros. The business has no "city car" category; don't reintroduce it.
- Vehicle inquiries use the Netlify Form `contacto-vehiculos` (skeleton in `public/__forms.html`; keep its fields in sync with `ContactForm`). Email notifications to info@rentacarpatagonia.com are configured in the Netlify UI, not in code.
- No other backend or persistence: bookings go to WhatsApp +56 9 7138 2927 (`WHATSAPP_PHONE` in `site.ts`), opened as `wa.me/<phone>?text=` with the message pre-filled. If the phone is cleared, `openWhatsApp` falls back to copying the message and showing a toast.
- Logo: `public/img/logo.png` (official, from rentacarpatagonia.com; dark navy on transparent), always shown on a white chip so it reads over the hero and footer. `logo-icon.png` is the square icon.
- Distances on the routes section are approximate. Don't add prices, deposits or legal terms without the owner confirming them.
- Use the existing Tailwind theme colors (blue/white palette) for any new section.
