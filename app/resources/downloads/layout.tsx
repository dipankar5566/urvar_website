import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads – Urvar Natural Pvt. Ltd.",
  description:
    "Download the Urvar Natural product catalogue, dealer kit and product technical datasheets (TDS), or request a copy on WhatsApp.",
  alternates: {
    canonical: "/resources/downloads",
    languages: {
      "en-IN": "/resources/downloads",
      "bn-IN": "/bn/resources/downloads",
      "x-default": "/resources/downloads",
    },
  },
  openGraph: {
    title: "Downloads – Urvar Natural Pvt. Ltd.",
    description:
      "Download the Urvar Natural product catalogue, dealer kit and product technical datasheets (TDS), or request a copy on WhatsApp.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
