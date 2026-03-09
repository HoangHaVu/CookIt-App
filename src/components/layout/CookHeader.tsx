import { useNavigate } from 'react-router-dom';

interface CookHeaderProps {
    currentStep: number;
    totalSteps: number;
    phaseName: string;
}

export function CookHeader({ currentStep, totalSteps, phaseName }: CookHeaderProps) {
    const navigate = useNavigate();

    return (
        <header className="flex items-center px-4 py-6 justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center size-12 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90 shadow-sm border border-slate-200 dark:border-slate-800"
            >
                <span className="material-symbols-outlined text-slate-900 dark:text-slate-100 font-black">
                    close
                </span>
            </button>

            <div className="text-center">
                <h2 className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    Step {currentStep} of {totalSteps}
                </h2>
                <p className="text-brand-green dark:text-accent-sage text-sm font-black uppercase tracking-wider">
                    {phaseName}
                </p>
            </div>

            <button className="flex items-center justify-center size-12 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90 shadow-sm border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-slate-900 dark:text-slate-100 font-black">
                    more_vert
                </span>
            </button>
        </header>
    );
}
