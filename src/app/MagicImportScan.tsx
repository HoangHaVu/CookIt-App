import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function MagicImportScan() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-black shadow-2xl">
      <header className="absolute top-0 left-0 right-0 z-50">
        <PageHeader title="Magic Import" transparent={true} rightActionIcon="help_outline" />
      </header>

      <main className="flex-1 relative flex flex-col pt-24 pb-48">
        <div
          className="flex-1 relative flex flex-col items-center justify-center overflow-hidden rounded-[3rem] mx-4 my-2 border-4 border-slate-900 shadow-2xl"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCrcJdkggMY9psbNJnYduuKEuNRwoS5iLG-aZqMJqO1VqAVXpwfKt92PLwW2r_O6D0AetcRMFKzaQ1VjDK5LhJyP0zJjeadxJn7wJpmNP5qQiWpXwMpqmvZcwh-6xdxv5X4qViTzkQbLSl-mGy6UMReVD9Gbtt27QXGoKxNiLc5FrMYjBWwxBqq_bgNuUsYLcu91eEFDeauVNURvaUgIVAw1WBlZwvaCBVlVRRskNUzLuE_kXcEw3Exr7vdxjXGt-IGZwnOUEZ0hIl')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Scanning Frame */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full aspect-[3/4] max-w-sm">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-primary rounded-tl-3xl shadow-[0_0_20px_rgba(255,165,0,0.5)]"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-8 border-r-8 border-primary rounded-tr-3xl shadow-[0_0_20px_rgba(255,165,0,0.5)]"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 border-primary rounded-bl-3xl shadow-[0_0_20px_rgba(255,165,0,0.5)]"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-primary rounded-br-3xl shadow-[0_0_20px_rgba(255,165,0,0.5)]"></div>

              <div className="scan-line absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(255,165,0,0.8)] opacity-60"></div>
            </div>
          </div>

          <div className="absolute top-8 w-full px-10">
            <div className="bg-black/60 backdrop-blur-xl rounded-[2rem] p-5 border border-white/20 text-center shadow-2xl">
              <p className="text-white text-xs font-black uppercase tracking-[0.2em]">
                Position the recipe inside the frame
              </p>
            </div>
          </div>

          <div className="absolute bottom-12 flex items-center justify-center gap-10 w-full px-6">
            <button className="flex items-center justify-center rounded-2xl size-14 bg-white/10 text-white backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all active:scale-90">
              <span className="material-symbols-outlined text-2xl font-black">image</span>
            </button>

            <button className="flex flex-col items-center justify-center rounded-[2.5rem] size-32 bg-primary text-white border-8 border-white/10 shadow-[0_20px_50px_rgba(255,165,0,0.4)] hover:scale-110 active:scale-95 transition-all group">
              <span className="material-symbols-outlined text-5xl font-black group-hover:rotate-12 transition-transform">
                document_scanner
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] mt-2">
                Scan
              </span>
            </button>

            <button className="flex items-center justify-center rounded-2xl size-14 bg-white/10 text-white backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all active:scale-90">
              <span className="material-symbols-outlined text-2xl font-black">flash_on</span>
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-6 pb-28 pt-4">
          <div className="bg-brand-green/20 backdrop-blur-3xl rounded-[2rem] border-2 border-brand-green/30 p-6 flex items-center gap-6 shadow-2xl">
            <div className="size-14 rounded-2xl bg-brand-green text-white flex items-center justify-center shadow-lg shadow-brand-green/30 shrink-0">
              <span className="material-symbols-outlined text-3xl font-black animate-pulse">auto_fix_high</span>
            </div>
            <div>
              <h3 className="text-sm font-black text-brand-green uppercase tracking-widest leading-tight">
                AI Engine Active
              </h3>
              <p className="text-[10px] text-brand-green font-bold uppercase tracking-widest mt-1 opacity-70">
                Recognizing ingredients...
              </p>
            </div>
          </div>
        </div>
      </main>

      <AppNavigation />
    </div>
  );
}
