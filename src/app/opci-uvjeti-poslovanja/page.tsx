import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opći uvjeti poslovanja | Fresh",
  description:
    "Opći uvjeti poslovanja za usluge čišćenja i održavanja interijera. Informacije o narudžbi, plaćanju, reklamacijama i odgovornostima.",
  alternates: {
    canonical: "/opci-uvjeti-poslovanja",
  },
};

export default function OpciUvjetiPoslovanjaPage() {
  return (
    <main className="flex w-full flex-col items-center px-4 py-16 sm:px-8 lg:px-20">
      <article className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xl font-bold uppercase text-primary">Opći uvjeti poslovanja</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase text-gray-900">
          Usluge čišćenja i održavanja
        </h1>

        <div className="mt-8 space-y-7 text-gray-700">
          <p>
            Ovim Općim uvjetima poslovanja uređuju se odnosi između tvrtke Fresh i
            klijenta u vezi s pružanjem usluga čišćenja, održavanja i usluga vezanih uz
            zaštitu i revitalizaciju interijera te tekstila.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">1. Područje primjene</h2>
            <p>
              Ovi uvjeti primjenjuju se na sve usluge pružene od strane Fresh, uključujući
              čišćenje tepiha, presvlaka, namještaja, radnih površina, stepenica i sličnih
              predmetnih usluga, u skladu s narudžbom i pravnim propisima.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">2. Narudžba i prihvat usluge</h2>
            <p>
              Klijent može naručiti uslugu telefonom, e-mailom, putem kontakt obrasca ili
              ostalim komunikacijskim kanalima. Narudžba se smatra prihvaćenom nakon
              potvrde usluge i dogovora o vremenu realizacije.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">3. Cijene i način plaćanja</h2>
            <p>
              Cijene usluga određuju se prema vrsti usluge, količini, složenosti radova,
              potrebi za dodatnim materijalima i lokaciji. Plaćanje se vrši prema ugovorenom
              modelu, a dodatni troškovi evidentiraju se prije izvršenja usluge.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">4. Rokovi i realizacija</h2>
            <p>
              Fresh će nastojati poštivati dogovorene rokove, no rokovi su okvirni i ovise o
              stvarnim uvjetima, dostupnosti opreme, broju narudžbi i drugim vanjskim
              okolnostima. O eventualnim odgodama klijent se pravovremeno obavještava.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">5. Obveze klijenta</h2>
            <p>
              Klijent je dužan osigurati pristup objektu, pravilan opis prostora ili roba,
              informacije o potencijalnim otežavajućim čimbenicima i odgovarajuće uvjete za
              izvođenje usluge. Svako kasnije odstupanje od dogovorenih uvjeta ne može se
              koristiti kao razlog za odgodu ili smanjenje odgovornosti.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">6. Reklamacije</h2>
            <p>
              Reklamacije na kvalitetu usluge ili izvedeni rad moraju se podnijeti odmah po
              završetku usluge, a u svakom slučaju najkasnije u razumnom roku od zaprimanja
              usluge. Fresh će uvažiti reklamacije i postupati u skladu s utvrđenim
              nepravilnostima, njihovim uzrocima i važećim pravnim propisima.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">7. Ograničenje odgovornosti</h2>
            <p>
              Fresh ne odgovara za štete nastale uslijed prirodnog trošenja, prethodnog
              oštećenja, nepažljive uporabe, neodgovarajućeg čuvanja ili neprimjerenog
              korištenja opreme ili predmeta. Odgovornost se ograničava na stvarni iznos
              ugovorene usluge i utvrđenih šteta u skladu s dokazivim činjenicama.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">8. Privatnost i zaštita podataka</h2>
            <p>
              Osobni podaci klijenta obrađuju se isključivo radi pružanja usluge,
              komunikacije, evidencije i poslovanja. Više informacija o obradi podataka
              dostupno je u Pravilima privatnosti.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">9. Završne odredbe</h2>
            <p>
              Ovim uvjetima reguliraju se odnosi između tvrtke i klijenta, a u slučaju
              nesuglasica primjenjuju se propisi Republike Hrvatske. Fresh zadržava pravo na
              izmjenu ovih uvjeta uz objavu na web stranici.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
