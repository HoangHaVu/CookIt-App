const TABS = [
    { name: 'My Recipes', active: true },
    { name: 'Saved', active: false },
    { name: 'Achievements', active: false },
];

export function ProfileTabs() {
    return (
        <div className="mt-4 sticky top-16 bg-background-light dark:bg-background-dark z-10">
            <div className="flex border-b border-accent-light px-4 justify-between">
                {TABS.map((tab, i) => (
                    <a
                        key={i}
                        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 ${tab.active
                                ? 'border-brand-green text-brand-green'
                                : 'border-transparent text-slate-500 dark:text-slate-400'
                            }`}
                        href="#"
                    >
                        <p className="text-sm font-bold">{tab.name}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
