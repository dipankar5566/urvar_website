---
category: Primitives
---
# Badge

Small rounded-full label (12px semibold) for categories, statuses and short tags.

## Props
- `tone`: `"green"` (default, mint bg + dark-green text) · `"dark"` (solid `urvar-dark`, white text) · `"earth"` (sand bg + brown text; soil/organic topics) · `"leaf"` (translucent leaf-green) · `"neutral"` (greige) · `"ink"` (light grey with hairline border; the editorial default for product-category chips).
- `children`: the label. Keep it to 1–3 words.
- `className`: extra classes.

## Usage
```jsx
<div className="flex flex-wrap gap-2">
  <Badge>Organic</Badge>
  <Badge tone="earth">Organic Manures</Badge>
  <Badge tone="dark">Kharif</Badge>
  <Badge tone="ink">Micronutrients</Badge>
</div>
```

Badges are labels, not buttons. For clickable filters, use a `Button` with `variant="ghost"` or a styled link.
