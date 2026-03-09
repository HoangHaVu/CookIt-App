import { useNavigate } from 'react-router-dom';

interface RankingHeaderProps {
    title: string;
}

export function RankingHeader({ title }: RankingHeaderProps) {
    const navigate = useNavigate();

    return (
        <header className="bg-primary px-4 pt-8 pb-6 text-white sticky top-0 z-20 shadow-lg shadow-primary/20">
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined font-bold">arrow_back</span>
                </button>
                <h1 className="text-xl font-black tracking-widest uppercase">
                    {title}
                </h1>
                <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined font-bold">more_vert</span>
                </button>
            </div>

            <div className="flex bg-white/10 p-1 rounded-2xl backdrop-blur-md border border-white/5">
                <button className="flex-1 py-2.5 text-xs font-black rounded-xl bg-white text-primary shadow-xl uppercase tracking-wider transition-all">
                    All Time
                </button>
                <button className="flex-1 py-2.5 text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">
                    This Month
                </button>
                <button className="flex-1 py-2.5 text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">
                    Trending
                </button>
            </div>
        </header>
    );
}
