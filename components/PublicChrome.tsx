"use client";

import { usePathname } from "next/navigation";

/** Renders site-wide chrome (navbar, footer, WhatsApp button) everywhere except /admin. */
export default function PublicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  if (/^\/admin(\/|$)/.test(pathname)) return null;
  return <>{children}</>;
}
