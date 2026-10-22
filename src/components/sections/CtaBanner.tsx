import Image from "next/image";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function CtaBanner({
  title = "Naručite besplatno preuzimanje tepiha",
  text = "Javite nam se i dogovorite termin. Tepih preuzimamo na vašoj adresi i vraćamo ga čist, suh i zapakiran.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 sm:px-12 lg:py-20">
          <Image
            src="/kombi-dostava.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="relative flex max-w-2xl flex-col gap-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="text-lg leading-8 text-primary-100">{text}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/kontakt" variant="white" size="lg">
                Pošaljite upit
              </ButtonLink>
              <ButtonLink href={`tel:${site.phone}`} variant="ghost" size="lg">
                <FaPhone aria-hidden />
                {site.phoneDisplay}
              </ButtonLink>
              <ButtonLink href={site.social.whatsapp} variant="ghost" size="lg">
                <FaWhatsapp aria-hidden />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
