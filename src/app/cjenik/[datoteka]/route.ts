import { priceListPublications } from "@/data/pricing";
import {
  findPublicationByFileName,
  priceListFileName,
  priceListResponse,
} from "@/lib/price-list";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return priceListPublications.flatMap((publication) =>
    (["csv", "xml"] as const).map((format) => ({
      datoteka: priceListFileName(publication, format),
    }))
  );
}

export async function GET(_request: Request, { params }: RouteContext<"/cjenik/[datoteka]">) {
  const { datoteka } = await params;
  const match = findPublicationByFileName(datoteka);
  if (!match) {
    return new Response("Not found", { status: 404 });
  }
  return priceListResponse(match.publication, match.format);
}
