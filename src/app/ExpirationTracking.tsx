export default function ExpirationTracking() {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        <header className="bg-header-green px-4 pt-6 pb-4 flex items-center justify-between shadow-md">
          <button className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-white text-xl font-bold tracking-tight">
            Expiration Tracking
          </h1>
          <button className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </header>

        <div className="bg-header-green/95 border-t border-white/10">
          <div className="flex px-4 overflow-x-auto no-scrollbar">
            <a
              className="flex-none px-6 py-4 border-b-4 border-transparent text-white/70 font-semibold text-sm"
              href="#"
            >
              All Items
            </a>
            <a
              className="flex-none px-6 py-4 border-b-4 border-primary text-white font-bold text-sm"
              href="#"
            >
              Expiring Soon
            </a>
            <a
              className="flex-none px-6 py-4 border-b-4 border-transparent text-white/70 font-semibold text-sm"
              href="#"
            >
              Expired
            </a>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-red-600 dark:text-red-400 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">error</span>
                Critical - Expired
              </h2>
              <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold px-2 py-1 rounded-full">
                2 Items
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border-l-4 border-red-500">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                  data-alt="Container of greek yogurt on plain background"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxQKYbovcFvoXMLTMsRVmktCHkNSIsI4tHwPYK-54gf6GpbcBmO460E6G9I_8rfyrZB_ldUbm6lzVUfyqum4j25XMWjn_RqT-lv_pvB0cf32QK6rNJcc2VuLoNvFlDgjHoMZI7wBJQ99sFfAAN4Hu74_tPs8zvEWA5612eejwLDOJF1cf0CkSmUwoWeyXPhNExfu7gllLbytsa5RIyX2qMouwLvP0bdjgIxRG42lgIi7qhHincNSGZEWPy5-A9DyXfIRUPeMA0DVbu')",
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 dark:text-slate-100 font-bold truncate">
                    Greek Yogurt
                  </p>
                  <p className="text-red-500 text-sm font-medium">
                    Expired Oct 12, 2023
                  </p>
                  <p className="text-slate-500 text-xs">Fridge • 1 Unit</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm active:scale-95 transition-transform">
                  Replace
                </button>
              </div>

              <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border-l-4 border-red-500">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                  data-alt="Half used block of cheddar cheese"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBssCtCfytmk9A3PNq5V3dPjZfySu4ywHexSXP7T_GUV01vtTpL25fTtl18nXuBe3PinHB0cdSziu8Hu7RGW2Preunawnr4ziDR1ZY-kjcCvkWdfZp70eKsRhixU6V70Zh080mWelBxm-ukimu4F3ec66RmKL2Dl77hBPIkmEsZQLXZUyBh9Ez7abw94-5BMm29ST5e6ZUcfPvH8FMn8HvFFb7fGHnMfeoCs-Th8wMW3MPIj_jEymLfMgnbqXInAAXYKvNtGuQFJjoj')",
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 dark:text-slate-100 font-bold truncate">
                    Cheddar Cheese
                  </p>
                  <p className="text-red-500 text-sm font-medium">
                    Expired Oct 14, 2023
                  </p>
                  <p className="text-slate-500 text-xs">Fridge • 200g</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm active:scale-95 transition-transform">
                  Replace
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">
                  warning
                </span>
                Expiring Soon
              </h2>
              <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold px-2 py-1 rounded-full">
                3 Items
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-accent-sage/20 dark:bg-accent-sage/10 p-3 rounded-xl shadow-sm border-l-4 border-amber-500">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                  data-alt="Fresh milk bottle with droplets"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7Syu7PJAAOnPmstPsRC3lj4ffw5Ojsj06_MxwM2DKXYQ2x9ZG_5ZzlRtchE9ZTE93LZWflenwKmJoXaf4nS52LvJItaVXw3wwGQRu4cejBj4MJuEf4wsBfsKFIV5_2LjbMnTlpvaouklvraQWBEX3-9uBEBcCXs9pG2TfjvaLEFcT-2z88Rk6GWVXBA5CIspiXcbZKCNiU24wAPWo3kV8Y31fQzcUu-Q8d2EE3s4FmjmtxrChZyovZMTjBLRKClLRdbSyB1f_n4Lf')",
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 dark:text-slate-100 font-bold truncate">
                    Whole Milk
                  </p>
                  <p className="text-amber-600 text-sm font-medium">
                    Expires in 2 days
                  </p>
                  <p className="text-slate-500 text-xs">Fridge • 1L</p>
                </div>
                <button className="border-2 border-primary text-primary px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors">
                  Use Now
                </button>
              </div>

              <div className="flex items-center gap-4 bg-accent-sage/20 dark:bg-accent-sage/10 p-3 rounded-xl shadow-sm border-l-4 border-amber-500">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                  data-alt="Fresh strawberries in a punnet"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATvAnDDxqA00MjyZNexWbIxgZRmmI5NoMWdxCrPLVDD6W6_UDzmx79NLTonobZUUUMmSpgBnMCJ0Il1QIUjhk1qwpPBVVbrlNX-Uzt-0x3AF8upPAMcYG4JaKC-5rArMlcURJEEN-FeKTb4RLaGsa1AOpUvj0EDXPYekJs_HD3hypKtCkbkriCerh4pxoO7Q17RQWqTGcJ34TRXErv9gO50xjh5J7HTMRt8Sk4HwOPJYa-HHexI86avS28vqjp3HoBYhMmBkXri8BN')",
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 dark:text-slate-100 font-bold truncate">
                    Strawberries
                  </p>
                  <p className="text-amber-600 text-sm font-medium">
                    Expires in 3 days
                  </p>
                  <p className="text-slate-500 text-xs">Fridge • 1 pack</p>
                </div>
                <button className="border-2 border-primary text-primary px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors">
                  Use Now
                </button>
              </div>
            </div>
          </section>

          <div className="p-6 bg-accent-sage/10 rounded-2xl border border-accent-sage/30 text-center">
            <span className="material-symbols-outlined text-accent-sage text-4xl mb-2">
              check_circle
            </span>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
              12 other items are safely stored with plenty of time left.
            </p>
          </div>
        </main>

        <nav className="bg-header-green pb-6 pt-3 px-4 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
          <a
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
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
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-[10px] font-medium">Recipes</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-white transition-colors"
            href="#"
          >
            <div className="bg-primary p-2 -mt-8 rounded-full shadow-lg border-4 border-header-green">
              <span className="material-symbols-outlined text-white">
                inventory_2
              </span>
            </div>
            <span className="text-[10px] font-bold">Pantry</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">account_circle</span>
            <span className="text-[10px] font-medium">Profile</span>
          </a>
        </nav>
      </div>

      <button className="fixed bottom-24 right-6 bg-primary text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </>
  );
}
