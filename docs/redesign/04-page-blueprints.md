# 04 — Page-by-Page Blueprints (Task 4) + Homepage Design (Task 5)

Each page: **Purpose · Sections · Content hierarchy · Layout · UX · CTA placement · Desktop/Mobile.** Built from the [design system](./03-design-system.md) and wired to the [funnels](./07-cro-funnels.md). The homepage gets the full ₹100-cr treatment first.

Legend for mini-wireframes: `[ ]` = block, `▸` = CTA, `≡` = list/grid.

---

# ⭐ HOMEPAGE (Task 5)

**Purpose:** In 5 seconds establish credibility; in 15 route the visitor (farmer ↔ dealer); throughout, prove trust and drive to enquiry. The homepage must work for a farmer on a ₹6k Android *and* a distributor evaluating a partnership.

**Section order & spec:**

### 1. Hero
```
[ Deep-green → field image, subtle dark gradient L→R                 ]
[ Eyebrow: DPIIT-Recognized • Made in India                          ]
[ H1 (display): "Healthier Soil. Higher Yields. Naturally."          ]
[ Sub: "Scientifically formulated organic & biological inputs —      ]
[      trusted by farmers across West Bengal and beyond."            ]
[ ▸ Explore Products   ▸ Become a Dealer (secondary, outline)        ]
[ ⌄ glass stat card: 8 products • 4 states • DPIIT startup           ]
```
- **Headline options:** "Healthier Soil. Higher Yields. Naturally." / "The Science of Soil Health." / "Grow More. Restore the Soil."
- **Sub-headline:** outcome + credibility + geography.
- **Primary CTA:** Explore Products (farmer). **Secondary CTA:** Become a Dealer (channel) — *both visible above the fold; this dual-CTA is the core fix.*
- **Background imagery:** real WB fields (paddy/vegetables) at golden hour; or split hero — healthy crop vs. product range; avoid generic stock. Keep text legible (gradient scrim).
- **Mobile:** headline → sub → stacked full-width CTAs → stat chips in a row; image as top 40vh.

### 2. Trust bar (Task 5.2)
Slim band directly under hero. Five signals with custom icons (not emojis): **DPIIT Startup · GST Registered · Made in India · Quality Assured · 100% Organic Solutions.** Greyscale-to-color on scroll. Mobile: horizontal scroll or 2×3 grid. Upgrades existing `TrustBadges`.

### 3. Product categories (Task 5.3)
```
H2: "Solutions for every stage of growth"
≡ 4 cards: Organic Manures | Bio-Stimulants | Micronutrients | Biofertilizers (coming soon)
   each: category icon, 1-line desc, 2–3 product names, ▸ Explore →
```
Cards link to category pillars. Color-coded per design system. Hover lift. Mobile: 1-col, swipeable.

### 4. Why Choose URVAR (Task 5.4)
4-up value grid with icons + short proof:
- **Scientifically formulated** (lab-backed, defined nutrient profiles)
- **Restores soil health** (organic + biological, long-term fertility)
- **Quality controlled** (tested batches, TDS available)
- **Field-tested** (proven across crops & districts)
Each links to the relevant proof page (Manufacturing & Quality, R&D, Success Stories). Earth-light background band.

### 5. Crop Solutions (Task 5.5) — interactive
```
H2: "Find the right inputs for your crop"
≡ interactive crop cards: Rice • Wheat • Vegetables • Potato • Mustard • Fruit
   hover/tap → shows top recommended products for that crop
   ▸ View full crop program →
```
This is the farmer's fastest path to relevance. Cards → `/crop-solutions/[crop]`. Mobile: horizontal carousel.

### 6. Manufacturing Excellence (Task 5.6)
Horizontal process strip with illustrations/photos: **Sourcing → Composting/Formulation → Quality Testing → Packaging → Dispatch.** Builds B2B/FPO trust. ▸ Tour our process → `/about/manufacturing-quality`. Dark or earth band for contrast.

### 7. Research & Development (Task 5.7)
Split section: lab/field imagery + copy on formulation science, trials, and the future pipeline (Seaweed, Fulvic, Amino, Trichoderma, PSB, Azotobacter, Mycorrhiza…). Signals innovation to serious buyers. ▸ Our R&D → `/about/research-innovation`.

### 8. Farmer Success Stories (Task 5.8)
2–3 story cards: farmer photo, crop, district, result ("paddy yield +18% in Bardhaman"), short quote. Social proof beside conversion. ▸ Read success stories →. Mobile: carousel. (If real stories aren't ready, launch with dealer/agronomist quotes — never fabricate results.)

### 9. Dealer Opportunity (Task 5.9) — the channel magnet
```
[ Earth/dark band                                                   ]
H2: "Partner with a fast-growing organic agri brand"
≡ 3 benefits: Attractive margins • Marketing & field support • Growing demand
[ ▸ Become a Distributor ]   [ ▸ Download dealer kit ]
```
The most commercially important block on the page. Links to `/dealers/become-a-distributor`.

### 10. Blog / Insights (Task 5.10)
3 latest posts (image, category, title, read time). Feeds SEO + authority. ▸ Visit the blog →. Hidden until ≥3 posts exist.

### 11. FAQ (Task 5.11)
Accordion, 5–6 top questions (organic vs chemical, dosage basics, dealer terms, delivery areas). FAQ schema. ▸ All FAQs →.

### 12. Contact CTA (Task 5.12)
Final dual-path band: **Farmers** → enquiry/WhatsApp/Call; **Dealers** → Become a Distributor. Newsletter capture inline. Then footer.

**Homepage UX notes:** segmentation (farmer/dealer) appears 3×: hero, dealer band, final CTA. Floating WhatsApp+Call persist. Scroll-reveal subtle. Total weight budget: hero image optimized, lazy-load below fold, LCP < 2.5s on 3G-ish.

---

# Standard pages

## /about (hub) + sub-pages
**Purpose:** convert the trust-led visitor; satisfy B2B/FPO/government due diligence.
- **Hub:** company snapshot, mission/vision, founder note, stat band, links to 5 sub-pages, certificates teaser.
- **/about/our-story:** founding (2023), problem (soil degradation), journey, milestones timeline.
- **/about/vision-mission:** the stated vision ("India's most trusted organic & biological agri brand") + mission, values grid.
- **/about/leadership:** director/team photos + bios (currently only a director bio exists — expand). Critical for B2B credibility.
- **/about/manufacturing-quality:** facility, process, QC, batch testing, capacity — the proof page.
- **/about/research-innovation:** formulation science, trials, product pipeline.
- **CTA:** trust pages push to Products/Crop Solutions (farmer) and Become a Distributor (B2B). **Mobile:** timelines → vertical; team → 1-col.

## /products (overview) + category pillars
- **Overview:** intro, 4 category cards, full filterable grid (keep existing filter), "shop by crop" shortcut, catalogue download.
- **Category pillar (e.g. /products/organic-manures):** SEO-rich intro (targets "vermicompost manufacturer" etc.), products in category, when-to-use guidance, crop links, FAQ, dealer + enquiry CTAs.
- **Hierarchy:** value prop → products → guidance → proof → CTA. **Mobile:** sticky filter bar; 1-col grid.

## /products/[slug] (product detail) — enhance existing
Keep the strong benefits/nutrient/dosage tables. Add: **Tabs** (Overview · Composition · Dosage by crop · Downloads/TDS), packaging/SKU info, "best for these crops" links, related products, sticky enquiry/WhatsApp (pre-filled with product name), Product + Breadcrumb schema.
**CTA:** primary Enquire (pre-filled), secondary WhatsApp, tertiary Download TDS. **Mobile:** sticky bottom enquiry bar; tables → stacked.

## /crop-solutions (hub) + 6 crop pages
**Purpose:** buyer-intent SEO + farmer relevance + cross-sell. *(High Must-have.)*
- **Hub:** 6 crop cards, "select your crop" intro.
- **Crop page (e.g. /crop-solutions/rice):** crop intro → **growth-stage timeline** (nursery → tillering → panicle → grain → harvest) mapped to recommended URVAR products at each stage → dosage summary → common deficiencies → success story for that crop → FAQ → enquiry CTA.
- Reuses/extends the existing `CropStageSection`. **Hierarchy:** crop → stages → products → proof → CTA. **Mobile:** stage timeline vertical, product chips per stage.

## /dealers/become-a-distributor — ⭐ highest-value page
**Purpose:** acquire channel partners. *(Top Must-have.)*
- **Sections:** hero ("Grow your business with URVAR") → why partner (margins, demand, support, exclusivity by territory) → who we're looking for (dealers, retailers, FPOs, distributors) → support provided (marketing material, field training, schemes) → simple process (Apply → Verify → Onboard → Sell) → **multi-step dealer enquiry form** (business name, type, territory/district, current portfolio, contact) → existing-dealer testimonials → FAQ.
- **CTA:** the form is the page; also WhatsApp + Call + downloadable dealer kit (PDF). **Mobile:** multi-step form one field-group per screen; persistent submit.

## /dealers (hub) + /dealers/locator
- **Hub:** network overview, map of presence (WB/MH/KA/UP), CTAs to become-a-distributor and locator.
- **Locator:** Google Maps + searchable dealer list by district/pincode → routes farmers to nearest dealer (and proves traction). *(Should-have.)*

## /resources/* (Farmer Education, Blog, Success Stories, Downloads, Calculators)
- **/blog + /blog/[slug]:** SEO engine; categories (Soil Health, Crop Guides, Organic Farming, Schemes). Article schema, related products in-body, author, share, newsletter inline.
- **/resources/farmer-education:** evergreen guides hub (organized by crop/topic) — pillar content.
- **/resources/success-stories (+ [slug]):** filterable by crop/region; result metrics; photo/video; CTA to relevant product.
- **/resources/downloads:** catalogue, product TDS, dealer kit — gated (lead capture) or open per item; see funnels.
- **/resources/calculators:** dose calculator + nutrient-deficiency diagnosis (see [05-features.md](./05-features.md)) — high-value lead magnets.

## /faqs
Accordion grouped (Products, Usage/Dosage, Orders/Delivery, Dealership, Organic certification). FAQ schema sitewide. Search within. CTA to contact/WhatsApp.

## /certificates
Gallery of DPIIT, MSME/Udyam, GST, any licenses + lab reports (lightbox, downloadable). Direct trust asset for B2B/govt. CTA to Become a Distributor.

## /contact — enhance existing
- Keep form (Formspree → migrate to CRM later). Add **segmented routing**: "I am a… Farmer / Dealer / FPO / Other" → tailors fields and destination.
- Address card + map, both phone numbers (click-to-call), WhatsApp, hours, GST/CIN.
- **Mobile:** click-to-call and WhatsApp above the form.

## System pages
- **/search** (Should/Nice): instant product/crop/content search.
- **404 / error:** keep existing, restyle to system, add helpful links + search + WhatsApp.
- **/privacy-policy, /terms:** required for forms/CRM/analytics compliance.

---

## Cross-page conventions
- **Breadcrumbs** on all sub-pages (+ schema).
- **Two CTAs always reachable:** farmer (Enquire/WhatsApp) + dealer (Become a Distributor) — in header, relevant in-page bands, and footer.
- **Sticky header** condenses on scroll; **floating WhatsApp + Call** sitewide; mobile **bottom action bar**.
- Every content page ends with a contextual `CTASection`.
- Consistent section rhythm (white → mint → earth-light → dark) for visual cadence.
