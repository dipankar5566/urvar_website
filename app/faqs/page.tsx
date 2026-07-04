"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import faqs, { faqGroupOrder } from "@/data/faqs";
import type { FaqGroup } from "@/data/faqs";

export default function FaqsPage() {
  const { t, lang, localize } = useLang();
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  const groupLabel: Record<FaqGroup, string> = {
    products: t.faqs.group_products,
    usage: t.faqs.group_usage,
    dealership: t.faqs.group_dealership,
    delivery: t.faqs.group_delivery,
  };

  return (
    <>
      <section className="bg-[#104C36] pt-12 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="text-[13px] text-white/55 mb-5" aria-label="Breadcrumb">
            <Link href={localize("/")} className="hover:text-white">
              {t.nav.home}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{t.faqs.heading}</span>
          </nav>
          <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[32px] sm:text-[44px] leading-[1.0] mb-3">
            {t.faqs.heading}
          </h1>
          <p className="max-w-2xl text-white/62 leading-relaxed">{t.faqs.sub}</p>
        </div>
      </section>

      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-10">
          {faqGroupOrder.map((group) => {
            const items = faqs.filter((f) => f.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group}>
                <h2 className="text-[11px] font-bold text-urvar-green uppercase tracking-[2px] mb-3">
                  {groupLabel[group]}
                </h2>
                <div className="border-t border-hairline">
                  {items.map((f) => {
                    const isOpen = open === f.id;
                    const content = lang === "bn" ? f.bn : f.en;
                    return (
                      <div key={f.id} className="border-b border-hairline">
                        <button
                          onClick={() => setOpen(isOpen ? null : f.id)}
                          className="w-full flex items-center justify-between gap-4 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-ink">{content.q}</span>
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="#009253"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        {isOpen && (
                          <p className="pb-4 -mt-1 text-mute leading-relaxed">{content.a}</p>
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
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[26px] sm:text-[32px]">{t.faqs.cta_heading}</h2>
          <p className="mt-2 text-neutral-600">{t.faqs.cta_sub}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={localize("/contact")} variant="primary">
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
