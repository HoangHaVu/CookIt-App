import { PantryHeader } from '../components/layout/PantryHeader';
import { PantrySearch } from '../components/sections/PantrySearch';
import { PantryCategory } from '../components/sections/PantryCategory';
import { ModuleNav, NavItem } from '../components/layout/ModuleNav';

const GRAINS_ITEMS = [
  {
    name: 'Basmati Rice',
    quantity: '2.5 kg left',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUBCyeraeUUlEW4SMEsN-_A9VNrV1rAD2m7mXFHBMIbkZooRicyrYem6-6zRQGzTOqjTDI0evhe7DkJGd3RsD1TwYjaLaPAfS3PG2WYUPsMrztc5DpS3ix2MpU6VqUjReJXZ-paXiDNsn9y_VCYvz3HZfgMmhudNqWP8uISKSwHATMQjsbsI6nwVgIRVHnptVCihHFZjWujQrEa17Q1TFjpDZAdEQ37nSIyVqt3wpyJHvXPddoizDBW4_UYGYnum8qmKeKaVf1PhDN',
    imageAlt: 'Close up of uncooked white rice grains',
    levelWidth: '80%',
  },
  {
    name: 'Rolled Oats',
    quantity: '0.2 kg left',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuwAWl79ws80HyIpw7BvHMxrWVf2cDIdWs2jGMp-i0XxckVL01zFiLtu2vwSenaGcmCOkXsmbH7BRsDIkRhO_XpwXKnbbRTh75cs3_PlXd6Zj4NQqERPQuWm4g-MWXBgO03IMN62pjk1Ku7w7fYoz4shYhVgsW5dtUj9nPnxU2XHqs1ouHIHvRd-rigtYM8woL7hI_alQJ56IVMYqhB1_69HKuY6O1N_IFIAn-wkXDYe32iLW0jdWistZV0Lm8RE01iya0KrA6p0wr',
    imageAlt: 'Organic rolled oats in a jar',
    levelColor: 'red' as const,
    levelWidth: '10%',
    actionIcon: 'shopping_cart',
  },
];

const SPICES_ITEMS = [
  {
    name: 'Ground Cinnamon',
    quantity: 'Full jar',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIJI9B1AhTtQfMwBaj8PwNRrj8hpa9H3pCpfDmbksLnyp7F7QnW5iVwqloldM7j3yQSINuL068KLG7WcQkbP0kQEFiNiLT2GMKGk6xmDDJft6P-eaStPwjwdHFs47v2-Yz0HzRRA3BGJh5degEcqKUSuv_lp7zmbDuav6DwxrM-8LO145dHE6D93pZ4wDCtzKxMvCLs_21BoGkQ9huqu80XKv_oTINIk2fMDTrj7zVj2-QOwhezvrXvNevLtzzzTkCAv-BjwMRr1iD',
    imageAlt: 'Cinnamon sticks and ground powder',
    levelColor: 'green' as const,
    levelWidth: '95%',
    actionIcon: 'edit',
  },
];

const CANNED_ITEMS = [
  {
    name: 'Diced Tomatoes',
    quantity: '3 cans',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg5KRE44UmQ4yKyPXe5T9qINbQwnLaFlL8SR5WgMClx9bI3iix5QaC9V9r72mXJYwydoaCq23tQJax3KKlmu_TKInVERF9W3hdCRM5HnxNAFfPrIhijUejB4XBfvh5tVTMWRd48bLa3Qy7wr7ux6JyveF0xL0yp8cdBCdKQ41gmAWGvE48Z0Gdm6_Ahowtkst__3Da7iHod0414X44addXeDSN9wORIkzP8F0McF534rnYi7KP4tlATeZikBAhTSxO93mhBGnbgT0N',
    imageAlt: 'Canned diced tomatoes',
    levelWidth: '100%',
  },
];

const PANTRY_NAV: NavItem[] = [
  { id: 'home', icon: 'home', label: 'Home', path: '/' },
  { id: 'planner', icon: 'calendar_today', label: 'Planner', path: '#' },
  { id: 'recipes', icon: 'menu_book', label: 'Recipes', path: '#' },
  { id: 'pantry', icon: 'inventory_2', label: 'Pantry', path: '/pantryinventory', fill: true },
  { id: 'profile', icon: 'person', label: 'Profile', path: '/profile' },
];

export default function PantryInventory() {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
      <PantryHeader />
      <PantrySearch />

      {/* Category Pills */}
      <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary text-white px-5 shadow-sm">
          <span className="text-sm font-semibold">All</span>
        </button>
        {['Grains', 'Spices', 'Canned'].map((cat) => (
          <button key={cat} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-accent-sage/20 text-nav-bg px-5 border border-accent-sage/30">
            <span className="text-sm font-medium">{cat}</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
        ))}
      </div>

      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-32">
        <PantryCategory title="Grains" itemsCount={4} items={GRAINS_ITEMS} />
        <PantryCategory title="Spices" itemsCount={12} items={SPICES_ITEMS} />
        <PantryCategory title="Canned Goods" itemsCount={6} items={CANNED_ITEMS} />
      </main>

      <button className="absolute bottom-24 right-6 size-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <ModuleNav activeTab="pantry" variant="pantry" items={PANTRY_NAV} />
    </div>
  );
}
