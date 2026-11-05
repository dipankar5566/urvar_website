import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCategories, categoryBySlug, categoryMeta } from "@/lib/categories";
import { brandTitle, pageMeta } from "@/lib/seo";
import CategoryClient from "./CategoryClient";
import CategoryJsonLd from "./CategoryJsonLd";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return allCategories.map((c) => ({ category: categoryMeta[c].slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};

  return pageMeta({
    lang: "en",
    path: `/products/category/${slug}`,
    title: brandTitle(category, "en"),
    description: `Explore Urvar Natural's range of ${category.toLowerCase()} — science-driven organic and biological inputs for healthier soil and higher yields.`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  return (
    <>
      <CategoryJsonLd name={category} slug={slug} lang="en" />
      <CategoryClient category={category} />
    </>
  );
}
