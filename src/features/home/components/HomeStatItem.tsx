import type { LucideIcon } from "lucide-react";
import { AppText } from "../../../components/ui/AppText";

type HomeStatItemProps = {
  value: string;
  label: string;
  icon: LucideIcon;
  variant: "secondary" | "accent" | "primary" | "rose";
};

const variantClasses = {
  secondary: "bg-cyan-50 text-secondary",
  accent: "bg-amber-50 text-accent",
  primary: "bg-violet-50 text-primary",
  rose: "bg-rose-50 text-rose-500",
};

export function HomeStatItem({
  value,
  label,
  icon: Icon,
  variant,
}: HomeStatItemProps) {
  return (
    <div className="flex flex-1 items-center justify-center gap-3 px-4 py-1">
      <div
        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${variantClasses[variant]}`}
      >
        <Icon className="size-6" fill="currentColor" strokeWidth={2} />
      </div>

      <div>
        <AppText variant="cardTitle">{value}</AppText>

        <AppText variant="small">{label}</AppText>
      </div>
    </div>
  );
}
