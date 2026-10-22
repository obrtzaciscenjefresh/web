import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  const trail = [{ href: "/", label: "Početna" }, ...items];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${site.url}${item.href === "/" ? "" : item.href}`,
          })),
        }}
      />
      <Container>
        <nav aria-label="Putanja" className="pt-6 text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-muted">
            {trail.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden>/</span>}
                {index === trail.length - 1 ? (
                  <span aria-current="page" className="font-semibold text-ink">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </>
  );
}
