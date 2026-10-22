import { FaGoogle, FaStar } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";
import { site } from "@/lib/site";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-label={`${count} od 5 zvjezdica`} role="img">
      {Array.from({ length: count }, (_, index) => (
        <FaStar key={index} aria-hidden />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section className="bg-primary-50 py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Recenzije"
            title="Što kažu naši klijenti"
            description="Sve recenzije naših klijenata na Googleu ocijenjene su s pet zvjezdica."
          />
          <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-2xl text-primary">
              <FaGoogle aria-hidden />
            </span>
            <div>
              <p className="flex items-center gap-2 text-2xl font-extrabold text-ink">
                {site.googleRating.value}
                <Stars />
              </p>
              <p className="text-sm text-muted">
                {site.googleRating.count} recenzija na Googleu
              </p>
            </div>
          </div>
        </div>

        {reviews.length > 0 && (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li key={review.author} className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm">
                <Stars count={review.rating} />
                <blockquote className="leading-7 whitespace-pre-line text-ink">&ldquo;{review.text}&rdquo;</blockquote>
                <p className="mt-auto text-sm font-bold text-muted">{review.author}</p>
              </li>
            ))}
          </ul>
        )}

        <ButtonLink href={site.googleBusinessUrl} variant="outline" className="w-fit">
          Pročitajte recenzije na Googleu
        </ButtonLink>
      </Container>
    </section>
  );
}
