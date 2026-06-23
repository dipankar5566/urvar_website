"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import { useLang } from "@/context/LangContext";
import products from "@/data/products";

export default function HomePage() {
  const { t } = useLang();
  const featured = products.slice(0, 4);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    {
      letter: "O",
      name: t.home.cat_organic_name,
      desc: t.home.cat_organic_desc,
      soon: false,
      bg: "#EFE6DA",
      labelColor: "#5c3d1e",
      descColor: "#7a5c40",
      decorColor: "rgba(122,82,48,0.13)",
      ctaColor: "#7A5230",
    },
    {
      letter: "B",
      name: t.home.cat_biostim_name,
      desc: t.home.cat_biostim_desc,
      soon: false,
      bg: "#0f3d28",
      labelColor: "#4ade80",
      descColor: "rgba(255,255,255,0.6)",
      decorColor: "rgba(255,255,255,0.07)",
      ctaColor: "#4ade80",
    },
    {
      letter: "M",
      name: t.home.cat_micro_name,
      desc: t.home.cat_micro_desc,
      soon: false,
      bg: "#f0f9f3",
      labelColor: "#104C36",
      descColor: "#3a6b50",
      decorColor: "rgba(0,146,83,0.11)",
      ctaColor: "#009253",
    },
    {
      letter: "F",
      name: t.home.cat_bio_name,
      desc: t.home.cat_bio_desc,
      soon: true,
      bg: "#f5f5f5",
      labelColor: "#999",
      descColor: "#b0b0b0",
      decorColor: "rgba(0,0,0,0.04)",
      ctaColor: "#999",
    },
  ];

  const why = [
    { num: "01", title: t.home.why_science_title, body: t.home.why_science_body },
    { num: "02", title: t.home.why_soil_title, body: t.home.why_soil_body },
    { num: "03", title: t.home.why_quality_title, body: t.home.why_quality_body },
    { num: "04", title: t.home.why_field_title, body: t.home.why_field_body },
  ];

  const faqs = [
    { q: t.home.faq_q1, a: t.home.faq_a1 },
    { q: t.home.faq_q2, a: t.home.faq_a2 },
    { q: t.home.faq_q3, a: t.home.faq_a3 },
    { q: t.home.faq_q4, a: t.home.faq_a4 },
  ];

  return (
    <>
      <Hero />
      <TrustBadges />

      {/* Categories */}
      <section className="bg-soft-cloud py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mx-auto mb-10 sm:mb-12 text-center">
            <p className="text-[11px] font-medium text-urvar-green tracking-[2px] uppercase mb-3">Our Range</p>
            <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px] leading-[1.1] mb-3">
              {t.home.categories_heading}
            </h2>
            <p className="text-mute text-[15px] leading-relaxed">{t.home.categories_sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="relative min-h-[210px] sm:min-h-[290px] p-7 sm:p-10 flex flex-col overflow-hidden"
                style={{ background: cat.bg }}
              >
                <span
                  className="absolute -right-3.5 -bottom-9 font-[family-name:var(--font-campaign)] leading-none pointer-events-none select-none text-[160px] sm:text-[220px]"
                  style={{ color: cat.decorColor, letterSpacing: "-6px" }}
                >
                  {cat.letter}
                </span>
                <h3
                  className="relative text-[11px] font-bold uppercase tracking-[2px] mb-4"
                  style={{ color: cat.labelColor }}
                >
                  {cat.name}
                </h3>
                <p
                  className="relative text-[15px] leading-relaxed flex-1 max-w-[380px]"
                  style={{ color: cat.descColor }}
                >
                  {cat.desc}
                </p>
                {cat.soon ? (
                  <div className="relative mt-7 inline-flex items-center gap-2 opacity-38">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cat.labelColor }} />
                    <span className="text-[10px] font-bold uppercase tracking-[2px]" style={{ color: cat.labelColor }}>
                      {t.home.coming_soon}
                    </span>
                  </div>
                ) : (
                  <Link
                    href="/products"
                    className="relative mt-7 inline-flex items-center gap-2 text-[13px] font-bold"
                    style={{ color: cat.ctaColor }}
                  >
                    {t.home.explore} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-canvas py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-9">
            <div>
              <p className="text-[11px] font-medium text-urvar-green tracking-[2px] uppercase mb-2.5">Featured</p>
              <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px] leading-[1.1]">
                {t.home.products_heading}
              </h2>
            </div>
            <Link
              href="/products"
              className="bg-ink text-white text-[13px] font-bold px-6 py-2.5 rounded-full whitespace-nowrap"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Urvar */}
      <section className="bg-[#0f3d28] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-14 border-b border-white/10 pb-8">
            <div>
              <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-3">The Difference</p>
              <h2 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[26px] sm:text-[32px] leading-[1.1]">
                {t.home.why_heading}
              </h2>
            </div>
            <p className="text-white/45 text-sm max-w-xs leading-relaxed">{t.home.why_sub}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((w) => (
              <div key={w.num} className="pl-5 border-l border-white/15">
                <div className="font-[family-name:var(--font-campaign)] text-urvar-green text-5xl sm:text-[80px] leading-none mb-4">
                  {w.num}
                </div>
                <h3 className="text-white text-xs font-bold uppercase tracking-[1.8px] mb-2.5">{w.title}</h3>
                <p className="text-white/52 text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer CTA */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch">
          <div className="flex-[1.2] min-w-0 p-8 sm:p-12 lg:p-20 lg:border-r border-white/10 border-b lg:border-b-0">
            <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-4.5">
              Partnership Opportunity
            </p>
            <h2 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[34px] sm:text-[50px] leading-[1.0] max-w-md mb-5">
              {t.home.dealer_heading}
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-sm mb-9">{t.home.dealer_sub}</p>
            <Button href="/dealers/become-a-distributor" variant="primary">
              {t.home.dealer_cta}
            </Button>
          </div>
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex border-b border-white/8">
              {[
                { v: "8+", l: "Products" },
                { v: "4+", l: "Districts" },
                { v: "WB", l: "Base State" },
              ].map((s, i) => (
                <div key={s.l} className={`flex-1 p-5 sm:p-7 ${i < 2 ? "border-r border-white/8" : ""}`}>
                  <div className="font-[family-name:var(--font-campaign)] text-3xl sm:text-[52px] text-white leading-none">
                    {s.v}
                  </div>
                  <div className="text-[10px] font-semibold text-white/30 tracking-[1.8px] uppercase mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col">
              {[t.home.dealer_b1, t.home.dealer_b2, t.home.dealer_b3].map((b) => (
                <div key={b} className="flex items-center gap-4 px-6 py-4.5 border-b border-white/6">
                  <svg width="14" height="14" fill="none" stroke="#4ade80" strokeWidth={2.5} viewBox="0 0 24 24" className="flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-white/70 text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-urvar-earth-light py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#d5ccbe]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-14 items-start lg:items-center">
          <div className="w-full lg:w-[440px] flex-shrink-0">
            <div className="relative h-72 sm:h-[400px]">
              <Image src="/images/farm3.jpg" alt="Urvar farm" fill sizes="(max-width: 1024px) 100vw, 440px" className="object-cover" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-urvar-earth tracking-[2px] uppercase mb-3.5">About Us</p>
            <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[26px] sm:text-[32px] leading-[1.1] mb-4.5">
              {t.home.about_heading}
            </h2>
            <p className="text-[#514e45] text-[15px] leading-loose mb-6">{t.home.about_body}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[t.trust.organic, t.trust.eco, t.trust.sustainable].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-urvar-earth/30 bg-white/55 px-3.5 py-1.5 text-xs font-semibold text-urvar-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button href="/about" variant="primary" className="!bg-urvar-dark hover:!bg-[#0c3a28]">
              {t.home.about_cta}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-canvas py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px] leading-[1.1] text-center mb-12">
            {t.home.faq_heading}
          </h2>
          <div className="border-t border-hairline">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-hairline">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-ink text-[15px] leading-snug flex-1">{f.q}</span>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#009253"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className={`flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="pb-5 -mt-1 text-mute text-sm leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual contact CTA */}
      <section className="bg-soft-cloud py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline">
          <div className="bg-canvas p-9">
            <h3 className="font-bold text-ink text-lg uppercase tracking-[0.02em] mb-2.5">{t.home.for_farmers}</h3>
            <p className="text-mute text-sm leading-relaxed mb-5.5">{t.home.for_farmers_sub}</p>
            <div className="flex gap-2.5 flex-wrap">
              <Button href="/contact" variant="primary">
                {t.home.contact_cta}
              </Button>
              <Button href="https://wa.me/919035708943" variant="secondary" target="_blank" rel="noopener noreferrer">
                {t.contact.whatsapp}
              </Button>
            </div>
          </div>
          <div className="bg-urvar-dark p-9">
            <h3 className="font-bold text-white text-lg uppercase tracking-[0.02em] mb-2.5">{t.home.for_dealers}</h3>
            <p className="text-white/62 text-sm leading-relaxed mb-5.5">{t.home.for_dealers_sub}</p>
            <Button href="/dealers/become-a-distributor" variant="onDark">
              {t.home.dealer_cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
