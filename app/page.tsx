"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProductCard from "@/components/ProductCard";
import CropStageSection from "@/components/CropStageSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useLang } from "@/context/LangContext";
import products from "@/data/products";

export default function HomePage() {
  const { t } = useLang();
  const featured = products.slice(0, 4);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    { name: t.home.cat_organic_name, desc: t.home.cat_organic_desc, href: "/products", tone: "bg-urvar-earth-light text-urvar-earth", soon: false },
    { name: t.home.cat_biostim_name, desc: t.home.cat_biostim_desc, href: "/products", tone: "bg-urvar-light text-urvar-green", soon: false },
    { name: t.home.cat_micro_name, desc: t.home.cat_micro_desc, href: "/products", tone: "bg-urvar-leaf/15 text-urvar-dark", soon: false },
    { name: t.home.cat_bio_name, desc: t.home.cat_bio_desc, href: "/products", tone: "bg-urvar-dark/10 text-urvar-dark", soon: true },
  ];

  const why = [
    { title: t.home.why_science_title, body: t.home.why_science_body },
    { title: t.home.why_soil_title, body: t.home.why_soil_body },
    { title: t.home.why_quality_title, body: t.home.why_quality_body },
    { title: t.home.why_field_title, body: t.home.why_field_body },
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

      {/* Product categories */}
      <Section bg="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark">{t.home.categories_heading}</h2>
          <p className="mt-3 text-neutral-600">{t.home.categories_sub}</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <Card key={c.name} interactive={!c.soon} className="p-6 flex flex-col">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${c.tone}`}>
                {c.name.charAt(0)}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-urvar-dark">{c.name}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">{c.desc}</p>
              {c.soon ? (
                <span className="mt-4 inline-block text-xs font-semibold text-neutral-400">{t.home.coming_soon}</span>
              ) : (
                <Link href={c.href} className="mt-4 inline-flex items-center gap-1.5 text-urvar-green font-semibold text-sm hover:gap-3 transition-all">
                  {t.home.explore} →
                </Link>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured products */}
      <Section bg="mint">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark">{t.home.products_heading}</h2>
          <p className="mt-3 text-neutral-600">{t.home.products_sub}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/products" variant="secondary" size="lg">
            {t.home.products_heading} →
          </Button>
        </div>
      </Section>

      {/* Why choose Urvar */}
      <Section bg="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark">{t.home.why_heading}</h2>
          <p className="mt-3 text-neutral-600">{t.home.why_sub}</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why.map((w, i) => (
            <div key={w.title} className="text-center sm:text-left">
              <div className="w-11 h-11 rounded-xl bg-urvar-green text-white flex items-center justify-center font-bold mx-auto sm:mx-0">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-urvar-dark">{w.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Crop solutions */}
      <CropStageSection />

      {/* Dealer opportunity */}
      <Section bg="dark">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.home.dealer_heading}</h2>
            <p className="mt-4 text-urvar-light/90">{t.home.dealer_sub}</p>
            <div className="mt-6">
              <Button href="/dealers/become-a-distributor" variant="onDark" size="lg">
                {t.home.dealer_cta}
              </Button>
            </div>
          </div>
          <ul className="space-y-4">
            {[t.home.dealer_b1, t.home.dealer_b2, t.home.dealer_b3].map((b) => (
              <li key={b} className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl px-5 py-4">
                <span className="w-7 h-7 rounded-full bg-urvar-green flex items-center justify-center text-white text-sm font-bold shrink-0">✓</span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* About snippet */}
      <Section bg="earth">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-e2">
            <Image src="/images/farm3.jpg" alt="Urvar farmers" fill className="object-cover" />
          </div>
          <div>
            <span className="text-urvar-green font-semibold text-sm uppercase tracking-wide">{t.nav.about}</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark mt-2 mb-4">{t.home.about_heading}</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">{t.home.about_body}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[t.trust.organic, t.trust.eco, t.trust.sustainable].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-white text-urvar-dark text-sm font-medium rounded-full border border-neutral-200">
                  ✓ {tag}
                </span>
              ))}
            </div>
            <Button href="/about" variant="primary">{t.home.about_cta}</Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark text-center">{t.home.faq_heading}</h2>
          <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-urvar-dark">{f.q}</span>
                  <span className={`text-urvar-green text-xl shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 -mt-1 text-neutral-600 leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Dual contact CTA */}
      <Section bg="mint">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 text-center md:text-left">
            <h3 className="text-xl font-bold text-urvar-dark">{t.home.for_farmers}</h3>
            <p className="mt-2 text-neutral-600">{t.home.for_farmers_sub}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button href="/contact" variant="primary">{t.home.contact_cta}</Button>
              <Button
                href="https://wa.me/919035708943"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.whatsapp}
              </Button>
            </div>
          </Card>
          <Card className="p-8 text-center md:text-left bg-urvar-dark text-white border-urvar-dark">
            <h3 className="text-xl font-bold">{t.home.for_dealers}</h3>
            <p className="mt-2 text-urvar-light/90">{t.home.for_dealers_sub}</p>
            <div className="mt-6 flex justify-center md:justify-start">
              <Button href="/dealers/become-a-distributor" variant="onDark">{t.home.dealer_cta}</Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
