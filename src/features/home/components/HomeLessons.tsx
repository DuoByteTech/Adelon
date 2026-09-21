import { ArrowRight } from "lucide-react";

import burstYellow from "@/assets/illustrations/decorations/burst-yellow.png";

import { AppLink } from "../../../components/ui/AppLink";
import { AppText } from "../../../components/ui/AppText";

import { lessons } from "../../lessons/data/lessons";

import { HomeLessonCard } from "./HomeLessonCard";

export function HomeLessons() {
  return (
    <section className="pt-8 sm:pt-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
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
            Sevdiğin dersi seç, hemen öğrenmeye başla.
          </AppText>
        </div>

        <AppLink to="/dersler">
          <span className="inline-flex items-center gap-1 self-start text-violet-600 sm:self-auto">
            Tüm Dersleri Gör
            <ArrowRight size={16} />
          </span>
        </AppLink>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {lessons.map((lesson) => (
          <HomeLessonCard
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
