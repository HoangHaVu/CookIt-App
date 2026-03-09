interface ShoppingItemProps {
    name: string;
    subtext?: string;
    isChecked?: boolean;
}

export function ShoppingItem({ name, subtext, isChecked = false }: ShoppingItemProps) {
    return (
        <label className="flex items-center gap-4 py-4 group cursor-pointer">
            <input
                className="custom-checkbox h-6 w-6 rounded border-slate-300 text-header-footer focus:ring-header-footer dark:bg-slate-700 dark:border-slate-600"
                type="checkbox"
                defaultChecked={isChecked}
            />
            <div className="flex flex-col">
                <span className="text-base font-medium text-slate-900 dark:text-slate-100">
                    {name}
                </span>
                {subtext && (
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                        {subtext}
                    </span>
                )}
            </div>
        </label>
    );
}
