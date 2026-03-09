import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function ImportConfirmation() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <PageHeader title="Import Status" />

      <main className="flex-1 flex flex-col px-8 py-12 items-center pb-48">
        <div className="relative mb-10">
          <div className="w-32 h-32 bg-brand-green/10 rounded-[2.5rem] flex items-center justify-center animate-bounce shadow-inner">
            <span className="material-symbols-outlined text-brand-green !text-6xl font-black">
              check_circle
            </span>
          </div>
          <div className="absolute -top-2 -right-2 size-10 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
            <span className="material-symbols-outlined font-black">magic_button</span>
          </div>
        </div>

        <div className="text-center mb-12 px-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight tracking-tighter uppercase">
            Import <br /><span className="text-brand-green italic">Successful!</span>
          </h2>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-relaxed">
            We've successfully parsed your recipe and saved it to your <span className="text-primary">digital collection</span>.
          </p>
        </div>

        <div className="w-full bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-slate-50 dark:border-slate-800 group hover:border-brand-green/20 transition-all cursor-pointer">
          <div
            className="aspect-video w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgtJf9M8X8tisnRvbMq65jvsmVa4J1oeYCRrosWm6UonbOyiyQb-opFgwAkD9y0hQbYIlT1Ik2rbWj0K7BLFPIAXtYs5IOxkWAwEXsifn-3SzGCrfjwNquUlHoKATQVzdWzIIp_BHa9GklBWNN9MK15_8H3Gj04Y80ihnmNnozT_c_AqjLRoi1qIOfldsZndhnIDGsBX6r_i1gL91CavbhOcLJcol32FwLUbyQCVilSDaeJ-bHi314DDVZm2O_DYQOUWOmMoCDkIob')",
            }}
          ></div>
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-brand-green text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-brand-green/20">
                New Import
              </span>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">• Just now</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
              Mediterranean <br /><span className="text-brand-green">Quinoa Bowl</span>
            </h3>
            <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm font-black text-brand-green">schedule</span>
                <span>25 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm font-black text-brand-green">restaurant</span>
                <span>2 Servings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4 mt-12 mb-8">
          <button className="w-full h-20 bg-primary hover:bg-orange-600 text-white font-black rounded-[2rem] transition-all shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95 uppercase tracking-tighter text-xl">
            <span>View Cookbook</span>
            <span className="material-symbols-outlined text-3xl font-black">menu_book</span>
          </button>
          <button className="w-full h-20 bg-slate-50 dark:bg-slate-800 text-slate-400 font-black rounded-[2rem] border-4 border-slate-100 dark:border-slate-800 transition-all flex items-center justify-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 uppercase tracking-widest text-xs">
            <span>Scan Another</span>
            <span className="material-symbols-outlined text-2xl font-black">barcode_scanner</span>
          </button>
        </div>
      </main>

      <AppNavigation activeTab="recipes" />
    </div>
  );
}
