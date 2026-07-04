import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ফসল সমাধান – উর্বর ন্যাচারাল",
  description:
    "ধান, গম, সবজি, আলু, সরিষা ও ফল ফসলের জন্য ধাপে ধাপে জৈব পুষ্টি প্রোগ্রাম — কোন উর্বর পণ্য কখন প্রয়োগ করবেন জানুন।",
  alternates: {
    canonical: "/bn/crop-solutions",
    languages: {
      "en-IN": "/crop-solutions",
      "bn-IN": "/bn/crop-solutions",
      "x-default": "/crop-solutions",
    },
  },
  openGraph: {
    title: "ফসল সমাধান – উর্বর ন্যাচারাল",
    description:
      "ধান, গম, সবজি, আলু, সরিষা ও ফল ফসলের জন্য ধাপে ধাপে জৈব পুষ্টি প্রোগ্রাম — কোন উর্বর পণ্য কখন প্রয়োগ করবেন জানুন।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../crop-solutions/page";
