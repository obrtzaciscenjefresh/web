import type { Metadata } from "next";
import { FaCheck } from "react-icons/fa6";
import { BeforeAfter, beforeAfterPairs } from "@/components/sections/BeforeAfter";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCarpetFaq } from "@/data/faq";
import { priceByCode } from "@/data/pricing";
import { site } from "@/lib/site";

const description =
  "Strojno pranje kućnih tepiha u Zagrebu. Dubinsko čišćenje, uklanjanje mrlja, prašine i alergena, sušenje u komori te besplatno preuzimanje i dostava.";

export const metadata: Metadata = {
  title: "Pranje kućnih tepiha",
  description,
  alternates: { canonical: "/kucni-tepisi" },
  openGraph: {
    title: "Pranje kućnih tepiha u Zagrebu | Fresh",
    description,
    url: "/kucni-tepisi",
  },
};

const benefits = [
  "Uklanja prašinu, alergene i mrlje iz dubine vlakana",
  "Profesionalni strojevi i ekološki prihvatljiva sredstva",
  "Sušenje u komori s kontroliranom temperaturom i vlagom",
  "Besplatno preuzimanje i dostava na vašu adresu",
];

const carpetPrice = priceByCode("TEP-01");

export default function KucniTepisiPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Pranje kućnih tepiha",
          serviceType: "Strojno pranje tepiha",
          description,
          areaServed: { "@type": "City", name: "Zagreb" },
          provider: { "@id": `${site.url}/#business` },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: carpetPrice.price,
              priceCurrency: "EUR",
              unitText: carpetPrice.unit,
            },
          },
        }}
      />
      <Breadcrumbs items={[{ href: "/kucni-tepisi", label: "Kućni tepisi" }]} />
      <Hero
        title="Strojno pranje kućnih tepiha"
        description="Vratite tepihu svježinu i boju. Strojnim pranjem uklanjamo nečistoće, prašinu, alergene i mrlje koje se ne mogu ukloniti standardnim, površinskim čišćenjem."
        image={{
          src: "/centrifuga.jpg",
          alt: "Centrifuga za tepihe u praonici Fresh",
          width: 2048,
          height: 1536,
        }}
        actions={
          <>
            <ButtonLink href="/kontakt" size="lg">
              Naručite pranje
            </ButtonLink>
            <ButtonLink href="#cijene" variant="outline" size="lg">
              Pogledajte cijene
            </ButtonLink>
          </>
        }
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Čistoća i svježina"
            title="Zašto strojno pranje tepiha?"
            description="Strojno pranje je metoda temeljitog čišćenja pomoću profesionalnih strojeva i ekološki prihvatljivih sredstava. Tepih nakon pranja ponovno dobiva svježinu i čistoću, a vaš dom postaje zdraviji prostor."
          />
          <ul className="grid gap-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 font-semibold text-ink"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm text-white">
                  <FaCheck aria-hidden />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <BeforeAfter pairs={[beforeAfterPairs.home]} title="Kućni tepih prije i poslije pranja" />
      <Process />
      <Pricing
        id="cijene"
        title="Cijene pranja i čišćenja"
        codes={["TEP-01", "NAM-01", "NAM-02", "NAM-03", "NAM-04", "NAM-05", "NAM-06", "NAM-07", "NAM-08"]}
      />
      <Faq items={homeCarpetFaq} title="Pitanja o pranju kućnih tepiha" />
      <CtaBanner />
    </>
  );
}
