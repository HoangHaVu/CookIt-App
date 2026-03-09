export default function MealPlannerCalendar() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex items-center bg-brand-dark p-4 pb-4 justify-between text-white shadow-md">
          <div className="flex size-10 shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-white">menu</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight flex-1 text-center">
            Meal Planner
          </h2>
          <div className="flex size-10 items-center justify-end">
            <button className="flex items-center justify-center rounded-full text-white">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
        <main className="flex-1 pb-24">
          <div className="p-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-brand-light/20 p-4">
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 hover:bg-brand-light/20 rounded-full text-brand-dark">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  October 2023
                </p>
                <button className="p-2 hover:bg-brand-light/20 rounded-full text-brand-dark">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-7 text-center mb-2">
                <p className="text-xs font-bold text-slate-400 uppercase">S</p>
                <p className="text-xs font-bold text-slate-400 uppercase">M</p>
                <p className="text-xs font-bold text-slate-400 uppercase">T</p>
                <p className="text-xs font-bold text-slate-400 uppercase">W</p>
                <p className="text-xs font-bold text-slate-400 uppercase">T</p>
                <p className="text-xs font-bold text-slate-400 uppercase">F</p>
                <p className="text-xs font-bold text-slate-400 uppercase">S</p>
              </div>
              <div className="grid grid-cols-7 gap-1">
                <div className="col-start-1 h-10 flex items-center justify-center text-slate-300">
                  24
                </div>
                <div className="h-10 flex items-center justify-center text-slate-300">
                  25
                </div>
                <div className="h-10 flex items-center justify-center text-slate-300">
                  26
                </div>
                <div className="h-10 flex items-center justify-center text-slate-300">
                  27
                </div>
                <div className="h-10 flex items-center justify-center text-slate-300">
                  28
                </div>
                <div className="h-10 flex items-center justify-center text-slate-300">
                  29
                </div>
                <div className="h-10 flex items-center justify-center text-slate-300">
                  30
                </div>

                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  1
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  2
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  3
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full bg-brand-light text-brand-dark font-bold">
                  4
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full bg-brand-dark text-white font-bold">
                  5
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full bg-brand-light text-brand-dark font-bold">
                  6
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  7
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  8
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  9
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  10
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  11
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  12
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  13
                </button>
                <button className="h-10 w-full flex items-center justify-center rounded-full hover:bg-brand-light/30">
                  14
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 mb-4">
            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 flex items-center justify-between">
              <div>
                <h4 className="text-primary font-bold text-sm uppercase tracking-wider">
                  Month Summary
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  24 Meals Planned • 3 Groceries Lists
                </p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">add</span>{' '}
                Add Recipe
              </button>
            </div>
          </div>

          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold px-4 mb-2">
            Today's Schedule
          </h3>
          <div className="px-4 space-y-1">
            <div className="grid grid-cols-[40px_1fr] gap-x-3">
              <div className="flex flex-col items-center">
                <div className="size-10 rounded-full bg-brand-light/30 flex items-center justify-center text-brand-dark">
                  <span className="material-symbols-outlined">egg</span>
                </div>
                <div className="w-0.5 bg-brand-light h-12"></div>
              </div>
              <div className="py-2">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Breakfast: Avocado Toast
                </p>
                <p className="text-slate-500 text-sm">08:00 AM</p>
              </div>
            </div>
            <div className="grid grid-cols-[40px_1fr] gap-x-3">
              <div className="flex flex-col items-center">
                <div className="size-10 rounded-full bg-brand-light/30 flex items-center justify-center text-brand-dark">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <div className="w-0.5 bg-brand-light h-12"></div>
              </div>
              <div className="py-2">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Lunch: Quinoa Salad
                </p>
                <p className="text-slate-500 text-sm">12:30 PM</p>
              </div>
            </div>
            <div className="grid grid-cols-[40px_1fr] gap-x-3">
              <div className="flex flex-col items-center">
                <div className="size-10 rounded-full bg-brand-light/30 flex items-center justify-center text-brand-dark">
                  <span className="material-symbols-outlined">set_meal</span>
                </div>
                <div className="h-6"></div>
              </div>
              <div className="py-2">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Dinner: Grilled Salmon
                </p>
                <p className="text-slate-500 text-sm">07:00 PM</p>
              </div>
            </div>
          </div>

          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold px-4 mt-6 mb-2">
            Upcoming Highlights
          </h3>
          <div className="px-4 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <div className="min-w-[140px] bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
              <p className="text-xs text-brand-dark font-bold">OCT 12</p>
              <p className="text-sm font-medium">Pasta Night</p>
              <div className="mt-2 h-1 w-full bg-brand-light rounded-full"></div>
            </div>
            <div className="min-w-[140px] bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
              <p className="text-xs text-brand-dark font-bold">OCT 15</p>
              <p className="text-sm font-medium">Family Brunch</p>
              <div className="mt-2 h-1 w-full bg-brand-light rounded-full"></div>
            </div>
            <div className="min-w-[140px] bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
              <p className="text-xs text-brand-dark font-bold">OCT 21</p>
              <p className="text-sm font-medium">Steak Dinner</p>
              <div className="mt-2 h-1 w-full bg-brand-light rounded-full"></div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 border-t border-brand-light/20 bg-brand-dark px-4 pb-4 pt-2 shadow-lg">
          <div className="flex gap-2 max-w-md mx-auto justify-around">
            <a className="flex flex-col items-center gap-1 text-white" href="#">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                calendar_month
              </span>
              <p className="text-[10px] font-medium">Planner</p>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-white/60 hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined">menu_book</span>
              <p className="text-[10px] font-medium">Recipes</p>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-white/60 hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              <p className="text-[10px] font-medium">Groceries</p>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-white/60 hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <p className="text-[10px] font-medium">Settings</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
