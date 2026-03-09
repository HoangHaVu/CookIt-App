interface RecipeInfoHeaderProps {
    category: string;
    rating: number;
    reviewsCount: number;
    title: string;
}

export function RecipeInfoHeader({
    category,
    rating,
    reviewsCount,
    title,
}: RecipeInfoHeaderProps) {
    return (
        <div className="pt-6">
            <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full bg-accent-light text-brand-green text-xs font-bold uppercase tracking-wider">
                    {category}
                </span>
                <div className="flex items-center gap-1 text-brand-green">
                    <span className="material-symbols-outlined !text-lg fill-1">star</span>
                    <span className="font-bold">{rating}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                        ({reviewsCount} reviews)
                    </span>
                </div>
            </div>
            <h1 className="text-3xl font-black leading-tight tracking-tight mb-4 text-slate-900 dark:text-slate-100">
                {title}
            </h1>
        </div>
    );
}
