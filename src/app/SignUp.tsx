export default function SignUp() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex items-center p-4 pb-2 justify-between bg-header-footer">
          <button className="dark:text-slate-100 flex size-12 shrink-0 items-center justify-start text-white">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12 text-white">
            Sign Up
          </h2>
        </div>

        <div className="px-4 pt-4">
          <div className="w-full h-40 rounded-xl overflow-hidden relative">
            <img
              alt="Gourmet food arrangement"
              className="w-full h-full object-cover"
              data-alt="Close up of gourmet food arrangement on a plate"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKBkLUv6BsUpkAm3QMkMJUdURg3_nDvtKo8q2GBFma8wOltKKSeB3lHeAdDb40cLw90yUkZ1JWIuIghm403uwbgEE8sFc-CVJYuHB0U3nqcaUDfFKxcoz2h8RV8WmmzZzJpljahqmvOROTuIFWHcgYAX4NFeClk8MlZI2WaYrT4BjoG9FUi51PE1VdQurCoSzoAqbyWVCxPEmN7pT3PGbsRu9NzN1DnvSB7LbDBiSZII8X8JelG4TUjX9JypGiPHoEwZyf4-OkTqMC"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        </div>

        <div className="px-4 pb-3 pt-8">
          <h1 className="text-slate-900 dark:text-slate-100 tracking-light text-[32px] font-bold leading-tight">
            Create Account
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-2">
            Join our community of food lovers and start sharing your favorite
            recipes.
          </p>
        </div>

        <div className="flex flex-col gap-5 px-4 py-3">
          <label className="flex flex-col w-full">
            <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal pb-2">
              Full Name
            </p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                person
              </span>
              <input
                className="form-input flex w-full rounded-xl text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal focus:ring-2 focus:ring-sage-accent focus:border-transparent"
                placeholder="Enter your full name"
                value=""
              />
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal pb-2">
              Email Address
            </p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                mail
              </span>
              <input
                className="form-input flex w-full rounded-xl text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal focus:ring-2 focus:ring-sage-accent focus:border-transparent"
                placeholder="example@email.com"
                type="email"
                value=""
              />
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal pb-2">
              Password
            </p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                lock
              </span>
              <input
                className="form-input flex w-full rounded-xl text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal focus:ring-2 focus:ring-sage-accent focus:border-transparent"
                placeholder="Create a strong password"
                type="password"
                value=""
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">
                visibility
              </span>
            </div>
          </label>
        </div>

        <div className="px-4 py-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center pt-0.5">
              <input
                className="peer h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-900"
                type="checkbox"
              />
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              By signing up, you agree to our
              <a
                className="text-primary font-semibold hover:underline"
                href="#"
              >
                Terms of Service
              </a>
              and
              <a
                className="text-primary font-semibold hover:underline"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </p>
          </label>
        </div>

        <div className="px-4 py-6">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
            Create Account
          </button>
        </div>

        <div className="px-4 py-2 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
            Or continue with
          </span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>
        <div className="px-4 py-4 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 rounded-xl py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <img
              alt="Google icon"
              className="w-5 h-5"
              data-alt="Google colorful logo icon"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAT-AdHoyIQX-OXAlH1d4ByjfO5DPZ1t4VZ_hA6E136ffjCimCUhvIFwa09nrNYF5H7FEy8IQG6HEgQWOUB0zY0zH03M_XLofzM07nLjXlW_L-XRhvdbL8YKlEQEcWr-PEBgX0rRfdNhllw4xPDrSTkAbCUfSD36qtdpRVrJ2Yue_bpsmE3ELH9MZ2vUijsse-YuVUnXN8YOr7ZDE-KvSQ9zXFiMQRzRvGkYHzZeBIgQJJU7vdfxwbhB6uO6xbFvYich_5Cw3qS-x1"
            />
            <span className="text-sm font-semibold">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 rounded-xl py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">
              ios
            </span>
            <span className="text-sm font-semibold">Apple</span>
          </button>
        </div>

        <div className="mt-auto pb-10 pt-10 text-center bg-header-footer">
          <p className="dark:text-slate-400 text-sm text-sage-accent">
            Already have an account?
            <a className="font-bold hover:underline text-white" href="#">
              Log In
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
