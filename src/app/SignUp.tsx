import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <header className="bg-brand-green text-white pb-12 px-6 pt-12 rounded-b-[3rem] shadow-2xl relative z-10">
        <PageHeader title="Sign Up" transparent={true} />
        <div className="mt-8 text-center px-4">
          <h2 className="text-3xl font-black leading-tight mb-2 tracking-tighter uppercase">
            Join the <span className="text-primary italic">Kitchen</span>
          </h2>
          <p className="text-white/70 font-bold uppercase tracking-widest text-[9px]">
            Start your culinary adventure today.
          </p>
        </div>
      </header>

      <main className="flex-1 px-8 py-10 space-y-10 pb-40 -mt-8 relative z-20">
        {/* Hero Section */}
        <section className="relative group overflow-hidden rounded-[2.5rem] h-44 shadow-2xl border-4 border-white dark:border-slate-800 shadow-brand-green/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 transition-opacity"></div>
          <img
            alt="Gourmet food"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKBkLUv6BsUpkAm3QMkMJUdURg3_nDvtKo8q2GBFma8wOltKKSeB3lHeAdDb40cLw90yUkZ1JWIuIghm403uwbgEE8sFc-CVJYuHB0U3nqcaUDfFKxcoz2h8RV8WmmzZzJpljahqmvOROTuIFWHcgYAX4NFeClk8MlZI2WaYrT4BjoG9FUi51PE1VdQurCoSzoAqbyWVCxPEmN7pT3PGbsRu9NzN1DnvSB7LbDBiSZII8X8JelG4TUjX9JypGiPHoEwZyf4-OkTqMC"
          />
        </section>

        {/* Form Card */}
        <section className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 shadow-xl border-2 border-slate-50 dark:border-slate-800 space-y-6">
          <label className="block group">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-brand-green transition-colors ml-1 block mb-3">
              Full Name
            </span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-green font-black">
                person
              </span>
              <input
                className="w-full h-14 pl-14 pr-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-0 focus:border-brand-green focus:bg-white dark:focus:bg-slate-800 transition-all font-bold text-sm text-slate-900 dark:text-slate-100 shadow-inner"
                placeholder="Enter your full name"
              />
            </div>
          </label>

          <label className="block group">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-brand-green transition-colors ml-1 block mb-3">
              Email Address
            </span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-green font-black">
                mail
              </span>
              <input
                className="w-full h-14 pl-14 pr-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-0 focus:border-brand-green focus:bg-white dark:focus:bg-slate-800 transition-all font-bold text-sm text-slate-900 dark:text-slate-100 shadow-inner"
                placeholder="example@email.com"
                type="email"
              />
            </div>
          </label>

          <label className="block group">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-brand-green transition-colors ml-1 block mb-3">
              Password
            </span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-green font-black">
                lock
              </span>
              <input
                className="w-full h-14 pl-14 pr-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-0 focus:border-brand-green focus:bg-white dark:focus:bg-slate-800 transition-all font-bold text-sm text-slate-900 dark:text-slate-100 shadow-inner"
                placeholder="Create a strong password"
                type="password"
              />
              <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 cursor-pointer font-black">
                visibility
              </span>
            </div>
          </label>

          <div className="pt-2">
            <label className="flex items-start gap-4 cursor-pointer group">
              <input
                className="mt-1 size-5 rounded-lg border-2 border-slate-100 text-brand-green focus:ring-brand-green bg-slate-50"
                type="checkbox"
              />
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                I agree to the <span className="text-primary font-black hover:underline cursor-pointer">Terms of Service</span> and <span className="text-primary font-black hover:underline cursor-pointer">Privacy Policy</span>.
              </p>
            </label>
          </div>

          <button className="w-full h-20 bg-primary hover:bg-orange-600 text-white font-black rounded-3xl transition-all shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] mt-4 hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-lg">
            Create Account
          </button>
        </section>

        {/* Social Auth */}
        <section className="space-y-6">
          <div className="relative flex items-center">
            <div className="flex-grow border-t-2 border-slate-100 dark:border-slate-800"></div>
            <span className="flex-shrink mx-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
              Or Social Entry
            </span>
            <div className="flex-grow border-t-2 border-slate-100 dark:border-slate-800"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 h-16 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95">
              <span className="font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 h-16 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95">
              <span className="font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400">Apple</span>
            </button>
          </div>
        </section>

        <section className="text-center pt-4 pb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-black text-brand-green hover:underline underline-offset-4"
            >
              Log In
            </button>
          </p>
        </section>
      </main>
    </div>
  );
}
