import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights – Urvar Natural Pvt. Ltd.",
  description:
    "Practical guides on soil health, crop nutrition, micronutrients and organic farming from the Urvar Natural agronomy team.",
  alternates: {
    canonical: "/blog",
    languages: {
      "en-IN": "/blog",
      "bn-IN": "/bn/blog",
      "x-default": "/blog",
    },
  },
  openGraph: {
    title: "Blog & Insights – Urvar Natural Pvt. Ltd.",
    description:
      "Practical guides on soil health, crop nutrition, micronutrients and organic farming from the Urvar Natural agronomy team.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
