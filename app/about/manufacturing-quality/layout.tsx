import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Quality – Urvar Natural Pvt. Ltd.",
  description:
    "How Urvar Natural makes its organic fertilizers and bio-stimulants — sourcing, composting, formulation, batch quality testing, packaging and dispatch — for consistent, field-reliable performance.",
  keywords:
    "organic fertilizer manufacturing, fertilizer quality control, bio-stimulant production, Urvar Natural quality",
  alternates: {
    canonical: "/about/manufacturing-quality",
  },
};

export default function MfgLayout({ children }: { children: React.ReactNode }) {
  return children;
}
