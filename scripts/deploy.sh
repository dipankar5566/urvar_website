#!/usr/bin/env bash
# Redeploy helper for BigRock Cloud Hosting (static export).
# Run locally. Builds the site and rsyncs the static output to public_html.
# Usage: ./scripts/deploy.sh

set -euo pipefail

# urvarindia.com now resolves through Cloudflare, which only proxies
# ports 80/443 (not SSH) -- deploy straight to the cPanel shared IP
# instead. Find it via cPanel home page "General Information" panel if
# it ever changes.
SSH_KEY="$HOME/.ssh/urvar_bigrock_deploy"
SERVER="urvareoo@162.241.85.121"
REMOTE_DIR="~/public_html/"

cd "$(dirname "$0")/.."

rm -rf out .next
npm run build

rsync -avz --delete \
  -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=accept-new" \
  --exclude='.well-known' --exclude='cgi-bin' --exclude='__next.*' \
  out/ "$SERVER:$REMOTE_DIR"
