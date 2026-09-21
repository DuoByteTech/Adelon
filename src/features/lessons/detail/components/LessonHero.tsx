import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/ui/AppButton";
import { AppText } from "@/components/ui/AppText";

import type { Lesson } from "../../types/lesson.types";

type LessonHeroProps = {
  lesson: Lesson;
};

export function LessonHero({ lesson }: LessonHeroProps) {
  const navigate = useNavigate();

  const scrollToContents = () => {
    document.getElementById("ders-icerikleri")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative pt-4 sm:pt-6 lg:pt-8 lg:pb-10 xl:pb-0">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-2 text-secondary">
            <GraduationCap size={20} />

            <AppText variant="small" className="font-bold">
              {lesson.badge}
            </AppText>
          </div>

          <AppText variant="h1">
            {lesson.heroTitle}{" "}
            <span className="text-primary">{lesson.heroHighlight}</span>
          </AppText>

          <AppText variant="muted" className="mt-6 max-w-xl">
            {lesson.description}
          </AppText>

          <div className="mt-8 flex flex-wrap gap-4">
            <AppButton size="lg" onClick={scrollToContents}>
              {lesson.primaryButtonText}
            </AppButton>

            <AppButton
              variant="outline"
              size="lg"
              onClick={() => navigate("/dersler")}
            >
              {lesson.secondaryButtonText}
            </AppButton>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={lesson.image}
            alt={lesson.imageAlt}
            className="w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
