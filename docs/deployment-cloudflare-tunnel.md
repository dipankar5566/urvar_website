# Deployed on a local PC via Cloudflare Tunnel

Live at https://www.urvarindia.com and https://urvarindia.com. Runs as a
full Next.js server (`next start`, not a static export) on the same
Windows PC that hosts the other Urvar apps, using the same pattern:

- **Process manager:** PM2 (Windows service `pm2.exe`, auto-starts on
  boot and resurrects the saved process list). App name `urvar-website`,
  port `3003` (`3000` and `3001` are taken by `urvar-attendance`/HR and
  `urvar-erp`).
- **Tunnel:** dedicated Cloudflare Tunnel `urvar-website`, config at
  `C:\Windows\System32\config\systemprofile\.cloudflared\urvar-website-config.yml`,
  routing both `www.urvarindia.com` and `urvarindia.com` to
  `http://localhost:3003`.
- **Windows service:** `CloudflaredWebsite` (LocalSystem, auto-start),
  running `cloudflared --config=<above> tunnel run`. Mirrors the existing
  `Cloudflared` (hr) and `CloudflaredERP` services.

The `urvarindia.com` Cloudflare zone already existed (used by
`hr.urvarindia.com` / `erp.urvarindia.com`), so no DNS-provider change was
needed — only new tunnel routes for `www` and the apex.

## Redeploy

```
scripts\deploy-local.ps1
```

which runs `git pull`, `npm ci`, `npm run build`, then
`pm2 restart urvar-website`. `pm2 save` only needs to be re-run if the PM2
process definition itself changes (name, port, start command).

## Operational notes

- Uptime depends on this PC being on and network-connected — there's no
  failover. The Cloudflare Tunnel is outbound-only from this machine, so
  no router port-forwarding or open inbound firewall ports are required.
- `next/image` still runs `unoptimized: true` (carried over from the old
  static-export config) — image optimization could be turned on now that
  there's a real Node server, but that's a separate follow-up.
- The previously-removed `/api/chat` route (and any other feature cut for
  static-export compatibility) can be restored now, since this deployment
  has a real Node server. See `docs/deployment-bigrock-cloud.md` for that
  history.
