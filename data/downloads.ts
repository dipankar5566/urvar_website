import products from "@/data/products";

export type DownloadType = "catalogue" | "dealerkit" | "tds";

export interface DownloadItem {
  id: string;
  type: DownloadType;
  title: string;
  /**
   * Path to the file in /public (e.g. "/downloads/urvar-catalogue.pdf").
   * When null, the UI shows a "request a copy" action instead of a download
   * link, so the page never points at a missing file.
   */
  file: string | null;
}

// Top-level documents. Drop real PDFs into /public/downloads and set `file`.
const documents: DownloadItem[] = [
  {
    id: "product-catalogue",
    type: "catalogue",
    title: "Product Catalogue",
    file: null,
  },
  {
    id: "dealer-kit",
    type: "dealerkit",
    title: "Dealer / Distributor Kit",
    file: null,
  },
];

// One technical datasheet (TDS) entry per product, generated from the catalogue.
const tdsItems: DownloadItem[] = products.map((p) => ({
  id: `tds-${p.slug}`,
  type: "tds",
  title: `${p.name} — Technical Datasheet`,
  file: null,
}));

const downloads: DownloadItem[] = [...documents, ...tdsItems];

export default downloads;
