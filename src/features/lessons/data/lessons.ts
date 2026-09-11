import {
  Blocks,
  Folder,
  HardDrive,
  Network,
  Presentation,
  ShieldCheck,
  Workflow,
  Laptop,
} from "lucide-react";

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

    topics: [
      {
        title: "Bilgisayarımı Tanıyorum",
        description:
          "Bilgisayarın bölümlerini, temel işlevlerini ve kullanımını öğren.",
        slug: "bilgisayarimi-taniyorum",
        icon: Laptop,
        variant: "primary",
        level: "Başlangıç",
      },
      {
        title: "Donanım ve Çevre Birimleri",
        description:
          "Donanım parçalarını ve çevre birimlerinin görevlerini keşfet.",
        slug: "donanim-ve-cevre-birimleri",
        icon: HardDrive,
        variant: "accent",
        level: "Orta",
      },
      {
        title: "Dosyalar ve Klasörler",
        description:
          "Dosyaları düzenle, klasörlerle çalışmayı ve arşivlemeyi öğren.",
        slug: "dosyalar-ve-klasorler",
        icon: Folder,
        variant: "secondary",
        level: "Başlangıç",
      },
      {
        title: "Güvenli İnternet",
        description:
          "İnterneti güvenli, bilinçli ve doğru kullanmanın yollarını öğren.",
        slug: "guvenli-internet",
        icon: ShieldCheck,
        variant: "success",
        level: "Orta",
      },
      {
        title: "Algoritma Mantığı",
        description:
          "Problemleri adım adım çözmeyi ve algoritmik düşünmeyi öğren.",
        slug: "algoritma-mantigi",
        icon: Workflow,
        variant: "error",
        level: "Orta",
      },
      {
        title: "Blok Tabanlı Kodlama",
        description:
          "Scratch ile eğlenceli projeler geliştir ve kodlamaya başla.",
        slug: "blok-tabanli-kodlama",
        icon: Blocks,
        variant: "primary",
        level: "Başlangıç",
      },
      {
        title: "Dijital Etik ve Kurallar",
        description: "Dijital dünyada doğru ve sorumlu davranışları öğren.",
        slug: "dijital-etik-ve-kurallar",
        icon: Network,
        variant: "info",
        level: "Orta",
      },
      {
        title: "Sunum ve Üretkenlik Araçları",
        description:
          "Sunumlar hazırla ve günlük dijital araçları etkili kullan.",
        slug: "sunum-ve-uretkenlik-araclari",
        icon: Presentation,
        variant: "error",
        level: "İleri",
      },
    ],
  },
];
