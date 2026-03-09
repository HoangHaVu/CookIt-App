import { PantryItemCard } from '../ui/PantryItemCard';

interface PantryCategoryProps {
    title: string;
    itemsCount: number;
    items: Array<{
        name: string;
        quantity: string;
        imageSrc: string;
        imageAlt: string;
        levelColor?: 'primary' | 'red' | 'green';
        levelWidth?: string;
        actionIcon?: string;
    }>;
}

export function PantryCategory({ title, itemsCount, items }: PantryCategoryProps) {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">
                    {title}
                </h3>
                <span className="text-xs font-semibold text-nav-bg bg-accent-sage px-2 py-1 rounded-full uppercase tracking-wider">
                    {itemsCount} Items
                </span>
            </div>
            <div className="grid gap-4">
                {items.map((item, i) => (
                    <PantryItemCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
}
