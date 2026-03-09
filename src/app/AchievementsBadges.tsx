export default function AchievementsBadges() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="bg-brand-green sticky top-0 z-50 px-4 py-4 flex items-center justify-between shadow-md">
          <button className="text-white flex items-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-white text-lg font-bold">Achievements</h1>
          <button className="text-white flex items-center">
            <span className="material-symbols-outlined">share</span>
          </button>
        </header>

        <section className="p-6 bg-white dark:bg-slate-800 shadow-sm border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                className="size-20 rounded-full object-cover border-4 border-brand-sage"
                data-alt="Professional chef portrait in a kitchen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4S58cPNTkS3VfVglw8Z-onJx0yA6aHnhusVyoP8JUgA5e7HxpadlW4dPV4QT3Xyz7o66OCdtvAxSit_4RRZJF1FHhaeX0vH7xFOy-LJu8gBKZbVvqlZGXtbBxQVhjIgiRrSrtU1FO64UoJRoLkBAcqrhXydUehZHVoL48dboSG0Df4qcvxMDQIMbjqrz6yPFA2VGTeGNdbwNYWcCyieC8cQ3E8ZMeHjcuwGDtPmyRbPY0XzscjuJh8q7hGD6H1X14HLaw9jre75h-"
              />
              <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full ring-2 ring-white">
                LVL 15
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Chef Alex Rivera</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                24 Badges Earned • Master Cook
              </p>
            </div>
            <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg text-sm shadow-sm active:scale-95 transition-transform">
              REDEEM
            </button>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Progress to Level 16
              </span>
              <span className="text-xs font-bold text-brand-green">
                750 / 1000 XP
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
              <div className="bg-brand-sage h-full w-[75%] rounded-full"></div>
            </div>
            <p className="text-[11px] mt-2 text-slate-500 italic">
              Complete 2 more recipes to reach the next level!
            </p>
          </div>
        </section>

        <main className="p-4 space-y-8 pb-24">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-brand-green font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined">restaurant</span>{' '}
                Master Chef
              </h3>
              <span className="bg-brand-sage/20 text-brand-green text-xs font-bold px-2 py-1 rounded">
                3/5 Unlocked
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                <div className="size-14 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-orange-500 text-3xl">
                    skillet
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">Sauté Specialist</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Cooked 50 stir-fry dishes perfectly.
                  </p>
                </div>
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                <div className="size-14 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-500 text-3xl">
                    bakery_dining
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">Rising Dough</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Baked your first 10 artisan loaves.
                  </p>
                </div>
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
              </div>

              <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-xl shadow-sm border border-dashed border-slate-200 dark:border-slate-600 flex items-center gap-4 grayscale opacity-70">
                <div className="size-14 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-400 text-3xl">
                    outdoor_grill
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">Pitmaster</h4>
                  <p className="text-xs text-slate-400 italic">
                    Locked: Master 5 BBQ recipes.
                  </p>
                </div>
                <span className="material-symbols-outlined text-slate-300">
                  lock
                </span>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-brand-green font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined">groups</span> Social
                Butterfly
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                <div className="size-14 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-pink-500 text-3xl">
                    favorite
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">Recipe Critic</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Left 25 helpful reviews for others.
                  </p>
                </div>
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-brand-green font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined">eco</span> Healthy
                Eater
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                <div className="size-14 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green-600 text-3xl">
                    nutrition
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">Veggie Voyager</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Cooked 7 plant-based meals in a row.
                  </p>
                </div>
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
              </div>
            </div>
          </section>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-brand-green text-white/70 py-2 px-4 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
          <a className="flex flex-col items-center gap-1 flex-1" href="#">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </a>
          <a className="flex flex-col items-center gap-1 flex-1" href="#">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-[10px] font-medium">Recipes</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 flex-1 text-white"
            href="#"
          >
            <span className="material-symbols-outlined font-bold">
              emoji_events
            </span>
            <span className="text-[10px] font-bold">Awards</span>
          </a>
          <a className="flex flex-col items-center gap-1 flex-1" href="#">
            <span className="material-symbols-outlined">group</span>
            <span className="text-[10px] font-medium">Community</span>
          </a>
          <a className="flex flex-col items-center gap-1 flex-1" href="#">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </a>
        </nav>
      </div>
    </>
  );
}
