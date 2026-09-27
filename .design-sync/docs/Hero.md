---
category: Site chrome
---
# Hero

The homepage hero: a full-bleed farm photo darkened by a deep-green gradient, taking at least 88vh. It shows a pulsing green eyebrow ("Urvar Natural Pvt. Ltd."), the huge Bebas Neue uppercase tagline (44→88px), a subtitle, two pill CTAs (**View Products** in white, **Become a Dealer** outlined), and a 3-cell stat strip (2023 Founded · 8+ Products · WB West Bengal).

No props. The copy comes from the current language. It's homepage-only. For inner pages, use a compact page header instead:

```jsx
<section className="bg-urvar-dark pt-14 pb-12">
  <Container>
    <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-3">Nutrition Programs</p>
    <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[44px] sm:text-[68px] leading-[1.0] mb-2.5">Crop Solutions</h1>
    <p className="text-white/60 text-base max-w-[540px] leading-relaxed">Stage-by-stage nutrition programs.</p>
  </Container>
</section>
```
