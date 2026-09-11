import type { LucideIcon } from "lucide-react";

export type LessonTopicVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "info"
  | "error";

export type LessonTopicLevel = "Başlangıç" | "Orta" | "İleri";

export type LessonTopic = {
  title: string;
  description: string;
  slug: string;
  icon: LucideIcon;
  variant: LessonTopicVariant;
  level: LessonTopicLevel;
};

export type Lesson = {
  slug: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  image: string;
  imageAlt: string;
  topics: LessonTopic[];
};
