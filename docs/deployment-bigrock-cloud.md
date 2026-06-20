# Deployed to BigRock Cloud Hosting (static export)

Live at https://urvarindia.com, hosted on a BigRock Cloud Hosting (cPanel)
account, domain registered at BigRock too.

## Why static export

This BigRock Cloud Hosting plan ("Business Standard") runs on shared
infrastructure with **no Node.js available** — confirmed via BigRock
support and by direct inspection over SSH (no `node`/`npm` binary
anywhere, and `/etc/cpanel/ea-4/passenger.nodejs` doesn't exist, which
cPanel's Application Manager needs to run any Node app). cPanel's
Application Manager UI exists and will happily register a Node app, but
`PassengerApps::ensure_deps` fails because there's nothing to run it with.

Since only one route (`/api/chat`, the Kisan Saathi chatbot) needed a
server, the fix was to drop that requirement entirely:

- `next.config.ts` sets `output: "export"` and `trailingSlash: true`
  (the latter avoids an Apache directory-redirect/403 conflict between
  `route.html` and a same-named `route/` directory used for nested
  dynamic routes)
- `images.unoptimized: true`, since the on-the-fly image optimizer also
  needs a server
- `app/api/chat/route.ts` removed (recoverable from git history — see
  commit history before this change) and `<ChatWidget />` removed from
  `app/layout.tsx`
- `app/robots.ts` / `app/sitemap.ts` need `export const dynamic =
  "force-static"` to be compatible with `output: "export"`

The build now produces a plain `out/` folder of HTML/CSS/JS, which needs
no Node.js on the server at all — just regular file hosting.

## Server layout

- cPanel account: `urvareoo`, home `/home1/urvareoo`
- Document root: `~/public_html` (this is what Apache serves for
  `urvarindia.com`)
- A Git-cloned copy of the repo also lives at
  `~/repositories/urvar_website` (from an earlier, abandoned attempt to
  run this as a Node/Passenger app — harmless to leave, or delete it via
  cPanel's Git Version Control feature if you want to tidy up)
- SSH access: enabled via BigRock client panel ("Shell Access" toggle on
  the My Hosting page), key-based auth via `~/.ssh/urvar_bigrock_deploy`
  (public key authorized in cPanel → SSH Access → Manage SSH Keys)

## Redeploying after changes

```bash
./scripts/deploy.sh
```

This builds locally (`npm run build`) and `rsync`s the `out/` folder to
`~/public_html` on the server. No build step runs on the server — it
can't, there's no Node.js there.

## DNS and SSL

- Domain and hosting are both on BigRock, but they're **separate systems**:
  the domain's default nameservers (`dns1-4.bigrock.in`) are not the same
  zone as the one cPanel manages internally. DNS records were added
  directly via BigRock's client panel → **Domain → Manage DNS Records**
  (not by switching nameservers, which proved unreliable through that UI):
  - `A` record: `@` → the server's IP
  - `CNAME`: `www` → `urvarindia.com`
  - These changes took several hours to propagate (BigRock states 4-6
    hours for this path, vs 24-72 hours for switching nameservers)
- SSL is free Let's Encrypt via cPanel **AutoSSL**, covering both
  `urvarindia.com` and `www.urvarindia.com`, auto-renewing. Triggered via
  `uapi SSL start_autossl_check` once DNS resolved; cPanel handles renewal
  on its own from here.

## Known gaps

- **Contact form / dealer enquiry form**: need `NEXT_PUBLIC_FORMSPREE_ID`
  set in `.env.local` before building — currently unset, so these forms
  will show an error on submit until a Formspree ID is added and the site
  rebuilt/redeployed.
- **Kisan Saathi chatbot**: disabled (see above). To bring it back, this
  site would need to move to hosting that actually supports Node.js — a
  VPS, or a different BigRock product confirmed to support Node.js
  Selector/Application Manager (the "Business Standard" Cloud Hosting tier
  does not).

## Useful `uapi` commands (run over SSH on the server)

```bash
# Check current AutoSSL-installed cert
uapi SSL installed_host domain=urvarindia.com

# Re-check/issue AutoSSL (e.g. after DNS changes)
uapi SSL start_autossl_check

# Inspect DNS zone cPanel manages internally (separate from the
# registrar-side "Manage DNS Records" zone that's actually live)
uapi DNS parse_zone zone=urvarindia.com
```
