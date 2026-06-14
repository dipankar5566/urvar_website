export type NutrientRow = { parameter: string; value: string };
export type DosageRow = { crop: string; dose: string; method: string };

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "Organic Manures" | "Phosphate Fertilizers" | "Bio-Stimulants" | "Micronutrients";
  image: string;
  benefits: string[];
  nutrients: NutrientRow[];
  dosages: DosageRow[];
}

const products: Product[] = [
  {
    slug: "vermicompost",
    name: "Enriched Vermicompost",
    tagline: "Biologically activated organic manure for superior soil regeneration",
    description:
      "Urvar Enriched Vermicompost is a biologically activated organic manure fortified with essential nutrients and beneficial microbes. It enhances root proliferation, nutrient availability, and soil microbial density for long-term fertility improvement. Ideal for cereals, vegetables, fruits, and plantation crops.",
    category: "Organic Manures",
    image: "/products/vermicompost.webp",
    benefits: [
      "Enhances Soil Structure & Aeration – Improves soil porosity, aggregation, and water-holding capacity.",
      "Boosts Microbial Activity – Enriches beneficial soil microbes that improve nutrient cycling and soil vitality.",
      "Improves Nutrient Availability – Provides slow-release macro & micronutrients for sustained crop growth.",
      "Increases Crop Yield & Quality – Supports uniform growth, improved plant vigor, and higher productivity.",
    ],
    nutrients: [
      { parameter: "Organic Carbon", value: "12 – 18 %" },
      { parameter: "Nitrogen (N)", value: "1.5 – 2.0 %" },
      { parameter: "Phosphorus (P₂O₅)", value: "1.0 – 1.5 %" },
      { parameter: "Potassium (K₂O)", value: "1.2 – 1.8 %" },
      { parameter: "C:N Ratio", value: "< 20:1" },
      { parameter: "Moisture Content", value: "15 – 25 %" },
      { parameter: "pH", value: "6.5 – 7.5" },
      { parameter: "Beneficial Microbial Load", value: "> 10⁶ CFU/g" },
    ],
    dosages: [
      { crop: "Vegetables (Brinjal, Tomato, Chilli, etc.)", dose: "25 – 35 kg", method: "Basal application before transplanting" },
      { crop: "Paddy", dose: "17 – 25 kg", method: "During land preparation" },
      { crop: "Fruits (Mango, Guava, Banana)", dose: "30 – 35 kg", method: "Apply around root zone" },
      { crop: "Flowers", dose: "25 kg", method: "Before flowering stage" },
      { crop: "Nursery / Seed Beds", dose: "35 kg", method: "Mix with topsoil" },
    ],
  },
  {
    slug: "cow-dung-manure",
    name: "Cow Dung Manure (FYM)",
    tagline: "Naturally decomposed farmyard manure for long-term soil fertility",
    description:
      "Urvar Cow Dung Manure (FYM) is naturally decomposed farmyard manure that enriches soil with organic matter and essential nutrients. It improves soil texture, moisture retention, and microbial activity for long-term soil fertility. Ideal for sustainable crop growth and improved yield quality across all crops.",
    category: "Organic Manures",
    image: "/products/fym.webp",
    benefits: [
      "Improves Soil Fertility Naturally – Supplies essential nutrients and organic matter for sustained crop growth.",
      "Enhances Soil Structure & Moisture Retention – Increases water-holding capacity and reduces soil compaction.",
      "Boosts Beneficial Microbial Activity – Strengthens soil biology for better nutrient breakdown and absorption.",
      "Supports Healthy Root & Plant Growth – Promotes uniform crop development and improved yield quality.",
    ],
    nutrients: [
      { parameter: "Organic Carbon", value: "12 – 16 %" },
      { parameter: "Nitrogen (N)", value: "0.8 – 1.0 %" },
      { parameter: "Phosphorus (P₂O₅)", value: "0.4 – 0.8 %" },
      { parameter: "Potassium (K₂O)", value: "0.5 – 0.9 %" },
      { parameter: "C:N Ratio", value: "20:1 – 25:1" },
      { parameter: "Moisture Content", value: "20 – 25 %" },
      { parameter: "pH", value: "6.5 – 7.5" },
    ],
    dosages: [
      { crop: "Vegetables (Brinjal, Tomato, Chilli, etc.)", dose: "50 – 65 kg", method: "Mix into soil during land preparation" },
      { crop: "Paddy", dose: "35 – 50 kg", method: "Apply before final puddling" },
      { crop: "Fruits (Mango, Guava, Banana)", dose: "65 – 80 kg", method: "Apply around root zone, mix with soil" },
      { crop: "Flowers", dose: "50 kg", method: "Basal application before planting" },
      { crop: "Nursery / Seed Beds", dose: "65 kg", method: "Mix thoroughly with topsoil" },
    ],
  },
  {
    slug: "prom",
    name: "PROM – Phosphate Rich Organic Manure",
    tagline: "High phosphorus organic manure for vigorous root development",
    description:
      "Urvar PROM is a fortified organic manure enriched with high available phosphorus to support vigorous root development and early crop establishment. It enhances nutrient solubility, improves soil biological activity, and increases phosphorus efficiency in the rhizosphere.",
    category: "Phosphate Fertilizers",
    image: "/products/prom.webp",
    benefits: [
      "High Phosphorus Availability (P₂O₅ 16–20%) – Ensures strong root establishment and early crop vigor.",
      "Improves Flowering & Fruit Set – Enhances reproductive growth and reduces flower drop.",
      "Enhances Nutrient Efficiency – Improves phosphorus solubility and uptake in the root zone.",
      "Supports Soil Microbial Activity – Promotes healthier soil biology for sustained productivity.",
    ],
    nutrients: [
      { parameter: "Total Phosphorus (P₂O₅)", value: "16 – 20 %" },
      { parameter: "Organic Carbon", value: "10 – 15 %" },
      { parameter: "Moisture Content", value: "15 – 25 %" },
      { parameter: "C:N Ratio", value: "< 20:1" },
      { parameter: "pH", value: "6.5 – 7.5" },
      { parameter: "Particle Size", value: "90% passing 4 mm IS sieve" },
    ],
    dosages: [
      { crop: "Vegetables (Brinjal, Tomato, Chilli, etc.)", dose: "2 – 2.5 kg", method: "Basal application before transplanting" },
      { crop: "Paddy", dose: "1.5 – 2 kg", method: "During final land preparation" },
      { crop: "Pulses & Oilseeds", dose: "1.5 – 1.7 kg", method: "At sowing" },
      { crop: "Fruits (Mango, Guava, Banana)", dose: "2.5 kg", method: "Apply around root zone" },
      { crop: "Flowers", dose: "2 kg", method: "Before flowering stage" },
    ],
  },
  {
    slug: "prom-humic-flowering",
    name: "PROM – Humic Based Flowering Booster",
    tagline: "Advanced phosphorus + humic formula for early flowering and stronger fruit set",
    description:
      "Urvar PROM (Humic Based) is an advanced phosphorus-rich organic formulation designed to promote early flowering and stronger fruit set. Enriched with humic substances to enhance nutrient uptake and plant metabolism, it supports vigorous reproductive growth. Ideal for vegetables, fruits, and commercial crops.",
    category: "Phosphate Fertilizers",
    image: "/products/prom-humic-flowering.webp",
    benefits: [
      "Promotes Early & Uniform Flowering – Stimulates reproductive growth for timely crop development.",
      "Enhances Fruit Set & Reduces Flower Drop – Improves crop retention and yield stability.",
      "Improves Nutrient Uptake Efficiency – Humic enrichment enhances phosphorus absorption and plant metabolism.",
      "Boosts Yield & Crop Quality – Supports better fruit size, uniformity, and overall productivity.",
    ],
    nutrients: [
      { parameter: "Total Phosphorus (P₂O₅)", value: "16 – 20 %" },
      { parameter: "Organic Carbon", value: "12 – 18 %" },
      { parameter: "Humic Acid", value: "3 – 4 %" },
      { parameter: "Fulvic Acid", value: "1 – 2 %" },
      { parameter: "Moisture Content", value: "15 – 25 %" },
      { parameter: "C:N Ratio", value: "< 20:1" },
      { parameter: "pH", value: "6.5 – 7.5" },
      { parameter: "Particle Size", value: "90% passing 4 mm IS sieve" },
    ],
    dosages: [
      { crop: "Vegetables (Brinjal, Tomato, Chilli, etc.)", dose: "2 – 2.5 kg", method: "Basal application before transplanting" },
      { crop: "Paddy", dose: "1.5 – 2 kg", method: "During final land preparation" },
      { crop: "Pulses & Oilseeds", dose: "1.5 – 1.7 kg", method: "At sowing" },
      { crop: "Fruits (Mango, Guava, Banana)", dose: "2.5 kg", method: "Apply around root zone before flowering" },
      { crop: "Flowers (Marigold, Tuberose)", dose: "2 kg", method: "10–15 days before flowering stage" },
    ],
  },
  {
    slug: "prom-humic-enriched",
    name: "PROM – Humic Enriched",
    tagline: "High-phosphorus organic manure fortified with humic for root strength",
    description:
      "Urvar PROM (Humic Enriched) is a high-phosphorus organic manure fortified with humic substances to enhance root strength and nutrient efficiency. It improves phosphorus availability in the soil, supports vigorous flowering, and promotes better fruit set for sustainable soil health.",
    category: "Phosphate Fertilizers",
    image: "/products/prom-humic-enriched.webp",
    benefits: [
      "High Available Phosphorus (P₂O₅ 16–20%) – Promotes strong root establishment and early crop vigor.",
      "Humic-Enriched Formula – Enhances nutrient absorption and improves soil nutrient efficiency.",
      "Improves Flowering & Fruit Set – Supports reproductive growth and reduces flower drop.",
      "Enhances Soil Health & Productivity – Activates soil biology for sustained yield improvement.",
    ],
    nutrients: [
      { parameter: "Total Phosphorus (P₂O₅)", value: "16 – 20 %" },
      { parameter: "Organic Carbon", value: "12 – 18 %" },
      { parameter: "Humic Acid", value: "3 – 4 %" },
      { parameter: "Fulvic Acid", value: "1 – 2 %" },
      { parameter: "Moisture Content", value: "15 – 25 %" },
      { parameter: "C:N Ratio", value: "< 20:1" },
      { parameter: "pH", value: "6.5 – 7.5" },
      { parameter: "Particle Size", value: "90% passing 4 mm IS sieve" },
    ],
    dosages: [
      { crop: "Vegetables (Brinjal, Tomato, Chilli, etc.)", dose: "2 – 2.5 kg", method: "Basal application before transplanting" },
      { crop: "Paddy", dose: "1.5 – 2 kg", method: "During final land preparation" },
      { crop: "Pulses & Oilseeds", dose: "1.5 – 1.7 kg", method: "At sowing" },
      { crop: "Fruits (Mango, Guava, Banana)", dose: "2.5 kg", method: "Apply around root zone before flowering" },
      { crop: "Flowers (Marigold, Tuberose)", dose: "2 kg", method: "10–15 days before flowering stage" },
    ],
  },
  {
    slug: "humic-acid-liquid",
    name: "Humic Acid Liquid",
    tagline: "High-performance liquid bio-stimulant for nutrient absorption and root development",
    description:
      "Urvar Humic Acid Liquid is a high-performance bio-stimulant formulated to enhance nutrient absorption and root development. It improves soil structure, increases nutrient efficiency, and strengthens plant stress tolerance. Ideal for boosting crop vigor, improving yield quality, and maximizing productivity.",
    category: "Bio-Stimulants",
    image: "/products/humic-acid-liquid.webp",
    benefits: [
      "Enhances Cation Exchange Capacity (CEC) – Improves soil nutrient-holding capacity and reduces nutrient leaching.",
      "Natural Chelating Action – Forms complexes with micronutrients, increasing their availability and uptake.",
      "Stimulates Root Proliferation & Enzyme Activity – Promotes stronger root mass and improved metabolic efficiency.",
      "Improves Fertilizer Use Efficiency (FUE) – Enhances response to NPK applications, reducing input wastage.",
    ],
    nutrients: [
      { parameter: "Humic Acid", value: "12 %" },
      { parameter: "Fulvic Acid", value: "3 %" },
      { parameter: "Organic Carbon", value: "8 – 10 %" },
      { parameter: "C:N Ratio", value: "< 20:1" },
      { parameter: "pH", value: "7.5 – 9" },
      { parameter: "Solubility", value: "100% water soluble" },
      { parameter: "Appearance", value: "Dark Brown / Black Liquid" },
    ],
    dosages: [
      { crop: "Foliar Spray", dose: "30 – 60 ml per Katha", method: "Mix in 15–20 litres water per Katha" },
      { crop: "Drip Irrigation", dose: "8 – 15 ml per Katha", method: "Apply through drip during irrigation" },
      { crop: "Soil Drenching", dose: "15 – 25 ml per Katha", method: "Mix in 15–25 litres water per Katha" },
    ],
  },
  {
    slug: "zinc-edta",
    name: "Zinc EDTA 12%",
    tagline: "Fast-acting chelated zinc to correct deficiency and restore crop health",
    description:
      "Urvar Zinc EDTA 12% helps correct zinc deficiency and brings back healthy green color in crops. It supports better leaf growth, stronger plant development, and improved flowering and yield. Easy to dissolve and quick to absorb, it ensures visible crop improvement in a short time.",
    category: "Micronutrients",
    image: "/products/zinc-edta.webp",
    benefits: [
      "Corrects Zinc Deficiency Quickly – Restores healthy green leaves and reduces yellowing (chlorosis).",
      "Improves Leaf Size & Plant Growth – Supports stronger stems and better crop development.",
      "Enhances Flowering & Yield – Promotes better bud formation and improved crop output.",
      "Fast Absorption & Easy Mixing – Fully water-soluble for quick results through spray or drip.",
    ],
    nutrients: [
      { parameter: "Zinc (Zn) Chelated", value: "12 % (w/w)" },
      { parameter: "Chelating Agent", value: "EDTA" },
      { parameter: "Solubility", value: "100% Water Soluble" },
      { parameter: "pH (1% Solution)", value: "5.5 – 7.5" },
      { parameter: "Appearance", value: "White / Off-White Free Flowing Powder" },
    ],
    dosages: [
      { crop: "Foliar Spray", dose: "3 – 7 gm per Katha", method: "Mix in 15–20 litres water per Katha" },
      { crop: "Drip Irrigation", dose: "8 – 10 gm per Katha", method: "Apply through drip during irrigation" },
    ],
  },
  {
    slug: "boron-edta",
    name: "Boron EDTA",
    tagline: "Water-soluble chelated boron for better flowering and fruit development",
    description:
      "Urvar Boron EDTA is a fully water-soluble micronutrient fertilizer designed to correct boron deficiency in crops. It supports proper flowering, pollen formation, and strong fruit development for better yield quality. Easy to mix and fast acting, it ensures healthier plants and improved crop productivity.",
    category: "Micronutrients",
    image: "/products/boron-edta.webp",
    benefits: [
      "Improves Flowering & Pollen Formation – Supports better fruit and seed setting.",
      "Reduces Flower & Fruit Drop – Enhances crop retention and yield stability.",
      "Enhances Fruit Quality – Improves size, shape, and uniformity.",
      "Quick Correction of Boron Deficiency – Fast absorption through spray or drip.",
    ],
    nutrients: [
      { parameter: "Boron (B) Chelated", value: "10 % (w/w)" },
      { parameter: "Chelating Agent", value: "EDTA" },
      { parameter: "Solubility", value: "100% Water Soluble" },
      { parameter: "pH (1% Solution)", value: "5.5 – 7.5" },
      { parameter: "Appearance", value: "White / Off-White Free Flowing Powder" },
    ],
    dosages: [
      { crop: "Foliar Spray", dose: "2 – 4 gm per Katha", method: "Mix in 15–20 litres water per Katha" },
      { crop: "Drip Irrigation", dose: "5 gm per Katha", method: "Apply through drip system" },
    ],
  },
];

export default products;
