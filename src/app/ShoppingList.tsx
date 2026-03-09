export default function ShoppingList() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="bg-header-footer text-white px-4 py-4 sticky top-0 z-10 shadow-md">
          <div className="flex items-center justify-between max-w-xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white cursor-pointer">
                menu
              </span>
              <h1 className="text-xl font-bold tracking-tight">
                Shopping List
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-white cursor-pointer">
                search
              </span>
              <span className="material-symbols-outlined text-white cursor-pointer">
                more_vert
              </span>
            </div>
          </div>
          <div className="mt-4 flex gap-6 overflow-x-auto no-scrollbar max-w-xl mx-auto">
            <a
              className="flex flex-col items-center border-b-2 border-primary pb-2 shrink-0"
              href="#"
            >
              <span className="text-sm font-semibold">All Items</span>
            </a>
            <a
              className="flex flex-col items-center border-b-2 border-transparent pb-2 opacity-70 shrink-0"
              href="#"
            >
              <span className="text-sm font-semibold">By Recipe</span>
            </a>
            <a
              className="flex flex-col items-center border-b-2 border-transparent pb-2 opacity-70 shrink-0"
              href="#"
            >
              <span className="text-sm font-semibold">Recently Bought</span>
            </a>
          </div>
        </header>
        <main className="flex-1 max-w-xl mx-auto w-full pb-32">
          <div className="p-4 flex items-center justify-between bg-white dark:bg-slate-800 my-2 mx-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-header-footer">
                auto_awesome
              </span>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Smart-syncing from your 7-day meal plan
              </p>
            </div>
          </div>
          <section>
            <div className="bg-category-bg px-4 py-2 mt-4 flex items-center justify-between">
              <h2 className="text-header-footer font-bold uppercase tracking-wider text-xs">
                Produce
              </h2>
              <span className="text-[10px] font-bold text-header-footer/70">
                3 ITEMS
              </span>
            </div>
            <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
              <label className="flex items-center gap-4 py-4 group cursor-pointer">
                <input
                  className="custom-checkbox h-6 w-6 rounded border-slate-300 text-header-footer focus:ring-header-footer dark:bg-slate-700 dark:border-slate-600"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">
                    Organic Baby Spinach
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    For: Green Power Salad
                  </span>
                </div>
              </label>
              <label className="flex items-center gap-4 py-4 group cursor-pointer">
                <input
                  className="custom-checkbox h-6 w-6 rounded border-slate-300 text-header-footer focus:ring-header-footer dark:bg-slate-700 dark:border-slate-600"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">
                    Roma Tomatoes (4)
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    For: Pasta Primavera
                  </span>
                </div>
              </label>
              <label className="flex items-center gap-4 py-4 group cursor-pointer">
                <input
                  className="custom-checkbox h-6 w-6 rounded border-slate-300 text-header-footer focus:ring-header-footer dark:bg-slate-700 dark:border-slate-600"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">Red Onions</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Essential Staple
                  </span>
                </div>
              </label>
            </div>
          </section>
          <section>
            <div className="bg-category-bg px-4 py-2 mt-4 flex items-center justify-between">
              <h2 className="text-header-footer font-bold uppercase tracking-wider text-xs">
                Dairy &amp; Eggs
              </h2>
              <span className="text-[10px] font-bold text-header-footer/70">
                2 ITEMS
              </span>
            </div>
            <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
              <label className="flex items-center gap-4 py-4 group cursor-pointer">
                <input
                  className="custom-checkbox h-6 w-6 rounded border-slate-300 text-header-footer focus:ring-header-footer dark:bg-slate-700 dark:border-slate-600"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">
                    Greek Yogurt (500g)
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    For: Breakfast Bowls
                  </span>
                </div>
              </label>
              <label className="flex items-center gap-4 py-4 group cursor-pointer">
                <input
                  className="custom-checkbox h-6 w-6 rounded border-slate-300 text-header-footer focus:ring-header-footer dark:bg-slate-700 dark:border-slate-600"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">Unsalted Butter</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    For: Garlic Bread
                  </span>
                </div>
              </label>
            </div>
          </section>
          <section>
            <div className="bg-category-bg px-4 py-2 mt-4 flex items-center justify-between">
              <h2 className="text-header-footer font-bold uppercase tracking-wider text-xs">
                Meat &amp; Proteins
              </h2>
              <span className="text-[10px] font-bold text-header-footer/70">
                1 ITEM
              </span>
            </div>
            <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
              <label className="flex items-center gap-4 py-4 group cursor-pointer">
                <input
                  className="custom-checkbox h-6 w-6 rounded border-slate-300 text-header-footer focus:ring-header-footer dark:bg-slate-700 dark:border-slate-600"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">
                    Chicken Breast (2 lbs)
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    For: Grilled Chicken Salad
                  </span>
                </div>
              </label>
            </div>
          </section>
        </main>
        <div className="fixed bottom-24 right-6 z-20">
          <button className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center h-14 w-14 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-900">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <nav className="fixed bottom-0 w-full bg-header-footer text-white/70 border-t border-header-footer/20 pb-safe z-30">
          <div className="flex max-w-xl mx-auto h-20">
            <a
              className="flex flex-1 flex-col items-center justify-center gap-1"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                home
              </span>
              <span className="text-[10px] font-medium">Home</span>
            </a>
            <a
              className="flex flex-1 flex-col items-center justify-center gap-1"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                menu_book
              </span>
              <span className="text-[10px] font-medium">Recipes</span>
            </a>
            <a
              className="flex flex-1 flex-col items-center justify-center gap-1"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                calendar_month
              </span>
              <span className="text-[10px] font-medium">Planner</span>
            </a>
            <a
              className="flex flex-1 flex-col items-center justify-center gap-1 text-white bg-white/10"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                shopping_cart
              </span>
              <span className="text-[10px] font-medium">Shopping</span>
            </a>
            <a
              className="flex flex-1 flex-col items-center justify-center gap-1"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                person
              </span>
              <span className="text-[10px] font-medium">Profile</span>
            </a>
          </div>
        </nav>
        <div className="fixed bottom-20 left-0 right-0 p-4 z-20 pointer-events-none">
          <div className="max-w-xl mx-auto flex justify-center pointer-events-auto">
            <button className="bg-primary w-full max-w-sm py-4 rounded-xl text-white font-bold text-lg shadow-2xl flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">shopping_basket</span>
              Checkout (6 items)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
