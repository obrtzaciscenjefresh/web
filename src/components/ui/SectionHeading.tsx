import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary-700">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
