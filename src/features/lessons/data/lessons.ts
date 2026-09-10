import informationTechnologiesHeroImage from "@/assets/images/lessons/information-technologies/information-technologies-hero.png";

import type { Lesson } from "../types/lesson.types";

export const lessons: Lesson[] = [
  {
    slug: "bilisim-teknolojileri",
    badge: "Bilişim Teknolojileri",
    heroTitle: "Teknolojiyi Keşfet,",
    heroHighlight: "Becerilerini Geliştir!",
    description:
      "Bilgisayarları, interneti ve dijital dünyayı keşfet; öğrendiklerini etkinlikler ve oyunlarla pekiştir.",
    primaryButtonText: "Konuları Keşfet",
    secondaryButtonText: "Oyunlara Göz At",
    image: informationTechnologiesHeroImage,
    imageAlt: "Bilişim teknolojileri öğrenme görseli",
  },
];
