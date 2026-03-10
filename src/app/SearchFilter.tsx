import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppNavigation } from '../components/layout/AppNavigation';
import { RecipeThumbnail } from '../components/ui/RecipeThumbnail';
import { EmptyState } from '../components/ui/EmptyState';
import { MOCK_RECIPES } from '../lib/mockData';

// Unique categories from mock recipes
const CATEGORIES = [...new Set(MOCK_RECIPES.map((r) => r.category))];

function parseMinutes(time: string): number {
  if (time.includes('hr')) return parseInt(time) * 60;
  return parseInt(time) || 999;
}

export default function SearchFilter() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [quickOnly, setQuickOnly] = useState(false);

  const filtered = MOCK_RECIPES.filter((r) => {
    const matchesQuery = !query.trim() ||
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.category.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !activeCategory || r.category === activeCategory;
    const matchesTime = !quickOnly || parseMinutes(r.time) < 30;
    return matchesQuery && matchesCategory && matchesTime;
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      {/* Search Header */}
      <section className="bg-brand-green text-white pb-32 px-8 pt-16 rounded-b-[4rem] shadow-2xl relative z-10">
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate(-1)}
            className="size-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-white font-black">arrow_back</span>
          </button>
          <h2 className="text-2xl font-black uppercase tracking-tighter italic">Explore <span className="text-primary">Recipes</span></h2>
          <button
            onClick={() => { setQuery(''); setActiveCategory(null); setQuickOnly(false); }}
            className="size-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-white font-black">tune</span>
          </button>
        </div>

        <div className="absolute -bottom-10 left-8 right-8 z-20">
          <div className="flex items-center bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(14,117,71,0.3)] p-3 border-4 border-slate-50 dark:border-slate-800 group focus-within:border-brand-green/20 transition-all">
            <div className="flex-1 flex items-center px-6">
              <span className="material-symbols-outlined text-slate-300 mr-4 font-black group-focus-within:text-brand-green transition-colors">search</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border-none focus:ring-0 text-slate-900 dark:text-slate-100 bg-transparent py-4 text-sm font-bold placeholder:text-slate-300 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
                placeholder="Search ingredients, cuisines..."
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-slate-300 hover:text-slate-600 transition-colors ml-2">
                  <span className="material-symbols-outlined font-black text-sm">close</span>
                </button>
              )}
            </div>
            <button className="bg-primary text-white h-14 px-8 rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-primary/30 hover:bg-orange-600 transition-all active:scale-95 font-black uppercase tracking-widest text-xs">
              Search
            </button>
          </div>
        </div>
      </section>

      <main className="flex-1 px-8 pt-20 pb-40 space-y-12">
        {/* Category + Filter Chips */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 px-1">
            <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
              <span className="material-symbols-outlined text-xl font-black">filter_list</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Refine Results</h3>
          </div>

          {/* Category chips */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex h-10 shrink-0 items-center justify-center px-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 border-2 ${
                activeCategory === null
                  ? 'bg-brand-green text-white border-brand-green shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-100 dark:border-slate-800 hover:border-brand-green/30'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`flex h-10 shrink-0 items-center justify-center px-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 border-2 ${
                  activeCategory === cat
                    ? 'bg-brand-green text-white border-brand-green shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-100 dark:border-slate-800 hover:border-brand-green/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick filter chips */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button
              onClick={() => setQuickOnly((v) => !v)}
              className={`flex h-12 shrink-0 items-center justify-center gap-3 rounded-2xl px-6 font-black uppercase tracking-widest text-[9px] border-2 transition-all active:scale-95 ${
                quickOnly
                  ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                  : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-50 dark:border-slate-800 hover:border-brand-green/20'
              }`}
            >
              <span className="material-symbols-outlined text-sm font-black">timer</span>
              Time: &lt; 30m
            </button>
            {['Diet: Keto', 'Difficulty: Easy'].map((label) => (
              <button
                key={label}
                className="flex h-12 shrink-0 items-center justify-center gap-3 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-6 font-black uppercase tracking-widest text-[9px] border-2 border-slate-50 dark:border-slate-800 hover:border-brand-green/20 transition-all"
              >
                {label}
                <span className="material-symbols-outlined text-sm font-black text-brand-green">expand_more</span>
              </button>
            ))}
          </div>
        </section>

        {/* Results Info */}
        <section className="flex justify-between items-center px-1">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Found in Cookbook</p>
            <p className="text-lg font-black text-slate-800 dark:text-slate-100 tracking-tighter italic">{filtered.length} Results <span className="text-brand-green">available</span></p>
          </div>
          <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px] cursor-pointer hover:underline underline-offset-4">
            <span>Newest first</span>
            <span className="material-symbols-outlined font-black text-lg">swap_vert</span>
          </div>
        </section>

        {/* Grid or Empty State */}
        {filtered.length === 0 ? (
          <EmptyState
            icon="search_off"
            title="No recipes found"
            subtitle={query ? `No results for "${query}". Try a different search.` : 'No recipes match the selected filters.'}
            actionLabel="Clear Filters"
            onAction={() => { setQuery(''); setActiveCategory(null); setQuickOnly(false); }}
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filtered.map((recipe) => (
              <RecipeThumbnail
                key={recipe.id}
                recipeId={recipe.id}
                title={recipe.title}
                category={recipe.category}
                time={recipe.time}
                imageSrc={recipe.imageSrc}
                isFavorite={recipe.isFavorite}
              />
            ))}
          </div>
        )}

        {/* Load More */}
        {filtered.length > 0 && (
          <div className="pt-8 flex justify-center">
            <button className="bg-brand-green/10 text-brand-green border-2 border-brand-green/20 font-black uppercase tracking-[0.2em] text-[10px] px-12 py-5 rounded-[2rem] hover:bg-brand-green hover:text-white transition-all active:scale-95 shadow-2xl">
              Load More Recipes
            </button>
          </div>
        )}
      </main>

      <AppNavigation activeTab="recipes" />
    </div>
  );
}
