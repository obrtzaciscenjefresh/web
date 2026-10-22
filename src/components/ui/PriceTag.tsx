import type { PriceItem } from "@/data/pricing";
import { formatDateHr, formatEuro } from "@/lib/format";
import { cn } from "@/lib/utils";

const unitSuffix: Record<PriceItem["unit"], string> = {
  "m²": "/ m²",
  kom: "",
  usluga: "",
};

export function anchorLabel(item: PriceItem) {
  return `Cijena na ${formatDateHr(item.anchorDate)}: ${item.priceFrom ? "od " : ""}${formatEuro(item.anchorPrice)}`;
}

export function PriceTag({
  item,
  size = "md",
  align = "right",
  className,
}: {
  item: PriceItem;
  size?: "md" | "lg";
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "right" ? "items-end text-right" : "items-start text-left",
        className
      )}
    >
      <p
        className={cn(
          "font-bold whitespace-nowrap text-primary",
          size === "lg" ? "text-3xl" : "text-lg"
        )}
      >
        {item.priceFrom && <span className="mr-1 text-sm font-semibold text-muted">od</span>}
        {formatEuro(item.price)}
        {unitSuffix[item.unit] && (
          <span className="ml-1 text-sm font-semibold text-muted">{unitSuffix[item.unit]}</span>
        )}
        {item.sale && <span className="ml-2 text-sm font-semibold text-secondary-700">{item.sale.name}</span>}
      </p>
      <p className="text-sm font-medium text-muted">
        Cijena na {formatDateHr(item.anchorDate)}:{" "}
        <span className="whitespace-nowrap">
          {item.priceFrom ? "od " : ""}
          {formatEuro(item.anchorPrice)}
        </span>
      </p>
    </div>
  );
}
