import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type AppIconLinkVariant = "primary" | "secondary" | "accent" | "plain";

type AppIconLinkProps = {
  children: ReactNode;
  variant?: AppIconLinkVariant;
  ariaLabel: string;
  to?: string;
  href?: string;
};

const variantClasses: Record<AppIconLinkVariant, string> = {
  primary: "bg-primary/10 text-primary hover:bg-primary/20",

  secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",

  accent: "bg-accent/15 text-accent-hover hover:bg-accent/25",

  plain: "text-slate-700 hover:text-primary",
};

export function AppIconLink({
  to,
  href,
  children,
  variant = "primary",
  ariaLabel,
}: AppIconLinkProps) {
  const className = [
    "inline-flex size-9 shrink-0 items-center justify-center rounded-full",
    "transition-colors duration-200",
    variantClasses[variant],
  ].join(" ");

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to ?? "/"} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  );
}
