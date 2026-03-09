

export interface RecipeCardProps {
    imageSrc: string;
    imageAlt: string;
    badgeText: string;
    title: string;
    description: string;
    rating: number;
    reviewsCount: string;
    isBookmarked?: boolean;
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
}: RecipeCardProps) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700">
            <div className="relative h-56">
                <img
                    alt={title}
                    className="w-full h-full object-cover"
                    data-alt={imageAlt}
                    src={imageSrc}
                />
                <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 shadow-sm ${isBookmarked ? 'text-primary' : 'text-slate-400'}`}>
                    <span className={`material-symbols-outlined ${isBookmarked ? 'fill-1' : ''}`}>
                        bookmark
                    </span>
                </div>
                <div className="absolute bottom-4 left-4 bg-brand-green/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                    {badgeText}
                </div>
            </div>
            <div className="p-5">
                <h4 className="text-lg font-bold mb-1">{title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">
                            star
                        </span>
                        <span className="text-sm font-bold">{rating}</span>
                        <span className="text-xs text-slate-400">({reviewsCount} reviews)</span>
                    </div>
                    <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}
