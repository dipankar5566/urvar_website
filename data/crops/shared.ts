import type { Localized, Nutrient, CropSource, StageProduct } from "../crops";

export const tnauDeficiencySource: CropSource = {
  id: "tnau-deficiency",
  citation:
    "TNAU Agritech Portal, Tamil Nadu Agricultural University: Mineral Nutrition – nutrient deficiency symptoms (general, all crops).",
  url: "https://agritech.tnau.ac.in/agriculture/agri_min_nutri_def_symptoms.html",
};

export const deficiencyInfo: Record<Nutrient, { symptom: Localized; fixSlug: string }> = {
  zinc: {
    symptom: {
      en: "Upper leaves show interveinal chlorosis, eventually whitening. Leaves may be small and distorted, in a rosette form.",
      bn: "উপরের পাতার শিরার মাঝের অংশ হলুদ হয়ে শেষে সাদাটে হয়ে যায়। পাতা ছোট ও বিকৃত হয়ে গুচ্ছের মতো দেখাতে পারে।",
    },
    fixSlug: "zinc-edta",
  },
  boron: {
    symptom: {
      en: "Growing points develop abnormally; the tips become stunted and die, and flowers and fruits may abort.",
      bn: "বাড়ন্ত ডগা অস্বাভাবিকভাবে বাড়ে; ডগা খর্ব হয়ে মরে যায় এবং ফুল ও ফল ঝরে যেতে পারে।",
    },
    fixSlug: "boron-edta",
  },
  phosphorus: {
    symptom: {
      en: "Growth is slow and stunted, and older leaves turn purple, especially on the underside.",
      bn: "গাছের বৃদ্ধি ধীর ও খর্ব হয়, এবং পুরোনো পাতা, বিশেষত নিচের দিক, বেগুনি হয়ে যায়।",
    },
    fixSlug: "prom",
  },
};

// The Flowering Booster's per-crop label rows say "basal / before transplanting",
// which contradicts its purpose; its flowering-crop row gives the real timing.
export const floweringBooster: StageProduct = {
  slug: "prom-humic-flowering",
  method: {
    en: "Apply 10–15 days before flowering (label timing for flowering crops)",
    bn: "ফুল আসার ১০–১৫ দিন আগে প্রয়োগ করুন (ফুল ফসলের লেবেল অনুযায়ী সময়)",
  },
};
