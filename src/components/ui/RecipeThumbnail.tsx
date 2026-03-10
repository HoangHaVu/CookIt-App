import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../lib/store';

interface RecipeThumbnailProps {
    title: string;
    category: string;
    time: string;
    imageSrc: string;
    isFavorite?: boolean;
    recipeId?: string;
}

export function RecipeThumbnail({
    title,
    category,
    time,
    imageSrc,
    isFavorite = false,
    recipeId,
}: RecipeThumbnailProps) {
    const navigate = useNavigate();
    const toggleFavorite = useAppStore((s) => s.toggleFavorite);
    const isFavoritedInStore = useAppStore((s) => recipeId ? s.isFavorited(recipeId) : isFavorite);
    const saved = isFavoritedInStore;

    const detailPath = recipeId ? `/recipedetail/${recipeId}` : '/recipedetail';

    return (
        <div onClick={() => navigate(detailPath)} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-slate-50 dark:border-slate-800 hover:border-brand-green/20 transition-all cursor-pointer">
            <div className="aspect-square relative overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={imageSrc}
                    alt={title}
                />
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={(e) => { e.stopPropagation(); if (recipeId) toggleFavorite(recipeId); }}
                        className={`size-10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl border border-white/20 transition-all active:scale-90 ${saved ? 'bg-primary text-white' : 'bg-white/80 text-primary'}`}
                    >
                        <span className={`material-symbols-outlined font-black ${saved ? 'fill-1' : ''}`}>favorite</span>
                    </button>
                </div>
            </div>
            <div className="p-6">
                <span className="text-[9px] font-black uppercase text-brand-green tracking-[0.2em]">
                    {category}
                </span>
                <h4 className="font-black text-sm text-slate-800 dark:text-slate-100 mt-2 uppercase tracking-tight line-clamp-1 italic">
                    {title}
                </h4>
                <div className="flex items-center gap-2 mt-4 text-slate-300">
                    <span className="material-symbols-outlined text-sm font-black text-primary">schedule</span>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">{time}</span>
                </div>
            </div>
        </div>
    );
}
