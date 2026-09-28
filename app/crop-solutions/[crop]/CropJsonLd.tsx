import type { Crop, Lang } from "@/data/crops";
import en from "@/messages/en";
import bn from "@/messages/bn";
import { cropFaqs } from "@/lib/cropPage";

const BASE_URL = "https://urvarindia.com";

export default function CropJsonLd({ crop, lang }: { crop: Crop; lang: Lang }) {
  const t = lang === "bn" ? bn : en;
  const prefix = lang === "bn" ? "/bn" : "";
  const name = t.crops[crop.nameKey];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.nav.home, item: `${BASE_URL}${prefix}/` },
      { "@type": "ListItem", position: 2, name: t.crops.hub_heading, item: `${BASE_URL}${prefix}/crop-solutions` },
      { "@type": "ListItem", position: 3, name, item: `${BASE_URL}${prefix}/crop-solutions/${crop.slug}` },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cropFaqs(crop, lang, t).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
