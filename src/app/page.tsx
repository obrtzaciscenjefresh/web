import type { Metadata } from "next";
import { FaPhone, FaStar } from "react-icons/fa6";
import { About } from "@/components/sections/About";
import { BeforeAfter, beforeAfterPairs } from "@/components/sections/BeforeAfter";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeFaq } from "@/data/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pranje tepiha Zagreb | Besplatna dostava | Fresh" },
  description:
    "Strojno pranje tepiha u Zagrebu uz besplatno preuzimanje i dostavu. Kućni i uredski tepisi, tapisoni, kemijsko čišćenje namještaja, madraca i automobila.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pranje tepiha Zagreb | Fresh",
    description:
      "Besplatno preuzimanje i dostava, strojno pranje i sušenje u komori. Preko 1.000 zadovoljnih korisnika.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Pranje tepiha u Zagrebu, bez nošenja i čekanja"
        description="Tepih preuzimamo na vašoj adresi, strojno ga peremo, sušimo u komori i vraćamo čist, svjež i zapakiran. Preuzimanje i dostava su besplatni."
        image={{
          src: "/pakiranje.jpg",
          alt: "Opran i zapakiran tepih spreman za dostavu u praonici Fresh",
          width: 1600,
          height: 1200,
        }}
        actions={
          <>
            <ButtonLink href="/kontakt" size="lg">
              Naručite pranje
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone}`} variant="outline" size="lg">
              <FaPhone aria-hidden />
              Nazovite nas
            </ButtonLink>
          </>
        }
        highlights={
          <>
            <li className="flex items-center gap-2">
              <FaStar aria-hidden className="text-amber-400" />
              {site.googleRating.value} na Googleu
            </li>
            <li>1.000+ zadovoljnih korisnika</li>
            <li>Ekološka sredstva</li>
          </>
        }
      />
      <Highlights />
      <ServicesOverview />
      <About />
      <Process />
      <Pricing />
      <BeforeAfter pairs={[beforeAfterPairs.home, beforeAfterPairs.office]} />
      <Reviews />
      <Faq
        items={homeFaq}
        title="Pitanja o pranju tepiha"
        description="Niste pronašli odgovor? Nazovite nas ili pošaljite upit putem kontakt forme."
      />
      <CtaBanner />
    </>
  );
}
