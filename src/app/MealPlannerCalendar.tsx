import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function MealPlannerCalendar() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <PageHeader title="Meal Planner" rightActionIcon="account_circle" />

      <main className="flex-1 pb-40 px-6 py-8 space-y-12">
        {/* Calendar Section */}
        <section className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border-2 border-slate-50 dark:border-slate-800 p-8 space-y-8">
          <div className="flex items-center justify-between">
            <button className="size-12 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-brand-green transition-all active:scale-90">
              <span className="material-symbols-outlined font-black">chevron_left</span>
            </button>
            <div className="text-center">
              <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 uppercase tracking-tighter italic">October <span className="text-brand-green">2023</span></h3>
            </div>
            <button className="size-12 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-brand-green transition-all active:scale-90">
              <span className="material-symbols-outlined font-black">chevron_right</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-7 text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <span key={day} className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{day}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[24, 25, 26, 27, 28, 29, 30].map(d => (
                <div key={d} className="h-12 flex items-center justify-center text-[10px] font-black text-slate-200 uppercase">{d}</div>
              ))}
              {[1, 2, 3].map(d => (
                <button key={d} className="h-12 flex items-center justify-center text-xs font-black text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all">{d}</button>
              ))}
              <button className="h-12 flex items-center justify-center bg-brand-green/10 text-brand-green font-black rounded-2xl text-xs border-2 border-brand-green/20">4</button>
              <button className="h-12 flex items-center justify-center bg-primary text-white font-black rounded-2xl text-xs shadow-lg shadow-primary/30 scale-110 relative z-10 border-2 border-white">5</button>
              <button className="h-12 flex items-center justify-center bg-brand-green/10 text-brand-green font-black rounded-2xl text-xs border-2 border-brand-green/20">6</button>
              {[7, 8, 9, 10, 11, 12, 13, 14].map(d => (
                <button key={d} className="h-12 flex items-center justify-center text-xs font-black text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all">{d}</button>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Card */}
        <section className="bg-brand-green text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 size-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center justify-between gap-6 relative z-10">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">Month Summary</h4>
              <p className="text-xl font-black uppercase tracking-tighter leading-tight italic">
                24 Meals <br /><span className="text-primary italic">Planned</span>
              </p>
            </div>
            <button className="bg-white text-brand-green size-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl hover:bg-slate-50 active:scale-90 transition-all">
              <span className="material-symbols-outlined text-3xl font-black">add</span>
            </button>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 px-1">
            <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
              <span className="material-symbols-outlined text-xl font-black">schedule</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Today's schedule</h3>
          </div>

          <div className="space-y-6">
            {[
              { type: 'Breakfast', menu: 'Avocado Toast', time: '08:00 AM', icon: 'egg' },
              { type: 'Lunch', menu: 'Quinoa Salad', time: '12:30 PM', icon: 'eco' },
              { type: 'Dinner', menu: 'Grilled Salmon', time: '07:00 PM', icon: 'set_meal' }
            ].map((meal, i) => (
              <div key={meal.type} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`size-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6 ${i === 2 ? 'bg-brand-green text-white shadow-brand-green/20' : 'bg-white dark:bg-slate-900 text-slate-400 border-2 border-slate-50 dark:border-slate-800'}`}>
                    <span className="material-symbols-outlined font-black text-2xl">{meal.icon}</span>
                  </div>
                  {i < 2 && <div className="w-1 bg-slate-100 dark:bg-slate-800 flex-1 my-2 rounded-full"></div>}
                </div>
                <div className="py-2 flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-primary transition-colors">{meal.type}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">{meal.time}</p>
                  </div>
                  <p className="text-lg font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">{meal.menu}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 px-1">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-xl font-black">auto_awesome</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Upcoming Highlights</h3>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar -mx-6 px-6">
            {[
              { date: 'OCT 12', title: 'Pasta Night' },
              { date: 'OCT 15', title: 'Family Brunch' },
              { date: 'OCT 21', title: 'Steak Dinner' }
            ].map(h => (
              <div key={h.title} className="min-w-[160px] bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 shadow-xl hover:border-brand-green/20 transition-all group shrink-0">
                <p className="text-[9px] font-black text-brand-green uppercase tracking-widest mb-4">{h.date}</p>
                <p className="text-sm font-black uppercase tracking-tight text-slate-800 dark:text-slate-100 mb-6">{h.title}</p>
                <div className="h-1.5 w-full bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <AppNavigation activeTab="planner" />
    </div>
  );
}
