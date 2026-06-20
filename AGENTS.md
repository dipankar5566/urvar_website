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
