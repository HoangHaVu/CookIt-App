interface StatsCardProps {
    label: string;
    value: string | number;
    isActive?: boolean;
}

export function StatsCard({ label, value, isActive = false }: StatsCardProps) {
    return (
        <div
            className={`flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl border border-accent-light p-3 items-center text-center ${isActive ? 'bg-accent-light/10' : 'bg-white shadow-sm'
                }`}
        >
            <p className={`text-xl font-bold ${isActive ? 'text-brand-green' : 'text-slate-900'}`}>{value}</p>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                {label}
            </p>
        </div>
    );
}
