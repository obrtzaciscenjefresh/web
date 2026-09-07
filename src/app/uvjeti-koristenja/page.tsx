import { LegalPage } from "../pravne-stranice";

export default function UvjetiPage() {
  return <LegalPage title="Uvjeti korištenja" intro="Korištenjem ove stranice prihvaćate da se sadržaj koristi za informiranje o uslugama i kontakt s obrtom." sections={[
    { heading: "Informativni sadržaj", body: "Informacije o uslugama, cijenama, rokovima i dostupnosti mogu se promijeniti. Konačni opseg usluge, cijena i termin potvrđuju se izravno s obrtom prije početka rada." },
    { heading: "Cijene i narudžbe", body: "Cjenik na stranici služi kao informacija. Na cijenu mogu utjecati dimenzije, materijal, stanje i posebni zahtjevi. Ponuda postaje obvezujuća tek nakon dogovora s obrtom." },
    { heading: "Sadržaj i poveznice", body: "Nastojimo održavati točan sadržaj, ali ne jamčimo da je svaka informacija uvijek potpuna ili ažurna. Vanjske poveznice vode na stranice trećih strana za čiji sadržaj nismo odgovorni." },
    { heading: "Kontakt", body: "Za pitanja o usluzi, reklamacije i dogovor termina koristite službeni telefon ili e-poštu navedene na stranici Kontakt." },
  ]} />;
}