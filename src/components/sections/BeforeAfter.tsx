import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Photo = { src: string; alt: string };
export type BeforeAfterPair = { title: string; before: Photo; after: Photo };

export const beforeAfterPairs = {
  home: {
    title: "Kućni tepih",
    before: { src: "/kucni-prije.jpg", alt: "Kućni tepih prije strojnog pranja" },
    after: { src: "/kucni-poslije.jpg", alt: "Isti kućni tepih nakon strojnog pranja" },
  },
  office: {
    title: "Uredski tapison",
    before: { src: "/strojno-prije.jpg", alt: "Uredski tapison prije dubinskog čišćenja" },
    after: { src: "/strojno-poslije.jpg", alt: "Uredski tapison nakon dubinskog čišćenja" },
  },
} satisfies Record<string, BeforeAfterPair>;

function Figure({ photo, label }: { photo: Photo; label: string }) {
  return (
    <figure className="relative overflow-hidden rounded-3xl">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={1500}
        height={2000}
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="aspect-3/4 w-full object-cover"
      />
      <figcaption className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink backdrop-blur">
        {label}
      </figcaption>
    </figure>
  );
}

export function BeforeAfter({
  pairs,
  title = "Rezultati koji se vide",
}: {
  pairs: BeforeAfterPair[];
  title?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Prije i poslije"
          title={title}
          description="Stvarne fotografije tepiha koje smo oprali u našoj praonici."
        />
        <div className={pairs.length > 1 ? "grid gap-10 lg:grid-cols-2" : "mx-auto w-full max-w-3xl"}>
          {pairs.map((pair) => (
            <div key={pair.title} className="flex flex-col gap-4">
              {pairs.length > 1 && <h3 className="text-lg font-bold text-ink">{pair.title}</h3>}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Figure photo={pair.before} label="Prije" />
                <Figure photo={pair.after} label="Poslije" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
