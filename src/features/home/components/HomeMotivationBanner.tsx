import { ArrowRight, CircleDot, Sparkles, Target } from "lucide-react";

import { AppLink } from "../../../components/ui/AppLink";
import { AppText } from "../../../components/ui/AppText";

export function HomeMotivationBanner() {
  return (
    <section className="pt-8 sm:pt-12">
      <div className="relative overflow-hidden rounded-[20px] border border-violet-100 bg-violet-50 px-5 py-4 shadow-sm sm:px-7">
        <div className="absolute left-4 top-3 text-violet-500">
          <Sparkles size={18} />
        </div>

        <div className="absolute bottom-3 left-5 text-amber-400">
          <Sparkles size={18} />
        </div>

        <div className="absolute right-5 top-3 text-violet-400">
          <Sparkles size={18} />
        </div>

        <div className="absolute bottom-3 right-4 text-cyan-400">
          <CircleDot size={14} />
        </div>

        <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <div className="relative flex size-12 items-center justify-center rounded-full bg-rose-400">
                <div className="flex size-8 items-center justify-center rounded-full bg-white">
                  <Target
                    size={25}
                    strokeWidth={2.5}
                    className="text-violet-600"
                  />
                </div>
              </div>
            </div>

            <div>
              <AppText variant="cardTitle">
                Hedefine Bir Adım Daha Yaklaş!
              </AppText>

              <AppText variant="small">
                Düzenli çalış, öğrendiklerini pekiştir ve başarıya ulaş.
              </AppText>
            </div>
          </div>

          <AppLink to="/dersler" variant="bannerButton">
            <span>Hemen Keşfet</span>

            <ArrowRight size={17} />
          </AppLink>
        </div>
      </div>
    </section>
  );
}
