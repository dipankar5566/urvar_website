# Urvar Natural: how to build with this design system

Urvar Natural makes organic fertilizers (West Bengal). The audience is farmers and dealers/distributors. The look is editorial: white and soft-grey canvas, deep brand greens, a tall condensed uppercase headline font, square hairline-bordered cards, and pill buttons.

## Setup (required)
- **Wrap every screen in `LangProvider`.** Navbar, Footer, Hero, ProductCard, TrustBadges, ContactForm and DealerEnquiryForm read their copy from it and break without it.
- English is the default. For a Bengali (`/bn`) screen, set `window.__URVAR_PATH__ = "/bn/"` before the first render so all built-in copy switches to Bengali. Write your own copy in Bengali as well.
- Page skeleton: `<LangProvider><Navbar /><main>…Sections…</main><Footer /><WhatsAppButton /></LangProvider>`.
- Real data only. Use `window.UrvarDS.products` (the 8 real products) and `window.UrvarDS.crops`. **Never invent products, doses, prices, statistics or agronomic numbers.** Use neutral placeholders if you need them.
- Images: components resolve site paths against the live site. In your own markup, use absolute URLs such as `https://www.urvarindia.com/images/crops/potato.webp` (crop photos exist for rice, wheat, vegetables, potato and mustard).

## Styling idiom: Tailwind utility classes
There are no style props and no CSS-in-JS. Style your own layout with the Tailwind classes compiled into `styles.css`. Only compiled classes work, so stick to this vocabulary:

| Family | Real names |
|---|---|
| Brand color (`bg-`/`text-`/`border-`) | `urvar-dark` (primary deep green), `urvar-green` (action green), `urvar-leaf`, `urvar-light` (pale mint), `urvar-earth` (brown), `urvar-earth-light` (warm sand) |
| Neutrals | `ink`, `canvas`, `soft-cloud` (grey panels), `hairline` (borders), `charcoal`, `mute` (secondary text), `stone` (eyebrows), `neutral-50`…`neutral-900` |
| State | `success`, `warning`, `error`, `info` |
| Elevation | `shadow-e1`, `shadow-e2`, `shadow-e3` |
| Headline font | `font-[family-name:var(--font-campaign)] uppercase` (Bebas Neue). Body text is Inter by default. |
| Type recipes | eyebrow `text-[11px] font-bold text-stone tracking-[1.5px] uppercase`; page h1 `text-[44px] sm:text-[68px] leading-[1.0]`; section h2 `text-[28px] sm:text-[36px] leading-[1.1]`; body `text-[15px] leading-relaxed text-mute` |
| Layout | `Section` for page bands, `Container` for custom bands; grids `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5` |

Shape rules: cards are square with a 1px `border-hairline` (use `Card`). `rounded-full` is only for pills (`Button`, `Badge`), and `rounded-xl` only for media. Build every action with `Button`, never a hand-styled link. Conversion blocks pair **Contact Us** (primary) with **Chat on WhatsApp** (secondary, a `wa.me/919035708943?text=…` link with a pre-filled message).

## Where the truth lives
- `styles.css` → `_ds_bundle.css`: every usable class. Check here before using a class you haven't seen.
- `components/<group>/<Name>/<Name>.prompt.md`: usage and examples for each component.

## Example
```jsx
const { LangProvider, Navbar, Footer, Section, Container, Card, Badge, Button } = window.UrvarDS;

<LangProvider>
  <Navbar />
  <section className="bg-urvar-dark pt-14 pb-12">
    <Container>
      <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-3">Nutrition Programs</p>
      <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[44px] sm:text-[68px] leading-[1.0]">Crop Solutions</h1>
    </Container>
  </section>
  <Section>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
      <Card interactive className="p-6 flex flex-col gap-3">
        <Badge tone="dark" className="self-start">Rabi</Badge>
        <h3 className="font-bold text-ink text-base">Potato</h3>
      </Card>
    </div>
  </Section>
  <Section bg="earth" containerClassName="text-center">
    <Button href="/contact">Contact Us</Button>
  </Section>
  <Footer />
</LangProvider>
```
