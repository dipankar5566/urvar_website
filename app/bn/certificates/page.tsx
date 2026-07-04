import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "সার্টিফিকেট ও স্বীকৃতি – উর্বর ন্যাচারাল",
  description:
    "উর্বর ন্যাচারাল DPIIT-স্বীকৃত Startup India কোম্পানি, MSME/Udyam নিবন্ধিত ও GST নিবন্ধিত। আমাদের সরকারি নিবন্ধনগুলি দেখুন।",
  alternates: {
    canonical: "/bn/certificates",
    languages: {
      "en-IN": "/certificates",
      "bn-IN": "/bn/certificates",
      "x-default": "/certificates",
    },
  },
  openGraph: {
    title: "সার্টিফিকেট ও স্বীকৃতি – উর্বর ন্যাচারাল",
    description:
      "উর্বর ন্যাচারাল DPIIT-স্বীকৃত Startup India কোম্পানি, MSME/Udyam নিবন্ধিত ও GST নিবন্ধিত। আমাদের সরকারি নিবন্ধনগুলি দেখুন।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../certificates/page";
