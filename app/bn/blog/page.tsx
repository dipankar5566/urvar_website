import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ব্লগ ও ইনসাইট – উর্বর ন্যাচারাল",
  description:
    "মাটির স্বাস্থ্য, ফসলের পুষ্টি, মাইক্রোনিউট্রিয়েন্ট ও জৈব চাষ নিয়ে উর্বর ন্যাচারাল কৃষি টিমের ব্যবহারিক গাইড।",
  alternates: {
    canonical: "/bn/blog",
    languages: {
      "en-IN": "/blog",
      "bn-IN": "/bn/blog",
      "x-default": "/blog",
    },
  },
  openGraph: {
    title: "ব্লগ ও ইনসাইট – উর্বর ন্যাচারাল",
    description:
      "মাটির স্বাস্থ্য, ফসলের পুষ্টি, মাইক্রোনিউট্রিয়েন্ট ও জৈব চাষ নিয়ে উর্বর ন্যাচারাল কৃষি টিমের ব্যবহারিক গাইড।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../blog/page";
