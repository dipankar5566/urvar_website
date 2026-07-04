import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "উৎপাদন ও গুণমান – উর্বর ন্যাচারাল",
  description:
    "উর্বর ন্যাচারাল কীভাবে জৈব সার ও বায়ো-স্টিমুল্যান্ট তৈরি করে — কাঁচামাল সংগ্রহ, কম্পোস্টিং, ফর্মুলেশন, ব্যাচ গুণমান পরীক্ষা ও প্যাকেজিং।",
  alternates: {
    canonical: "/bn/about/manufacturing-quality",
    languages: {
      "en-IN": "/about/manufacturing-quality",
      "bn-IN": "/bn/about/manufacturing-quality",
      "x-default": "/about/manufacturing-quality",
    },
  },
  openGraph: {
    title: "উৎপাদন ও গুণমান – উর্বর ন্যাচারাল",
    description:
      "উর্বর ন্যাচারাল কীভাবে জৈব সার ও বায়ো-স্টিমুল্যান্ট তৈরি করে — কাঁচামাল সংগ্রহ, কম্পোস্টিং, ফর্মুলেশন, ব্যাচ গুণমান পরীক্ষা ও প্যাকেজিং।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../../about/manufacturing-quality/page";
