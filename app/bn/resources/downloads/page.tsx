import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ডাউনলোড – উর্বর ন্যাচারাল",
  description:
    "উর্বর ন্যাচারালের পণ্য ক্যাটালগ, ডিলার কিট ও টেকনিক্যাল ডেটাশিট (TDS) ডাউনলোড করুন, অথবা WhatsApp-এ কপি চান।",
  alternates: {
    canonical: "/bn/resources/downloads",
    languages: {
      "en-IN": "/resources/downloads",
      "bn-IN": "/bn/resources/downloads",
      "x-default": "/resources/downloads",
    },
  },
  openGraph: {
    title: "ডাউনলোড – উর্বর ন্যাচারাল",
    description:
      "উর্বর ন্যাচারালের পণ্য ক্যাটালগ, ডিলার কিট ও টেকনিক্যাল ডেটাশিট (TDS) ডাউনলোড করুন, অথবা WhatsApp-এ কপি চান।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../../resources/downloads/page";
