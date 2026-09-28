"use client";

import Image from "next/image";
import Link from "next/link";
import type { Crop, Localized } from "@/data/crops";
import type { Product } from "@/data/products";
import { useLang } from "@/context/LangContext";
import { convertPerKatha, resolveDose } from "@/lib/cropDose";
import { whatsappHref } from "@/lib/cropPage";

export default function DoseLine({
  product,
  crop,
  method,
}: {
  product: Product;
  crop: Crop;
  method?: Localized;
}) {
  const { t, lang, localize } = useLang();
  const match = resolveDose(product, crop);
  const dose = match ? convertPerKatha(match.row.dose) : null;
  const methodText = method?.[lang] ?? match?.row.method;
  const note = !match
    ? null
    : match.kind === "method"
      ? t.crops.label_method
      : (match.exact ? t.crops.label_row_exact : t.crops.label_row_closest).replace("{row}", match.rowLabel);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border border-hairline bg-white p-3.5 sm:px-4">
      <Link href={localize(`/products/${product.slug}`)} className="group flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-soft-cloud">
          <Image src={product.image} alt="" fill sizes="64px" className="object-contain" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-ink group-hover:text-urvar-green">{product.name}</p>
          {methodText && <p className="text-[13px] leading-snug text-mute">{methodText}</p>}
        </div>
      </Link>
      <div className="sm:w-[300px] sm:flex-none sm:text-right border-t sm:border-t-0 border-soft-cloud pt-2 sm:pt-0">
        {dose ? (
          <>
            <p className="text-base font-bold text-urvar-dark">
              {dose.katha} {t.crops.per_katha}
            </p>
            <p className="text-xs text-mute">
              {dose.bigha} {t.crops.per_bigha} · ≈ {dose.acre} {t.crops.per_acre}
            </p>
            <p className="text-[11px] italic text-mute">{note}</p>
          </>
        ) : match ? (
          <>
            <p className="text-base font-bold text-urvar-dark">{match.row.dose}</p>
            <p className="text-[11px] italic text-mute">{note}</p>
          </>
        ) : (
          <a
            href={whatsappHref(t.crops.wa_text.replace("{crop}", t.crops[crop.nameKey]))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-urvar-green hover:text-urvar-dark"
          >
            {t.crops.ask_dose} →
          </a>
        )}
      </div>
    </div>
  );
}
