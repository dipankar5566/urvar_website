# Deploying to Hostinger (Node.js Web App)

This site is a Next.js 16 app with one server-side API route (`/api/chat`,
the Kisan Saathi chatbot) and otherwise fully static-generated pages. It
needs Hostinger's **Node.js Web Apps Hosting** (available on Business and
Cloud Hosting plans) — not a plain static/shared hosting plan.

## 1. Prerequisites

- A Hostinger **Business** or **Cloud Hosting** plan (Node.js Web Apps support)
- GitHub repo `dipankar5566/urvar_website`, branch `main`, up to date
- Your `ANTHROPIC_API_KEY` (Anthropic Console) and `NEXT_PUBLIC_FORMSPREE_ID` (Formspree) values handy — these are **not** committed to git

## 2. Create the Node.js app in hPanel

1. Log in to **hPanel** → **Websites** → **Add Website** → choose **Node.js Apps**
2. Select **Import Git Repository** and authorize GitHub if prompted
3. Pick repo `dipankar5566/urvar_website`, branch `main`
4. Configure:
   - **Application root**: `/` (the Next.js app is at the repo root)
   - **Node.js version**: `20.x` (matches `.nvmrc`)
   - **Build command**: `npm install && npm run build`
   - **Start command**: `npm run start`
     - This runs `next start`, which automatically binds to the `PORT` env var Hostinger provides

## 3. Set environment variables

In the app's **Environment Variables** section, add:

| Name | Value | Notes |
|---|---|---|
| `ANTHROPIC_API_KEY` | your Anthropic API key | server-side only, powers `/api/chat` |
| `NEXT_PUBLIC_FORMSPREE_ID` | your Formspree form ID | used by the contact form |

These come from `.env.local` locally (never committed — see `.env.local.example` for the expected names).

## 4. First deploy and smoke test

1. Trigger the build/deploy from hPanel
2. Once running, open the **temporary Hostinger URL** (e.g. `*.hostingersite.com`) and check:
   - Homepage, `/products`, `/products/[slug]`, `/products/category/[category]`
   - `/crop-solutions`, `/crop-solutions/[crop]` (rice, wheat, vegetables, potato, mustard, fruit-crops)
   - `/blog`, `/blog/[slug]`
   - `/about`, `/about/manufacturing-quality`, `/certificates`, `/faqs`, `/resources/downloads`, `/dealers/become-a-distributor`, `/contact`
   - `/sitemap.xml` and `/robots.txt` reference `urvarindia.com`
   - The Kisan Saathi chat widget returns a real reply (confirms `ANTHROPIC_API_KEY` is set correctly)
   - The contact form submits successfully (confirms `NEXT_PUBLIC_FORMSPREE_ID`)

## 5. Point urvarindia.com at Hostinger

Only do this after step 4 passes on the temporary URL — this domain is live in production.

1. In hPanel, add `urvarindia.com` as the domain for this Node.js app
2. Update DNS at your domain's current registrar/DNS provider to point to Hostinger (either change nameservers to Hostinger's, or update the A/CNAME records to the values hPanel shows for this app)
3. Wait for DNS propagation, then enable **free SSL (Let's Encrypt)** for the domain in hPanel
4. Re-run the smoke test from step 4 against `https://urvarindia.com`

## 6. Redeploys

- Push changes to `origin/main`
- In hPanel, either enable **auto-deploy on push** for this app, or click **Redeploy** manually after each push
- Each redeploy re-runs `npm install && npm run build` then restarts `npm run start`

## 7. Security note: GitHub token in git remote

The local `origin` remote currently embeds a GitHub Personal Access Token
directly in the URL (`https://ghp_***@github.com/...`), stored in
`.git/config`. This works for pushing from this machine, but it's better
practice to:

- Use SSH (`git@github.com:dipankar5566/urvar_website.git`) with an SSH key, or
- Use a git credential helper instead of embedding the token in the URL

This doesn't block deployment — Hostinger's GitHub integration uses its own
OAuth connection to your GitHub account, independent of this local remote.
