import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "উর্বর ন্যাচারাল সম্পর্কে – জৈব সার প্রস্তুতকারক",
  description:
    "২০২৩ সালে প্রতিষ্ঠিত পশ্চিমবঙ্গভিত্তিক জৈব সার কোম্পানি উর্বর ন্যাচারাল — টেকসই কৃষি ও মাটির স্বাস্থ্য পুনরুদ্ধারে নিবেদিত। MSME ও Startup India স্বীকৃত।",
  alternates: {
    canonical: "/bn/about",
    languages: {
      "en-IN": "/about",
      "bn-IN": "/bn/about",
      "x-default": "/about",
    },
  },
  openGraph: {
    title: "উর্বর ন্যাচারাল সম্পর্কে – জৈব সার প্রস্তুতকারক",
    description:
      "২০২৩ সালে প্রতিষ্ঠিত পশ্চিমবঙ্গভিত্তিক জৈব সার কোম্পানি উর্বর ন্যাচারাল — টেকসই কৃষি ও মাটির স্বাস্থ্য পুনরুদ্ধারে নিবেদিত। MSME ও Startup India স্বীকৃত।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../about/page";
