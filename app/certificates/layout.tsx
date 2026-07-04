import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates & Recognitions – Urvar Natural Pvt. Ltd.",
  description:
    "Urvar Natural is a DPIIT-recognized Startup India company, MSME/Udyam registered and GST registered. View our government registrations and request documentation for dealership and B2B onboarding.",
  keywords:
    "DPIIT recognized startup, MSME registered fertilizer company, Udyam registration, Urvar Natural certificates",
  alternates: {
    canonical: "/certificates",
    languages: {
      "en-IN": "/certificates",
      "bn-IN": "/bn/certificates",
      "x-default": "/certificates",
    },
  },
  openGraph: {
    title: "Certificates & Recognitions – Urvar Natural Pvt. Ltd.",
    description:
      "Urvar Natural is a DPIIT-recognized Startup India company, MSME/Udyam registered and GST registered. View our government registrations and request documentation for dealership and B2B onboarding.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
