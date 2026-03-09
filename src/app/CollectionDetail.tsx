export default function CollectionDetail() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full max-w-[480px] mx-auto flex-col bg-background-light dark:bg-background-dark shadow-xl">
        <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-deep-green">
          <div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
            <span className="material-symbols-outlined text-white">
              arrow_back
            </span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-white">
            Collection Details
          </h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-full size-10 hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-white">
                more_horiz
              </span>
            </button>
          </div>
        </div>

        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-5 items-start">
            <div className="flex gap-5 flex-col w-full">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl w-full max-h-[240px] shadow-sm"
                data-alt="A vibrant salad with fresh vegetables and toppings"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUPSuMT_RlbYT2j4JUwcfSttElMHvPNaYQ8MLAw0wUjkUu6mQRSLgRkIA_dHmpb9e0xBPN3CrN0IWk2EPo7fd-2_xv7MNlRcAMhVAepO42L4UtEkb37v8b7uibYcUByoslpLydsY0pIFUYEkumnCGJ0zkX1xHKSi_MbElT6xSgFtEN2XDFKQx6oezkG7X8KekW-DuieP8nz7_2cuFRMAVDiKWIYkv_B80cgjp1WOMBrZ11HUnwB5oVO5b8PnvfaXD84r65PQt2C1xt')",
                }}
              ></div>
              <div className="flex flex-col gap-1">
                <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-[-0.015em]">
                  Summer Favorites
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
                  A curated collection of my favorite refreshing meals and
                  drinks for the sunny season, including light salads and
                  grilled mains.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-sage-green text-deep-green px-2 py-0.5 rounded-full font-bold text-xs">
                    24 Recipes
                  </span>
                  <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                  <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
                    Created by You
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-[60px] bg-background-light dark:bg-background-dark z-10">
          <div className="flex border-b border-primary/10 px-4 gap-8">
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-primary text-slate-900 dark:text-slate-100 pb-[13px] pt-4 transition-all"
              href="#"
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                All Recipes
              </p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 hover:text-primary transition-all"
              href="#"
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                Recently Added
              </p>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 mb-20">
          <div className="flex flex-col gap-3 pb-3 group cursor-pointer">
            <div
              className="relative w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl shadow-sm transition-transform group-hover:scale-[1.02]"
              data-alt="Fresh watermelon salad with feta cheese and mint"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3898a_rWbr2l3QkMewEOQ0tsPWNVk4LCGUIDvHb3QI_Lr0hPhxIi9RBvavqpqGICT0UlZf1YSjsT8jfpno2ZtJnxKucmtpC-j6nQYPra7klBunCoWzBR4rqgaYj0Xzlo0mMj-RUJk9UEbdZ7GKobH0vCq7M6HVm7gHyAHto3mdmQJM2pkyfWR1rCh8Asq0jDaP5WecCS25Hk0Oznsp1vYnSLFQyg4__Y4wF95Gs_4__QCOhb57i13_WPqbUDBDOHEsN_Mbi2f8iVR')",
              }}
            >
              <div className="absolute top-2 right-2 bg-white/90 dark:bg-black/70 rounded-full p-1 shadow-sm">
                <span className="material-symbols-outlined text-primary filled-icon text-lg">
                  favorite
                </span>
              </div>
            </div>
            <div>
              <p className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight line-clamp-1">
                Watermelon Feta Salad
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="material-symbols-outlined text-primary text-xs filled-icon">
                  star
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold">
                  4.8
                </p>
                <span className="text-slate-300 dark:text-slate-700 mx-1">
                  •
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  15 mins
                </p>
              </div>
              <p className="dark:text-primary/60 text-xs font-medium mt-1">
                Salad
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-3 group cursor-pointer">
            <div
              className="relative w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl shadow-sm transition-transform group-hover:scale-[1.02]"
              data-alt="Grilled lemon chicken skewers with herbs"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3LLpe8dPcvqoAwxUy7iqLnfKqCgDVMlKfpU1-zWuQCDZS7rAM6Njwrq1oC4ddz1D1xzZjBumbHdByFckJBobnmF_1D6Udf6o2LwNQtg17s3YiezVCiTsbK63rEzBeb8eCwm0xgR1czcFVe46bk1s7kSbz09O2iysQsR0xB7PF6nFY6ji98Ivjdvs9v0pR9tl0wWn0MFppZlxRCOrfCw6fyEJZVBKyQHdhtjzZ4EWV62j3FX2XW1DmoTQmlfsp4UMKehrNBZsKmsyf')",
              }}
            ></div>
            <div>
              <p className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight line-clamp-1">
                Grilled Lemon Chicken
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="material-symbols-outlined text-primary text-xs filled-icon">
                  star
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold">
                  4.9
                </p>
                <span className="text-slate-300 dark:text-slate-700 mx-1">
                  •
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  30 mins
                </p>
              </div>
              <p className="dark:text-primary/60 text-xs font-medium mt-1">
                Main Course
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-3 group cursor-pointer">
            <div
              className="relative w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl shadow-sm transition-transform group-hover:scale-[1.02]"
              data-alt="Refreshing peach iced tea in a tall glass"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCH1OmCqsU6XHfTp4mOKQKaIh835045Kc51x29i9qcOJ49EWkYKFq0V31pUz-ghqlWWnsgXUgt3A_8ZqEtKJ0uiH2ovYlEAPORfE3voKSrQ2yrCthnGhvLcABZW-B0yptCUiUGkV9fwFqzR74nO0C5LTK4HMW7WOdDqVbv4p6Rsr15_ogDz3zdPSlKPqBJjuBOcwvWCB8f5JbvE60xJfByULmtPMrTir0CB3pyRIqo3UJiIXzeKlhppwCHCyawkXKGnPfsvLVyfjySG')",
              }}
            ></div>
            <div>
              <p className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight line-clamp-1">
                Peach Iced Tea
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="material-symbols-outlined text-primary text-xs filled-icon">
                  star
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold">
                  4.5
                </p>
                <span className="text-slate-300 dark:text-slate-700 mx-1">
                  •
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  10 mins
                </p>
              </div>
              <p className="dark:text-primary/60 text-xs font-medium mt-1">
                Beverage
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-3 group cursor-pointer">
            <div
              className="relative w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl shadow-sm transition-transform group-hover:scale-[1.02]"
              data-alt="Colorful mixed berry smoothie bowl with granola"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSw71LCG4r8d7OSE5aa1NzY15Hj-vBx0hriSCIlmC-H_g1jvN69zejJXYMDqgp12w0GYIIFQcsrbLfEjh4K_RInNHpmPT4zQ66NqH_hcEI8vlQ843_niqPzcLH6HFRDoNbn3RsFD0dm9Ixky0bXfDJhDzzjLpoZuIVaESw-p4wAvdfAdhF1aitMTjRUrQNOD7qkN6VCqldgzzxPZGPmdLNFq-cfSKT_dkpnh4EFWgmX7wg1lX9665Xlt9oMcxQITLR_OswDtr8WGE1')",
              }}
            ></div>
            <div>
              <p className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight line-clamp-1">
                Berry Smoothie Bowl
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="material-symbols-outlined text-primary text-xs filled-icon">
                  star
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold">
                  4.7
                </p>
                <span className="text-slate-300 dark:text-slate-700 mx-1">
                  •
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  12 mins
                </p>
              </div>
              <p className="dark:text-primary/60 text-xs font-medium mt-1">
                Breakfast
              </p>
            </div>
          </div>
        </div>

        <button
          className="fixed bottom-24 right-6 size-14 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-20 bg-primary"
          style={{ backgroundColor: '#f97316' }}
        >
          <span className="material-symbols-outlined">add</span>
        </button>

        <div className="fixed bottom-0 w-full max-w-[480px] flex gap-2 border-t border-primary/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 pb-6 pt-3 z-30">
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 hover:text-primary"
            href="#"
          >
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined">home</span>
            </div>
            <p className="text-[10px] font-bold leading-normal tracking-wide">
              Home
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 hover:text-primary"
            href="#"
          >
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined">search</span>
            </div>
            <p className="text-[10px] font-bold leading-normal tracking-wide">
              Search
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-primary"
            href="#"
          >
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined filled-icon">
                folder_special
              </span>
            </div>
            <p className="text-[10px] font-bold leading-normal tracking-wide">
              Collections
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 hover:text-primary"
            href="#"
          >
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined">person</span>
            </div>
            <p className="text-[10px] font-bold leading-normal tracking-wide">
              Profile
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
