import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";

type Props = {
  title: string;
  description: React.ReactNode;
  image: { src: string; alt: string; width: number; height: number };
  actions?: React.ReactNode;
  highlights?: React.ReactNode;
};

export function Hero({ title, description, image, actions, highlights }: Props) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary-50 via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary-100/60 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted">{description}</p>
          {actions && (
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {actions}
            </div>
          )}
          {highlights && (
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink/80">
              {highlights}
            </ul>
          )}
        </div>

        <div className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
            className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-2xl shadow-primary/20"
          />
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10 sm:left-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-50 text-xl text-secondary-700">
              <FaTruckFast aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Besplatno preuzimanje i dostava</p>
              <p className="text-xs text-muted">Zagreb i okolica</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
