import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Urvar Natural Pvt. Ltd.",
  description:
    "Get in touch with Urvar Natural for product inquiries, bulk orders, or dealer partnerships. Call, WhatsApp, or send us a message.",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-IN": "/contact",
      "bn-IN": "/bn/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    title: "Contact Urvar Natural Pvt. Ltd.",
    description:
      "Reach out to Urvar Natural for organic fertilizer inquiries. Based in North 24 Parganas, West Bengal, India.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
