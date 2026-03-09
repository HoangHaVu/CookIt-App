export default function ChallengeLeaderboard() {
  return (
    <>
      <div className="max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden">
        <header className="flex items-center p-6 justify-between bg-brand-green text-white curved-header relative z-10">
          <button className="size-10 flex items-center justify-center rounded-full transition-colors text-white/80">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Summer Grilling Challenge
          </h1>
          <button className="size-10 flex items-center justify-center rounded-full transition-colors text-white/80">
            <span className="material-symbols-outlined">share</span>
          </button>
        </header>
        <div className="px-4 py-2">
          <div className="flex bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl mt-4">
            <button className="flex-1 py-2.5 text-sm font-bold rounded-lg bg-white dark:bg-slate-800 shadow-sm text-primary">
              Recipes
            </button>
            <button className="flex-1 py-2.5 text-sm font-bold text-slate-500 dark:text-slate-400">
              Creators
            </button>
          </div>
        </div>
        <div className="flex items-end justify-center gap-2 px-4 py-8 bg-gradient-to-b to-transparent from-brand-green/5">
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <div
                className="size-20 rounded-full border-4 border-slate-300 bg-cover bg-center overflow-hidden"
                data-alt="Profile photo of a professional female chef"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBl7eLy0Lu7BiHboGcDQaPCrvgHt2kgz1qZpbhsxPge6rINs7qAfdE44pstLoB7wN1QToaeWKvCgp5Ji3-TBzK8mOlGQj-96XWexpwFDbKurryBGecCoz_DbbshdoQh1d9bMtSkoF3H3SzgXdXCkoPutHrGUCAljlwbyqprDu4FS9qNmzD_R85Ux_lnun0Pxf1RfIM2-E7rIU9Ckuacm5niNjMiiLbCfyfZsAfboBXC1LAvEJplk791kmvgsaDdv42cFLwpxIX8bQR9')",
                }}
              ></div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-slate-300 text-slate-800 text-xs font-bold px-2 py-0.5 rounded-full">
                2
              </div>
            </div>
            <p className="text-sm font-bold">Sarah K.</p>
            <p className="text-xs text-slate-500">2.4k pts</p>
          </div>

          <div className="flex flex-col items-center gap-2 -translate-y-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute -top-8 left-1/2 -translate-x-1/2 text-primary text-3xl animate-bounce">
                emoji_events
              </span>
              <div
                className="size-24 rounded-full border-4 border-primary bg-cover bg-center overflow-hidden shadow-lg shadow-primary/20"
                data-alt="Profile photo of a smiling male chef"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkro-U_wTAr5lYmnGFH-9eB2A0khg_iWq1fs3ea6MhOJ5z1GwnscIHUU4LUtckUt45fLZZJ4IzaIWGjSGLLF9vMk6KnLDeEYR9HWOxUwOYa1SVJtR_SE20neQ54wwkza84kXglTxhJFx6kd-guJF6gy5VQnlhZ9IIg6N8Z_Xx6pCj7ySqnq4mcyxT4zEkt_6QI9KpGhbfwxIVldnVeJhps57eOD6ynDilSr089YZ7EaOZCdNnuFbQh4Yny2w_50aCa6YpHxyHJLNRa')",
                }}
              ></div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                1
              </div>
            </div>
            <p className="text-base font-bold">Chef Mike</p>
            <p className="text-sm text-primary font-semibold">3.1k pts</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <div
                className="size-20 rounded-full border-4 border-amber-600/30 bg-cover bg-center overflow-hidden"
                data-alt="Profile photo of a young food blogger"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDz7O9XMhurK7--P5whHIMKs_LK_SMobK-Y79YUOjCDiEW6PkfAG-rFCBjOftJUW66_ogewEyyi4XSisNP3VPvhwEl74TmczCuyw48COuEvl7lL2MVJc8t3Ki7lxaN5mlpzPD6R7rFE3Zr2kgpvLxjak4yrEk85y7k4PT5po8PA-ZHL_q5qSrWtYtzvzxTIvkwY4lhkizNnpqvt0WIaqK3R0fBhquJjVNz_rEy9_xTbpHSK6LSa-JCUNTBIPn6KSNKKJoZeuq3t7buq')",
                }}
              ></div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-amber-600/40 text-slate-800 text-xs font-bold px-2 py-0.5 rounded-full">
                3
              </div>
            </div>
            <p className="text-sm font-bold">Anna L.</p>
            <p className="text-xs text-slate-500">1.8k pts</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 p-4">
          <div className="flex-1 min-w-[100px] flex flex-col gap-1 rounded-xl p-4 bg-primary/5 dark:bg-primary/10 border border-primary/10">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">
              Entries
            </p>
            <p className="text-xl font-bold leading-tight">1,248</p>
          </div>
          <div className="flex-1 min-w-[100px] flex flex-col gap-1 rounded-xl p-4 bg-primary/5 dark:bg-primary/10 border border-primary/10">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">
              Remaining
            </p>
            <p className="text-xl font-bold leading-tight">3d 12h</p>
          </div>
          <div className="flex-1 min-w-[100px] flex flex-col gap-1 rounded-xl p-4 bg-primary/5 dark:bg-primary/10 border border-primary/10">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">
              Prize
            </p>
            <p className="text-xl font-bold leading-tight text-primary">$500</p>
          </div>
        </div>
        <div className="flex-1 p-4 space-y-3">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 px-1 text-lg mb-2">
            Full Rankings
          </h3>
          <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <span className="font-bold text-slate-400 w-4">4</span>
            <div
              className="size-12 rounded-full bg-cover bg-center"
              data-alt="Profile of chef 4"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHRyYMAnHXl9eNDfdWROix7-2byvqcrE1D4oiW9MPffGu_aGYjgPoq8obQGsg4o-BL_qznEDMNNu9JIOXRmO1xT0hRM-SZlB8H_Rjv_4jRf5KJoOPCkThKy0mod1uHzNqfw9t4n1j6grF4G1El_jrlRfeXZgqNr5E4VPqzyL6bV1K7tEj7s1No2iOuMzzAZJxJb2RF3iM7aW34Hq9KgPvIABosIay3RBJQp0WRHnxplCu-bfA725Nv6HBUDt8-ZZt5ao6oq-6KdkeY')",
              }}
            ></div>
            <div className="flex-1">
              <p className="font-bold text-sm">David Chen</p>
              <p className="text-xs text-slate-500">Spicy BBQ Wings</p>
            </div>
            <p className="font-bold text-sm">1,540</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <span className="font-bold text-slate-400 w-4">5</span>
            <div
              className="size-12 rounded-full bg-cover bg-center"
              data-alt="Profile of chef 5"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvmfIOlQDF8O_XENkfDeGS5i66QmTYdO3CwvSQJJS-FLrSyZIUu94xUmY9RviixeWAjglYf2yr7TArKdLSZgynFP2vbb4_xrrRsrZabpUGGTdQ0mPs8ZZT3_ooodnV9Y3iOJxjGakvU4yC-HNgBvaYan0tNTKP7FjmPbtxRNa4vNIBniWpe8j_GeKHUd52defFhS7CPSiPdLGX76Pd9ZdkPLB5XCkK_n0HvyBM6RBxdNOFmO7YClieo5k3ge11jbu6S_tZErJ8OFCe')",
              }}
            ></div>
            <div className="flex-1">
              <p className="font-bold text-sm">Maria Garcia</p>
              <p className="text-xs text-slate-500">Grilled Peach Salad</p>
            </div>
            <p className="font-bold text-sm">1,420</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <span className="font-bold text-slate-400 w-4">6</span>
            <div
              className="size-12 rounded-full bg-cover bg-center"
              data-alt="Profile of chef 6"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRXBcj1VhPi6iztOyYT-CntPqhOrV2oBt3JE3DEzq4xpBcII2c6Aeo8tVdZS6Q4xfK19-2NTYApfYWjXTFvdlHfIbW2y0Qn2hxRCJtdCGBq_4Y-ubp-uhi6DlnWk4W_W-UlyG7hlNAeZ-U7enZSDQb-HnDLJtOJ561L0PbKuTaGYT6hX1DHX8nJ5dYzE6DNX8zjG9oaNx4QzUqSyo0irUbv-aHNfcEPJQ8LBzlYlHaB09gM-6hq4fz527eJQEkFees6l2TgiV9vZXS')",
              }}
            ></div>
            <div className="flex-1">
              <p className="font-bold text-sm">James Wilson</p>
              <p className="text-xs text-slate-500">Smoked Brisket</p>
            </div>
            <p className="font-bold text-sm">1,210</p>
          </div>
        </div>
        <nav className="fixed bottom-0 left-0 right-0 bg-brand-green text-white/60 px-6 py-4 flex items-center justify-between z-50 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(14,117,71,0.2)]">
          <a className="flex flex-col items-center gap-1" href="#">
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">home</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
              Home
            </span>
          </a>
          <a className="flex flex-col items-center gap-1" href="#">
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">search</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
              Explore
            </span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-brand-green"
            href="#"
          >
            <div className="nav-pill px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined fill-1">
                emoji_events
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Challenge
            </span>
          </a>
          <a className="flex flex-col items-center gap-1" href="#">
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">restaurant_menu</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
              Cook
            </span>
          </a>
          <a className="flex flex-col items-center gap-1" href="#">
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">person</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
              Profile
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}
