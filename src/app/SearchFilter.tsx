import { useNavigate } from 'react-router-dom';
import { AppNavigation } from '../components/layout/AppNavigation';
import { RecipeThumbnail } from '../components/ui/RecipeThumbnail';

const SEARCH_RESULTS = [
  {
    title: "Fresh Salmon Salad",
    category: "Keto Friendly",
    time: "15 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHQnO9jUYD9S_ouU2FlDOeEtjeFPv_x3ahmow3bnk8YsVGppc5n3_w-lQE2rSb1Z6JdxUdqssJRMfHi9_LZ0SyIbxfPQAa3gKWkpUdq7xSRdy6pZSESy7zJStf0YzDRmiC1mbJfRyxjhOKl0ACovnAgAIuCb1rO_ghRyKcnlzoeYZ5knOEtQl3nj-Q9CZDpsoolSBMdkLTHR_TrI1dv6tqCxgGekPNtwq4HpDWJeWgbLzFz-bCvmHcv9n38QzO1KVmL23okVOpR_zP",
    isFavorite: true
  },
  {
    title: "Herb Garlic Pasta",
    category: "Italian",
    time: "25 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMJ0N7s4sGd72OkeODDem7IyyrW1RYzSCsl0gSdEZSRlRvV6hyCg4ySRyLZOwonKyrBLzUzI4gv7EMIoC6Fx98Ajrrw_xaqLNdm0Us5p0qvsDoeYdjN0nVEM_F3OVWhdK9Ka4CX8tsxFhfW493hVK05uMvA2DGb7fVzRMU20F-C8yzZJcmVFedZHfuA6WqBPKWnaMHEi8X6-isEkTiGdeoqaOHQX8p_WwUa9w6I_YUR1dJg10By1fMRwMD5W0FECSk5EdZODCQl9NX",
    isFavorite: false
  },
  {
    title: "Avocado Delight",
    category: "Breakfast",
    time: "10 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHTV4Hema_Xa9NnoU2fZczZUS8vtK1Y91wH8qk-P_WlLkrMmjIHc5P_JyCBjwARh0LCT7nhAjKDGhjZMz2hN0uDD_9lacknnwDNckU7nFttacVovt5tRDBCFWAGGx9WIQX5tgGMNpn4nkLsYKbZ-kt2ljMkIyz0tS_RLjal7i0wOUnkS47olc3N-cgCAfTSAnaIQAYbLDVuXEKoqW8l2LvkLFdz1v7pG_-lWTBtWX4laxc6nDOuMfaqHKDGI4tf4ZcGRL8AnzhAKmf",
    isFavorite: true
  },
  {
    title: "Harvest Grain Bowl",
    category: "Vegan",
    time: "20 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsZ-_sZLEfBmMlSvVxs4cuaRMDQeTfHmbXhj13J7dYbgWDBBuGboTzL18Do2KFk6d74IJiYwK6EqqJRY86J96QiS1WNtjhruW5apDtnVQIEP-SXKTG72AY02ymp3kHVNTQ3VFcJbt88HazIEOsNYX8DoBZ7OUaYyugSiIW5WS20nYULudvUciMkhMnz7c47XcV2-S39FcEpmLGojW_vDO4Mzt-44hGC-490KVN9ghamGc5xkO6K7QsZL-KGBzA9f6oSGI7ybK8ej83",
    isFavorite: false
  },
  {
    title: "Fluffy Buttermilk Stack",
    category: "Brunch",
    time: "30 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgaJttJpAkVk5aS5paJOyUzq2zr-5QJ0cvNBhT3s_lWD_AnVeXzKOUF00jnZbqV9mdy2TpWpfgJhGxFxy7EBQdcvrB5_5DG9li2doKrjKDC490HrdAt3w4fqkcadFM3KZ95G38ak0Cj2lgdbdU5D2QYxR8bESG9LmqE7Tilw8fFCTf6YOi4fEPWdJWH4_ba7fwZZWmU7OOadodAzZDW7Mwf6Ugswn5Ny_4D4ngWreZavQkgj5e5sEPoq54D5foUKgPV2F9WGvZWNUc",
    isFavorite: false
  },
  {
    title: "Margherita Pizza",
    category: "Classic",
    time: "45 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDur6HJtrZTT8wq2deyx8B5YnKmeEsjA4k6Ir6dECT9BQmO80Lvj_iNJdr_niXtGTk_5SmlSgHE_gMZSXMg8A_suZLF3PArmCWU1TiM_BirB-NzAK3RQ3sJyJM8OC5F77h8oxzpixTjFRrxjHRML1C4DW8ve1jVwXXNseHOccOarVukR6c08Ln75jgDKyWr2RAVWZJ9cBdLCclXerBZUY9keUsNwnu3vxZBphZZA_4dZZNCOFBO_beEOo5Vcniq6sgiqB6wB1Cg2R8a",
    isFavorite: true
  }
];

export default function SearchFilter() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-4xl mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      {/* Search Header */}
      <section className="bg-brand-green text-white pb-32 px-8 pt-16 rounded-b-[4rem] shadow-2xl relative z-10">
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate(-1)}
            className="size-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-white font-black">arrow_back</span>
          </button>
          <h2 className="text-2xl font-black uppercase tracking-tighter italic">Explore <span className="text-primary">Recipes</span></h2>
          <button className="size-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl transition-all active:scale-95">
            <span className="material-symbols-outlined text-white font-black">tune</span>
          </button>
        </div>

        <div className="absolute -bottom-10 left-8 right-8 z-20">
          <div className="flex items-center bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(14,117,71,0.3)] p-3 border-4 border-slate-50 dark:border-slate-800 group focus-within:border-brand-green/20 transition-all">
            <div className="flex-1 flex items-center px-6">
              <span className="material-symbols-outlined text-slate-300 mr-4 font-black group-focus-within:text-brand-green transition-colors">search</span>
              <input
                className="w-full border-none focus:ring-0 text-slate-900 dark:text-slate-100 bg-transparent py-4 text-sm font-bold placeholder:text-slate-300 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
                placeholder="Search ingredients, cuisines..."
              />
            </div>
            <button className="bg-primary text-white h-14 px-8 rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-primary/30 hover:bg-orange-600 transition-all active:scale-95 font-black uppercase tracking-widest text-xs">
              Search
            </button>
          </div>
        </div>
      </section>

      <main className="flex-1 px-8 pt-20 pb-40 space-y-12">
        {/* Filters */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 px-1">
            <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
              <span className="material-symbols-outlined text-xl font-black">filter_list</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Refine Results</h3>
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {[
              { label: 'Diet: Keto', icon: 'nutrition' },
              { label: 'Time: < 30m', icon: 'timer' },
              { label: 'Difficulty: Easy', icon: 'fitness_center' }
            ].map(filter => (
              <button key={filter.label} className="flex h-12 shrink-0 items-center justify-center gap-3 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-6 font-black uppercase tracking-widest text-[9px] border-2 border-slate-50 dark:border-slate-800 hover:border-brand-green/20 transition-all">
                {filter.label}
                <span className="material-symbols-outlined text-sm font-black text-brand-green">expand_more</span>
              </button>
            ))}
          </div>
        </section>

        {/* Results Info */}
        <section className="flex justify-between items-center px-1">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Found in Cookbook</p>
            <p className="text-lg font-black text-slate-800 dark:text-slate-100 tracking-tighter italic">124 Results <span className="text-brand-green">available</span></p>
          </div>
          <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px] cursor-pointer hover:underline underline-offset-4">
            <span>Newest first</span>
            <span className="material-symbols-outlined font-black text-lg">swap_vert</span>
          </div>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {SEARCH_RESULTS.map((recipe, i) => (
            <RecipeThumbnail key={i} {...recipe} />
          ))}
        </div>

        {/* Load More */}
        <div className="pt-8 flex justify-center">
          <button className="bg-brand-green/10 text-brand-green border-2 border-brand-green/20 font-black uppercase tracking-[0.2em] text-[10px] px-12 py-5 rounded-[2rem] hover:bg-brand-green hover:text-white transition-all active:scale-95 shadow-2xl">
            Load More Recipes
          </button>
        </div>
      </main>

      <AppNavigation activeTab="recipes" />
    </div>
  );
}
