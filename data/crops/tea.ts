import type { CropContent } from "../crops";

// North Bengal is a different agro-climatic zone from BCKV's home region, so
// the state-university source here is UBKV (Uttar Banga Krishi Viswavidyalaya,
// Pundibari, Cooch Behar), which covers the actual tea belt — not BCKV.
const ubkv = {
  id: "ubkv-tea",
  citation:
    "Anjaneyulu, A. and Bhattacharjee, H. (2019). Yield and quality of young tea (Camellia sinensis (L.) O. Kuntze) with application of organic and inorganic fertilizers in arecanut garden. Journal of Pharmacognosy and Phytochemistry 8(1): 949–951. Department of Plantation Crops and Processing, Uttar Banga Krishi Viswavidyalaya (UBKV), Pundibari, Cooch Behar, West Bengal.",
  url: "https://www.phytojournal.com/archives/2019/vol8issue1/PartP/8-1-157-589.pdf",
};

const kkhsou = {
  id: "kkhsou-tea",
  citation:
    "Tea World, Krishna Kanta Handiqui State Open University (KKHSOU): Plucking Round — general tea-agronomy teaching resource (not West Bengal-specific).",
  url: "https://kkhsou.ac.in/web/teaworld/page-details.php?name=Plucking-Round",
};

const tea: CropContent = {
  keyFact: {
    text: { en: "Grown in North Bengal's tea gardens (Dooars, Terai, Darjeeling)", bn: "উত্তরবঙ্গের চা বাগানে (ডুয়ার্স, তরাই, দার্জিলিং) চাষ হয়" },
    sourceId: ubkv.id,
  },
  sources: [ubkv, kkhsou],
  deficiencies: ["zinc", "phosphorus"],
  stages: [
    {
      id: "establishment",
      title: { en: "Planting & establishment", bn: "রোপণ ও প্রতিষ্ঠা" },
      timing: { en: "First 12 months after planting", bn: "রোপণের প্রথম ১২ মাস" },
      guidance: {
        en: "In UBKV trials at Cooch Behar, young tea grew best with vermicompost combined with the full recommended NPK dose for young tea (10:5:10 at 200 kg per hectare per year, per the Tea Research Association).",
        bn: "কোচবিহারে ইউবিকেভি-র পরীক্ষায় তরুণ চা গাছ সবচেয়ে ভালো বেড়েছে ভার্মিকম্পোস্টের সাথে তরুণ চায়ের জন্য টি রিসার্চ অ্যাসোসিয়েশন সুপারিশিত সম্পূর্ণ এনপিকে মাত্রা (১০:৫:১০, প্রতি হেক্টরে বছরে ২০০ কেজি) একত্রে প্রয়োগ করলে।",
      },
      sourceIds: [ubkv.id],
      products: [{ slug: "vermicompost" }],
    },
    {
      id: "growing-season",
      title: { en: "Growing season", bn: "বৃদ্ধির মৌসুম" },
      timing: { en: "April–December (weekly plucking)", bn: "এপ্রিল–ডিসেম্বর (সাপ্তাহিক পাতা তোলা)" },
      guidance: {
        en: "Tea is plucked at roughly weekly intervals through the main growing season, from April to December.",
        bn: "মূল বৃদ্ধির মৌসুমে, এপ্রিল থেকে ডিসেম্বর পর্যন্ত, প্রায় সাপ্তাহিক বিরতিতে চা পাতা তোলা হয়।",
      },
      sourceIds: [kkhsou.id],
      products: [{ slug: "humic-acid-liquid" }],
    },
    {
      id: "dormancy",
      title: { en: "Winter dormancy", bn: "শীতকালীন বিশ্রাম" },
      timing: { en: "December–March", bn: "ডিসেম্বর–মার্চ" },
      guidance: {
        en: "Growth slows sharply and plucking mostly stops during the winter dormant season.",
        bn: "শীতের বিশ্রামের সময় গাছের বৃদ্ধি অনেকটাই কমে যায় এবং পাতা তোলা প্রায় বন্ধ থাকে।",
      },
      sourceIds: [kkhsou.id],
      products: [],
    },
  ],
};

export default tea;
