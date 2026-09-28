import type { CropSource } from "@/data/crops";

export default function SourcesList({
  heading,
  sources,
  note,
}: {
  heading: string;
  sources: CropSource[];
  note: string;
}) {
  return (
    <div id="sources" className="scroll-mt-24 border-t border-hairline pt-6 flex flex-col gap-2">
      <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-mute mb-1">{heading}</p>
      <ol className="flex flex-col gap-2 list-none">
        {sources.map((s, i) => (
          <li key={s.id} className="text-[13px] leading-relaxed text-charcoal">
            {i + 1}. {s.citation}{" "}
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-urvar-green hover:text-urvar-dark break-all">
              {s.url.replace(/^https?:\/\//, "")}
            </a>
          </li>
        ))}
      </ol>
      <p className="text-[13px] leading-relaxed text-charcoal">{note}</p>
    </div>
  );
}
