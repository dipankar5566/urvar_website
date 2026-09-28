export default function CropFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="flex flex-col border-t border-hairline">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0} className="group border-b border-hairline py-4 sm:py-5">
          <summary className="cursor-pointer list-none flex justify-between gap-4 text-[15px] sm:text-[17px] font-bold text-ink">
            {f.q}
            <span aria-hidden="true" className="text-urvar-green transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-charcoal">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
