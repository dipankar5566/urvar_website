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
