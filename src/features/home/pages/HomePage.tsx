import { HomeGames } from "../components/HomeGames";
import { HomeHero } from "../components/HomeHero";
import { HomeLessons } from "../components/HomeLessons";
import { HomeMotivationBanner } from "../components/HomeMotivationBanner";
import { HomeQuickAccess } from "../components/HomeQuickAccess";
import { HomeStats } from "../components/HomeStats";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeQuickAccess />
      <HomeLessons />
      <HomeMotivationBanner />
      <HomeStats />
      <HomeGames />
    </>
  );
}
