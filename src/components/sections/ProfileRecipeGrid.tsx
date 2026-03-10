import { useNavigate } from 'react-router-dom';
import { GridRecipeCard } from '../ui/GridRecipeCard';
import { MOCK_RECIPES } from '../../lib/mockData';
import { useAppStore } from '../../lib/store';
import { EmptyState } from '../ui/EmptyState';

interface ProfileRecipeGridProps {
    activeTab?: 'My Recipes' | 'Saved' | 'Achievements';
}

export function ProfileRecipeGrid({ activeTab = 'My Recipes' }: ProfileRecipeGridProps) {
    const navigate = useNavigate();
    const favoritedRecipeIds = useAppStore((s) => s.favoritedRecipeIds);

    const recipes = activeTab === 'Saved'
        ? MOCK_RECIPES.filter((r) => favoritedRecipeIds.has(r.id))
        : MOCK_RECIPES;

    if (activeTab === 'Achievements') {
        return (
            <div className="p-8 pb-24 flex flex-col items-center gap-6 text-center">
                <span className="material-symbols-outlined text-6xl text-brand-green">emoji_events</span>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">
                    View your achievements & badges
                </p>
                <button
                    onClick={() => navigate('/achievementsbadges')}
                    className="bg-brand-green text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-brand-green/20 hover:bg-brand-green/90 active:scale-95 transition-all"
                >
                    Open Achievements
                </button>
            </div>
        );
    }

    if (activeTab === 'Saved' && recipes.length === 0) {
        return (
            <div className="pb-24">
                <EmptyState
                    icon="bookmark"
                    title="No saved recipes yet"
                    subtitle="Tap the bookmark on any recipe to save it here"
                />
            </div>
        );
    }

    return (
        <div className="p-4 grid grid-cols-2 gap-4 pb-24">
            {recipes.map((recipe) => (
                <GridRecipeCard
                    key={recipe.id}
                    recipeId={recipe.id}
                    title={recipe.title}
                    time={recipe.time}
                    imageSrc={recipe.imageSrc}
                    imageAlt={recipe.title}
                    isFavorite={recipe.isFavorite}
                />
            ))}
        </div>
    );
}
