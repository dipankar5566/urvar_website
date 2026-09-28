import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ফসল সমাধান – উর্বর ন্যাচারাল",
  description:
    "ধান, গম, আলু, সরিষা ও সবজির জন্য ধাপে ধাপে জৈব পুষ্টি নির্দেশিকা — কৃষি বিশ্ববিদ্যালয়ের গবেষণা থেকে সময়, সঙ্গে প্রতি কাঠা, বিঘা ও একরে উর্বরের মাত্রা।",
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
      "ধান, গম, আলু, সরিষা ও সবজির জন্য ধাপে ধাপে জৈব পুষ্টি নির্দেশিকা — কৃষি বিশ্ববিদ্যালয়ের গবেষণা থেকে সময়, সঙ্গে প্রতি কাঠা, বিঘা ও একরে উর্বরের মাত্রা।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../crop-solutions/page";
