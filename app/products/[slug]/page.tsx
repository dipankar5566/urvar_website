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

  return <ProductDetailClient slug={slug} />;
}
