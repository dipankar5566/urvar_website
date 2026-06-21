import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads – Urvar Natural Pvt. Ltd.",
  description:
    "Download the Urvar Natural product catalogue, dealer kit and product technical datasheets (TDS), or request a copy on WhatsApp.",
  alternates: {
    canonical: "/resources/downloads",
  },
};

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
