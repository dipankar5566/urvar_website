import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnalyticsEvents from "@/components/AnalyticsEvents";

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
  metadataBase: new URL("https://urvarindia.com"),
  title: "Urvar Natural – Organic Fertilizer Manufacturer, West Bengal",
  description:
    "Official site of Urvar Natural Pvt. Ltd. — manufacturer of organic manures, PROM, bio-stimulants & micronutrients. Lab-tested, science-backed inputs trusted by farmers and distributors across India.",
  keywords: "organic fertilizer, vermicompost, biofertilizer, PROM, humic acid, West Bengal, Urvar Natural",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "bn-IN": "/bn/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Urvar Natural",
    locale: "en_IN",
    url: "/",
    title: "Urvar Natural – Organic Fertilizer Manufacturer, West Bengal",
    description:
      "Official site of Urvar Natural Pvt. Ltd. — manufacturer of organic manures, PROM, bio-stimulants & micronutrients. Lab-tested, science-backed inputs trusted by farmers and distributors across India.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Urvar Natural – Organic Fertilizer Manufacturer, West Bengal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urvar Natural – Organic Fertilizer Manufacturer, West Bengal",
    description:
      "Official site of Urvar Natural Pvt. Ltd. — manufacturer of organic manures, PROM, bio-stimulants & micronutrients. Lab-tested, science-backed inputs.",
    images: ["/og-image.jpg"],
  },
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
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LangProvider>
      </body>
    </html>
  );
}
