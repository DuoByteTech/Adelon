import type { HTMLAttributes, ReactNode } from "react";

type AppContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function AppContainer({
  children,
  className = "",
  ...props
}: AppContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
