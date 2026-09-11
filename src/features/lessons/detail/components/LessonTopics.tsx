import { AppText } from "@/components/ui/AppText";

import burstYellow from "@/assets/illustrations/decorations/burst-yellow.png";
import type { Lesson } from "../../types/lesson.types";
import { LessonTopicCard } from "./LessonTopicCard";

type LessonTopicsProps = {
  lesson: Lesson;
};

export function LessonTopics({ lesson }: LessonTopicsProps) {
  return (
    <section className="py-10 sm:py-14">
      <div className="mb-6">
        <div className="relative inline-flex items-center">
          <AppText variant="h3"> Konulararı Keşfet</AppText>

          <img
            src={burstYellow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-7 -top-3 w-7 -rotate-37 object-contain sm:-right-12 sm:-top-5 sm:w-12"
          />
        </div>

        <AppText variant="small" className="mt-1">
          Öğrenmek istediğin konuyu seç, adım adım ilerlemeye başla.
        </AppText>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {lesson.topics.map((topic) => (
          <LessonTopicCard
            key={topic.slug}
            lessonSlug={lesson.slug}
            topicSlug={topic.slug}
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
            variant={topic.variant}
            level={topic.level}
          />
        ))}
      </div>
    </section>
  );
}
