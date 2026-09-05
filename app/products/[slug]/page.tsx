import type { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} – Urvar Natural Pvt. Ltd.`,
    description: product.tagline,
    alternates: {
      canonical: `/products/${slug}`,
      languages: {
        "en-IN": `/products/${slug}`,
        "bn-IN": `/bn/products/${slug}`,
        "x-default": `/products/${slug}`,
      },
    },
    openGraph: {
      title: `${product.name} – Urvar Natural`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

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
      url: `https://urvarindia.com/products/${slug}`,
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urvarindia.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://urvarindia.com/products" },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://urvarindia.com/products/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetailClient slug={slug} />
    </>
  );
}
