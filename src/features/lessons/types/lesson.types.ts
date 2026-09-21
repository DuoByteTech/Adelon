import type { LucideIcon } from "lucide-react";

export type HomeLessonVariant =
  | "violet"
  | "rose"
  | "emerald"
  | "amber"
  | "blue";

export type LessonContent = {
  id: string;
  title: string;
  description: string;
  grade: string;
  learningOutcome: string;

  presentationUrl: string;
  pdfUrl: string;
};

export type Lesson = {
  slug: string;

  title: string;
  icon: LucideIcon;
  homeVariant: HomeLessonVariant;

  badge: string;
  heroTitle: string;
  heroHighlight: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;

  image: string;
  imageAlt: string;

  contents: LessonContent[];
};
