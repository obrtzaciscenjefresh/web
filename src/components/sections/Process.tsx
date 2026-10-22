import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Istresanje",
    text: "Tepih se pažljivo istresa kako bi se uklonile prašina, krupne nečistoće i čestice zadržane duboko u vlaknima.",
  },
  {
    title: "Strojno pranje",
    text: "Profesionalni stroj i odabrana sredstva dubinski peru vlakna, uklanjaju mrlje i osvježavaju boje.",
  },
  {
    title: "Centrifugiranje",
    text: "Centrifuga uklanja višak vode, skraćuje sušenje i ubrzava povratak tepiha u upotrebu.",
  },
  {
    title: "Sušenje u komori",
    text: "Kontrolirana temperatura i vlažnost zraka osiguravaju da je tepih potpuno suh u kratkom roku.",
  },
  {
    title: "Usisavanje i osvježavanje",
    text: "Završno usisavanje uklanja preostale nečistoće, a mirisni osvježivač ostavlja ugodan miris.",
  },
  {
    title: "Pakiranje i dostava",
    text: "Čist tepih pakiramo kako bi ostao svjež tijekom prijevoza i dostavljamo ga na vašu adresu.",
  },
];

export function Process({ id = "proces" }: { id?: string }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Kako radimo"
          title="Pranje tepiha u 6 koraka"
          description="Svaki tepih prolazi isti provjereni postupak - od istresanja do dostave na vrata."
        />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col gap-3 rounded-3xl bg-primary-50 p-6 sm:p-8"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-base font-extrabold text-white"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-ink">
                <span className="sr-only">{index + 1}. korak: </span>
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
