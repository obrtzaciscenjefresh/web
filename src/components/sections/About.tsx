import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  "Posvećenost svakom tepihu",
  "Profesionalno osoblje",
  "Najmoderniji strojevi za pranje i sušenje",
  "Ekološki prihvatljiva sredstva",
];

export function About() {
  return (
    <section id="onama" className="bg-slate-50 py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Image
          src="/kombi-dostava.jpg"
          alt="Fresh vozilo za besplatno preuzimanje i dostavu tepiha"
          width={1600}
          height={1200}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-4/3 w-full rounded-[2rem] object-cover"
        />
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="O nama"
            title="Praonica tepiha kojoj Zagreb vjeruje"
            description="Specijalizirani smo za profesionalno i dubinsko pranje tepiha u Zagrebu. Koristimo najnovije tehnike i ekološki prihvatljiva sredstva, a tepih vraćamo čist, svjež i potpuno suh u najkraćem mogućem roku."
          />
          <p className="leading-7 text-muted">
            Osim kućnih i uredskih tepiha, čistimo namještaj, madrace i automobilske
            presvlake. Preuzimanje i dostava su besplatni, pa je cijeli proces jednostavan i
            bezbrižan.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 font-semibold text-ink">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs text-white">
                  <FaCheck aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
