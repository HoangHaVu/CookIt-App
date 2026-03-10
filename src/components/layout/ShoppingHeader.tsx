import { useNavigate } from 'react-router-dom';

interface ShoppingHeaderProps {
    activeTab?: string;
}

export function ShoppingHeader({ activeTab = 'All Items' }: ShoppingHeaderProps) {
    const navigate = useNavigate();
    const tabs = ['All Items', 'By Recipe', 'Recently Bought'];

    return (
        <header className="bg-header-footer text-white px-4 py-4 sticky top-0 z-10 shadow-md">
            <div className="flex items-center justify-between max-w-[480px] mx-auto">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors active:scale-90"
                    >
                        <span className="material-symbols-outlined text-white font-black">arrow_back</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight">
                        Shopping List
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-white cursor-pointer">
                        search
                    </span>
                    <span className="material-symbols-outlined text-white cursor-pointer">
                        more_vert
                    </span>
                </div>
            </div>
            <div className="mt-4 flex gap-6 overflow-x-auto no-scrollbar max-w-[480px] mx-auto">
                {tabs.map((tab, i) => (
                    <a
                        key={i}
                        className={`flex flex-col items-center border-b-2 pb-2 shrink-0 ${tab === activeTab ? 'border-primary' : 'border-transparent opacity-70'
                            }`}
                        href="#"
                    >
                        <span className="text-sm font-semibold">{tab}</span>
                    </a>
                ))}
            </div>
        </header>
    );
}
