"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { cropBySlug, stageOrder } from "@/data/crops";
import type { StageKey } from "@/data/crops";
import products from "@/data/products";
import { categoryMeta } from "@/lib/categories";

const stageLabelKey: Record<StageKey, keyof ReturnType<typeof useLang>["t"]["crops"]> = {
  land_prep: "stage_land_prep",
  vegetative: "stage_vegetative",
  flowering: "stage_flowering",
  maturity: "stage_maturity",
};

export default function CropClient({ slug }: { slug: string }) {
  const { t } = useLang();
  const crop = cropBySlug(slug);
  if (!crop) notFound();

  const name = t.crops[crop.nameKey];
  const intro = t.crops[crop.introKey];
  const orderedStages = stageOrder
    .map((key) => crop.stages.find((s) => s.stageKey === key))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section className="bg-urvar-dark py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-urvar-light/80 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              {t.nav.home}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/crop-solutions" className="hover:text-white">
              {t.crops.hub_heading}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{name}</h1>
              <p className="text-urvar-light/90 text-lg leading-relaxed">{intro}</p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src={crop.image} alt={name} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Program by stage */}
      <Section bg="white">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-urvar-dark">{t.crops.program_heading}</h2>
          <p className="mt-2 text-neutral-600">{t.crops.program_sub}</p>
        </div>

        <div className="space-y-8">
          {orderedStages.map((stage, i) => {
            const stageProducts = stage.productSlugs
              .map((s) => products.find((p) => p.slug === s))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));

            return (
              <div
                key={stage.stageKey}
                className="grid lg:grid-cols-[200px_1fr] gap-6 border-l-2 border-urvar-light pl-6 relative"
              >
                <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-urvar-green text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-bold text-urvar-dark text-lg">{t.crops[stageLabelKey[stage.stageKey]]}</h3>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-3">
                    {t.crops.recommended}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stageProducts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl p-3 shadow-e1 hover:shadow-e2 hover:-translate-y-0.5 transition-all"
                      >
                        <div className="relative w-12 h-12 shrink-0 bg-neutral-50 rounded-lg overflow-hidden">
                          <Image src={p.image} alt={p.name} fill className="object-contain p-1" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-urvar-dark leading-snug truncate">{p.name}</p>
                          <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1 ${categoryMeta[p.category].badge}`}>
                            {p.category}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Conversion CTA */}
      <Section bg="mint">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-urvar-dark">{t.crops.cta_heading}</h2>
          <p className="mt-2 text-neutral-600">{t.crops.cta_sub}</p>
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
