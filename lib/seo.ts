import type { Metadata } from "next";

export type Lang = "en" | "bn";

export const SITE_URL = "https://urvarindia.com";

const BRAND: Record<Lang, string> = { en: "Urvar Natural", bn: "উর্বর ন্যাচারাল" };
const DEFAULT_IMAGE = "/og-image.jpg";

export const bnPath = (path: string) => (path === "/" ? "/bn" : `/bn${path}`);

export function brandTitle(title: string, lang: Lang): string {
  const branded = `${title} | ${BRAND[lang]}`;
  return branded.length <= 60 ? branded : title;
}

export function pageMeta({
  lang,
  path,
  title,
  description,
  image = DEFAULT_IMAGE,
  type = "website",
  ogTitle = title,
  ogDescription = description,
}: {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  ogTitle?: string;
  ogDescription?: string;
}): Metadata {
  const canonical = lang === "bn" ? bnPath(path) : path;
  const images = [image === DEFAULT_IMAGE ? { url: image, width: 1200, height: 630 } : { url: image }];
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { "en-IN": path, "bn-IN": bnPath(path), "x-default": path },
    },
    openGraph: {
      type,
      siteName: BRAND.en,
      locale: lang === "bn" ? "bn_IN" : "en_IN",
      url: canonical,
      title: ogTitle,
      description: ogDescription,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [image],
    },
  };
}
