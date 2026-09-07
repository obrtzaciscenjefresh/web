import { LegalPage } from "../pravne-stranice";

export default function PrivatnostPage() {
  return <LegalPage title="Politika privatnosti" intro="Ovdje objašnjavamo koje podatke možemo zaprimiti kada nas kontaktirate i kako ih koristimo." sections={[
    { heading: "Voditelj obrade", body: "Podatke obrađuje Fresh obrt za čišćenje. Prije objave potrebno je upisati puni pravni naziv, adresu sjedišta, OIB i službeni kontakt za pitanja privatnosti." },
    { heading: "Koje podatke zaprimamo", body: "Kada nam se javite telefonom ili e-poštom, možemo zaprimiti ime, kontakt podatke, adresu preuzimanja i informacije potrebne za dogovor usluge. Ne tražimo podatke koji nisu potrebni za komunikaciju i izvršenje dogovorene usluge." },
    { heading: "Svrha i rok čuvanja", body: "Podatke koristimo za odgovaranje na upite, dogovor termina, izvršenje usluge i ispunjavanje zakonskih obveza. Čuvamo ih onoliko dugo koliko je potrebno za navedene svrhe ili koliko nalažu propisi." },
    { heading: "Vaša prava", body: "Možete zatražiti pristup, ispravak, brisanje ili ograničenje obrade svojih podataka te uložiti prigovor. Zahtjev pošaljite na službeni kontakt obrta." },
  ]} />;
}