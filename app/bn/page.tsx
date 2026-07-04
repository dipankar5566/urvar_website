import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "উর্বর ন্যাচারাল – জৈব সার ও বায়ো-স্টিমুল্যান্ট",
  description:
    "মাটির স্বাস্থ্য পুনরুদ্ধার ও ফসলের ফলন বৃদ্ধির জন্য বিজ্ঞানভিত্তিক জৈব সার, বায়ো-স্টিমুল্যান্ট ও মাইক্রোনিউট্রিয়েন্ট। পশ্চিমবঙ্গ, ভারত।",
  alternates: {
    canonical: "/bn/",
    languages: {
      "en-IN": "/",
      "bn-IN": "/bn/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "উর্বর ন্যাচারাল – জৈব সার ও বায়ো-স্টিমুল্যান্ট",
    description:
      "মাটির স্বাস্থ্য পুনরুদ্ধার ও ফসলের ফলন বৃদ্ধির জন্য বিজ্ঞানভিত্তিক জৈব সার, বায়ো-স্টিমুল্যান্ট ও মাইক্রোনিউট্রিয়েন্ট। পশ্চিমবঙ্গ, ভারত।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../page";
