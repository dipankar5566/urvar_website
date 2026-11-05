import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/about",
  title: "About Us – Urvar Natural Pvt. Ltd.",
  description:
    "Urvar Natural Pvt. Ltd. is a West Bengal organic fertilizer company, founded in 2023 and dedicated to sustainable farming and restoring soil health.",
  ogTitle: "About Urvar Natural Pvt. Ltd.",
  ogDescription:
    "Founded in 2023 in West Bengal, Urvar Natural specializes in high-quality organic fertilizers and bio-stimulants. MSME and Startup India certified.",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
