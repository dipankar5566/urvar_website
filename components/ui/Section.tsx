import type { ReactNode } from "react";
import Container from "./Container";

type Bg = "white" | "mint" | "earth" | "dark";

const backgrounds: Record<Bg, string> = {
  white: "bg-white text-neutral-800",
  mint: "bg-urvar-light text-neutral-800",
  earth: "bg-urvar-earth-light text-neutral-800",
  dark: "bg-urvar-dark text-white",
};

export default function Section({
  children,
  bg = "white",
  className = "",
  containerClassName = "",
  id,
}: {
  children: ReactNode;
  bg?: Bg;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 lg:py-24 ${backgrounds[bg]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
