

export function SearchHeader() {
    return (
        <header className="bg-brand-green text-white curved-header pb-16 px-6 relative mb-12 pt-12">
            <div className="mb-4">
                <h2 className="text-3xl font-bold leading-tight">
                    What would you like <br />
                    <span className="text-primary">to cook today?</span>
                </h2>
            </div>

            <div className="absolute -bottom-6 left-6 right-6">
                <div className="flex items-center bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-brand-green/10 p-2">
                    <div className="flex-1 flex items-center px-4">
                        <span className="material-symbols-outlined text-slate-400 mr-3">
                            search
                        </span>
                        <input
                            className="w-full border-none focus:ring-0 text-slate-900 dark:text-slate-100 bg-transparent py-3 placeholder:text-slate-400"
                            placeholder="Search recipes, chefs..."
                            type="text"
                        />
                    </div>
                    <button className="bg-primary text-white p-3 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined">tune</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
