"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import faqs, { faqGroupOrder } from "@/data/faqs";
import type { FaqGroup } from "@/data/faqs";

export default function FaqsPage() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  const groupLabel: Record<FaqGroup, string> = {
    products: t.faqs.group_products,
    usage: t.faqs.group_usage,
    dealership: t.faqs.group_dealership,
    delivery: t.faqs.group_delivery,
  };

  return (
    <>
      <Section bg="dark" className="!py-12 sm:!py-16">
        <nav className="text-sm text-urvar-light/80 mb-5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{t.faqs.heading}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold">{t.faqs.heading}</h1>
        <p className="mt-4 max-w-2xl text-urvar-light/90 leading-relaxed">{t.faqs.sub}</p>
      </Section>

      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-10">
          {faqGroupOrder.map((group) => {
            const items = faqs.filter((f) => f.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group}>
                <h2 className="text-lg font-bold text-urvar-green uppercase tracking-wide mb-3">
                  {groupLabel[group]}
                </h2>
                <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                  {items.map((f) => {
                    const isOpen = open === f.id;
                    const content = lang === "bn" ? f.bn : f.en;
                    return (
                      <div key={f.id}>
                        <button
                          onClick={() => setOpen(isOpen ? null : f.id)}
                          className="w-full flex items-center justify-between gap-4 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-urvar-dark">{content.q}</span>
                          <span className={`text-urvar-green text-xl shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <p className="pb-4 -mt-1 text-neutral-600 leading-relaxed">{content.a}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section bg="mint">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-urvar-dark">{t.faqs.cta_heading}</h2>
          <p className="mt-2 text-neutral-600">{t.faqs.cta_sub}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="primary">
              {t.home.contact_cta}
            </Button>
            <Button
              href="https://wa.me/919035708943"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.whatsapp}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
