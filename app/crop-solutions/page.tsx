"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import Button from "@/components/ui/Button";
import crops from "@/data/crops";

export default function CropSolutionsPage() {
  const { t, localize } = useLang();

  return (
    <>
      <section className="bg-[#104C36] pt-14 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-3">Nutrition Programs</p>
          <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[44px] sm:text-[68px] leading-[1.0] mb-2.5">
            {t.crops.hub_heading}
          </h1>
          <p className="text-white/62 text-base max-w-[540px] leading-relaxed">{t.crops.hub_sub}</p>
        </div>
      </section>

      <div className="bg-canvas border-b border-hairline py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-bold text-stone tracking-[1.5px] uppercase mb-3.5">{t.crops.select_crop}</p>
          <div className="flex flex-wrap gap-2">
            {crops.map((crop) => (
              <Link
                key={crop.slug}
                href={localize(`/crop-solutions/${crop.slug}`)}
                className="flex items-center gap-2 pl-[7px] pr-3.5 py-[7px] rounded-lg border border-hairline hover:border-urvar-green transition-colors flex-shrink-0"
              >
                <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0 bg-soft-cloud">
                  <Image
                    src={crop.image}
                    alt={t.crops[crop.nameKey]}
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
                <span className="text-[13px] font-bold text-charcoal whitespace-nowrap">
                  {t.crops[crop.nameKey]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

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
