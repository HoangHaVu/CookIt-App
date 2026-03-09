export default function HomepageGreen() {
  return (
    <>
      <header className="bg-brand-green text-white curved-header pb-16 px-6 relative mb-12 pt-12">
        <div className="mb-4">
          <h2 className="text-3xl font-bold leading-tight">
            What would you like <br />
            <span className="text-primary">to cook today?</span>
          </h2>
        </div>

        <div className="absolute -bottom-6 left-6 right-6">
          <div className="flex items-center bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-brand-green/10 p-2">
            <div className="flex-1 flex items-center px-4">
              <span className="material-symbols-outlined text-slate-400 mr-3">
                search
              </span>
              <input
                className="w-full border-none focus:ring-0 text-slate-900 dark:text-slate-100 bg-transparent py-3 placeholder:text-slate-400"
                placeholder="Search recipes, chefs..."
                type="text"
              />
            </div>
            <button className="bg-primary text-white p-3 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 pb-32">
        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-bold">Categories</h3>
            <button className="text-primary text-sm font-semibold">
              See All
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="size-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-green/20 bg-accent-light">
                <span className="material-symbols-outlined text-3xl text-brand-green">
                  restaurant
                </span>
              </div>
              <span className="text-xs font-bold text-brand-green">
                Breakfast
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="size-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  local_pizza
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                Italian
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="size-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  ramen_dining
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500">Asian</span>
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="size-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  icecream
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                Desserts
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="size-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  set_meal
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                Seafood
              </span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-bold">Recommended for you</h3>
            <button className="text-primary text-sm font-semibold">
              Refresh
            </button>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700">
              <div className="relative h-56">
                <img
                  alt="Healthy Bowl"
                  className="w-full h-full object-cover"
                  data-alt="Vibrant healthy salad bowl with salmon and avocado"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPal1VHbuNfED9ncVgsW4A8xgXIp_YxJz8Iz-vdtOQkaspVQC-yWpXgurR8vXTLgzl2q2NHEh9gQFe3H-TT_87OZQo8g3RNuDrXZeOl5ag70CLctRSdCk93IFV3_pOIEXHJ7im5_HOXoSdoECyEypxneorzqdZGGa6_SQBoY9f0ChFW78nsys7f7WHsRnf-yd85zGmc24Eo3PyhAanigxYMKcqL25iujfdGKF35NFF3tex1r57yhAidusx4qxoC3HiT5ocMpjjcxTG"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 text-primary shadow-sm">
                  <span className="material-symbols-outlined fill-1">
                    bookmark
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 bg-brand-green/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                  Easy • 20 mins
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold mb-1">
                  Miso-Glazed Salmon Bowl
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  Fresh atlantic salmon served with quinoa and seasonal greens.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">
                      star
                    </span>
                    <span className="text-sm font-bold">4.8</span>
                    <span className="text-xs text-slate-400">
                      (1.2k reviews)
                    </span>
                  </div>
                  <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700">
              <div className="relative h-56">
                <img
                  alt="Pasta dish"
                  className="w-full h-full object-cover"
                  data-alt="Creamy mushroom pasta with fresh herbs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPNqhb9s9v8sfq5rYu6Jb2T8vn61UKwzwm1zjg8XNOsVKQ0kLo60kp1K-eWjVj896Qt5OpJs_A7xIxqENpdwrRIzyV1gVRE2XAjNXuwhuMxN1HWRdAzJgnkfACUDp4Vnxoc7OdSKsW3LOXS5ifkGRZdXow3c9EXzajj2Wvr0u4cnQ7dBYR0RdR1nwCWFvyPOez6QlRt8zyobhlQP_Tj5PyEikpKoOhR73QYulYCckWweY7l4XsJXgRNeo4SEgZkWU98UY2qH_Q0eVW"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 text-slate-400 shadow-sm">
                  <span className="material-symbols-outlined">bookmark</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-brand-green/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                  Medium • 45 mins
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold mb-1">
                  Truffle Mushroom Linguine
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  Rich and creamy pasta infused with black truffle oil and wild
                  mushrooms.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">
                      star
                    </span>
                    <span className="text-sm font-bold">4.9</span>
                    <span className="text-xs text-slate-400">
                      (850 reviews)
                    </span>
                  </div>
                  <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-brand-green text-white/60 px-6 py-4 flex items-center justify-between z-50 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(26,60,52,0.3)]">
        <a
          className="flex flex-col items-center gap-1 text-brand-green"
          href="#"
        >
          <div className="nav-pill px-5 py-1 flex items-center justify-center">
            <span className="material-symbols-outlined fill-1">home</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Home
          </span>
        </a>
        <a className="flex flex-col items-center gap-1" href="#">
          <div className="px-5 py-1 flex items-center justify-center">
            <span className="material-symbols-outlined">restaurant_menu</span>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
            Recipes
          </span>
        </a>
        <a className="flex flex-col items-center gap-1" href="#">
          <div className="px-5 py-1 flex items-center justify-center">
            <span className="material-symbols-outlined">bookmark</span>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
            Saved
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
    </>
  );
}
