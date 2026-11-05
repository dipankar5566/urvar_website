import type { Metadata } from "next";
import { notFound } from "next/navigation";
import crops, { cropBySlug } from "@/data/crops";
import en from "@/messages/en";
import { cropMetaDescription } from "@/lib/cropPage";
import { pageMeta } from "@/lib/seo";
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

  return pageMeta({
    lang: "en",
    path: `/crop-solutions/${slug}`,
    title: `${en.crops[crop.nameKey]} Fertilizer Schedule | Urvar Natural`,
    description: cropMetaDescription(crop, "en", en),
    image: crop.image.replace(/\.webp$/, ".jpg"),
  });
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
