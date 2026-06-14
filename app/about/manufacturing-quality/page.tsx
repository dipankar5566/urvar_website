"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ManufacturingQualityPage() {
  const { t } = useLang();

  const steps = [
    { title: t.mfg.step1_title, body: t.mfg.step1_body },
    { title: t.mfg.step2_title, body: t.mfg.step2_body },
    { title: t.mfg.step3_title, body: t.mfg.step3_body },
    { title: t.mfg.step4_title, body: t.mfg.step4_body },
    { title: t.mfg.step5_title, body: t.mfg.step5_body },
  ];

  const qc = [t.mfg.qc1, t.mfg.qc2, t.mfg.qc3, t.mfg.qc4];

  return (
    <>
      {/* Hero */}
      <Section bg="dark" className="!py-12 sm:!py-16">
        <nav className="text-sm text-urvar-light/80 mb-5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <Link href="/about" className="hover:text-white">
            {t.nav.about}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{t.mfg.heading}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold">{t.mfg.heading}</h1>
        <p className="mt-4 max-w-2xl text-urvar-light/90 leading-relaxed">{t.mfg.sub}</p>
      </Section>

      {/* Intro */}
      <Section bg="white">
        <p className="max-w-3xl text-lg text-neutral-700 leading-relaxed">{t.mfg.intro}</p>
      </Section>

      {/* Process */}
      <Section bg="earth">
        <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark mb-10">{t.mfg.process_heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <Card key={s.title} className="p-5">
              <div className="w-10 h-10 rounded-full bg-urvar-green text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-urvar-dark">{s.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{s.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Quality commitment */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark">{t.mfg.quality_heading}</h2>
            <ul className="mt-6 space-y-3">
              {qc.map((q) => (
                <li key={q} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-urvar-light text-urvar-green flex items-center justify-center text-sm font-bold shrink-0">
                    ✓
                  </span>
                  <span className="text-neutral-700">{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="p-8 bg-urvar-light border-urvar-light">
            <h3 className="text-xl font-bold text-urvar-dark">{t.mfg.cta_heading}</h3>
            <p className="mt-2 text-neutral-600">{t.mfg.cta_sub}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="primary">
                {t.home.contact_cta}
              </Button>
              <Button href="/certificates" variant="secondary">
                {t.certificates.heading}
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
