import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../lib/store';

export function SearchHeader() {
    const navigate = useNavigate();
    const user = useAppStore((s) => s.currentUser);
    const greeting = user ? `${user.name.split(' ')[0]}'s Kitchen` : 'Your Kitchen';

    return (
        <header className="bg-brand-green text-white pb-24 px-8 pt-16 rounded-b-[4rem] shadow-2xl relative z-10 transition-all">
            <div className="flex items-start justify-between mb-10">
                <div className="space-y-2">
                    <h2 className="text-4xl font-black leading-[0.9] tracking-tighter uppercase">
                        What would <br />
                        you like <span className="text-primary italic">to cook?</span>
                    </h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">{greeting}</p>
                </div>
                <div className="size-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl shadow-2xl">
                    <span className="material-symbols-outlined text-3xl font-black">notifications</span>
                </div>
            </div>

            <div className="absolute -bottom-10 left-8 right-8 z-20">
                <div className="flex items-center bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(14,117,71,0.3)] p-3 border-4 border-slate-50 dark:border-slate-800 group focus-within:border-brand-green/20 transition-all hover:scale-[1.02]">
                    <div onClick={() => navigate('/searchfilter')} className="flex-1 flex items-center px-6 cursor-pointer">
                        <span className="material-symbols-outlined text-slate-300 mr-4 font-black group-focus-within:text-brand-green transition-colors">
                            search
                        </span>
                        <input
                            readOnly
                            onClick={() => navigate('/searchfilter')}
                            className="w-full border-none focus:ring-0 text-slate-900 dark:text-slate-100 bg-transparent py-4 text-sm font-bold placeholder:text-slate-300 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest cursor-pointer"
                            placeholder="Search recipes, chefs, tools..."
                            type="text"
                        />
                    </div>
                    <button onClick={() => navigate('/searchfilter')} className="bg-primary text-white size-14 rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-primary/30 hover:bg-orange-600 transition-all active:scale-95">
                        <span className="material-symbols-outlined font-black">tune</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
