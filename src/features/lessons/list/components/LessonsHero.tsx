import { BookOpenText } from "lucide-react";

import lessonsHeroImage from "@/assets/images/lessons/lesson-hero.png";

import { AppButton } from "@/components/ui/AppButton";
import { AppText } from "@/components/ui/AppText";

export function LessonsHero() {
  const scrollToLessons = () => {
    document
      .getElementById("dersler-listesi")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-4 sm:pt-6 lg:pt-8 lg:pb-10 xl:pb-0">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-2 text-secondary">
            <BookOpenText size={20} />

            <AppText variant="small" className="font-bold">
              Derslerini Keşfet
            </AppText>
          </div>

          <AppText variant="h1">
            Merak Ettiğin Dersleri Keşfet,{" "}
            <span className="text-primary">Öğrenmeye Başla!</span>
          </AppText>

          <AppText variant="muted" className="mt-6 max-w-xl">
            Derslerini seç, konu içeriklerini incele ve öğrenmeni destekleyen
            materyallerle bilgilerini geliştir.
          </AppText>

          <div className="mt-8 flex flex-wrap gap-4">
            <AppButton size="lg" onClick={scrollToLessons}>
              Dersleri İncele
            </AppButton>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={lessonsHeroImage}
            alt="Derslerini keşfeden öğrenciler"
            className="w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
