import type { Product } from "@/data/products";
import en from "@/messages/en";
import bn from "@/messages/bn";

const BASE_URL = "https://urvarindia.com";

export default function ProductJsonLd({ product, lang }: { product: Product; lang: "en" | "bn" }) {
  const t = lang === "bn" ? bn : en;
  const prefix = lang === "bn" ? "/bn" : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Urvar Natural",
    },
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}${prefix}/products/${product.slug}`,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Urvar Natural Pvt. Ltd.",
      },
    },
    additionalProperty: product.nutrients.map((n) => ({
      "@type": "PropertyValue",
      name: n.parameter,
      value: n.value,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.nav.home, item: `${BASE_URL}${prefix || "/"}` },
      {
        "@type": "ListItem",
        position: 2,
        name: t.product_detail.breadcrumb_products,
        item: `${BASE_URL}${prefix}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${BASE_URL}${prefix}/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
