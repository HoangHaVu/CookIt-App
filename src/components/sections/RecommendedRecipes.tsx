import { RecipeCard } from '../ui/RecipeCard';
import { MOCK_RECIPES } from '../../lib/mockData';

export function RecommendedRecipes() {
    return (
        <section className="space-y-8">
            <div className="flex items-end justify-between px-1">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-xl font-black italic">recommend</span>
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Recommended for You</h3>
                </div>
                <button className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline underline-offset-4 mb-1">Refresh</button>
            </div>

            <div className="grid gap-10">
                {MOCK_RECIPES.slice(0, 3).map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipeId={recipe.id}
                        imageSrc={recipe.imageSrc}
                        imageAlt={recipe.title}
                        badgeText={`${recipe.difficulty ?? 'Easy'} • ${recipe.time}`}
                        title={recipe.title}
                        description={recipe.description}
                        rating={recipe.rating ?? 4.5}
                        reviewsCount={String(recipe.reviewsCount ?? recipe.likesCount)}
                        isBookmarked={recipe.isFavorite}
                    />
                ))}
            </div>
        </section>
    );
}
