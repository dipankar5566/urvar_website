"use client";

import { useLang } from "@/context/LangContext";

const keys = ["msme", "startup", "organic", "eco", "sustainable"] as const;

export default function TrustBadges() {
  const { t } = useLang();

  return (
    <section className="bg-canvas border-b border-hairline py-3.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-2 items-center justify-center">
        {keys.map((key) => (
          <div key={key} className="inline-flex items-center gap-2 border border-hairline rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-urvar-green flex-shrink-0" />
            <span className="text-[12px] font-semibold text-ink">{t.trust[key]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
