import { pageMeta } from "@/lib/seo";

export const metadata = {
  ...pageMeta({
    lang: "en",
    path: "/certificates",
    title: "Certificates & Recognitions – Urvar Natural Pvt. Ltd.",
    description:
      "Urvar Natural is DPIIT-recognized under Startup India, MSME/Udyam registered and GST registered. Request documents for dealership or B2B onboarding.",
  }),
  keywords:
    "DPIIT recognized startup, MSME registered fertilizer company, Udyam registration, Urvar Natural certificates",
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
