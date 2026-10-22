import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { mainNav, site } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <Container className="relative flex h-18 items-center justify-between gap-6">
        <Link href="/" aria-label="Fresh - početna" className="shrink-0">
          <Image
            src="/fresh-logo.jpg"
            alt="Fresh - kemijska praonica tepiha"
            width={876}
            height={479}
            loading="eager"
            sizes="110px"
            className="h-14 w-auto"
          />
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-primary-50 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-50 md:flex"
          >
            <FaPhone aria-hidden className="text-xs" />
            {site.phoneDisplay}
          </a>
          <ButtonLink href="/kontakt" className="hidden sm:inline-flex">
            Naručite pranje
          </ButtonLink>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
