"use client";

import Image from "next/image";
import Link from "next/link";
import type { Crop } from "@/data/crops";
import { deficiencyInfo, tnauDeficiencySource } from "@/data/crops/shared";
import { useLang } from "@/context/LangContext";
import { productBySlug, sourceNumbers } from "@/lib/cropPage";

export default function DeficiencyGuide({ crop }: { crop: Crop }) {
  const { t, lang, localize } = useLang();
  const srcNum = sourceNumbers(crop)[tnauDeficiencySource.id];

  return (
    <div className="flex flex-col gap-6 sm:gap-7">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-10">
        <div className="flex flex-col gap-2.5">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-mute">{t.crops.deficiency_eyebrow}</p>
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[38px] sm:text-[48px] leading-none">
            {t.crops.deficiency_heading}
          </h2>
        </div>
        <p className="text-[13px] leading-relaxed text-mute max-w-[460px]">
          {t.crops.deficiency_sub}
          <sup className="ml-0.5">
            <a href="#sources" className="hover:underline">
              {srcNum}
            </a>
          </sup>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {crop.deficiencies.map((n) => {
          const info = deficiencyInfo[n];
          const fix = productBySlug(info.fixSlug);
          return (
            <div key={n} className="bg-white border border-hairline p-4 sm:p-6 flex flex-col gap-3">
              <span className="self-start rounded-full bg-urvar-earth-light text-urvar-earth text-xs font-bold px-3 py-1">
                {t.crops[`nutrient_${n}`]}
              </span>
              <p className="text-sm leading-relaxed text-charcoal">{info.symptom[lang]}</p>
              {fix && (
                <Link
                  href={localize(`/products/${fix.slug}`)}
                  className="group mt-auto pt-3.5 border-t border-hairline flex items-center gap-3"
                >
                  <div className="relative w-11 h-11 flex-shrink-0 bg-soft-cloud">
                    <Image src={fix.image} alt="" fill sizes="44px" className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold tracking-[1px] uppercase text-mute">{t.crops.urvar_fix}</span>
                    <span className="text-sm font-bold text-urvar-green group-hover:text-urvar-dark">{fix.name} →</span>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
