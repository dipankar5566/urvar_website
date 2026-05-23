"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-urvar-dark">
      {/* Background farm image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/farm2.jpg"
          alt="Urvar farm"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>

      {/* Decorative leaf pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-white">
          <path d="M100 10 C 150 10, 190 50, 190 100 C 190 150, 150 190, 100 190 C 50 190, 10 150, 10 100 C 10 50, 50 10, 100 10 Z" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-urvar-green/20 border border-urvar-green/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-urvar-green"></span>
            <span className="text-green-300 text-sm font-medium">Urvar Natural Pvt. Ltd.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t.hero.tagline}
          </h1>

          <p className="text-green-200 text-lg sm:text-xl leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-urvar-green hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              {t.hero.cta_products}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-urvar-dark font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              {t.hero.cta_contact}
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap gap-8">
          {[
            { value: "2023", label: "Founded" },
            { value: "8+", label: "Products" },
            { value: "WB", label: "West Bengal" },
          ].map((s) => (
            <div key={s.label} className="text-white">
              <p className="text-3xl font-bold text-urvar-green">{s.value}</p>
              <p className="text-green-300 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
