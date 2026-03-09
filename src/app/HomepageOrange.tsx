import { SearchHeader } from '../components/layout/SearchHeader';
import { AppNavigation } from '../components/layout/AppNavigation';
import { CategoryScroll } from '../components/sections/CategoryScroll';
import { RecommendedRecipes } from '../components/sections/RecommendedRecipes';

export default function HomepageOrange() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <SearchHeader />

      <main className="flex-1 px-8 pt-20 pb-40 space-y-12">
        <CategoryScroll />
        <RecommendedRecipes />
      </main>

      <AppNavigation activeTab="home" />
    </div>
  );
}
