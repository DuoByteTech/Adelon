import type { LucideIcon } from "lucide-react";

import { AppText } from "../../../components/ui/AppText";

type HomeGameCardProps = {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  variant: "violet" | "amber" | "cyan" | "rose";
};

const variantClasses = {
  violet: {
    visual: "bg-violet-100",
    icon: "bg-violet-500 text-white",
    badge: "bg-violet-600 text-white",
    decoration: "bg-violet-300",
  },
  amber: {
    visual: "bg-amber-100",
    icon: "bg-amber-400 text-slate-800",
    badge: "bg-amber-400 text-slate-800",
    decoration: "bg-amber-300",
  },
  cyan: {
    visual: "bg-cyan-100",
    icon: "bg-cyan-500 text-white",
    badge: "bg-cyan-500 text-white",
    decoration: "bg-cyan-300",
  },
  rose: {
    visual: "bg-rose-100",
    icon: "bg-rose-500 text-white",
    badge: "bg-rose-500 text-white",
    decoration: "bg-rose-300",
  },
};

export function HomeGameCard({
  title,
  description,
  category,
  icon: Icon,
  variant,
}: HomeGameCardProps) {
  const styles = variantClasses[variant];

  return (
    <article className="group overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div
        className={[
          "relative flex h-36 items-center justify-center overflow-hidden",
          styles.visual,
        ].join(" ")}
      >
        <div
          className={[
            "absolute -right-6 -top-8 size-24 rounded-full opacity-40",
            styles.decoration,
          ].join(" ")}
        />

        <div
          className={[
            "absolute -bottom-8 -left-6 size-20 rounded-full opacity-30",
            styles.decoration,
          ].join(" ")}
        />

        <div
          className={[
            "flex size-16 items-center justify-center rounded-2xl shadow-md",
            "transition-transform duration-200 group-hover:scale-105",
            styles.icon,
          ].join(" ")}
        >
          <Icon size={32} strokeWidth={2.1} />
        </div>

        <span
          className={[
            "absolute bottom-3 left-3 rounded-full px-3 py-1",
            "text-xs font-bold shadow-sm",
            styles.badge,
          ].join(" ")}
        >
          {category}
        </span>
      </div>

      <div className="p-4">
        <AppText variant="body">{title}</AppText>

        <AppText variant="small" className="mt-1">
          {description}
        </AppText>
      </div>
    </article>
  );
}
