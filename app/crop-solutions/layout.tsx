import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crop Solutions – Urvar Natural Pvt. Ltd.",
  description:
    "Stage-by-stage organic nutrition guides for rice, wheat, potato, mustard and vegetables, with timing from agricultural-university research and Urvar doses per katha, bigha and acre.",
  keywords:
    "organic fertilizer for paddy, fertilizer for potato, micronutrients for wheat, nutrient schedule for mustard, crop nutrition program India",
  alternates: {
    canonical: "/crop-solutions",
    languages: {
      "en-IN": "/crop-solutions",
      "bn-IN": "/bn/crop-solutions",
      "x-default": "/crop-solutions",
    },
  },
  openGraph: {
    title: "Crop Solutions – Urvar Natural Pvt. Ltd.",
    description:
      "Stage-by-stage organic nutrition guides for rice, wheat, potato, mustard and vegetables, with timing from agricultural-university research and Urvar doses per katha, bigha and acre.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function CropSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
