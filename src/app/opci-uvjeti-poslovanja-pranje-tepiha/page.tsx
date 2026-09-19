import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opći uvjeti poslovanja – pranje tepiha | Fresh",
  description:
    "Opći uvjeti poslovanja za pranje tepiha i usluge čišćenja. Informacije o cijenama, dostavi, reklamacijama i odgovornostima.",
  alternates: {
    canonical: "/opci-uvjeti-poslovanja-pranje-tepiha",
  },
};

export default function OpciUvjetiPranjeTepihPage() {
  return (
    <main className="flex w-full flex-col items-center px-4 py-16 sm:px-8 lg:px-20">
      <article className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xl font-bold uppercase text-primary">Opći uvjeti poslovanja</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase text-gray-900">
          Pranje tepiha
        </h1>

        <div className="mt-8 space-y-7 text-gray-700">
          <p>
            Ovim Općim uvjetima poslovanja reguliraju se odnosi između tvrtke Fresh
            i klijenta u vezi s uslugama pranja, čišćenja i dostave tepiha, presvlaka,
            tapeciranog namještaja i sličnih tekstilnih proizvoda.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">1. Uvodne odredbe</h2>
            <p>
              Usluge se pružaju na temelju narudžbe poslane putem kontakt forme,
              telefona, e-maila ili WhatsApp poruke. Prihvaćanjem usluge klijent
              potvrđuje da je upoznat s ovim uvjetima i da ih prihvaća.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">2. Narudžba i sklapanje ugovora</h2>
            <p>
              Narudžba je valjana nakon što klijent dostavi potrebne podatke i potvrdi
              uslugu. Ugovor se smatra sklopljenim nakon potvrde usluge i dogovora o
              terminu preuzimanja ili dostave.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">3. Cijene i plaćanje</h2>
            <p>
              Cijene usluga utvrđuju se prema vrsti proizvoda, količini, površini i
              vrsti čišćenja. Usluga se plaća prema važećem cjeniku, a dodatni troškovi
              za dostavu ili prikup mogu se naplatiti prema dogovoru.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">4. Prikupljanje i dostava</h2>
            <p>
              Fresh može osigurati preuzimanje i dostavu tepiha na adresu klijenta u
              dogovorenom terminu. Klijent je dužan osigurati pristup i točnu adresu,
              a sve dodatne usluge moraju biti prethodno dogovorene.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">5. Pranje i postupak čišćenja</h2>
            <p>
              Svaki tepih prima se na pregled i procjenu prije čišćenja. Usluga se radi
              uz upotrebu profesionalne opreme i sredstava, a rezultat ovisi o vrsti
              materijala, stupnju zaprljanosti i stanju tkanine.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">6. Reklamacije i odgovornost</h2>
            <p>
              Klijent je dužan pregledati robu odmah po dostavi i odmah obavijestiti o
              nedostacima. U slučaju reklamacije, Fresh će postupati u skladu sa svojim
              standardima i važećim propisima, uz odgovarajuću dokumentaciju i procjenu
              stanja robe.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">7. Ograničenja odgovornosti</h2>
            <p>
              Fresh ne odgovara za oštećenja koja su posljedica prirodnog trošenja,
              starosti, prethodnog oštećenja, nepravilanog rukovanja, kemijske reakcije
              ili nepoznatih karakteristika materijala. U svakom slučaju, odgovornost je
              ograničena na stvarnu vrijednost predanog proizvoda i ugovorene usluge.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">8. Privatnost i obrada podataka</h2>
            <p>
              Osobni podaci klijenta koriste se isključivo u svrhu pružanja usluge,
              komunikacije, obračuna i evidentiranja poslovanja. Detaljnije informacije
              dostupne su na stranici s pravilima privatnosti.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">9. Završne odredbe</h2>
            <p>
              Ovi uvjeti mogu se povremeno ažurirati. Svaka izmjena stupa na snagu nakon
              objave na web stranici. U slučaju nesuglasica, primjenjuju se važeći propisi
              Republike Hrvatske.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
