import { CookHeader } from '../components/layout/CookHeader';

export default function CookMode() {
  const currentStep = 3;
  const totalSteps = 12;
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-4xl mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <CookHeader currentStep={currentStep} totalSteps={totalSteps} phaseName="Slow Roasting Phase" />

      <main className="flex-1 pb-40">
        {/* Progress Section */}
        <div className="px-8 py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-end justify-between mb-3 px-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Session Progress
            </span>
            <span className="text-xs font-black text-brand-green uppercase tracking-widest">
              {progressPercent}% Complete
            </span>
          </div>
          <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-700">
            <div
              className="h-full bg-brand-green rounded-2xl shadow-[0_0_15px_rgba(33,83,67,0.3)] transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Media Content */}
        <div className="w-full px-6 py-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white dark:border-slate-800 shadow-brand-green/10">
            <div
              className="absolute inset-0 bg-cover bg-center h-full transition-transform duration-10000 hover:scale-110"
              data-alt="Close up of herbs being chopped"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfwgp5cACSYAo8IOc-sVuUV2gcLr_JDv1u6JbVCxJJQ49xhG53lpPL-T2KYKAYpgjeueOFCKp3PlVNToh3XPAaEbATrlooI3cqE8cLcATgMrL87fZZpbMoyPfitht3VPmyvDn1x-KV7cxn6jVu-XZUyYI3aF5UWvMc-FSVjxLBn5K_nCbPkNmqNyJMGajoK4wZeGqrrOX_2M22zQfV42Pj1_cr2rD0l0daia0qnxSevdz_SpGilVwxp7gqnr7fOFZWRi3vFGcEgX1t')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 right-6">
              <button className="flex items-center justify-center size-14 rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl text-white border border-white/30 hover:bg-white/40 transition-all active:scale-90">
                <span className="material-symbols-outlined text-3xl font-black">fullscreen</span>
              </button>
            </div>
            <div className="absolute top-6 left-6">
              <span className="bg-brand-green text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg shadow-black/20">
                Visual Tutorial
              </span>
            </div>
          </div>
        </div>

        {/* Instructions Content */}
        <div className="px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight tracking-tight flex-1">
              Prepare the <br /><span className="text-brand-green">Herb Infusion</span>
            </h1>
            <div className="flex flex-col items-center justify-center p-5 rounded-[2rem] bg-brand-green/5 border-2 border-brand-green/10 min-w-[110px] shadow-sm">
              <span className="material-symbols-outlined text-brand-green text-3xl font-black mb-1">
                timer
              </span>
              <span className="text-brand-green font-black text-2xl tracking-tighter">05:00</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium tracking-tight">
              Finely mince the{' '}
              <span className="font-black text-primary underline decoration-primary/20 underline-offset-4">fresh rosemary</span>{' '}
              and <span className="font-black text-primary underline decoration-primary/20 underline-offset-4">thyme</span>.
              Combine them in a small ceramic bowl with the extra virgin olive
              oil and a pinch of sea salt.
            </p>
            <div className="relative pl-8 border-l-4 border-slate-200 dark:border-slate-800 py-2">
              <span className="absolute left-0 top-0 -translate-x-1/2 bg-white dark:bg-background-dark text-slate-300 material-symbols-outlined font-black">format_quote</span>
              <p className="text-xl leading-relaxed text-slate-500 dark:text-slate-400 font-bold italic">
                "The aroma should start blooming as soon as the herbs hit the
                oil. Ensure the herbs are fully submerged to prevent oxidation."
              </p>
            </div>
          </div>

          {/* Tip Card */}
          <div className="p-8 rounded-[2.5rem] bg-primary/5 dark:bg-primary/10 border border-primary/20 flex gap-6 items-start shadow-xl shadow-primary/5">
            <div className="bg-primary text-white size-14 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
              <span className="material-symbols-outlined text-3xl font-black">lightbulb</span>
            </div>
            <div>
              <h4 className="font-black text-primary text-xs uppercase tracking-[0.2em] mb-2">
                Chef's Secret Tip
              </h4>
              <p className="text-lg text-slate-800 dark:text-slate-200 font-bold leading-relaxed">
                Use a sharp knife to avoid bruising the herbs, which can lead
                to a bitter taste.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Control Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 pt-10 bg-gradient-to-t from-background-light via-background-light/95 to-transparent dark:from-background-dark dark:via-background-dark/95 z-40 max-w-4xl mx-auto">
        <div className="flex items-center gap-6">
          <button className="flex-1 h-20 rounded-3xl border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center gap-3 font-black text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all uppercase tracking-widest text-sm active:scale-95">
            <span className="material-symbols-outlined font-black">arrow_back</span>
            Back
          </button>
          <button className="flex-[2] h-20 rounded-3xl bg-primary text-white flex items-center justify-center gap-4 font-black text-2xl shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 transition-all uppercase tracking-tighter">
            Next Step
            <span className="material-symbols-outlined text-4xl font-black">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
