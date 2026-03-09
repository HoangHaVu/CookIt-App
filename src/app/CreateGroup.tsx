export default function CreateGroup() {
  return (
    <>
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        <div className="flex items-center px-6 py-12 bg-brand-green text-white curved-header sticky top-0 z-10">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-white">
              arrow_back
            </span>
          </button>
          <h1 className="ml-4 text-xl font-bold tracking-tight">
            Create Group
          </h1>
        </div>
        <div className="flex-1 px-4 py-6 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col items-center rounded-3xl shadow-md border-slate-100">
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-accent-light flex items-center justify-center overflow-hidden relative shadow-lg shadow-brand-green/10">
                <span className="material-symbols-outlined text-4xl text-brand-green">
                  add_a_photo
                </span>
                <div
                  className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                  data-alt="A placeholder for a group cooking profile photo"
                ></div>
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-sm">edit</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">Group Photo</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Add a photo to represent your circle
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col gap-5 rounded-3xl shadow-md border-slate-100">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Group Name
              </label>
              <input
                className="w-full rounded-2xl border-slate-100 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-primary text-slate-900 dark:text-slate-100 placeholder:text-slate-400 py-3 px-4"
                placeholder="e.g. Sourdough Secret Society"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Description
              </label>
              <textarea
                className="w-full rounded-2xl border-slate-100 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-primary text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none py-3 px-4"
                placeholder="What is your group cooking up?"
                rows={4}
              ></textarea>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-sm border border-primary/10 rounded-3xl shadow-md border-slate-100">
            <h3 className="font-bold mb-4">Privacy</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-accent-light p-2 rounded-xl">
                  <span className="material-symbols-outlined text-brand-green">
                    public
                  </span>
                </div>
                <div>
                  <p className="font-medium">Public Group</p>
                  <p className="text-xs text-slate-500">
                    Anyone can find and join
                  </p>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input
                  checked={true}
                  className="sr-only peer"
                  type="checkbox"
                  value=""
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </div>
            </div>
          </div>

          <div className="px-1">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
              Popular Categories
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full bg-accent-light text-brand-green text-sm font-bold shadow-sm">
                #Baking
              </span>
              <span className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 text-sm font-medium shadow-sm border border-slate-100 dark:border-slate-700">
                #Vegan
              </span>
              <span className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 text-sm font-medium shadow-sm border border-slate-100 dark:border-slate-700">
                #QuickMeals
              </span>
              <span className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 text-sm font-medium shadow-sm border border-slate-100 dark:border-slate-700">
                #Italian
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-background-light dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
            Create Circle
          </button>
        </div>
      </div>
    </>
  );
}
