import type { Metadata } from "next";
import { FaCalendarCheck, FaBuilding, FaPumpSoap } from "react-icons/fa6";
import { BeforeAfter, beforeAfterPairs } from "@/components/sections/BeforeAfter";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { officeCarpetFaq } from "@/data/faq";
import { priceByCode } from "@/data/pricing";
import { site } from "@/lib/site";

const description =
  "Dubinsko strojno čišćenje uredskih tepiha i tapisona u Zagrebu. Čišćenje većih površina, i preko vikenda, za čist i higijenski poslovni prostor.";

export const metadata: Metadata = {
  title: "Čišćenje uredskih tepiha i tapisona",
  description,
  alternates: { canonical: "/uredski-tepisi" },
  openGraph: {
    title: "Čišćenje uredskih tepiha i tapisona u Zagrebu | Fresh",
    description,
    url: "/uredski-tepisi",
  },
};

const features = [
  {
    Icon: FaBuilding,
    title: "Veće površine",
    text: "Dubinski i strojno čistimo uredske tepihe i tapisone većih površina.",
  },
  {
    Icon: FaPumpSoap,
    title: "Kompletan postupak",
    text: "Tapison se strojno šamponira, iščetka, opere i osuši u roku od nekoliko dana.",
  },
  {
    Icon: FaCalendarCheck,
    title: "Čišćenje preko vikenda",
    text: "Očistimo cijeli prostor preko vikenda, a u ponedjeljak se vraćate u čist ured.",
  },
];

const officePrice = priceByCode("TEP-02");

export default function UredskiTepisiPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Čišćenje uredskih tepiha i tapisona",
          serviceType: "Dubinsko čišćenje tapisona",
          description,
          areaServed: { "@type": "City", name: "Zagreb" },
          provider: { "@id": `${site.url}/#business` },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              minPrice: officePrice.price,
              priceCurrency: "EUR",
              unitText: officePrice.unit,
            },
          },
        }}
      />
      <Breadcrumbs items={[{ href: "/uredski-tepisi", label: "Uredski tepisi" }]} />
      <Hero
        title="Čišćenje uredskih tepiha i tapisona"
        description="Higijena i profesionalnost vašeg poslovnog prostora. Dubinski čistimo tepihe i tapisone većih površina, i preko vikenda, kako posao ne bi stao."
        image={{
          src: "/strojevi.jpg",
          alt: "Strojevi za dubinsko čišćenje uredskih tepiha",
          width: 1500,
          height: 2000,
        }}
        actions={
          <>
            <ButtonLink href="/kontakt" size="lg">
              Zatražite termin
            </ButtonLink>
            <ButtonLink href="#cijene" variant="outline" size="lg">
              Pogledajte cijenu
            </ButtonLink>
          </>
        }
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Za poslovne prostore"
            title="Čist ured bez prekida u radu"
            description="U kratkom roku vaš će pod prekriven tapisonom biti strojno našamponiran, iščetkan, opran i osušen."
          />
          <ul className="grid gap-5 md:grid-cols-3">
            {features.map(({ Icon, title, text }) => (
              <li key={title} className="flex flex-col gap-3 rounded-3xl bg-primary-50 p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-primary">
                  <Icon aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-ink">{title}</h3>
                <p className="text-sm leading-6 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <BeforeAfter pairs={[beforeAfterPairs.office]} title="Tapison prije i poslije čišćenja" />
      <Pricing id="cijene" title="Cijena čišćenja uredskih tepiha" codes={["TEP-02"]} />
      <Faq items={officeCarpetFaq} title="Pitanja o čišćenju uredskih tepiha" />
      <CtaBanner
        title="Dogovorite čišćenje poslovnog prostora"
        text="Pošaljite nam površinu prostora i željeni termin, a mi ćemo organizirati čišćenje u vrijeme koje vam odgovara."
      />
    </>
  );
}
