import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CATEGORIES } from '../../lib/mockData';

export function CategoryScroll() {
    const navigate = useNavigate();
    const [activeId, setActiveId] = useState(MOCK_CATEGORIES[0].id);

    return (
        <section className="space-y-8 mb-12">
            <div className="flex items-end justify-between px-1">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                        <span className="material-symbols-outlined text-xl font-black">grid_view</span>
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Categories</h3>
                </div>
                <button onClick={() => navigate('/searchfilter')} className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline underline-offset-4 mb-1">See All</button>
            </div>

            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
                {MOCK_CATEGORIES.map(cat => {
                    const isActive = cat.id === activeId;
                    return (
                        <div
                            key={cat.id}
                            onClick={() => { setActiveId(cat.id); navigate('/searchfilter'); }}
                            className="flex flex-col items-center gap-4 shrink-0 group cursor-pointer"
                        >
                            <div className={`size-20 rounded-[2rem] flex items-center justify-center shadow-xl transition-all active:scale-90 group-hover:-translate-y-1 ${isActive
                                ? 'bg-brand-green text-white shadow-brand-green/30 rotate-3'
                                : 'bg-white dark:bg-slate-900 text-slate-300 border-2 border-slate-50 dark:border-slate-800'
                            }`}>
                                <span className="material-symbols-outlined text-3xl font-black">{cat.icon}</span>
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-brand-green' : 'text-slate-300 group-hover:text-slate-500'}`}>
                                {cat.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
