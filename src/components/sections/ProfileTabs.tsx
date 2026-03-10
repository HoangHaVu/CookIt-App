type ProfileTab = 'My Recipes' | 'Saved' | 'Achievements';

interface ProfileTabsProps {
    activeTab: ProfileTab;
    onTabChange: (tab: ProfileTab) => void;
}

const TABS: ProfileTab[] = ['My Recipes', 'Saved', 'Achievements'];

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
    return (
        <div className="mt-4 sticky top-16 bg-background-light dark:bg-background-dark z-10">
            <div className="flex border-b border-accent-light px-4 justify-between">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${
                            activeTab === tab
                                ? 'border-brand-green text-brand-green'
                                : 'border-transparent text-slate-500 dark:text-slate-400'
                        }`}
                    >
                        <p className="text-sm font-bold">{tab}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
