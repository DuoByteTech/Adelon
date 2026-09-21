import { useParams } from "react-router-dom";

import { lessons } from "../../data/lessons";

import { LessonActivityBanner } from "../components/LessonActivityBanner";
import { LessonContents } from "../components/LessonContents";
import { LessonHero } from "../components/LessonHero";

export function LessonDetailPage() {
  const { lessonSlug } = useParams();

  const lesson = lessons.find((item) => item.slug === lessonSlug);

  if (!lesson) {
    return null;
  }

  return (
    <>
      <LessonHero lesson={lesson} />
      <LessonContents lesson={lesson} />
      <LessonActivityBanner lessonSlug={lesson.slug} />
    </>
  );
}
