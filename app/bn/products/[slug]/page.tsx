import type { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/data/products";
import ProductDetailClient from "../../../products/[slug]/ProductDetailClient";
import ProductJsonLd from "../../../products/[slug]/ProductJsonLd";

export { generateStaticParams } from "../../../products/[slug]/page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} – উর্বর ন্যাচারাল`,
    description: product.tagline,
    alternates: {
      canonical: `/bn/products/${slug}`,
      languages: {
        "en-IN": `/products/${slug}`,
        "bn-IN": `/bn/products/${slug}`,
        "x-default": `/products/${slug}`,
      },
    },
    openGraph: {
      title: `${product.name} – উর্বর ন্যাচারাল`,
      description: product.description,
      locale: "bn_IN",
      images: [{ url: product.image }],
    },
  };
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
