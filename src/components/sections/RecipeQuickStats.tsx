interface QuickStatProps {
    icon: string;
    label: string;
}

function QuickStat({ icon, label }: QuickStatProps) {
    return (
        <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined mb-1 text-brand-green">
                {icon}
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{label}</span>
        </button>
    );
}

export function RecipeQuickStats() {
    return (
        <div className="grid grid-cols-3 gap-4 mb-8">
            <QuickStat icon="favorite" label="1.2k" />
            <QuickStat icon="schedule" label="20 min" />
            <QuickStat icon="restaurant" label="2 Servings" />
        </div>
    );
}
