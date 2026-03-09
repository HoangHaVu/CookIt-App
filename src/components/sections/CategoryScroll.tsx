

const CATEGORIES = [
    { name: 'Breakfast', icon: 'restaurant', active: true },
    { name: 'Italian', icon: 'local_pizza', active: false },
    { name: 'Asian', icon: 'ramen_dining', active: false },
    { name: 'Desserts', icon: 'icecream', active: false },
    { name: 'Seafood', icon: 'set_meal', active: false },
];

export function CategoryScroll() {
    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">Categories</h3>
                <button className="text-primary text-sm font-semibold">See All</button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {CATEGORIES.map((cat, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                        {cat.active ? (
                            <div className="size-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-green/20 bg-accent-light">
                                <span className="material-symbols-outlined text-3xl text-brand-green">
                                    {cat.icon}
                                </span>
                            </div>
                        ) : (
                            <div className="size-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 shadow-sm">
                                <span className="material-symbols-outlined text-3xl">
                                    {cat.icon}
                                </span>
                            </div>
                        )}
                        <span
                            className={`text-xs font-${cat.active ? 'bold text-brand-green' : 'medium text-slate-500'
                                }`}
                        >
                            {cat.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
