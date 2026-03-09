interface PantryItemCardProps {
    name: string;
    quantity: string;
    imageSrc: string;
    imageAlt: string;
    levelColor?: 'primary' | 'red' | 'green';
    levelWidth?: string;
    actionIcon?: string;
}

export function PantryItemCard({
    name,
    quantity,
    imageSrc,
    imageAlt,
    levelColor = 'primary',
    levelWidth = '100%',
    actionIcon = 'add_circle',
}: PantryItemCardProps) {
    const colorClass =
        levelColor === 'red' ? 'bg-red-500' :
            levelColor === 'green' ? 'bg-green-500' :
                'bg-primary';

    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
            <div className="h-16 w-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    data-alt={imageAlt}
                    src={imageSrc}
                />
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">{name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{quantity}</p>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2">
                    <div
                        className={`${colorClass} h-full rounded-full transition-all`}
                        style={{ width: levelWidth }}
                    ></div>
                </div>
            </div>
            <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <span className="material-symbols-outlined">{actionIcon}</span>
            </button>
        </div>
    );
}
