import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCategories, categoryBySlug, categoryMeta } from "@/lib/categories";
import CategoryClient from "./CategoryClient";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return allCategories.map((c) => ({ category: categoryMeta[c].slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category} – Urvar Natural Pvt. Ltd.`,
    description: `Explore Urvar Natural's range of ${category.toLowerCase()} — science-driven organic and biological inputs for healthier soil and higher yields.`,
    alternates: {
      canonical: `/products/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urvarindia.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://urvarindia.com/products" },
      {
        "@type": "ListItem",
        position: 3,
        name: category,
        item: `https://urvarindia.com/products/category/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CategoryClient category={category} />
    </>
  );
}
