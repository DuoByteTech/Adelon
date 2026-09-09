import { HomeHero } from "../components/HomeHero";
import { HomeLessons } from "../components/HomeLessons";
import { HomeMotivationBanner } from "../components/HomeMotivationBanner";
import { HomeQuickAccess } from "../components/HomeQuickAccess";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeQuickAccess />
      <HomeLessons />
      <HomeMotivationBanner />
    </>
  );
}
