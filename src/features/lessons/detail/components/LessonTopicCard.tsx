import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

import { AppCard } from "@/components/ui/AppCard";
import { AppIconLink } from "@/components/ui/AppIconLink";
import { AppText } from "@/components/ui/AppText";

import type {
  LessonTopicLevel,
  LessonTopicVariant,
} from "../../types/lesson.types";

type LessonTopicCardProps = {
  lessonSlug: string;
  topicSlug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  variant: LessonTopicVariant;
  level: LessonTopicLevel;
};

const iconClasses: Record<LessonTopicVariant, string> = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  success: "bg-success text-success-content",
  info: "bg-info text-info-content",
  error: "bg-error text-error-content",
};

const linkVariants: Record<
  LessonTopicVariant,
  "primary" | "secondary" | "accent"
> = {
  primary: "primary",
  secondary: "secondary",
  accent: "accent",
  success: "secondary",
  info: "secondary",
  error: "primary",
};

const levelClasses: Record<LessonTopicLevel, string> = {
  Başlangıç: "bg-secondary/10 text-secondary",
  Orta: "bg-accent/15 text-accent-hover",
  İleri: "bg-error/10 text-error",
};

export function LessonTopicCard({
  lessonSlug,
  topicSlug,
  title,
  description,
  icon: Icon,
  variant,
  level,
}: LessonTopicCardProps) {
  return (
    <AppCard hoverable className="h-full">
      <div className="flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className={[
              "flex size-12 items-center justify-center rounded-xl",
              iconClasses[variant],
            ].join(" ")}
          >
            <Icon size={25} strokeWidth={2.2} />
          </div>

          <span
            className={[
              "rounded-full px-3 py-1 text-xs font-bold",
              levelClasses[level],
            ].join(" ")}
          >
            {level}
          </span>
        </div>

        <AppText variant="cardTitle">{title}</AppText>

        <div className="mt-2 flex flex-1 items-end justify-between gap-4">
          <AppText variant="small" className="max-w-64">
            {description}
          </AppText>

          <AppIconLink
            to={`/dersler/${lessonSlug}/${topicSlug}`}
            variant={linkVariants[variant]}
            ariaLabel={`${title} konusuna git`}
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </AppIconLink>
        </div>
      </div>
    </AppCard>
  );
}
