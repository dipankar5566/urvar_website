---
category: Primitives
---
# Container

The site's content width: `max-w-6xl` (1152px), centred, with responsive side gutters (`px-4 sm:px-6 lg:px-8`). Every full-bleed band on the site wraps its content in this.

## Props
- `className`: extra classes (vertical padding, flex/grid).
- `children`: content.

## Usage
```jsx
<div className="bg-soft-cloud py-10">
  <Container className="flex items-center justify-between gap-6">
    <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[36px] leading-none">Our Products</h2>
    <Button href="/products" variant="secondary" size="sm">View all</Button>
  </Container>
</div>
```

Prefer `Section` for standard page bands (it includes a Container and the vertical rhythm). Use `Container` directly for custom bands such as heroes, filter bars and breadcrumbs.
