import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pravila privatnosti",
  description:
    "Pravila privatnosti obrta Fresh: koje osobne podatke prikupljamo, u koje svrhe, koliko ih čuvamo, kolačići i vaša prava.",
  alternates: { canonical: "/pravila-privatnosti" },
};

export default function PravilaPrivatnostiPage() {
  return (
    <LegalPage
      href="/pravila-privatnosti"
      breadcrumb="Pravila privatnosti"
      eyebrow="Pravne informacije"
      title="Pravila privatnosti"
      intro={
        <p>
          Fresh poštuje privatnost svojih korisnika i poduzima odgovarajuće mjere za zaštitu
          osobnih podataka prikupljenih putem web stranice, telefona, e-maila, WhatsAppa ili
          drugih komunikacijskih kanala.
        </p>
      }
      sections={[
        {
          title: "Voditelj obrade",
          content: (
            <p>
              Voditelj obrade osobnih podataka je {site.legalName}, {fullAddress}, MB{" "}
              {site.registrationNumber}, e-mail <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
        {
          title: "Koje podatke prikupljamo",
          content: (
            <p>
              Prikupljamo podatke koje nam dostavite radi narudžbe ili komunikacije, uključujući
              ime i prezime, broj telefona, adresu, e-mail adresu, informacije o usluzi i druge
              podatke potrebne za pravilno pružanje usluge.
            </p>
          ),
        },
        {
          title: "Svrha obrade",
          content: (
            <p>
              Osobni podaci obrađuju se isključivo radi komunikacije, potvrde narudžbe,
              pružanja usluge, obračuna, preuzimanja i dostave, evidentiranja poslovanja, zaštite
              prava te rješavanja reklamacija i upita.
            </p>
          ),
        },
        {
          title: "Prijenos podataka",
          content: (
            <>
              <p>
                Podaci se ne prodaju niti dijele s trećim stranama bez vašeg pristanka, osim ako
                je to nužno za pružanje usluge, ispunjenje zakonskih obveza ili zaštitu
                legitimnih interesa. U takvim slučajevima osiguravamo odgovarajuće mjere zaštite.
              </p>
              <p>
                Poruke poslane putem kontakt forme dostavljaju se na naš e-mail posredstvom
                pružatelja usluge slanja e-pošte (Resend).
              </p>
            </>
          ),
        },
        {
          title: "Kolačići",
          content: (
            <p>
              Stranica koristi nužne tehničke postavke za svoj rad. Google oznaku za mjerenje
              oglasa (Google Ads) učitavamo isključivo ako to odobrite u obavijesti o
              kolačićima. Vaš odabir spremamo u pregledniku, a možete ga promijeniti ili povući u
              bilo kojem trenutku putem poveznice &quot;Postavke kolačića&quot; u podnožju stranice.
            </p>
          ),
        },
        {
          title: "Trajanje pohrane",
          content: (
            <p>
              Osobni podaci čuvaju se onoliko dugo koliko je potrebno za svrhu radi koje su
              prikupljeni te u skladu s važećim propisima. Nakon isteka tog razdoblja podaci se
              brišu ili anonimiziraju.
            </p>
          ),
        },
        {
          title: "Prava korisnika",
          content: (
            <p>
              Imate pravo zatražiti pristup svojim osobnim podacima, ispravak, brisanje,
              ograničenje obrade i prenosivost podataka te uložiti prigovor na obradu. Ako
              smatrate da se vaši podaci obrađuju nezakonito, možete podnijeti pritužbu
              Agenciji za zaštitu osobnih podataka (AZOP).
            </p>
          ),
        },
        {
          title: "Sigurnost",
          content: (
            <p>
              Primjenjujemo odgovarajuće tehničke i organizacijske mjere kako bismo zaštitili
              osobne podatke od neovlaštenog pristupa, gubitka, izmjene ili objave.
            </p>
          ),
        },
        {
          title: "Kontakt",
          content: (
            <p>
              Za pitanja o obradi osobnih podataka ili ostvarivanje prava javite nam se na{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>, telefonom na{" "}
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a> ili putem stranice{" "}
              <Link href="/kontakt">Kontakt</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
