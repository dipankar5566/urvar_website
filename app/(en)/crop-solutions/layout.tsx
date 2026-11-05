import { pageMeta } from "@/lib/seo";

export const metadata = {
  ...pageMeta({
    lang: "en",
    path: "/crop-solutions",
    title: "Crop Solutions – Urvar Natural Pvt. Ltd.",
    description:
      "Stage-by-stage organic nutrition guides for 13 crops, from rice and wheat to mango and tea, with Urvar doses per katha, bigha and acre.",
  }),
  keywords:
    "organic fertilizer for paddy, fertilizer for potato, micronutrients for wheat, nutrient schedule for mustard, crop nutrition program India",
};

export default function CropSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
