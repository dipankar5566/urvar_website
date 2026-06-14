# 02 — Sitemap & Information Architecture (Task 3)

The IA *is* the SEO topical map and the conversion machine. Every page exists because (a) a keyword cluster demands it, (b) a buyer journey needs it, or (c) trust requires it. See [06-seo-architecture.md](./06-seo-architecture.md) for the keyword mapping.

---

## Full sitemap (tree)

```
/ (Home)
│
├── /about
│   ├── /about/our-story
│   ├── /about/vision-mission
│   ├── /about/leadership
│   ├── /about/manufacturing-quality
│   └── /about/research-innovation
│
├── /products                         ← category overview + filter
│   ├── /products/organic-manures      ← category landing (pillar)
│   ├── /products/biofertilizers       ← category landing (pillar, future-ready)
│   ├── /products/bio-stimulants       ← category landing (pillar)
│   ├── /products/micronutrients       ← category landing (pillar)
│   └── /products/[slug]               ← product detail (8 today, scalable)
│         e.g. /products/enriched-vermicompost
│              /products/humic-acid-liquid
│              /products/zinc-edta-12
│
├── /crop-solutions                   ← hub (pillar)
│   ├── /crop-solutions/rice
│   ├── /crop-solutions/wheat
│   ├── /crop-solutions/vegetables
│   ├── /crop-solutions/potato
│   ├── /crop-solutions/mustard
│   └── /crop-solutions/fruit-crops
│
├── /dealers                          ← Dealer Network hub
│   ├── /dealers/become-a-distributor  ← ⭐ highest-value page on the site
│   └── /dealers/locator               ← find-a-dealer map (Should-have)
│
├── /resources                        ← Farmer Education + content hub
│   ├── /blog
│   │   └── /blog/[slug]
│   ├── /resources/farmer-education
│   ├── /resources/success-stories
│   │   └── /resources/success-stories/[slug]
│   ├── /resources/downloads           ← catalogue, TDS, product PDFs
│   ├── /resources/calculators         ← dose calculator, deficiency diagnosis
│   └── /faqs
│
├── /certificates                     ← DPIIT, MSME, GST, licenses, lab reports
│
├── /contact
│
└── Utility / system
    ├── /search                        (Should/Nice)
    ├── /privacy-policy
    ├── /terms
    ├── robots.txt   (exists: app/robots.ts)
    └── sitemap.xml  (exists: app/sitemap.ts — extend to all routes + hreflang)
```

**Page count:** ~28 unique templates/routes (excluding dynamic instances). Matches the "full sitemap scaffold" decision.

---

## URL structure rules

- **Lowercase, hyphenated, descriptive.** `/products/zinc-edta-12` not `/products/p-7`.
- **Keep existing `/products/[slug]`** — it works and has `generateStaticParams`. Add **category landing pages** above it (these are the SEO pillars; product detail pages are supporting).
- **Crops are first-class.** `/crop-solutions/rice` is a buyer-intent + SEO asset, cross-linked to the products used at each stage.
- **No deep nesting beyond 2 levels** for crawl efficiency and breadcrumb sanity.
- **Stable slugs.** Slugs become permanent (and CMS-driven). Set redirects if any current slug changes.

---

## Navigation model

### Primary header (desktop)
Sticky, condenses on scroll. See [07-cro-funnels.md](./07-cro-funnels.md) for sticky behavior.

```
[URVAR logo]   Products ▾   Crop Solutions ▾   Dealers ▾   About ▾   Resources ▾        [🔎] [EN/HI/BN]  [Become a Dealer →]  [☎ Call]
```

- **`Become a Dealer`** is a visually distinct primary button in the header — the single most important nav change vs. today (currently absent).
- **Mega-menus** for Products (by category + "shop by crop" shortcut) and Crop Solutions (6 crops with thumbnails).
- **Language switcher** upgraded to EN / हिंदी / বাংলা (see locale strategy below).

### Products mega-menu (example)
```
ORGANIC MANURES        BIO-STIMULANTS         MICRONUTRIENTS        BY CROP
• Enriched Vermicompost • Humic Acid Liquid    • Zinc EDTA 12%        🌾 Rice
• Cow Dung Manure (FYM) • Nitrobenzene+Humic   • Boron EDTA           🌾 Wheat
• PROM (3 variants)                                                   🥔 Potato …
                                              [Download catalogue ↓]  [All crops →]
```

### Mobile navigation
- Full-screen drawer, large tap targets (≥48px).
- **Persistent bottom action bar:** `Call` · `WhatsApp` · `Become a Dealer` — always reachable for rural/low-end devices.
- Accordion sections mirroring the mega-menus.

### Footer (sitewide)
4 columns + utility row:
1. **Products** (4 categories + catalogue download)
2. **Crop Solutions** (6 crops)
3. **Company** (About, Leadership, Manufacturing & Quality, R&D, Certificates, Careers-future)
4. **For Partners & Farmers** (Become a Distributor, Dealer Locator, Resources, Blog, FAQs, Contact)
+ Utility row: address, GST/CIN, DPIIT/MSME badges, social, language, privacy/terms.

---

## Breadcrumbs & internal-linking skeleton

- **Breadcrumbs on every page below top level**, with `BreadcrumbList` schema. e.g. `Home › Crop Solutions › Rice`.
- **Hub-and-spoke linking:**
  - Crop page → links to every product recommended for that crop (and its growth stages).
  - Product page → links back to the crops it serves + its category pillar + related products + relevant blog posts.
  - Category pillar → links down to all its products + up to relevant crops.
  - Blog post → links to the products/crops it discusses (contextual, in-body).
- **Conversion linking:** every content page has at least one farmer CTA (enquire/WhatsApp/calculator) and the dealer CTA persists in header/footer.
- Detailed cluster map in [06-seo-architecture.md](./06-seo-architecture.md).

---

## Locale / i18n URL strategy (EN / HI / BN)

**Current problem:** localization is client-side via `localStorage` ([context/LangContext.tsx](../../context/LangContext.tsx)). Bengali content is **invisible to search engines** — a critical SEO failure in a Bengali-first market.

**Recommendation: sub-path locale routing.**

```
/                 → English (default, no prefix)  OR  /en
/hi/...           → Hindi
/bn/...           → Bengali
```

- Each locale is a real, crawlable URL.
- Add **`hreflang`** alternates across all three for every page (and `x-default`).
- Keep the existing `en.ts` / `bn.ts` message structure; add `hi.ts` with the same typed `Messages` shape.
- Sitemap (`app/sitemap.ts`) extended to emit all locale variants with `alternates`.
- Migration note: convert the client-only `LangContext` to locale-segment routing (Next.js i18n pattern) during the Sanity/foundation phase — see [08-technical-architecture.md](./08-technical-architecture.md). Until then, document that BN SEO value is unrealized.

**Phasing:** EN + BN at launch (already authored), HI in the Should-have wave for Maharashtra/UP expansion.

---

## Mapping: existing → new

| Today | Becomes |
|-------|---------|
| `/` | Rebuilt 12-section homepage |
| `/products` | Products overview + 4 new category pillars beneath |
| `/products/[slug]` | Kept & enhanced (TDS download, crop links, comparison) |
| `/about` | Expanded into About hub (5 sub-pages) |
| `/contact` | Kept & enhanced (segmented enquiry routing) |
| — | **+ everything else in the tree above** |
