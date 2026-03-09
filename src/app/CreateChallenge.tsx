export default function CreateChallenge() {
  return (
    <>
      <header className="bg-brand-green text-white curved-header pb-12 px-6 relative mb-8 pt-12">
        <div className="flex items-center justify-between max-w-2xl mx-auto w-full">
          <button className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined font-variation-fill">
              arrow_back
            </span>
          </button>
          <h1 className="text-xl font-bold leading-tight flex-1 text-center mr-10">
            New Challenge
          </h1>
        </div>
      </header>
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 pb-32">
        <div className="mb-8">
          <h2 className="text-3xl font-bold leading-tight mb-2">
            Build a Movement
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Set the stage for your community to grow and compete.
          </p>
        </div>
        <form className="space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-brand-green">
                edit_note
              </span>
              <h3 className="text-xl font-bold">Challenge Essentials</h3>
            </div>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium mb-1.5 block">
                  Challenge Name
                </span>
                <input
                  className="w-full rounded-xl border-slate-200 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0 h-12 px-4 transition-all shadow-sm"
                  placeholder="e.g. Morning Zen 30-Day Streak"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium mb-1.5 block">
                  Rules &amp; Description
                </span>
                <textarea
                  className="w-full rounded-xl border-slate-200 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0 min-h-[120px] p-4 transition-all shadow-sm"
                  placeholder="What are the requirements for participants?"
                ></textarea>
              </label>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-brand-green">
                military_tech
              </span>
              <h3 className="text-xl font-bold">Reward &amp; Motivation</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-3xl bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                <div className="size-16 rounded-2xl bg-accent-light flex items-center justify-center text-brand-green shadow-sm">
                  <span className="material-symbols-outlined text-3xl">
                    workspace_premium
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-sm font-bold block">
                    Completion Badge
                  </span>
                  <button
                    className="text-xs text-primary font-bold uppercase tracking-wider mt-1 hover:underline"
                    type="button"
                  >
                    Change Icon
                  </button>
                </div>
              </div>
              <label className="block">
                <span className="text-sm font-medium mb-1.5 block">
                  Prize Description (Optional)
                </span>
                <input
                  className="w-full rounded-xl border-slate-200 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0 h-12 px-4 transition-all shadow-sm"
                  placeholder="e.g. Free coaching session"
                  type="text"
                />
              </label>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-brand-green">
                calendar_today
              </span>
              <h3 className="text-xl font-bold">Timeline</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium mb-1.5 block">
                  Start Date
                </span>
                <div className="relative">
                  <input
                    className="w-full rounded-xl border-slate-200 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0 h-12 px-4 transition-all shadow-sm"
                    type="date"
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-sm font-medium mb-1.5 block">
                  Duration (Days)
                </span>
                <div className="relative">
                  <input
                    className="w-full rounded-xl border-slate-200 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0 h-12 px-4 transition-all shadow-sm"
                    placeholder="30"
                    type="number"
                  />
                </div>
              </label>
            </div>
          </section>

          <div className="pt-6 pb-12">
            <button
              className="w-full bg-primary text-white font-bold h-14 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              type="submit"
            >
              Launch Challenge
            </button>
            <button
              className="w-full mt-4 text-slate-500 font-medium py-3 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              type="button"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-brand-green text-white/60 px-6 py-4 flex items-center justify-between z-50 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(26,60,52,0.3)]">
        <a className="flex flex-col items-center gap-1" href="#">
          <div className="px-5 py-1 flex items-center justify-center">
            <span className="material-symbols-outlined">home</span>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
            Home
          </span>
        </a>
        <a
          className="flex flex-col items-center gap-1 text-brand-green"
          href="#"
        >
          <div className="nav-pill px-5 py-1 flex items-center justify-center">
            <span className="material-symbols-outlined fill-1">trophy</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Challenges
          </span>
        </a>
        <a className="flex flex-col items-center gap-1" href="#">
          <div className="px-5 py-1 flex items-center justify-center">
            <span className="material-symbols-outlined">group</span>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
            Social
          </span>
        </a>
        <a className="flex flex-col items-center gap-1" href="#">
          <div className="px-5 py-1 flex items-center justify-center">
            <span className="material-symbols-outlined">person</span>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
            Profile
          </span>
        </a>
      </nav>
    </>
  );
}
