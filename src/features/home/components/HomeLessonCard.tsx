import type { LucideIcon } from "lucide-react";

import { AppText } from "../../../components/ui/AppText";

type HomeLessonCardProps = {
  title: string;
  icon: LucideIcon;
  variant: "violet" | "rose" | "emerald" | "amber" | "blue";
};

const variantClasses = {
  violet: {
    card: "bg-violet-50",
    icon: "bg-violet-500 shadow-violet-200",
  },
  rose: {
    card: "bg-rose-50",
    icon: "bg-rose-500 shadow-rose-200",
  },
  emerald: {
    card: "bg-emerald-50",
    icon: "bg-emerald-500 shadow-emerald-200",
  },
  amber: {
    card: "bg-amber-50",
    icon: "bg-amber-400 shadow-amber-200",
  },
  blue: {
    card: "bg-blue-50",
    icon: "bg-blue-500 shadow-blue-200",
  },
};

export function HomeLessonCard({
  title,
  icon: Icon,
  variant,
}: HomeLessonCardProps) {
  const styles = variantClasses[variant];

  return (
    <button
      type="button"
      className={[
        "group flex min-h-32 flex-col items-center justify-center gap-3",
        "rounded-2xl px-4 py-5 text-center",
        "transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-md",
        styles.card,
      ].join(" ")}
    >
      <div
        className={[
          "flex size-12 items-center justify-center rounded-2xl",
          "text-white shadow-lg transition-transform duration-200",
          "group-hover:scale-105",
          styles.icon,
        ].join(" ")}
      >
        <Icon size={25} strokeWidth={2.2} />
      </div>

      <AppText variant="small">{title}</AppText>
    </button>
  );
}
