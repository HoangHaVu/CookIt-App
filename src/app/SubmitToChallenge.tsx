export default function SubmitToChallenge() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full max-w-md mx-auto flex-col bg-background-light dark:bg-background-dark shadow-xl overflow-x-hidden">
        <div className="flex items-center p-4 pb-4 justify-between bg-brand-green text-white">
          <div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-primary/10 rounded-full">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '24px' }}
            >
              close
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Submit to Challenge
          </h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex items-center justify-center rounded-full size-10 hover:bg-primary/10 text-slate-900 dark:text-slate-100 transition-colors">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '24px' }}
              >
                info
              </span>
            </button>
          </div>
        </div>

        <div className="px-4 pt-6">
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight pb-4">
            Current Challenge
          </h2>
          <div className="flex items-stretch justify-between gap-4 rounded-2xl bg-white dark:bg-slate-800/50 p-4 border border-brand-green/10 shadow-md">
            <div className="flex flex-col gap-1 flex-[2_2_0px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider">
                  Ends in 2 days
                </p>
              </div>
              <p className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">
                The Ultimate Pasta Challenge
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-snug mt-1">
                Showcase your best homemade pasta creation from scratch.
              </p>
            </div>
            <div
              className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
              data-alt="Delicious close up of gourmet pasta dish"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvmfC97BWbfGmnwPlGGG31-5mH4nX3TrYdBxRUCGBOzN3vlQw6IeuvYU8KbzE2NdmaGKxo3wbd5Ph-Fw17qirQtCbjGJp2aFuT5hPaozp6W1B0Xl612i2jKY21-CQbJEMXS_G0qSDxUAvqln3RYI6dB9afCclWnOsuAHFfDpAcfBy-UFmXX73w4xg4N1gTr5CkYz4Ijxqt4Tjg2AVUWSK4zVTw6XQT2GkaTd3geBfGJs5YNsNiU__vCreKb5ZkiV8UUAnGYmOaz2QK')",
              }}
            ></div>
          </div>
        </div>

        <div className="px-4 pt-8 pb-3">
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
            Select Your Recipe
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Pick one of your existing recipes to enter
          </p>
        </div>

        <div className="px-4 py-3 sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-lg shadow-brand-green/5 ring-1 ring-inset ring-slate-200 dark:ring-slate-700">
              <div className="text-primary flex border-none bg-white dark:bg-slate-800 items-center justify-center pl-4 rounded-l-xl border-r-0">
                <span
                  className="material-symbols-outlined text-slate-400"
                  style={{ fontSize: '22px' }}
                >
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-white dark:bg-slate-800 h-full placeholder:text-slate-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="Search your recipes..."
                value=""
              />
            </div>
          </label>
        </div>

        <div className="flex flex-col gap-3 px-4 pb-24">
          <label className="relative group flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-brand-green/20 cursor-pointer transition-all has-[:checked]:border-brand-green has-[:checked]:bg-accent-light/10 shadow-sm">
            <input
              checked={true}
              className="hidden peer"
              name="recipe-selection"
              type="radio"
            />
            <div
              className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0"
              data-alt="Creamy fettuccine alfredo recipe thumbnail"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDNEo9w3xQg3sOhzYfWwVPneWxGzah4l4Ubt-LJqcdlfS0ICoJT0T5-MwgMmdvwCrm3VZi9doZJs6th8WsYbNpqEeTk6iSYvBWonM9RaNK6ukNBl2i4TDsCZzv7fWg_3Kkt3zHMQoFKNU5lXbOuDbHUUU-3JqazC3IGQJrQfllALKtUjbX4DoUIY3BltC1O-4FDJZOgi9H_I72eG9uigzY-4sJR-00uL-Dqzy23-iT87eqZcldMZoYNnCGAxx280ApDRINfLZvAHF5')",
              }}
            ></div>
            <div className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-slate-100 font-bold text-base group-has-[:checked]:text-brand-green">
                Classic Fettuccine Alfredo
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">
                Created 3 weeks ago • 45 min
              </span>
            </div>
            <div className="flex items-center justify-center size-6 rounded-full border-2 border-slate-300 dark:border-slate-600 peer-checked:bg-brand-green peer-checked:border-brand-green">
              <span className="material-symbols-outlined text-white text-[16px] hidden peer-checked:block">
                check
              </span>
            </div>
          </label>

          <label className="relative group flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-brand-green/20 cursor-pointer transition-all has-[:checked]:border-brand-green has-[:checked]:bg-accent-light/10 shadow-sm">
            <input
              className="hidden peer"
              name="recipe-selection"
              type="radio"
            />
            <div
              className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0"
              data-alt="Spaghetti carbonara with bacon"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB360ORAsw6gCieTyDoxjjGOiHq_YYZTJedMA1cbUF_3L5t_RHCxDBSnAD96MKCYAkn9keze4O9LN9oqhTLOo7Bi0-aETXr4ripYcpfQWHA__l3kASuQJAkSeJAVsDsggR7kAUtiosmHhjico7rEOgCo2YI8Tpl6R9yJ_AEh3R3qcUMiK3SBoU-uEG9azca7sQpURlcUdGmZ0RPhWgVFiVcz4LL5GS0IrRWZhNFmf9eFmV80WVNpexjWHYcP-9m_g2dCyrN0YRS7MWH')",
              }}
            ></div>
            <div className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-slate-100 font-bold text-base group-has-[:checked]:text-brand-green">
                Midnight Carbonara
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">
                Created 1 month ago • 25 min
              </span>
            </div>
            <div className="flex items-center justify-center size-6 rounded-full border-2 border-slate-300 dark:border-slate-600 peer-checked:bg-brand-green peer-checked:border-brand-green">
              <span className="material-symbols-outlined text-white text-[16px] hidden peer-checked:block">
                check
              </span>
            </div>
          </label>

          <label className="relative group flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-brand-green/20 cursor-pointer transition-all has-[:checked]:border-brand-green has-[:checked]:bg-accent-light/10 shadow-sm">
            <input
              className="hidden peer"
              name="recipe-selection"
              type="radio"
            />
            <div
              className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0"
              data-alt="Spicy arrabbiata penne pasta"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3kGOcxrwfCmnzPboV6bVXGnT4rng6iXrKxa_LF5pl4S9kQzwI-D8SdqkwFqdsaIP3SWDRW3fK6AfG3IeTjCqW2oWcJM4uyOPmuuGk0w4Wj8zCpPZ9GbqTfw3ufYETx7YBqd-GwFlB8Ucxapq8FCvXGOps6Nmsm8Dr3zhtqdl4uchjJkgE-PaV96LnCxs711Az8Kb6tq4A2zAcoxBO8YKtfOKrnxkXDmj342pBpwzQANWcfrSoOXLezhxa6ZqCwiLXzGId7Q_TSP2q')",
              }}
            ></div>
            <div className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-slate-100 font-bold text-base group-has-[:checked]:text-brand-green">
                Spicy Arrabbiata Penne
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">
                Created 2 months ago • 30 min
              </span>
            </div>
            <div className="flex items-center justify-center size-6 rounded-full border-2 border-slate-300 dark:border-slate-600 peer-checked:bg-brand-green peer-checked:border-brand-green">
              <span className="material-symbols-outlined text-white text-[16px] hidden peer-checked:block">
                check
              </span>
            </div>
          </label>

          <label className="relative group flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-brand-green/20 cursor-pointer transition-all has-[:checked]:border-brand-green has-[:checked]:bg-accent-light/10 shadow-sm">
            <input
              className="hidden peer"
              name="recipe-selection"
              type="radio"
            />
            <div
              className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0"
              data-alt="Homemade meat lasagna layers"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPcjQChDxlTnb-Ka1-_MF0IzXSJe2jKN00_9Ujc12w3g5PFeJF4_lzzeMaw-zL_ubbgrg6tHy8h7SeWiDyfdFi6oQFcheXj-6P52PiVDnR47nLvWXhZ_0TDNgqIf9v2cGRO2PmQPgGOScKeqh7Oa5XMDt9fEDyiXzYqzwXYc_iHa5qDU19Lzlt2PxYh27Al2nYCQ5RcG7xSSEs72crvJTOxZBs7EYWcdbUE1wekdV3jPfZUCFXLjRg6x_NWxZKfN8ddkxhk0amcIOk')",
              }}
            ></div>
            <div className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-slate-100 font-bold text-base group-has-[:checked]:text-brand-green">
                Grandma's 5-Layer Lasagna
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">
                Created 4 months ago • 120 min
              </span>
            </div>
            <div className="flex items-center justify-center size-6 rounded-full border-2 border-slate-300 dark:border-slate-600 peer-checked:bg-brand-green peer-checked:border-brand-green">
              <span className="material-symbols-outlined text-white text-[16px] hidden peer-checked:block">
                check
              </span>
            </div>
          </label>
        </div>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark to-transparent">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-transform active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Enter Challenge</span>
            <span className="material-symbols-outlined">send</span>
          </button>
          <p className="text-center text-slate-400 text-[10px] mt-2 font-medium uppercase tracking-widest">
            By submitting, you agree to challenge terms
          </p>
        </div>
      </div>
    </>
  );
}
