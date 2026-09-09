import { BookOpenText, FileText, Gamepad2, Trophy } from "lucide-react";

import { HomeQuickAccessCard } from "./HomeQuickAccessCard";

const quickAccessItems = [
  {
    title: "Dersler",
    description: "Konuları keşfet ve adım adım öğren.",
    to: "/dersler",
    icon: BookOpenText,
    variant: "primary",
  },
  {
    title: "Oyunlar",
    description: "Öğrendiklerini eğlenceli oyunlarla pekiştir.",
    to: "/oyunlar",
    icon: Gamepad2,
    variant: "accent",
  },
  {
    title: "Konu Özetleri",
    description: "Önemli bilgileri kısa ve anlaşılır şekilde tekrar et.",
    to: "/notlar",
    icon: FileText,
    variant: "secondary",
  },
  {
    title: "Quizler",
    description: "Kendini dene ve bilgilerini kontrol et.",
    to: "/quiz",
    icon: Trophy,
    variant: "primary",
  },
] as const;

export function HomeQuickAccess() {
  return (
    <section className="relative z-10 mt-4 pb-16 sm:mt-2 lg:-mt-2 xl:-mt-4">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickAccessItems.map((item) => (
          <HomeQuickAccessCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
