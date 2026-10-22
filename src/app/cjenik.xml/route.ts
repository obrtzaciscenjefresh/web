import { currentPublication } from "@/data/pricing";
import { priceListResponse } from "@/lib/price-list";

export const dynamic = "force-static";

export function GET() {
  return priceListResponse(currentPublication, "xml");
}
