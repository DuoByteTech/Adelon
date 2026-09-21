import type { LucideIcon } from "lucide-react";

import { AppLink } from "@/components/ui/AppLink";
import { AppText } from "@/components/ui/AppText";

import type { HomeLessonVariant } from "../../types/lesson.types";

type LessonCardProps = {
  title: string;
  slug: string;
  icon: LucideIcon;
  variant: HomeLessonVariant;
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

export function LessonCard({
  title,
  slug,
  icon: Icon,
  variant,
}: LessonCardProps) {
  const styles = variantClasses[variant];

  return (
    <AppLink to={`/dersler/${slug}`}>
      <div
        className={[
          "group flex min-h-44 flex-col items-center justify-center gap-4",
          "rounded-3xl px-6 py-8 text-center",
          "transition-all duration-200",
          "hover:-translate-y-1 hover:shadow-md",
          styles.card,
        ].join(" ")}
      >
        <div
          className={[
            "flex size-16 items-center justify-center rounded-2xl",
            "text-white shadow-lg transition-transform duration-200",
            "group-hover:scale-105",
            styles.icon,
          ].join(" ")}
        >
          <Icon size={30} strokeWidth={2.2} />
        </div>

        <AppText variant="h3">{title}</AppText>
      </div>
    </AppLink>
  );
}
