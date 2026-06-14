# 08 — Technical Architecture (Task 9)

The current stack is already close to the preferred target — this is mostly *additive*, not a rewrite. Keep what works (Next 16, React 19, Tailwind v4, the AI chat, product data model); add CMS, proper i18n routing, analytics, CRM, and hardening.

---

## 1. Confirmed stack

| Layer | Choice | Status |
|-------|--------|--------|
| Framework | **Next.js 16.2.6** (App Router, Turbopack), **React 19.2.4** | ✅ in place. ⚠️ `AGENTS.md`: this Next has breaking changes vs. training data — **read `node_modules/next/dist/docs/` before building** |
| Language | **TypeScript** (strict) | ✅ |
| Styling | **Tailwind v4** + custom primitives (no shadcn) | ✅ base; extend tokens per [03](./03-design-system.md) |
| CMS | **Sanity** | ➕ add — schemas below |
| AI | **@anthropic-ai/sdk** (Claude) — Kisan Saathi, diagnosis, recommendations | ✅ chat live; harden + extend |
| Hosting | **Vercel** | ➕ recommended (native Next) |
| Edge/CDN/Sec | **Cloudflare** (DNS, WAF, caching, rate-limit, bot mgmt) | ➕ |
| Analytics | **GA4** + **Google Search Console** (+ Bing) | ➕ |
| Forms→CRM | CRM of choice (see §5) via API routes/webhooks | ➕ |
| i18n | URL-based locale EN/HI/BN | ⚠️ migrate from localStorage |

---

## 2. Sanity CMS — schema outline

Replace hardcoded `data/products.ts` and `messages/*.ts` content with Sanity documents (typed via generated types; keep the existing `Product` TS shape as the contract). Use localized fields (object per locale or field-level i18n) for EN/HI/BN.

```
product
  slug, name(i18n), tagline(i18n), description(i18n)
  category → ref(category)
  images[] (Sanity image, alt i18n)
  benefits[](i18n)
  nutrients[] { parameter, value }          // existing NutrientRow
  dosages[] { crop→ref, dose, method(i18n) } // existing DosageRow
  packaging[] { sku, size, unit }
  tds (file), msds (file)
  cropsRecommended[] → ref(crop)
  relatedProducts[] → ref(product)
  seo { title, description, ogImage }

category   { slug, name(i18n), description(i18n), color, icon, order }
crop       { slug, name(i18n), image, stages[]{name(i18n), products[]→ref(product), notes(i18n)}, commonDeficiencies[], seo }
dealer     { name, type, geo(lat/lng), address, district, state, phone, active }  // powers locator
successStory { slug, farmerName, crop→ref, district, state, result, quote(i18n), media, product→ref }
blogPost   { slug, title(i18n), excerpt(i18n), body(portable text, i18n), author→ref, category, coverImage, publishedAt, relatedProducts[], relatedCrops[], seo }
author     { name, role, bio(i18n), photo }
download   { title(i18n), file, type(catalogue|tds|dealerkit), gated(bool) }
faq        { question(i18n), answer(i18n), group }
page       { slug, title(i18n), sections[] (modular), seo }  // for editable marketing pages
siteSettings { contact, phones, socials, addresses, certificates[], navConfig }
lead       // NOT in Sanity — goes to CRM (see §5)
```

**Rendering:** server components fetch via Sanity client; ISR/`revalidate` or webhook-triggered revalidation on publish. Keep `generateStaticParams` for product/crop/blog slugs. Sanity Studio embedded at `/studio` or separate.

---

## 3. i18n architecture (EN / HI / BN)
- **Migrate** from client-only `LangContext`/`localStorage` to **URL sub-path locales** (`/`, `/hi`, `/bn`) so all content is crawlable — current biggest SEO gap.
- Keep typed message shape (`Messages` from `en.ts`); content text moves to Sanity localized fields; UI chrome strings stay in message files (add `hi.ts`).
- Emit `hreflang` + canonical; locale-aware sitemap alternates.
- Locale switcher updates URL (preserves path). Auto-suggest locale by `Accept-Language` but never force.
- Indic fonts (Noto Sans Bengali/Devanagari) via `next/font`.

---

## 4. AI architecture (Claude)
- **Existing:** `/api/chat` (Claude Haiku, EN/BN, crop/product aware). Keep; use the latest appropriate Claude model.
- **Harden (required):** rate-limiting (Cloudflare + per-IP in route), input validation/length caps, abuse/cost monitoring, `ANTHROPIC_API_KEY` server-only (already correct — ensure never committed; rotate if the live key in `.env.local` was ever exposed).
- **Extend:** ground responses in Sanity product/crop data (pass structured context), lead-capture handoff, Hindi support, deep-links to product/crop pages.
- **New AI features** (deficiency diagnosis, recommendation) share the same hardened pattern; consider streaming + prompt caching for cost.

---

## 5. CRM integration
- Form submissions → Next.js **API route** → CRM via API/webhook (HubSpot, Zoho CRM — popular in India, or a lightweight Airtable/Google Sheet to start).
- Payload: name, phone, audience (Farmer/Dealer/FPO), location, product/crop interest, source page, locale, UTM.
- Auto-acknowledge via WhatsApp Business API / SMS (e.g. Gupshup/MSG91) + email.
- Lead routing rules: dealer → channel team; farmer → sales/dealer-of-record by district; SLA tracked.
- Keep Formspree only as an interim fallback; do not store leads in Sanity.

---

## 6. Performance optimization
- **Server-first:** default to Server Components; mark only interactive leaves `"use client"` (current code over-uses client — fix during rebuild).
- **Images:** `next/image`, AVIF/WebP, responsive `sizes`, blur placeholders, Sanity image pipeline (CDN transforms). Compress all product/farm assets (audit flag).
- **Fonts:** `next/font` subset, `display: swap` (already), limit weights.
- **Caching:** ISR/static for content pages; Cloudflare CDN; cache headers.
- **JS budget:** code-split heavy widgets (map, calculators) with dynamic import; defer non-critical.
- **CWV targets (rural profiles):** LCP <2.5s, INP <200ms, CLS <0.1; enforce via Lighthouse CI in the pipeline.

---

## 7. Image & asset optimization
- Sanity as DAM; on-the-fly transforms (format, size, crop, quality).
- Descriptive filenames + alt (SEO).
- SVG for icons/logo (logo.svg exists); custom icon set replacing emojis.
- Lazy-load below-the-fold; priority-load hero LCP image only.

---

## 8. Security
- **Secrets:** all keys in env (Vercel env vars); never in repo. Audit `.env.local` is gitignored; **rotate ANTHROPIC_API_KEY if it was ever committed**.
- **Edge:** Cloudflare WAF, DDoS, bot management, rate-limiting on `/api/*` (chat + forms).
- **Headers:** CSP, HSTS, X-Frame-Options, Referrer-Policy (Next config / middleware).
- **Forms:** server-side validation, honeypot, rate-limit, sanitize before CRM.
- **Compliance:** privacy policy + terms (forms/analytics/cookies); cookie consent for GA4; DPDP Act (India) alignment for personal data.
- **Dependencies:** Dependabot/`npm audit`; pin versions.
- Remove hardcoded dev IP from `next.config.ts` for production.

---

## 9. Analytics & event plan
- **GA4** + **Search Console** + Cloudflare Web Analytics (privacy-friendly backup).
- **Key events:** `dealer_enquiry_submit`, `farmer_enquiry_submit`, `whatsapp_click` (w/ source), `call_click`, `catalogue_download`, `tds_download`, `calculator_complete`, `diagnosis_complete`, `chatbot_engage`, `newsletter_signup`, `dealer_locator_search`, `cta_click` (w/ placement), `scroll_75`.
- **Conversions:** dealer + farmer enquiry = primary; downloads/newsletter = secondary.
- **Dashboards:** funnel conversion, CTA performance by placement, lead source quality (CRM-joined), CWV.
- **UTM discipline** on all campaigns; consistent naming.

---

## 10. Dev & ops
- **CI/CD:** Vercel preview deploys per PR; Lighthouse CI gate; type-check + lint (eslint config exists) on CI.
- **Testing:** add component tests (Vitest/RTL) for primitives + funnel forms; e2e (Playwright) for the two macro funnels.
- **Env management:** `.env.local.example` already documents `NEXT_PUBLIC_FORMSPREE_ID`, `ANTHROPIC_API_KEY`; add `SANITY_*`, CRM, WhatsApp/SMS, GA4 keys.
- **Content workflow:** editors in Sanity Studio; publish → webhook revalidate; preview mode for drafts.
- **Monitoring:** error tracking (Sentry), uptime, AI cost alerts.
