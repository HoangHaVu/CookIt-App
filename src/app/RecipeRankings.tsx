export default function RecipeRankings() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
        <header className="bg-primary px-4 pt-8 pb-6 text-white sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined cursor-pointer">
              arrow_back
            </span>
            <h1 className="text-xl font-bold tracking-tight">
              Top Rated Recipes
            </h1>
            <span className="material-symbols-outlined cursor-pointer">
              more_vert
            </span>
          </div>
          <div className="flex bg-primary/20 p-1 rounded-lg">
            <button className="flex-1 py-2 text-sm font-semibold rounded-md bg-white text-primary shadow-sm">
              All Time
            </button>
            <button className="flex-1 py-2 text-sm font-medium text-accent">
              This Month
            </button>
            <button className="flex-1 py-2 text-sm font-medium text-accent">
              Trending
            </button>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 space-y-4">
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-3 flex gap-4 items-center border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-action text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10">
              #1
            </div>
            <div
              className="size-20 shrink-0 rounded-lg bg-cover bg-center"
              data-alt="Gourmet salad bowl with fresh vegetables"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzH6E7wkqhO6pQse4NonHIY0eVx0-U5dkKMU4yBBptZGbcz2RPyj6djmqg92xOYOq11dZulIZlZwkA8qHdozyJr3uCPB9i3vTc8zVSDvLZQXR3S5R3CAWsvh-ip5dbWFNiajmTMVCObcUI18pPsvLUakWbk7axLOQNgsN4k4KhwmKVlqVW3J4-k4Qla_yKKdB4nD1_e0v1yYAqN3Kgq1PgQfj2LhrGv2m45DscPM1A94DMzdMXzwGaMzYJfK-d--7AN5ieODrvQjNs')",
              }}
            ></div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-white truncate">
                Truffle Mushroom Risotto
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                by Chef Isabella
              </p>
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined fill text-yellow-500 text-sm">
                  star
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  4.9
                </span>
                <span className="text-[10px] text-slate-400">
                  (1.2k reviews)
                </span>
              </div>
            </div>
            <button className="bg-action hover:bg-action/90 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">
              View
            </button>
          </div>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-3 flex gap-4 items-center border border-slate-100 dark:border-slate-700 shadow-sm relative">
            <div className="absolute top-0 left-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10">
              #2
            </div>
            <div
              className="size-20 shrink-0 rounded-lg bg-cover bg-center"
              data-alt="Healthy vegan Buddha bowl with chickpeas"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtDcJLM6vkDpsPs0SfisWUmZ3nrQEQosPG7ZqLGiUqGm_JabnaTbwCO-1KDo5K6833ZgLBxIwWJmb8oj2BaV126yuKXpKi5KRD7YjIraQsjvqy-QOYP3mOrdFkNDStWxXlgvmK8rnLJ4Jo4rvxoL0_oDiC5OQ55xvvAzYWUVFXQg_dumZNy93KEDt7RxZ_8uAFWqbuJuyr2Q7qTJzzVDl-0G8kzYGFe7dMT9yioY6cwu-kEE_0AQkeAMnnH4OAmBGGO2VycMXBtWX3')",
              }}
            ></div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-white truncate">
                Pan-Seared Scallops
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                by Marcus Wareing
              </p>
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined fill text-yellow-500 text-sm">
                  star
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  4.8
                </span>
                <span className="text-[10px] text-slate-400">
                  (856 reviews)
                </span>
              </div>
            </div>
            <button className="bg-action hover:bg-action/90 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">
              View
            </button>
          </div>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-3 flex gap-4 items-center border border-slate-100 dark:border-slate-700 shadow-sm relative">
            <div className="absolute top-0 left-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10">
              #3
            </div>
            <div
              className="size-20 shrink-0 rounded-lg bg-cover bg-center"
              data-alt="Traditional wood-fired margherita pizza"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv0pueYQmI62_V8WrpsXcXyZPrFNe08nKx_HGCp9836wE6_UudaV_Oau1GTbaMumKpZX1DAWJzMkXsWNRzHOmhXf74yk6R4OWwXhd3V_x7fqHhCb0r0gomw9qBbx4mB0gLBLAr1j-I3RZhoeVSmnWpApXm52U_GQJ2vRzGRvUhJNwkh3XQOgfuey7NSEHrCh90H1n4ZA9B7PBOOF1hAN_aTUpvC6jWgm4iC6VmuIoi-F-sk-voAfItR-q4KLCVLZlY1SbjKGqKbZWe')",
              }}
            ></div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-white truncate">
                Artisan Sourdough Pizza
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                by Elena Rossi
              </p>
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined fill text-yellow-500 text-sm">
                  star
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  4.8
                </span>
                <span className="text-[10px] text-slate-400">
                  (2.1k reviews)
                </span>
              </div>
            </div>
            <button className="bg-action hover:bg-action/90 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">
              View
            </button>
          </div>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-3 flex gap-4 items-center border border-slate-100 dark:border-slate-700 shadow-sm relative">
            <div className="absolute top-0 left-0 bg-primary/40 text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10">
              #4
            </div>
            <div
              className="size-20 shrink-0 rounded-lg bg-cover bg-center"
              data-alt="Herb crusted salmon with asparagus"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfo6sUoR1C1kzKja-NYkLHrUNCc3HVXgITPILLJXWKBXi0gpynDfKF3r01DcrIZvSN7anzJm4eTRNtKhX9j-JwfBETqmUfNIF53u61xgkx9kvgmIF_5pzyFIVHr6P_HqtAN1Bzy99m9ZM41gUFIZVAi3zpZtxy59b_Uj6WX8dQJwlTVEzu94MDro7-rGA78gPlPyFM9fxOfOAD-AQrfJCqd5czb8oalkg3BBnCoQKQk7AFWVxCGWbn1gNINkAy4l-sydHHLth8cCr4')",
              }}
            ></div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-white truncate">
                Honey Glazed Salmon
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                by Julian Moore
              </p>
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined fill text-yellow-500 text-sm">
                  star
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  4.7
                </span>
                <span className="text-[10px] text-slate-400">
                  (432 reviews)
                </span>
              </div>
            </div>
            <button className="bg-action hover:bg-action/90 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">
              View
            </button>
          </div>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-3 flex gap-4 items-center border border-slate-100 dark:border-slate-700 shadow-sm relative">
            <div className="absolute top-0 left-0 bg-primary/40 text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10">
              #5
            </div>
            <div
              className="size-20 shrink-0 rounded-lg bg-cover bg-center"
              data-alt="Blueberry pancakes with maple syrup"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOBI2OL3NHElzkg_nvzTSzZk4f6Hk_zzlfk5OzyuwuonXwQZZ0rOO9H4ENyKxa2SW2-94B4SBghGaBNVxanMlmv55K4afA4LLppsfPHlxZ04RIuU0H61KUHy4mY0zZE-7aM-zgKG1oQwgw1lda5ob27TocvBTtF1KnB72Ywrx5LIEPe9WEwOPfdKJicn7kI9LjqlzHXhEdNdKeOSG7ACsSmVHiJzoCrfALQavi9O8Z6g4rdMGZ9P3F1Xvs5S3Ta4FMzf39Ena3cpCn')",
              }}
            ></div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-white truncate">
                Wild Berry Soufflé
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                by Pastry Chef Chloe
              </p>
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined fill text-yellow-500 text-sm">
                  star
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  4.7
                </span>
                <span className="text-[10px] text-slate-400">
                  (677 reviews)
                </span>
              </div>
            </div>
            <button className="bg-action hover:bg-action/90 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">
              View
            </button>
          </div>
        </main>
        <nav className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center">
          <a
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-primary" href="#">
            <span className="material-symbols-outlined fill">explore</span>
            <span className="text-[10px] font-bold">Explore</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500"
            href="#"
          >
            <span className="material-symbols-outlined">restaurant</span>
            <span className="text-[10px] font-medium">Cook</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500"
            href="#"
          >
            <span className="material-symbols-outlined">emoji_events</span>
            <span className="text-[10px] font-medium">Awards</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </a>
        </nav>
      </div>
    </>
  );
}
