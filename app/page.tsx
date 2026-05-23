"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProductCard from "@/components/ProductCard";
import CropStageSection from "@/components/CropStageSection";
import { useLang } from "@/context/LangContext";
import products from "@/data/products";

export default function HomePage() {
  const { t } = useLang();
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />
      <TrustBadges />

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-urvar-dark mb-3">{t.home.products_heading}</h2>
            <div className="w-12 h-1 bg-urvar-green rounded-full mx-auto mt-3 mb-4" />
            <p className="text-gray-500">{t.home.products_sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-urvar-green text-urvar-green hover:bg-urvar-green hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {t.home.products_heading} →
            </Link>
          </div>
        </div>
      </section>

      <CropStageSection />

      {/* About Snippet */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/farm3.jpg"
                alt="Urvar farmers"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-urvar-green font-semibold text-sm uppercase tracking-wide">About Urvar</span>
              <h2 className="text-3xl font-bold text-urvar-dark mt-2 mb-2">{t.home.about_heading}</h2>
              <div className="w-12 h-1 bg-urvar-green rounded-full mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6">{t.home.about_body}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Organic", "Eco-Friendly", "Sustainable"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-urvar-light text-urvar-dark text-sm font-medium rounded-full">
                    ✓ {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-urvar-dark hover:bg-urvar-green text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {t.home.about_cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-urvar-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.home.contact_heading}</h2>
          <p className="text-green-200 mb-8">{t.home.contact_sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-urvar-green hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {t.home.contact_cta}
            </Link>
            <a
              href="https://wa.me/919035708943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-urvar-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
