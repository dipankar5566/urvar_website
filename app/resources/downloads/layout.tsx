import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/resources/downloads",
  title: "Downloads – Urvar Natural Pvt. Ltd.",
  description:
    "Download the Urvar Natural product catalogue, dealer kit and product technical datasheets (TDS), or request a copy on WhatsApp.",
});

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
