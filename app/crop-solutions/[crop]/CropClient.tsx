"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import Button from "@/components/ui/Button";
import { cropBySlug, stageOrder } from "@/data/crops";
import type { StageKey } from "@/data/crops";
import products from "@/data/products";

const stageLabelKey: Record<StageKey, keyof ReturnType<typeof useLang>["t"]["crops"]> = {
  land_prep: "stage_land_prep",
  vegetative: "stage_vegetative",
  flowering: "stage_flowering",
  maturity: "stage_maturity",
};

export default function CropClient({ slug }: { slug: string }) {
  const { t, localize } = useLang();
  const crop = cropBySlug(slug);
  if (!crop) notFound();

  const [activeStage, setActiveStage] = useState(0);

  const name = t.crops[crop.nameKey];
  const intro = t.crops[crop.introKey];
  const orderedStages = stageOrder
    .map((key) => crop.stages.find((s) => s.stageKey === key))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const currentProducts = (orderedStages[activeStage] ?? orderedStages[0]).productSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* Crop header + stage tabs + products */}
      <section className="bg-soft-cloud py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="text-[13px] mb-6" aria-label="Breadcrumb">
            <Link href={localize("/crop-solutions")} className="text-mute hover:text-ink">
              {t.crops.hub_heading}
            </Link>
            <span className="mx-2 text-stone">/</span>
            <span className="text-ink font-medium">{name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center mb-6 lg:mb-10">
            <div className="w-full lg:w-[300px] h-[200px] flex-shrink-0 relative overflow-hidden">
              <Image src={crop.image} alt={name} fill sizes="300px" className="object-cover" priority />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[36px] sm:text-[54px] leading-[1.0] mb-3">
                {name}
              </h1>
              <p className="text-mute text-[15px] leading-[1.75] max-w-xl">{intro}</p>
            </div>
          </div>

          <div className="flex border-b border-hairline mb-8 overflow-x-auto">
            {orderedStages.map((stage, i) => (
              <button
                key={stage.stageKey}
                onClick={() => setActiveStage(i)}
                className={`flex-none px-5 py-3 border-b-2 -mb-px whitespace-nowrap ${
                  activeStage === i ? "border-urvar-green" : "border-transparent"
                }`}
              >
                <span className={`text-[13px] font-bold ${activeStage === i ? "text-ink" : "text-mute"}`}>
                  {t.crops[stageLabelKey[stage.stageKey]]}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {currentProducts.map((p) => (
              <Link key={p.slug} href={localize(`/products/${p.slug}`)} className="group flex flex-col bg-canvas">
                <div className="relative aspect-square bg-soft-cloud overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pt-3.5 pb-1">
                  <h3 className="font-bold text-ink text-sm leading-snug mb-1">{p.name}</h3>
                  <p className="text-mute text-[13px] leading-relaxed mb-2 line-clamp-2">{p.tagline}</p>
                  <span className="text-urvar-green font-bold text-xs">View →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="bg-urvar-earth-light py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#d5ccbe] text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[28px] sm:text-[36px] leading-[1.1] mb-3">
            {t.crops.cta_heading}
          </h2>
          <p className="text-[#514e45] text-[15px] leading-relaxed mb-7">{t.crops.cta_sub}</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button href={localize("/contact")} variant="primary">
              {t.home.contact_cta}
            </Button>
            <Button href="https://wa.me/919035708943" variant="secondary" target="_blank" rel="noopener noreferrer">
              {t.contact.whatsapp}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
