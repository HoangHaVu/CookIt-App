interface CollectionCardProps {
    title: string;
    recipeCount: number;
    lastUpdated: string;
    images: string[];
    label?: string;
}

export function CollectionCard({
    title,
    recipeCount,
    lastUpdated,
    images,
    label = 'Label'
}: CollectionCardProps) {
    const isTriple = images.length >= 3;
    const isDouble = images.length === 2;

    return (
        <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] group">
            <div className={`grid ${isTriple ? 'grid-cols-3' : isDouble ? 'grid-cols-2' : 'grid-cols-1'} gap-1 h-44 overflow-hidden`}>
                {images.slice(0, 3).map((img, i) => (
                    <div
                        key={i}
                        className="bg-center bg-cover bg-no-repeat h-full transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                ))}
                {images.length > 3 && (
                    <div className="flex items-center justify-center bg-primary/10 text-primary font-black text-xl">
                        <span className="material-symbols-outlined text-3xl">more_horiz</span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1.5 bg-accent-sage/20 px-2.5 py-1 rounded-full text-brand-green">
                        <span className="material-symbols-outlined text-[14px] font-black">check_circle</span>
                        <p className="text-[10px] font-black uppercase tracking-widest">{label}</p>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="flex-1 min-w-0 pr-4">
                        <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 truncate mb-1">
                            {title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-tight">
                            {recipeCount} recipes • Updated {lastUpdated}
                        </p>
                    </div>
                    <button className="bg-brand-green shadow-lg shadow-brand-green/20 text-white size-12 rounded-2xl flex items-center justify-center hover:bg-brand-deep transition-all transform active:rotate-12">
                        <span className="material-symbols-outlined font-black">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
