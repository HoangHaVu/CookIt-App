import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../lib/store';

interface GridRecipeCardProps {
    title: string;
    time: string;
    imageSrc: string;
    imageAlt: string;
    isFavorite?: boolean;
    recipeId?: string;
}

export function GridRecipeCard({
    title,
    time,
    imageSrc,
    imageAlt,
    isFavorite = false,
    recipeId,
}: GridRecipeCardProps) {
    const navigate = useNavigate();
    const toggleFavorite = useAppStore((s) => s.toggleFavorite);
    const saved = useAppStore((s) => recipeId ? s.isFavorited(recipeId) : isFavorite);

    const detailPath = recipeId ? `/recipedetail/${recipeId}` : '/recipedetail';

    return (
        <div onClick={() => navigate(detailPath)} className="flex flex-col gap-2 group cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden relative">
                <button
                    onClick={(e) => { e.stopPropagation(); if (recipeId) toggleFavorite(recipeId); }}
                    className={`absolute top-2 right-2 bg-black/40 backdrop-blur-md rounded-full p-1.5 ${saved ? 'text-primary' : 'text-white'}`}
                >
                    <span className={`material-symbols-outlined text-sm ${saved ? 'fill-1' : ''}`}>
                        favorite
                    </span>
                </button>
                <div
                    className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                    data-alt={imageAlt}
                    style={{
                        backgroundImage: `url('${imageSrc}')`,
                    }}
                ></div>
            </div>
            <p className="text-sm font-bold line-clamp-1">{title}</p>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                <span className="material-symbols-outlined text-xs">schedule</span>
                <span>{time}</span>
            </div>
        </div>
    );
}
