import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const bckv = {
  id: "bckv-lentil",
  citation:
    "Venugopalan, V.K., Nath, R., Sengupta, K., Pal, A.K., Banerjee, S., Banerjee, P., Chandran, M.A.S., Roy, S., Sharma, L., Hossain, A. and Siddique, K.H.M. (2022). Foliar Spray of Micronutrients Alleviates Heat and Moisture Stress in Lentil (Lens culinaris Medik) Grown Under Rainfed Field Conditions. Frontiers in Plant Science 13: 847743. Department of Agronomy, Bidhan Chandra Krishi Viswavidyalaya, Mohanpur.",
  url: "https://doi.org/10.3389/fpls.2022.847743",
};

// Representative pulse for West Bengal's rabi season: lentil (masur) has the
// strongest available BCKV source; no comparable gram/chickpea trial was found.
const pulses: CropContent = {
  keyFact: {
    text: { en: "Best sown in the first week of November", bn: "নভেম্বরের প্রথম সপ্তাহে বোনা ভালো" },
    sourceId: bckv.id,
  },
  sources: [bckv],
  deficiencies: ["zinc", "boron", "phosphorus"],
  stages: [
    {
      id: "sowing",
      title: { en: "Land preparation & sowing", bn: "জমি প্রস্তুতি ও বীজ বোনা" },
      timing: { en: "First week of November", bn: "নভেম্বরের প্রথম সপ্তাহ" },
      guidance: {
        en: "In BCKV trials, lentil sown in November significantly outyielded December-sown crops. A basal dose of nitrogen, phosphorus and potassium is applied at sowing, in rows 30 cm apart.",
        bn: "বিসিকেভি-র পরীক্ষায় নভেম্বরে বোনা মসুর ডিসেম্বরে বোনা ফসলের চেয়ে উল্লেখযোগ্যভাবে বেশি ফলন দিয়েছে। বোনার সময় ৩০ সেমি দূরত্বে সারিতে নাইট্রোজেন, ফসফরাস ও পটাশের মূল সার দেওয়া হয়।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "vermicompost" }, { slug: "prom" }],
    },
    {
      id: "flowering",
      title: { en: "Flowering", bn: "ফুল আসা" },
      timing: { en: "Flowering stage", bn: "ফুল আসার পর্যায়" },
      guidance: {
        en: "BCKV trials found that a foliar spray of zinc and boron at the flowering stage helped the crop cope with heat and moisture stress.",
        bn: "বিসিকেভি-র পরীক্ষায় দেখা গেছে ফুল আসার পর্যায়ে পাতায় জিঙ্ক ও বোরন স্প্রে করলে ফসল তাপ ও আর্দ্রতার চাপ সামলাতে পারে।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "pod-development",
      title: { en: "Pod development", bn: "শুঁটি গঠন" },
      timing: { en: "Pod development stage", bn: "শুঁটি গঠনের পর্যায়" },
      guidance: {
        en: "A second foliar spray at the pod development stage further supports pod filling under heat and moisture stress.",
        bn: "শুঁটি গঠনের পর্যায়ে দ্বিতীয়বার পাতায় স্প্রে করলে তাপ ও আর্দ্রতার চাপেও শুঁটি ভরাট হতে সহায়তা করে।",
      },
      sourceIds: [bckv.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
    {
      id: "harvest",
      title: { en: "Maturity & harvest", bn: "পরিপক্কতা ও ফসল কাটা" },
      timing: { en: "When pods dry and turn brown", bn: "শুঁটি শুকিয়ে বাদামি হলে" },
      guidance: {
        en: "Lentil is harvested once pods dry down; grain is then dried to 12–13% moisture before storage.",
        bn: "শুঁটি শুকিয়ে গেলে মসুর কাটা হয় এবং সংরক্ষণের আগে দানা ১২–১৩% আর্দ্রতায় শুকানো হয়।",
      },
      sourceIds: [bckv.id],
      products: [],
    },
  ],
};

export default pulses;
