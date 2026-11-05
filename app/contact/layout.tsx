import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/contact",
  title: "Contact Us – Urvar Natural Pvt. Ltd.",
  description:
    "Get in touch with Urvar Natural for product inquiries, bulk orders, or dealer partnerships. Call, WhatsApp, or send us a message.",
  ogTitle: "Contact Urvar Natural Pvt. Ltd.",
  ogDescription:
    "Reach out to Urvar Natural for organic fertilizer inquiries. Based in North 24 Parganas, West Bengal, India.",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
