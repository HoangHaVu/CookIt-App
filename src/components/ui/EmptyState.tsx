interface EmptyStateProps {
  icon: string;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon, title, subtitle, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
      <div className="size-24 rounded-[2rem] bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 shadow-inner">
        <span className="material-symbols-outlined text-5xl text-slate-200 dark:text-slate-600 font-black">{icon}</span>
      </div>
      <h3 className="text-lg font-black uppercase tracking-tight text-slate-700 dark:text-slate-200 mb-2">{title}</h3>
      {subtitle && (
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 leading-relaxed max-w-[240px]">{subtitle}</p>
      )}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-8 bg-primary text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-orange-600 active:scale-95 transition-all"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
