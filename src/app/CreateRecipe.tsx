export default function CreateRecipe() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col max-w-2xl mx-auto shadow-sm">
        <header className="flex items-center bg-brand-green text-white p-6 sticky top-0 z-10 curved-header shadow-lg shadow-brand-green/10">
          <div className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 px-4 text-center">
            Create Recipe
          </h2>
          <div className="flex w-12 items-center justify-end">
            <p className="text-accent-light text-base font-bold leading-normal tracking-tight cursor-pointer">
              Draft
            </p>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <section className="p-4">
            <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight pb-3 text-brand-green">
              Food Photos
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="px-3 py-1.5 rounded-full bg-accent-light text-brand-green text-sm font-bold flex items-center gap-1 cursor-pointer hover:bg-accent-light/80 transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  add_a_photo
                </span>
                <span className="text-xs font-semibold mt-1">Add Photo</span>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                data-alt="A vibrant salad bowl with fresh vegetables"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdaZJ2LFl_xHoFzZ4fRxKHsiYjcFu8b9JtMqm-qPYHmWv4XT4-Me7QGuKQOpuutp_b7WJVZQ7aFXFr2tHvtfR06u2kZHVH7eC1de8D7OLuBHAIqKVh2CZEJz513qvlDE6Kd0Rzgjav3P-VHUKf7OKDNxZm0UxvCigp9zj54uglKF72KspSGWP9vmsqq_MWh2NZYutU4iPbCw3MWAEBo0VV-PDPnE2zYKWeEcGvvgzBkcxmzMq0mZKsoCcGhyIjCI_JyUBhr0rkIlK0')",
                }}
              ></div>
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                data-alt="Delicious stack of golden pancakes with syrup"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDm1vTylp1fz8ym5FuGrEbIi9rlHomGKTY82kuK2NzRciqyf5_TJ2CVPpahIsf88eXar2acXPAQ4P2PkGCpy96aMFXcjSqjFsjDhJI3vsPh4ccFa9uhp0bjGK7iwstQZxUl_cqDhkzg7mKNaObO_T8cWYb7b4hM3pC5wBMyu9mkrHn6xXwV2eFx7J3Vy-C38dB_kDuO5AgrU21NP70zFoSqGyhRZWtVI2lyPJ7HjdfKcpFtDJewv2FGL6yGHPvNGR-lWseldaeRuqtQ')",
                }}
              ></div>
            </div>
          </section>

          <section className="px-4 py-2 space-y-4">
            <div className="flex flex-col">
              <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
                Recipe Name
              </label>
              <input
                className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400"
                placeholder="e.g. Grandma's Famous Lasagna"
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
                  Portion Size
                </label>
                <div className="relative">
                  <select className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400">
                    <option>1-2 Persons</option>
                    <option selected={true}>3-4 Persons</option>
                    <option>5-6 Persons</option>
                    <option>Family Size (8+)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
                  Cooking Time
                </label>
                <div className="relative">
                  <select className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400">
                    <option>Under 15 mins</option>
                    <option>15-30 mins</option>
                    <option selected={true}>30-60 mins</option>
                    <option>Over 1 hour</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    schedule
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-4 space-y-6">
            <div className="flex flex-col">
              <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 flex items-center justify-between text-brand-green">
                Ingredients
                <span className="text-brand-green text-xs flex items-center gap-1 cursor-pointer font-bold">
                  <span className="material-symbols-outlined text-sm">add</span>{' '}
                  Add list
                </span>
              </label>
              <textarea
                className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400"
                placeholder="2 cups flour
1 tsp salt
3 large eggs..."
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 flex items-center justify-between text-brand-green">
                Preparation Steps
                <span className="text-brand-green text-xs flex items-center gap-1 cursor-pointer font-bold">
                  <span className="material-symbols-outlined text-sm">
                    add_task
                  </span>{' '}
                  Add step
                </span>
              </label>
              <textarea
                className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400"
                placeholder="1. Pre-heat oven to 350°F
2. Mix dry ingredients in a large bowl..."
              ></textarea>
            </div>
          </section>

          <section className="px-4 py-2">
            <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-3 block text-brand-green">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-brand-green text-white text-sm font-medium flex items-center gap-1">
                Dinner{' '}
                <span className="material-symbols-outlined text-sm">close</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-brand-green text-white text-sm font-medium flex items-center gap-1">
                Italian{' '}
                <span className="material-symbols-outlined text-sm">close</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent-light text-brand-green text-sm font-bold flex items-center gap-1 cursor-pointer hover:bg-accent-light/80 transition-colors">
                + Add Tag
              </span>
            </div>
          </section>

          <section className="p-4 my-2 mx-4 rounded-xl bg-brand-light dark:bg-slate-800/50 border border-brand-green/10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-brand-green font-bold text-sm">
                  Privacy Settings
                </h4>
                <p className="text-xs text-slate-500">
                  Who can see this recipe?
                </p>
              </div>
            </div>
            <div className="mt-4 flex bg-background-light dark:bg-background-dark/50 p-1 rounded-lg border border-primary/10">
              <button className="flex-1 py-2 text-xs font-semibold rounded-md flex items-center justify-center gap-1 text-slate-500">
                <span className="material-symbols-outlined text-sm">lock</span>{' '}
                Private
              </button>
              <button className="flex-1 py-2 text-xs font-semibold rounded-md flex items-center justify-center gap-1 text-slate-500">
                <span className="material-symbols-outlined text-sm">group</span>{' '}
                Friends
              </button>
              <button className="px-3 py-1.5 rounded-full bg-brand-green text-white text-sm font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  public
                </span>{' '}
                Public
              </button>
            </div>
          </section>

          <div className="h-24"></div>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-brand-green/10 max-w-2xl mx-auto">
          <button className="w-full font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white">
            <span className="material-symbols-outlined">send</span>
            Publish Recipe
          </button>
        </footer>
      </div>
    </>
  );
}
