# 03 — Design System & Component Library (Tasks 2, 10.5, 10.6)

Direction: **premium, clean, minimal, scientific, nature-inspired.** The reference blend is *Apple/Stripe restraint* × *Bayer/Syngenta credibility* × *Indian organic warmth*. The current site already has a usable green base in [app/globals.css](../../app/globals.css); this extends it into a real system rather than replacing what works.

---

## 1. Brand foundation

**Personality:** Trustworthy · Scientific · Rooted · Progressive.
**Voice:** Precise, plain, respectful. Speak to a farmer's outcome (yield, soil, cost) and a dealer's outcome (margin, demand, support). Avoid hype; let data and proof carry weight.
**Visual idea:** "Science that grows from the soil." Pair clinical precision (data tables, clean grids, lab/field photography) with organic texture (earth tones, leaf forms, natural light).

---

## 2. Color system

The brief asks for deep green / earth brown / leaf green / white. Existing tokens cover the greens; **earth-brown and supporting tiers are new.** Hex values are recommendations — tune to final brand assets.

### Core palette
| Token | Hex | Role | Status |
|-------|-----|------|--------|
| `--color-urvar-dark` | `#104C36` | Primary / deep green — headers, hero, footer, headings | ✅ exists |
| `--color-urvar-green` | `#009253` | Brand green — primary buttons, links, key accents | ✅ exists |
| `--color-urvar-leaf` | `#3FA535` | Accent leaf-green — highlights, success, growth motifs | ➕ new |
| `--color-urvar-light` | `#E8F5EE` | Pale mint — section tints, card backgrounds | ✅ exists |
| `--color-urvar-earth` | `#7A5230` | Secondary earth-brown — soil/organic motifs, alt sections | ➕ new |
| `--color-urvar-earth-light`| `#EFE6DA` | Warm sand — alternating section bg, manure/organic content | ➕ new |
| `--color-bg` | `#FFFFFF` | Background | ✅ exists |
| `--color-foreground` | `#171717` | Body text | ✅ exists |

### Neutrals (greige, warmer than pure gray — feels organic)
`--neutral-50 #FAFAF8` · `100 #F3F2EE` · `200 #E5E3DC` · `300 #CBC8BE` · `400 #9C988B` · `500 #6E6A5E` · `600 #514E45` · `700 #3A382F` · `800 #26241E` · `900 #171510`.

### Semantic / state
| Token | Hex | Use |
|-------|-----|-----|
| `--success` | `#2E8B57` | confirmations |
| `--warning` | `#C8862A` | cautions, dosage warnings |
| `--error` | `#C0392B` | form errors |
| `--info` | `#2B6CB0` | tips, notes |

### Category color coding (replaces ad-hoc amber/blue/purple)
| Category | Accent |
|----------|--------|
| Organic Manures | `--color-urvar-earth` (brown — soil) |
| Bio-Stimulants | `--color-urvar-green` |
| Micronutrients | `--color-urvar-leaf` |
| Biofertilizers (future) | `--color-urvar-dark` |

### Usage rules
- **60 / 30 / 10:** ~60% white/neutral, ~30% green family, ~10% earth + accent. Keep it airy — premium = restraint.
- Earth-brown is a *seasoning*, not a base; use for organic/manure contexts and alternating section bands.
- Body text on white = `--neutral-800`+ (WCAG AA). White text only on `--color-urvar-dark`/`green`/`earth` (verified ≥4.5:1).
- Buttons: primary = `urvar-green`; secondary = outline `urvar-dark`; on dark sections = white/leaf.

---

## 3. Typography

**Problem today:** one font (Raleway), no scale.

**Recommendation — two-typeface system:**
- **Display / headings:** a humanist or editorial sans with character — e.g. **Sora**, **Clash Display**, or **Plus Jakarta Sans**. Conveys modern-premium.
- **Body / UI:** **Inter** (excellent legibility, great at small sizes, full Latin) — keep **Raleway** as an acceptable fallback if changing fonts is undesirable early.
- **Indic:** **Noto Sans Bengali** and **Noto Sans Devanagari** (Hindi) for correct, legible rendering. Critical — do not render Indic in a Latin-only stack.
- Load via `next/font` (already used) with `display: swap` and subsetting.

**Type scale (1.250 major-third, fluid via `clamp`):**
| Token | Size (desktop) | Use |
|-------|----------------|-----|
| `display` | 56–72px | hero headline |
| `h1` | 40–48px | page title |
| `h2` | 30–36px | section title |
| `h3` | 22–26px | sub-section / card title |
| `h4` | 18–20px | label / table header |
| `body-lg` | 18px | intro paragraphs |
| `body` | 16px | default |
| `small` | 14px | captions, meta |
| `caption` | 12px | legal, badges |

Rules: headings `urvar-dark`, weight 600–700, tight leading (1.1–1.25); body `neutral-800`, 1.6 leading, measure 60–75ch; numbers/tables tabular figures.

---

## 4. Spacing, radius, elevation, motion (tokens)

- **Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section vertical padding `96px` desktop / `56px` mobile.
- **Radius:** `sm 6px · md 10px · lg 16px · xl 24px · full 9999px`. Cards `lg`, buttons `md`/`full`, images `lg`.
- **Elevation (soft, natural — avoid harsh shadows):**
  - `e1` cards: `0 1px 2px rgba(23,21,16,.04), 0 2px 8px rgba(23,21,16,.06)`
  - `e2` hover/raised: `0 8px 24px rgba(16,76,54,.10)`
  - `e3` overlays/modals: `0 16px 48px rgba(16,76,54,.16)`
- **Borders:** hairline `1px solid --neutral-200`.
- **Motion:** durations `fast 150ms · base 250ms · slow 400ms`; easing `cubic-bezier(.22,1,.36,1)` (gentle). Scroll-reveal fade+rise (≤16px), respect `prefers-reduced-motion`. Subtle only — premium, not flashy.
- **Layout grid:** 12-col, max content width `1200–1280px`, gutters 24px desktop / 16px mobile.
- **Imagery art direction:** real fields/farmers/products in natural light, consistent warm grade; lab/QC shots for trust; custom line-icon set (replace emojis); optional subtle leaf/soil texture as section dividers.

---

## 5. Component library spec (Tailwind v4, custom primitives)

Decision: **custom primitives on the existing Tailwind v4 setup** (not shadcn — Tailwind v4 + Next 16 + React 19 compatibility is not yet smooth). Tokens above live as CSS variables in `@theme` (extending the current `globals.css`). Each component below is a future React component with typed props; this is the spec, not code.

### Primitives (foundation — build first)
| Component | Variants / props | Notes |
|-----------|------------------|-------|
| **Button** | `variant`: primary · secondary(outline) · ghost · onDark; `size`: sm·md·lg; `icon`, `loading`, `as` (link) | Replaces duplicated button strings across Hero/Contact/ProductCard/ChatWidget. Min tap 44px |
| **Card** | `elevation`, `interactive`(hover lift), `media` slot | Base for product/crop/blog/stat cards |
| **Badge / Chip** | `tone`: category colors + semantic; `size` | Replaces ad-hoc colored badges |
| **Input / Textarea / Select** | label, helper, error, required, RHF-ready | With validation states (fixes form gaps) |
| **Section** | `bg`: white·mint·earth-light·dark; `pad`; container width | Enforces consistent rhythm & 60/30/10 |
| **Container** | maxW, gutters | Layout wrapper |
| **Table** | `header` style green/dark; striped; responsive→stacked on mobile | Reuse for nutrient/dosage tables (already a strength) |

### Composite components
| Component | Use |
|-----------|-----|
| **ProductCard** | Upgrade existing — category badge, image, "best for crop" tag, TDS/enquire actions |
| **CropCard** | Crop hub + homepage crop solutions (interactive) |
| **StatBlock / Metric** | Trust numbers (yield ↑, farmers served, districts) |
| **TrustBar** | Upgrade existing TrustBadges — DPIIT, GST, Made in India, QA, Organic |
| **Accordion** | FAQs (+ FAQ schema), product specs, dosage details |
| **Tabs** | Product detail (Overview/Composition/Dosage/Downloads), crop stages |
| **Testimonial / StoryCard** | Success stories, dealer/farmer quotes |
| **CTASection / LeadBanner** | Reusable farmer + dealer conversion bands |
| **Breadcrumbs** | Sitewide + schema |
| **MegaMenu + MobileDrawer** | New nav (Products/Crops) |
| **Stepper / MultiStepForm** | Dealer & farmer enquiry funnels |
| **DealerLocatorMap** | Google Maps locator |
| **CalculatorWidget** | Dose calculator / deficiency diagnosis |
| **Footer** | Expand existing to 4-col IA |
| **ChatWidget** | Keep existing Kisan Saathi; restyle to system |
| **FloatingActions** | WhatsApp (exists) + Call + Enquire stack |

### Component states checklist (every interactive component)
default · hover · focus-visible (keyboard) · active · disabled · loading · error · empty. Accessibility: semantic HTML, ARIA where needed, focus traps in modals/drawers, AA contrast, full keyboard nav, alt text, `prefers-reduced-motion`.

---

## 6. Design tokens summary (for `@theme` extension)

```
colors: urvar-dark, urvar-green, urvar-leaf, urvar-light, urvar-earth,
        urvar-earth-light, neutral-50..900, success, warning, error, info
font:   --font-display, --font-body, --font-bn, --font-hi
text:   display, h1..h4, body-lg, body, small, caption (fluid clamp)
space:  4..128 (4px base)
radius: sm, md, lg, xl, full
shadow: e1, e2, e3
motion: dur-fast/base/slow, ease-out-soft
```

This is the single source of truth; every page in [04-page-blueprints.md](./04-page-blueprints.md) is composed from these tokens and components.
