import { useParams } from "react-router-dom";

import { lessons } from "../../data/lessons";

import { LessonActivityBanner } from "../components/LessonActivityBanner";
import { LessonHero } from "../components/LessonHero";
import { LessonTopics } from "../components/LessonTopics";

export function LessonDetailPage() {
  const { lessonSlug } = useParams();

  const lesson = lessons.find((item) => item.slug === lessonSlug);

  if (!lesson) {
    return null;
  }

  return (
    <>
      <LessonHero lesson={lesson} />
      <LessonTopics lesson={lesson} />
      <LessonActivityBanner lessonSlug={lesson.slug} />
    </>
  );
}
