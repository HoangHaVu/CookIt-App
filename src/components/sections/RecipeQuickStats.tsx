import { useAppStore } from '../../lib/store';

interface RecipeQuickStatsProps {
    recipeId?: string;
    likesCount?: number;
    time?: string;
    servings?: number;
}

export function RecipeQuickStats({ recipeId, likesCount = 0, time = '—', servings = 2 }: RecipeQuickStatsProps) {
    const toggleLike = useAppStore((s) => s.toggleLike);
    const isLiked = useAppStore((s) => recipeId ? s.isLiked(recipeId) : false);
    const displayLikes = isLiked ? likesCount + 1 : likesCount;

    return (
        <div className="grid grid-cols-3 gap-4 mb-8">
            <button
                onClick={() => recipeId && toggleLike(recipeId)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl shadow-sm border transition-all active:scale-95 ${isLiked ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-brand-green'}`}
            >
                <span className={`material-symbols-outlined mb-1 ${isLiked ? 'fill-1' : ''}`}>favorite</span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    {displayLikes >= 1000 ? `${(displayLikes / 1000).toFixed(1)}k` : displayLikes}
                </span>
            </button>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined mb-1 text-brand-green">schedule</span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{time}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined mb-1 text-brand-green">restaurant</span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{servings} Servings</span>
            </div>
        </div>
    );
}
