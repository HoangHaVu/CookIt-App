export default function RecipeImport() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <header className="bg-header-green text-white p-4 sticky top-0 z-10 shadow-lg">
          <div className="flex items-center justify-between max-w-xl mx-auto w-full">
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-white/10">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-lg font-bold tracking-tight">
              Magic Import Preview
            </h1>
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-white/10">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </header>
        <main className="flex-1 max-w-xl mx-auto w-full pb-24">
          <div className="p-4">
            <div className="relative group overflow-hidden rounded-xl aspect-[16/10] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0"></div>
              <img
                alt="Roasted Sage Chicken"
                className="w-full h-full object-cover"
                data-alt="A beautifully roasted whole chicken with fresh sage leaves"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDURwyZuUse9wpcWvEDj5YSWnMlColIlVU_w7-3q35iJWPdwnC2IDwi7Q4eoAUB9QJJDNmhCvRyKHyBlmzUNxyLYjtTFFiuEk-Z9HQFCYd065qlI0ac4g5ECbbX1ZqUTnQGHreOmjIzmz7GkHTBrmDjBcRFq_GFK2blc2V8KxKWFRXP8WqXAVf2ciBb9dXNPMaF2z8K00Nq7gr7YmUikeHeSphJz2CLY_KM-Hu5CJzQZeQgyAgxf14K_O_wzNu6gN9GON8UPyej5hc"
              />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2 uppercase tracking-widest">
                  Auto-Detected
                </span>
                <h2 className="text-3xl font-bold text-white leading-tight">
                  Roasted Sage &amp; Lemon Chicken
                </h2>
              </div>
            </div>
          </div>

          <section className="px-4 py-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-header-green">
                auto_awesome
              </span>
              <h3 className="text-lg font-bold">Smart Analysis</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-sage text-header-green font-semibold text-sm border border-header-green/10">
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                Gluten-Free
              </div>
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-sage text-header-green font-semibold text-sm border border-header-green/10">
                <span className="material-symbols-outlined text-sm">
                  fitness_center
                </span>
                High Protein
              </div>
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-sage text-header-green font-semibold text-sm border border-header-green/10">
                <span className="material-symbols-outlined text-sm">
                  restaurant_menu
                </span>
                Dinner
              </div>
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-sage text-header-green font-semibold text-sm border border-header-green/10">
                <span className="material-symbols-outlined text-sm">eco</span>
                Sage-Infused
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-center border-r border-slate-100 dark:border-slate-700">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                  Time
                </p>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  75 min
                </p>
              </div>
              <div className="text-center border-r border-slate-100 dark:border-slate-700">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                  Serves
                </p>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  4-6
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                  Cals
                </p>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  420
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Extracted Ingredients</h3>
              <button className="text-primary font-bold text-sm">
                Edit All
              </button>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="text-sm">Whole Organic Chicken (1.5kg)</span>
                <span className="material-symbols-outlined text-slate-400">
                  edit
                </span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="text-sm">Fresh Sage Leaves (1 bunch)</span>
                <span className="material-symbols-outlined text-slate-400">
                  edit
                </span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="text-sm">Extra Virgin Olive Oil</span>
                <span className="material-symbols-outlined text-slate-400">
                  edit
                </span>
              </li>
            </ul>
          </section>

          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 py-4 z-20 pointer-events-none">
            <div className="flex gap-3 pointer-events-auto">
              <button className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 h-14 rounded-xl font-bold shadow-xl flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">close</span>
                Discard
              </button>
              <button className="flex-[2] bg-primary text-white h-14 rounded-xl font-bold shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined">check_circle</span>
                Confirm Import
              </button>
            </div>
          </div>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 pb-6 pt-2 z-30">
          <div className="flex justify-around max-w-xl mx-auto">
            <a
              className="flex flex-col items-center gap-1 text-slate-400"
              href="#"
            >
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium">Home</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-slate-400"
              href="#"
            >
              <span className="material-symbols-outlined">menu_book</span>
              <span className="text-[10px] font-medium">Cookbook</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-primary"
              href="#"
            >
              <span
                className="material-symbols-outlined font-bold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                magic_button
              </span>
              <span className="text-[10px] font-bold">Import</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-slate-400"
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
