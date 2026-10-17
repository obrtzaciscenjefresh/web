// Generira CSV i XML cjenik usluga u public/cjenici/ (Odluka o objavi cjenika, NN 101/2026, 110/2026).
// Pokreni nakon svake promjene cijena: npm run cjenik
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const outDir = join(root, "public", "cjenici");
const { object, services } = JSON.parse(
  readFileSync(join(root, "src", "app", "data", "cjenik.json"), "utf8")
);

const money = (n) => n.toFixed(2);

const rows = [];
for (const service of services) {
  if (service.options.length === 0) {
    console.warn(`UPOZORENJE: "${service.name}" nema fiksnu cijenu i nije u cjeniku.`);
    continue;
  }
  for (const o of service.options) {
    const name = [
      service.name,
      o.label && `- ${o.label}`,
      o.unit && `(cijena po ${o.unit})`,
      o.from && "(cijena od)",
    ]
      .filter(Boolean)
      .join(" ");
    rows.push({
      name,
      price: money(o.price),
      special: "",
      anchor: money(o.anchorPrice),
    });
  }
}

const csvCell = (v) => `"${String(v).replaceAll('"', '""')}"`;
const csv =
  [
    ["Naziv usluge", "Maloprodajna cijena", "Poseban oblik prodaje", "Dodatna cijena"],
    ...rows.map((r) => [r.name, r.price, r.special, r.anchor]),
  ]
    .map((line) => line.map(csvCell).join(","))
    .join("\r\n") + "\r\n";

const xmlEscape = (v) =>
  String(v)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<cjenik>
${rows
  .map(
    (r) => `  <usluga>
    <naziv_usluge>${xmlEscape(r.name)}</naziv_usluge>
    <maloprodajna_cijena>${r.price}</maloprodajna_cijena>
    <poseban_oblik_prodaje>${xmlEscape(r.special)}</poseban_oblik_prodaje>
    <dodatna_cijena>${r.anchor}</dodatna_cijena>
  </usluga>`
  )
  .join("\n")}
</cjenik>
`;

mkdirSync(outDir, { recursive: true });
const existing = readdirSync(outDir)
  .filter((f) => f.endsWith(".csv"))
  .sort();

// Broj pohrane je redni broj datoteke, a prethodni cjenici se ne prepisuju.
const storageNumber = (f) => Number(f.split("_")[3]);
const last = existing.sort((a, b) => storageNumber(a) - storageNumber(b)).at(-1);
if (last && readFileSync(join(outDir, last), "utf8") === csv) {
  console.log(`Cijene se nisu promijenile, zadnji cjenik: ${last}`);
  process.exit(0);
}

const parts = Object.fromEntries(
  new Intl.DateTimeFormat("hr-HR", {
    timeZone: "Europe/Zagreb",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  })
    .formatToParts(new Date())
    .map((p) => [p.type, p.value])
);
const stamp = `${parts.day}.${parts.month}.${parts.year}_${parts.hour}:${parts.minute}`;
const number = (last ? storageNumber(last) : 0) + 1;
const base = `${object.kind}_${object.address}_${object.code}_${number}_${stamp}`;

if (existsSync(join(outDir, `${base}.csv`))) {
  throw new Error(`Datoteka već postoji: ${base}`);
}
writeFileSync(join(outDir, `${base}.csv`), csv);
writeFileSync(join(outDir, `${base}.xml`), xml);
console.log(`Generirano: ${base}.csv i .xml`);
