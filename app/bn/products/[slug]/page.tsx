import type { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/data/products";
import { brandTitle, pageMeta } from "@/lib/seo";
import ProductDetailClient from "@/app/(en)/products/[slug]/ProductDetailClient";
import ProductJsonLd from "@/app/(en)/products/[slug]/ProductJsonLd";

export { generateStaticParams } from "@/app/(en)/products/[slug]/page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return pageMeta({
    lang: "bn",
    path: `/products/${slug}`,
    title: brandTitle(product.name, "bn"),
    description: product.tagline,
    ogDescription: product.description,
    image: product.image,
  });
}

export default async function BnProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <ProductJsonLd product={product} lang="bn" />
      <ProductDetailClient slug={slug} />
    </>
  );
}
