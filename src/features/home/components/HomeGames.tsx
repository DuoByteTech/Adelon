import { ArrowRight, Brain, Calculator, Globe2, Languages } from "lucide-react";

import { AppLink } from "../../../components/ui/AppLink";
import { AppText } from "../../../components/ui/AppText";
import { HomeGameCard } from "./HomeGameCard";

const games = [
  {
    title: "Dört İşlem Oyunu",
    description: "Hızlı sorularla matematik becerilerini geliştir.",
    category: "Matematik",
    icon: Calculator,
    variant: "violet",
  },
  {
    title: "Türkiye Haritası",
    description: "Şehirleri ve bölgeleri harita üzerinde öğren.",
    category: "Sosyal Bilgiler",
    icon: Globe2,
    variant: "amber",
  },
  {
    title: "Kelime Avı",
    description: "İngilizce kelimeleri bul ve kelime bilgini geliştir.",
    category: "İngilizce",
    icon: Languages,
    variant: "cyan",
  },
  {
    title: "Bilgi Yarışması",
    description: "Farklı derslerden gelen sorularla kendini test et.",
    category: "Karışık",
    icon: Brain,
    variant: "rose",
  },
] as const;

export function HomeGames() {
  return (
    <section className="py-8 sm:py-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <AppText variant="h3">Eğitici Oyunlar</AppText>

          <AppText variant="small" className="mt-1">
            Öğrendiklerini eğlenceli oyunlarla pekiştir.
          </AppText>
        </div>

        <AppLink to="/oyunlar">
          <span className="inline-flex items-center gap-1 self-start sm:self-auto text-violet-600">
            Tüm Oyunları Gör
            <ArrowRight size={16} />
          </span>
        </AppLink>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {games.map((game) => (
          <HomeGameCard
            key={game.title}
            title={game.title}
            description={game.description}
            category={game.category}
            icon={game.icon}
            variant={game.variant}
          />
        ))}
      </div>
    </section>
  );
}
