import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

// The strongest available West Bengal source is a winter (rabi) maize trial,
// so this page follows the winter crop calendar rather than kharif maize.
const bckv = {
  id: "bckv-maize",
  citation:
    "Biswas, S., Das, R. and Dutta, D. (2025). Irrigation and primary nutrients' performance on winter maize productivity, profitability, energetics, and carbon footprint in Gangetic plains of India. Scientific Reports 15. Department of Agronomy, Bidhan Chandra Krishi Viswavidyalaya, Mohanpur.",
  url: "https://doi.org/10.1038/s41598-025-02896-x",
};

const maize: CropContent = {
  keyFact: {
    text: { en: "Sown mid-November as a winter crop", bn: "শীতকালীন ফসল হিসেবে নভেম্বরের মাঝামাঝি বোনা" },
    sourceId: bckv.id,
  },
  sources: [bckv],
  deficiencies: ["zinc", "phosphorus"],
  stages: [
    {
      id: "sowing",
      title: { en: "Land preparation & sowing", bn: "জমি প্রস্তুতি ও বীজ বোনা" },
      timing: { en: "Mid-November", bn: "নভেম্বরের মাঝামাঝি" },
      guidance: {
        en: "In BCKV trials at Gayeshpur, winter maize was sown in mid-November at 60 × 25 cm spacing. Half the nitrogen and all of the phosphorus and potassium go in as a basal dose.",
        bn: "গায়েশপুরে বিসিকেভি-র পরীক্ষায় শীতকালীন ভুট্টা নভেম্বরের মাঝামাঝি ৬০ × ২৫ সেমি দূরত্বে বোনা হয়েছে। অর্ধেক নাইট্রোজেন এবং সম্পূর্ণ ফসফরাস ও পটাশ মূল সার হিসেবে দেওয়া হয়।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "vermicompost" }, { slug: "prom" }],
    },
    {
      id: "first-weeding",
      title: { en: "First weeding", bn: "প্রথম আগাছা পরিষ্কার" },
      timing: { en: "20 days after sowing", bn: "বোনার ২০ দিন পর" },
      guidance: {
        en: "Manual weeding at 20 days after sowing keeps early growth clear of competition.",
        bn: "বোনার ২০ দিন পর হাতে আগাছা পরিষ্কার করলে প্রাথমিক বৃদ্ধি আগাছার প্রতিযোগিতা থেকে মুক্ত থাকে।",
      },
      sourceIds: [bckv.id],
      products: [],
    },
    {
      id: "top-dressing-1",
      title: { en: "Top dressing & earthing up", bn: "প্রথম চাপান সার ও মাটি তোলা" },
      timing: { en: "40 days after sowing", bn: "বোনার ৪০ দিন পর" },
      guidance: {
        en: "A quarter of the nitrogen is top-dressed at 40 days after sowing, along with a second weeding and earthing up (ridging soil onto the base of the plant).",
        bn: "বোনার ৪০ দিন পর এক-চতুর্থাংশ নাইট্রোজেন চাপান দেওয়া হয়, সঙ্গে দ্বিতীয়বার আগাছা পরিষ্কার ও মাটি তোলা (গাছের গোড়ায় মাটি তুলে দেওয়া) হয়।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "top-dressing-2",
      title: { en: "Second top dressing", bn: "দ্বিতীয় চাপান সার" },
      timing: { en: "70 days after sowing", bn: "বোনার ৭০ দিন পর" },
      guidance: {
        en: "The last quarter of the nitrogen is top-dressed at 70 days after sowing. In BCKV trials, 200:100:100 kg N:P₂O₅:K₂O per hectare gave the highest productivity.",
        bn: "বোনার ৭০ দিন পর বাকি এক-চতুর্থাংশ নাইট্রোজেন চাপান দেওয়া হয়। বিসিকেভি-র পরীক্ষায় ২০০:১০০:১০০ কেজি এন:পি২ও৫:কে২ও/হেক্টর সর্বোচ্চ ফলন দিয়েছে।",
      },
      sourceIds: [bckv.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
  ],
};

export default maize;
