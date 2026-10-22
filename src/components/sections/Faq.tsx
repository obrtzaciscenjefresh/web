import { FaPlus } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/data/faq";

export function Faq({
  items,
  title = "Najčešća pitanja",
  description,
}: {
  items: FaqItem[];
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <SectionHeading eyebrow="Česta pitanja" title={title} description={description} />
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary transition-transform group-open:rotate-45">
                  <FaPlus aria-hidden />
                </span>
              </summary>
              <p className="mt-3 pr-12 leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
