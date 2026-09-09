import type { ButtonHTMLAttributes, ReactNode } from "react";

type AppButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "ghost";

type AppButtonSize = "sm" | "md" | "lg";

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: AppButtonVariant;
  size?: AppButtonSize;
  fullWidth?: boolean;
};

const variantClasses: Record<AppButtonVariant, string> = {
  primary: "bg-violet-600 text-white shadow-sm transition hover:bg-violet-700",
  secondary: "bg-cyan-500 text-white shadow-sm transition hover:bg-cyan-600",
  accent: "bg-amber-400 text-slate-900 shadow-sm transition hover:bg-amber-500",
  outline:
    "border border-violet-300 bg-white text-violet-600 transition hover:bg-violet-50",
  ghost:
    "bg-transparent text-slate-700 transition hover:bg-slate-100 hover:text-violet-600",
};

const sizeClasses: Record<AppButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function AppButton({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: AppButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-xl font-semibold",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
