import { Link } from 'react-router-dom';

export function PlannerNav() {
    return (
        <nav className="fixed bottom-0 z-[60] w-full border-t border-white/10 bg-header-green px-4 pb-6 pt-2 text-white/70 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
            <div className="flex justify-around items-center max-w-xl mx-auto">
                <Link className="flex flex-col items-center gap-1 transition-colors hover:text-white" to="/">
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-[10px] font-medium uppercase tracking-tighter">Home</span>
                </Link>
                <Link className="flex flex-col items-center gap-1 text-white" to="/weeklymealplanner">
                    <span className="material-symbols-outlined fill-1">calendar_today</span>
                    <span className="text-[10px] font-medium uppercase tracking-tighter">Planner</span>
                </Link>
                <div className="relative -top-8 px-2">
                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-background-light dark:ring-background-dark active:scale-90 transition-transform">
                        <span className="material-symbols-outlined text-3xl">add</span>
                    </button>
                </div>
                <Link className="flex flex-col items-center gap-1 transition-colors hover:text-white" to="#">
                    <span className="material-symbols-outlined">restaurant_menu</span>
                    <span className="text-[10px] font-medium uppercase tracking-tighter">Recipes</span>
                </Link>
                <Link className="flex flex-col items-center gap-1 transition-colors hover:text-white" to="/profile">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[10px] font-medium uppercase tracking-tighter">Profile</span>
                </Link>
            </div>
        </nav>
    );
}
