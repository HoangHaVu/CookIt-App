export default function PantryInventory() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
        <header className="flex items-center bg-nav-bg p-4 pb-4 justify-between sticky top-0 z-10 shadow-md">
          <div className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-white">menu</span>
          </div>
          <h2 className="text-white">My Pantry</h2>
          <div className="flex size-10 items-center justify-end">
            <button className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-white">notifications</span>
            </button>
          </div>
        </header>

        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-4 rounded-l-xl">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 pl-2 text-base font-normal leading-normal"
                placeholder="Search pantry items..."
                value=""
              />
            </div>
          </label>
        </div>

        <div className="flex gap-3 px-4 py-2 overflow-x-auto custom-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary text-white px-5 shadow-sm">
            <span className="text-sm font-semibold leading-normal">All</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-accent-sage/20 text-nav-bg px-5 border border-accent-sage/30">
            <span className="text-sm font-medium leading-normal">Grains</span>
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-accent-sage/20 text-nav-bg px-5 border border-accent-sage/30">
            <span className="text-sm font-medium leading-normal">Spices</span>
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-accent-sage/20 text-nav-bg px-5 border border-accent-sage/30">
            <span className="text-sm font-medium leading-normal">Canned</span>
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>
        </div>

        <main className="flex-1 overflow-y-auto px-4 pt-4 pb-24">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">
                Grains
              </h3>
              <span className="text-xs font-semibold text-nav-bg bg-accent-sage px-2 py-1 rounded-full uppercase tracking-wider">
                4 Items
              </span>
            </div>
            <div className="grid gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    data-alt="Close up of uncooked white rice grains"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUBCyeraeUUlEW4SMEsN-_A9VNrV1rAD2m7mXFHBMIbkZooRicyrYem6-6zRQGzTOqjTDI0evhe7DkJGd3RsD1TwYjaLaPAfS3PG2WYUPsMrztc5DpS3ix2MpU6VqUjReJXZ-paXiDNsn9y_VCYvz3HZfgMmhudNqWP8uISKSwHATMQjsbsI6nwVgIRVHnptVCihHFZjWujQrEa17Q1TFjpDZAdEQ37nSIyVqt3wpyJHvXPddoizDBW4_UYGYnum8qmKeKaVf1PhDN"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    Basmati Rice
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    2.5 kg left
                  </p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2">
                    <div className="bg-primary h-full rounded-full"></div>
                  </div>
                </div>
                <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    data-alt="Organic rolled oats in a jar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuwAWl79ws80HyIpw7BvHMxrWVf2cDIdWs2jGMp-i0XxckVL01zFiLtu2vwSenaGcmCOkXsmbH7BRsDIkRhO_XpwXKnbbRTh75cs3_PlXd6Zj4NQqERPQuWm4g-MWXBgO03IMN62pjk1Ku7w7fYoz4shYhVgsW5dtUj9nPnxU2XHqs1ouHIHvRd-rigtYM8woL7hI_alQJ56IVMYqhB1_69HKuY6O1N_IFIAn-wkXDYe32iLW0jdWistZV0Lm8RE01iya0KrA6p0wr"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    Rolled Oats
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    0.2 kg left
                  </p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2">
                    <div className="bg-red-500 h-full rounded-full w-[10%]"></div>
                  </div>
                </div>
                <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">
                Spices
              </h3>
              <span className="text-xs font-semibold text-nav-bg bg-accent-sage px-2 py-1 rounded-full uppercase tracking-wider">
                12 Items
              </span>
            </div>
            <div className="grid gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    data-alt="Cinnamon sticks and ground powder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIJI9B1AhTtQfMwBaj8PwNRrj8hpa9H3pCpfDmbksLnyp7F7QnW5iVwqloldM7j3yQSINuL068KLG7WcQkbP0kQEFiNiLT2GMKGk6xmDDJft6P-eaStPwjwdHFs47v2-Yz0HzRRA3BGJh5degEcqKUSuv_lp7zmbDuav6DwxrM-8LO145dHE6D93pZ4wDCtzKxMvCLs_21BoGkQ9huqu80XKv_oTINIk2fMDTrj7zVj2-QOwhezvrXvNevLtzzzTkCAv-BjwMRr1iD"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    Ground Cinnamon
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Full jar
                  </p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2">
                    <div className="bg-green-500 h-full rounded-full w-[95%]"></div>
                  </div>
                </div>
                <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">
                Canned Goods
              </h3>
              <span className="text-xs font-semibold text-nav-bg bg-accent-sage px-2 py-1 rounded-full uppercase tracking-wider">
                6 Items
              </span>
            </div>
            <div className="grid gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    data-alt="Canned diced tomatoes"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg5KRE44UmQ4yKyPXe5T9qINbQwnLaFlL8SR5WgMClx9bI3iix5QaC9V9r72mXJYwydoaCq23tQJax3KKlmu_TKInVERF9W3hdCRM5HnxNAFfPrIhijUejB4XBfvh5tVTMWRd48bLa3Qy7wr7ux6JyveF0xL0yp8cdBCdKQ41gmAWGvE48Z0Gdm6_Ahowtkst__3Da7iHod0414X44addXeDSN9wORIkzP8F0McF534rnYi7KP4tlATeZikBAhTSxO93mhBGnbgT0N"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    Diced Tomatoes
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    3 cans
                  </p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2">
                    <div className="bg-primary h-full rounded-full"></div>
                  </div>
                </div>
                <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        <button className="absolute bottom-24 right-6 size-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>

        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-nav-bg px-6 pb-6 pt-3 flex justify-between items-center z-30">
          <a
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-[10px] font-medium">Planner</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-[10px] font-medium">Recipes</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-white" href="#">
            <span className="material-symbols-outlined fill-[1]">
              inventory_2
            </span>
            <span className="text-[10px] font-bold">Pantry</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white"
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
