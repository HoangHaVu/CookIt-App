import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchHeader } from '../components/layout/SearchHeader';
import { AppNavigation } from '../components/layout/AppNavigation';
import { CategoryScroll } from '../components/sections/CategoryScroll';
import { RecommendedRecipes } from '../components/sections/RecommendedRecipes';
import { SkeletonFeed } from '../components/ui/SkeletonCard';

const QUICK_ACTIONS = [
  { icon: 'kitchen', label: 'Pantry', route: '/pantryinventory', color: 'bg-accent-sage/20 text-brand-green' },
  { icon: 'shopping_cart', label: 'Shopping', route: '/shoppinglist', color: 'bg-primary/10 text-primary' },
  { icon: 'storefront', label: 'Market', route: '/marketplace', color: 'bg-blue-50 text-blue-500' },
  { icon: 'military_tech', label: 'Rankings', route: '/reciperankings', color: 'bg-yellow-50 text-yellow-600' },
  { icon: 'trending_up', label: 'Trending', route: '/trendingcreators', color: 'bg-purple-50 text-purple-500' },
  { icon: 'groups', label: 'Community', route: '/groupactivityfeed', color: 'bg-pink-50 text-pink-500' },
  { icon: 'emoji_events', label: 'Challenges', route: '/challengeleaderboard', color: 'bg-orange-50 text-orange-500' },
];

export default function HomepageGreen() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <SearchHeader />

      <main className="flex-1 px-8 pt-20 pb-40 space-y-12">
        {isLoading ? (
          <SkeletonFeed />
        ) : (
          <>
            <CategoryScroll />

            {/* Quick Access */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 px-1">
                <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <span className="material-symbols-outlined text-xl font-black">apps</span>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Explore</h3>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar -mx-1 px-1">
                {QUICK_ACTIONS.map(({ icon, label, route, color }) => (
                  <button
                    key={route}
                    onClick={() => navigate(route)}
                    className="flex flex-col items-center gap-2 shrink-0 active:scale-90 transition-all"
                  >
                    <div className={`size-16 rounded-2xl ${color} flex items-center justify-center shadow-sm`}>
                      <span className="material-symbols-outlined text-2xl font-black">{icon}</span>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{label}</span>
                  </button>
                ))}
              </div>
            </section>

            <RecommendedRecipes />
          </>
        )}
      </main>

      <AppNavigation activeTab="home" />
    </div>
  );
}
