"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import downloads from "@/data/downloads";
import type { DownloadItem } from "@/data/downloads";

function DownloadRow({ item, requestLabel, downloadLabel }: { item: DownloadItem; requestLabel: string; downloadLabel: string }) {
  const requestHref =
    "https://wa.me/919035708943?text=" +
    encodeURIComponent(`Hello Urvar Natural, please send me: ${item.title}`);

  return (
    <Card className="p-5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <span className="w-10 h-10 rounded-lg bg-urvar-light text-urvar-green flex items-center justify-center font-bold shrink-0">
          ↓
        </span>
        <span className="font-medium text-urvar-dark truncate">{item.title}</span>
      </div>
      {item.file ? (
        <a
          href={item.file}
          download
          className="shrink-0 text-sm font-semibold text-urvar-green hover:text-urvar-dark whitespace-nowrap"
        >
          {downloadLabel}
        </a>
      ) : (
        <a
          href={requestHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-semibold text-urvar-green hover:text-urvar-dark whitespace-nowrap"
        >
          {requestLabel}
        </a>
      )}
    </Card>
  );
}

export default function DownloadsPage() {
  const { t } = useLang();
  const cataloguesAndKits = downloads.filter((d) => d.type !== "tds");
  const tds = downloads.filter((d) => d.type === "tds");
  const anyMissing = downloads.some((d) => !d.file);

  return (
    <>
      <Section bg="dark" className="!py-12 sm:!py-16">
        <nav className="text-sm text-urvar-light/80 mb-5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{t.downloads.heading}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold">{t.downloads.heading}</h1>
        <p className="mt-4 max-w-2xl text-urvar-light/90 leading-relaxed">{t.downloads.sub}</p>
      </Section>

      <Section bg="white">
        {anyMissing && (
          <p className="mb-8 text-sm text-neutral-500 bg-urvar-light rounded-lg px-4 py-3">
            {t.downloads.request_note}
          </p>
        )}

        <h2 className="text-xl font-bold text-urvar-dark mb-4">{t.downloads.catalogue_section}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {cataloguesAndKits.map((item) => (
            <DownloadRow key={item.id} item={item} requestLabel={t.downloads.request} downloadLabel={t.downloads.download} />
          ))}
        </div>

        <h2 className="text-xl font-bold text-urvar-dark mb-4 mt-12">{t.downloads.tds_section}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tds.map((item) => (
            <DownloadRow key={item.id} item={item} requestLabel={t.downloads.request} downloadLabel={t.downloads.download} />
          ))}
        </div>
      </Section>
    </>
  );
}
