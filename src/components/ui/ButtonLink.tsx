import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-700",
  secondary: "bg-secondary text-white hover:bg-secondary-700",
  outline:
    "border border-primary-200 bg-white text-primary hover:border-primary hover:bg-primary-50",
  white: "bg-white text-primary hover:bg-primary-50",
  ghost: "text-white ring-1 ring-white/40 hover:bg-white/10",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-4 text-sm sm:px-7 sm:text-base",
} as const;

type Props = {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
    variants[variant],
    sizes[size],
    className
  );

  if (external || /^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
