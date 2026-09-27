import { Badge } from "@urvar/design-system";

export const Tones = () => (
  <div className="flex flex-wrap gap-2 p-6 bg-white">
    <Badge>Organic</Badge>
    <Badge tone="dark">Kharif</Badge>
    <Badge tone="earth">Organic Manures</Badge>
    <Badge tone="leaf">Bio-Stimulants</Badge>
    <Badge tone="neutral">Coming soon</Badge>
    <Badge tone="ink">Micronutrients</Badge>
  </div>
);

export const OnCard = () => (
  <div className="p-6 bg-soft-cloud">
    <div className="bg-white border border-hairline p-5 max-w-sm">
      <div className="flex gap-2 mb-3">
        <Badge tone="dark">Rabi</Badge>
        <Badge tone="earth">Tuber crop</Badge>
      </div>
      <h3 className="font-bold text-ink text-base mb-1">Potato</h3>
      <p className="text-mute text-[13px] leading-relaxed">Stage-wise nutrition program from planting to harvest.</p>
    </div>
  </div>
);
