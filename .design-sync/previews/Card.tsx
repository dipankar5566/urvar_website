import { Card, Badge } from "@urvar/design-system";

export const Static = () => (
  <div className="grid grid-cols-2 gap-5 p-6 bg-soft-cloud max-w-2xl">
    <Card className="p-6">
      <p className="text-[11px] font-bold text-stone tracking-[1.5px] uppercase mb-2">Quality Controlled</p>
      <p className="text-mute text-[14px] leading-relaxed">
        Batch-tested and transparently labelled, with verifiable nutrient data on every pack.
      </p>
    </Card>
    <Card className="p-6">
      <p className="text-[11px] font-bold text-stone tracking-[1.5px] uppercase mb-2">Scientifically Formulated</p>
      <p className="text-mute text-[14px] leading-relaxed">
        Lab-developed nutrient profiles so crops get exactly what they need.
      </p>
    </Card>
  </div>
);

export const Interactive = () => (
  <div className="p-6 bg-soft-cloud">
    <Card interactive className="p-6 max-w-xs flex flex-col gap-3">
      <Badge tone="earth" className="self-start">Organic Manures</Badge>
      <h3 className="font-bold text-ink text-base">Organic Manures</h3>
      <p className="text-mute text-[13px] leading-relaxed">
        Vermicompost, FYM and PROM that rebuild soil from the ground up.
      </p>
      <span className="text-urvar-green font-bold text-xs">Explore →</span>
    </Card>
  </div>
);
