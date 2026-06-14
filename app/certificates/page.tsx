"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CertificatesPage() {
  const { t } = useLang();

  const certs = [
    { title: t.certificates.msme_title, body: t.certificates.msme_body, no: t.certificates.msme_no },
    { title: t.certificates.startup_title, body: t.certificates.startup_body, no: t.certificates.startup_no },
    { title: t.certificates.gst_title, body: t.certificates.gst_body, no: null },
  ];

  return (
    <>
      {/* Hero */}
      <Section bg="dark" className="!py-12 sm:!py-16">
        <nav className="text-sm text-urvar-light/80 mb-5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{t.certificates.heading}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold">{t.certificates.heading}</h1>
        <p className="mt-4 max-w-2xl text-urvar-light/90 leading-relaxed">{t.certificates.sub}</p>
      </Section>

      {/* Certificates grid */}
      <Section bg="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <Card key={c.title} className="p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-urvar-light text-urvar-green flex items-center justify-center font-bold text-lg">
                ★
              </div>
              <h3 className="mt-4 font-semibold text-lg text-urvar-dark">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">{c.body}</p>
              {c.no && (
                <p className="mt-3 font-mono text-sm text-urvar-green break-all">{c.no}</p>
              )}
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-urvar-light border-urvar-light">
          <p className="text-neutral-700">{t.certificates.note}</p>
          <div className="mt-5">
            <Button href="/contact" variant="primary">
              {t.certificates.cta}
            </Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
