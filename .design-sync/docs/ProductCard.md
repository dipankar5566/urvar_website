---
category: Content
---
# ProductCard

Grid card for one Urvar product. It shows a square product image on `soft-cloud` with a white category pill at the top-left and a subtle zoom on hover, then the bold name, a 2-line tagline, and a green "Learn More" CTA. The whole card links to `/products/<slug>`.

## Props
- `product`: a product object. Use the real catalogue `UrvarDS.products` (8 items: vermicompost, cow-dung-manure, prom, prom-humic-flowering, prom-humic-enriched, humic-acid-liquid, zinc-edta, boron-edta). Never invent products.
- `ctaVariant`: `"link"` (default; "Learn More →" text) · `"pill"` (outlined green pill).

## Usage
```jsx
const { products } = window.UrvarDS;

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
  {products.slice(0, 4).map((p) => <ProductCard key={p.slug} product={p} />)}
</div>
```

Lay them out in a 2 / 3 / 4-column responsive grid with `gap-5`. Requires `LangProvider`.
