interface ProductCardProps {
    title: string;
    category: string;
    price: string;
    imageSrc: string;
    rating: string;
    reviews?: string;
    isNew?: boolean;
    isBestSeller?: boolean;
    variant?: 'grid' | 'list';
}

export function ProductCard({
    title,
    category,
    price,
    imageSrc,
    rating,
    reviews,
    isNew,
    isBestSeller,
    variant = 'grid'
}: ProductCardProps) {
    if (variant === 'list') {
        return (
            <div className="flex bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-slate-50 dark:border-slate-800 hover:border-brand-green/20 transition-all group">
                <div className="w-32 h-32 shrink-0 relative overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src={imageSrc}
                        alt={title}
                    />
                    {(isNew || isBestSeller) && (
                        <div className="absolute top-2 left-2">
                            <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-lg shadow-lg ${isNew ? 'bg-brand-green text-white' : 'bg-primary text-white'}`}>
                                {isNew ? 'New' : 'Best'}
                            </span>
                        </div>
                    )}
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 min-w-0">
                    <div>
                        <div className="flex justify-between items-start gap-2">
                            <h3 className="font-black text-sm uppercase tracking-tight text-slate-800 dark:text-slate-100 truncate">
                                {title}
                            </h3>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[12px] text-primary font-black">star</span>
                            <span className="text-[10px] font-black text-slate-400">{rating}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="font-black text-lg text-brand-green tracking-tighter">
                            {price}
                        </span>
                        <button className="bg-primary hover:bg-orange-600 text-white size-10 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-all active:scale-90">
                            <span className="material-symbols-outlined text-xl font-black">add</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-slate-50 dark:border-slate-800 hover:border-brand-green/20 transition-all group">
            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={imageSrc}
                    alt={title}
                />
                <button className="absolute top-4 right-4 size-10 flex items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-900/80 text-brand-green backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all active:scale-90 border border-white/20">
                    <span className="material-symbols-outlined text-xl font-black">favorite</span>
                </button>
                {(isNew || isBestSeller) && (
                    <div className="absolute top-4 left-4">
                        <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg ${isNew ? 'bg-brand-green text-white' : 'bg-primary text-white'}`}>
                            {isNew ? 'New Arrival' : 'Best Seller'}
                        </span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">
                    {category}
                </p>
                <h3 className="font-black text-sm uppercase tracking-tight text-slate-800 dark:text-slate-100 mb-3 truncate">
                    {title}
                </h3>
                <div className="flex items-center gap-1.5 mb-5">
                    <span className="material-symbols-outlined text-[14px] text-primary font-black">star</span>
                    <span className="text-[11px] font-black text-slate-400">{rating}</span>
                    {reviews && <span className="text-[11px] font-bold text-slate-300 ml-1">({reviews})</span>}
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-black text-xl text-brand-green tracking-tighter italic">{price}</span>
                    <button className="bg-primary hover:bg-orange-600 text-white h-12 px-5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-90 font-black uppercase tracking-tighter text-[10px]">
                        Add <span className="material-symbols-outlined text-lg font-black">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
