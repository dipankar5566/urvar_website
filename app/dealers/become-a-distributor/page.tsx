"use client";

import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
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
      <Section bg="dark" className="!py-16 sm:!py-24">
        <div className="max-w-3xl">
          <Badge tone="green" className="mb-5">
            {t.dealer.eyebrow}
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t.dealer.heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-urvar-light/90 max-w-2xl">
            {t.dealer.subheading}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="#apply" variant="onDark" size="lg">
              {t.dealer.cta_apply}
            </Button>
            <Button
              href={WHATSAPP_HREF}
              variant="secondary"
              size="lg"
              className="!border-white !text-white hover:!bg-white hover:!text-urvar-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.dealer.cta_whatsapp}
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="white">
        <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark text-center">
          {t.dealer.benefits_heading}
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <Card key={b.title} interactive className="p-6">
              <div className="w-11 h-11 rounded-xl bg-urvar-light text-urvar-green flex items-center justify-center text-xl font-bold">
                {b.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-urvar-dark">{b.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{b.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who we're looking for */}
      <Section bg="earth">
        <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark text-center">
          {t.dealer.who_heading}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {who.map((w) => (
            <span
              key={w}
              className="bg-white border border-neutral-200 rounded-full px-5 py-2.5 text-sm font-medium text-urvar-earth shadow-e1"
            >
              {w}
            </span>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section bg="white">
        <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark text-center">
          {t.dealer.process_heading}
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.step} className="text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-urvar-green text-white flex items-center justify-center font-bold mx-auto sm:mx-0">
                {p.step}
              </div>
              <h3 className="mt-4 font-semibold text-urvar-dark">{p.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application form */}
      <Section bg="mint" id="apply">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark">
              {t.dealer.form_heading}
            </h2>
            <p className="mt-2 text-neutral-600">{t.dealer.form_sub}</p>
          </div>
          <Card className="mt-8 p-6 sm:p-8">
            <DealerEnquiryForm />
            <p className="mt-5 text-center text-sm text-neutral-500">
              {t.dealer.cta_whatsapp}:{" "}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-urvar-green font-semibold hover:underline"
              >
                +91 90357 08943
              </a>
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
