import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

import { AppCard } from "@/components/ui/AppCard";
import { AppIconLink } from "@/components/ui/AppIconLink";
import { AppText } from "@/components/ui/AppText";

type CardVariant = "primary" | "secondary" | "accent";

type HomeQuickAccessCardProps = {
  title: string;
  description: string;
  to: string;
  icon: LucideIcon;
  variant: CardVariant;
};

const iconClasses: Record<CardVariant, string> = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
};

export function HomeQuickAccessCard({
  title,
  description,
  to,
  icon: Icon,
  variant,
}: HomeQuickAccessCardProps) {
  return (
    <AppCard hoverable className="h-full">
      <div className="flex h-full flex-col">
        <div
          className={[
            "mb-5 flex size-12 items-center justify-center rounded-xl",
            iconClasses[variant],
          ].join(" ")}
        >
          <Icon size={24} strokeWidth={2.2} />
        </div>

        <AppText variant="cardTitle">{title}</AppText>

        <div className="mt-2 flex flex-1 items-end justify-between gap-4">
          <AppText variant="small" className="max-w-48">
            {description}
          </AppText>

          <AppIconLink
            to={to}
            variant={variant}
            ariaLabel={`${title} sayfasına git`}
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </AppIconLink>
        </div>
      </div>
    </AppCard>
  );
}
