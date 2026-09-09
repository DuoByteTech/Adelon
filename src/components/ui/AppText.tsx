import type { HTMLAttributes, ReactNode } from "react";

type AppTextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "cardTitle"
  | "body"
  | "small"
  | "muted";

type AppTextProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  variant?: AppTextVariant;
};

const variantClasses: Record<AppTextVariant, string> = {
  h1: "text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[40px]",
  h2: "text-2xl font-bold leading-tight sm:text-3xl lg:text-[32px]",
  h3: "text-xl font-bold leading-snug sm:text-2xl",
  cardTitle: "text-xl font-bold leading-snug",
  body: "text-base leading-relaxed",
  small: "text-sm leading-normal",
  muted: "text-base leading-relaxed text-text-muted",
};

export function AppText({
  children,
  variant = "body",
  className = "",
  ...props
}: AppTextProps) {
  const Tag =
    variant === "h1"
      ? "h1"
      : variant === "h2"
        ? "h2"
        : variant === "h3" || variant === "cardTitle"
          ? "h3"
          : "p";

  return (
    <Tag className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
