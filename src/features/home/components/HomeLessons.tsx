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
    <section className="pt-8 sm:pt-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <AppText variant="h3">Dersleri Keşfet</AppText>

          <AppText variant="small" className="mt-1">
            Sevdiğin dersi seç, hemen öğrenmeye başla.
          </AppText>
        </div>

        <AppLink to="/dersler">
          <span className="inline-flex items-center gap-1 self-start sm:self-auto">
            Tüm Dersleri Gör
            <ArrowRight size={16} />
          </span>
        </AppLink>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
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
