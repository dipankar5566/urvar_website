# 07 — Conversion Optimization & Funnels (Task 8)

Principle: **two audiences, two primary conversions** — farmer enquiry (volume) and dealer/distributor enquiry (value). Plus supporting micro-conversions that build the owned audience. Today there is one Formspree form → an inbox; this is a complete capture system.

---

## 1. Conversion hierarchy

| Tier | Conversion | Audience | Value |
|------|-----------|----------|-------|
| **Macro 1** | Dealer/distributor enquiry | dealers, retailers, FPOs, distributors | Highest — channel = growth |
| **Macro 2** | Farmer/product enquiry (form / WhatsApp / call) | farmers | High — demand |
| **Micro** | Catalogue/TDS download, calculator use, deficiency check, newsletter, WhatsApp click, chatbot engage, dealer-locator search | both | Builds list + intent signal |

Every page must offer a clear next step for *at least one* tier; key pages offer both.

---

## 2. Lead-capture strategy

- **Right form, right place:** dealer pages → dealer form; product/crop pages → farmer enquiry (pre-filled with product/crop); blog → newsletter + soft CTA.
- **Progressive disclosure:** keep first step to ≤3 fields (Name, Phone, Interest). Qualify in later steps. Phone is the key field for rural India (many lack email).
- **Multiple modalities:** form **and** WhatsApp **and** click-to-call on every conversion point — let users pick their comfort channel.
- **Lead magnets:** catalogue PDF, crop nutrient schedules, dose calculator results, dealer kit — trade value for contact.
- **Instant acknowledgement:** auto WhatsApp/SMS/email confirmation; set response-time expectation ("we'll call within 24h").
- **Qualification field:** every lead tagged audience (Farmer/Dealer/FPO/Other) + location (district/state) for routing.
- **No dead ends:** thank-you states cross-sell (farmer → crop guide; dealer → dealer kit download).

---

## 3. WhatsApp CTA placements
WhatsApp is the dominant rural channel. Current: one floating FAB. Expand to:
- **Floating button sitewide** (exists) — keep, restyle.
- **Pre-filled context** per page: product detail → "I'm interested in Zinc EDTA 12%"; crop page → "I want a nutrient program for paddy"; dealer page → "I want to become a distributor in [district]".
- **Inline WhatsApp buttons** beside every primary CTA (enquiry sections, product cards, contact).
- **Mobile bottom action bar:** WhatsApp + Call + Become a Dealer.
- **Chatbot handoff:** Kisan Saathi offers "talk to us on WhatsApp" when intent is high.
- Track each as a distinct GA4 event with source page.

---

## 4. Sticky header & floating buttons
- **Sticky header:** condenses on scroll (logo + key nav + **Become a Dealer** button + Call icon always visible). The dealer CTA must never scroll away.
- **Floating actions (desktop):** WhatsApp + Call stacked bottom-right; chatbot bottom-right above them (exists).
- **Mobile persistent bottom bar:** Call · WhatsApp · Become a Dealer (thumb-reachable).
- **Scroll-triggered:** after ~50% scroll on product/crop pages, slide-in enquiry prompt (dismissible, once per session).
- **Exit-intent (desktop):** offer catalogue download in exchange for email (use sparingly).

---

## 5. Dealer enquiry funnel (Macro 1)

```
Entry: header "Become a Dealer" · homepage dealer band · footer · dealer ads
   ↓
/dealers/become-a-distributor  (value prop: margins, demand, support, territory)
   ↓
Multi-step form (low friction → qualification):
   Step 1: Name · Phone · District/State            (3 fields — commit)
   Step 2: Business type (Dealer/Retailer/FPO/Distributor) · Current portfolio
   Step 3: Expected volume · Message (optional)
   ↓
Submit → CRM (tagged: Dealer, location) + instant WhatsApp/SMS confirm
   ↓
Thank-you: download Dealer Kit PDF + "our channel team will call within 24h"
   ↓
Offline: sales follow-up (SLA tracked in CRM)
```
Alt paths at every step: WhatsApp ("become a distributor in [district]") + Call.

---

## 6. Farmer enquiry funnel (Macro 2)

```
Entry: product page · crop page · homepage · search · chatbot · calculator result
   ↓
Contextual enquiry (pre-filled product/crop):
   Name · Phone · Crop/Product interest        (≤3 fields)
   — or — WhatsApp (pre-filled)  — or — Call
   ↓
Submit → CRM (tagged: Farmer, crop, product, district) + instant confirm
   ↓
Thank-you: "nearest dealer" (locator) + relevant crop guide + product TDS
   ↓
Nurture: WhatsApp/SMS tips, seasonal reminders (opt-in)
```

---

## 7. Newsletter funnel
- **Placements:** blog (inline + end), footer, homepage contact band, exit-intent.
- **Hook:** "Seasonal crop tips & soil-health advice — in your language." Email or WhatsApp opt-in (offer both; WhatsApp likely higher uptake).
- **Flow:** single field → double opt-in → welcome (top crop guide) → segmented by crop/region → monthly value + occasional offer.

---

## 8. Catalogue / download funnel
- **Placements:** Products overview, category pages, product detail (TDS), nav mega-menu, dealer page (dealer kit).
- **Gating:** light — Name + Phone (+ audience) to unlock catalogue/dealer kit; individual TDS can stay open to reduce friction (SEO + trust), capture via the enquiry instead.
- **Flow:** click → minimal form → instant download + email/WhatsApp copy → CRM lead (tagged interest) → follow-up.

---

## 9. Micro-conversions (intent signals to track & nurture)
Dose-calculator completion · deficiency-diagnosis completion · TDS/catalogue download · chatbot conversation ≥3 turns · WhatsApp click · video play (success story) · dealer-locator search · newsletter signup · 75% scroll on commercial pages · add-to-comparison.
Each → GA4 event; high-intent micro-conversions trigger a soft contact-capture prompt.

---

## 10. Form & UX best practices
- Mobile-first, large tap targets (≥48px), numeric keypad for phone, minimal typing.
- Inline validation with clear errors (design-system Input states); never lose entered data on error.
- Autodetect/select state→district to speed location entry.
- Bengali/Hindi labels per locale; simple language.
- Trust near forms: "We never share your number" + DPIIT/MSME marks.
- Accessibility: labels, focus order, screen-reader friendly, keyboard submit.
- Spam control: honeypot + rate limit (no heavy captcha that blocks rural users).

---

## 11. Measurement (every funnel)
Define and dashboard in GA4 (see [08](./08-technical-architecture.md)):
- Conversion rate per funnel (dealer, farmer, newsletter, download).
- CTA click-through by placement (which WhatsApp/enquiry locations win).
- Drop-off per step in multi-step dealer form.
- Lead quality by source (CRM close rate back-fed).
- Micro→macro assist paths.
Baseline first (current ≈ unknown — no analytics today), then iterate with A/B tests on hero CTA, dealer-band copy, and form length.
