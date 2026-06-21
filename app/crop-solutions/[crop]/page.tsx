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
    },
  };
}

export default async function CropPage({ params }: Props) {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) notFound();

  return <CropClient slug={slug} />;
}
