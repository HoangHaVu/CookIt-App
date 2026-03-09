export function RecipeTagsSection() {
    return (
        <section className="px-4 py-4">
            <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-3 block text-brand-green">
                Tags
            </label>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-brand-green text-white text-sm font-medium flex items-center gap-1 shadow-sm">
                    Dinner{' '}
                    <span className="material-symbols-outlined text-sm cursor-pointer hover:rotate-90 transition-transform">close</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-brand-green text-white text-sm font-medium flex items-center gap-1 shadow-sm">
                    Italian{' '}
                    <span className="material-symbols-outlined text-sm cursor-pointer hover:rotate-90 transition-transform">close</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent-light text-brand-green text-sm font-bold flex items-center gap-1 cursor-pointer hover:bg-accent-light/80 transition-colors border border-brand-green/10">
                    <span className="material-symbols-outlined text-sm">add</span> Add Tag
                </span>
            </div>
        </section>
    );
}
