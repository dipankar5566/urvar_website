"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import Button from "@/components/ui/Button";
import DealerEnquiryForm from "@/components/DealerEnquiryForm";

const WHATSAPP_HREF =
  "https://wa.me/919035708943?text=" +
  encodeURIComponent(
    "Hello Urvar Natural, I'm interested in becoming a dealer/distributor. My district is: "
  );

export default function BecomeADistributorPage() {
  const { t } = useLang();

  const benefits = [
    { title: t.dealer.benefit_margin_title, body: t.dealer.benefit_margin_body, icon: "₹" },
    { title: t.dealer.benefit_demand_title, body: t.dealer.benefit_demand_body, icon: "↑" },
    { title: t.dealer.benefit_support_title, body: t.dealer.benefit_support_body, icon: "◎" },
    { title: t.dealer.benefit_territory_title, body: t.dealer.benefit_territory_body, icon: "⬡" },
  ];

  const who = [
    t.dealer.who_dealers,
    t.dealer.who_distributors,
    t.dealer.who_fpos,
    t.dealer.who_retailers,
  ];

  const process = [
    { step: "1", title: t.dealer.process_apply, body: t.dealer.process_apply_body },
    { step: "2", title: t.dealer.process_verify, body: t.dealer.process_verify_body },
    { step: "3", title: t.dealer.process_onboard, body: t.dealer.process_onboard_body },
    { step: "4", title: t.dealer.process_sell, body: t.dealer.process_sell_body },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#0a2018]">
          <Image src="/images/farm1.jpg" alt="Urvar farm" fill sizes="100vw" className="object-cover opacity-35" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08140d]/95 via-[#08140d]/55 to-[#08140d]/70" />
        </div>
        <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-3.5">{t.dealer.eyebrow}</p>
          <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white leading-[1.0] max-w-2xl mb-4.5 text-[50px] sm:text-[92px]">
            {t.dealer.heading}
          </h1>
          <p className="text-white/62 text-base leading-relaxed max-w-lg mb-8">{t.dealer.subheading}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="#apply" variant="onDark" size="lg">
              {t.dealer.cta_apply}
            </Button>
            <Link
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-sm px-7 py-3.5 rounded-full border-[1.5px] border-white/40"
            >
              {t.dealer.cta_whatsapp}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-canvas py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px] text-center mb-12">
            {t.dealer.benefits_heading}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={b.title} className="border-t-2 border-urvar-green pt-5">
                <div className="font-[family-name:var(--font-campaign)] text-hairline text-5xl leading-none mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-ink text-[13px] uppercase tracking-[0.05em] mb-2.5">{b.title}</h3>
                <p className="text-mute text-[13px] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="bg-urvar-earth-light py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#d5ccbe]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[26px] sm:text-[32px] text-center mb-10">
            {t.dealer.who_heading}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {who.map((w) => (
              <span key={w} className="bg-white/55 border border-urvar-earth/30 rounded-full px-5 py-2.5 text-sm font-semibold text-urvar-dark">
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-canvas py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px] text-center mb-10">
            {t.dealer.process_heading}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-soft-cloud border border-hairline p-7">
                <div className="font-[family-name:var(--font-campaign)] text-urvar-green text-5xl leading-none mb-4">{p.step}</div>
                <h3 className="font-bold text-ink text-[13px] uppercase tracking-[0.05em] mb-2.5">{p.title}</h3>
                <p className="text-mute text-[13px] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="bg-soft-cloud py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px]">
              {t.dealer.form_heading}
            </h2>
            <p className="mt-2 text-mute">{t.dealer.form_sub}</p>
          </div>
          <div className="bg-canvas border border-hairline p-6 sm:p-10">
            <DealerEnquiryForm />
            <p className="mt-5 text-center text-sm text-mute">
              {t.dealer.cta_whatsapp}:{" "}
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-urvar-green font-semibold hover:underline">
                +91 90357 08943
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
