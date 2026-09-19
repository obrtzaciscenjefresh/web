import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pravila privatnosti | Fresh",
  description:
    "Pravila privatnosti tvrtke Fresh. Informacije o prikupljanju, obradi i zaštiti osobnih podataka korisnika.",
  alternates: {
    canonical: "/pravila-privatnosti",
  },
};

export default function PravilaPrivatnostiPage() {
  return (
    <main className="flex w-full flex-col items-center px-4 py-16 sm:px-8 lg:px-20">
      <article className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xl font-bold uppercase text-primary">Pravila privatnosti</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase text-gray-900">
          Zaštita osobnih podataka
        </h1>

        <div className="mt-8 space-y-7 text-gray-700">
          <p>
            Tvrtka Fresh poštuje privatnost svojih korisnika i poduzima odgovarajuće mjere
            za zaštitu osobnih podataka prikupljenih putem web stranice, telefona, e-maila,
            WhatsAppa ili drugih komunikacijskih kanala.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">1. Koje podatke prikupljamo</h2>
            <p>
              Prikupljamo podatke koje nam dostavite u svrhu narudžbe ili komunikacije,
              uključujući ime, prezime, kontakt broj, adresu, e-mail adresu, informacije o
              usluzi i sve dodatne podatke potrebne za pravilno pružanje usluge.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">2. Svrha obrade</h2>
            <p>
              Osobni podaci obrađuju se isključivo u svrhu komunikacije, potvrdbe narudžbe,
              pružanja usluge, obračuna, dostave, evidentiranja poslovanja, zaštite prava i
              rješavanja reklamacija ili dodatnih upita klijenata.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">3. Prijenos podataka</h2>
            <p>
              Podaci se ne prodaju niti dijele s trećim stranama bez vašeg pristanka, osim ako
              je to nužno za pružanje usluge, ispunjenje pravnih obveza ili zaštitu legitimnih
              interesa tvrtke. U takvim slučajevima osiguravamo odgovarajuće mjere zaštite.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">4. Trajanje pohrane</h2>
            <p>
              Osobni podaci pohranjuju se onoliko dugo koliko je potrebno za svrhu radi koje
              su prikupljeni, te u skladu s važećim propisima i poslovnim potrebama. Nakon
              isteka razdoblja, podaci se brišu ili anonimiziraju.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">5. Prava korisnika</h2>
            <p>
              Korisnik ima pravo zatražiti pristup svojim osobnim podacima, ispravak, brisanje,
              ograničenje obrade, prenosivost podataka i podizanje prigovora na obradu. Za
              ostvarivanje prava možete nas kontaktirati putem e-maila ili telefona navedenog
              na web stranici.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">6. Sigurnost</h2>
            <p>
              Fresh primjenjuje odgovarajuće tehničke i organizacijske mjere kako bi zaštitio
              osobne podatke od neovlaštenog pristupa, gubitka, izmjene ili objavljivanja.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">7. Kontakt</h2>
            <p>
              Ako imate pitanja o obradi osobnih podataka ili želite ostvariti svoja prava,
              kontaktirajte nas putem e-maila ili telefona koji su dostupni na stranici
              Kontakt.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
