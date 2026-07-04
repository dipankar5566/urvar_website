import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "যোগাযোগ করুন – উর্বর ন্যাচারাল",
  description:
    "পণ্য সম্পর্কে জিজ্ঞাসা, বাল্ক অর্ডার বা ডিলারশিপের জন্য উর্বর ন্যাচারালের সাথে যোগাযোগ করুন। ফোন, WhatsApp বা মেসেজ পাঠান।",
  alternates: {
    canonical: "/bn/contact",
    languages: {
      "en-IN": "/contact",
      "bn-IN": "/bn/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    title: "যোগাযোগ করুন – উর্বর ন্যাচারাল",
    description:
      "পণ্য সম্পর্কে জিজ্ঞাসা, বাল্ক অর্ডার বা ডিলারশিপের জন্য উর্বর ন্যাচারালের সাথে যোগাযোগ করুন। ফোন, WhatsApp বা মেসেজ পাঠান।",
    locale: "bn_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export { default } from "../../contact/page";
