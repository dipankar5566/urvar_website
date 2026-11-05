import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/blog",
  title: "Blog & Insights – Urvar Natural Pvt. Ltd.",
  description:
    "Practical guides on soil health, crop nutrition, micronutrients and organic farming from the Urvar Natural agronomy team.",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
