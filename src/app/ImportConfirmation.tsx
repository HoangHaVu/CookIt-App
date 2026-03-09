export default function ImportConfirmation() {
  return (
    <>
      <div className="relative mx-auto min-h-screen max-w-md flex flex-col bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
        <header className="bg-header-footer text-white p-4 flex items-center justify-between">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <span className="material-symbols-outlined block">close</span>
          </button>
          <h1 className="text-lg font-bold">Import Status</h1>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <span className="material-symbols-outlined block">share</span>
          </button>
        </header>

        <main className="flex-1 flex flex-col px-6 py-10 items-center overflow-y-auto">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary !text-6xl">
              check_circle
            </span>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Import Successful!
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We've successfully parsed your recipe and saved it to your digital
              collection.
            </p>
          </div>

          <div className="w-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-accent-sage/30 mb-8">
            <div
              className="aspect-video w-full bg-cover bg-center"
              data-alt="Delicious fresh garden salad with balsamic dressing"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgtJf9M8X8tisnRvbMq65jvsmVa4J1oeYCRrosWm6UonbOyiyQb-opFgwAkD9y0hQbYIlT1Ik2rbWj0K7BLFPIAXtYs5IOxkWAwEXsifn-3SzGCrfjwNquUlHoKATQVzdWzIIp_BHa9GklBWNN9MK15_8H3Gj04Y80ihnmNnozT_c_AqjLRoi1qIOfldsZndhnIDGsBX6r_i1gL91CavbhOcLJcol32FwLUbyQCVilSDaeJ-bHi314DDVZm2O_DYQOUWOmMoCDkIob')",
              }}
            ></div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-accent-sage/30 text-header-footer text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  New Import
                </span>
                <span className="text-slate-400 text-xs">• Just now</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Mediterranean Quinoa Bowl
              </h3>
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>25 mins</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    restaurant
                  </span>
                  <span>2 Servings</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-3 mt-auto">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              <span>View in Cookbook</span>
              <span className="material-symbols-outlined text-lg">
                menu_book
              </span>
            </button>
            <button className="w-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              <span>Scan Another</span>
              <span className="material-symbols-outlined text-lg">
                barcode_scanner
              </span>
            </button>
          </div>
        </main>

        <nav className="bg-header-footer border-t border-white/10 px-4 pb-6 pt-3">
          <div className="flex justify-between items-center max-w-sm mx-auto">
            <a
              className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium">Home</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined !fill-1">
                menu_book
              </span>
              <span className="text-[10px] font-medium">Cookbook</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
              href="#"
            >
              <div className="bg-primary p-3 rounded-full -mt-8 border-4 border-background-light dark:border-background-dark shadow-lg">
                <span className="material-symbols-outlined text-white">
                  add
                </span>
              </div>
              <span className="text-[10px] font-medium">Add</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              <span className="text-[10px] font-medium">Planner</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-[10px] font-medium">Settings</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
