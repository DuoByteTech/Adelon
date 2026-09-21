import burstYellow from "@/assets/illustrations/decorations/burst-yellow.png";

import { AppText } from "@/components/ui/AppText";

import { lessons } from "../../data/lessons";
import { LessonCard } from "../components/LessonCard";

export function LessonsPage() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mb-8">
        <div className="relative inline-flex items-center">
          <AppText variant="h2">Dersler</AppText>

          <img
            src={burstYellow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-7 -top-3 w-7 -rotate-37 object-contain sm:-right-12 sm:-top-5 sm:w-12"
          />
        </div>

        <AppText variant="small" className="mt-2">
          Öğrenmek istediğin dersi seç ve keşfetmeye başla.
        </AppText>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.slug}
            title={lesson.title}
            slug={lesson.slug}
            icon={lesson.icon}
            variant={lesson.homeVariant}
          />
        ))}
      </div>
    </section>
  );
}
