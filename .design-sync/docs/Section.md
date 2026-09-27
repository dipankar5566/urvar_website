---
category: Primitives
---
# Section

A full-width page band with the site's vertical rhythm (`py-14 sm:py-20 lg:py-24`). It wraps its children in `Container`. Build pages as a stack of Sections.

## Props
- `bg`: `"white"` (default) · `"mint"` (`urvar-light`) · `"earth"` (warm sand `urvar-earth-light`; used for conversion/CTA bands) · `"dark"` (`urvar-dark` with white text; use `Button variant="onDark"` inside).
- `id`: anchor id.
- `className`: classes on the `<section>`.
- `containerClassName`: classes on the inner Container (e.g. `text-center max-w-3xl`).

## Usage
```jsx
<Section bg="earth" containerClassName="text-center max-w-lg">
  <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[28px] sm:text-[36px] leading-[1.1] mb-3">
    Need help building a program for your field?
  </h2>
  <p className="text-neutral-600 text-[15px] leading-relaxed mb-7">Talk to our team for crop-specific advice, dosage and pricing.</p>
  <div className="flex justify-center gap-3 flex-wrap">
    <Button href="/contact">Contact Us</Button>
    <Button href="https://wa.me/919035708943" variant="secondary">Chat on WhatsApp</Button>
  </div>
</Section>
```

Alternate backgrounds between adjacent Sections (white → mint/earth → white). Don't stack two `dark` Sections.
