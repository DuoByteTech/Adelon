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
          "/lessons/yenilikci-bilisim-teknolojileri/Yenilikci_Bilisim_Teknolojileri_6_Sinif.pptx",
        pdfUrl:
          "/lessons/yenilikci-bilisim-teknolojileri/Yenilikci_Bilisim_Teknolojileri_6_Sinif.pdf",
      },

      {
        id: "bilisim-teknolojilerinin-gelecegi",
        title: "Bilişim Teknolojilerinin Geleceği",
        description:
          "Geleceğin bilişim teknolojilerini, teknolojik gelişmelerin yaşamımıza etkilerini ve gelecekte karşılaşabileceğimiz yenilikleri keşfedelim.",
        grade: "6. Sınıf",
        learningOutcome: "BTY.6.1.2",
        presentationUrl:
          "/lessons/bilisim-teknolojilerinin-gelecegi/Bilisim_Teknolojilerinin_Gelecegi_6_Sinif.pptx",
        pdfUrl:
          "/lessons/bilisim-teknolojilerinin-gelecegi/Bilisim_Teknolojilerinin_Gelecegi_6_Sinif.pdf",
      },
      {
        id: "tablolama-programlarina-giris",
        title: "Tablolama Programlarına Giriş",
        description:
          "Tablolama programlarını tanıyalım; satır, sütun ve hücre kavramlarını öğrenelim, biçimlendirme, formüller, sıralama, filtreleme ve grafiklerle verileri düzenleyip görselleştirelim.",
        grade: "6. Sınıf",
        learningOutcome: "BTY.6.2.1",
        presentationUrl:
          "/lessons/tablolama-programlarina-giris/Tablolama_Programlarina_Giris_6_Sinif.pptx",
        pdfUrl:
          "/lessons/tablolama-programlarina-giris/Tablolama_Programlarina_Giris_6_Sinif.pdf",
      },
    ],
  },
];
