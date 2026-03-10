import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function RecipeImport() {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <PageHeader title="Magic Preview" rightActionIcon="auto_awesome" />

      <main className="flex-1 pb-48 px-6 py-8 space-y-12">
        {/* Banner Section */}
        <section className="relative group overflow-hidden rounded-[2.5rem] aspect-[16/10] shadow-2xl border-8 border-white dark:border-slate-800 shadow-brand-green/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity"></div>
          <img
            alt="Roasted Sage Chicken"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-10000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDURwyZuUse9wpcWvEDj5YSWnMlColIlVU_w7-3q35iJWPdwnC2IDwi7Q4eoAUB9QJJDNmhCvRyKHyBlmzUNxyLYjtTFFiuEk-Z9HQFCYd065qlI0ac4g5ECbbX1ZqUTnQGHreOmjIzmz7GkHTBrmDjBcRFq_GFK2blc2V8KxKWFRXP8WqXAVf2ciBb9dXNPMaF2z8K00Nq7gr7YmUikeHeSphJz2CLY_KM-Hu5CJzQZeQgyAgxf14K_O_wzNu6gN9GON8UPyej5hc"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-5 py-1.5 bg-brand-green text-white text-[10px] font-black rounded-full shadow-lg uppercase tracking-widest border border-white/20">
                AI Detected
              </span>
              <span className="px-5 py-1.5 bg-primary text-white text-[10px] font-black rounded-full shadow-lg uppercase tracking-widest border border-white/20">
                98% Match
              </span>
            </div>
            <h2 className="text-3xl font-black text-white leading-tight uppercase tracking-tight drop-shadow-md">
              Roasted Sage <br /> & <span className="text-primary">Lemon Chicken</span>
            </h2>
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 px-1">
            <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
              <span className="material-symbols-outlined font-black">auto_awesome</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Analysis Results</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { icon: 'check_circle', label: 'Gluten-Free' },
              { icon: 'fitness_center', label: 'High Protein' },
              { icon: 'restaurant_menu', label: 'Dinner' },
              { icon: 'eco', label: 'Sage-Infused' }
            ].map(tag => (
              <div key={tag.label} className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-white dark:bg-slate-900 text-brand-green border-2 border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest shadow-sm hover:border-brand-green/30 transition-all">
                <span className="material-symbols-outlined text-sm font-black">{tag.icon}</span>
                {tag.label}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-0 bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden divide-x-2 divide-slate-50 dark:divide-slate-800">
            {[
              { label: 'Time', value: '75 min' },
              { label: 'Serves', value: '4-6' },
              { label: 'Cals', value: '420' }
            ].map(stat => (
              <div key={stat.label} className="py-6 text-center group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-[0.2em] mb-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
                <p className="font-black text-slate-900 dark:text-slate-100 text-lg tracking-tight uppercase">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="space-y-6">
          <div className="flex items-end justify-between px-1">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                <span className="material-symbols-outlined font-black">inventory_2</span>
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Ingredients</h3>
            </div>
            <button className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline underline-offset-4 mb-1">
              Edit All
            </button>
          </div>

          <div className="grid gap-3">
            {[
              'Whole Organic Chicken (1.5kg)',
              'Fresh Sage Leaves (1 bunch)',
              'Extra Virgin Olive Oil'
            ].map((ing, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-100 dark:border-slate-800 shadow-sm hover:border-brand-green/20 transition-all group">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">{ing}</span>
                <span className="material-symbols-outlined text-slate-300 font-black group-hover:text-primary transition-colors cursor-pointer">edit_note</span>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons moved into main scrollable area */}
        <div className="flex gap-4 mt-12 pb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-white dark:bg-slate-900 text-slate-400 h-20 rounded-[2.5rem] border-4 border-slate-100 dark:border-slate-800 font-black uppercase tracking-widest text-[10px] shadow-2xl flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined font-black">close</span>
            Discard
          </button>
          <button
            onClick={() => navigate('/importconfirmation')}
            className="flex-[2] bg-primary text-white h-20 rounded-[2.5rem] font-black uppercase tracking-tighter text-xl shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] flex items-center justify-center gap-4 hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-3xl font-black">check_circle</span>
            Confirm Import
          </button>
        </div>
      </main>

      <AppNavigation />
    </div>
  );
}
