"use client";

import type { Crop } from "@/data/crops";
import { useLang } from "@/context/LangContext";
import { productBySlug, sourceNumbers } from "@/lib/cropPage";
import DoseLine from "./DoseLine";

export default function StageTimeline({ crop }: { crop: Crop }) {
  const { lang } = useLang();
  const nums = sourceNumbers(crop);

  return (
    <ol className="flex flex-col">
      {crop.stages.map((s, i) => (
        <li key={s.id} className="flex gap-3.5 sm:gap-7">
          <div className="flex flex-col items-center w-9 sm:w-11 flex-shrink-0">
            <span className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-urvar-dark text-white font-[family-name:var(--font-campaign)] text-xl sm:text-2xl">
              {i + 1}
            </span>
            {i < crop.stages.length - 1 && <span className="w-0.5 flex-1 bg-hairline my-1.5" />}
          </div>
          <div className="flex-1 min-w-0 pb-8 sm:pb-11 flex flex-col gap-2 sm:gap-2.5">
            <p className="text-[11px] sm:text-xs font-bold tracking-[1.2px] uppercase text-urvar-green">
              {s.timing[lang]}
              {s.sourceIds.length > 0 && (
                <sup className="ml-0.5">
                  {s.sourceIds.map((id, j) => (
                    <span key={id}>
                      {j > 0 && ","}
                      <a href="#sources" className="hover:underline">
                        {nums[id]}
                      </a>
                    </span>
                  ))}
                </sup>
              )}
            </p>
            <h3 className="text-[19px] sm:text-[22px] font-bold text-ink">{s.title[lang]}</h3>
            <p className="text-sm sm:text-[15px] leading-relaxed text-charcoal max-w-[620px]">{s.guidance[lang]}</p>
            {s.products.length > 0 && (
              <div className="mt-1.5 flex flex-col gap-2.5">
                {s.products.map((sp) => {
                  const product = productBySlug(sp.slug);
                  return product ? <DoseLine key={sp.slug} product={product} crop={crop} method={sp.method} /> : null;
                })}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
