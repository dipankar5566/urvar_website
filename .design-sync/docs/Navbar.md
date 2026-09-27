---
category: Site chrome
---
# Navbar

The site header, sticky at the top. It has two rows: a grey utility bar (phone, "Sewli, West Bengal", EN | বাং language switch) and a white primary nav (URVAR logo, 5 links, and a green **Become a Dealer** pill). Below `md` it collapses to a hamburger menu.

No props. All labels come from the current language via `LangProvider`. Every page on the site starts with it.

## Usage
```jsx
<LangProvider>
  <Navbar />
  <main>…page sections…</main>
  <Footer />
</LangProvider>
```

The active link is underlined in `urvar-green` based on the current path. Don't rebuild the header by hand; always use this component so designs match the live site.
