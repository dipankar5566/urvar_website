import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cropBySlug } from "@/data/crops";
import bn from "@/messages/bn";
import CropClient from "../../../crop-solutions/[crop]/CropClient";
import CropJsonLd from "../../../crop-solutions/[crop]/CropJsonLd";

export { generateStaticParams } from "../../../crop-solutions/[crop]/page";

type Props = { params: Promise<{ crop: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) return {};

  const name = bn.crops[crop.nameKey];
  const title = `${name} জৈব সারের সময়সূচি – ধাপে ধাপে নির্দেশিকা | উর্বর ন্যাচারাল`;
  const description = `${bn.crops[crop.introKey]} কৃষি বিশ্ববিদ্যালয়ের গবেষণা থেকে ধাপের সময়, সঙ্গে প্রতি কাঠা, বিঘা ও একরে উর্বরের মাত্রা।`;
  return {
    title,
    description,
    alternates: {
      canonical: `/bn/crop-solutions/${slug}`,
      languages: {
        "en-IN": `/crop-solutions/${slug}`,
        "bn-IN": `/bn/crop-solutions/${slug}`,
        "x-default": `/crop-solutions/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      locale: "bn_IN",
      images: [{ url: crop.image.replace(/\.webp$/, ".jpg") }],
    },
  };
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
