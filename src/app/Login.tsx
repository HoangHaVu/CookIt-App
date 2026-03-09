import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <main className="flex-1 px-8 py-12 flex flex-col gap-10">
        {/* Logo & Welcome */}
        <section className="flex flex-col items-center text-center space-y-6">
          <div className="size-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl bg-brand-green shadow-brand-green/20 rotate-3 hover:rotate-0 transition-transform cursor-pointer">
            <span className="material-symbols-outlined !text-4xl font-black">
              restaurant_menu
            </span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-slate-100 uppercase">
              Welcome <span className="text-brand-green">Back</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Log in to continue your culinary journey
            </p>
          </div>
        </section>

        {/* Hero Card */}
        <section className="relative group overflow-hidden rounded-[2.5rem] h-52 shadow-2xl border-4 border-white dark:border-slate-800 shadow-brand-green/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 transition-opacity"></div>
          <div
            className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtKvrh7kku7-EmKTq2592tlU-Qs1bOa04vlRikDagzF-_oaD_lngxDgys9VXalNRS33I7xpf8ATwY4xbXM456hXhUPTDh0Jlh0NEZqdZ9TugNragG4fYtFag-C3B900LBJAnEVYJnnhVDhKJ3-tKY65yf_TLsTccaKA4pIUAwer9EgHPUAKWqmirKN4AzP8t4PPV0I769trc3KCRXCJOxC6Nh5Xt5r7ELrZ4sYufYgfxNFYPi9_td0C7EJeGnl8U1tD0Fd22cS621G')",
            }}
          ></div>
          <div className="absolute bottom-6 left-6 z-20">
            <span className="text-white text-[10px] font-black uppercase tracking-widest bg-brand-green px-5 py-2 rounded-xl shadow-lg shadow-black/20 border border-white/20">
              Chef's Special
            </span>
          </div>
        </section>

        {/* Form Section */}
        <section className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-xl border-2 border-slate-50 dark:border-slate-800">
          <div className="space-y-6">
            <div className="flex flex-col gap-2 group">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-brand-green transition-colors ml-1">
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

            <div className="flex flex-col gap-2 group">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-brand-green transition-colors">
                  Password
                </label>
                <button
                  onClick={() => navigate('/passwordreset')}
                  className="text-[9px] font-black uppercase tracking-widest hover:underline text-primary"
                >
                  Lost Key?
                </button>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-green transition-colors font-black">
                  lock
                </span>
                <input
                  className="w-full h-14 pl-14 pr-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-0 focus:border-brand-green focus:bg-white dark:focus:bg-slate-800 transition-all font-bold text-sm text-slate-900 dark:text-slate-100 shadow-inner"
                  placeholder="••••••••"
                  type="password"
                />
                <button className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors">
                  <span className="material-symbols-outlined font-black">visibility</span>
                </button>
              </div>
            </div>
          </div>

          <button className="w-full h-20 bg-primary hover:bg-orange-600 text-white font-black rounded-3xl transition-all shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] mt-4 hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-lg">
            Log In
          </button>
        </section>

        {/* Social Auth */}
        <section className="space-y-6">
          <div className="relative flex items-center">
            <div className="flex-grow border-t-2 border-slate-100 dark:border-slate-800"></div>
            <span className="flex-shrink mx-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
              Or Entry With
            </span>
            <div className="flex-grow border-t-2 border-slate-100 dark:border-slate-800"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 h-16 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95">
              <span className="size-6 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </span>
              <span className="font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-3 h-16 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95">
              <span className="size-6 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-800 dark:text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.96.95-2.45 2.1-4.14 2.1-1.64 0-2.21-1.03-4.22-1.03-2.04 0-2.67 1.03-4.14 1.03-1.57 0-3.32-1.47-4.47-3.12-2.31-3.38-2.31-8.77.16-12.35 1.23-1.8 3.1-2.93 5.07-2.93 1.54 0 2.65.86 3.73.86 1.01 0 2.21-.92 4.02-.92 1.67 0 3.16.89 4.14 2.22-3.4 1.76-2.85 6.36.56 7.84-.71 2.38-2.25 5.35-4.71 8.41zm-4.73-16.71c.71-1.41.44-3.15-.36-4.57 1.34.1 2.92.93 3.71 2.2.82 1.32.61 3.2-.35 4.54-1.39.05-2.73-.83-3-2.17z" />
                </svg>
              </span>
              <span className="font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400">
                Apple
              </span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center space-y-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="font-black text-brand-green hover:underline underline-offset-4"
            >
              Join Us
            </button>
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img
                  key={i}
                  className="size-10 rounded-2xl border-4 border-white dark:border-slate-800 bg-slate-200 shadow-lg object-cover"
                  src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBCrcJdkggMY9psbNJnYduuKEuNRwoS5iLG-aZqMJqO1VqAVXpwfKt92PLwW2r_O6D0AetcRMFKzaQ1VjDK5LhJyP0zJjeadxJn7wJpmNP5qQiWpXwMpqmvZcwh-6xdxv5X4qViTzkQbLSl-mGy6UMReVD9Gbtt27QXGoKxNiLc5FrMYjBWwxBqq_bgNuUsYLcu91eEFDeauVNURvaUgIVAw1WBlZwvaCBVlVRRskNUzLuE_kXcEw3Exr7vdxjXGt-IGZwnOUEZ0hIl`}
                />
              ))}
              <div className="size-10 rounded-2xl border-4 border-white dark:border-slate-800 bg-primary text-white flex items-center justify-center text-[10px] font-black shadow-lg">
                +10k
              </div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
              Joined by top chefs worldwide
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
