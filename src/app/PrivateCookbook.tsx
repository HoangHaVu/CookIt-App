import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CookbookHeader, type CookbookTab } from '../components/layout/CookbookHeader';
import { CollectionCard } from '../components/ui/CollectionCard';
import { GridRecipeCard } from '../components/ui/GridRecipeCard';
import { EmptyState } from '../components/ui/EmptyState';
import { AppNavigation } from '../components/layout/AppNavigation';
import { MOCK_COLLECTIONS, MOCK_RECIPES } from '../lib/mockData';
import { useAppStore } from '../lib/store';

const MOCK_GROUPS = [
  { id: 'g-1', name: 'Cooking Enthusiasts', icon: 'skillet', color: 'bg-brand-green/20 text-brand-green' },
  { id: 'g-2', name: 'Vegan Club', icon: 'eco', color: 'bg-accent-sage/30 text-accent-sage' },
  { id: 'g-3', name: 'BBQ Masters', icon: 'outdoor_grill', color: 'bg-primary/15 text-primary' },
];

export default function PrivateCookbook() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<CookbookTab>('Collections');
  const favoritedRecipeIds = useAppStore((s) => s.favoritedRecipeIds);

  const favoriteRecipes = MOCK_RECIPES.filter((r) => favoritedRecipeIds.has(r.id));

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <CookbookHeader title="My Cookbook" activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 overflow-y-auto px-6 py-8 pb-32">

        {/* My Groups — immer sichtbar, unabhängig vom aktiven Tab */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">My Groups</h3>
            <button
              onClick={() => navigate('/creategroup')}
              className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline underline-offset-4"
            >
              + New
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-1 px-1 pb-1">
            {MOCK_GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => navigate('/groupactivityfeed')}
                className="flex flex-col items-center gap-2 shrink-0 active:scale-90 transition-all"
              >
                <div className={`size-14 rounded-2xl ${group.color} flex items-center justify-center shadow-sm`}>
                  <span className="material-symbols-outlined text-2xl font-black">{group.icon}</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 max-w-[60px] text-center leading-tight line-clamp-2">{group.name}</span>
              </button>
            ))}
            <button
              onClick={() => navigate('/creategroup')}
              className="flex flex-col items-center gap-2 shrink-0 active:scale-90 transition-all"
            >
              <div className="size-14 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-slate-300 dark:text-slate-600">add</span>
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 dark:text-slate-600">New</span>
            </button>
          </div>
        </section>

        {/* All Recipes Tab */}
        {activeTab === 'All Recipes' && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">All Recipes</h2>
              <span className="text-xs font-black text-brand-green bg-accent-sage/20 px-4 py-1.5 rounded-full uppercase tracking-widest border border-brand-green/20">
                {MOCK_RECIPES.length} Recipes
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {MOCK_RECIPES.map((r) => (
                <GridRecipeCard
                  key={r.id}
                  recipeId={r.id}
                  title={r.title}
                  time={r.time}
                  imageSrc={r.imageSrc}
                  imageAlt={r.title}
                  isFavorite={favoritedRecipeIds.has(r.id)}
                />
              ))}
            </div>
          </>
        )}

        {/* Collections Tab */}
        {activeTab === 'Collections' && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">Your Collections</h2>
              <span className="text-xs font-black text-brand-green bg-accent-sage/20 px-4 py-1.5 rounded-full uppercase tracking-widest border border-brand-green/20">
                {MOCK_COLLECTIONS.length} Folders
              </span>
            </div>
            {MOCK_COLLECTIONS.length === 0 ? (
              <EmptyState
                icon="menu_book"
                title="No collections yet"
                subtitle="Create your first collection to start organizing your recipes."
                actionLabel="Create Collection"
                onAction={() => navigate('/createrecipe')}
              />
            ) : (
              <div className="grid gap-8">
                {MOCK_COLLECTIONS.map((c) => (
                  <CollectionCard
                    key={c.id}
                    title={c.title}
                    recipeCount={c.recipesCount}
                    lastUpdated="recently"
                    images={[c.coverImage]}
                  />
                ))}
                <button className="flex flex-col items-center justify-center border-4 border-dashed border-primary/20 rounded-[3rem] p-12 hover:bg-primary/5 transition-all group active:scale-95 shadow-inner">
                  <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-5xl text-primary font-black">create_new_folder</span>
                  </div>
                  <span className="text-lg font-black text-primary uppercase tracking-[0.2em]">Create New Collection</span>
                </button>
              </div>
            )}
          </>
        )}

        {/* Favorites Tab */}
        {activeTab === 'Favorites' && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">Favorites</h2>
              <span className="text-xs font-black text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-widest border border-primary/20">
                {favoriteRecipes.length} Saved
              </span>
            </div>
            {favoriteRecipes.length === 0 ? (
              <EmptyState
                icon="favorite"
                title="No favorites yet"
                subtitle="Tap the bookmark on any recipe to save it here"
                actionLabel="Browse Recipes"
                onAction={() => setActiveTab('All Recipes')}
              />
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {favoriteRecipes.map((r) => (
                  <GridRecipeCard
                    key={r.id}
                    recipeId={r.id}
                    title={r.title}
                    time={r.time}
                    imageSrc={r.imageSrc}
                    imageAlt={r.title}
                    isFavorite={true}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <AppNavigation activeTab="recipes" />
    </div>
  );
}
