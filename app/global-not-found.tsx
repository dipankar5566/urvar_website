import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import NotFound from "@/app/(en)/not-found";

// Unmatched URLs: there is no top-level layout to wrap app/(en)/not-found.tsx.
export const metadata: Metadata = {
  title: "Page Not Found – Urvar Natural",
};

export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <NotFound />
    </SiteShell>
  );
}
