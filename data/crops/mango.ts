import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const bckv = {
  id: "bckv-mango",
  citation:
    "Talang, H.D., Dutta, P., Mukhim, C. and Patil, S. (2017). Effect of calcium, boron and sorbitol on fruit-set, yield and quality in mango cv. Himsagar. Journal of Horticultural Science 11(2): 166–169. Department of Fruits and Orchard Management, Bidhan Chandra Krishi Viswavidyalaya, Regional Research Station, Gayeshpur.",
  url: "https://doi.org/10.24154/jhs.v11i2.90",
};

const tnau = {
  id: "tnau-mango-fert",
  citation:
    "TNAU Agritech Portal, Tamil Nadu Agricultural University: Horticulture – Fertilizer Schedule for Fruit Crops, Mango (general all-India schedule).",
  url: "https://agritech.tnau.ac.in/horticulture/horti_fruits_fert_mango.html",
};

const mango: CropContent = {
  keyFact: {
    text: { en: "Foliar spray timed to ~50% panicle emergence", bn: "প্রায় ৫০% মুকুল বেরোলে পাতায় স্প্রে" },
    sourceId: bckv.id,
  },
  sources: [bckv, tnau],
  deficiencies: ["zinc", "boron"],
  stages: [
    {
      id: "basal-manuring",
      title: { en: "Post-harvest & basal manuring", bn: "ফল তোলার পর মূল সার প্রয়োগ" },
      timing: { en: "September–October", bn: "সেপ্টেম্বর–অক্টোবর" },
      guidance: {
        en: "Farm yard manure, plus the full phosphorus and potassium dose, are worked into the soil 45–90 cm from the trunk in September–October.",
        bn: "সেপ্টেম্বর–অক্টোবরে গাছের গোড়া থেকে ৪৫–৯০ সেমি দূরে গোবর সার এবং সম্পূর্ণ ফসফরাস ও পটাশ মাটিতে মিশিয়ে দেওয়া হয়।",
      },
      sourceIds: [tnau.id],
      products: [{ slug: "cow-dung-manure" }, { slug: "prom" }],
    },
    {
      id: "panicle-initiation",
      title: { en: "Panicle initiation & flowering", bn: "মুকুল আসা ও ফুল ফোটা" },
      timing: { en: "About 50% panicle emergence", bn: "প্রায় ৫০% মুকুল বেরোলে" },
      guidance: {
        en: "In BCKV trials on Himsagar mango, a foliar spray of boric acid with sorbitol at about 50% panicle emergence gave the best fruit-set, yield and fruit quality; calcium nitrate with boric acid gave the longest shelf life.",
        bn: "হিমসাগর আমে বিসিকেভি-র পরীক্ষায় প্রায় ৫০% মুকুল বেরোনোর সময় বোরিক অ্যাসিড ও সরবিটল পাতায় স্প্রে করলে সবচেয়ে বেশি ফল ধরা, ফলন ও ফলের গুণমান পাওয়া গেছে; ক্যালসিয়াম নাইট্রেট ও বোরিক অ্যাসিডে ফল সবচেয়ে বেশি দিন ভালো থাকে।",
      },
      sourceIds: [bckv.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
  ],
};

export default mango;
