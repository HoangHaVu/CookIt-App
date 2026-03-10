import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../lib/store';

export interface RecipeCardProps {
    imageSrc: string;
    imageAlt: string;
    badgeText: string;
    title: string;
    description: string;
    rating: number;
    reviewsCount: string;
    isBookmarked?: boolean;
    recipeId?: string;
}

export function RecipeCard({
    imageSrc,
    imageAlt,
    badgeText,
    title,
    description,
    rating,
    reviewsCount,
    isBookmarked = false,
    recipeId,
}: RecipeCardProps) {
    const navigate = useNavigate();
    const toggleFavorite = useAppStore((s) => s.toggleFavorite);
    const isFavoritedInStore = useAppStore((s) => recipeId ? s.isFavorited(recipeId) : isBookmarked);
    const saved = isFavoritedInStore;

    const detailPath = recipeId ? `/recipedetail/${recipeId}` : '/recipedetail';

    return (
        <div onClick={() => navigate(detailPath)} className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-slate-50 dark:border-slate-800 group hover:border-brand-green/20 transition-all cursor-pointer">
            <div className="relative h-64 overflow-hidden">
                <img
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-10000"
                    data-alt={imageAlt}
                    src={imageSrc}
                />
                <div className="absolute top-6 right-6 z-20">
                    <button
                        onClick={(e) => { e.stopPropagation(); if (recipeId) toggleFavorite(recipeId); }}
                        className={`size-12 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl border border-white/20 transition-all active:scale-90 ${saved ? 'bg-primary text-white' : 'bg-white/80 text-primary'}`}
                    >
                        <span className={`material-symbols-outlined font-black ${saved ? 'fill-1' : ''}`}>bookmark</span>
                    </button>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                    <span className="bg-brand-green/90 backdrop-blur-xl text-white px-5 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-xl border border-white/20">
                        {badgeText}
                    </span>
                </div>
            </div>
            <div className="p-8">
                <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-3 uppercase tracking-tight leading-tight italic">
                    {title.split(' ').map((w, idx) => idx === 1 ? <span key={idx} className="text-brand-green">{w} </span> : w + ' ')}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-8 leading-relaxed opacity-70">
                    {description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm font-black">star</span>
                        <span className="text-[11px] font-black text-slate-900 dark:text-slate-100">{rating}</span>
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">({reviewsCount} reviews)</span>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); navigate(detailPath); }} className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 transition-all active:scale-95">
                        Explore Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}
