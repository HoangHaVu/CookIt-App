import { useNavigate } from 'react-router-dom';
import { CookbookHeader } from '../components/layout/CookbookHeader';
import { CollectionCard } from '../components/ui/CollectionCard';
import { EmptyState } from '../components/ui/EmptyState';
import { AppNavigation } from '../components/layout/AppNavigation';
import { MOCK_COLLECTIONS } from '../lib/mockData';


export default function PrivateCookbook() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-2xl mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <CookbookHeader title="My Cookbook" />

      <main className="flex-1 overflow-y-auto px-6 py-8 pb-32">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            Your Collections
          </h2>
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
              <span className="text-lg font-black text-primary uppercase tracking-[0.2em]">
                Create New Collection
              </span>
            </button>
          </div>
        )}
      </main>

      <AppNavigation activeTab="recipes" />
    </div>
  );
}
