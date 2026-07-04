import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Quality – Urvar Natural Pvt. Ltd.",
  description:
    "How Urvar Natural makes its organic fertilizers and bio-stimulants — sourcing, composting, formulation, batch quality testing, packaging and dispatch — for consistent, field-reliable performance.",
  keywords:
    "organic fertilizer manufacturing, fertilizer quality control, bio-stimulant production, Urvar Natural quality",
  alternates: {
    canonical: "/about/manufacturing-quality",
    languages: {
      "en-IN": "/about/manufacturing-quality",
      "bn-IN": "/bn/about/manufacturing-quality",
      "x-default": "/about/manufacturing-quality",
    },
  },
  openGraph: {
    title: "Manufacturing & Quality – Urvar Natural Pvt. Ltd.",
    description:
      "How Urvar Natural makes its organic fertilizers and bio-stimulants — sourcing, composting, formulation, batch quality testing, packaging and dispatch — for consistent, field-reliable performance.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function MfgLayout({ children }: { children: React.ReactNode }) {
  return children;
}
