import { pageMeta } from "@/lib/seo";

export const metadata = {
  ...pageMeta({
    lang: "en",
    path: "/dealers/become-a-distributor",
    title: "Urvar Natural Dealership – Apply for Distributorship",
    description:
      "Become an Urvar Natural distributor: strong margins, marketing support and field training. Territories open in West Bengal, Maharashtra, Karnataka and UP.",
  }),
  keywords:
    "fertilizer dealership, biofertilizer distributorship, organic fertilizer dealership, agri input dealership West Bengal, Urvar Natural dealer",
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
