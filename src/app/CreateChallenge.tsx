import { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function CreateChallenge() {
  const [challengeName, setChallengeName] = useState('');
  const [rules, setRules] = useState('');
  const [prize, setPrize] = useState('');
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState('');

  const isValid = challengeName.trim().length > 0;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-2xl mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <header className="bg-brand-green text-white pb-20 px-6 pt-12 rounded-b-[3rem] shadow-2xl relative z-10">
        <PageHeader title="New Challenge" transparent={true} />
        <div className="mt-8 text-center px-4">
          <h2 className="text-4xl font-black leading-tight mb-4 tracking-tighter">
            Build a <span className="text-primary italic">Movement</span>
          </h2>
          <p className="text-white/70 font-bold uppercase tracking-widest text-[10px]">
            Set the stage for your community to grow and compete.
          </p>
        </div>
      </header>

      <main className="flex-1 px-6 py-12 space-y-12 pb-40 -mt-8 relative z-20">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          {/* Section: Essentials */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-2 px-1">
              <div className="bg-brand-green/10 p-2 rounded-xl">
                <span className="material-symbols-outlined text-brand-green font-black">edit_note</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-widest text-xs">Challenge Essentials</h3>
            </div>

            <div className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
              <label className="block group">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors ml-1 block mb-3">
                  Challenge Name <span className="text-primary">*</span>
                </span>
                <input
                  className="w-full rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:bg-white dark:focus:bg-slate-800 focus:ring-0 h-14 px-6 transition-all font-bold text-slate-900 dark:text-slate-100 shadow-inner"
                  placeholder="e.g. Pasta Master 2024"
                  type="text"
                  value={challengeName}
                  onChange={(e) => setChallengeName(e.target.value)}
                />
              </label>

              <label className="block group">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors ml-1 block mb-3">
                  Rules & Description
                </span>
                <textarea
                  className="w-full rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:bg-white dark:focus:bg-slate-800 focus:ring-0 min-h-[160px] p-6 transition-all font-bold text-slate-900 dark:text-slate-100 shadow-inner resize-none"
                  placeholder="What are the requirements for participants?"
                  value={rules}
                  onChange={(e) => setRules(e.target.value)}
                ></textarea>
              </label>
            </div>
          </section>

          {/* Section: Rewards */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-2 px-1">
              <div className="bg-brand-green/10 p-2 rounded-xl">
                <span className="material-symbols-outlined text-brand-green font-black">military_tech</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-widest text-xs">Reward & Motivation</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-6 group hover:border-primary transition-all">
                <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-inner shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl font-black">workspace_premium</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-black text-slate-900 dark:text-slate-100 uppercase tracking-wider block">
                    Completion Badge
                  </span>
                  <button
                    className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-2 hover:bg-primary/10 px-3 py-1 rounded-full transition-all border border-primary/20"
                    type="button"
                  >
                    Change Icon
                  </button>
                </div>
              </div>

              <label className="block group bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors ml-1 block mb-3">
                  Prize (Optional)
                </span>
                <input
                  className="w-full rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:bg-white dark:focus:bg-slate-800 focus:ring-0 h-14 px-6 transition-all font-bold text-slate-900 dark:text-slate-100 shadow-inner"
                  placeholder="e.g. $100 Gift Card"
                  type="text"
                  value={prize}
                  onChange={(e) => setPrize(e.target.value)}
                />
              </label>
            </div>
          </section>

          {/* Section: Timeline */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-2 px-1">
              <div className="bg-brand-green/10 p-2 rounded-xl">
                <span className="material-symbols-outlined text-brand-green font-black">calendar_today</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-widest text-xs">Timeline</h3>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
              <label className="block group">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors ml-1 block mb-3">
                  Start Date
                </span>
                <input
                  className="w-full rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:bg-white dark:focus:bg-slate-800 focus:ring-0 h-14 px-6 transition-all font-bold text-slate-900 dark:text-slate-100 shadow-inner"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>

              <label className="block group">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors ml-1 block mb-3">
                  Duration (Days)
                </span>
                <input
                  className="w-full rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:bg-white dark:focus:bg-slate-800 focus:ring-0 h-14 px-6 transition-all font-bold text-slate-900 dark:text-slate-100 shadow-inner"
                  placeholder="30"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </label>
            </div>
          </section>

          <div className="pt-10 flex flex-col gap-4">
            <button
              disabled={!isValid}
              className="w-full bg-primary text-white font-black h-20 rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 disabled:opacity-40 transition-all uppercase tracking-widest text-lg"
              type="submit"
            >
              Launch Challenge
            </button>
            {!isValid && (
              <p className="text-center text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Enter a challenge name to continue
              </p>
            )}
            <button
              className="w-full py-4 text-slate-400 font-black uppercase tracking-[0.2em] text-xs hover:text-slate-600 transition-colors"
              type="button"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </main>

      <AppNavigation activeTab="home" />
    </div>
  );
}
