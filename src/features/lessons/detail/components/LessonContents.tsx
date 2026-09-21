import burstYellow from "@/assets/illustrations/decorations/burst-yellow.png";

import { AppText } from "@/components/ui/AppText";

import type { Lesson } from "../../types/lesson.types";

import { LessonContentCard } from "./LessonContentCard";

type LessonContentsProps = {
  lesson: Lesson;
};

export function LessonContents({ lesson }: LessonContentsProps) {
  return (
    <section id="ders-icerikleri" className="py-10 sm:py-14">
      <div className="mb-6">
        <div className="relative inline-flex items-center">
          <AppText variant="h3">Ders İçerikleri</AppText>

          <img
            src={burstYellow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-7 -top-3 w-7 -rotate-37 object-contain sm:-right-12 sm:-top-5 sm:w-12"
          />
        </div>

        <AppText variant="small" className="mt-1">
          Konu anlatımlarını slayt veya PDF olarak indirebilirsin.
        </AppText>
      </div>

      {lesson.contents.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-violet-200 bg-violet-50/50 px-6 py-10 text-center">
          <AppText variant="h3">Henüz içerik eklenmedi</AppText>

          <AppText variant="small" className="mt-2">
            Bu derse ait içerikler yakında burada yer alacak.
          </AppText>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-3">
          {lesson.contents.map((content) => (
            <LessonContentCard key={content.id} content={content} />
          ))}
        </div>
      )}
    </section>
  );
}
