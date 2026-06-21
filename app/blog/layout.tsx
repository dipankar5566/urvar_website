import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights – Urvar Natural Pvt. Ltd.",
  description:
    "Practical guides on soil health, crop nutrition, micronutrients and organic farming from the Urvar Natural agronomy team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
