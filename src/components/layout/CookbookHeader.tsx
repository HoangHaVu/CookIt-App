import { useNavigate } from 'react-router-dom';

export type CookbookTab = 'All Recipes' | 'Collections' | 'Favorites';

interface CookbookHeaderProps {
    title: string;
    activeTab: CookbookTab;
    onTabChange: (tab: CookbookTab) => void;
}

const TABS: CookbookTab[] = ['All Recipes', 'Collections', 'Favorites'];

export function CookbookHeader({ title, activeTab, onTabChange }: CookbookHeaderProps) {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 bg-brand-green text-white shadow-2xl rounded-b-[2rem] overflow-hidden">
            <div className="flex items-center p-6 justify-between w-full">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all active:scale-90"
                    >
                        <span className="material-symbols-outlined text-2xl font-black">arrow_back</span>
                    </button>
                    <h1 className="text-xl font-black tracking-widest uppercase">{title}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigate('/magicimportscan')}
                        className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all active:scale-90"
                        title="Import Recipe"
                    >
                        <span className="material-symbols-outlined text-2xl font-black">document_scanner</span>
                    </button>
                    <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all font-black">
                        <span className="material-symbols-outlined text-2xl">search</span>
                    </button>
                </div>
            </div>

            <nav className="w-full px-6">
                <div className="flex gap-8 border-b border-white/10">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => onTabChange(tab)}
                            className={`flex flex-col items-center justify-center border-b-[3px] transition-all pb-4 pt-4 uppercase tracking-[0.2em] text-[10px] font-black ${
                                activeTab === tab
                                    ? 'border-primary text-white'
                                    : 'border-transparent text-white/50 hover:text-white'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
}
