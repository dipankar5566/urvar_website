import type { Metadata } from "next";
import { notFound } from "next/navigation";
import crops, { cropBySlug } from "@/data/crops";
import en from "@/messages/en";
import CropClient from "./CropClient";

type Props = { params: Promise<{ crop: string }> };

export function generateStaticParams() {
  return crops.map((c) => ({ crop: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) return {};

  const name = en.crops[crop.nameKey];
  return {
    title: `${name} Crop Solution – Urvar Natural Pvt. Ltd.`,
    description: en.crops[crop.introKey],
    alternates: {
      canonical: `/crop-solutions/${slug}`,
      languages: {
        "en-IN": `/crop-solutions/${slug}`,
        "bn-IN": `/bn/crop-solutions/${slug}`,
        "x-default": `/crop-solutions/${slug}`,
      },
    },
    openGraph: {
      title: `${name} Crop Solution – Urvar Natural`,
      description: en.crops[crop.introKey],
      images: [{ url: crop.image.replace(/\.webp$/, ".jpg") }],
    },
  };
}

export default async function CropPage({ params }: Props) {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) notFound();

  const name = en.crops[crop.nameKey];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urvarindia.com/" },
      { "@type": "ListItem", position: 2, name: "Crop Solutions", item: "https://urvarindia.com/crop-solutions" },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `https://urvarindia.com/crop-solutions/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CropClient slug={slug} />
    </>
  );
}
