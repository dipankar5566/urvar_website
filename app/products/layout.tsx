import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products – Urvar Natural Pvt. Ltd.",
  description:
    "Explore Urvar Natural's range of organic fertilizers and bio-stimulants — Vermicompost, PROM, Humic Acid, Zinc EDTA, Boron EDTA, and more for sustainable farming.",
  alternates: {
    canonical: "/products",
    languages: {
      "en-IN": "/products",
      "bn-IN": "/bn/products",
      "x-default": "/products",
    },
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    title: "Organic Fertilizers & Bio-Stimulants – Urvar Natural",
    description:
      "High-quality organic manures, phosphate fertilizers, bio-stimulants, and micronutrients for every crop stage. Trusted by farmers in West Bengal.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
