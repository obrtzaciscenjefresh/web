import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { fullAddress, legalNav, mainNav, site } from "@/lib/site";
import { CookieSettingsButton } from "./CookieSettingsButton";

const socials = [
  { href: site.social.whatsapp, label: "WhatsApp", Icon: FaWhatsapp },
  { href: site.social.instagram, label: "Instagram", Icon: FaInstagram },
  { href: site.social.facebook, label: "Facebook", Icon: FaFacebook },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 pb-24 text-primary-100 lg:pb-0">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Link href="/" className="w-fit rounded-2xl bg-white p-2">
            <Image
              src="/fresh-logo.jpg"
              alt="Fresh - kemijska praonica tepiha"
              width={876}
              height={479}
              sizes="140px"
              className="h-16 w-auto"
            />
          </Link>
          <p className="text-sm leading-6">
            Profesionalno strojno pranje tepiha, čišćenje namještaja, madraca i vozila u
            Zagrebu, uz besplatno preuzimanje i dostavu.
          </p>
          <ul className="flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
                >
                  <Icon aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navigacija u podnožju">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">Stranice</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Početna
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">Kontakt</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 hover:text-white">
                <FaPhone aria-hidden className="shrink-0 text-secondary-100" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-white">
                <FaEnvelope aria-hidden className="shrink-0 text-secondary-100" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <FaLocationDot aria-hidden className="shrink-0 text-secondary-100" />
                {fullAddress}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">Pravne informacije</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton className="cursor-pointer text-left hover:text-white" />
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-6 text-xs leading-5 text-primary-200">
          <p>
            {site.legalName}, {fullAddress}
          </p>
          <p>
            MB: {site.registrationNumber} · Djelatnost: {site.activity}
          </p>
          <p>© {new Date().getFullYear()} {site.name}. Sva prava pridržana.</p>
        </Container>
      </div>
    </footer>
  );
}
