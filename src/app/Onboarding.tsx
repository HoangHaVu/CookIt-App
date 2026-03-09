export default function Onboarding() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
        <header className="bg-brand-green text-white curved-header px-6 relative pb-6 pt-8 mb-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10">
              <span className="material-symbols-outlined text-white">
                chevron_left
              </span>
            </button>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
              Premium Recipes
            </h2>
            <div className="w-10"></div>
          </div>
        </header>

        <div className="@container">
          <div className="@[480px]:px-4 px-0 px-6">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-3xl min-h-[40vh] shadow-xl relative"
              data-alt="A beautifully plated gourmet pasta dish with herbs."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCliql4PoGITdQGWftoRuVlYOZku7bxn1rRBW0WByhJ95jXY02ELzzyBTaJJQ9zOYr2Gx-Phx4d2JPHjraX_VHdFsI3BU8pLoaQPDxZR-u3G05qQaOM4kING-Rq3nnYGa-fye-rr1WW7srhkl-wa9lYB0aep2JkwnqV4YeSBrSXrGlCPSCmCUxgX8t_xPh2bodXuAm866cBo472qAL9CRP2C3Bg9FQ8txmThfe5xG1fyYB-aMWLRQzz0okLeCuqDpygAAm8WImnqsN7')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-6 pt-10 pb-4">
          <h1 className="dark:text-slate-100 tracking-tight text-[36px] font-extrabold leading-tight text-center pb-3 text-brand-green">
            Cook, Share, <span className="text-primary">Inspire</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed text-center max-w-sm">
            Your cloud-based digital cookbook for sharing recipes with the
            world. Explore thousands of hand-picked culinary delights.
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
          <div className="h-2 w-6 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-brand-green/20"></div>
          <div className="h-2 w-2 rounded-full bg-brand-green/20"></div>
        </div>

        <div className="flex flex-col w-full px-6 gap-4 pb-12 mt-auto">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98]">
            Get Started
          </button>
          <button className="w-full font-bold py-4 rounded-xl transition-all active:scale-[0.98] bg-slate-100 text-slate-900 hover:bg-slate-200">
            Log In
          </button>
        </div>

        <div className="pb-8 text-center">
          <p className="text-sm text-brand-green font-semibold cursor-pointer">
            Browse as guest{' '}
            <span className="material-symbols-outlined text-xs align-middle">
              arrow_forward
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
