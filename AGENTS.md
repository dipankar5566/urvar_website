<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deployment

Live at https://www.urvarindia.com and https://urvarindia.com, served as a
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
→ `npm run build` → `pm2 start urvar-website` (~2–3 min downtime). Never
build or `npm ci` in `D:\urvar_website` for testing — it is the live
folder; build a copy elsewhere (with its own `npm ci`, since Turbopack
rejects a junctioned `node_modules`).

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
into the prerendered HTML under `out/bn/`. The pages in `app/bn/**` are
thin server wrappers that re-export the English page component and supply
Bengali metadata + hreflang alternates (`en-IN`/`bn-IN`/`x-default`);
English metadata carries the same hreflang pairs. When adding a page or
dynamic route, add its `/bn` wrapper, hreflang on both sides, and the
sitemap picks it up automatically (sitemap mirrors every URL under /bn).
Internal links in client components must go through `localize()` from
`useLang()` so they stay within the current language tree.

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
User guide:
`docs/blog-admin.md`.
