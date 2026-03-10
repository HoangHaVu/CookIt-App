import { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';

const MY_RECIPES = [
  {
    id: 'r1',
    title: 'Classic Fettuccine Alfredo',
    details: 'Created 3 weeks ago • 45 min',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDNEo9w3xQg3sOhzYfWwVPneWxGzah4l4Ubt-LJqcdlfS0ICoJT0T5-MwgMmdvwCrm3VZi9doZJs6th8WsYbNpqEeTk6iSYvBWonM9RaNK6ukNBl2i4TDsCZzv7fWg_3Kkt3zHMQoFKNU5lXbOuDbHUUU-3JqazC3IGQJrQfllALKtUjbX4DoUIY3BltC1O-4FDJZOgi9H_I72eG9uigzY-4sJR-00uL-Dqzy23-iT87eqZcldMZoYNnCGAxx280ApDRINfLZvAHF5',
  },
  {
    id: 'r2',
    title: 'Midnight Carbonara',
    details: 'Created 1 month ago • 25 min',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB360ORAsw6gCieTyDoxjjGOiHq_YYZTJedMA1cbUF_3L5t_RHCxDBSnAD96MKCYAkn9keze4O9LN9oqhTLOo7Bi0-aETXr4ripYcpfQWHA__l3kASuQJAkSeJAVsDsggR7kAUtiosmHhjico7rEOgCo2YI8Tpl6R9yJ_AEh3R3qcUMiK3SBoU-uEG9azca7sQpURlcUdGmZ0RPhWgVFiVcz4LL5GS0IrRWZhNFmf9eFmV80WVNpexjWHYcP-9m_g2dCyrN0YRS7MWH',
  },
  {
    id: 'r3',
    title: 'Spicy Arrabbiata Penne',
    details: 'Created 2 months ago • 30 min',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3kGOcxrwfCmnzPboV6bVXGnT4rng6iXrKxa_LF5pl4S9kQzwI-D8SdqkwFqdsaIP3SWDRW3fK6AfG3IeTjCqW2oWcJM4uyOPmuuGk0w4Wj8zCpPZ9GbqTfw3ufYETx7YBqd-GwFlB8Ucxapq8FCvXGOps6Nmsm8Dr3zhtqdl4uchjJkgE-PaV96LnCxs711Az8Kb6tq4A2zAcoxBO8YKtfOKrnxkXDmj342pBpwzQANWcfrSoOXLezhxa6ZqCwiLXzGId7Q_TSP2q',
  },
  {
    id: 'r4',
    title: "Grandma's 5-Layer Lasagna",
    details: 'Created 4 months ago • 120 min',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPcjQChDxlTnb-Ka1-_MF0IzXSJe2jKN00_9Ujc12w3g5PFeJF4_lzzeMaw-zL_ubbgrg6tHy8h7SeWiDyfdFi6oQFcheXj-6P52PiVDnR47nLvWXhZ_0TDNgqIf9v2cGRO2PmQPgGOScKeqh7Oa5XMDt9fEDyiXzYqzwXYc_iHa5qDU19Lzlt2PxYh27Al2nYCQ5RcG7xSSEs72crvJTOxZBs7EYWcdbUE1wekdV3jPfZUCFXLjRg6x_NWxZKfN8ddkxhk0amcIOk',
  }
];

export default function SubmitToChallenge() {
  const [selectedId, setSelectedId] = useState<string>('r1');

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <PageHeader title="Submit Entry" rightActionIcon="info" />

      <main className="flex-1 overflow-y-auto px-6 py-8 space-y-12 pb-40">
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-1">
            Current Challenge
          </h2>
          <div className="flex flex-col gap-1 rounded-[2.5rem] bg-white dark:bg-slate-900 p-8 border border-brand-green/10 shadow-xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 size-32 opacity-10 -rotate-12 translate-x-8 -translate-y-8 group-hover:rotate-0 transition-transform duration-700">
              <span className="material-symbols-outlined text-8xl font-black text-brand-green">restaurant</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping"></span>
              <p className="text-primary text-[10px] font-black uppercase tracking-widest">
                Ends in 2 days
              </p>
            </div>

            <div className="flex items-stretch justify-between gap-6">
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 dark:text-slate-50 text-2xl font-black leading-[1.1] tracking-tight mb-3">
                  The Ultimate <span className="text-brand-green">Pasta Challenge</span>
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-relaxed">
                  Showcase your best homemade pasta creation from scratch.
                </p>
              </div>
              <div
                className="size-24 bg-center bg-no-repeat bg-cover rounded-3xl shrink-0 shadow-lg border-2 border-white dark:border-slate-800"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvmfC97BWbfGmnwPlGGG31-5mH4nX3TrYdBxRUCGBOzN3vlQw6IeuvYU8KbzE2NdmaGKxo3wbd5Ph-Fw17qirQtCbjGJp2aFuT5hPaozp6W1B0Xl612i2jKY21-CQbJEMXS_G0qSDxUAvqln3RYI6dB9afCclWnOsuAHFfDpAcfBy-UFmXX73w4xg4N1gTr5CkYz4Ijxqt4Tjg2AVUWSK4zVTw6XQT2GkaTd3geBfGJs5YNsNiU__vCreKb5ZkiV8UUAnGYmOaz2QK')" }}
              ></div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between px-1">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                Select Your Recipe
              </h2>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-tight">
                Pick one of your creations
              </p>
            </div>
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
              <span className="material-symbols-outlined font-black">search</span>
            </div>
          </div>

          <div className="space-y-4">
            {MY_RECIPES.map((recipe) => {
              const isSelected = selectedId === recipe.id;
              return (
                <button
                  key={recipe.id}
                  onClick={() => setSelectedId(recipe.id)}
                  className={`relative group flex items-center gap-4 p-4 rounded-[2rem] bg-white dark:bg-slate-900 border-2 cursor-pointer transition-all shadow-sm active:scale-[0.98] w-full text-left ${
                    isSelected
                      ? 'border-brand-green bg-brand-green/5'
                      : 'border-transparent hover:border-brand-green/20'
                  }`}
                >
                  <div
                    className="w-16 h-16 rounded-2xl bg-cover bg-center shrink-0 shadow-inner border border-slate-100 dark:border-slate-800"
                    style={{ backgroundImage: `url('${recipe.imageSrc}')` }}
                  ></div>
                  <div className="flex flex-col flex-1 min-w-0 pr-4">
                    <span className={`font-black text-sm truncate uppercase tracking-widest transition-colors ${isSelected ? 'text-brand-green' : 'text-slate-900 dark:text-slate-100'}`}>
                      {recipe.title}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-tight mt-0.5">
                      {recipe.details}
                    </span>
                  </div>
                  <div className={`flex items-center justify-center size-8 rounded-2xl border-2 shadow-sm transition-all ${
                    isSelected
                      ? 'bg-brand-green border-brand-green'
                      : 'border-slate-100 dark:border-slate-800 group-hover:border-brand-green/30'
                  }`}>
                    <span className={`material-symbols-outlined text-white text-[20px] font-black transition-all ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                      check
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <div className="mt-8 mb-20 px-1">
          <button
            disabled={!selectedId}
            className="w-full bg-primary hover:bg-orange-600 disabled:opacity-40 text-white font-black h-20 rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 transition-all text-xl uppercase tracking-tighter flex items-center justify-center gap-3"
          >
            <span>Enter Challenge</span>
            <span className="material-symbols-outlined text-3xl font-black">rocket_launch</span>
          </button>
          <p className="text-center text-slate-400 text-[9px] mt-4 font-black uppercase tracking-[0.25em]">
            By submitting, you agree to terms
          </p>
        </div>
      </main>

      <AppNavigation activeTab="home" />
    </div>
  );
}
