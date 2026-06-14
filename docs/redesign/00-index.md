# URVAR Natural — Website Redesign Blueprint

> Consulting-grade rebuild blueprint for **URVAR NATURAL PRIVATE LIMITED** — DPIIT-recognized organic & biological agri-inputs company, West Bengal (founded 2023).
> Benchmarked against UPL, Bayer Crop Science, FMC, Coromandel, Biostadt, IFFCO, Syngenta. Optimized for **trust, SEO authority, dealer acquisition, and farmer lead generation**.

**Status of this engagement:** Strategy & design documents only. No application code has been changed. Execution sequencing lives in [`09-roadmap.md`](./09-roadmap.md).

---

## How to read this blueprint

| # | Document | What it answers |
|---|----------|-----------------|
| 01 | [Audit](./01-audit.md) | How bad is it today, scored honestly across 16 dimensions |
| 02 | [Sitemap & IA](./02-sitemap-ia.md) | What pages exist, how they nest, URL + locale strategy |
| 03 | [Design System](./03-design-system.md) | The visual language: color, type, tokens, component library |
| 04 | [Page Blueprints](./04-page-blueprints.md) | Every page wireframed; homepage given the full ₹100-cr treatment |
| 05 | [Advanced Features](./05-features.md) | Dealer portal, calculators, locator, chatbot, search — specced & prioritized |
| 06 | [SEO Architecture](./06-seo-architecture.md) | Keyword clusters, topical authority, schema, internal linking, blog |
| 07 | [CRO & Funnels](./07-cro-funnels.md) | Lead capture, WhatsApp, sticky/floating CTAs, dealer + farmer funnels |
| 08 | [Technical Architecture](./08-technical-architecture.md) | Stack, Sanity schemas, CRM, performance, security, analytics |
| 09 | [12-Month Roadmap](./09-roadmap.md) | Phased execution plan tied to the priority table below |

---

## Executive summary

URVAR has a **clean, modest 4-page brochure site** with several genuine assets most early-stage agri startups lack: a cohesive green brand palette already in code, working English/Bengali localization, a live AI advisor ("Kisan Saathi") on Claude, WhatsApp, and structured product data. That is the good news.

The bad news, stated plainly: **the current site cannot acquire dealers and barely converts farmers.** It reads as a pamphlet, not as the future "India's most trusted organic and biological agriculture brand." The three structural failures:

1. **No dealer/distributor acquisition path.** For a 2023 company whose growth depends on channel expansion across WB → MH → KA → UP, the single highest-value page on the entire site — "Become a Distributor" — does not exist. This is the biggest commercial gap.
2. **No topical authority / thin SEO surface.** Four pages cannot rank for "biofertilizer manufacturer in India," "vermicompost manufacturer," "humic acid supplier," etc. There is no blog, no crop-solution pages, no pillar content. Competitors own these SERPs.
3. **No trust scaffolding at the depth B2B buyers, FPOs, and government institutions require.** DPIIT and MSME are mentioned, but there are no certificates, no manufacturing/quality story, no R&D narrative, no leadership, no field proof (success stories), no downloadable catalogue.

The redesign closes all three: a **conversion-engineered homepage**, a **full ~25-page IA** with crop-solution and authority pages, a **dual dealer + farmer funnel**, **Sanity CMS** so non-developers can publish, and an **SEO architecture** built to win the seven target keywords. The visual target is premium, scientific, nature-inspired — Apple/Stripe restraint applied to a Bayer/UPL agri context.

**Headline current scores** (full detail in [01-audit.md](./01-audit.md)): Visual design 6/10, IA 4/10, SEO 3/10, Lead generation 2/10, **Dealer acquisition 1/10**, Trust 4/10. Weighted overall: **≈3.9/10** — a competent prototype, not a market-leading brand site.

---

## Master priority table (Task 12)

Effort: **S** ≤2 dev-days · **M** ~1 week · **L** 2–4 weeks · **XL** multi-month. Impact is commercial (lead/dealer/SEO).

### 🟥 Must Have — do first, blocks growth
| Item | Why | Effort |
|------|-----|--------|
| "Become a Distributor" page + dealer enquiry funnel | The #1 missing commercial asset; growth = channel | M |
| Conversion-engineered homepage (12 sections) | Front door; sets trust + routes both audiences | L |
| Reusable UI primitives (Button/Card/Badge/Input/Section) | Everything else depends on a consistent system | M |
| Sanity CMS for products, crops, dealers, blog | Non-dev publishing; unblocks SEO velocity | L |
| Crop Solutions pages (Rice, Wheat, Veg, Potato, Mustard, Fruit) | Buyer-intent + SEO + cross-sell | L |
| SEO foundation: schema, URL-based locale, metadata, OG | Currently near-unrankable | M |
| Trust layer: Certificates, Manufacturing & Quality, About expansion | B2B/FPO/govt due-diligence requires it | M |
| GA4 + Search Console + event tracking on every CTA | You cannot optimize what you cannot measure | S |
| Sticky header + floating WhatsApp/Call/Enquire | Capture intent everywhere | S |

### 🟨 Should Have — strong ROI, second wave
| Item | Why | Effort |
|------|-----|--------|
| Blog + Farmer Education hub | Topical authority engine | M |
| Success Stories (field proof) | Converts skeptical farmers & dealers | M |
| Hindi locale (EN/HI/BN) | Maharashtra/UP reach | M |
| Dose calculator + nutrient-deficiency diagnosis | High-value micro-conversion, lead magnet | M |
| Downloads center (catalogue, product PDFs, TDS) | B2B + dealer enablement | S |
| Dealer locator (Google Maps) | Trust + farmer-to-dealer routing | M |
| Newsletter + catalogue-download funnels | Owned audience | S |
| CRM integration (lead routing) | Stop losing enquiries in inboxes | M |
| FAQs (with FAQ schema) | SEO + deflection + trust | S |

### 🟩 Nice to Have — differentiation, later
| Item | Why | Effort |
|------|-----|--------|
| Dealer portal (login, orders, schemes, collateral) | Channel loyalty & retention | XL |
| Crop-wise recommendation engine | Personalized cross-sell | L |
| Product comparison tool | Decision support | M |
| Voice search (Bengali/Hindi) | Low-literacy farmer access | M |
| Product search (instant) | UX at scale (post content growth) | S |
| Export-markets / B2B-buyers landing pages | Future revenue line | M |

---

## Guiding principles for the rebuild

1. **Two audiences, one site.** Every key page must answer "I'm a farmer" *and* "I'm a dealer/buyer." Route them early and often.
2. **Trust is the product.** Organic/bio inputs are a credence good — buyers can't verify quality at point of sale. Compensate with certificates, lab data (TDS), field proof, and a visible manufacturing/R&D story.
3. **Scientific, not salesy.** Match the restraint of Bayer/Syngenta. Data tables, dosage clarity, crop specificity — premium through precision, not stock photography.
4. **SEO is architecture, not an afterthought.** The IA *is* the topical map. Pages exist because a keyword cluster demands them.
5. **Measure or it didn't happen.** Every CTA is an event; every funnel has a conversion number.
