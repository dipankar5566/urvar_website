// One-time image optimizer. Run with: node scripts/optimize-images.mjs
//
// - JPGs: resized to <= MAX_DIM and re-encoded (mozjpeg) in place, same filename.
// - Photographic PNGs (products + director): resized, converted to WebP, the
//   original .png is deleted. Update path references in code after running.
// - logo.svg (vector) and logo.png are left untouched.
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname, dirname, basename } from "node:path";
import sharp from "sharp";

const ROOT = join(import.meta.dirname, "..");
const PUBLIC = join(ROOT, "public");

const MAX_DIM = 1400;
const JPG_QUALITY = 78;
const WEBP_QUALITY = 80;

// PNGs to convert to WebP (relative to public/). Everything else stays as-is.
const PNG_TO_WEBP = new Set([
  "images/director.png",
  "products/vermicompost.png",
  "products/fym.png",
  "products/prom.png",
  "products/prom-humic-flowering.png",
  "products/prom-humic-enriched.png",
  "products/humic-acid-liquid.png",
  "products/zinc-edta.png",
  "products/boron-edta.png",
]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

function fmtKB(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

async function run() {
  const files = await walk(PUBLIC);
  let beforeTotal = 0;
  let afterTotal = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    const rel = file.slice(PUBLIC.length + 1);
    const isJpg = ext === ".jpg" || ext === ".jpeg";
    const isWebpTarget = ext === ".png" && PNG_TO_WEBP.has(rel);
    if (!isJpg && !isWebpTarget) continue;

    const before = (await stat(file)).size;
    beforeTotal += before;

    const pipeline = sharp(file).resize(MAX_DIM, MAX_DIM, {
      fit: "inside",
      withoutEnlargement: true,
    });

    if (isJpg) {
      // Re-encode in place via a temp file (sharp can't read+write same path).
      const tmp = join(dirname(file), `.tmp-${basename(file)}`);
      await pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toFile(tmp);
      await rename(tmp, file);
      const after = (await stat(file)).size;
      afterTotal += after;
      console.log(`jpg   ${rel}: ${fmtKB(before)} -> ${fmtKB(after)}`);
    } else {
      const outPath = file.slice(0, -ext.length) + ".webp";
      await pipeline.webp({ quality: WEBP_QUALITY }).toFile(outPath);
      await unlink(file);
      const after = (await stat(outPath)).size;
      afterTotal += after;
      console.log(`webp  ${rel} -> ${basename(outPath)}: ${fmtKB(before)} -> ${fmtKB(after)}`);
    }
  }

  console.log(`\nTotal: ${fmtKB(beforeTotal)} -> ${fmtKB(afterTotal)}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
