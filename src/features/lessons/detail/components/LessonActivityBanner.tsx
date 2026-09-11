import { ArrowRight } from "lucide-react";

import burstBlue from "@/assets/illustrations/decorations/burst-blue.png";
import burstYellowAlt from "@/assets/illustrations/decorations/burst-yellow-alt.png";
import sparklePurple from "@/assets/illustrations/decorations/sparkle-purple.png";
import targetArrow from "@/assets/illustrations/decorations/target-arrow.png";

import { AppLink } from "@/components/ui/AppLink";
import { AppText } from "@/components/ui/AppText";

type LessonActivityBannerProps = {
  lessonSlug: string;
};

export function LessonActivityBanner({
  lessonSlug,
}: LessonActivityBannerProps) {
  return (
    <section className="pb-10 sm:pb-14">
      <div className="relative overflow-hidden rounded-[20px] border border-violet-100 bg-violet-50 px-5 py-5 shadow-sm sm:px-7 sm:py-4">
        {/* Sol üst mor dekor */}
        <img
          src={sparklePurple}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 w-5 object-contain sm:left-5 sm:w-7"
        />

        {/* Sol alt sarı dekor */}
        <img
          src={burstYellowAlt}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-16 left-3 w-8 -rotate-24 object-contain sm:left-5 sm:w-10"
        />

        {/* Sağ mavi dekor */}
        <img
          src={burstBlue}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1 w-8 -rotate-37 object-contain sm:right-10 sm:w-12"
        />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Sol içerik */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Hedef */}
            <div className="ml-2 flex size-16 shrink-0 items-center justify-center sm:ml-5 sm:size-20">
              <img
                src={targetArrow}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain"
              />
            </div>

            {/* İçerik */}
            <div className="pr-2">
              <AppText variant="cardTitle">
                Öğrendiklerini Hemen Uygula!
              </AppText>

              <AppText variant="small">
                Kısa etkinliklerle öğrendiklerini pekiştir ve bilgilerini test
                et.
              </AppText>
            </div>
          </div>

          {/* Buton */}
          <div className="flex justify-end sm:mr-12 sm:block">
            <AppLink
              to={`/dersler/${lessonSlug}/etkinlik`}
              variant="bannerButton"
            >
              <span>Mini Etkinliğe Git</span>

              <ArrowRight size={17} />
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
