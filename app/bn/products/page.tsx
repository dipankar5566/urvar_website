import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "আমাদের পণ্য – উর্বর ন্যাচারাল",
  description:
    "উর্বর ন্যাচারালের জৈব সার ও বায়ো-স্টিমুল্যান্টের পরিসর দেখুন — ভার্মিকম্পোস্ট, PROM, হিউমিক অ্যাসিড, জিঙ্ক EDTA, বোরন EDTA এবং আরও অনেক কিছু।",
  alternates: {
    canonical: "/bn/products",
    languages: {
      "en-IN": "/products",
      "bn-IN": "/bn/products",
      "x-default": "/products",
    },
  },
  openGraph: {
    title: "আমাদের পণ্য – উর্বর ন্যাচারাল",
    description:
      "উর্বর ন্যাচারালের জৈব সার ও বায়ো-স্টিমুল্যান্টের পরিসর দেখুন — ভার্মিকম্পোস্ট, PROM, হিউমিক অ্যাসিড, জিঙ্ক EDTA, বোরন EDTA এবং আরও অনেক কিছু।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../products/page";
