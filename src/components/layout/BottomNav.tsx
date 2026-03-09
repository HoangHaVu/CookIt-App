
import { Link } from 'react-router-dom';

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-brand-green text-white/60 px-6 py-4 flex items-center justify-between z-50 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(26,60,52,0.3)]">
            <Link
                className="flex flex-col items-center gap-1 text-brand-green"
                to="/"
            >
                <div className="nav-pill px-5 py-1 flex items-center justify-center">
                    <span className="material-symbols-outlined fill-1">home</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">
                    Home
                </span>
            </Link>
            <Link className="flex flex-col items-center gap-1" to="#">
                <div className="px-5 py-1 flex items-center justify-center">
                    <span className="material-symbols-outlined">restaurant_menu</span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
                    Recipes
                </span>
            </Link>
            <Link className="flex flex-col items-center gap-1" to="#">
                <div className="px-5 py-1 flex items-center justify-center">
                    <span className="material-symbols-outlined">bookmark</span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
                    Saved
                </span>
            </Link>
            <Link className="flex flex-col items-center gap-1" to="/profile">
                <div className="px-5 py-1 flex items-center justify-center">
                    <span className="material-symbols-outlined">person</span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
                    Profile
                </span>
            </Link>
        </nav>
    );
}
