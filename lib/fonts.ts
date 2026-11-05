import { Bebas_Neue, Inter } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-campaign",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});
