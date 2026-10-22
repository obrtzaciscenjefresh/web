import {
  priceListPublications,
  type PriceItem,
  type PriceListPublication,
} from "@/data/pricing";
import { zagrebParts } from "@/lib/format";
import { site } from "@/lib/site";

export type PriceListFormat = "csv" | "xml";

const CSV_HEADER = [
  "Naziv usluge",
  "Šifra",
  "Jedinica mjere",
  "Maloprodajna cijena",
  "Posebni oblik prodaje",
  "Naziv posebnog oblika prodaje",
  "Sidrena cijena",
  "Datum sidrene cijene",
  "Napomena",
];

function toFileToken(value: string) {
  return value
    .replace(/Đ/g, "DJ")
    .replace(/đ/g, "dj")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export function priceListFileName(
  publication: PriceListPublication,
  format: PriceListFormat
) {
  const { day, month, year, hour, minute } = zagrebParts(publication.publishedAt);
  const address = toFileToken(
    `${site.address.street} ${site.address.postalCode} ${site.address.city}`
  );
  return [
    site.premises.type,
    address,
    toFileToken(site.premises.code),
    String(publication.sequence).padStart(2, "0"),
    `${day}${month}${year}`,
    `${hour}${minute}`,
  ].join("_") + `.${format}`;
}

export function findPublicationByFileName(fileName: string) {
  for (const publication of priceListPublications) {
    for (const format of ["csv", "xml"] as const) {
      if (priceListFileName(publication, format) === fileName) {
        return { publication, format };
      }
    }
  }
  return null;
}

function amount(value: number) {
  return value.toFixed(2);
}

function note(item: PriceItem) {
  return item.priceFrom ? "Početna cijena (od)" : "";
}

function csvCell(value: string) {
  return /[",\r\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

export function renderCsv(publication: PriceListPublication) {
  const rows = publication.items.map((item) => [
    item.name,
    item.code,
    item.unit,
    amount(item.price),
    item.sale ? "DA" : "NE",
    item.sale?.name ?? "",
    amount(item.anchorPrice),
    item.anchorDate,
    note(item),
  ]);
  const lines = [CSV_HEADER, ...rows].map((row) => row.map(csvCell).join(","));
  // BOM so Excel shows Croatian characters correctly.
  return "\uFEFF" + lines.join("\r\n") + "\r\n";
}

function xmlText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function element(name: string, value: string) {
  return value ? `<${name}>${xmlText(value)}</${name}>` : `<${name}/>`;
}

export function renderXml(publication: PriceListPublication) {
  const services = publication.items
    .map(
      (item) =>
        "    <Usluga>" +
        element("NazivUsluge", item.name) +
        element("Sifra", item.code) +
        element("JedinicaMjere", item.unit) +
        element("MaloprodajnaCijena", amount(item.price)) +
        element("PosebniOblikProdaje", item.sale ? "DA" : "NE") +
        element("NazivPosebnogOblikaProdaje", item.sale?.name ?? "") +
        element("SidrenaCijena", amount(item.anchorPrice)) +
        element("DatumSidreneCijene", item.anchorDate) +
        element("Napomena", note(item)) +
        "</Usluga>"
    )
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<Cjenik vrsta="usluge" valuta="EUR" objavljeno="${xmlText(publication.publishedAt)}" brojPohrane="${publication.sequence}">`,
    "  <Obveznik>" +
      element("Naziv", site.legalName) +
      element("MaticniBroj", site.registrationNumber) +
      element("Djelatnost", site.activity) +
      element("Web", site.url) +
      "</Obveznik>",
    "  <ProdajniObjekt>" +
      element("Oblik", site.premises.type) +
      element("Adresa", site.address.street) +
      element("PostanskiBroj", site.address.postalCode) +
      element("Mjesto", site.address.city) +
      element("Oznaka", site.premises.code) +
      "</ProdajniObjekt>",
    `  <Usluge broj="${publication.items.length}">`,
    services,
    "  </Usluge>",
    "</Cjenik>",
    "",
  ].join("\n");
}

export function priceListResponse(
  publication: PriceListPublication,
  format: PriceListFormat
) {
  const body = format === "csv" ? renderCsv(publication) : renderXml(publication);
  return new Response(body, {
    headers: {
      "Content-Type":
        format === "csv" ? "text/csv; charset=utf-8" : "application/xml; charset=utf-8",
      "Content-Disposition": `attachment; filename="${priceListFileName(publication, format)}"`,
      "X-Robots-Tag": "noindex",
    },
  });
}
