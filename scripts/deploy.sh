#!/usr/bin/env bash
# Redeploy helper for BigRock Cloud Hosting (static export).
# Run locally. Builds the site and rsyncs the static output to public_html.
# Usage: ./scripts/deploy.sh

set -euo pipefail

SSH_KEY="$HOME/.ssh/urvar_bigrock_deploy"
SERVER="urvareoo@urvarindia.com"
REMOTE_DIR="~/public_html/"

cd "$(dirname "$0")/.."

rm -rf out .next
npm run build

rsync -avz --delete \
  -e "ssh -i $SSH_KEY" \
  --exclude='.well-known' --exclude='cgi-bin' --exclude='__next.*' \
  out/ "$SERVER:$REMOTE_DIR"
