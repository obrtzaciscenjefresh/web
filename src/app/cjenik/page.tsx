import type { Metadata } from "next";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

export const metadata: Metadata = {
  title: "Cjenik usluga | Fresh",
  description:
    "Cjenik usluga u strojno čitljivom obliku (CSV i XML) s dodatnom cijenom na dan 10. rujna 2026.",
  alternates: {
    canonical: "/cjenik",
  },
};

type PriceList = {
  number: number;
  date: string;
  time: string;
  files: { format: "csv" | "xml"; name: string }[];
};

// Datoteke se imenuju: objekt_adresa_oznaka_brojPohrane_datum_vrijeme.csv|xml
const getPriceLists = (): PriceList[] => {
  const dir = join(process.cwd(), "public", "cjenici");
  if (!existsSync(dir)) return [];

  const lists = new Map<number, PriceList>();
  for (const name of readdirSync(dir)) {
    const match = name.match(/\.(csv|xml)$/);
    if (!match) continue;
    const [, , , number, date, time] = name.replace(/\.(csv|xml)$/, "").split("_");
    const key = Number(number);
    const list = lists.get(key) ?? { number: key, date, time, files: [] };
    list.files.push({ format: match[1] as "csv" | "xml", name });
    lists.set(key, list);
  }
  return Array.from(lists.values()).sort((a, b) => b.number - a.number);
};

const FileLinks = ({ list }: { list: PriceList }) => (
  <div className="flex gap-3">
    {list.files
      .sort((a, b) => a.format.localeCompare(b.format))
      .map((file) => (
        <a
          key={file.format}
          href={`/cjenici/${encodeURIComponent(file.name)}`}
          download
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold uppercase text-white transition-opacity hover:opacity-80"
        >
          {file.format}
        </a>
      ))}
  </div>
);

export default function CjenikPage() {
  const [current, ...archive] = getPriceLists();

  return (
    <main className="flex w-full flex-col items-center px-4 py-16 sm:px-8 lg:px-20">
      <article className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xl font-bold uppercase text-primary">Cjenik usluga</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase text-gray-900">
          Cjenik u strojno čitljivom obliku
        </h1>

        <div className="mt-8 space-y-7 text-gray-700">
          <p>
            Cjenik usluga s dodatnom cijenom (cijena na dan 10. rujna 2026.) objavljujemo u
            CSV i XML obliku. Prethodni cjenici ostaju dostupni u arhivi najmanje 30 dana.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">Važeći cjenik</h2>
            {current ? (
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-blue-100 p-4">
                <span className="font-medium">
                  Objavljeno {current.date} u {current.time}
                </span>
                <FileLinks list={current} />
              </div>
            ) : (
              <p>Cjenik trenutno nije objavljen.</p>
            )}
          </section>

          {archive.length > 0 && (
            <section>
              <h2 className="mb-3 text-xl font-bold text-gray-900">Arhiva cjenika</h2>
              <ul className="space-y-2">
                {archive.map((list) => (
                  <li
                    key={list.number}
                    className="flex flex-wrap items-center justify-between gap-3 border-b py-2"
                  >
                    <span>
                      {list.date} u {list.time}
                    </span>
                    <FileLinks list={list} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}
