import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryBySlug, categoryMeta } from "@/lib/categories";
import bn from "@/messages/bn";
import CategoryClient from "../../../../products/category/[category]/CategoryClient";
import CategoryJsonLd from "../../../../products/category/[category]/CategoryJsonLd";

export { generateStaticParams } from "../../../../products/category/[category]/page";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};

  const name = bn.products[categoryMeta[category].nameKey];
  return {
    title: `${name} – উর্বর ন্যাচারাল`,
    description: `উর্বর ন্যাচারালের ${name} পরিসর দেখুন — সুস্থ মাটি ও উচ্চ ফলনের জন্য বিজ্ঞানভিত্তিক জৈব ও জৈবিক পণ্য।`,
    alternates: {
      canonical: `/bn/products/category/${slug}`,
      languages: {
        "en-IN": `/products/category/${slug}`,
        "bn-IN": `/bn/products/category/${slug}`,
        "x-default": `/products/category/${slug}`,
      },
    },
    openGraph: {
      title: `${name} – উর্বর ন্যাচারাল`,
      description: `উর্বর ন্যাচারালের ${name} পরিসর — বিজ্ঞানভিত্তিক জৈব ও জৈবিক কৃষি উপকরণ।`,
      locale: "bn_IN",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function BnCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  const name = bn.products[categoryMeta[category].nameKey];

  return (
    <>
      <CategoryJsonLd name={name} slug={slug} lang="bn" />
      <CategoryClient category={category} />
    </>
  );
}
