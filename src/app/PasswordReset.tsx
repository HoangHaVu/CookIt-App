export default function PasswordReset() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
          <img
            alt="Kitchen background"
            className="h-full w-full object-cover"
            data-alt="Close up of high-end kitchen utensils and spices"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWjg3vw1TzIyHdR3YFY5W-6_XU80XxYh5H4lRJwZijdVT4oc4s2JJKjGXvuksd5G35UdtqRI8tIk2O6ZPORpKxeOFakeq7z87KpcN2GJ7VA4sr7zccy53EsR22HAX9g58t6AqRpfvq8sFrzimZgDhRH78qw8sHpDYzfmXm5YsxR0ZgtYJekc3pOkOp8zoWFPTJck3LSinXltZN6opvIOrSSELgIeDDA1i_pbLvwTbG5fsbt_oaz980jZK_iESrz1Rji1QQJ1z9Gu-o"
          />
        </div>
        <div className="relative z-10 w-full max-w-[480px] rounded-xl bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-8 shadow-2xl border border-primary/10">
          <div className="flex items-center justify-start mb-8">
            <a
              className="group flex items-center gap-2 text-slate-900 dark:text-slate-100 transition-colors hover:text-primary"
              href="#"
            >
              <span className="material-symbols-outlined text-2xl">
                arrow_back
              </span>
              <span className="text-sm font-medium">Back</span>
            </a>
          </div>

          <div className="mb-8">
            <div
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: '#0e7547', color: 'white' }}
            >
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lock_reset
              </span>
            </div>
            <h1
              className="tracking-tight text-3xl font-bold leading-tight mb-2"
              style={{ color: '#0e7547' }}
            >
              Reset Password
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
              Enter your email address to receive a password reset link for your
              premium cooking account.
            </p>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold ml-1">
                Email Address
              </label>
              <div className="relative flex items-center group">
                <span className="material-symbols-outlined absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <input
                  className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
                  placeholder="chef@culinaria.com"
                  type="email"
                />
              </div>
            </div>
            <button
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-base font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Send Link</span>
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Remember your password?
              <a
                className="text-primary font-bold hover:underline ml-1"
                href="#"
              >
                Back to Log In
              </a>
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-8 flex items-center gap-2">
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: '#0e7547' }}
          >
            <span className="material-symbols-outlined text-white text-xl">
              restaurant
            </span>
          </div>
          <span className="text-slate-900 dark:text-slate-100 font-bold text-xl tracking-tight">
            Culinaria
          </span>
        </div>
      </div>
    </>
  );
}
