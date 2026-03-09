
import { SearchHeader } from '../components/layout/SearchHeader';
import { BottomNav } from '../components/layout/BottomNav';
import { CategoryScroll } from '../components/sections/CategoryScroll';
import { RecommendedRecipes } from '../components/sections/RecommendedRecipes';

export default function HomepageGreen() {
  return (
    <>
      <SearchHeader />
      <main className="px-6 pb-32">
        <CategoryScroll />
        <RecommendedRecipes />
      </main>
      <BottomNav />
    </>
  );
}
