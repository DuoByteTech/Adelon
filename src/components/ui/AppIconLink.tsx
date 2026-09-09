import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type AppIconLinkVariant = "primary" | "secondary" | "accent";

type AppIconLinkProps = {
  to: string;
  children: ReactNode;
  variant?: AppIconLinkVariant;
  ariaLabel: string;
};

const variantClasses: Record<AppIconLinkVariant, string> = {
  primary: "bg-primary/10 text-primary hover:bg-primary/20",
  secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
  accent: "bg-accent/15 text-accent-hover hover:bg-accent/25",
};

export function AppIconLink({
  to,
  children,
  variant = "primary",
  ariaLabel,
}: AppIconLinkProps) {
  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={[
        "inline-flex size-9 shrink-0 items-center justify-center rounded-full",
        "transition-colors duration-200",
        variantClasses[variant],
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
