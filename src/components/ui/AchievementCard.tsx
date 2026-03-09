interface AchievementCardProps {
    title: string;
    description: string;
    icon: string;
    isUnlocked: boolean;
    colorVariant?: 'orange' | 'blue' | 'pink' | 'green' | 'slate';
    progressLabel?: string;
}

export function AchievementCard({
    title,
    description,
    icon,
    isUnlocked,
    colorVariant = 'slate',
    progressLabel
}: AchievementCardProps) {
    const colorClasses = {
        orange: 'bg-orange-100 text-orange-500',
        blue: 'bg-blue-100 text-blue-500',
        pink: 'bg-pink-100 text-pink-500',
        green: 'bg-green-100 text-green-600',
        slate: 'bg-slate-100 text-slate-400',
    };

    return (
        <div className={`bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border ${isUnlocked ? 'border-slate-100 dark:border-slate-700' : 'border-dashed border-slate-200 dark:border-slate-600 grayscale opacity-70'} flex items-center gap-4 transition-all active:scale-[0.98]`}>
            <div className={`size-14 rounded-lg flex items-center justify-center shrink-0 ${isUnlocked ? colorClasses[colorVariant] : colorClasses.slate}`}>
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{title}</h4>
                <p className={`text-xs ${isUnlocked ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400 italic'}`}>
                    {description}
                </p>
                {progressLabel && (
                    <p className="text-[10px] font-bold text-brand-green mt-1">
                        {progressLabel}
                    </p>
                )}
            </div>
            <span className={`material-symbols-outlined ${isUnlocked ? 'text-green-500' : 'text-slate-300'}`}>
                {isUnlocked ? 'check_circle' : 'lock'}
            </span>
        </div>
    );
}
