export default function WeeklyMealPlanner() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="sticky top-0 z-10 flex items-center bg-header-green p-4 text-white shadow-md">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex-1 px-4 text-center">
            <h1 className="text-lg font-bold leading-tight">Weekly Planner</h1>
            <p className="text-xs opacity-80">Oct 23 - Oct 29</p>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">calendar_month</span>
          </button>
        </header>
        <div className="sticky top-[72px] z-10 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
          <div className="flex overflow-x-auto no-scrollbar px-4 gap-4 py-3">
            <a
              className="flex min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl bg-primary text-white p-2"
              href="#"
            >
              <span className="text-xs font-bold uppercase tracking-wider">
                Mon
              </span>
              <span className="text-sm font-black">23</span>
            </a>
            <a
              className="flex min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl bg-accent-sage/30 dark:bg-accent-sage/10 text-slate-700 dark:text-slate-300 p-2"
              href="#"
            >
              <span className="text-xs font-bold uppercase tracking-wider">
                Tue
              </span>
              <span className="text-sm font-black">24</span>
            </a>
            <a
              className="flex min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl bg-accent-sage/30 dark:bg-accent-sage/10 text-slate-700 dark:text-slate-300 p-2"
              href="#"
            >
              <span className="text-xs font-bold uppercase tracking-wider">
                Wed
              </span>
              <span className="text-sm font-black">25</span>
            </a>
            <a
              className="flex min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl bg-accent-sage/30 dark:bg-accent-sage/10 text-slate-700 dark:text-slate-300 p-2"
              href="#"
            >
              <span className="text-xs font-bold uppercase tracking-wider">
                Thu
              </span>
              <span className="text-sm font-black">26</span>
            </a>
            <a
              className="flex min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl bg-accent-sage/30 dark:bg-accent-sage/10 text-slate-700 dark:text-slate-300 p-2"
              href="#"
            >
              <span className="text-xs font-bold uppercase tracking-wider">
                Fri
              </span>
              <span className="text-sm font-black">27</span>
            </a>
            <a
              className="flex min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl bg-accent-sage/30 dark:bg-accent-sage/10 text-slate-700 dark:text-slate-300 p-2"
              href="#"
            >
              <span className="text-xs font-bold uppercase tracking-wider">
                Sat
              </span>
              <span className="text-sm font-black">28</span>
            </a>
          </div>
        </div>
        <main className="flex flex-col gap-6 p-4 pb-24">
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold uppercase tracking-widest text-header-green dark:text-accent-sage flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  wb_twilight
                </span>
                Breakfast
              </h2>
              <span className="text-xs font-medium text-slate-500">
                420 kcal
              </span>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex h-32">
                <div
                  className="w-1/3 bg-center bg-cover"
                  data-alt="Close up of fresh avocado toast with poached egg"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNCh_ljmYwjYUNYHiyaG-scDNYVlPazpGsE-7YEuyhZid4DmTP8N9RkR160XFiIt8_8PR0_pMWJK6rTefYgQq8txKoTkXk0HtiGBnWxFn60NDoIFmWkgAZGE3wVGLlx5zAiMXngiuEolPD2T3qSSUB_z4fgu-wSaBfPIxXNgdlJtRoSyU-EPh6Ub3g4hMsyjVDQUGOClVwk62LyEFN8fUZ5FOlFc7tmtmHyZ9h2rwmCZXtgtbC5DiMo4p1E5j1bIALksWNOGgNgY9o')",
                  }}
                ></div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Avocado Toast &amp; Poached Egg
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      12 mins • Easy • High Protein
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-orange-600">
                      Recipe{' '}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold uppercase tracking-widest text-header-green dark:text-accent-sage flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  wb_sunny
                </span>
                Lunch
              </h2>
              <span className="text-xs font-medium text-slate-500">
                580 kcal
              </span>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex h-32">
                <div
                  className="w-1/3 bg-center bg-cover"
                  data-alt="A colorful Mediterranean buddha bowl with quinoa and chickpeas"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuKApeGnIHQGUq8f1PXfQGH-9t5MAI7RBcpFF1P6RmVj-9xQz2kbEjTeD2SPSRkhgNhnyy2rOVZeqdPaFKbj4Q3QticSRrM0Y-ilCe4duJfKwqh0jQQxuB0mv5OiWKuBLIOCx0geZDR2xAHpEafeaXxT_8UT0MAqc0ripMvcYNyyJAEaCO-CzIdl-e1JC-WkynyFlrI37izxSnPFqlWzagONGzxHqXmxaGlIQFEuj0yJ41QbMkpTLfktY5FrwfUbKUmbfHLPi6r4sd')",
                  }}
                ></div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Mediterranean Buddha Bowl
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      15 mins • Meal Prep • Vegan
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-orange-600">
                      Recipe{' '}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold uppercase tracking-widest text-header-green dark:text-accent-sage flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  dark_mode
                </span>
                Dinner
              </h2>
              <span className="text-xs font-medium text-slate-500">
                650 kcal
              </span>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex h-32">
                <div
                  className="w-1/3 bg-center bg-cover"
                  data-alt="Grilled salmon steak with asparagus and lemon slices"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC715fSRyDaBMqv6db5KUvCGw10HLdmPZ_aQ4CIKRluZBM110cXPSTcNIITjPqImkjiauLsiFoQDBuQ9kzd-mwZUZ2CliGF2QqXi1uE0rnW6BWBCFmbKLg5Lw5-Flq_uRD165UCimqUrBQM2H2L_-cOa3Ja5uUwii_jJT-s8QsX_khtEdYcTAhOBQ5DxJQ96NLHht_b21Jfrvl7ry6bdw1oO-1OoN6vON6yhDOA0jZX07cdILYuUo1hKfzJp8Nh3rDjZzqYo24qNXCF')",
                  }}
                ></div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Lemon Herb Grilled Salmon
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      25 mins • Keto • Omega-3
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-orange-600">
                      Recipe{' '}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-accent-sage p-4 text-header-green dark:text-accent-sage font-bold hover:bg-accent-sage/10">
            <span className="material-symbols-outlined">add_circle</span>
            Add Snack or Drink
          </button>
        </main>
        <nav className="fixed bottom-0 z-20 w-full border-t border-white/10 bg-header-green px-4 pb-6 pt-2 text-white/70">
          <div className="flex justify-around items-center">
            <a
              className="flex flex-col items-center gap-1 transition-colors hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium uppercase tracking-tighter">
                Home
              </span>
            </a>
            <a className="flex flex-col items-center gap-1 text-white" href="#">
              <span className="material-symbols-outlined active-fill">
                calendar_today
              </span>
              <span className="text-[10px] font-medium uppercase tracking-tighter">
                Planner
              </span>
            </a>
            <div className="relative -top-8">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-background-light dark:ring-background-dark">
                <span className="material-symbols-outlined text-3xl">add</span>
              </button>
            </div>
            <a
              className="flex flex-col items-center gap-1 transition-colors hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined">restaurant_menu</span>
              <span className="text-[10px] font-medium uppercase tracking-tighter">
                Recipes
              </span>
            </a>
            <a
              className="flex flex-col items-center gap-1 transition-colors hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-medium uppercase tracking-tighter">
                Profile
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
