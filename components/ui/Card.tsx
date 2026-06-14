import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-neutral-200 shadow-e1 ${
        interactive
          ? "transition-shadow transition-transform duration-200 hover:shadow-e2 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
