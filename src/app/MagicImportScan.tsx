export default function MagicImportScan() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="bg-brand-green text-white p-4 flex items-center justify-between sticky top-0 z-50">
          <button className="material-symbols-outlined p-2 hover:bg-white/10 rounded-full">
            arrow_back
          </button>
          <h1 className="text-lg font-bold tracking-tight">Magic Import</h1>
          <button className="material-symbols-outlined p-2 hover:bg-white/10 rounded-full">
            help_outline
          </button>
        </header>

        <main className="flex-1 relative flex flex-col">
          <div
            className="camera-viewport flex-1 relative flex flex-col items-center justify-center overflow-hidden"
            data-alt="Close up of an open cookbook on a kitchen counter"
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full aspect-[3/4] max-w-sm">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-xl"></div>

                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-xl"></div>

                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-xl"></div>

                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-xl"></div>

                <div className="scan-line"></div>
              </div>
            </div>

            <div className="absolute top-8 w-full px-6">
              <div className="bg-brand-green/80 backdrop-blur-md rounded-xl p-3 text-center">
                <p className="text-white text-sm font-medium">
                  Position the recipe inside the frame
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 flex items-center justify-center gap-8 w-full">
              <button className="flex items-center justify-center rounded-full size-12 bg-black/40 text-white backdrop-blur-sm border border-white/20">
                <span className="material-symbols-outlined">image</span>
              </button>

              <button className="flex flex-col items-center justify-center rounded-full size-24 bg-primary text-slate-900 border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-4xl font-bold">
                  document_scanner
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
                  Scan
                </span>
              </button>
              <button className="flex items-center justify-center rounded-full size-12 bg-black/40 text-white backdrop-blur-sm border border-white/20">
                <span className="material-symbols-outlined">flash_on</span>
              </button>
            </div>
          </div>

          <div className="bg-sage-green/40 backdrop-blur-lg border-t border-brand-green/10 p-4">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-lg bg-brand-green flex items-center justify-center text-white">
                <span className="material-symbols-outlined">auto_fix_high</span>
              </div>
              <div>
                <h3 className="font-bold text-brand-green">
                  Auto-Detection Active
                </h3>
                <p className="text-xs text-brand-green/80">
                  Recognizing ingredients and instructions...
                </p>
              </div>
            </div>
          </div>
        </main>

        <nav className="flex border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-4 pb-6 pt-3 safe-area-inset-bottom">
          <a
            className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500"
            href="#"
          >
            <span className="material-symbols-outlined">menu_book</span>
            <p className="text-[10px] font-semibold">Recipes</p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-end gap-1 text-primary"
            href="#"
          >
            <span className="material-symbols-outlined fill-1">
              photo_camera
            </span>
            <p className="text-[10px] font-semibold">Scan</p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500"
            href="#"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <p className="text-[10px] font-semibold">Plan</p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <p className="text-[10px] font-semibold">Profile</p>
          </a>
        </nav>
      </div>
    </>
  );
}
