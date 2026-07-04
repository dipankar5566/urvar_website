import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ডিলার / ডিস্ট্রিবিউটর হোন – উর্বর ন্যাচারাল",
  description:
    "ভারতের উদীয়মান জৈব কৃষি ব্র্যান্ডের সাথে আপনার ব্যবসা বাড়ান। উচ্চ মার্জিন, বাস্তব সহায়তা — আজই ডিলারশিপের জন্য আবেদন করুন।",
  alternates: {
    canonical: "/bn/dealers/become-a-distributor",
    languages: {
      "en-IN": "/dealers/become-a-distributor",
      "bn-IN": "/bn/dealers/become-a-distributor",
      "x-default": "/dealers/become-a-distributor",
    },
  },
  openGraph: {
    title: "ডিলার / ডিস্ট্রিবিউটর হোন – উর্বর ন্যাচারাল",
    description:
      "ভারতের উদীয়মান জৈব কৃষি ব্র্যান্ডের সাথে আপনার ব্যবসা বাড়ান। উচ্চ মার্জিন, বাস্তব সহায়তা — আজই ডিলারশিপের জন্য আবেদন করুন।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../../dealers/become-a-distributor/page";
