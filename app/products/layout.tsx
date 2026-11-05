import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/products",
  title: "Our Products – Urvar Natural Pvt. Ltd.",
  description:
    "Explore Urvar Natural's organic fertilizers and bio-stimulants: Vermicompost, PROM, Humic Acid, Zinc EDTA, Boron EDTA and more for sustainable farming.",
  ogTitle: "Organic Fertilizers & Bio-Stimulants – Urvar Natural",
  ogDescription:
    "High-quality organic manures, phosphate fertilizers, bio-stimulants, and micronutrients for every crop stage. Trusted by farmers in West Bengal.",
});

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
