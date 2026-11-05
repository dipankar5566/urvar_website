import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PublicChrome from "@/components/PublicChrome";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import { bebasNeue, inter } from "@/lib/fonts";
import { SITE_URL, type Lang } from "@/lib/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Urvar Natural Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Urvar Natural Pvt. Ltd. provides science-driven organic fertilizers, bio-stimulants and micronutrients to restore soil health and boost crop productivity.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sewli, Telenipara, Bandipara",
    addressRegion: "West Bengal",
    postalCode: "700121",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "State", name: "West Bengal" },
    { "@type": "Country", name: "India" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-90357-08943",
    contactType: "sales",
    areaServed: "IN",
  },
};

// Shared by the two root layouts (app/(en) and app/bn) so each can set <html lang>.
export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`h-full ${bebasNeue.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <GoogleAnalytics />
        <AnalyticsEvents />
        <LangProvider>
          <PublicChrome>
            <Navbar />
          </PublicChrome>
          <main className="flex-1">{children}</main>
          <PublicChrome>
            <Footer />
            <WhatsAppButton />
          </PublicChrome>
        </LangProvider>
      </body>
    </html>
  );
}
