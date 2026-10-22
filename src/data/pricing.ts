export const ANCHOR_DATE = "2026-09-10";

export const priceCategories = ["Tepisi", "Namještaj", "Madraci", "Vozila"] as const;
export type PriceCategory = (typeof priceCategories)[number];

export type PriceItem = {
  code: string;
  name: string;
  group: string;
  variant?: string;
  category: PriceCategory;
  unit: "m²" | "kom" | "usluga";
  price: number;
  anchorPrice: number;
  anchorDate: string;
  priceFrom?: boolean;
  sale?: { name: string };
};

export type PriceListPublication = {
  publishedAt: string;
  sequence: number;
  items: readonly PriceItem[];
};

const items: readonly PriceItem[] = [
  { code: "TEP-01", name: "Pranje kućnih tepiha", group: "Kućni tepisi", category: "Tepisi", unit: "m²", price: 6, anchorPrice: 6, anchorDate: ANCHOR_DATE },
  // Previously "po dogovoru"; the anchor price is the price on the day it was first published.
  { code: "TEP-02", name: "Pranje uredskih tepiha i tapisona", group: "Uredski tepisi i tapisoni", category: "Tepisi", unit: "m²", price: 3.5, anchorPrice: 3.5, anchorDate: "2026-10-18", priceFrom: true },
  { code: "NAM-01", name: "Čišćenje kutne garniture - mala", group: "Kutna garnitura", variant: "Mala", category: "Namještaj", unit: "kom", price: 60, anchorPrice: 60, anchorDate: ANCHOR_DATE },
  { code: "NAM-02", name: "Čišćenje kutne garniture - srednja", group: "Kutna garnitura", variant: "Srednja", category: "Namještaj", unit: "kom", price: 75, anchorPrice: 75, anchorDate: ANCHOR_DATE },
  { code: "NAM-03", name: "Čišćenje kutne garniture - XL", group: "Kutna garnitura", variant: "XL", category: "Namještaj", unit: "kom", price: 85, anchorPrice: 85, anchorDate: ANCHOR_DATE },
  { code: "NAM-04", name: "Čišćenje trosjeda", group: "Trosjed", category: "Namještaj", unit: "kom", price: 55, anchorPrice: 55, anchorDate: ANCHOR_DATE },
  { code: "NAM-05", name: "Čišćenje dvosjeda", group: "Dvosjed", category: "Namještaj", unit: "kom", price: 45, anchorPrice: 45, anchorDate: ANCHOR_DATE },
  { code: "NAM-06", name: "Čišćenje fotelje", group: "Fotelja", category: "Namještaj", unit: "kom", price: 25, anchorPrice: 25, anchorDate: ANCHOR_DATE },
  { code: "NAM-07", name: "Čišćenje taburea", group: "Tabure", category: "Namještaj", unit: "kom", price: 15, anchorPrice: 15, anchorDate: ANCHOR_DATE },
  { code: "NAM-08", name: "Čišćenje jastuka", group: "Jastuk", category: "Namještaj", unit: "kom", price: 5, anchorPrice: 5, anchorDate: ANCHOR_DATE },
  { code: "MAD-01", name: "Čišćenje madraca - jednostrano", group: "Madrac", variant: "Jednostrano", category: "Madraci", unit: "kom", price: 30, anchorPrice: 30, anchorDate: ANCHOR_DATE },
  { code: "MAD-02", name: "Čišćenje madraca - obostrano", group: "Madrac", variant: "Obostrano", category: "Madraci", unit: "kom", price: 40, anchorPrice: 40, anchorDate: ANCHOR_DATE },
  { code: "MAD-03", name: "Čišćenje bračnog madraca - jednostrano", group: "Bračni madrac", variant: "Jednostrano", category: "Madraci", unit: "kom", price: 40, anchorPrice: 40, anchorDate: ANCHOR_DATE },
  { code: "MAD-04", name: "Čišćenje bračnog madraca - obostrano", group: "Bračni madrac", variant: "Obostrano", category: "Madraci", unit: "kom", price: 55, anchorPrice: 55, anchorDate: ANCHOR_DATE },
  { code: "VOZ-01", name: "Čišćenje autosjedala", group: "Autosjedala", category: "Vozila", unit: "usluga", price: 90, anchorPrice: 90, anchorDate: ANCHOR_DATE },
  { code: "VOZ-02", name: "Čišćenje automobila", group: "Auto", category: "Vozila", unit: "usluga", price: 130, anchorPrice: 130, anchorDate: ANCHOR_DATE, priceFrom: true },
];

// Append a new entry (with a full items snapshot) on every price change; old entries must stay online for at least 30 days.
export const priceListPublications: readonly PriceListPublication[] = [
  { publishedAt: "2026-10-18T08:00:00+02:00", sequence: 1, items },
];

export const currentPublication = priceListPublications[priceListPublications.length - 1];
export const currentPrices = currentPublication.items;

export function priceByCode(code: string) {
  const item = currentPrices.find((entry) => entry.code === code);
  if (!item) throw new Error(`Unknown price code ${code}`);
  return item;
}
