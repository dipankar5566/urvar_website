const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "হোম", item: "https://urvarindia.com/bn/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "ডিস্ট্রিবিউটর হোন",
      item: "https://urvarindia.com/bn/dealers/become-a-distributor",
    },
  ],
};

export default function BnDealerLayout({ children }: { children: React.ReactNode }) {
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
