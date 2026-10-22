import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Stranica nije pronađena",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-6 py-24 text-center sm:py-32">
      <p className="text-7xl font-extrabold text-primary/20">404</p>
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Ova stranica ne postoji
      </h1>
      <p className="max-w-md text-lg text-muted">
        Možda je premještena ili je adresa krivo upisana. Vratite se na početnu ili nam se
        javite.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Početna</ButtonLink>
        <ButtonLink href="/kontakt" variant="outline">
          Kontakt
        </ButtonLink>
      </div>
    </Container>
  );
}
