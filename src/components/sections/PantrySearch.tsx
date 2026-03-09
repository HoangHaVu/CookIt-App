export function PantrySearch() {
    return (
        <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-4 rounded-l-xl">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                        className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 pl-2 text-base font-normal leading-normal"
                        placeholder="Search pantry items..."
                        defaultValue=""
                    />
                </div>
            </label>
        </div>
    );
}
