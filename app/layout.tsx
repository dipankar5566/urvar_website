import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PublicChrome from "@/components/PublicChrome";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import { pageMeta, SITE_URL } from "@/lib/seo";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-campaign",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta({
    lang: "en",
    path: "/",
    title: "Urvar Natural – Organic Fertilizer Manufacturer, West Bengal",
    description:
      "Urvar Natural makes organic manures, PROM, bio-stimulants and micronutrients in West Bengal: lab-tested inputs trusted by farmers and distributors.",
  }),
  keywords: "organic fertilizer, vermicompost, biofertilizer, PROM, humic acid, West Bengal, Urvar Natural",
  ...(process.env.GSC_VERIFICATION
    ? { verification: { google: process.env.GSC_VERIFICATION } }
    : {}),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Urvar Natural Pvt. Ltd.",
  url: "https://urvarindia.com",
  logo: "https://urvarindia.com/logo.svg",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${bebasNeue.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
