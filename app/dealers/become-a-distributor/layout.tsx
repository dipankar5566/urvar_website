import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Distributor – Urvar Natural Pvt. Ltd.",
  description:
    "Partner with Urvar Natural — a fast-growing organic & biological agri-inputs brand. Attractive margins, marketing & field support, growing demand across West Bengal, Maharashtra, Karnataka and Uttar Pradesh. Apply for a dealership today.",
  keywords:
    "fertilizer dealership, biofertilizer distributorship, organic fertilizer dealership, agri input dealership West Bengal, Urvar Natural dealer",
};

export default function DealerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
