import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urvarindia.com"),
  title: "Urvar Natural – Organic Fertilizers & Bio-Stimulants",
  description:
    "Urvar Natural Pvt. Ltd. provides science-driven organic fertilizers and bio-stimulants to restore soil health and boost crop productivity. Based in West Bengal, India.",
  keywords: "organic fertilizer, vermicompost, biofertilizer, PROM, humic acid, West Bengal, Urvar Natural",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-90357-08943",
    contactType: "sales",
    areaServed: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${raleway.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
