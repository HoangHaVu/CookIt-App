export default function PrivateCookbook() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0e7547] text-white shadow-lg">
        <div className="flex items-center p-4 justify-between max-w-2xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white text-2xl">
              menu
            </span>
            <h1 className="text-xl font-bold tracking-tight">My Cookbook</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <span className="material-symbols-outlined text-white">
                search
              </span>
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <span className="material-symbols-outlined text-white">
                add_circle
              </span>
            </button>
          </div>
        </div>

        <nav className="max-w-2xl mx-auto w-full px-4">
          <div className="flex gap-8 border-b border-white/20">
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-white/70 pb-3 pt-4 hover:text-white"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">All Recipes</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-white text-white pb-3 pt-4"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">Collections</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-white/70 pb-3 pt-4 hover:text-white"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">Favorites</p>
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full p-4 space-y-6">
        <div className="flex items-center justify-between pt-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Your Collections
          </h2>
          <span className="text-sm text-primary font-bold bg-sage/20 px-3 py-1 rounded-full">
            3 Folders
          </span>
        </div>

        <div className="grid gap-6 @container">
          <div className="flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white dark:bg-background-dark/50 shadow-sm transition-all hover:shadow-md">
            <div className="grid grid-cols-3 gap-1 h-40">
              <div
                className="bg-center bg-cover bg-no-repeat"
                data-alt="Close up of a fresh healthy salad"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkwGHyAIsZsB6cbJsyG69v9wKdIsu7XxdfhiUtl0ajFX4pMySMPwVx2ssIWonjMBgFTJRT-wbq4m71z4vUe5n5mXK8-XDkCiwm_2AKhD5CefHncUcB3KPNZmHUmtKr5sQaLLywT6LgMED2HjFqNaKtJjyGBzmoGyJP8_NYlwNzfK65G9Et0VP-p3Qn__NDOJ0iQsxo_UYK8meoIW8Ro9Wc5aYVC--FkEqbc82yivyh3tDMVYkAlEyAnRcrVFsbSV-mwO8vNVXQ-UMU')",
                }}
              ></div>
              <div
                className="bg-center bg-cover bg-no-repeat"
                data-alt="Bowl of vegetable soup with garnish"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLo34rx15oUeip3OkePUF-dWbBfTdG9L9UjgFUuTiif2UZdH1SQ5zRNX0CX3gC3dGaBAyWtP-uJXJY9fuAJFCciGIQV2Uz5ZBGCgZ7YowXJukqe5g6lAhNheRNBdRA3INNCwh3HI_9gxzEYj07W4c7-Tqfk73KCMK57mQPqnjYzml-imfk4CqVlV0y4a9B4otpP2lowZvizUHUg4rk7EFmCmkOSAwYHnlbIdbfmyaPAmcD2IYtDC6N5baZGo5cnDkW8SsTqMVDW8J4')",
                }}
              ></div>
              <div
                className="bg-center bg-cover bg-no-repeat"
                data-alt="Plate of pasta with tomato sauce"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBok__JMSqnYGjvbP8b7IszCcNTWiyZvaRKXHkw5NLVgOHOfO0TPJSODpLei6aV3U2p70rw3t6n-wgJ0X-54vFZYMOx77wqa3FNLSn_QaO3s2ZwV9VlLpkEjwZUM07-m8L4vGoHLk6pvMkFaka4jQ4zpQjtVRoyArB50xre6lUeUJmFGq0jIUFvt26vB8plkfGQfM7mPF_3qBj_sPQCsUP7ZFSdfMGMjH-1POg7WpHe-au25SgbIaMm7vXac03GJp65T3oWqHifPcYI')",
                }}
              ></div>
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-sage/20 px-2 py-1 rounded text-[#0e7547]">
                  <span className="material-symbols-outlined text-[14px] font-bold">
                    check_circle
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Label
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">Personal Recipes</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    24 recipes • Updated 2 days ago
                  </p>
                </div>
                <button className="bg-[#0e7547] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#0a5c38] transition-all flex items-center gap-1">
                  <span>Open</span>
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white dark:bg-background-dark/50 shadow-sm transition-all hover:shadow-md">
            <div className="grid grid-cols-2 gap-1 h-40">
              <div
                className="bg-center bg-cover bg-no-repeat"
                data-alt="Grilled meats and vegetables on skewers"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEOilDghzLj_oU1tIzT7oQqUTIHTrBjSWsmPRnzRhM-taKitgU-aNbcaMGzioSpqoZ9pbx-ogT0oLGu-Az2Q0L6kZCJFhrNNK2xcz1Ol8V5uMYtOPrsMhOrKwpYVg17FXOAFLb0TqPM1u3W6ZkSWq-EwCvk8w3wt-KbrWxKRxXRBfsB1nS2mnfAY2IRa0iEO3abxk8Ryt3JNI-8gmfE1QuKfuECEoPhD2IaFSO4ORFJPsIYbuAJy15ZzNKXsgbkxgQB8bpigBCut2r')",
                }}
              ></div>
              <div
                className="bg-center bg-cover bg-no-repeat"
                data-alt="Delicious pepperoni pizza slice being lifted"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_jKJdYurHHNoNYEhQeTxn-c2V0qZsJav-ejdb5ygYhDTXS_BGFmTdDGUBXmmMrB-QCPbqnPbs8U6PwWIH5XNzrO7h7GaTrkgopBpRDauBI6X8dEutF5UwdmsL_w0JiZYcFLxgYv4Wa0gHgrWmh9HYhDMARxo53wPJ5gqjWSbP1W2ZqseeqTCUCMTCCmUd8WF8KnnaiUT24P03ifKSB2u9IrYMYzgdiWkpcNs9hLcAfd5_pAKDJnP_xyY1KRZJJPKTU7H3dCn2sL3A')",
                }}
              ></div>
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-sage/20 px-2 py-1 rounded text-[#0e7547]">
                  <span className="material-symbols-outlined text-[14px] font-bold">
                    check_circle
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Label
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">Family Favorites</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    12 recipes • Updated 1 week ago
                  </p>
                </div>
                <button className="bg-[#0e7547] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#0a5c38] transition-all flex items-center gap-1">
                  <span>Open</span>
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white dark:bg-background-dark/50 shadow-sm transition-all hover:shadow-md">
            <div className="grid grid-cols-3 gap-1 h-40">
              <div
                className="bg-center bg-cover bg-no-repeat"
                data-alt="Healthy breakfast bowl with fruits"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2yvKXetCHs0FVP8SSCOLtV0wKEJWja9CwekGR5fffC06eEJ-18VFGzx-W_XsWRtN4fLx6XzgxvFlrHyoHgoIyRnR_Qtrn0sdWiQRh1qZqJn3GduxHhbTeelijw5qcA83nkQDa3_7_alPgIE_eJIqQyqjkXSn8rA1bKZVPHzBrGkpzVcqIwAlKmBGKCXWEIFVPNRdhRmta_oqJ7aLNOdyMWSWRKrPOqGS7Tze7F1cu71hBGu5m_VEBJJlR_x80EcGv_VNjZlZwc1aE')",
                }}
              ></div>
              <div
                className="bg-center bg-cover bg-no-repeat"
                data-alt="Vibrant salad with feta cheese"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk1GrA4ltqKAzI4QWMNtTAw2jidY6s64NXz6p8X_yvZQyyqp_xeOMNWo9i2c8zxU6MgiYCFZWcjCm9wTiMNWxsFUweT5kTvdJRa7teVY_HMXSVrxipy-aMCYpljLw3uiWEQXui6daNeUR4g_aA9tg6I1xvKuAz4TRPVKlckgQm9JNyvpwMphJSN3nDCK9CkUiZmmAjQYHpbltdaNl14m6wpH4FIWqNsKgjRFtL46uy5hPsPUHUgz9znHAbyvt0Ngeuco9HWySdtu8z')",
                }}
              ></div>
              <div className="flex items-center justify-center bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  more_horiz
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-sage/20 px-2 py-1 rounded text-[#0e7547]">
                  <span className="material-symbols-outlined text-[14px] font-bold">
                    check_circle
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Label
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">Shared with Friends</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    8 recipes • Updated yesterday
                  </p>
                </div>
                <button className="bg-[#0e7547] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#0a5c38] transition-all flex items-center gap-1">
                  <span>Open</span>
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          <button className="flex flex-col items-center justify-center border-2 border-dashed border-accent-orange/40 rounded-xl p-8 hover:bg-accent-orange/5 transition-colors group">
            <span className="material-symbols-outlined text-4xl text-accent-orange group-hover:scale-110 transition-transform mb-2">
              create_new_folder
            </span>
            <span className="text-sm font-bold text-accent-orange group-hover:underline">
              Create New Collection
            </span>
          </button>
        </div>
        <div className="h-24"></div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#0e7547] border-t border-white/10 px-4 pb-6 pt-2 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="flex gap-2 max-w-2xl mx-auto">
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-white/60 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <p className="text-[10px] font-bold uppercase tracking-widest">
              Home
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-white/60 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">search</span>
            <p className="text-[10px] font-bold uppercase tracking-widest">
              Search
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-white transition-colors"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              menu_book
            </span>
            <p className="text-[10px] font-bold uppercase tracking-widest">
              Cookbook
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-white/60 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <p className="text-[10px] font-bold uppercase tracking-widest">
              Profile
            </p>
          </a>
        </div>
      </nav>
    </>
  );
}
