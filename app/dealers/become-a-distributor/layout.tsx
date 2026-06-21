import type { Metadata } from "next";

const title = "Become a Distributor – Urvar Natural Pvt. Ltd.";
const description =
  "Partner with Urvar Natural — a fast-growing organic & biological agri-inputs brand. Attractive margins, marketing & field support, growing demand across West Bengal, Maharashtra, Karnataka and Uttar Pradesh. Apply for a dealership today.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "fertilizer dealership, biofertilizer distributorship, organic fertilizer dealership, agri input dealership West Bengal, Urvar Natural dealer",
  alternates: {
    canonical: "/dealers/become-a-distributor",
  },
  openGraph: {
    title,
    description,
    url: "/dealers/become-a-distributor",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://urvarindia.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Become a Distributor",
      item: "https://urvarindia.com/dealers/become-a-distributor",
    },
  ],
};

export default function DealerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
