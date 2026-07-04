import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "প্রায়শই জিজ্ঞাসিত প্রশ্ন – উর্বর ন্যাচারাল",
  description:
    "উর্বর ন্যাচারালের জৈব সার, বায়ো-স্টিমুল্যান্ট ও মাইক্রোনিউট্রিয়েন্ট নিয়ে সাধারণ প্রশ্নের উত্তর — ব্যবহার, মাত্রা, ডিলারশিপ ও ডেলিভারি।",
  alternates: {
    canonical: "/bn/faqs",
    languages: {
      "en-IN": "/faqs",
      "bn-IN": "/bn/faqs",
      "x-default": "/faqs",
    },
  },
  openGraph: {
    title: "প্রায়শই জিজ্ঞাসিত প্রশ্ন – উর্বর ন্যাচারাল",
    description:
      "উর্বর ন্যাচারালের জৈব সার, বায়ো-স্টিমুল্যান্ট ও মাইক্রোনিউট্রিয়েন্ট নিয়ে সাধারণ প্রশ্নের উত্তর — ব্যবহার, মাত্রা, ডিলারশিপ ও ডেলিভারি।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../faqs/page";
