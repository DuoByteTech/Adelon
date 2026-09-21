import { ArrowRight, BookOpenText } from "lucide-react";

import { AppLink } from "@/components/ui/AppLink";
import { AppText } from "@/components/ui/AppText";

import type { Lesson } from "../../types/lesson.types";

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <AppLink to={`/dersler/${lesson.slug}`}>
      <article
        className={[
          "group h-full overflow-hidden rounded-3xl",
          "border border-slate-200 bg-white shadow-sm",
          "transition-all duration-200",
          "hover:-translate-y-1 hover:shadow-md",
        ].join(" ")}
      >
        <div className="relative overflow-hidden bg-violet-50">
          <img
            src={lesson.image}
            alt={lesson.imageAlt}
            className={[
              "h-48 w-full object-contain p-4",
              "transition-transform duration-300",
              "group-hover:scale-105",
            ].join(" ")}
          />

          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur">
            <BookOpenText size={15} className="text-violet-600" />

            <span className="text-xs font-semibold text-violet-600">
              {lesson.title}
            </span>
          </div>
        </div>

        <div className="p-5">
          <AppText variant="cardTitle">{lesson.title}</AppText>

          <AppText variant="small" className="mt-2">
            {lesson.description}
          </AppText>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-xs font-medium text-slate-500">
              {lesson.contents.length} içerik
            </span>

            <span className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600">
              Dersi Keşfet
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </article>
    </AppLink>
  );
}
