import type { Ingredient } from '../../lib/types';

interface IngredientsListProps {
    ingredients?: Ingredient[];
}

function IngredientItem({ name, amount, unit }: Ingredient) {
    return (
        <li className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
            <span className="size-2 rounded-full bg-brand-green shrink-0"></span>
            <span className="flex-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                {name}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
                {amount}{unit ? ` ${unit}` : ''}
            </span>
        </li>
    );
}

const FALLBACK_INGREDIENTS: Ingredient[] = [
    { name: 'Spaghetti or Linguine', amount: '250g' },
    { name: 'Unsalted Butter', amount: '4 tbsp' },
    { name: 'Fresh Garlic Cloves, minced', amount: '4-5' },
    { name: 'Parmesan Cheese', amount: '1/2 cup' },
];

export function IngredientsList({ ingredients = FALLBACK_INGREDIENTS }: IngredientsListProps) {
    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ingredients</h3>
                <span className="text-sm font-semibold text-brand-green">
                    {ingredients.length} items
                </span>
            </div>
            <ul className="space-y-3">
                {ingredients.map((ing, i) => (
                    <IngredientItem key={i} {...ing} />
                ))}
            </ul>
        </section>
    );
}
