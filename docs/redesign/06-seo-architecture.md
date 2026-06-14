# 06 — SEO Architecture (Task 7)

Goal: own the seven target terms and build defensible topical authority in organic/biological agri-inputs for India, with strong local relevance in WB → MH → KA → UP. The [IA](./02-sitemap-ia.md) is engineered for this; this doc maps keywords → pages → schema → links → content cadence.

**Target keywords:** biofertilizer manufacturer in India · organic fertilizer company · humic acid supplier · vermicompost manufacturer · zinc edta fertilizer · agricultural micronutrients · soil health solutions.

---

## 1. Keyword clusters

### Cluster A — Manufacturer / brand (commercial, high value)
*Pillar:* Home + /about/manufacturing-quality
- biofertilizer manufacturer in India, organic fertilizer company, organic fertilizer manufacturer, biofertilizer company in West Bengal, organic agri inputs company India
- *Local long-tail:* organic fertilizer manufacturer in West Bengal / Maharashtra / Karnataka / Uttar Pradesh

### Cluster B — Organic manures (product)
*Pillar:* /products/organic-manures
- vermicompost manufacturer, vermicompost supplier, buy vermicompost online, enriched vermicompost price, cow dung manure / FYM supplier, PROM fertilizer, phosphate rich organic manure
- *Supporting:* /products/enriched-vermicompost, /products/cow-dung-manure-fym, PROM product pages

### Cluster C — Bio-stimulants (product)
*Pillar:* /products/bio-stimulants
- humic acid supplier, humic acid liquid for plants, humic acid manufacturer India, nitrobenzene + humic, bio stimulant for crops
- *Supporting:* /products/humic-acid-liquid + future fulvic/seaweed/amino pages

### Cluster D — Micronutrients (product)
*Pillar:* /products/micronutrients
- zinc edta fertilizer, zinc edta 12% price, boron edta fertilizer, chelated micronutrients, agricultural micronutrients, micronutrient deficiency in crops
- *Supporting:* /products/zinc-edta-12, /products/boron-edta, deficiency-diagnosis tool

### Cluster E — Soil health (informational, authority)
*Pillar:* /resources/farmer-education (soil-health pillar article)
- soil health solutions, how to improve soil fertility, organic soil amendments, soil microbiome, restore degraded soil
- *Supporting:* blog posts on soil testing, organic carbon, biological farming

### Cluster F — Crop programs (buyer-intent, local)
*Pillars:* /crop-solutions/[crop]
- organic fertilizer for paddy/rice, best fertilizer for potato, micronutrients for wheat, nutrient schedule for mustard, fertilizer for vegetables, fruit crop nutrition
- maps directly to the 6 crop pages

### Cluster G — Dealership (commercial, channel)
*Pillar:* /dealers/become-a-distributor
- fertilizer dealership, biofertilizer distributorship, organic fertilizer dealership opportunity, agri input dealership in West Bengal

---

## 2. Topical authority map

```
                         URVAR (organic & biological agri-inputs — India)
                                          │
        ┌──────────────┬─────────────────┼──────────────┬───────────────┬──────────────┐
   [Manufacturer]  [Organic Manures] [Bio-Stimulants] [Micronutrients] [Soil Health]  [Crop Programs]
     Cluster A        Cluster B         Cluster C        Cluster D       Cluster E       Cluster F
        │                │                 │                │               │               │
   Home + Mfg       /products/        /products/       /products/     farmer-edu      /crop-solutions/*
   /quality         organic-manures   bio-stimulants   micronutrients  pillar          (6 crops)
        │                │                 │                │               │               │
   certificates    product pages     product pages    product pages   blog posts      stage→product
   R&D, leadership  + TDS             + TDS            + diagnosis      (supporting)    + success stories
                                                                                            │
                                                              ┌─────────────────────────────┘
                                                        [Dealership] Cluster G → /dealers/*
```
Authority flows: pillars rank for head terms; supporting pages capture long-tail and pass relevance up via internal links; blog feeds informational clusters and links to commercial pillars.

---

## 3. Pillar & supporting pages

| Pillar page | Owns cluster | Key supporting pages |
|-------------|--------------|----------------------|
| Home + /about/manufacturing-quality | A (manufacturer/brand) | certificates, R&D, leadership, about/our-story |
| /products/organic-manures | B | vermicompost, FYM, 3× PROM detail pages |
| /products/bio-stimulants | C | humic-acid-liquid (+ future) |
| /products/micronutrients | D | zinc-edta-12, boron-edta, deficiency tool |
| /resources/farmer-education (soil-health) | E | blog cluster posts |
| /crop-solutions/[crop] ×6 | F | per-crop success stories, product links |
| /dealers/become-a-distributor | G | dealers hub, locator, dealer FAQ |

---

## 4. Schema markup (JSON-LD)

| Type | Where | Notes |
|------|-------|-------|
| **Organization** | sitewide (root layout) | name, logo, URL, sameAs (socials), contactPoint, address (WB), foundingDate 2023 |
| **LocalBusiness** | contact, dealers | address, geo, areaServed (WB/MH/KA/UP), openingHours, phones |
| **Product** | /products/[slug] | name, image, description, brand, category, **additionalProperty** for nutrient profile, aggregateRating (when reviews exist), offers/availability |
| **BreadcrumbList** | all sub-pages | mirrors visible breadcrumbs |
| **FAQPage** | /faqs, homepage FAQ, category FAQs | every Q&A block |
| **Article / BlogPosting** | /blog/[slug] | headline, author, datePublished, image, about |
| **HowTo** | dose calculator, application guides | step-based dosage instructions |
| **WebSite + SearchAction** | root | sitelinks search box |
| **Review / Testimonial** | success stories | when verifiable |

Implementation: render JSON-LD from CMS data per template; validate with Rich Results Test. (None exists today.)

---

## 5. Internal-linking structure

**Rules:**
1. **Pillar ↔ supporting (bidirectional):** each pillar links down to all supporting pages; each supporting page links up to its pillar.
2. **Cross-cluster bridges:** product ↔ crop (Zinc EDTA ↔ /crop-solutions/wheat where Zn deficiency is common); product ↔ deficiency tool; crop ↔ relevant blog.
3. **Blog → commercial:** every informational post links contextually to ≥1 product/crop pillar (descriptive anchors, not "click here").
4. **Conversion links:** every page links to a relevant funnel (farmer enquiry / Become a Distributor).
5. **Breadcrumbs** provide structural links + schema on all sub-pages.
6. **Footer** carries category + crop links sitewide (distributes authority).

**Anchor text:** descriptive & keyword-aligned ("humic acid liquid for paddy"), varied, never generic.

---

## 6. Blog / content strategy

**Cadence:** 4–6 posts/month once CMS lands; front-load soil-health (Cluster E) + crop programs (Cluster F) for authority + buyer intent. Categories: Soil Health · Crop Guides · Organic Farming · Micronutrients · Schemes & Subsidies · URVAR News.

**Seed calendar (first 90 days, examples):**
- *Soil health pillar:* "How to Restore Soil Health: A Farmer's Guide" (links Cluster B/C/E products).
- "Vermicompost vs Chemical Fertilizer: What's Better for Your Soil?" → organic-manures pillar.
- "Zinc & Boron Deficiency in Crops: Symptoms and Cure" → micronutrients + deficiency tool.
- "Complete Nutrient Schedule for Paddy in West Bengal" → /crop-solutions/rice.
- "Humic Acid: What It Does and How to Apply It" → bio-stimulants.
- "Potato Nutrition Program: Stage-by-Stage" → /crop-solutions/potato.
- "What is PROM and Why It's Replacing DAP for Many Farmers" → organic-manures.
- Regional/seasonal posts tied to WB/MH/KA/UP cropping calendars.

**E-E-A-T:** real author bios (agronomist/director), cite practices/standards, show field data, keep content updated (CMS `lastUpdated`).

---

## 7. Technical SEO checklist (fixes vs. today)
- ✅ keep robots.ts + dynamic sitemap.ts → **extend** sitemap to all routes + locale `alternates`.
- ➕ **URL-based locale (EN/HI/BN)** so non-English content is crawlable (current localStorage approach = BN invisible).
- ➕ **hreflang** + canonical on every page.
- ➕ unique title/meta/OG/Twitter per page from CMS.
- ➕ JSON-LD per section 4.
- ➕ image alt text, optimized formats (AVIF/WebP via next/image), descriptive filenames.
- ➕ Core Web Vitals budgets (LCP <2.5s, INP <200ms, CLS <0.1) on rural network profiles.
- ➕ Google Search Console + Bing Webmaster; submit sitemap; monitor coverage.
- ➕ Google Business Profile for local pack (WB HQ + dealer locations).
