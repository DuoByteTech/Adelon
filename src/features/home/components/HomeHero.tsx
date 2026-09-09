import { GraduationCap } from "lucide-react";

import homeHeroImage from "@/assets/images/home/home-hero.png";

import { AppButton } from "@/components/ui/AppButton";
import { AppText } from "@/components/ui/AppText";

export function HomeHero() {
  return (
    <section className="relative pt-4 sm:pt-6 lg:pt-8 lg:pb-10 xl:pb-0">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-2 text-secondary">
            <GraduationCap size={20} />

            <AppText variant="small" className="font-bold">
              Eğlenceli İçerikler
            </AppText>
          </div>

          <AppText variant="h1">
            Öğrenmek Artık Çok Daha{" "}
            <span className="text-primary">Kolay ve Eğlenceli!</span>
          </AppText>

          <AppText variant="muted" className="mt-6 max-w-xl">
            Dersleri keşfet, notlarını güçlendir, quizlerle kendini dene ve
            oyunlarla öğrenmeyi keyifli hale getir.
          </AppText>

          <div className="mt-8 flex flex-wrap gap-4">
            <AppButton size="lg">Dersleri Keşfet</AppButton>

            <AppButton variant="outline" size="lg">
              Oyunlara Göz At
            </AppButton>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={homeHeroImage}
            alt="Öğrenen ve eğlenen öğrenciler"
            className="w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
