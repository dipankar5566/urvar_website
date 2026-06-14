# 05 — Advanced Features (Task 6)

Each feature: what it is, why it matters for URVAR, what already exists to reuse, complexity, and priority tier (from [00-index.md](./00-index.md)). Several requested features already have foundations in the current codebase — reuse, don't rebuild.

**Complexity:** S ≤2 days · M ~1 week · L 2–4 weeks · XL multi-month.

---

## Already exists — reuse & extend
| Feature | Current state | Action |
|---------|---------------|--------|
| **AI chatbot** | "Kisan Saathi" live on Claude Haiku — [app/api/chat/route.ts](../../app/api/chat/route.ts), [components/ChatWidget.tsx](../../components/ChatWidget.tsx), EN/BN, crop+product aware | Keep. Add rate-limiting (cost/abuse), lead-capture handoff ("share your number"), product/crop deep-links, restyle to design system. Extend to Hindi. |
| **WhatsApp integration** | Floating FAB → wa.me/91… ([components/WhatsAppButton.tsx](../../components/WhatsAppButton.tsx)) | Keep. Add **pre-filled context** (product/crop/page) and placements per [07-cro-funnels.md](./07-cro-funnels.md). |
| **Lead forms** | One Formspree contact form ([components/ContactForm.tsx](../../components/ContactForm.tsx)) | Generalize into reusable funnel forms (dealer/farmer), add validation + CRM routing. |
| **Language switcher** | EN/BN client-side ([context/LangContext.tsx](../../context/LangContext.tsx)) | Upgrade to **EN/HI/BN**, move to URL-based locale (SEO) — see [08](./08-technical-architecture.md). |
| **PDF catalogue downloads** | none, but product data is structured | Generate catalogue + per-product TDS from CMS; gate via download funnel. |

---

## New features — prioritized

### 🟥 Must / high-priority
| Feature | What & why | Reuse | Complexity |
|---------|-----------|-------|-----------|
| **Lead forms (segmented)** | Distinct dealer & farmer enquiry forms with qualification + validation + CRM routing. Core to every funnel. | ContactForm pattern | M |
| **PDF catalogue / TDS downloads** | B2B + dealer enablement; lead magnet. Auto-generated from product CMS data. | products.ts → Sanity | M |
| **Google Maps dealer locator** | Find-nearest-dealer; routes farmers + proves traction. | — | M |
| **WhatsApp (context-aware)** | Pre-filled message with product/crop/page; the #1 rural conversion channel. | WhatsAppButton | S |

### 🟨 Should / strong ROI
| Feature | What & why | Reuse | Complexity |
|---------|-----------|-------|-----------|
| **Dose calculator** | Farmer inputs crop + area (katha/bigha/acre) → recommended product + dose + pack count. High-value micro-conversion & lead magnet; reinforces "scientific". | dosage data in products.ts | M |
| **Nutrient-deficiency diagnosis** | Guided "what's wrong with my crop?" (symptom/photo → likely deficiency → recommended micronutrient e.g. Zinc EDTA / Boron EDTA). Differentiator. | Kisan Saathi + products | M–L |
| **Hindi locale** | Unlocks Maharashtra/UP. | i18n system | M |
| **Product search** | Instant search across products/crops/content (worth it after content grows). | — | S–M |
| **Crop-wise recommendation** (basic) | On each crop page, stage→product mapping (rules-based first). | CropStageSection | M |

### 🟩 Nice / differentiation, later
| Feature | What & why | Complexity |
|---------|-----------|-----------|
| **Dealer portal** | Auth area: order history, schemes, price lists, downloadable marketing collateral, territory info, support tickets. Channel loyalty. Needs auth + DB + roles. | XL |
| **Crop recommendation engine** (advanced) | Personalized program from soil type/region/crop/stage inputs; could leverage Claude. | L |
| **Product comparison** | Side-by-side specs/nutrients/dosage across products. | M |
| **Voice search (BN/HI)** | Accessibility for low-literacy farmers; speech-to-text query into search/chatbot. | M |

---

## Feature notes & dependencies

- **Calculators & diagnosis** depend on clean, structured product/dosage data → another reason to land **Sanity CMS** early.
- **Dealer portal** is the only feature requiring authentication and a database; treat as a separate product phase, not part of the marketing-site rebuild.
- **AI features** (chatbot, diagnosis, recommendation) should all use the latest appropriate Claude model and **must** add rate-limiting + input validation on public endpoints (the current `/api/chat` has none). Keep `ANTHROPIC_API_KEY` server-only (it already is).
- **Voice/search/recommendation** deliver value only after content & catalogue depth exist — hence later tiers.
- Every interactive feature is also a **lead capture surface** — wire each to analytics events and (where natural) a soft contact-capture step. See [07-cro-funnels.md](./07-cro-funnels.md).
