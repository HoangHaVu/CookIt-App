interface ExpirationItemProps {
    name: string;
    status: string;
    details: string;
    imageSrc: string;
    statusColor: 'red' | 'amber';
    actionLabel: string;
    onAction?: () => void;
}

export function ExpirationItem({
    name,
    status,
    details,
    imageSrc,
    statusColor,
    actionLabel,
    onAction
}: ExpirationItemProps) {
    const borderColor = statusColor === 'red' ? 'border-red-500' : 'border-amber-500';
    const statusTextColor = statusColor === 'red' ? 'text-red-500' : 'text-amber-600';
    const shadowColor = statusColor === 'red' ? 'shadow-red-500/5' : 'shadow-amber-500/5';
    const bgVariant = statusColor === 'amber' ? 'bg-accent-sage/20 dark:bg-accent-sage/10' : 'bg-white dark:bg-slate-800';

    return (
        <div className={`flex items-center gap-4 ${bgVariant} p-3 rounded-xl shadow-sm border-l-4 ${borderColor} ${shadowColor} transition-all active:scale-[0.98]`}>
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0 shadow-inner border border-slate-100 dark:border-slate-700"
                style={{ backgroundImage: `url('${imageSrc}')` }}
            ></div>
            <div className="flex-1 min-w-0">
                <p className="text-slate-900 dark:text-slate-100 font-bold truncate leading-tight">
                    {name}
                </p>
                <p className={`${statusTextColor} text-xs font-bold mt-0.5`}>
                    {status}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-medium mt-0.5">
                    {details}
                </p>
            </div>
            <button
                onClick={onAction}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${statusColor === 'red'
                        ? 'bg-primary text-white shadow-md shadow-primary/20 hover:bg-orange-600'
                        : 'border-2 border-primary text-primary hover:bg-primary/10'
                    }`}
            >
                {actionLabel}
            </button>
        </div>
    );
}
