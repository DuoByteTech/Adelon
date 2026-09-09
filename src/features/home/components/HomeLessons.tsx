import {
  ArrowRight,
  BookOpenText,
  Calculator,
  FlaskConical,
  Globe2,
  Languages,
} from "lucide-react";

import { AppLink } from "../../../components/ui/AppLink";
import { AppText } from "../../../components/ui/AppText";
import { HomeLessonCard } from "./HomeLessonCard";

const lessons = [
  {
    title: "Matematik",
    icon: Calculator,
    variant: "violet",
  },
  {
    title: "Türkçe",
    icon: BookOpenText,
    variant: "rose",
  },
  {
    title: "Fen Bilimleri",
    icon: FlaskConical,
    variant: "emerald",
  },
  {
    title: "Sosyal Bilgiler",
    icon: Globe2,
    variant: "amber",
  },
  {
    title: "İngilizce",
    icon: Languages,
    variant: "blue",
  },
] as const;

export function HomeLessons() {
  return (
    <section className="py-12">
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <AppText variant="h3">Dersleri Keşfet</AppText>

          <AppText variant="small" className="mt-1">
            Sevdiğin dersi seç, hemen öğrenmeye başla.
          </AppText>
        </div>

        <AppLink to="/dersler">
          <span className="flex items-center gap-1">
            Tüm Dersleri Gör
            <ArrowRight size={16} />
          </span>
        </AppLink>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {lessons.map((lesson) => (
          <HomeLessonCard
            key={lesson.title}
            title={lesson.title}
            icon={lesson.icon}
            variant={lesson.variant}
          />
        ))}
      </div>
    </section>
  );
}
