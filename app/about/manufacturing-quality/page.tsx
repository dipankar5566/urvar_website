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
      <section className="bg-[#104C36] pt-12 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="text-[13px] text-white/55 mb-5" aria-label="Breadcrumb">
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
          <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[32px] sm:text-[44px] leading-[1.0] mb-3">
            {t.mfg.heading}
          </h1>
          <p className="max-w-2xl text-white/62 leading-relaxed">{t.mfg.sub}</p>
        </div>
      </section>

      {/* Intro */}
      <Section bg="white">
        <p className="max-w-3xl text-lg text-neutral-700 leading-relaxed">{t.mfg.intro}</p>
      </Section>

      {/* Process */}
      <Section bg="earth">
        <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[26px] sm:text-[32px] mb-10">
          {t.mfg.process_heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <Card key={s.title} className="p-5">
              <div className="font-[family-name:var(--font-campaign)] text-urvar-green text-4xl leading-none">
                0{i + 1}
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
            <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[26px] sm:text-[32px]">
              {t.mfg.quality_heading}
            </h2>
            <ul className="mt-6 space-y-3">
              {qc.map((q) => (
                <li key={q} className="flex items-center gap-3">
                  <svg width="14" height="14" fill="none" stroke="#009253" strokeWidth={2.5} viewBox="0 0 24 24" className="flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
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
