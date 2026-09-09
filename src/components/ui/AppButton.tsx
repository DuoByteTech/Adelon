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
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  outline: "btn-outline btn-primary",
  ghost: "btn-ghost",
};

const sizeClasses: Record<AppButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
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
        "btn",
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
