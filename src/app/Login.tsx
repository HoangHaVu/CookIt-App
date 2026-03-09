export default function Login() {
  return (
    <>
      <div className="w-full max-w-[480px] flex flex-col gap-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="size-16 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 bg-[#0e7547] shadow-[#0e7547]/20">
            <span className="material-symbols-outlined !text-4xl">
              restaurant_menu
            </span>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Welcome Back
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Log in to your account to continue sharing recipes
            </p>
          </div>
        </div>

        <div className="@container">
          <div className="w-full h-48 rounded-xl overflow-hidden shadow-md relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              data-alt="Gourmet roasted vegetables and steak dish on a plate"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtKvrh7kku7-EmKTq2592tlU-Qs1bOa04vlRikDagzF-_oaD_lngxDgys9VXalNRS33I7xpf8ATwY4xbXM456hXhUPTDh0Jlh0NEZqdZ9TugNragG4fYtFag-C3B900LBJAnEVYJnnhVDhKJ3-tKY65yf_TLsTccaKA4pIUAwer9EgHPUAKWqmirKN4AzP8t4PPV0I769trc3KCRXCJOxC6Nh5Xt5r7ELrZ4sYufYgfxNFYPi9_td0C7EJeGnl8U1tD0Fd22cS621G')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-[#0e7547] text-sm font-semibold bg-[#d1e2d3] px-3 py-1 rounded-full">
                Chef's Choice
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                mail
              </span>
              <input
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#0e7547]/20 focus:border-[#0e7547] outline-none transition-all"
                placeholder="chef@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <a
                className="text-xs font-semibold hover:underline text-[#0e7547]"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                lock
              </span>
              <input
                className="w-full h-14 pl-12 pr-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#0e7547]/20 focus:border-[#0e7547] outline-none transition-all"
                placeholder="••••••••"
                type="password"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
          <button className="w-full h-14 bg-[#f47b25] hover:bg-[#e06a1a] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#f47b25]/20 mt-2">
            Log In
          </button>
        </div>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">
            Or continue with
          </span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 h-14 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Google
            </span>
          </button>
          <button className="flex items-center justify-center gap-2 h-14 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <svg
              className="w-5 h-5 dark:fill-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.05 20.28c-.96.95-2.45 2.1-4.14 2.1-1.64 0-2.21-1.03-4.22-1.03-2.04 0-2.67 1.03-4.14 1.03-1.57 0-3.32-1.47-4.47-3.12-2.31-3.38-2.31-8.77.16-12.35 1.23-1.8 3.1-2.93 5.07-2.93 1.54 0 2.65.86 3.73.86 1.01 0 2.21-.92 4.02-.92 1.67 0 3.16.89 4.14 2.22-3.4 1.76-2.85 6.36.56 7.84-.71 2.38-2.25 5.35-4.71 8.41zm-4.73-16.71c.71-1.41.44-3.15-.36-4.57 1.34.1 2.92.93 3.71 2.2.82 1.32.61 3.2-.35 4.54-1.39.05-2.73-.83-3-2.17z" />
            </svg>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Apple
            </span>
          </button>
        </div>

        <p className="text-center text-slate-500 dark:text-slate-400 mt-4">
          Don't have an account?
          <a className="font-bold hover:underline text-[#0e7547]" href="#">
            Sign Up
          </a>
        </p>

        <div className="flex justify-center mt-4">
          <div className="flex -space-x-2">
            <img
              className="size-8 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-200"
              data-alt="User avatar 1"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5sqiNxn1dlCYPk2pImGyd5Pk4T_R_-lOIDSYtPH_JLP_PVrC5937rPZQvaInbbg8O7Q2acF9QVWemzC_hnn5_vlV7YydcUOfC3H7WQuGLXnZUi_iAIQlk_Kh9olWQNbMqxpOkrfktRDQIkdSFEbrwPnzXbT00ATuH93gXL3oof7scoRc_G2_vGA50ZNeU-FI1mZsaXDop7x_rb_2hTfszdYyjyufhsUmk2_yULs20kA1uZK8ImybgAWTbN2PsY9AV-_e65HJgt4Uo"
            />
            <img
              className="size-8 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-200"
              data-alt="User avatar 2"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJCMOn6NpBluGlzruZVz8HtSgvxi9CHUkf3FdccvdAddaJhJqvSUx-2RaRX8uQ72ASUE1M4n_1-k4s4egI78Lfdl84bQVKAKI-j2y7R4GtM02KGdmzl6SuF5gxiadFSgiQGmmYT7vZzfjI2DTJHXGFme58elVJoslth0U5Wdct_FIOAZ_8lWeclKhz9YuAWg486tlmaE_fkmyriORs7VcVVRlqFx5dyHhw3Hub_eFs2VxFmMNFhs6LKovnZ5jmgMxj4QoQv-UNUJ2"
            />
            <img
              className="size-8 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-200"
              data-alt="User avatar 3"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX-TkqbmdnGT04TR_DqvdgY37nKk2-A28zWjrjkMu6_J4jDID5n1vggpFf-MFGC10etPKPYS-u8TEfp0V_Sw5swVDpIAUd_zCvFuGpEaLxmpk-YUYjRaBYWCXCLyqVdzB0RC6oTc0HRM8MVgcCl1Bg21MVfZUxtUHi05lweIcCsNCuZk6lueew6W3lkJtDgV8ce_YFYUBEQJJNd9vJjLCvsqAaPA69zuD6oFnMZ8Mh1M0dwjs6OYnkUnf_b1mjUXLPPFD9mL87itn-"
            />
          </div>
          <span className="ml-4 text-xs font-medium text-slate-400 self-center">
            Joined by 10,000+ Foodies
          </span>
        </div>
      </div>
    </>
  );
}
