import { ReactNode } from 'react';

interface MealSectionProps {
    title: string;
    kcal: string;
    icon: string;
    children: ReactNode;
}

export function MealSection({ title, kcal, icon, children }: MealSectionProps) {
    return (
        <section>
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-header-green dark:text-accent-sage flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                    {title}
                </h2>
                <span className="text-xs font-medium text-slate-500">{kcal}</span>
            </div>
            {children}
        </section>
    );
}
