import { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ExpirationItem } from '../components/ui/ExpirationItem';
import { AppNavigation } from '../components/layout/AppNavigation';

type Tab = 'All' | 'Expiring Soon' | 'Expired';

const EXPIRED_ITEMS = [
  {
    name: 'Greek Yogurt',
    status: 'Expired Oct 12, 2023',
    details: 'Fridge • 1 Unit',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxQKYbovcFvoXMLTMsRVmktCHkNSIsI4tHwPYK-54gf6GpbcBmO460E6G9I_8rfyrZB_ldUbm6lzVUfyqum4j25XMWjn_RqT-lv_pvB0cf32QK6rNJcc2VuLoNvFlDgjHoMZI7wBJQ99sFfAAN4Hu74_tPs8zvEWA5612eejwLDOJF1cf0CkSmUwoWeyXPhNExfu7gllLbytsa5RIyX2qMouwLvP0bdjgIxRG42lgIi7qhHincNSGZEWPy5-A9DyXfIRUPeMA0DVbu',
    statusColor: 'red' as const,
    actionLabel: 'Replace',
  },
  {
    name: 'Cheddar Cheese',
    status: 'Expired Oct 14, 2023',
    details: 'Fridge • 200g',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBssCtCfytmk9A3PNq5V3dPjZfySu4ywHexSXP7T_GUV01vtTpL25fTtl18nXuBe3PinHB0cdSziu8Hu7RGW2Preunawnr4ziDR1ZY-kjcCvkWdfZp70eKsRhixU6V70Zh080mWelBxm-ukimu4F3ec66RmKL2Dl77hBPIkmEsZQLXZUyBh9Ez7abw94-5BMm29ST5e6ZUcfPvH8FMn8HvFFb7fGHnMfeoCs-Th8wMW3MPIj_jEymLfMgnbqXInAAXYKvNtGuQFJjoj',
    statusColor: 'red' as const,
    actionLabel: 'Replace',
  },
];

const SOON_ITEMS = [
  {
    name: 'Whole Milk',
    status: 'Expires in 2 days',
    details: 'Fridge • 1L',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Syu7PJAAOnPmstPsRC3lj4ffw5Ojsj06_MxwM2DKXYQ2x9ZG_5ZzlRtchE9ZTE93LZWflenwKmJoXaf4nS52LvJItaVXw3wwGQRu4cejBj4MJuEf4wsBfsKFIV5_2LjbMnTlpvaouklvraQWBEX3-9uBEBcCXs9pG2TfjvaLEFcT-2z88Rk6GWVXBA5CIspiXcbZKCNiU24wAPWo3kV8Y31fQzcUu-Q8d2EE3s4FmjmtxrChZyovZMTjBLRKClLRdbSyB1f_n4Lf',
    statusColor: 'amber' as const,
    actionLabel: 'Use Now',
  },
  {
    name: 'Strawberries',
    status: 'Expires in 3 days',
    details: 'Fridge • 1 pack',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATvAnDDxqA00MjyZNexWbIxgZRmmI5NoMWdxCrPLVDD6W6_UDzmx79NLTonobZUUUMmSpgBnMCJ0Il1QIUjhk1qwpPBVVbrlNX-Uzt-0x3AF8upPAMcYG4JaKC-5rArMlcURJEEN-FeKTb4RLaGsa1AOpUvj0EDXPYekJs_HD3hypKtCkbkriCerh4pxoO7Q17RQWqTGcJ34TRXErv9gO50xjh5J7HTMRt8Sk4HwOPJYa-HHexI86avS28vqjp3HoBYhMmBkXri8BN',
    statusColor: 'amber' as const,
    actionLabel: 'Use Now',
  },
];

const TABS: Tab[] = ['All', 'Expiring Soon', 'Expired'];

export default function ExpirationTracking() {
  const [activeTab, setActiveTab] = useState<Tab>('Expiring Soon');

  const showExpired = activeTab === 'All' || activeTab === 'Expired';
  const showSoon = activeTab === 'All' || activeTab === 'Expiring Soon';

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <PageHeader title="Expiration Tracking" />

      {/* Filter Tabs */}
      <div className="bg-brand-green/95 border-t border-white/10">
        <div className="flex px-4 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-none px-6 py-4 border-b-4 font-bold text-sm uppercase tracking-widest transition-all ${
                activeTab === tab
                  ? 'border-primary text-white font-black shadow-[0_4px_10px_rgba(255,165,0,0.3)]'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 overflow-y-auto p-4 space-y-8 pb-48">
        {showExpired && (
          <section>
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="text-red-600 dark:text-red-400 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">error</span>
                Critical - Expired
              </h2>
              <span className="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300 text-[10px] font-black px-2.5 py-1 rounded-full border border-red-100 dark:border-red-800">
                {EXPIRED_ITEMS.length} Items
              </span>
            </div>
            <div className="space-y-4">
              {EXPIRED_ITEMS.map((item, i) => (
                <ExpirationItem key={i} {...item} />
              ))}
            </div>
          </section>
        )}

        {showSoon && (
          <section>
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="text-amber-600 dark:text-amber-400 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">warning</span>
                Expiring Soon
              </h2>
              <span className="bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300 text-[10px] font-black px-2.5 py-1 rounded-full border border-amber-100 dark:border-amber-800">
                {SOON_ITEMS.length} Items
              </span>
            </div>
            <div className="space-y-4">
              {SOON_ITEMS.map((item, i) => (
                <ExpirationItem key={i} {...item} />
              ))}
            </div>
          </section>
        )}

        {activeTab === 'All' && (
          <div className="p-8 bg-accent-sage/10 rounded-[2rem] border border-accent-sage/30 text-center shadow-inner mt-8">
            <div className="bg-white dark:bg-slate-900 size-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="material-symbols-outlined text-accent-sage text-4xl">check_circle</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm font-bold leading-relaxed px-4">
              12 other items are safely stored with plenty of time left.
            </p>
          </div>
        )}
      </main>

      <button className="fixed bottom-24 right-6 bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-30 ring-4 ring-white dark:ring-slate-900">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <AppNavigation activeTab="home" />
    </div>
  );
}
