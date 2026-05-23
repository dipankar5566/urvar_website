import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Urvar Natural Pvt. Ltd.",
  description:
    "Learn about Urvar Natural Pvt. Ltd. — a West Bengal-based organic fertilizer company founded in 2023, dedicated to sustainable farming and soil health restoration.",
  openGraph: {
    title: "About Urvar Natural Pvt. Ltd.",
    description:
      "Founded in 2023 in West Bengal, Urvar Natural specializes in high-quality organic fertilizers and bio-stimulants. MSME and Startup India certified.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
