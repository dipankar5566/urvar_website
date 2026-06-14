import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crop Solutions – Urvar Natural Pvt. Ltd.",
  description:
    "Stage-by-stage organic nutrition programs for rice, wheat, vegetables, potato, mustard and fruit crops. See which Urvar products to apply and when for healthier soil and higher yields.",
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
