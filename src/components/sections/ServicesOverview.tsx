import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { PriceTag } from "@/components/ui/PriceTag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { priceByCode } from "@/data/pricing";

const services = [
  {
    href: "/kucni-tepisi",
    title: "Kućni tepisi",
    text: "Dubinsko strojno pranje koje uklanja prašinu, alergene i mrlje.",
    image: { src: "/centrifuga.jpg", alt: "Centrifuga za tepihe u praonici Fresh", width: 2048, height: 1536 },
    priceCode: "TEP-01",
  },
  {
    href: "/uredski-tepisi",
    title: "Uredski tepisi i tapisoni",
    text: "Čišćenje većih površina, i preko vikenda, za higijenski radni prostor.",
    image: { src: "/strojevi.jpg", alt: "Strojevi za dubinsko čišćenje uredskih tepiha", width: 1500, height: 2000 },
    priceCode: "TEP-02",
  },
  {
    href: "/#usluge",
    title: "Namještaj, madraci i vozila",
    text: "Kemijsko čišćenje kutnih garnitura, fotelja, madraca i automobila.",
    image: { src: "/susenje.jpg", alt: "Uzorci opranih tepiha u praonici Fresh", width: 1600, height: 1200 },
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Usluge"
          title="Čistoća za dom, ured i automobil"
          description="Od kućnih tepiha do tapisona u uredu i presvlaka u automobilu - sve čistimo profesionalnim strojevima i sredstvima."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                  <p className="text-sm leading-6 text-muted">{service.text}</p>
                  <div className="mt-auto flex items-end justify-between gap-4 pt-4">
                    {service.priceCode ? (
                      <PriceTag item={priceByCode(service.priceCode)} align="left" />
                    ) : (
                      <p className="text-sm font-semibold text-primary">Pogledajte cjenik</p>
                    )}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <FaArrowRight aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
