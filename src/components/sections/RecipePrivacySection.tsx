type Privacy = 'Private' | 'Friends' | 'Public';

interface RecipePrivacySectionProps {
  privacy: Privacy;
  onPrivacyChange: (p: Privacy) => void;
}

const OPTIONS: { value: Privacy; icon: string; label: string }[] = [
  { value: 'Private', icon: 'lock', label: 'Private' },
  { value: 'Friends', icon: 'group', label: 'Friends' },
  { value: 'Public', icon: 'public', label: 'Public' },
];

export function RecipePrivacySection({ privacy, onPrivacyChange }: RecipePrivacySectionProps) {
  return (
    <section className="p-4 my-4 mx-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-brand-green/10 shadow-sm">
      <div className="mb-4">
        <h4 className="text-brand-green font-bold text-sm uppercase tracking-wider">
          Privacy Settings
        </h4>
        <p className="text-xs text-slate-500 font-medium">
          Who can see this culinary masterpiece?
        </p>
      </div>

      <div className="flex bg-white dark:bg-slate-900 p-1 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800">
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onPrivacyChange(opt.value)}
            className={`flex-1 py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
              privacy === opt.value
                ? 'bg-brand-green text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-symbols-outlined text-base">{opt.icon}</span>
            {opt.label}
          </button>
        ))}
      </div>
    </section>
  );
}
