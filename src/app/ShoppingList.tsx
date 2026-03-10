import { useState } from 'react';
import { ShoppingHeader } from '../components/layout/ShoppingHeader';
import { ShoppingCategory } from '../components/sections/ShoppingCategory';
import { AppNavigation } from '../components/layout/AppNavigation';

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

const TOTAL_ITEMS = PRODUCE_ITEMS.length + DAIRY_ITEMS.length + MEAT_ITEMS.length;

export default function ShoppingList() {
  const [checkedNames, setCheckedNames] = useState<Set<string>>(new Set());

  const toggle = (name: string) => {
    setCheckedNames((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const uncheckedCount = TOTAL_ITEMS - checkedNames.size;

  const withChecked = (items: typeof PRODUCE_ITEMS) =>
    items.map((item) => ({ ...item, isChecked: checkedNames.has(item.name) }));

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark max-w-[480px] mx-auto shadow-2xl">
      <ShoppingHeader activeTab="All Items" />

      <main className="flex-1 w-full pb-48">
        {/* Smart Sync Info */}
        <div className="p-6 flex items-center gap-4 bg-white dark:bg-slate-800 my-6 mx-6 rounded-3xl shadow-xl border-2 border-slate-50 dark:border-slate-800">
          <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined font-black">auto_awesome</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Smart-syncing from your <span className="text-brand-green">7-day meal plan</span>
          </p>
        </div>

        <ShoppingCategory
          title="Produce"
          itemsCount={PRODUCE_ITEMS.length}
          items={withChecked(PRODUCE_ITEMS)}
          onToggle={toggle}
        />
        <ShoppingCategory
          title="Dairy & Eggs"
          itemsCount={DAIRY_ITEMS.length}
          items={withChecked(DAIRY_ITEMS)}
          onToggle={toggle}
        />
        <ShoppingCategory
          title="Meat & Proteins"
          itemsCount={MEAT_ITEMS.length}
          items={withChecked(MEAT_ITEMS)}
          onToggle={toggle}
        />

        {/* Unified Checkout Button */}
        <div className="px-6 py-12">
          <button
            disabled={uncheckedCount === 0}
            className="bg-primary hover:bg-orange-600 disabled:opacity-40 w-full py-6 rounded-3xl text-white font-black text-lg shadow-[0_20px_50px_-10px_rgba(255,165,0,0.5)] flex items-center justify-center gap-3 transition-all active:scale-95 uppercase tracking-tighter"
          >
            <span className="material-symbols-outlined text-3xl font-black">
              {uncheckedCount === 0 ? 'check_circle' : 'shopping_basket'}
            </span>
            {uncheckedCount === 0 ? 'All Done!' : `Checkout (${uncheckedCount} items)`}
          </button>
        </div>
      </main>

      <AppNavigation />
    </div>
  );
}
