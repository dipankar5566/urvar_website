"use client";

import Image from "next/image";
import Link from "next/link";
import type { Crop } from "@/data/crops";
import { useLang } from "@/context/LangContext";

export default function CropCard({ crop }: { crop: Crop }) {
  const { t, localize } = useLang();
  const name = t.crops[crop.nameKey];

  return (
    <Link
      href={localize(`/crop-solutions/${crop.slug}`)}
      className="group flex flex-col bg-white border border-hairline hover:shadow-e2 transition-shadow"
    >
      <div className="relative h-[120px] sm:h-[200px] bg-soft-cloud overflow-hidden">
        <Image
          src={crop.image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover transition-transform duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-3 sm:px-[18px] sm:py-4 flex flex-col gap-1 sm:gap-1.5">
        <span className="text-[15px] sm:text-lg font-bold text-ink">{name}</span>
        <span className="hidden sm:block text-[13px] leading-snug text-mute line-clamp-2">{t.crops[crop.introKey]}</span>
        <span className="mt-0.5 sm:mt-1.5 text-xs sm:text-[13px] font-bold text-urvar-green">{t.crops.view_guide}</span>
      </div>
    </Link>
  );
}
