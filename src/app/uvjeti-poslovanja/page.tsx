import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opći uvjeti poslovanja | Fresh",
  description:
    "Primjeri općih uvjeta poslovanja za pranje tepiha i usluge čišćenja. Stalno se mogu nadopunjavati i prilagođavati poslovanju.",
  alternates: {
    canonical: "/uvjeti-poslovanja",
  },
};

export default function UvjetiPoslovanjaPage() {
  return (
    <div className="flex w-full flex-col items-center px-4 py-16 sm:px-8 lg:px-20">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xl font-bold uppercase text-primary">Uvjeti poslovanja</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase text-gray-900">
          Opći uvjeti za pranje tepiha
        </h1>

        <div className="mt-8 space-y-6 text-gray-700">
          <p>
            Ovim Općim uvjetima poslovanja regulira se pružanje usluga pranja,
            čišćenja i dostave tepiha i drugih tekstilnih proizvoda.
          </p>

          <div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">1. Prikupljanje i dostava</h2>
            <p>
              Klijent je dužan osigurati točnu adresu prikupa i podatke potrebne za
              dostavu. Usluga dostave i preuzimanja može biti obuhvaćena cijenom ili
              dogovorom o dodatnoj naknadi, ovisno o vrsti usluge i lokaciji.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">2. Cijene i obračun</h2>
            <p>
              Cijene su prikazane u skladu s vrstom proizvoda, veličinom i potrebnim
              postupkom čišćenja. Svaka dodatna usluga mora biti potvrđena s klijentom
              prije izvršenja posla.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">3. Prihvatljivost robe</h2>
            <p>
              Klijent je odgovoran za točnost informacija o vrsti tepiha, stanju,
              prisutnosti mrlja i eventualnim posebnim zahtjevima. Firma ne odgovara za
              oštećenja nastala zbog neotkrivene ili skrivene štete na materijalu.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">4. Rokovi i isporuka</h2>
            <p>
              Rokovi mogu varirati ovisno o količini robe i sezonskoj potražnji. Firma
              će klijenta pravovremeno obavijestiti o bilo kakvim odgodama.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">5. Pristanak na obradu podataka</h2>
            <p>
              Klijent svojim podacima pristaje na obradu za potrebe usluge i komunikacije
              s firmom. Podaci se koriste isključivo u svrhu pružanja usluge i kontakta.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <Link href="/kontakt" className="font-semibold text-primary underline">
            Natrag na kontakt formu
          </Link>
        </div>
      </div>
    </div>
  );
}
