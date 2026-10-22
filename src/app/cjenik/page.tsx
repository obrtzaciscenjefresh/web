import type { Metadata } from "next";
import { FaFileCsv, FaFileCode } from "react-icons/fa6";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { anchorLabel } from "@/components/ui/PriceTag";
import {
  ANCHOR_DATE,
  currentPublication,
  currentPrices,
  priceListPublications,
} from "@/data/pricing";
import { formatDateHr, formatDateTimeHr, formatEuro } from "@/lib/format";
import { priceListFileName } from "@/lib/price-list";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cjenik usluga (CSV / XML)",
  description:
    "Važeći cjenik usluga pranja tepiha i čišćenja obrta Fresh s cijenama na referentni datum, u strojno čitljivom CSV i XML formatu.",
  alternates: { canonical: "/cjenik" },
};

const files = [
  { format: "csv", label: "CSV", Icon: FaFileCsv },
  { format: "xml", label: "XML", Icon: FaFileCode },
] as const;

export default function CjenikPage() {
  const archive = [...priceListPublications].reverse();

  return (
    <>
      <Breadcrumbs items={[{ href: "/cjenik", label: "Cjenik" }]} />
      <Container className="flex flex-col gap-12 py-10 sm:py-16">
        <SectionHeading
          as="h1"
          eyebrow="Cjenik"
          title="Cjenik usluga"
          description={
            <>
              Važeći cjenik usluga s cijenama na {formatDateHr(ANCHOR_DATE)}, objavljen sukladno
              Odluci o objavi cjenika proizvoda i usluga i Odluci o isticanju dodatne cijene
              (NN 101/2026). Objavljeno {formatDateTimeHr(currentPublication.publishedAt)}.
            </>
          }
        />

        <section aria-labelledby="datoteke" className="flex flex-col gap-4">
          <h2 id="datoteke" className="text-xl font-bold text-ink">
            Strojno čitljive datoteke
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {files.map(({ format, label, Icon }) => {
              const name = priceListFileName(currentPublication, format);
              return (
                <li key={format}>
                  <a
                    href={`/cjenik/${name}`}
                    className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-slate-900/5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-xl text-primary">
                      <Icon aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold text-ink">Cjenik ({label})</span>
                      <span className="block text-xs break-all text-muted">{name}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-muted">
            Stalne adrese najnovijeg cjenika:{" "}
            <a href="/cjenik.csv" className="font-semibold text-primary underline underline-offset-2">
              {site.url}/cjenik.csv
            </a>{" "}
            i{" "}
            <a href="/cjenik.xml" className="font-semibold text-primary underline underline-offset-2">
              {site.url}/cjenik.xml
            </a>
            . Datoteke su u UTF-8 kodiranju, iznosi su u eurima.
          </p>
        </section>

        <section aria-labelledby="usluge" className="flex flex-col gap-4">
          <h2 id="usluge" className="text-xl font-bold text-ink">
            Usluge i cijene
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-slate-200">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-5 py-4">Usluga</th>
                  <th scope="col" className="px-5 py-4">Šifra</th>
                  <th scope="col" className="px-5 py-4">Jedinica</th>
                  <th scope="col" className="px-5 py-4 text-right">Cijena</th>
                  <th scope="col" className="px-5 py-4 text-right">Sidrena cijena</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentPrices.map((item) => (
                  <tr key={item.code}>
                    <th scope="row" className="px-5 py-4 font-semibold text-ink">
                      {item.name}
                    </th>
                    <td className="px-5 py-4 text-muted">{item.code}</td>
                    <td className="px-5 py-4 text-muted">{item.unit}</td>
                    <td className="px-5 py-4 text-right font-bold whitespace-nowrap text-primary">
                      {item.priceFrom ? "od " : ""}
                      {formatEuro(item.price)}
                    </td>
                    <td className="px-5 py-4 text-right whitespace-nowrap text-muted">
                      {anchorLabel(item)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="arhiva" className="flex flex-col gap-4">
          <h2 id="arhiva" className="text-xl font-bold text-ink">
            Objavljeni cjenici
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            {archive.map((publication) => (
              <li key={publication.publishedAt} className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-semibold text-ink">
                  {formatDateTimeHr(publication.publishedAt)} (pohrana {publication.sequence})
                </span>
                {files.map(({ format, label }) => (
                  <a
                    key={format}
                    href={`/cjenik/${priceListFileName(publication, format)}`}
                    className="font-semibold text-primary underline underline-offset-2"
                  >
                    {label}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm leading-6 text-muted">
          Pružatelj usluge: {site.legalName}, {fullAddress}, MB {site.registrationNumber}.
          Oznaka uslužnog objekta: {site.premises.code}.
        </p>
      </Container>
    </>
  );
}
