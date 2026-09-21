import burstYellow from "@/assets/illustrations/decorations/burst-yellow.png";

import { AppText } from "@/components/ui/AppText";

import { lessons } from "../../data/lessons";

import { LessonCard } from "../components/LessonCard";
import { LessonsHero } from "../components/LessonsHero";

export function LessonsPage() {
  return (
    <>
      <LessonsHero />

      <section id="dersler-listesi" className="py-10 sm:py-14">
        <div className="mb-8">
          <div className="relative inline-flex items-center">
            <AppText variant="h3">Dersleri Keşfet</AppText>

            <img
              src={burstYellow}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-7 -top-3 w-7 -rotate-37 object-contain sm:-right-12 sm:-top-5 sm:w-12"
            />
          </div>

          <AppText variant="small" className="mt-1">
            Öğrenmek istediğin dersi seç ve içeriklerini keşfetmeye başla.
          </AppText>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </div>
      </section>
    </>
  );
}
