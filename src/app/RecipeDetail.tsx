export default function RecipeDetail() {
  return (
    <>
      <div className="relative mx-auto max-w-md min-h-screen bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b to-transparent from-brand-green/60">
          <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex gap-2">
            <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>

        <div className="relative h-[400px] w-full">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            data-alt="Close up of gourmet garlic butter pasta with herbs"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAiOKD6g9WxXgiYp-aj_ghuB8Yy8PxZERcA1cUjphA8YHUp8bxbm9QikqPL13_Umiii0CM7DOyDnexryX60YvCxn-ShzNSRCjgxogR6TsHtZS9j8tSQfKVijTEqvCEZidAzL316mV8Vb1IKKXecYyLad9vkT6UOiBdfQyQJKyESz1tbDVPsP_N8n-bV2JGvWDNHWzITmYNzSAuwz4eg9azeb83WkhKvRQtcrBF6rEJaa4URVznOi0FeZ_-Y8XdmGg6Bnn3tcSP8ojp')",
            }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
        </div>

        <div className="relative -mt-10 px-4 pb-24 bg-background-light dark:bg-background-dark rounded-t-xl">
          <div className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="px-3 py-1 rounded-full bg-accent-light text-brand-green text-xs font-bold uppercase tracking-wider">
                Italian Cuisine
              </span>
              <div className="flex items-center gap-1 text-brand-green">
                <span className="material-symbols-outlined !text-lg fill-1">
                  star
                </span>
                <span className="font-bold">4.8</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                  (128 reviews)
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-black leading-tight tracking-tight mb-4">
              Homemade Garlic Butter Pasta
            </h1>

            <div className="flex items-center justify-between border-y border-slate-200 dark:border-slate-800 py-4 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="size-12 rounded-full bg-cover bg-center ring-2 ring-brand-green/20"
                  data-alt="Professional chef Elena Gilbert portrait"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArLYUAvwQCxlT2m7Em9oLpO9csC_VQpNgQznLmXjNmdjFt5u3gKs09httUOT-tPkHIbBTrBoDlMAF175jIOFomoM4Ig8By0szv7fYomv63IczyU_Z6VRuMWo-GgiOpoZqcTrqDQFLdQ_LknleFElKS61Ze9IiIN1xyPAa1_K0GNG2vmFxzu8QV2Zb30Z0t9o2cgW3fKf9LCmimbe6yexBLLc3NQGoJeb-s-PhmctS_F_UUgQWRwh56ApoYiHveh9GoTJN7ouPdDhEk')",
                  }}
                ></div>
                <div>
                  <p className="font-bold leading-none mb-1">Elena Gilbert</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">
                    Chef &amp; Food Blogger
                  </p>
                </div>
              </div>
              <button className="bg-accent-light hover:bg-accent-light/80 text-brand-green px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                Follow
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined mb-1 text-brand-green">
                  favorite
                </span>
                <span className="text-xs font-bold">1.2k</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined mb-1 text-brand-green">
                  schedule
                </span>
                <span className="text-xs font-bold">20 min</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined mb-1 text-brand-green">
                  restaurant
                </span>
                <span className="text-xs font-bold">2 Servings</span>
              </button>
            </div>

            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Ingredients</h3>
                <span className="text-sm font-semibold text-brand-green">
                  8 items
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="size-2 rounded-full bg-brand-green"></span>
                  <span className="flex-1 text-sm font-medium">
                    Spaghetti or Linguine
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    250g
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="size-2 rounded-full bg-brand-green"></span>
                  <span className="flex-1 text-sm font-medium">
                    Unsalted Butter
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    4 tbsp
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="size-2 rounded-full bg-brand-green"></span>
                  <span className="flex-1 text-sm font-medium">
                    Fresh Garlic Cloves, minced
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    4-5
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="size-2 rounded-full bg-brand-green"></span>
                  <span className="flex-1 text-sm font-medium">
                    Parmesan Cheese
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    1/2 cup
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4">Instructions</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center size-8 rounded-full text-white font-bold text-sm bg-brand-green">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      Bring a large pot of salted water to a boil. Add the pasta
                      and cook according to package directions until al dente.
                    </p>
                    <div className="mt-3">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-brand-green text-xs font-bold">
                        <span className="material-symbols-outlined !text-sm">
                          timer
                        </span>
                        START TIMER (10:00)
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center size-8 rounded-full bg-primary/20 font-bold text-sm bg-brand-green/20 text-brand-green">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      While the pasta cooks, melt the butter in a large skillet
                      over medium heat. Add the minced garlic and sauté for 1-2
                      minutes until fragrant but not browned.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center size-8 rounded-full bg-primary/20 font-bold text-sm bg-brand-green/20 text-brand-green">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      Reserve 1/2 cup of pasta water, then drain the pasta. Add
                      the pasta and reserved water to the garlic butter. Toss
                      with parmesan and fresh parsley.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-bold mb-4">Community Reviews</h3>
              <div className="flex flex-wrap gap-x-8 gap-y-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col gap-2">
                  <p className="text-4xl font-black leading-tight tracking-tighter">
                    4.8
                  </p>
                  <div className="flex gap-0.5 text-brand-green">
                    <span className="material-symbols-outlined !text-lg fill-1">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-lg fill-1">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-lg fill-1">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-lg fill-1">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-lg">
                      star
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    128 reviews
                  </p>
                </div>
                <div className="grid min-w-[150px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2">
                  <p className="text-xs font-bold">5</p>
                  <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="rounded-full bg-brand-green"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold text-right">
                    70%
                  </p>
                  <p className="text-xs font-bold">4</p>
                  <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="rounded-full bg-brand-green"
                      style={{ width: '20%' }}
                    ></div>
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold text-right">
                    20%
                  </p>
                  <p className="text-xs font-bold">3</p>
                  <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="rounded-full bg-brand-green"
                      style={{ width: '10%' }}
                    ></div>
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold text-right">
                    10%
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800">
          <button className="w-full bg-primary text-white py-4 rounded-xl font-black tracking-wide text-center shadow-lg shadow-primary/20 active:scale-95 transition-transform uppercase bg-brand-green shadow-brand-green/20">
            Add to My Meal Plan
          </button>
        </div>
      </div>
    </>
  );
}
