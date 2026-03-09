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

export default function ShoppingList() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark max-w-xl mx-auto shadow-2xl">
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

        <ShoppingCategory title="Produce" itemsCount={3} items={PRODUCE_ITEMS} />
        <ShoppingCategory title="Dairy & Eggs" itemsCount={2} items={DAIRY_ITEMS} />
        <ShoppingCategory title="Meat & Proteins" itemsCount={1} items={MEAT_ITEMS} />

        {/* Unified Checkout Button inside main content */}
        <div className="px-6 py-12">
          <button className="bg-primary hover:bg-orange-600 w-full py-6 rounded-3xl text-white font-black text-lg shadow-[0_20px_50px_-10px_rgba(255,165,0,0.5)] flex items-center justify-center gap-3 transition-all active:scale-95 uppercase tracking-tighter">
            <span className="material-symbols-outlined text-3xl font-black">shopping_basket</span>
            Checkout (6 items)
          </button>
        </div>
      </main>

      <AppNavigation />
    </div>
  );
}
