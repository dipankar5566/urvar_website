"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import Button from "@/components/ui/Button";
import StageTimeline from "@/components/crops/StageTimeline";
import DeficiencyGuide from "@/components/crops/DeficiencyGuide";
import CropFaq from "@/components/crops/CropFaq";
import SourcesList from "@/components/crops/SourcesList";
import { cropBySlug } from "@/data/crops";
import { cropFaqs, cropProductCount, cropSources, sourceNumbers, whatsappHref } from "@/lib/cropPage";

const chip =
  "inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 sm:px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold text-white";

export default function CropClient({ slug }: { slug: string }) {
  const { t, lang, localize } = useLang();
  const crop = cropBySlug(slug);
  if (!crop) notFound();

  const name = t.crops[crop.nameKey];
  const nums = sourceNumbers(crop);
  const wa = whatsappHref(t.crops.wa_text.replace("{crop}", name));
  const seasonName = t.crops[`season_${crop.season}`];

  return (
    <>
      <div className="bg-canvas border-b border-hairline px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto text-[13px] flex gap-2">
          <Link href={localize("/crop-solutions")} className="text-mute hover:text-ink">
            {t.crops.hub_heading}
          </Link>
          <span className="text-mute">/</span>
          <span className="text-ink font-medium">{name}</span>
        </nav>
      </div>

      <section className="bg-urvar-dark">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row lg:items-center gap-0 lg:gap-16 lg:px-8 lg:py-16">
          <div className="flex-1 flex flex-col gap-4 sm:gap-5 px-4 sm:px-6 lg:px-0 py-7 lg:py-0">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-[#4ade80]">
              {t.crops.hub_heading} · {t.crops.detail_eyebrow}
            </p>
            <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[64px] sm:text-[96px] leading-[0.95]">
              {name}
            </h1>
            <p className="max-w-[520px] text-[15px] sm:text-[17px] leading-relaxed text-white/80">{t.crops[crop.introKey]}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className={chip}>{t.crops.season_label.replace("{season}", seasonName)}</span>
              {crop.keyFact && (
                <span className={chip}>
                  {crop.keyFact.text[lang]}
                  <sup className="ml-1">
                    <a href="#sources" className="text-[#4ade80]">
                      {nums[crop.keyFact.sourceId]}
                    </a>
                  </sup>
                </span>
              )}
              <span className={`${chip} hidden sm:inline-flex`}>
                {t.crops.stages_count
                  .replace("{stages}", String(crop.stages.length))
                  .replace("{products}", String(cropProductCount(crop)))}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-1 sm:mt-2">
              <Button href={wa} variant="onDark" size="lg" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                {t.crops.get_plan.replace("{crop}", name)}
              </Button>
              <a
                href="#schedule"
                className="hidden sm:inline-flex items-center justify-center min-h-[52px] px-7 rounded-full border-[1.5px] border-white/50 text-white font-semibold hover:bg-white/10"
              >
                {t.crops.see_schedule}
              </a>
            </div>
          </div>
          <div className="relative w-full h-[220px] sm:h-[320px] lg:w-[520px] lg:h-[380px] lg:flex-none">
            <Image src={crop.image} alt={name} fill priority sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="schedule" className="scroll-mt-20 px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-16">
          <div className="lg:w-[300px] lg:flex-none flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-mute">{t.crops.schedule_eyebrow}</p>
            <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[38px] sm:text-[48px] leading-none">
              {t.crops.schedule_heading}
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-mute">{t.crops.schedule_sub}</p>
            <div className="mt-1 bg-soft-cloud p-3.5 sm:p-4 text-[13px] leading-relaxed text-charcoal">
              <strong className="text-ink">{t.crops.units_title}</strong>
              <br />
              {t.crops.units_body}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <StageTimeline crop={crop} />
          </div>
        </div>
      </section>

      {crop.deficiencies.length > 0 && (
        <section className="bg-soft-cloud px-4 sm:px-6 lg:px-8 py-10 sm:py-[72px]">
          <div className="max-w-6xl mx-auto">
            <DeficiencyGuide crop={crop} />
          </div>
        </section>
      )}

      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-16">
          <div className="lg:w-[300px] lg:flex-none flex flex-col gap-2.5">
            <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-mute">
              {t.crops.faq_eyebrow.replace("{crop}", name)}
            </p>
            <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[38px] sm:text-[48px] leading-none">
              {t.crops.faq_heading}
            </h2>
          </div>
          <div className="flex-1 min-w-0">
            <CropFaq faqs={cropFaqs(crop, lang, t)} />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-[72px]">
        <div className="max-w-6xl mx-auto">
          <SourcesList heading={t.crops.sources_heading} sources={cropSources(crop)} note={t.crops.sources_doses} />
        </div>
      </section>

      <section className="bg-urvar-earth-light border-t border-[#d5ccbe] px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-lg mx-auto flex flex-col sm:items-center gap-3 sm:text-center">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[34px] sm:text-[44px] leading-[1.05]">
            {t.crops.plan_heading.replace("{crop}", name)}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#514e45] mb-3 sm:mb-4">{t.crops.plan_sub}</p>
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
