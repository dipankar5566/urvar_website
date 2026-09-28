"use client";

import { useLang } from "@/context/LangContext";
import Button from "@/components/ui/Button";
import CropCard from "@/components/crops/CropCard";
import crops, { seasonOrder } from "@/data/crops";
import { whatsappHref } from "@/lib/cropPage";

export default function CropSolutionsPage() {
  const { t, localize } = useLang();
  const wa = whatsappHref(t.crops.wa_text_generic);
  const groups = seasonOrder
    .map((season) => ({ season, crops: crops.filter((c) => c.season === season) }))
    .filter((g) => g.crops.length > 0);

  return (
    <>
      <section className="bg-urvar-dark px-4 sm:px-6 lg:px-8 pt-10 pb-8 sm:pt-16 sm:pb-14">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-16">
          <div className="flex flex-col gap-3.5 max-w-[700px]">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-[#4ade80]">{t.crops.hub_eyebrow}</p>
            <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[52px] sm:text-[88px] leading-[0.95]">
              {t.crops.hub_heading}
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-relaxed text-white/80">{t.crops.hub_sub}</p>
          </div>
          <div className="flex flex-col gap-2.5 lg:items-end">
            <Button href={wa} variant="onDark" size="lg" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              {t.crops.hub_cta}
            </Button>
            <span className="text-[13px] text-white/70">{t.crops.hub_cta_note}</span>
          </div>
        </div>
      </section>

      <nav aria-label={t.crops.hub_heading} className="bg-canvas border-b border-hairline px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto py-3 sm:py-0">
          {groups.map((g) => (
            <a
              key={g.season}
              href={`#${g.season}`}
              className="flex-none inline-flex items-center min-h-[44px] px-4 rounded-full border border-hairline sm:rounded-none sm:border-0 sm:border-b-2 sm:border-transparent sm:px-3.5 sm:min-h-[52px] text-[13px] sm:text-sm font-semibold text-charcoal hover:text-ink whitespace-nowrap"
            >
              {t.crops[`season_${g.season}`]}
              <span className="ml-1.5 text-xs text-mute">{g.crops.length}</span>
            </a>
          ))}
        </div>
      </nav>

      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-14 sm:pb-[72px]">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-14">
          {groups.map((g) => (
            <section key={g.season} id={g.season} className="scroll-mt-24 flex flex-col gap-3.5 sm:gap-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 border-b border-hairline pb-2.5 sm:pb-3">
                <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[32px] sm:text-[40px] leading-none">
                  {t.crops[`season_${g.season}`]}
                </h2>
                <span className="text-[13px] sm:text-sm text-mute">{t.crops[`season_${g.season}_desc`]}</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                {g.crops.map((crop) => (
                  <CropCard key={crop.slug} crop={crop} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="bg-urvar-earth-light border-t border-[#d5ccbe] px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-lg mx-auto flex flex-col sm:items-center gap-3 sm:text-center">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[34px] sm:text-[44px] leading-[1.05]">
            {t.crops.cta_heading}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#514e45] mb-3 sm:mb-4">{t.crops.cta_sub}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href={wa} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              {t.contact.whatsapp}
            </Button>
            <Button href={localize("/contact")} variant="secondary" className="w-full sm:w-auto">
              {t.home.contact_cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
