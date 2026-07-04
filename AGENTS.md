<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deployment

Live at https://urvarindia.com on BigRock Cloud Hosting (cPanel), which has
**no Node.js available** on this plan. The site is deployed as a static
export (`output: "export"` in `next.config.ts`) — there is no server, no
API routes, no on-the-fly image optimization. See
`docs/deployment-bigrock-cloud.md` for the full story and
`scripts/deploy.sh` for the redeploy command (`npm run build` + `rsync` to
`public_html`, no build step on the server).

Practical implications for any future change:
- Don't add API routes, middleware, or anything else needing a Node
  server — it won't run here. The Kisan Saathi chatbot (`/api/chat`) was
  removed for exactly this reason; it's recoverable from git history if
  this site ever moves to Node-capable hosting.
- `app/robots.ts` and `app/sitemap.ts` need `export const dynamic =
  "force-static"` — static export fails the build without it.
- New dynamic routes need `generateStaticParams` (already the pattern
  used throughout `app/`) since there's no server-side rendering at
  request time.
- `next/image` runs with `unoptimized: true` — no automatic AVIF/WebP
  conversion, images are served as-is.

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
