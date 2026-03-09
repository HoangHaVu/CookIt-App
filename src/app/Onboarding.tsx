import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-[480px] mx-auto shadow-2xl">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-brand-green rounded-b-[5rem] shadow-2xl z-0"></div>

      <main className="relative z-10 flex flex-col items-center flex-1 pt-12">
        {/* Header Decor */}
        <div className="flex items-center justify-between w-full px-8 mb-12">
          <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-xl border border-white/20">
            <span className="material-symbols-outlined font-black">restaurant</span>
          </div>
          <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">CookIt! v2.0</span>
          <div className="w-12"></div>
        </div>

        {/* Hero Image Container */}
        <section className="w-full px-8">
          <div className="relative group aspect-[4/5] overflow-hidden rounded-[4rem] border-8 border-white dark:border-slate-800 shadow-2xl shadow-brand-green/20">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
            <img
              alt="Gourmet pasta"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-10000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCliql4PoGITdQGWftoRuVlYOZku7bxn1rRBW0WByhJ95jXY02ELzzyBTaJJQ9zOYr2Gx-Phx4d2JPHjraX_VHdFsI3BU8pLoaQPDxZR-u3G05qQaOM4kING-Rq3nnYGa-fye-rr1WW7srhkl-wa9lYB0aep2JkwnqV4YeSBrSXrGlCPSCmCUxgX8t_xPh2bodXuAm866cBo472qAL9CRP2C3Bg9FQ8txmThfe5xG1fyYB-aMWLRQzz0okLeCuqDpygAAm8WImnqsN7"
            />
            <div className="absolute bottom-10 left-10 p-2 z-20">
              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="size-10 rounded-2xl border-4 border-white bg-slate-200 shadow-lg"></div>
                ))}
                <div className="size-10 rounded-2xl border-4 border-white bg-primary text-white flex items-center justify-center text-[10px] font-black shadow-lg">
                  +1k
                </div>
              </div>
              <p className="text-white text-[10px] font-black uppercase tracking-widest shadow-sm">
                Join 50,000+ home chefs
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="flex flex-col items-center px-10 pt-16 pb-12 bg-white dark:bg-slate-900 mt-[-4rem] rounded-t-[4rem] w-full flex-1 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100 text-center uppercase tracking-tighter leading-[0.9] mb-6">
            Cook, Share, <br />
            <span className="text-primary italic underline decoration-brand-green/30 decoration-8 underline-offset-8">Inspire</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 text-center leading-relaxed mb-10 max-w-[280px]">
            Your cloud-based digital cookbook <br />
            sharing recipes with the world.
          </p>

          <div className="flex gap-3 mb-12">
            <div className="h-2 w-8 rounded-full bg-primary shadow-lg shadow-primary/20"></div>
            <div className="h-2 w-2 rounded-full bg-slate-100 dark:bg-slate-800"></div>
            <div className="h-2 w-2 rounded-full bg-slate-100 dark:bg-slate-800"></div>
          </div>

          <div className="w-full space-y-4">
            <button
              onClick={() => navigate('/signup')}
              className="w-full h-20 bg-primary hover:bg-orange-600 text-white font-black rounded-[2rem] transition-all shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] uppercase tracking-widest text-lg hover:-translate-y-1 active:scale-95"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full h-20 bg-slate-50 dark:bg-slate-800 text-slate-400 font-black rounded-[2rem] border-4 border-slate-100 dark:border-slate-800 transition-all hover:bg-slate-100 dark:hover:bg-slate-700 uppercase tracking-[0.4em] text-xs active:scale-95"
            >
              Sign In
            </button>
          </div>

          <div className="mt-10">
            <button className="flex items-center gap-2 group">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 group-hover:text-brand-green transition-colors">Browse as Guest</span>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-brand-green transition-all font-black group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
