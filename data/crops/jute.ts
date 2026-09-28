import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const bckv = {
  id: "bckv-jute",
  citation:
    "Banerjee, R., Chakraborty, A., Chowdhury, S., Biswas, S. and Bandopadhyay, P. (2021). Performance of NJ 7050 Olitorius Jute for Eastern Plains. International Journal of Current Microbiology and Applied Sciences 10(5): 153–159. Department of Agronomy, Bidhan Chandra Krishi Viswavidyalaya, Mohanpur.",
  url: "https://www.ijcmas.com/10-5-2021/R.%20Banerjee,%20et%20al.pdf",
};

const crijafWeed = {
  id: "crijaf-jute-weeding",
  citation:
    "Ghorai, A.K., Chowdhury, H., Kumar, M. and Kumar, S. (2013). Technology for weed management in jute. Indian Farming 63(6). ICAR-Central Research Institute for Jute and Allied Fibres (CRIJAF), Barrackpore.",
  url: "https://epubs.icar.org.in/index.php/IndFarm/article/view/54160",
};

const njbIcare = {
  id: "njb-icare-jute",
  citation:
    "National Jute Board & ICAR-CRIJAF. Operation Guidelines for Jute – Improved Cultivation and Advanced Retting Exercises (I-CARE) Scheme.",
  url: "https://www.nitiforstates.gov.in/public-assets/Policy/policy_files/SNG1660A000062.pdf",
};

// Harvest/retting timing is not included: the only figure found for it was an
// uncited Wikipedia summary, which does not meet this site's sourcing bar.
const jute: CropContent = {
  keyFact: {
    text: { en: "Sown mid-April in BCKV pre-kharif trials", bn: "বিসিকেভি-র প্রি-খরিফ পরীক্ষায় এপ্রিলের মাঝামাঝি বোনা" },
    sourceId: bckv.id,
  },
  sources: [bckv, crijafWeed, njbIcare],
  deficiencies: ["zinc", "phosphorus"],
  stages: [
    {
      id: "sowing",
      title: { en: "Land preparation & sowing", bn: "জমি প্রস্তুতি ও বীজ বোনা" },
      timing: { en: "Mid-April (pre-kharif)", bn: "এপ্রিলের মাঝামাঝি (প্রি-খরিফ)" },
      guidance: {
        en: "In BCKV trials at Mondouri, jute was sown mid-April with line sowing at 25–30 cm row spacing and 5–7 cm plant spacing. All fertiliser was applied as a basal dose — there was no split top-dressing.",
        bn: "মন্ডৌরিতে বিসিকেভি-র পরীক্ষায় এপ্রিলের মাঝামাঝি সারিতে বীজ বোনা হয়েছে, সারির দূরত্ব ২৫–৩০ সেমি ও গাছের দূরত্ব ৫–৭ সেমি রেখে। সম্পূর্ণ সার মূল সার হিসেবেই দেওয়া হয়েছে — চাপান সারের প্রয়োজন হয়নি।",
      },
      sourceIds: [bckv.id, njbIcare.id],
      products: [{ slug: "vermicompost" }, { slug: "prom" }],
    },
    {
      id: "weeding",
      title: { en: "Weeding", bn: "আগাছা পরিষ্কার" },
      timing: { en: "35 days after sowing", bn: "বোনার ৩৫ দিন পর" },
      guidance: {
        en: "One hand weeding or hoeing at 35 days after sowing controls weeds effectively and economically.",
        bn: "বোনার ৩৫ দিন পর একবার হাতে আগাছা পরিষ্কার বা নিড়ানি দিলে কার্যকরভাবে ও সাশ্রয়ীভাবে আগাছা নিয়ন্ত্রণ হয়।",
      },
      sourceIds: [crijafWeed.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "fibre-development",
      title: { en: "Fibre development", bn: "আঁশের বৃদ্ধি" },
      timing: { en: "Vegetative growth", bn: "গাছের বৃদ্ধির পর্যায়" },
      guidance: {
        en: "The best-performing nutrient schedule in BCKV trials (80:17.5:33.3 kg N:P:K per hectare) gave the strongest plant height, girth and dry matter.",
        bn: "বিসিকেভি-র পরীক্ষায় সবচেয়ে ভালো ফল দেওয়া পুষ্টি মাত্রা (৮০:১৭.৫:৩৩.৩ কেজি এন:পি:কে/হেক্টর) সবচেয়ে ভালো গাছের উচ্চতা, বেড় ও শুষ্ক পদার্থ দিয়েছে।",
      },
      sourceIds: [bckv.id],
      products: [floweringBooster],
    },
  ],
};

export default jute;
