import { MonitorCog } from "lucide-react";

import informationTechnologiesHeroImage from "@/assets/images/lessons/information-technologies/information-technologies-hero.png";

import type { Lesson } from "../types/lesson.types";

export const lessons: Lesson[] = [
  {
    slug: "bilisim-teknolojileri",

    title: "Bilişim Teknolojileri",
    icon: MonitorCog,
    homeVariant: "violet",

    badge: "Bilişim Teknolojileri",

    heroTitle: "Teknolojiyi Keşfet,",
    heroHighlight: "Becerilerini Geliştir!",

    description:
      "Bilgisayarları, interneti ve dijital dünyayı keşfet; öğrendiklerini ders içerikleriyle pekiştir.",

    primaryButtonText: "İçerikleri Keşfet",
    secondaryButtonText: "Derslere Göz At",

    image: informationTechnologiesHeroImage,
    imageAlt: "Bilişim teknolojileri öğrenme görseli",

    contents: [
      {
        id: "yenilikci-bilisim-teknolojileri",

        title: "Yenilikçi Bilişim Teknolojileri",

        description:
          "Bilişim teknolojilerini tanıyalım, günlük yaşamla ilişkilendirelim ve kullanım alanlarına göre sınıflandıralım.",

        grade: "6. Sınıf",

        learningOutcome: "BTY.6.1.1",

        presentationUrl:
          "/lessons/bilisim-teknolojileri/yenilikci-bilisim-teknolojileri/Yenilikci_Bilisim_Teknolojileri_6_Sinif.pptx",

        pdfUrl:
          "/lessons/bilisim-teknolojileri/yenilikci-bilisim-teknolojileri/Yenilikci_Bilisim_Teknolojileri_6_Sinif.pdf",
      },
    ],
  },
];
