import type { ReactNode } from "react";

type Tone = "green" | "dark" | "earth" | "leaf" | "neutral" | "ink";

const tones: Record<Tone, string> = {
  green: "bg-urvar-light text-urvar-dark",
  dark: "bg-urvar-dark text-white",
  earth: "bg-urvar-earth-light text-urvar-earth",
  leaf: "bg-urvar-leaf/15 text-urvar-dark",
  neutral: "bg-neutral-100 text-neutral-700",
  ink: "bg-soft-cloud text-ink border border-hairline",
};

export default function Badge({
  children,
  tone = "green",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
