# 09 — 12-Month Roadmap (Task 11)

Sequenced to ship commercial value fast (dealer + homepage), then build the SEO/authority surface, then advanced features. Tied to the [master priority table](./00-index.md). Phases are sequential but overlap where teams allow.

**Assumed team:** 1–2 Next.js devs, 1 designer (part-time after system is built), 1 content/SEO writer, founder for content/approvals. Timeline scales with capacity.

---

## Phase 0 — Foundation (Weeks 1–4)
*Goal: the system everything else is built on.*
- Read `node_modules/next/dist/docs/` (this Next has breaking changes — non-negotiable before building).
- Implement design tokens in Tailwind v4 `@theme` (colors incl. earth-brown, type scale, spacing, shadows, motion) — [03](./03-design-system.md).
- Build UI primitives: Button, Card, Badge, Input/Textarea/Select, Section, Container, Table, Accordion, Tabs.
- New nav (sticky header + Become a Dealer CTA + mega-menus) + expanded Footer + mobile bottom action bar.
- Stand up **Sanity** project + core schemas (product, category, crop, siteSettings); migrate the 8 products from `data/products.ts`.
- Add **GA4 + Search Console** + base event tracking.
- Set up Vercel + Cloudflare; secrets audit (rotate ANTHROPIC_API_KEY if needed); security headers.
**Exit:** design system live, content editable in Sanity, analytics flowing.

## Phase 1 — Convert (Weeks 4–8) 🟥 Must
*Goal: stop losing dealers and farmers.*
- **Become a Distributor page + dealer enquiry funnel** (multi-step, CRM-routed) — top priority.
- **Conversion-engineered homepage** (all 12 sections) — [04](./04-page-blueprints.md).
- **Enhanced product detail** (tabs, TDS, crop links, pre-filled enquiry/WhatsApp) + product category pillars.
- Floating WhatsApp (context-aware) + Call; segmented Contact page.
- **CRM integration** + instant lead acknowledgement (WhatsApp/SMS).
**Exit:** both macro funnels live and measured; homepage reflects a ₹100-cr brand.

## Phase 2 — Authority & Trust (Weeks 8–16) 🟥/🟨
*Goal: rank and earn trust.*
- **Crop Solutions hub + 6 crop pages** (stage→product) — buyer intent + SEO.
- **Trust layer:** Manufacturing & Quality, R&D, Leadership, expanded About, **Certificates**.
- **SEO foundation:** URL-based locale (EN/BN crawlable), JSON-LD schema sitewide, hreflang/canonical, extended sitemap, OG/meta from CMS.
- **Blog + Farmer Education** launch; first ~12–18 posts (soil-health pillar + crop programs) — [06](./06-seo-architecture.md).
- **Downloads center** (catalogue, TDS, dealer kit) + download funnel.
- **FAQs** (with schema).
**Exit:** ~25-page IA complete, content engine running, structured data validated.

## Phase 3 — Engage & Capture (Weeks 16–28) 🟨 Should
*Goal: deeper engagement, more leads, wider reach.*
- **Dose calculator** + **nutrient-deficiency diagnosis** (lead magnets) — [05](./05-features.md).
- **Hindi locale** (MH/UP expansion).
- **Success Stories** system (field proof).
- **Dealer locator** (Google Maps).
- **Newsletter** funnel (email + WhatsApp opt-in) + nurture flows.
- Harden + extend Kisan Saathi (rate-limit, lead handoff, Sanity grounding, Hindi).
- CWV/Lighthouse CI gate; performance pass on images.
**Exit:** interactive lead magnets live, tri-lingual, channel discoverable.

## Phase 4 — Optimize & Differentiate (Weeks 28–44) 🟨/🟩
*Goal: compound gains, start differentiation.*
- **CRO testing program:** A/B hero CTA, dealer-band copy, form length; iterate on funnel drop-off data.
- **Product search** + **product comparison**.
- **Crop recommendation** (rules-based → consider Claude-assisted).
- Content velocity sustained (4–6 posts/month); refresh/expand pillars.
- Google Business Profile(s) + local SEO for dealer locations.
**Exit:** measurable conversion lift; richer decision tools.

## Phase 5 — Scale & Channel (Weeks 44–52+) 🟩 Nice
*Goal: platform, not just site.*
- **Dealer portal** (auth, orders, schemes, collateral, territory) — separate product track (XL).
- **Voice search** (BN/HI) for low-literacy access.
- **Export-markets / B2B-buyers** landing pages (future revenue line).
- Advanced personalization / recommendation engine.
**Exit:** URVAR operates a channel platform + lead engine, positioned as a category authority.

---

## Sequencing rationale
1. **Dealer + homepage first** — highest commercial value, currently the worst-scoring areas (1/10 and the front door).
2. **CMS + design system before content** — without them, every page is a slow code deploy and SEO velocity is impossible.
3. **SEO/authority mid-game** — needs the IA and CMS in place; content compounds over months, so start by week 8.
4. **Advanced features later** — calculators/locator/portal deliver value only on top of solid content + data.

## KPI checkpoints
| By end of | Target signals |
|-----------|----------------|
| Phase 1 | Dealer + farmer enquiries tracked; first dealer leads in CRM; homepage bounce ↓ |
| Phase 2 | All target-keyword pages indexed; impressions rising in Search Console; certificates/trust pages live |
| Phase 3 | Calculator/diagnosis usage; newsletter list growth; HI traffic appearing; locator searches |
| Phase 4 | Measurable CR lift from A/B tests; keyword rankings climbing into page 1 for long-tail |
| Phase 5 | Dealer portal adoption; export/B2B enquiries; brand-search volume up |

## Risks & dependencies
- **Content readiness** (real success stories, certificates, leadership bios, photography) is the most common blocker — start gathering in Phase 0. Never fabricate field results.
- **Next.js breaking changes** — budget time to read the bundled docs; don't assume training-data APIs.
- **AI cost/abuse** — must add rate-limiting before scaling chatbot/diagnosis traffic.
- **Translation quality** (BN/HI) — use native reviewers, not raw machine output.
- **Capacity** — timeline assumes ~1–2 devs; compress/expand accordingly.
