"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t, localize } = useLang();

  const stats = [
    { value: "2023", label: "Founded" },
    { value: "8+", label: "Products" },
    { value: "WB", label: "West Bengal" },
  ];

  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-[#0a2018]">
        <Image
          src="/images/farm2.webp"
          alt="Urvar farm"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08140d]/95 via-[#08140d]/55 to-[#08140d]/70" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse flex-shrink-0" />
          <span className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase">
            Urvar Natural Pvt. Ltd.
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white leading-[1.0] max-w-3xl mb-5 text-[44px] sm:text-[64px] lg:text-[88px]">
          {t.hero.tagline}
        </h1>

        <p className="text-white/72 text-base sm:text-lg leading-relaxed max-w-md mb-9">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href={localize("/products")}
            className="inline-flex items-center justify-center bg-white text-ink font-bold text-sm px-7 py-3.5 rounded-full"
          >
            {t.hero.cta_products}
          </Link>
          <Link
            href={localize("/dealers/become-a-distributor")}
            className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-sm px-7 py-3.5 rounded-full border-[1.5px] border-white/50"
          >
            {t.hero.cta_dealer}
          </Link>
        </div>

        <div className="inline-flex flex-wrap bg-white/6 border border-white/12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 sm:px-6 py-3.5 ${i < stats.length - 1 ? "border-r border-white/12" : ""}`}
            >
              <p className="font-[family-name:var(--font-campaign)] text-2xl sm:text-3xl text-white leading-none mb-0.5">
                {s.value}
              </p>
              <p className="text-[10px] text-white/42 tracking-[1.8px] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
