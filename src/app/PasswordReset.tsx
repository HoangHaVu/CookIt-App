import { useNavigate } from 'react-router-dom';

export default function PasswordReset() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-6 max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          alt="Kitchen background"
          className="h-full w-full object-cover scale-150 rotate-12"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWjg3vw1TzIyHdR3YFY5W-6_XU80XxYh5H4lRJwZijdVT4oc4s2JJKjGXvuksd5G35UdtqRI8tIk2O6ZPORpKxeOFakeq7z87KpcN2GJ7VA4sr7zccy53EsR22HAX9g58t6AqRpfvq8sFrzimZgDhRH78qw8sHpDYzfmXm5YsxR0ZgtYJekc3pOkOp8zoWFPTJck3LSinXltZN6opvIOrSSELgIeDDA1i_pbLvwTbG5fsbt_oaz980jZK_iESrz1Rji1QQJ1z9Gu-o"
        />
      </div>

      <main className="relative z-10 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl border-2 border-white/20 dark:border-slate-800/50">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-slate-400 hover:text-brand-green transition-all mb-10"
        >
          <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brand-green/10 transition-all">
            <span className="material-symbols-outlined text-xl font-black">arrow_back</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Return to Base</span>
        </button>

        <div className="mb-10 text-center">
          <div className="size-20 rounded-[2rem] bg-brand-green text-white flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand-green/30 rotate-3 transition-transform hover:rotate-0 cursor-pointer">
            <span className="material-symbols-outlined text-4xl font-black">lock_reset</span>
          </div>
          <h1 className="text-3xl font-black text-brand-green uppercase tracking-tighter mb-4 leading-tight">
            Reset Your <br /><span className="text-primary italic">Kitchen Key</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-relaxed max-w-[200px] mx-auto">
            Enter your email to receive a secure reset link.
          </p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-3 group">
            <label className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 group-focus-within:text-brand-green transition-colors ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-green transition-colors font-black">
                mail
              </span>
              <input
                className="w-full h-14 pl-14 pr-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-0 focus:border-brand-green focus:bg-white dark:focus:bg-slate-800 transition-all font-bold text-sm text-slate-900 dark:text-slate-100 shadow-inner"
                placeholder="chef@cookit.com"
                type="email"
              />
            </div>
          </div>

          <button className="w-full h-20 bg-primary hover:bg-orange-600 text-white font-black rounded-[2rem] transition-all shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95 uppercase tracking-tighter text-xl mt-6">
            <span>Send Reset Link</span>
            <span className="material-symbols-outlined text-3xl font-black">send</span>
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Remembered it?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-black text-brand-green hover:underline underline-offset-4"
            >
              Sign In
            </button>
          </p>
        </div>
      </main>

      {/* Brand Watermark */}
      <footer className="mt-12 flex items-center gap-4 opacity-50 relative z-10">
        <div className="size-10 rounded-xl bg-brand-green flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-xl font-black">restaurant</span>
        </div>
        <span className="text-xl font-black text-slate-900 dark:text-slate-100 tracking-tighter uppercase">CookIt!</span>
      </footer>
    </div>
  );
}
