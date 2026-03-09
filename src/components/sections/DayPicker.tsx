export interface DayItem {
    id: string;
    name: string;
    date: number;
    isActive?: boolean;
}

const DAYS: DayItem[] = [
    { id: 'mon', name: 'Mon', date: 23, isActive: true },
    { id: 'tue', name: 'Tue', date: 24 },
    { id: 'wed', name: 'Wed', date: 25 },
    { id: 'thu', name: 'Thu', date: 26 },
    { id: 'fri', name: 'Fri', date: 27 },
    { id: 'sat', name: 'Sat', date: 28 },
];

export function DayPicker() {
    return (
        <div className="sticky top-[72px] z-10 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
            <div className="flex overflow-x-auto no-scrollbar px-4 gap-4 py-3">
                {DAYS.map((day) => (
                    <button
                        key={day.id}
                        className={`flex min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl p-2 transition-colors ${day.isActive
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-accent-sage/30 dark:bg-accent-sage/10 text-slate-700 dark:text-slate-300'
                            }`}
                    >
                        <span className="text-xs font-bold uppercase tracking-wider">
                            {day.name}
                        </span>
                        <span className="text-sm font-black">{day.date}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
