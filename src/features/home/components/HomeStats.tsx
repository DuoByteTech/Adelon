import { Gamepad2, Heart, Star, UsersRound } from "lucide-react";

import { AppCard } from "../../../components/ui/AppCard";
import { HomeStatItem } from "./HomeStatItem";

const stats = [
  {
    value: "10.000+",
    label: "Mutlu Öğrenci",
    icon: UsersRound,
    variant: "secondary",
  },
  {
    value: "1.500+",
    label: "Eğitici İçerik",
    icon: Star,
    variant: "accent",
  },
  {
    value: "100+",
    label: "Eğitici Oyun",
    icon: Gamepad2,
    variant: "primary",
  },
  {
    value: "%98",
    label: "Memnuniyet",
    icon: Heart,
    variant: "rose",
  },
] as const;

export function HomeStats() {
  return (
    <section className="py-12">
      <div className="mx-auto">
        <AppCard className="border-none shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-base-300 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((stat) => (
              <HomeStatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                variant={stat.variant}
              />
            ))}
          </div>
        </AppCard>
      </div>
    </section>
  );
}
