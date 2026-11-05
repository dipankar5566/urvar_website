import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryBySlug, categoryMeta } from "@/lib/categories";
import bn from "@/messages/bn";
import { brandTitle, pageMeta } from "@/lib/seo";
import CategoryClient from "@/app/(en)/products/category/[category]/CategoryClient";
import CategoryJsonLd from "@/app/(en)/products/category/[category]/CategoryJsonLd";

export { generateStaticParams } from "@/app/(en)/products/category/[category]/page";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};

  const name = bn.products[categoryMeta[category].nameKey];
  return pageMeta({
    lang: "bn",
    path: `/products/category/${slug}`,
    title: brandTitle(name, "bn"),
    description: `উর্বর ন্যাচারালের ${name} পরিসর দেখুন — সুস্থ মাটি ও উচ্চ ফলনের জন্য বিজ্ঞানভিত্তিক জৈব ও জৈবিক পণ্য।`,
    ogDescription: `উর্বর ন্যাচারালের ${name} পরিসর — বিজ্ঞানভিত্তিক জৈব ও জৈবিক কৃষি উপকরণ।`,
  });
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
