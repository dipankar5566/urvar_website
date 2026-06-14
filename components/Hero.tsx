"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-urvar-dark">
      {/* Background farm image */}
      <div className="absolute inset-0">
        <Image
          src="/images/farm2.jpg"
          alt="Urvar farm"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        {/* Layered gradient: dark top, green tint at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-urvar-dark/80 via-urvar-dark/50 to-urvar-dark/80" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-urvar-dark to-transparent" />
      </div>

      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-urvar-green">
          <circle cx="100" cy="100" r="90" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-urvar-green">
          <circle cx="100" cy="100" r="90" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-urvar-green/20 border border-urvar-green/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-urvar-green animate-pulse"></span>
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
              className="inline-flex items-center justify-center gap-2 bg-urvar-green hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t.hero.cta_products}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/dealers/become-a-distributor"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-urvar-dark font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg hover:-translate-y-0.5"
            >
              {t.hero.cta_dealer}
            </Link>
          </div>
        </div>

        {/* Stats row — glassmorphism card */}
        <div className="mt-16 inline-flex flex-wrap gap-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
          {[
            { value: "2023", label: "Founded" },
            { value: "8+", label: "Products" },
            { value: "WB", label: "West Bengal" },
          ].map((s, i) => (
            <div key={s.label} className={`text-white ${i > 0 ? "pl-8 border-l border-white/20" : ""}`}>
              <p className="text-3xl font-bold text-urvar-green">{s.value}</p>
              <p className="text-green-300 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
