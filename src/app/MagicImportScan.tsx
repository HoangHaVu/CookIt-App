import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';

type ScanState = 'idle' | 'scanning' | 'done';

export default function MagicImportScan() {
  const navigate = useNavigate();
  const [flashOn, setFlashOn] = useState(false);
  const [scanState, setScanState] = useState<ScanState>('idle');

  const handleScan = () => {
    if (scanState !== 'idle') return;
    setScanState('scanning');
    setTimeout(() => {
      setScanState('done');
      setTimeout(() => navigate('/recipeimport'), 600);
    }, 1800);
  };

  const statusLabel = scanState === 'scanning'
    ? 'Scanning recipe...'
    : scanState === 'done'
    ? 'Recipe detected!'
    : 'Recognizing ingredients...';

  const statusIcon = scanState === 'done' ? 'check_circle' : 'auto_fix_high';

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-black shadow-2xl">
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
          {/* Flash overlay */}
          {flashOn && <div className="absolute inset-0 bg-white/20 pointer-events-none z-10" />}

          {/* Scanning overlay */}
          {scanState === 'scanning' && (
            <div className="absolute inset-0 bg-black/30 pointer-events-none z-10 flex items-center justify-center">
              <div className="size-20 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            </div>
          )}

          {/* Scanning Frame */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full aspect-[3/4] max-w-sm">
              <div className={`absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 rounded-tl-3xl shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-colors ${scanState === 'done' ? 'border-brand-green' : 'border-primary'}`}></div>
              <div className={`absolute top-0 right-0 w-16 h-16 border-t-8 border-r-8 rounded-tr-3xl shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-colors ${scanState === 'done' ? 'border-brand-green' : 'border-primary'}`}></div>
              <div className={`absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 rounded-bl-3xl shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-colors ${scanState === 'done' ? 'border-brand-green' : 'border-primary'}`}></div>
              <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 rounded-br-3xl shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-colors ${scanState === 'done' ? 'border-brand-green' : 'border-primary'}`}></div>

              {scanState === 'idle' && (
                <div className="scan-line absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(255,165,0,0.8)] opacity-60"></div>
              )}
            </div>
          </div>

          <div className="absolute top-8 w-full px-10">
            <div className="bg-black/60 backdrop-blur-xl rounded-[2rem] p-5 border border-white/20 text-center shadow-2xl">
              <p className="text-white text-xs font-black uppercase tracking-[0.2em]">
                {scanState === 'idle' ? 'Position the recipe inside the frame' : statusLabel}
              </p>
            </div>
          </div>

          <div className="absolute bottom-12 flex items-center justify-center gap-10 w-full px-6">
            <button
              onClick={() => navigate('/privatecookbook')}
              className="flex items-center justify-center rounded-2xl size-14 bg-white/10 text-white backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-2xl font-black">image</span>
            </button>

            <button
              onClick={handleScan}
              disabled={scanState !== 'idle'}
              className={`flex flex-col items-center justify-center rounded-[2.5rem] size-32 text-white border-8 border-white/10 hover:scale-110 active:scale-95 disabled:active:scale-100 transition-all group ${
                scanState === 'done'
                  ? 'bg-brand-green shadow-[0_20px_50px_rgba(14,117,71,0.4)]'
                  : 'bg-primary shadow-[0_20px_50px_rgba(255,165,0,0.4)]'
              }`}
            >
              <span className={`material-symbols-outlined text-5xl font-black transition-transform ${scanState === 'idle' ? 'group-hover:rotate-12' : ''}`}>
                {scanState === 'done' ? 'check_circle' : 'document_scanner'}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] mt-2">
                {scanState === 'idle' ? 'Scan' : scanState === 'scanning' ? '...' : 'Done!'}
              </span>
            </button>

            <button
              onClick={() => setFlashOn((v) => !v)}
              className={`flex items-center justify-center rounded-2xl size-14 backdrop-blur-xl border transition-all active:scale-90 ${
                flashOn
                  ? 'bg-yellow-400/80 text-yellow-900 border-yellow-300'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              <span className="material-symbols-outlined text-2xl font-black">{flashOn ? 'flash_on' : 'flash_off'}</span>
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-6 pb-28 pt-4">
          <div className={`backdrop-blur-3xl rounded-[2rem] border-2 p-6 flex items-center gap-6 shadow-2xl transition-colors ${
            scanState === 'done'
              ? 'bg-brand-green/30 border-brand-green/50'
              : 'bg-brand-green/20 border-brand-green/30'
          }`}>
            <div className={`size-14 rounded-2xl text-white flex items-center justify-center shadow-lg shrink-0 transition-colors ${scanState === 'done' ? 'bg-brand-green shadow-brand-green/30' : 'bg-brand-green shadow-brand-green/30'}`}>
              <span className={`material-symbols-outlined text-3xl font-black ${scanState !== 'done' ? 'animate-pulse' : ''}`}>{statusIcon}</span>
            </div>
            <div>
              <h3 className="text-sm font-black text-brand-green uppercase tracking-widest leading-tight">
                AI Engine Active
              </h3>
              <p className="text-[10px] text-brand-green font-bold uppercase tracking-widest mt-1 opacity-70">
                {statusLabel}
              </p>
            </div>
          </div>
        </div>
      </main>

      <AppNavigation />
    </div>
  );
}
