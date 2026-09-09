import type { HTMLAttributes, ReactNode } from "react";

type AppCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hoverable?: boolean;
};

export function AppCard({
  children,
  hoverable = false,
  className = "",
  ...props
}: AppCardProps) {
  return (
    <div
      className={[
        "card border border-base-300 bg-base-200 shadow-sm",
        "transition-all duration-200",
        hoverable ? "hover:-translate-y-1 hover:shadow-md" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}
