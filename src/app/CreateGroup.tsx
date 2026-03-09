import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function CreateGroup() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <header className="bg-brand-green text-white pb-16 px-6 pt-12 rounded-b-[3rem] shadow-2xl relative z-10">
        <PageHeader title="Create Group" transparent={true} />
        <div className="mt-8 text-center px-4">
          <h2 className="text-3xl font-black leading-tight mb-2 tracking-tighter">
            Start Your <span className="text-primary italic">Circle</span>
          </h2>
          <p className="text-white/70 font-bold uppercase tracking-widest text-[9px]">
            Connect with fellow foodies and share the joy.
          </p>
        </div>
      </header>

      <main className="flex-1 px-6 py-10 space-y-10 pb-48 -mt-8 relative z-20">
        {/* Photo Upload Card */}
        <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center">
          <div className="relative group cursor-pointer">
            <div className="size-36 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center overflow-hidden relative shadow-inner border-4 border-white dark:border-slate-800">
              <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-slate-600 font-black">
                add_a_photo
              </span>
              <div
                className="absolute inset-0 bg-brand-green/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-white text-3xl font-black">photo_camera</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-white size-10 flex items-center justify-center rounded-2xl shadow-lg border-4 border-white dark:border-slate-900 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-xl font-black">edit</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-widest">Circle Identity</h2>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">
              Add a photo to represent your circle
            </p>
          </div>
        </section>

        {/* Info Card */}
        <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800 space-y-8">
          <label className="block group">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors ml-1 block mb-3">
              Group Name
            </span>
            <input
              className="w-full rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:bg-white dark:focus:bg-slate-800 focus:ring-0 h-14 px-6 transition-all font-bold text-slate-900 dark:text-slate-100 shadow-inner"
              placeholder="e.g. Sourdough Secret Society"
              type="text"
            />
          </label>

          <label className="block group">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors ml-1 block mb-3">
              Description
            </span>
            <textarea
              className="w-full rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:bg-white dark:focus:bg-slate-800 focus:ring-0 min-h-[140px] p-6 transition-all font-bold text-slate-900 dark:text-slate-100 shadow-inner resize-none"
              placeholder="What is your group cooking up?"
              rows={4}
            ></textarea>
          </label>
        </section>

        {/* Privacy Card */}
        <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 ml-1">Privacy Level</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-brand-green/10 text-brand-green size-12 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl font-black">public</span>
              </div>
              <div>
                <p className="font-black text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">Public Group</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                  Anyone can find and join
                </p>
              </div>
            </div>
            <div className="relative inline-flex items-center cursor-pointer group">
              <input
                defaultChecked={true}
                className="sr-only peer"
                type="checkbox"
              />
              <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary shadow-inner"></div>
            </div>
          </div>
        </section>

        {/* Action Button */}
        <div className="mt-8 mb-4">
          <button className="w-full bg-primary hover:bg-orange-600 text-white font-black h-20 rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 transition-all text-xl uppercase tracking-tighter shadow-lg">
            Create Circle
          </button>
        </div>
      </main>

      <AppNavigation activeTab="home" />
    </div>
  );
}
