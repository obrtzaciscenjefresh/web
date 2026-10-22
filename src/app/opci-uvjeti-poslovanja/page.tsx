import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Opći uvjeti poslovanja",
  description:
    "Opći uvjeti poslovanja obrta Fresh za pranje tepiha, čišćenje namještaja, madraca i vozila: narudžba, cijene, preuzimanje i dostava, reklamacije i odgovornost.",
  alternates: { canonical: "/opci-uvjeti-poslovanja" },
};

export default function OpciUvjetiPoslovanjaPage() {
  return (
    <LegalPage
      href="/opci-uvjeti-poslovanja"
      breadcrumb="Opći uvjeti poslovanja"
      eyebrow="Pravne informacije"
      title="Opći uvjeti poslovanja"
      intro={
        <p>
          Ovim Općim uvjetima poslovanja uređuju se odnosi između obrta {site.legalName}{" "}
          (u daljnjem tekstu: Fresh) i klijenta u vezi s pružanjem usluga pranja i čišćenja
          tepiha, tapisona, presvlaka, tapeciranog namještaja, madraca i vozila te s
          preuzimanjem i dostavom.
        </p>
      }
      sections={[
        {
          title: "Podaci o pružatelju usluge",
          content: (
            <p>
              {site.legalName}, {fullAddress}. Matični broj obrta: {site.registrationNumber}.
              Djelatnost: {site.activity}. Kontakt: <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>,{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
        {
          title: "Područje primjene",
          content: (
            <p>
              Ovi uvjeti primjenjuju se na sve usluge koje pruža Fresh, uključujući pranje i
              čišćenje tepiha, tapisona, presvlaka, namještaja, madraca i vozila, u skladu s
              narudžbom i važećim propisima.
            </p>
          ),
        },
        {
          title: "Narudžba i sklapanje ugovora",
          content: (
            <>
              <p>
                Uslugu je moguće naručiti putem kontakt forme, telefonom, e-mailom ili WhatsApp
                porukom. Narudžba je valjana nakon što klijent dostavi potrebne podatke i
                potvrdi uslugu.
              </p>
              <p>
                Ugovor se smatra sklopljenim nakon potvrde usluge i dogovora o terminu
                preuzimanja ili izvođenja usluge. Prihvaćanjem usluge klijent potvrđuje da je
                upoznat s ovim uvjetima i da ih prihvaća.
              </p>
            </>
          ),
        },
        {
          title: "Cijene i plaćanje",
          content: (
            <>
              <p>
                Usluge se naplaćuju prema važećem <Link href="/#usluge">cjeniku</Link>{" "}
                objavljenom na web stranici, ovisno o vrsti proizvoda, količini, površini i
                vrsti čišćenja. Uz svaku cijenu istaknuta je i cijena na referentni datum
                sukladno odlukama Vlade Republike Hrvatske. Strojno čitljiv cjenik dostupan je
                na stranici <Link href="/cjenik">Cjenik (CSV / XML)</Link>.
              </p>
              <p>
                Svaka dodatna usluga ili trošak mora biti dogovoren i potvrđen s klijentom
                prije izvršenja posla.
              </p>
            </>
          ),
        },
        {
          title: "Preuzimanje i dostava",
          content: (
            <p>
              Fresh preuzima i dostavlja tepihe na adresu klijenta u dogovorenom terminu.
              Preuzimanje i dostava na području Zagreba i okolice su besplatni, a za ostale
              lokacije uvjeti se dogovaraju unaprijed. Klijent je dužan osigurati točnu adresu,
              pristup i podatke potrebne za preuzimanje i dostavu.
            </p>
          ),
        },
        {
          title: "Prihvat robe i postupak čišćenja",
          content: (
            <>
              <p>
                Svaki tepih ili predmet pregledava se i procjenjuje prije čišćenja. Klijent je
                odgovoran za točnost informacija o vrsti tepiha, njegovu stanju, prisutnosti
                mrlja i eventualnim posebnim zahtjevima.
              </p>
              <p>
                Usluga se obavlja profesionalnom opremom i sredstvima, a konačni rezultat ovisi
                o vrsti materijala, stupnju zaprljanosti i stanju tkanine.
              </p>
            </>
          ),
        },
        {
          title: "Rokovi",
          content: (
            <p>
              Rokovi su okvirni i mogu varirati ovisno o količini robe, sezonskoj potražnji,
              dostupnosti opreme i drugim okolnostima. Fresh će klijenta pravovremeno
              obavijestiti o svakoj odgodi.
            </p>
          ),
        },
        {
          title: "Obveze klijenta",
          content: (
            <p>
              Klijent je dužan osigurati pristup prostoru ili robi, točan opis prostora ili
              predmeta, informacije o mogućim otežavajućim okolnostima te odgovarajuće uvjete
              za izvođenje usluge.
            </p>
          ),
        },
        {
          title: "Reklamacije",
          content: (
            <p>
              Klijent je dužan pregledati robu odmah po dostavi, odnosno uslugu odmah po
              završetku, i bez odgode obavijestiti Fresh o uočenim nedostacima, a najkasnije u
              razumnom roku. Fresh će reklamaciju razmotriti i postupiti u skladu s utvrđenim
              činjenicama i važećim propisima.
            </p>
          ),
        },
        {
          title: "Ograničenje odgovornosti",
          content: (
            <p>
              Fresh ne odgovara za oštećenja nastala zbog prirodnog trošenja, starosti,
              prethodnog ili skrivenog oštećenja, nepravilnog rukovanja, kemijske reakcije ili
              nepoznatih svojstava materijala. Odgovornost je ograničena na stvarnu vrijednost
              predanog proizvoda odnosno ugovorene usluge, u skladu s dokazivim činjenicama i
              u mjeri u kojoj to dopuštaju propisi o zaštiti potrošača.
            </p>
          ),
        },
        {
          title: "Privatnost i zaštita podataka",
          content: (
            <p>
              Osobni podaci klijenta obrađuju se isključivo radi pružanja usluge,
              komunikacije, obračuna i evidentiranja poslovanja. Više informacija dostupno je
              u <Link href="/pravila-privatnosti">Pravilima privatnosti</Link>.
            </p>
          ),
        },
        {
          title: "Završne odredbe",
          content: (
            <p>
              Ovi uvjeti mogu se povremeno ažurirati, a izmjene stupaju na snagu objavom na
              web stranici. Na odnose između Fresha i klijenta primjenjuju se propisi
              Republike Hrvatske.
            </p>
          ),
        },
      ]}
    />
  );
}
