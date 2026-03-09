interface RankingItemProps {
    rank: number;
    name: string;
    recipeName: string;
    points: string;
    imageSrc: string;
}

export function RankingRow({ rank, name, recipeName, points, imageSrc }: RankingItemProps) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all active:scale-[0.98]">
            <span className="font-bold text-slate-400 w-4">{rank}</span>
            <div
                className="size-12 rounded-full bg-cover bg-center border border-slate-100 dark:border-slate-700"
                style={{ backgroundImage: `url('${imageSrc}')` }}
            ></div>
            <div className="flex-1">
                <p className="font-bold text-sm text-slate-900 dark:text-slate-100">{name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{recipeName}</p>
            </div>
            <p className="font-bold text-sm text-brand-green">{points}</p>
        </div>
    );
}
