import type { Metadata } from "next";
import { FaEnvelope, FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt i narudžba pranja tepiha",
  description:
    "Naručite pranje tepiha u Zagrebu uz besplatno preuzimanje i dostavu. Pošaljite upit, nazovite nas ili pišite na WhatsApp.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Fresh pranje tepiha Zagreb",
    url: "/kontakt",
  },
};

const channels = [
  { href: `tel:${site.phone}`, label: "Telefon", value: site.phoneDisplay, Icon: FaPhone },
  { href: site.social.whatsapp, label: "WhatsApp", value: "Pošaljite poruku", Icon: FaWhatsapp, external: true },
  { href: `mailto:${site.email}`, label: "E-mail", value: site.email, Icon: FaEnvelope },
  { href: site.mapsUrl, label: "Adresa", value: fullAddress, Icon: FaLocationDot, external: true },
];

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/kontakt", label: "Kontakt" }]} />
      <section className="py-10 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              as="h1"
              eyebrow="Kontakt"
              title="Zatražite ponudu ili naručite pranje"
              description="Ispunite formu i javit ćemo vam se s terminom preuzimanja. Preuzimanje i dostava u Zagrebu i okolici su besplatni."
            />
            <ul className="grid gap-3">
              {channels.map(({ href, label, value, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-lg hover:shadow-slate-900/5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-lg text-primary">
                      <Icon aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
                        {label}
                      </span>
                      <span className="block font-semibold break-words text-ink">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
