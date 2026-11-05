import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin – Urvar Natural",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-neutral-50 text-ink">{children}</div>;
}
