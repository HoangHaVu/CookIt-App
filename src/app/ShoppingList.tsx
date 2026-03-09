import { ShoppingHeader } from '../components/layout/ShoppingHeader';
import { ShoppingCategory } from '../components/sections/ShoppingCategory';
import { CheckoutBar } from '../components/ui/CheckoutBar';
import { FabAdd } from '../components/ui/FabAdd';
import { ModuleNav } from '../components/layout/ModuleNav';

const PRODUCE_ITEMS = [
  { name: 'Organic Baby Spinach', subtext: 'For: Green Power Salad' },
  { name: 'Roma Tomatoes (4)', subtext: 'For: Pasta Primavera' },
  { name: 'Red Onions', subtext: 'Essential Staple' },
];

const DAIRY_ITEMS = [
  { name: 'Greek Yogurt (500g)', subtext: 'For: Breakfast Bowls' },
  { name: 'Unsalted Butter', subtext: 'For: Garlic Bread' },
];

const MEAT_ITEMS = [
  { name: 'Chicken Breast (2 lbs)', subtext: 'For: Grilled Chicken Salad' },
];

export default function ShoppingList() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
        <ShoppingHeader activeTab="All Items" />
        <main className="flex-1 max-w-xl mx-auto w-full pb-48">
          {/* Smart Sync Info */}
          <div className="p-4 flex items-center gap-3 bg-white dark:bg-slate-800 my-2 mx-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-header-footer">auto_awesome</span>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Smart-syncing from your 7-day meal plan
            </p>
          </div>

          <ShoppingCategory title="Produce" itemsCount={3} items={PRODUCE_ITEMS} />
          <ShoppingCategory title="Dairy & Eggs" itemsCount={2} items={DAIRY_ITEMS} />
          <ShoppingCategory title="Meat & Proteins" itemsCount={1} items={MEAT_ITEMS} />
        </main>

        <FabAdd />
        <CheckoutBar itemsCount={6} />
        <ModuleNav activeTab="shopping" variant="dark" />
      </div>
    </>
  );
}
