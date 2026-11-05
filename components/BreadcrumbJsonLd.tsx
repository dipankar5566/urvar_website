"use client";

import { useLang } from "@/context/LangContext";
import { SITE_URL } from "@/lib/seo";

export default function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const { t, localize } = useLang();
  const crumbs = [{ name: t.nav.home, path: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${localize(c.path)}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
