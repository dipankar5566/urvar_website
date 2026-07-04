import type { Metadata } from "next";
import { cropBySlug } from "@/data/crops";
import bn from "@/messages/bn";

export { default, generateStaticParams } from "../../../crop-solutions/[crop]/page";

type Props = { params: Promise<{ crop: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { crop: slug } = await params;
  const crop = cropBySlug(slug);
  if (!crop) return {};

  const name = bn.crops[crop.nameKey];
  return {
    title: `${name} ফসল সমাধান – উর্বর ন্যাচারাল`,
    description: bn.crops[crop.introKey],
    alternates: {
      canonical: `/bn/crop-solutions/${slug}`,
      languages: {
        "en-IN": `/crop-solutions/${slug}`,
        "bn-IN": `/bn/crop-solutions/${slug}`,
        "x-default": `/crop-solutions/${slug}`,
      },
    },
    openGraph: {
      title: `${name} ফসল সমাধান – উর্বর ন্যাচারাল`,
      description: bn.crops[crop.introKey],
      locale: "bn_IN",
      images: [{ url: crop.image.replace(/\.webp$/, ".jpg") }],
    },
  };
}
