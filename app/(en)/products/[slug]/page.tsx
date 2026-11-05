import type { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/data/products";
import { brandTitle, pageMeta } from "@/lib/seo";
import ProductDetailClient from "./ProductDetailClient";
import ProductJsonLd from "./ProductJsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return pageMeta({
    lang: "en",
    path: `/products/${slug}`,
    title: brandTitle(product.name, "en"),
    description: product.tagline,
    ogDescription: product.description,
    image: product.image,
  });
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <ProductJsonLd product={product} lang="en" />
      <ProductDetailClient slug={slug} />
    </>
  );
}
