export default function TrendingCreators() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <header className="bg-brand-deep text-white px-4 py-4 sticky top-0 z-50 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 cursor-pointer">
              <span className="material-symbols-outlined">arrow_back</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              Trending Creators
            </h1>
            <div className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 cursor-pointer">
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>
        </header>

        <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="flex px-4 overflow-x-auto no-scrollbar">
            <a
              className="flex-1 py-4 text-center text-sm font-bold border-b-2 border-transparent text-slate-500"
              href="#"
            >
              Daily
            </a>
            <a
              className="flex-1 py-4 text-center text-sm font-bold border-b-2 border-primary text-brand-deep"
              href="#"
            >
              Weekly
            </a>
            <a
              className="flex-1 py-4 text-center text-sm font-bold border-b-2 border-transparent text-slate-500"
              href="#"
            >
              Monthly
            </a>
            <a
              className="flex-1 py-4 text-center text-sm font-bold border-b-2 border-transparent text-slate-500 whitespace-nowrap"
              href="#"
            >
              All Time
            </a>
          </div>
        </nav>

        <main className="flex-1 p-4 space-y-4">
          <h2 className="text-lg font-bold text-brand-deep dark:text-brand-sage">
            Top Ranked
          </h2>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="relative">
              <div className="h-16 w-16 rounded-full bg-slate-200 overflow-hidden border-2 border-brand-sage">
                <img
                  alt="Alex Rivera Profile"
                  className="h-full w-full object-cover"
                  data-alt="Portrait of a creative professional man"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1tjirXIBma47XeN2ZRjF8u3vhVtdS2pF2koMStbbihJfmeQy4RwSyWU7f8OBg-ziWlV7OZh4uY6s-fFLB3bdxPusvB5GvCDKDIuwIWkJPdcM5ni0JtLH85BAKl9fsguC1YFFcxwGk3EhAgr_FDiNCWQn1R-XA2ONBMEbDRFZUmvg4BgdHfclg3jLiC6UCeffX50LVdfJJR_zJ9_3EIFbFTa4MHUikEDRLl2kxoS_OSzYxlgnOD-adXX0dZ3mEndbVKB2CCwIFjf5o"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand-sage text-brand-deep text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                #1
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">
                Alex Rivera
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                @arivera • 1.2M followers
              </p>
            </div>
            <button className="bg-primary text-white text-sm font-bold px-6 py-2 rounded-xl hover:bg-orange-600 transition-colors">
              Follow
            </button>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="relative">
              <div className="h-16 w-16 rounded-full bg-slate-200 overflow-hidden border-2 border-brand-sage">
                <img
                  alt="Sarah Chen Profile"
                  className="h-full w-full object-cover"
                  data-alt="Portrait of a smiling young woman"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrajq3Nlr2OWCUsHh3ke7nAjqBoGAGn3dcm0XeDuc6jYRw8S8POm1DQqRKqQw_HwOToq9sp5TZdAa7f3VANWGFTA6lIeEy86jTN_lm7lzU-5Q5-RpoXaDxmeHoGU8i9_EenRexJrewzZF7smKRO5HkGaqWlbHBzO_E9DYOlsKiWCbyzuteLbXRqNJn3rvpIwrgJxEvTWrMesg9Ei2ihb8NOFE87uOGv5SmVYWrN3jRm85nRGwtepm4OBPOSyPUi1c5k6LKNtVDN7Ph"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand-sage text-brand-deep text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                #2
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">
                Sarah Chen
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                @sarahc • 890K followers
              </p>
            </div>
            <button className="bg-primary text-white text-sm font-bold px-6 py-2 rounded-xl hover:bg-orange-600 transition-colors">
              Follow
            </button>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="relative">
              <div className="h-16 w-16 rounded-full bg-slate-200 overflow-hidden border-2 border-brand-sage">
                <img
                  alt="Marcus Jones Profile"
                  className="h-full w-full object-cover"
                  data-alt="Portrait of a professional designer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1u8rq0SKR_pYYLYn3freCcNI9cN6YgAoOhZTTh5knPdOPRRYEZ86hvZgFfllD9KFnzBZnXopTpf2f0UVQ7XeITF4d2qRGX_SyAOqfi4h6cOyt6_utARc3GLa2qwEHbRiBHSoiliT8vsbIySLkmcysQxLes-W5oAU2QlEwfkOZT_H1SgzAu7qE4weknFTXAPrFVb4XePLSWNmbPxkPtbsj5rN-28Ji-fuEAZDvnTA60NLsXdYNcn_UKH5jAsWtRV7ylZTB92ROCxjr"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand-sage text-brand-deep text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                #3
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">
                Marcus Jones
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                @mjones • 750K followers
              </p>
            </div>
            <button className="bg-primary text-white text-sm font-bold px-6 py-2 rounded-xl hover:bg-orange-600 transition-colors">
              Follow
            </button>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="relative">
              <div className="h-16 w-16 rounded-full bg-slate-200 overflow-hidden border-2 border-transparent">
                <img
                  alt="Elena Glass Profile"
                  className="h-full w-full object-cover"
                  data-alt="Portrait of an artist woman"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALBS2kL84KnsmRGd1RzOu960uIIR-cxWIsPvTR7dO075b-cQgIEKua4fXYH2_vTp36kIxKDtTzA8h1Uxn7CMTqmYipr1k5eSh41VHmksAl1R3WOCrEO372Kj3O19izbAUDjiFyiBHsYsRvMVlfpRYyp-XmVqHloEx6RZqnk0Y7EjbFizSsZHrNR2wpvwHyxHe9b6IjUMZHPzjeAMKsFleDHbPcKF5A6MMKae-TQAfaLQ6oRILW7sgrlP2_W1JtxSAX73Srk9TWDSns"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand-sage text-brand-deep text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                #4
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">
                Elena Glass
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                @eglass • 640K followers
              </p>
            </div>
            <button className="bg-slate-100 dark:bg-slate-800 text-brand-deep dark:text-slate-100 text-sm font-bold px-6 py-2 rounded-xl transition-colors">
              Following
            </button>
          </div>
          <div className="pt-4">
            <h2 className="text-lg font-bold text-brand-deep dark:text-brand-sage mb-4">
              On the Rise
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                <img
                  className="w-20 h-20 rounded-full mx-auto mb-2 object-cover border-2 border-brand-sage"
                  data-alt="Creator profile picture small"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOwMu5YJOreBWH0J_oD00XaM6fLJb4kBCO9M79YNO8BmK2mPo3lQOzlPxLbP1dsVWz3YaoeMrAEs2Woza2NMrNsAdI7_kjtBg-VA1mGJrir3tgrB4Y-yBZ3uXT9p0z_gpcMRTFwyotXMVuzM9kVCNR1dXHVVl8KYzlDCEoDPiMlie9EeRzosCVWhkvAKfJFHoF-c2G6tr4p-jsF62p2AhjriMJSqAPABjINUnimM8zC68deodejPbRxNEN14inDrKoIpgMdB5_NZOq"
                />
                <p className="font-bold text-sm truncate">Jordan Smith</p>
                <p className="text-xs text-primary font-medium mb-3">
                  +24% this week
                </p>
                <button className="w-full bg-primary text-white text-xs font-bold py-2 rounded-lg">
                  Follow
                </button>
              </div>
              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                <img
                  className="w-20 h-20 rounded-full mx-auto mb-2 object-cover border-2 border-brand-sage"
                  data-alt="Creator profile picture small female"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKpIRVVYyTy4vmdmhORDtcQ1SZEXO0K4FKW20gmNLKWNASCARCXRP9vGscm0o1SHOw75-8wxorvO319Xqa44b275TssnZ1eQB7xWoDRF7-eXJxw5dwkkE1VTdGVIJQV7gguffrxwRJZN6RpBYzRys39Ys6wK-rCv-JdyPoRP78eQvnYHghXYAtKq4D6R2hd3NmUark_zXzZmfHyHuJka5mxdVAzRq2iZU0pwU8cKhPRo7AamOLf19VvOx-DtcWP4cpv1SdPj8d2TNR"
                />
                <p className="font-bold text-sm truncate">Maya Gupta</p>
                <p className="text-xs text-primary font-medium mb-3">
                  +18% this week
                </p>
                <button className="w-full bg-primary text-white text-xs font-bold py-2 rounded-lg">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </main>

        <div className="h-20"></div>

        <footer className="fixed bottom-0 w-full bg-brand-deep text-white border-t border-white/10 px-2 py-3 z-50">
          <div className="flex items-center justify-around max-w-lg mx-auto">
            <a
              className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
              href="#"
            >
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium leading-none">Home</span>
            </a>
            <a
              className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
              href="#"
            >
              <span className="material-symbols-outlined">explore</span>
              <span className="text-[10px] font-medium leading-none">
                Discover
              </span>
            </a>
            <a className="flex flex-col items-center gap-1" href="#">
              <div className="bg-primary p-2 rounded-full -mt-8 border-4 border-brand-deep shadow-lg">
                <span className="material-symbols-outlined text-white">
                  add
                </span>
              </div>
              <span className="text-[10px] font-medium leading-none">
                Create
              </span>
            </a>
            <a
              className="flex flex-col items-center gap-1 text-brand-sage"
              href="#"
            >
              <span className="material-symbols-outlined fill-current">
                trending_up
              </span>
              <span className="text-[10px] font-medium leading-none">
                Trending
              </span>
            </a>
            <a
              className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
              href="#"
            >
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-medium leading-none">
                Profile
              </span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
