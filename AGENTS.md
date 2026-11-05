<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deployment

Live at https://urvarindia.com (canonical host). `www.urvarindia.com` and
`http://` 301 to it via Cloudflare (Rules → Redirect Rules "Redirect from
WWW to root", and SSL/TLS → Edge Certificates → Always Use HTTPS), so code
should always build URLs from `SITE_URL` in `lib/seo.ts`. Served as a
full Next.js server (`next start`) run under PM2 on a local Windows PC,
fronted by a dedicated Cloudflare Tunnel (`urvar-website`, Windows service
`CloudflaredWebsite`) — the same pattern used by the other Urvar apps on
that machine (`hr.urvarindia.com`, `erp.urvarindia.com`). See
`docs/deployment-cloudflare-tunnel.md` for the full setup and
`scripts/deploy-local.ps1` for the redeploy command (`git pull` + `npm ci`
+ `npm run build` + `pm2 restart urvar-website`).

**Known issue — `deploy-local.ps1` fails on Windows while the site runs.**
The running `next start` process keeps
`node_modules/@next/swc-win32-x64-msvc/next-swc.win32-x64-msvc.node`
locked, so `npm ci` dies with `EPERM ... unlink` *after* it has already
deleted part of `node_modules` (the live process keeps serving from memory,
but any restart would then fail). Until the script is fixed, deploy
manually in this order: `git pull` → `pm2 stop urvar-website` → `npm ci`
→ `npm run build` → `pm2 start urvar-website` (~2–3 min downtime). Skip
`npm ci` when `package-lock.json` didn't change — the build alone takes
~20 s of downtime and avoids the EPERM trap. Never build or `npm ci` in
`D:\urvar_website` for testing — it is the live folder; build a copy
elsewhere (with its own `npm ci`, since Turbopack rejects a junctioned
`node_modules`), e.g. `robocopy` excluding `node_modules`, `.next`, `.git`
and `.env.local`.

`tsconfig.json` includes the generated `.next/types` and
`.next/dev/types`. After moving or renaming routes those go stale and the
build's type-check fails on modules that no longer exist, so before
building in the live folder run `npx next typegen` (regenerates route types
without building) and move aside any old `.next/dev` left by `next dev`.
`npx tsc --noEmit` should report 0 errors before you `pm2 stop`.

The previous BigRock cPanel static-export deployment (no Node.js
available there) is retired as the live host but kept as a documented
fallback — see `docs/deployment-bigrock-cloud.md` (superseded) and
`scripts/deploy.sh` if it's ever needed again. Since the site now runs on
a real Node server:
- API routes and middleware are viable again — the Kisan Saathi chatbot
  (`/api/chat`) was removed only because of the old static-export
  constraint and is recoverable from git history if wanted.
- `app/robots.ts` and `app/sitemap.ts` keep `export const dynamic =
  "force-static"` — harmless under server mode, no need to remove it.
- `next/image` still runs with `unoptimized: true` for now (unchanged
  from the static-export config) — revisit if on-the-fly image
  optimization is wanted later.

# Localization (EN at /, Bengali at /bn/*)

Language is URL-based so Bengali pages are crawlable static HTML: English
lives at `/`, Bengali at `/bn/*`. `context/LangContext.tsx` derives the
language from `usePathname()` (no localStorage, no client toggle state) —
this makes Navbar/Footer localize automatically and bakes Bengali text
into the prerendered HTML for every `/bn` route. The Bengali home is `/bn`
with no trailing slash (Next 308-redirects `/bn/` → `/bn`), and canonical,
hreflang, sitemap and `localize("/")` all use `/bn`. The pages in `app/bn/**` are
thin server wrappers that re-export the English page component and supply
Bengali metadata + hreflang alternates (`en-IN`/`bn-IN`/`x-default`);
English metadata carries the same hreflang pairs. When adding a page or
dynamic route, add its `/bn` wrapper, hreflang on both sides, and the
sitemap picks it up automatically (sitemap mirrors every URL under /bn).
Internal links in client components must go through `localize()` from
`useLang()` so they stay within the current language tree.

Each language tree has its own root layout so the server HTML carries the
right `<html lang>`: English routes live in the `app/(en)/` route group
(the group name is not in the URL) with `app/(en)/layout.tsx`, and
`app/bn/layout.tsx` is the Bengali root. Both render
`components/SiteShell.tsx` (fonts, Navbar/Footer, analytics, Organization
JSON-LD). There is no top-level `app/layout.tsx`, so unmatched URLs use
`app/global-not-found.tsx`, enabled by `experimental.globalNotFound` in
`next.config.ts`. `/bn` wrappers import English pages via
`@/app/(en)/...`. Moving between the trees is a full page load, which the
language switcher already does. Page metadata goes through `pageMeta()` in
`lib/seo.ts` (canonical, hreflang, Open Graph, Twitter in one place).

Anything server-rendered that differs by language must not hide behind a
plain `export { default } from` re-export, because the English component
would render on the Bengali page. JSON-LD components take a `lang` prop
(`CropJsonLd`, `BlogJsonLd`, `ProductJsonLd`, `CategoryJsonLd`), and the
`/bn` wrappers for crop, blog, product and category detail pages define
their own default export passing `lang="bn"`. Client components can read
`useLang()` instead (e.g. `components/BreadcrumbJsonLd.tsx`). Known gap:
`data/products.ts` is English-only, so `/bn/products/*` shows English
product text and shares descriptions with the English pages.

# SEO conventions

- Titles ≤ 60 chars: wrap dynamic titles in `brandTitle()` (adds
  "| Urvar Natural" only when it fits). Descriptions ≤ 160 chars.
- Structured data: one `<script type="application/ld+json">` per object,
  `JSON.stringify(...).replace(/</g, "\\u003c")`, URLs from `SITE_URL`.
  Section pages get a `BreadcrumbList` via `components/BreadcrumbJsonLd.tsx`
  (render it in the page component, not a layout — section layouts also
  wrap detail pages that emit their own breadcrumb). Product schema has no
  `offers`: prices aren't public, and a price-less Offer is a Search
  Console error.
- `app/sitemap.ts` sets `lastModified` only on blog posts (from
  `updatedAt`); a build timestamp on static pages would be noise.
- Contrast (WCAG AA): the brand green token is `#007A42`, darkened for
  small text on light backgrounds; use `text-[#4ade80]` for green accents
  on dark sections. Small white text needs at least `text-white/65` on the
  dark greens (`#104C36`, `#0f3d28`) and `text-white/60` on `bg-ink`. Use
  `text-mute`, not `text-stone`, for small grey text on white.

# Video embeds

YouTube videos (e.g. the About page's "Watch Our Story" section) use a
click-to-load thumbnail pattern, not eager iframes — see
`components/VideoEmbed.tsx`. No iframe (or YouTube JS) loads until the
user clicks, which matters on a site delivered entirely as static files.
Video IDs live in `data/videos.ts`; titles/descriptions are localized
through `messages/en.ts` / `messages/bn.ts` rather than the data file,
consistent with how the rest of the site keeps translated copy in
`messages/`.

# Blog (admin-managed, no rebuild)

Posts are written at `/admin/blog` (single-password login, TipTap
rich-text editor, image upload) and stored as one JSON file per post under
`BLOG_DATA_DIR` (default `./storage/blog`, gitignored) — not in git. That
folder is the source of truth: back it up. `data/posts.ts` is only the
seed written there when the store is first created. Public blog pages are
prerendered and the save/delete server actions call
`revalidatePath("/", "layout")`, so changes go live instantly. Uploaded
images live in `storage/blog/media` and are served by
`app/blog-media/[file]/route.ts` (files added to `public/` after build
are not served by `next start`). Post HTML is sanitized on save
(`lib/blog/sanitize.ts`) before being rendered with
`dangerouslySetInnerHTML`. Admin requires `ADMIN_PASSWORD` and
`ADMIN_SESSION_SECRET` (32+ chars) in `.env.local` (exists only on the
hosting PC; login stays disabled while the password is the `CHANGE-ME`
placeholder); admin pages must stay dynamic — `isAdmin()` reads cookies
first, otherwise `next build` (no env vars) prerenders them as a permanent
redirect to login. First-run seeding writes to a temp folder and renames
it into place so parallel build workers never read a half-seeded store.
Each post has an optional `bn` block (title, excerpt, html) edited through
the Bengali fields in the admin form; `/bn/blog/*` falls back to English
when it's missing. To change live posts outside the admin, back up
`storage/blog/posts/` first and write atomically (temp file + rename, as
`writePost()` in `lib/blog/store.ts` does), then rebuild or save via admin
so the cached pages refresh.
User guide:
`docs/blog-admin.md`.
