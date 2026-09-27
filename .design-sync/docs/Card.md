---
category: Primitives
---
# Card

Flat editorial surface: white background, 1px `hairline` border, square corners, no default padding. Add padding yourself with `className`.

## Props
- `interactive`: adds a hover lift (`-translate-y-1`) plus `shadow-e2`. Use it when the whole card is clickable.
- `className`: padding and layout (e.g. `p-6`, `flex flex-col gap-3`).
- `children`: content.

## Usage
```jsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
  <Card className="p-6">
    <p className="text-[11px] font-bold text-stone tracking-[1.5px] uppercase mb-2">Scientifically Formulated</p>
    <p className="text-mute text-[15px] leading-relaxed">Lab-developed nutrient profiles, batch-tested and transparently labelled.</p>
  </Card>
  <Card interactive className="p-6">…</Card>
</div>
```

Keep corners square. Rounded corners are reserved for pills (`Button`, `Badge`) and media (`VideoEmbed`).
