import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta({
    lang: "bn",
    path: "/",
    title: "উর্বর ন্যাচারাল – জৈব সার ও বায়ো-স্টিমুল্যান্ট",
    description:
      "মাটির স্বাস্থ্য পুনরুদ্ধার ও ফসলের ফলন বৃদ্ধির জন্য বিজ্ঞানভিত্তিক জৈব সার, বায়ো-স্টিমুল্যান্ট ও মাইক্রোনিউট্রিয়েন্ট। পশ্চিমবঙ্গ, ভারত।",
  }),
  ...(process.env.GSC_VERIFICATION
    ? { verification: { google: process.env.GSC_VERIFICATION } }
    : {}),
};

export default function BengaliRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="bn">{children}</SiteShell>;
}
