const CATEGORIES = [
    { icon: 'restaurant', label: 'Breakfast', active: true },
    { icon: 'local_pizza', label: 'Italian' },
    { icon: 'ramen_dining', label: 'Asian' },
    { icon: 'icecream', label: 'Desserts' },
    { icon: 'set_meal', label: 'Seafood' }
];

export function CategoryScroll() {
    return (
        <section className="space-y-8 mb-12">
            <div className="flex items-end justify-between px-1">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                        <span className="material-symbols-outlined text-xl font-black">grid_view</span>
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Categories</h3>
                </div>
                <button className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline underline-offset-4 mb-1">See All</button>
            </div>

            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
                {CATEGORIES.map(cat => (
                    <div key={cat.label} className="flex flex-col items-center gap-4 shrink-0 group cursor-pointer">
                        <div className={`size-20 rounded-[2rem] flex items-center justify-center shadow-xl transition-all active:scale-90 group-hover:-translate-y-1 ${cat.active
                            ? 'bg-brand-green text-white shadow-brand-green/30 rotate-3'
                            : 'bg-white dark:bg-slate-900 text-slate-300 border-2 border-slate-50 dark:border-slate-800'
                            }`}>
                            <span className="material-symbols-outlined text-3xl font-black">{cat.icon}</span>
                        </div>
                        <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors ${cat.active ? 'text-brand-green' : 'text-slate-300 group-hover:text-slate-500'}`}>
                            {cat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
