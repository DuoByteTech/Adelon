import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

type AppLinkVariant =
  | "default"
  | "brand"
  | "nav"
  | "outlineButton"
  | "primaryButton";

type AppLinkProps = {
  to: string;
  children: ReactNode;
  variant?: AppLinkVariant;
  active?: boolean;
};

const variantClasses: Record<AppLinkVariant, string> = {
  default: "text-slate-700 transition-colors hover:text-violet-600",
  brand: "text-3xl font-extrabold tracking-tight text-violet-600",
  nav: "relative py-2 text-sm font-medium text-slate-700 transition-colors hover:text-violet-600",
  outlineButton:
    "rounded-xl border border-violet-300 px-5 py-2.5 text-sm font-semibold text-violet-600 transition hover:bg-violet-50",
  primaryButton:
    "rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700",
};

export function AppLink({
  to,
  children,
  variant = "default",
  active = false,
}: AppLinkProps) {
  if (variant === "nav") {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${variantClasses.nav} ${isActive ? "text-violet-600" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            {children}

            {isActive && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-violet-600" />
            )}
          </>
        )}
      </NavLink>
    );
  }

  return (
    <Link
      to={to}
      className={`${variantClasses[variant]} ${
        active ? "text-violet-600" : ""
      }`}
    >
      {children}
    </Link>
  );
}
