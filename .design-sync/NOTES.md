# design-sync notes: Urvar website → Claude Design

Project: "Urvar Natural Design System" (`projectId` in config.json). Shape: package (no Storybook).

## How this repo is packaged
- The site is a Next.js app, not a published DS. `.design-sync/pkg/` is a build-only wrapper. `src/index.ts` re-exports the real components from `components/` under named exports (the site uses default exports, which the converter's synth `export *` would drop).
- `node .design-sync/pkg/build.mjs` (`cfg.buildCmd`) produces:
  - `dist/index.js`: esbuild ESM bundle, with react external and `next/link|image|navigation` aliased to `pkg/src/shims/*`. Any other `next/*` import fails the build on purpose, so add a shim when it happens.
  - `types/`: `tsc` declarations (`tsconfig.types.json`). `@/` and `next/*` specifiers are rewritten to relative paths so ts-morph resolves them. The tsc diagnostic on `components/ui/Button.tsx` (link/button union vs the shim's anchor types) is expected; declarations still emit.
  - `dist/styles.css`: Tailwind v4 compiled from `app/globals.css`, plus a **safelist** (`@source inline(...)` in build.mjs) so Claude Design output can use classes the site never used, plus `.design-sync/previews` as a source. It's about 191 KB, so keep the safelist trimmed (an earlier version was 548 KB).
  - `dist/fonts/`: Bebas Neue and Inter woff2 (latin and latin-ext) **downloaded from Google Fonts at build time**. `html:root` defines `--font-campaign`/`--font-text` (next/font does that on the site).
- Shims: `next/image` resolves `/…` paths against `https://www.urvarindia.com`, so images load from the live site. `usePathname` reads `window.__URVAR_PATH__` (set it to `"/bn/"` for Bengali).
- `process.env` is defined as `{}` in the bundle (the forms read `NEXT_PUBLIC_FORMSPREE_ID` on submit).
- Excluded: `ChatWidget` (unused on the site; posts to the removed `/api/chat`), `AnalyticsEvents`, and `GoogleAnalytics` (non-visual). `LangProvider` ships as `cfg.provider` and a bundle export, not as a card.
- Groups come from the `category` frontmatter in `.design-sync/docs/<Name>.md` (Primitives / Site chrome / Content / Forms). Those docs are the `.prompt.md` the design agent reads.
- `dtsPropsFor`: Button (the union extraction lost the attrs and emitted an unimported `CSSProperties`) and ProductCard (the `Product` type was unresolved; inlined).
- Card overrides: Hero single 1200x900, Footer single 1200x520 (it needs the lg breakpoint for 5 columns), Navbar column, WhatsAppButton single 480x260 (fixed position).

## Environment gotchas (this machine)
- The Playwright Chromium download times out on this network. Use the installed Chrome: `DS_CHROMIUM_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe"` for validate, capture and resync.
- `npm i` in `.ds-sync` warns that install scripts are not approved (esbuild postinstall). esbuild still works through its platform package.
- Run build.mjs from the repo root, not from inside `pkg/dist` (Windows EPERM on rmSync of the cwd).
- The first `resync.mjs` run right after a config edit once reported `build` failed with no clear reason. An immediate re-run passed. If it recurs, run `package-build.mjs` directly to see the real error.

## Known render warns
- None at the last sync.

## Re-sync risks
- **Fonts are network-fetched** from fonts.googleapis.com on every build. If Google changes the CSS format, the regex in build.mjs step 4 finds nothing and the build throws.
- **Images depend on the live site**: renamed or removed `public/` assets break previews and designs silently.
- **Safelist drift**: new brand tokens in `app/globals.css` need adding to the safelist color lists in build.mjs, or designs can't use them.
- `dtsPropsFor.ProductCard` inlines the `Product` shape. Update it when `data/products.ts`'s `Product` interface changes.
- Shims only cover the Next APIs the components use today (`Link`, `Image`, `usePathname`). New Next imports in components will fail the build (on purpose) until shimmed.
- Preview content is real site copy. If site copy changes, the previews don't update (they're authored).
