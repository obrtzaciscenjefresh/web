import { LegalPage } from "../pravne-stranice";

export default function KolaciciPage() {
  return <LegalPage title="Politika kolačića" intro="Kolačići su male datoteke koje stranica sprema u vaš preglednik. Ova stranica objašnjava koje kategorije koristimo." sections={[
    { heading: "Nužni kolačići", body: "Nužni tehnički podaci potrebni su za osnovni rad stranice. Ne koriste se za oglašavanje i nije potrebna posebna privola za njihovo korištenje." },
    { heading: "Analitički kolačići", body: "Google Analytics odnosno Google Ads oznake aktiviraju se samo ako odaberete 'Prihvati sve'. Služe za mjerenje posjeta i učinkovitosti oglašavanja. Odbijanjem privole analitika se ne učitava." },
    { heading: "Upravljanje privolom", body: "Privolu možete odbiti u početnoj obavijesti. Za potpuno brisanje već spremljenih postavki obrišite podatke stranice u postavkama svojeg preglednika." },
    { heading: "Treće strane", body: "Društvene mreže i Google mogu obrađivati podatke prema vlastitim pravilima kada otvorite njihove poveznice ili sadržaje. Prije objave potrebno je provjeriti aktivne integracije i ažurirati popis pružatelja." },
  ]} />;
}