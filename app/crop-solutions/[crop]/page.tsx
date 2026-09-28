import type { Metadata } from "next";
import { notFound } from "next/navigation";
import crops, { cropBySlug } from "@/data/crops";
import en from "@/messages/en";
import CropClient from "./CropClient";
import CropJsonLd from "./CropJsonLd";

type Props = { params: Promise<{ crop: string }> };

export function generateStaticParams() {
  return crops.map((c) => ({ crop: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) return {};

  const name = en.crops[crop.nameKey];
  const title = `${name} Organic Fertilizer Schedule – Stage-wise Guide | Urvar Natural`;
  const description = `${en.crops[crop.introKey]} Stage timing from agricultural-university research, with Urvar doses per katha, bigha and acre.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/crop-solutions/${slug}`,
      languages: {
        "en-IN": `/crop-solutions/${slug}`,
        "bn-IN": `/bn/crop-solutions/${slug}`,
        "x-default": `/crop-solutions/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: crop.image.replace(/\.webp$/, ".jpg") }],
    },
  };
}

export default async function CropPage({ params }: Props) {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) notFound();

  return (
    <>
      <CropJsonLd crop={crop} lang="en" />
      <CropClient slug={slug} />
    </>
  );
}
