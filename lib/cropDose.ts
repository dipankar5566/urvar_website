import type { Crop } from "@/data/crops";
import type { DosageRow, Product } from "@/data/products";

// West Bengal bigha = 20 katha (14,400 sq ft); 1 acre = 43,560 sq ft ≈ 60.5 katha.
export const KATHA_PER_BIGHA = 20;
export const KATHA_PER_ACRE = 60.5;

const METHOD_ROWS = ["Foliar Spray", "Drip Irrigation", "Soil Drenching"];

export type DoseMatch =
  | { kind: "method"; row: DosageRow }
  | { kind: "crop"; row: DosageRow; rowLabel: string; exact: boolean };

const rowLabel = (row: DosageRow) => row.crop.split(" (")[0].trim();

/** The label row to show for this product on this crop, or null when the label has no usable row. */
export function resolveDose(product: Product, crop: Crop): DoseMatch | null {
  const foliar = product.dosages.find((r) => r.crop === "Foliar Spray");
  const method = foliar ?? product.dosages.find((r) => METHOD_ROWS.includes(r.crop));
  if (method) return { kind: "method", row: method };

  for (const [i, name] of crop.doseRows.entries()) {
    const row = product.dosages.find((r) => rowLabel(r) === name);
    if (row) return { kind: "crop", row, rowLabel: name, exact: i === 0 && crop.doseRowExact };
  }
  return null;
}

export interface ConvertedDose {
  katha: string;
  bigha: string;
  acre: string;
}

const UNIT_UP: Record<string, { to: string; factor: number }> = {
  kg: { to: "t", factor: 1000 },
  g: { to: "kg", factor: 1000 },
  ml: { to: "L", factor: 1000 },
};

function fmt(n: number, precise: boolean): string {
  const v = precise || n < 10 ? Math.round(n * 10) / 10 : Math.round(n);
  return v.toLocaleString("en-IN", { maximumFractionDigits: 1 });
}

function scale(lo: number, hi: number, unit: string, factor: number): string {
  let a = lo * factor;
  let b = hi * factor;
  let u = unit;
  let precise = false;
  const up = UNIT_UP[unit];
  if (up && b >= up.factor) {
    a /= up.factor;
    b /= up.factor;
    u = up.to;
    precise = true;
  }
  return a === b ? `${fmt(a, precise)} ${u}` : `${fmt(a, precise)}–${fmt(b, precise)} ${u}`;
}

/** Converts a per-katha label dose like "25 – 35 kg" or "3 – 7 gm per Katha"; null if unparseable. */
export function convertPerKatha(dose: string): ConvertedDose | null {
  const m = dose.match(/^\s*([\d.]+)\s*(?:[–-]\s*([\d.]+))?\s*(kg|gm|g|ml)\b/i);
  if (!m) return null;
  const lo = Number(m[1]);
  const hi = m[2] ? Number(m[2]) : lo;
  const unit = m[3].toLowerCase() === "gm" ? "g" : m[3].toLowerCase();
  if (!Number.isFinite(lo) || !Number.isFinite(hi)) return null;
  return {
    katha: scale(lo, hi, unit, 1),
    bigha: scale(lo, hi, unit, KATHA_PER_BIGHA),
    acre: scale(lo, hi, unit, KATHA_PER_ACRE),
  };
}
