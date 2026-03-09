
interface CookbookHeaderProps {
    title: string;
}

export function CookbookHeader({ title }: CookbookHeaderProps) {

    return (
        <header className="sticky top-0 z-50 bg-brand-green text-white shadow-2xl rounded-b-[2rem] overflow-hidden">
            <div className="flex items-center p-6 justify-between max-w-2xl mx-auto w-full">
                <div className="flex items-center gap-4">
                    <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all font-black">
                        <span className="material-symbols-outlined text-2xl">menu</span>
                    </button>
                    <h1 className="text-xl font-black tracking-widest uppercase">{title}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all font-black">
                        <span className="material-symbols-outlined text-2xl">search</span>
                    </button>
                    <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all font-black">
                        <span className="material-symbols-outlined text-2xl">add_circle</span>
                    </button>
                </div>
            </div>

            <nav className="max-w-2xl mx-auto w-full px-6">
                <div className="flex gap-8 border-b border-white/10">
                    {['All Recipes', 'Collections', 'Favorites'].map((tab) => {
                        const isActive = tab === 'Collections';
                        return (
                            <button
                                key={tab}
                                className={`flex flex-col items-center justify-center border-b-[3px] transition-all pb-4 pt-4 uppercase tracking-[0.2em] text-[10px] font-black ${isActive ? 'border-primary text-white' : 'border-transparent text-white/50 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}
