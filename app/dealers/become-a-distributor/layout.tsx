import type { Metadata } from "next";

const title = "Urvar Natural Dealership – Apply for Distributorship";
const description =
  "Become an Urvar Natural distributor: attractive margins, marketing support & field training on a fast-growing organic fertilizer brand. Territories open in West Bengal, Maharashtra, Karnataka & UP — apply in 2 minutes.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "fertilizer dealership, biofertilizer distributorship, organic fertilizer dealership, agri input dealership West Bengal, Urvar Natural dealer",
  alternates: {
    canonical: "/dealers/become-a-distributor",
    languages: {
      "en-IN": "/dealers/become-a-distributor",
      "bn-IN": "/bn/dealers/become-a-distributor",
      "x-default": "/dealers/become-a-distributor",
    },
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
