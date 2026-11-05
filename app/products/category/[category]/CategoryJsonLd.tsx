import en from "@/messages/en";
import bn from "@/messages/bn";

const BASE_URL = "https://urvarindia.com";

export default function CategoryJsonLd({
  name,
  slug,
  lang,
}: {
  name: string;
  slug: string;
  lang: "en" | "bn";
}) {
  const t = lang === "bn" ? bn : en;
  const prefix = lang === "bn" ? "/bn" : "";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.nav.home, item: `${BASE_URL}${prefix}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: t.product_detail.breadcrumb_products,
        item: `${BASE_URL}${prefix}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${BASE_URL}${prefix}/products/category/${slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  );
}
