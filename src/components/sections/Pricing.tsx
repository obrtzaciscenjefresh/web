import Link from "next/link";
import type { IconType } from "react-icons";
import { FaCouch, FaBed, FaCar, FaRug } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { PriceTag } from "@/components/ui/PriceTag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ANCHOR_DATE,
  currentPrices,
  priceCategories,
  type PriceCategory,
  type PriceItem,
} from "@/data/pricing";
import { formatDateHr } from "@/lib/format";
import { cn } from "@/lib/utils";

const categoryIcons: Record<PriceCategory, IconType> = {
  Tepisi: FaRug,
  Namještaj: FaCouch,
  Madraci: FaBed,
  Vozila: FaCar,
};

const unitNote: Record<PriceItem["unit"], string> = {
  "m²": "",
  kom: "po komadu",
  usluga: "po usluzi",
};

function groupItems(items: readonly PriceItem[]) {
  const groups = new Map<string, PriceItem[]>();
  for (const item of items) {
    groups.set(item.group, [...(groups.get(item.group) ?? []), item]);
  }
  return [...groups.entries()];
}

function CategoryCard({
  category,
  items,
  wide = false,
  className,
}: {
  category: PriceCategory;
  items: readonly PriceItem[];
  wide?: boolean;
  className?: string;
}) {
  const Icon = categoryIcons[category];
  const groups = groupItems(items);
  const twoColumns = wide && groups.length > 1;

  return (
    <article
      className={cn("flex flex-col rounded-3xl border border-slate-200 bg-white p-6 sm:p-8", className)}
    >
      <header className="mb-2 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-lg text-primary">
          <Icon aria-hidden />
        </span>
        <h3 className="text-xl font-bold text-ink">{category}</h3>
      </header>
      <ul className={cn("grid", twoColumns && "md:grid-cols-2 md:gap-x-12")}>
        {groups.map(([group, groupItems], index) => (
          <li
            key={group}
            className={cn(
              "border-slate-100 py-4",
              index > 0 && "border-t",
              twoColumns && index === 1 && "md:border-t-0"
            )}
          >
            {groupItems.length > 1 && <p className="mb-2 font-semibold text-ink">{group}</p>}
            <ul className="flex flex-col gap-3">
              {groupItems.map((item) => (
                <li key={item.code} className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={
                        groupItems.length > 1 ? "text-sm text-muted" : "font-semibold text-ink"
                      }
                    >
                      {item.variant ?? item.group}
                    </p>
                    {groupItems.length === 1 && unitNote[item.unit] && (
                      <p className="text-xs text-muted">{unitNote[item.unit]}</p>
                    )}
                  </div>
                  <PriceTag item={item} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  codes?: string[];
  className?: string;
};

export function Pricing({
  id = "usluge",
  eyebrow = "Cjenik",
  title = "Jasne cijene, bez skrivenih troškova",
  description = "Preuzimanje i dostava su besplatni. Uz svaku cijenu navodimo i cijenu na referentni datum, kako propisuju odluke Vlade RH (NN 101/2026).",
  codes,
  className,
}: Props) {
  const items = codes
    ? currentPrices.filter((item) => codes.includes(item.code))
    : currentPrices;
  const categories = priceCategories.filter((category) =>
    items.some((item) => item.category === category)
  );
  const itemsOf = (category: PriceCategory) =>
    items.filter((item) => item.category === category);
  const [featured, ...rest] = categories;
  // Longest category goes on its own beside the remaining ones stacked, so both columns end level.
  const [tall, ...stacked] = [...rest].sort((a, b) => itemsOf(b).length - itemsOf(a).length);

  return (
    <section id={id} className={cn("bg-slate-50 py-16 sm:py-24", className)}>
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="flex flex-col gap-6">
          <CategoryCard category={featured} items={itemsOf(featured)} wide />
          {tall && stacked.length === 0 && (
            <CategoryCard category={tall} items={itemsOf(tall)} wide />
          )}
          {tall && stacked.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-2">
              <CategoryCard category={tall} items={itemsOf(tall)} />
              <div className="flex flex-col gap-6">
                {stacked.map((category, index) => (
                  <CategoryCard
                    key={category}
                    category={category}
                    items={itemsOf(category)}
                    className={cn(index === stacked.length - 1 && "flex-1")}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="text-sm leading-6 text-muted">
          Sve cijene su u eurima. &quot;Cijena na {formatDateHr(ANCHOR_DATE)}&quot; je cijena
          koja je za istu uslugu vrijedila na taj dan; za usluge uvedene kasnije navodi se
          cijena na dan uvođenja. Strojno čitljiv cjenik dostupan je na stranici{" "}
          <Link href="/cjenik" className="font-semibold text-primary underline underline-offset-2">
            Cjenik (CSV / XML)
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
