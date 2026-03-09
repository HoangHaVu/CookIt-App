import { ShoppingItem } from '../ui/ShoppingItem';

interface ShoppingCategoryProps {
    title: string;
    itemsCount: number;
    items: Array<{
        name: string;
        subtext?: string;
        isChecked?: boolean;
    }>;
}

export function ShoppingCategory({ title, itemsCount, items }: ShoppingCategoryProps) {
    return (
        <section>
            <div className="bg-category-bg px-4 py-2 mt-4 flex items-center justify-between">
                <h2 className="text-header-footer font-bold uppercase tracking-wider text-xs">
                    {title}
                </h2>
                <span className="text-[10px] font-bold text-header-footer/70">
                    {itemsCount} ITEMS
                </span>
            </div>
            <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
                {items.map((item, i) => (
                    <ShoppingItem key={i} {...item} />
                ))}
            </div>
        </section>
    );
}
