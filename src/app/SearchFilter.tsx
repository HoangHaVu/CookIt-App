export default function SearchFilter() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <header className="bg-deep-green text-white p-4 sticky top-0 z-10 shadow-md">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined cursor-pointer">
                arrow_back
              </span>
              <h1 className="text-xl font-bold tracking-tight">
                Explore Recipes
              </h1>
            </div>
            <button className="p-2 bg-white/10 rounded-full">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </header>

        <div className="px-4 py-6 bg-deep-green/5 dark:bg-deep-green/20 border-b border-deep-green/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2">
              <label className="flex flex-col flex-1 h-14">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white dark:bg-slate-800">
                  <div className="text-slate-400 flex items-center justify-center pl-4 rounded-l-xl">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-slate-400 px-4 text-base font-normal leading-normal"
                    placeholder="Search ingredients, cuisines..."
                    value=""
                  />
                </div>
              </label>
              <button className="bg-primary text-white rounded-xl px-6 h-14 flex items-center justify-center font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all">
                Search
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-deep-green dark:text-sage-green text-sm font-bold uppercase tracking-wider mb-3">
                Refine by
              </h3>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-sage-green text-deep-green px-5 font-semibold text-sm border border-deep-green/10 whitespace-nowrap">
                  Diet: Keto{' '}
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-sage-green text-deep-green px-5 font-semibold text-sm border border-deep-green/10 whitespace-nowrap">
                  Time: &lt; 30m{' '}
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-sage-green text-deep-green px-5 font-semibold text-sm border border-deep-green/10 whitespace-nowrap">
                  Difficulty: Easy{' '}
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 p-4 max-w-4xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              124 results found
            </p>
            <div className="flex items-center gap-2 text-deep-green font-semibold cursor-pointer">
              <span>Newest first</span>
              <span className="material-symbols-outlined">swap_vert</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-square relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-alt="Healthy salmon salad bowl with greens"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHQnO9jUYD9S_ouU2FlDOeEtjeFPv_x3ahmow3bnk8YsVGppc5n3_w-lQE2rSb1Z6JdxUdqssJRMfHi9_LZ0SyIbxfPQAa3gKWkpUdq7xSRdy6pZSESy7zJStf0YzDRmiC1mbJfRyxjhOKl0ACovnAgAIuCb1rO_ghRyKcnlzoeYZ5knOEtQl3nj-Q9CZDpsoolSBMdkLTHR_TrI1dv6tqCxgGekPNtwq4HpDWJeWgbLzFz-bCvmHcv9n38QzO1KVmL23okVOpR_zP"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-deep-green shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </div>
              </div>
              <div className="p-3">
                <span className="text-[10px] font-bold uppercase text-primary tracking-widest">
                  Keto Friendly
                </span>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 mt-1 line-clamp-1">
                  Fresh Salmon Salad
                </h4>
                <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>15 mins</span>
                </div>
              </div>
            </div>

            <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-square relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-alt="Gourmet pasta with fresh herbs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMJ0N7s4sGd72OkeODDem7IyyrW1RYzSCsl0gSdEZSRlRvV6hyCg4ySRyLZOwonKyrBLzUzI4gv7EMIoC6Fx98Ajrrw_xaqLNdm0Us5p0qvsDoeYdjN0nVEM_F3OVWhdK9Ka4CX8tsxFhfW493hVK05uMvA2DGb7fVzRMU20F-C8yzZJcmVFedZHfuA6WqBPKWnaMHEi8X6-isEkTiGdeoqaOHQX8p_WwUa9w6I_YUR1dJg10By1fMRwMD5W0FECSk5EdZODCQl9NX"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-slate-300 shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </div>
              </div>
              <div className="p-3">
                <span className="text-[10px] font-bold uppercase text-primary tracking-widest">
                  Italian
                </span>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 mt-1 line-clamp-1">
                  Herb Garlic Pasta
                </h4>
                <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-square relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-alt="Avocado toast with poached egg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHTV4Hema_Xa9NnoU2fZczZUS8vtK1Y91wH8qk-P_WlLkrMmjIHc5P_JyCBjwARh0LCT7nhAjKDGhjZMz2hN0uDD_9lacknnwDNckU7nFttacVovt5tRDBCFWAGGx9WIQX5tgGMNpn4nkLsYKbZ-kt2ljMkIyz0tS_RLjal7i0wOUnkS47olc3N-cgCAfTSAnaIQAYbLDVuXEKoqW8l2LvkLFdz1v7pG_-lWTBtWX4laxc6nDOuMfaqHKDGI4tf4ZcGRL8AnzhAKmf"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-deep-green shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </div>
              </div>
              <div className="p-3">
                <span className="text-[10px] font-bold uppercase text-primary tracking-widest">
                  Breakfast
                </span>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 mt-1 line-clamp-1">
                  Avocado Delight
                </h4>
                <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>10 mins</span>
                </div>
              </div>
            </div>

            <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-square relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-alt="Colorful mediterranean grain bowl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsZ-_sZLEfBmMlSvVxs4cuaRMDQeTfHmbXhj13J7dYbgWDBBuGboTzL18Do2KFk6d74IJiYwK6EqqJRY86J96QiS1WNtjhruW5apDtnVQIEP-SXKTG72AY02ymp3kHVNTQ3VFcJbt88HazIEOsNYX8DoBZ7OUaYyugSiIW5WS20nYULudvUciMkhMnz7c47XcV2-S39FcEpmLGojW_vDO4Mzt-44hGC-490KVN9ghamGc5xkO6K7QsZL-KGBzA9f6oSGI7ybK8ej83"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-slate-300 shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </div>
              </div>
              <div className="p-3">
                <span className="text-[10px] font-bold uppercase text-primary tracking-widest">
                  Vegan
                </span>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 mt-1 line-clamp-1">
                  Harvest Grain Bowl
                </h4>
                <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>20 mins</span>
                </div>
              </div>
            </div>

            <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-square relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-alt="Stacked buttermilk pancakes with syrup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgaJttJpAkVk5aS5paJOyUzq2zr-5QJ0cvNBhT3s_lWD_AnVeXzKOUF00jnZbqV9mdy2TpWpfgJhGxFxy7EBQdcvrB5_5DG9li2doKrjKDC490HrdAt3w4fqkcadFM3KZ95G38ak0Cj2lgdbdU5D2QYxR8bESG9LmqE7Tilw8fFCTf6YOi4fEPWdJWH4_ba7fwZZWmU7OOadodAzZDW7Mwf6Ugswn5Ny_4D4ngWreZavQkgj5e5sEPoq54D5foUKgPV2F9WGvZWNUc"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-slate-300 shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </div>
              </div>
              <div className="p-3">
                <span className="text-[10px] font-bold uppercase text-primary tracking-widest">
                  Brunch
                </span>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 mt-1 line-clamp-1">
                  Fluffy Buttermilk Stack
                </h4>
                <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>30 mins</span>
                </div>
              </div>
            </div>

            <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-square relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-alt="Thin crust pizza with basil"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDur6HJtrZTT8wq2deyx8B5YnKmeEsjA4k6Ir6dECT9BQmO80Lvj_iNJdr_niXtGTk_5SmlSgHE_gMZSXMg8A_suZLF3PArmCWU1TiM_BirB-NzAK3RQ3sJyJM8OC5F77h8oxzpixTjFRrxjHRML1C4DW8ve1jVwXXNseHOccOarVukR6c08Ln75jgDKyWr2RAVWZJ9cBdLCclXerBZUY9keUsNwnu3vxZBphZZA_4dZZNCOFBO_beEOo5Vcniq6sgiqB6wB1Cg2R8a"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-deep-green shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </div>
              </div>
              <div className="p-3">
                <span className="text-[10px] font-bold uppercase text-primary tracking-widest">
                  Classic
                </span>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 mt-1 line-clamp-1">
                  Margherita Pizza
                </h4>
                <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>45 mins</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-12 flex justify-center">
            <button className="bg-primary/10 text-primary border border-primary/20 font-bold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors">
              Load More Recipes
            </button>
          </div>
        </main>

        <footer className="sticky bottom-0 bg-deep-green text-white/70 border-t border-white/10 px-4 py-2 z-20">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <a
              className="flex flex-col items-center gap-1 flex-1 py-1"
              href="#"
            >
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium">Home</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-1 py-1 text-white"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                search
              </span>
              <span className="text-[10px] font-medium">Explore</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-1 py-1"
              href="#"
            >
              <span className="material-symbols-outlined">favorite</span>
              <span className="text-[10px] font-medium">Saved</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-1 py-1"
              href="#"
            >
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-medium">Profile</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
