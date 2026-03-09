interface RankingCardProps {
    rank: number;
    title: string;
    author: string;
    rating: number;
    reviewsCount: string;
    imageSrc: string;
    badgeColor?: string;
    isTopThree?: boolean;
}

export function RankingCard({
    rank,
    title,
    author,
    rating,
    reviewsCount,
    imageSrc,
    badgeColor = 'bg-primary',
    isTopThree = false
}: RankingCardProps) {
    return (
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-3 flex gap-4 items-center border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden transition-all active:scale-[0.98]">
            <div className={`absolute top-0 left-0 ${isTopThree ? 'bg-action' : badgeColor} text-white text-[10px] font-black px-2.5 py-1 rounded-br-2xl z-10 shadow-sm`}>
                #{rank}
            </div>
            <div
                className="size-20 shrink-0 rounded-xl bg-cover bg-center shadow-inner border border-slate-100 dark:border-slate-700"
                style={{ backgroundImage: `url('${imageSrc}')` }}
            ></div>
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 dark:text-white truncate leading-tight">
                    {title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    by {author}
                </p>
                <div className="flex items-center gap-1 mt-2">
                    <span className="material-symbols-outlined fill text-yellow-500 text-sm">
                        star
                    </span>
                    <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                        {rating}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">
                        ({reviewsCount})
                    </span>
                </div>
            </div>
            <button className="bg-action hover:bg-action/90 shadow-lg shadow-action/20 text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all">
                View
            </button>
        </div>
    );
}
