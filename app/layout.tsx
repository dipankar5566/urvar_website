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
  title: "Urvar Natural – Organic Fertilizers & Bio-Stimulants",
  description:
    "Urvar Natural Pvt. Ltd. provides science-driven organic fertilizers and bio-stimulants to restore soil health and boost crop productivity. Based in West Bengal, India.",
  keywords: "organic fertilizer, vermicompost, biofertilizer, PROM, humic acid, West Bengal, Urvar Natural",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${raleway.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
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
