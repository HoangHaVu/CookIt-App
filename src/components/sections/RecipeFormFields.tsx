export function RecipeFormFields() {
    return (
        <div className="px-4 py-2 space-y-6">
            <div className="flex flex-col">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
                    Recipe Name
                </label>
                <input
                    className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400"
                    placeholder="e.g. Grandma's Famous Lasagna"
                    type="text"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
                        Portion Size
                    </label>
                    <div className="relative">
                        <select className="appearance-none w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all cursor-pointer">
                            <option>1-2 Persons</option>
                            <option defaultValue="3-4 Persons">3-4 Persons</option>
                            <option>5-6 Persons</option>
                            <option>Family Size (8+)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            expand_more
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
                        Cooking Time
                    </label>
                    <div className="relative">
                        <select className="appearance-none w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all cursor-pointer">
                            <option>Under 15 mins</option>
                            <option>15-30 mins</option>
                            <option defaultValue="30-60 mins">30-60 mins</option>
                            <option>Over 1 hour</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            schedule
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 flex items-center justify-between text-brand-green">
                    Ingredients
                    <span className="text-brand-green text-xs flex items-center gap-1 cursor-pointer font-bold">
                        <span className="material-symbols-outlined text-sm">add</span>{' '}
                        Add list
                    </span>
                </label>
                <textarea
                    rows={5}
                    className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400"
                    placeholder="2 cups flour&#10;1 tsp salt&#10;3 large eggs..."
                ></textarea>
            </div>

            <div className="flex flex-col">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 flex items-center justify-between text-brand-green">
                    Preparation Steps
                    <span className="text-brand-green text-xs flex items-center gap-1 cursor-pointer font-bold">
                        <span className="material-symbols-outlined text-sm">add_task</span>{' '}
                        Add step
                    </span>
                </label>
                <textarea
                    rows={5}
                    className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400"
                    placeholder="1. Pre-heat oven to 350°F&#10;2. Mix dry ingredients in a large bowl..."
                ></textarea>
            </div>
        </div>
    );
}
