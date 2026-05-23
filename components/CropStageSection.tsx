"use client";

import { useLang } from "@/context/LangContext";

const stages = [
  {
    number: "1",
    emoji: "🌱",
    name: "Seed Germination",
    kit: "Root & Soil Recovery Kit",
    products: ["Humic Acid Liquid", "PROM (Humic Based)", "Zinc EDTA"],
  },
  {
    number: "2",
    emoji: "🌿",
    name: "Seedling Stage",
    kit: "Organic Soil Builder Kit",
    products: ["Vermicompost", "PROM", "Humic Acid"],
  },
  {
    number: "3",
    emoji: "🌾",
    name: "Vegetative Growth",
    kit: "Root & Soil Recovery Kit",
    products: ["Humic Acid Liquid", "PROM (Humic Based)", "Zinc EDTA"],
  },
  {
    number: "4",
    emoji: "🌸",
    name: "Flowering Stage",
    kit: "Flower & Fruit Kit",
    products: ["PROM Humic Flowering Booster", "Boron EDTA", "Humic Liquid"],
  },
  {
    number: "5",
    emoji: "🍅",
    name: "Fruit & Harvest",
    kit: "Flower & Fruit Kit",
    products: ["Humic Acid Liquid", "PROM (Humic Based)", "Zinc EDTA"],
  },
];

export default function CropStageSection() {
  const { t } = useLang();

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-urvar-dark mb-3">{t.home.crop_heading}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t.home.crop_sub}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-urvar-green/30 via-urvar-green to-urvar-green/30" />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {stages.map((stage, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                {/* Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-urvar-dark flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">{stage.emoji}</span>
                </div>
                <span className="text-xs font-bold text-urvar-green uppercase tracking-wide mb-1">
                  Stage {stage.number}
                </span>
                <h3 className="font-bold text-urvar-dark mb-2 text-sm">{stage.name}</h3>
                <p className="text-xs text-urvar-green font-semibold mb-2">{stage.kit}</p>
                <ul className="text-xs text-gray-500 space-y-0.5">
                  {stage.products.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
