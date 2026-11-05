import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta({
    lang: "en",
    path: "/",
    title: "Urvar Natural – Organic Fertilizer Manufacturer, West Bengal",
    description:
      "Urvar Natural makes organic manures, PROM, bio-stimulants and micronutrients in West Bengal: lab-tested inputs trusted by farmers and distributors.",
  }),
  keywords: "organic fertilizer, vermicompost, biofertilizer, PROM, humic acid, West Bengal, Urvar Natural",
  ...(process.env.GSC_VERIFICATION
    ? { verification: { google: process.env.GSC_VERIFICATION } }
    : {}),
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
