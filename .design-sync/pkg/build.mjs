// Builds the design-sync input package from the website's real components:
//   dist/index.js      ESM bundle (react external, next/* -> src/shims)
//   types/**           tsc declaration tree (prop contracts)
//   dist/styles.css    compiled Tailwind v4 output of app/globals.css
//   dist/fonts/        Bebas Neue + Inter woff2 (OFL) with @font-face css
// Run from the repo root: node .design-sync/pkg/build.mjs
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const PKG = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(PKG, "../..");
const DIST = join(PKG, "dist");
const TYPES = join(PKG, "types");
const SHIMS = join(PKG, "src", "shims");
const posix = (p) => p.split(sep).join("/");

const requireRepo = createRequire(join(ROOT, "package.json"));
const requireSync = createRequire(join(ROOT, ".ds-sync", "package.json"));
const esbuild = requireSync("esbuild");

rmSync(DIST, { recursive: true, force: true });
rmSync(TYPES, { recursive: true, force: true });
mkdirSync(join(DIST, "fonts"), { recursive: true });

// -- 1. JS bundle ----------------------------------------------------------
const shimMap = {
  "next/link": join(SHIMS, "next-link.tsx"),
  "next/image": join(SHIMS, "next-image.tsx"),
  "next/navigation": join(SHIMS, "next-navigation.ts"),
};
const exts = ["", ".ts", ".tsx", ".js", ".jsx", "/index.ts", "/index.tsx"];
const aliasPlugin = {
  name: "urvar-aliases",
  setup(b) {
    b.onResolve({ filter: /^next\/(link|image|navigation)$/ }, (a) => ({ path: shimMap[a.path] }));
    b.onResolve({ filter: /^next\// }, (a) => ({
      errors: [{ text: `unshimmed Next.js module "${a.path}" — add a shim in .design-sync/pkg/src/shims` }],
    }));
    b.onResolve({ filter: /^@\// }, (a) => {
      const stem = join(ROOT, a.path.slice(2));
      for (const e of exts) if (existsSync(stem + e) && statSync(stem + e).isFile()) return { path: stem + e };
      return { errors: [{ text: `cannot resolve ${a.path}` }] };
    });
  },
};
await esbuild.build({
  entryPoints: [join(PKG, "src", "index.ts")],
  outfile: join(DIST, "index.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2020",
  jsx: "automatic",
  external: ["react", "react-dom", "react/jsx-runtime", "react-dom/client"],
  // Forms read NEXT_PUBLIC_* env at submit time; there is no `process` in the browser.
  define: { "process.env": "{}" },
  plugins: [aliasPlugin],
  logLevel: "warning",
});
console.log("dist/index.js built");

// -- 2. Declarations ---------------------------------------------------------
const tsc = requireRepo.resolve("typescript/bin/tsc");
try {
  execFileSync(process.execPath, [tsc, "-p", join(PKG, "tsconfig.types.json")], { stdio: "pipe" });
} catch (e) {
  // Type errors don't block declaration emit; only fail if nothing was emitted.
  const out = `${e.stdout ?? ""}${e.stderr ?? ""}`.trim();
  if (out) console.warn(`tsc reported diagnostics (declarations still emitted):\n${out.split("\n").slice(0, 20).join("\n")}`);
}
const typesEntry = join(TYPES, ".design-sync", "pkg", "src", "index.d.ts");
if (!existsSync(typesEntry)) throw new Error("tsc emitted no declarations");

// tsc keeps path-alias specifiers verbatim; rewrite them to relative paths so
// the declaration tree resolves without a tsconfig.
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((x) =>
  x.isDirectory() ? walk(join(d, x.name)) : x.name.endsWith(".d.ts") ? [join(d, x.name)] : []);
const typesShim = {
  "next/link": join(TYPES, ".design-sync", "pkg", "src", "shims", "next-link"),
  "next/image": join(TYPES, ".design-sync", "pkg", "src", "shims", "next-image"),
  "next/navigation": join(TYPES, ".design-sync", "pkg", "src", "shims", "next-navigation"),
};
for (const f of walk(TYPES)) {
  const src = readFileSync(f, "utf8");
  const rel = (target) => {
    let r = posix(relative(dirname(f), target));
    return r.startsWith(".") ? r : `./${r}`;
  };
  const next = src
    .replace(/(["'])@\/([^"']+)\1/g, (_m, q, p) => `${q}${rel(join(TYPES, p))}${q}`)
    .replace(/(["'])(next\/(?:link|image|navigation))\1/g, (_m, q, p) => `${q}${rel(typesShim[p])}${q}`);
  if (next !== src) writeFileSync(f, next);
}
console.log(`types/ emitted (${walk(TYPES).length} .d.ts files)`);

// -- 3. Tailwind CSS -------------------------------------------------------
const postcss = requireRepo("postcss");
const tailwind = requireRepo("@tailwindcss/postcss");
const cssIn = join(ROOT, "app", "globals.css");
// Tailwind only emits classes it finds in sources. Designs built in Claude
// Design write new markup, so safelist the everyday vocabulary + every brand
// token; @source paths resolve relative to app/globals.css.
const safelist = String.raw`
@source "../.design-sync/previews";
@source inline("{sm:,md:,lg:,}{grid-cols,col-span}-{1,2,3,4,5,6,12}");
@source inline("{sm:,md:,lg:,}{flex,grid,block,inline-flex,inline-block,hidden}");
@source inline("{sm:,md:,lg:,}{flex-row,flex-col,flex-wrap,items-start,items-center,items-end,items-stretch,justify-start,justify-center,justify-end,justify-between,self-start,self-center,flex-1,flex-none,shrink-0,grow}");
@source inline("{sm:,lg:,}{p,px,py,gap,mt,mb}-{0,1,2,3,4,5,6,8,10,12,14,16,20,24}");
@source inline("{pt,pb,pl,pr,m,mx,my,ml,mr,gap-x,gap-y,space-y,space-x}-{0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,10,12,14,16,20,24}");
@source inline("{w,h,min-h,size}-{full,auto,screen,fit,4,5,6,8,10,12,14,16,20,24,32,40,48,64,80,96} {sm:,lg:,}w-{full,auto,1/2,1/3,2/3,1/4,3/4}");
@source inline("{sm:,md:,lg:,}max-w-{xs,sm,md,lg,xl,2xl,3xl,4xl,5xl,6xl,7xl,full,prose}");
@source inline("{sm:,md:,lg:,}text-{xs,sm,base,lg,xl,2xl,3xl,4xl,5xl,6xl,7xl,left,center,right}");
@source inline("font-{normal,medium,semibold,bold,extrabold} leading-{none,tight,snug,normal,relaxed,loose} tracking-{tight,normal,wide,wider,widest} uppercase normal-case italic underline truncate whitespace-nowrap line-clamp-{1,2,3,4}");
@source inline("{bg,text,border,ring,fill,from,via,to,divide}-{urvar-dark,urvar-green,urvar-leaf,urvar-light,urvar-earth,urvar-earth-light,ink,canvas,soft-cloud,hairline,charcoal,mute,stone,white,black,transparent,current,success,warning,error,info,neutral-{50,{100..900..100}}}");
@source inline("hover:{bg,text,border}-{urvar-dark,urvar-green,urvar-leaf,urvar-light,urvar-earth,ink,white,soft-cloud} group-hover:text-{urvar-green,urvar-dark,ink} focus-visible:ring-{urvar-green,urvar-dark}");
@source inline("{bg,text,border}-{urvar-dark,urvar-green,urvar-leaf,white,black,ink}/{5,10,15,20,30,40,50,60,70,80,90}");
@source inline("rounded{,-sm,-md,-lg,-xl,-2xl,-3xl,-full,-none} border{,-0,-2,-4,-t,-b,-l,-r,-y,-x} border-{solid,dashed} divide-{x,y} shadow{,-sm,-md,-lg,-xl,-none,-e1,-e2,-e3}");
@source inline("relative absolute fixed sticky static {inset,top,right,bottom,left}-{0,2,4,6,8,1/2,full} z-{0,10,20,30,40,50} overflow-{hidden,auto,x-auto,y-auto} aspect-square aspect-video object-{cover,contain,center} opacity-{0,25,50,60,70,75,80,90,100}");
@source inline("transition{,-colors,-transform,-shadow,-opacity,-all} duration-{150,200,300,500} ease-{in,out,in-out} {hover:,group-hover:,}{-translate-y-1,scale-105,shadow-e2,shadow-e3,underline,opacity-80}");
@source inline("bg-gradient-to-{t,b,r,l,tr,br} list-{disc,decimal,none} list-inside sr-only cursor-pointer select-none");
`;
const result = await postcss([tailwind({ base: ROOT })]).process(readFileSync(cssIn, "utf8") + safelist, { from: cssIn });
// next/font sets these on <html> in the site; define them for standalone use.
// html:root outranks the self-referencing :root declaration Tailwind emits.
const fontVars =
  '\nhtml:root{--font-campaign:"Bebas Neue",sans-serif;' +
  '--font-text:"Inter",system-ui,-apple-system,"Segoe UI",sans-serif;}\n';
writeFileSync(join(DIST, "styles.css"), result.css + fontVars);
console.log(`dist/styles.css (${(result.css.length / 1024).toFixed(0)} KB)`);

// -- 4. Fonts (Google Fonts, SIL OFL) ----------------------------------------
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const gcss = await (await fetch(
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@100..900&display=swap",
  { headers: { "User-Agent": UA } },
)).text();
const faces = [];
for (const m of gcss.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g)) {
  const [, subset, block] = m;
  if (subset !== "latin" && subset !== "latin-ext") continue;
  const url = /url\((https:[^)]+\.woff2)\)/.exec(block)?.[1];
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  if (!url || !family) continue;
  const file = `${family.replace(/\s+/g, "")}-${subset}.woff2`;
  writeFileSync(join(DIST, "fonts", file), Buffer.from(await (await fetch(url)).arrayBuffer()));
  faces.push(block.replace(url, `./${file}`));
}
if (!faces.length) throw new Error("no fonts downloaded from Google Fonts");
writeFileSync(join(DIST, "fonts", "fonts.css"), faces.join("\n") + "\n");
console.log(`dist/fonts: ${faces.length} @font-face blocks`);
