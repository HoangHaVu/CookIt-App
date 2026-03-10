import { Link, useLocation, useNavigate } from 'react-router-dom';

export interface AppNavigationProps {
    activeTab?: 'home' | 'planner' | 'recipes' | 'profile';
}

export function AppNavigation({ activeTab: propActiveTab }: AppNavigationProps) {
    const location = useLocation();

    // Determine active tab based on path if not provided
    const getActiveTab = () => {
        if (propActiveTab) return propActiveTab;
        const path = location.pathname;
        if (path === '/') return 'home';
        if (path === '/weeklymealplanner' || path === '/mealplannercalendar') return 'planner';
        if (path === '/privatecookbook' || path.includes('recipe')) return 'recipes';
        if (path === '/profile') return 'profile';
        return 'home';
    };

    const activeTab = getActiveTab();
    const navigate = useNavigate();

    return (
        <nav className="fixed bottom-0 z-[60] left-0 right-0 max-w-xl mx-auto border-t border-white/10 bg-brand-green px-6 pb-8 pt-4 text-white/70 shadow-[0_-15px_35px_rgba(14,117,71,0.4)] rounded-t-[3rem] transition-all duration-500">
            <div className="flex justify-around items-center">
                <Link
                    className={`flex flex-col items-center gap-2 transition-all hover:scale-110 active:scale-90 ${activeTab === 'home' ? 'text-white' : 'opacity-60 hover:opacity-100'}`}
                    to="/"
                >
                    <div className={`size-12 rounded-[1.2rem] flex items-center justify-center transition-all ${activeTab === 'home' ? 'bg-white/10 shadow-lg' : ''}`}>
                        <span className={`material-symbols-outlined text-2xl ${activeTab === 'home' ? 'fill-1 font-black underline-offset-8 decoration-white decoration-4' : 'font-bold'}`}>home</span>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Home</span>
                </Link>

                <Link
                    className={`flex flex-col items-center gap-2 transition-all hover:scale-110 active:scale-90 ${activeTab === 'planner' ? 'text-white' : 'opacity-60 hover:opacity-100'}`}
                    to="/weeklymealplanner"
                >
                    <div className={`size-12 rounded-[1.2rem] flex items-center justify-center transition-all ${activeTab === 'planner' ? 'bg-white/10 shadow-lg' : ''}`}>
                        <span className={`material-symbols-outlined text-2xl ${activeTab === 'planner' ? 'fill-1 font-black' : 'font-bold'}`}>calendar_today</span>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Planner</span>
                </Link>

                <div className="relative -top-12 px-2 group">
                    <button onClick={() => navigate('/createrecipe')} className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary text-white shadow-[0_15px_40px_-10px_rgba(255,165,0,0.6)] ring-[12px] ring-background-light dark:ring-background-dark active:scale-90 transition-all hover:scale-110 hover:-translate-y-1 hover:rotate-6">
                        <span className="material-symbols-outlined text-5xl font-black">add</span>
                    </button>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap shadow-2xl">Create Recipe</span>
                    </div>
                </div>

                <Link
                    className={`flex flex-col items-center gap-2 transition-all hover:scale-110 active:scale-90 ${activeTab === 'recipes' ? 'text-white' : 'opacity-60 hover:opacity-100'}`}
                    to="/privatecookbook"
                >
                    <div className={`size-12 rounded-[1.2rem] flex items-center justify-center transition-all ${activeTab === 'recipes' ? 'bg-white/10 shadow-lg' : ''}`}>
                        <span className={`material-symbols-outlined text-2xl ${activeTab === 'recipes' ? 'fill-1 font-black' : 'font-bold'}`}>menu_book</span>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Recipes</span>
                </Link>

                <Link
                    className={`flex flex-col items-center gap-2 transition-all hover:scale-110 active:scale-90 ${activeTab === 'profile' ? 'text-white' : 'opacity-60 hover:opacity-100'}`}
                    to="/profile"
                >
                    <div className={`size-12 rounded-[1.2rem] flex items-center justify-center transition-all ${activeTab === 'profile' ? 'bg-white/10 shadow-lg' : ''}`}>
                        <span className={`material-symbols-outlined text-2xl ${activeTab === 'profile' ? 'fill-1 font-black' : 'font-bold'}`}>person</span>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Profile</span>
                </Link>
            </div>
        </nav>
    );
}
