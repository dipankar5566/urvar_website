import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cropBySlug } from "@/data/crops";
import bn from "@/messages/bn";
import { cropMetaDescription } from "@/lib/cropPage";
import { pageMeta } from "@/lib/seo";
import CropClient from "../../../crop-solutions/[crop]/CropClient";
import CropJsonLd from "../../../crop-solutions/[crop]/CropJsonLd";

export { generateStaticParams } from "../../../crop-solutions/[crop]/page";

type Props = { params: Promise<{ crop: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) return {};

  return pageMeta({
    lang: "bn",
    path: `/crop-solutions/${slug}`,
    title: `${bn.crops[crop.nameKey]} সারের সময়সূচি | উর্বর ন্যাচারাল`,
    description: cropMetaDescription(crop, "bn", bn),
    image: crop.image.replace(/\.webp$/, ".jpg"),
  });
}

export default async function BnCropPage({ params }: Props) {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) notFound();

  return (
    <>
      <CropJsonLd crop={crop} lang="bn" />
      <CropClient slug={slug} />
    </>
  );
}
