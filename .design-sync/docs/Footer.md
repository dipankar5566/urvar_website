---
category: Site chrome
---
# Footer

Dark-green (`urvar-dark`) site footer with a 3px `urvar-green` top border. It has 5 columns: brand and tagline, product categories, quick links, resources, and contact (two phone numbers plus the Sewli address). A copyright line sits below. The columns stack on mobile.

No props. Labels are localized via `LangProvider`. Place it once at the bottom of every page, after the last `Section`.

## Usage
```jsx
<LangProvider>
  <Navbar />
  <main>…</main>
  <Footer />
</LangProvider>
```
