import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export type LegalSection = { title: string; content: React.ReactNode };

export function LegalPage({
  href,
  breadcrumb,
  eyebrow,
  title,
  intro,
  sections,
}: {
  href: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <Breadcrumbs items={[{ href, label: breadcrumb }]} />
      <Container className="py-10 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary-700">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <div className="mt-6 text-lg leading-8 text-muted">{intro}</div>
          <ol className="mt-10 flex flex-col gap-8">
            {sections.map((section, index) => (
              <li key={section.title}>
                <section>
                  <h2 className="text-xl font-bold text-ink">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="mt-3 flex flex-col gap-3 leading-7 text-muted [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
                    {section.content}
                  </div>
                </section>
              </li>
            ))}
          </ol>
        </article>
      </Container>
    </>
  );
}
