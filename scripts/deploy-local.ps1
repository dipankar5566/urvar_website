# Redeploy helper for the local Cloudflare Tunnel deployment.
# Run locally on the hosting PC. Pulls latest, rebuilds, and restarts the
# PM2-managed `next start` process (urvar-website, port 3003).
# Usage: .\scripts\deploy-local.ps1

$ErrorActionPreference = "Stop"

Set-Location "$PSScriptRoot\.."

git pull
npm ci
npm run build
pm2 restart urvar-website
