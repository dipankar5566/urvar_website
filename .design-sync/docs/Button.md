---
category: Primitives
---
# Button

Pill-shaped action. Renders an `<a>` when `href` is set, otherwise a `<button>`. This is the only button style on the site; don't hand-roll pills.

## Props
- `variant`: `"primary"` (default, solid brand green `urvar-green`, darkens to `urvar-dark` on hover) · `"secondary"` (outlined `urvar-dark`, fills on hover; use beside a primary) · `"ghost"` (text-only green, mint hover; tertiary actions) · `"onDark"` (white fill with dark-green text; use on `urvar-dark` / photo backgrounds).
- `size`: `"sm"` (40px min height) · `"md"` (default, 44px) · `"lg"` (52px, hero CTAs).
- `href`: makes it a link. Pass `target="_blank" rel="noopener noreferrer"` for external links such as WhatsApp.
- `className`: extra Tailwind classes (e.g. `w-full`).
- Any native `<button>` attribute (`type`, `onClick`, `disabled`) when there is no `href`.

## Usage
```jsx
<div className="flex gap-3 flex-wrap">
  <Button href="/contact">Contact Us</Button>
  <Button href="https://wa.me/919035708943" variant="secondary" target="_blank" rel="noopener noreferrer">
    Chat on WhatsApp
  </Button>
</div>

<Section bg="dark">
  <Button href="/dealers/become-a-distributor" variant="onDark" size="lg">Become a Distributor</Button>
</Section>
```

Pair one `primary` with at most one `secondary` per group. The site's standard conversion pair is **Contact Us** (primary) + **Chat on WhatsApp** (secondary).
