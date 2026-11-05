import faqs from "@/data/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/faqs",
  title: "FAQs – Urvar Natural Pvt. Ltd.",
  description:
    "Frequently asked questions about Urvar Natural's organic fertilizers, bio-stimulants and micronutrients — usage, dosage, dealership and delivery.",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.en.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.en.a,
    },
  })),
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
