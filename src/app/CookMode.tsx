export default function CookMode() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="flex items-center px-4 py-4 justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">
              close
            </span>
          </button>
          <div className="text-center">
            <h2 className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-widest">
              Step 3 of 12
            </h2>
            <p className="text-success text-xs font-semibold">
              Slow Roasting Phase
            </p>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">
              more_vert
            </span>
          </button>
        </header>

        <div className="px-6 py-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Preparation Progress
            </span>
            <span className="text-xs font-bold text-success">25% Complete</span>
          </div>
          <div className="w-full h-2 bg-success/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-success rounded-full"
              style={{ width: '25%' }}
            ></div>
          </div>
        </div>

        <div className="w-full px-4 py-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Close up of herbs being chopped on a wooden board"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfwgp5cACSYAo8IOc-sVuUV2gcLr_JDv1u6JbVCxJJQ49xhG53lpPL-T2KYKAYpgjeueOFCKp3PlVNToh3XPAaEbATrlooI3cqE8cLcATgMrL87fZZpbMoyPfitht3VPmyvDn1x-KV7cxn6jVu-XZUyYI3aF5UWvMc-FSVjxLBn5K_nCbPkNmqNyJMGajoK4wZeGqrrOX_2M22zQfV42Pj1_cr2rD0l0daia0qnxSevdz_SpGilVwxp7gqnr7fOFZWRi3vFGcEgX1t')",
              }}
            ></div>
            <div className="absolute bottom-4 right-4">
              <button className="flex items-center justify-center size-12 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-lg text-primary">
                <span className="material-symbols-outlined">fullscreen</span>
              </button>
            </div>
          </div>
        </div>

        <main className="flex-1 px-6 pt-4 pb-32">
          <div className="flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
                Prepare the Herb Infusion
              </h1>
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-success/5 border border-success/20 min-w-[80px]">
                <span className="material-symbols-outlined text-success text-3xl">
                  timer
                </span>
                <span className="text-success font-bold text-lg">05:00</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                Finely mince the{' '}
                <span className="font-bold text-primary">fresh rosemary</span>{' '}
                and <span className="font-bold text-primary">thyme</span>.
                Combine them in a small ceramic bowl with the extra virgin olive
                oil and a pinch of sea salt.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 italic">
                "The aroma should start blooming as soon as the herbs hit the
                oil. Ensure the herbs are fully submerged to prevent oxidation."
              </p>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary">
                lightbulb
              </span>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase">
                  Chef's Tip
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Use a sharp knife to avoid bruising the herbs, which can lead
                  to a bitter taste.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <button className="flex-1 h-16 rounded-xl border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
            <button className="flex-[2] h-16 rounded-xl bg-primary text-white flex items-center justify-center gap-2 font-bold text-xl shadow-lg shadow-primary/30 hover:brightness-110 active:scale-[0.98] transition-all">
              Next Step
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
