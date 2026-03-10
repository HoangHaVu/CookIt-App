import { useState } from 'react';
import { AppNavigation } from '../components/layout/AppNavigation';
import { PageHeader } from '../components/layout/PageHeader';
import { ProductCard } from '../components/ui/ProductCard';

const RECOMMENDED_PRODUCTS = [
  {
    title: "Professional Chef's Knife",
    category: "Kitchen Tools",
    price: "$89.00",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIlFYj84KzvryXwuTTg-4t9to3B3xi1P5oyWQ1N0-m3Uf9-hVHAml82GCmBNqH5m2Zaj-t5cDyDhe_mOdMLQkCMsoLkDJRnEoWXAyvnzJw6mHYstJtNHzDU17WQTK5aneVGBaO0L_iWoASLUMc-fHzQCP45gBIbEYesoZHAK4PhF-8WbLopO6b0DaDQH_LCYBgwBVSQKGg1iTMu4EPX9iqtGPQKNRONLeQiO3P6hKAfLAx-IUmLqtG0rRnmxfj2T0jU5mbSkpE1Wqg",
    rating: "4.9",
    reviews: "128"
  },
  {
    title: "White Truffle Oil (100ml)",
    category: "Ingredients",
    price: "$24.50",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSxQ5NV0RcrlR3agE_X4utd01tenWypxpsH9PKiRB74ETYxF8hfUIxqSFkB8bj3259KweUhQvw2CU-Em-qA6YRQ7y61b7YnI1cfFI8ybGLIGdMJAi-DmNuL3Pu9Q12QZeGtMy_xNpqSvZImIpCqdQT21bQSm3_wlOOaVtovum1EdNqz-DYuYfeR_9JsK7AtmkHZRAC4YVGD-QpqUQXmZO8Y3vD7z0J5_Z5wBa1ExvXH9aRel6VZL5WzHmnOgrVopledZXQmgpp1NoK",
    rating: "4.7",
    reviews: "45",
    isBestSeller: true
  }
];

const TRENDING_PRODUCTS = [
  {
    title: "Ceramic Measuring Set",
    category: "Bakeware",
    price: "$32.00",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhgsFrPutJRDZLDRY1jdaSPU_pYzwexZOE6APL7lLxWsU_zmbhesNt08LLaqYZXKcN59opzrLth-GEIDobv56jE-RqgSTitGzt9hp_KdQnI_u6wXhWi2e1s48W5U5H-DVCTVAOc8QpUz1uNPupJdKgCQwtjdOAHyqJCKS2g0kB3Ayw6NwuMMSZtjm1LMbGg1_7MwUxpUu6ia-8lzNQ_Vrs5j0zFUOOPhBHvjFDD8ec_J7Kh-fvd6EBYACmpEdGSfDv8Bl3hjICsTZ",
    rating: "5.0",
    isNew: true
  },
  {
    title: "Smoked Spanish Paprika",
    category: "Pantry",
    price: "$12.99",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZDq2Cyu4jSk17WFNg1pnjplRfCIFhnL1npHJWQVKmFEUGjH7P9J646KWlZ-d2Gm3XeQLQ2JD-W2ME5oOblqXzBXaDJSkpMa9kX2iBEgrt3EhCNeCHDTsIkNt89_p5WV1y85lJWBxcBO1TQImM7S7EX_zr362S7TisY3lI8yDe8cNUGbbNfOM-9K3Nh9Rvng2bsFTxm_mBesEK8zNOw_O8sbuvSro_p02S0jEP1fcOcsOsiFykHC4RTOjqPxbmbmHnwcomatOSgu2",
    rating: "4.8",
    isBestSeller: true
  }
];

type MarketCat = 'All' | 'Kitchen Tools' | 'Ingredients' | 'Bakeware' | 'Pantry';
const MARKET_CATS: MarketCat[] = ['All', 'Kitchen Tools', 'Ingredients', 'Bakeware', 'Pantry'];

const ALL_PRODUCTS = [...RECOMMENDED_PRODUCTS, ...TRENDING_PRODUCTS];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState<MarketCat>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const recTitles = new Set(RECOMMENDED_PRODUCTS.map((p) => p.title));
  const recommended = filtered.filter((p) => recTitles.has(p.title));
  const trending = filtered.filter((p) => !recTitles.has(p.title));

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-5xl mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <PageHeader title="Marketplace" rightActionIcon="shopping_cart" />

      <main className="flex-1 pb-40">
        {/* Search & Tabs */}
        <section className="px-6 py-8 space-y-8 bg-brand-green text-white rounded-b-[4rem] shadow-2xl relative z-10">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors font-black">search</span>
            <input
              className="w-full h-16 pl-16 pr-6 rounded-3xl border-none bg-white/10 backdrop-blur-xl text-white font-bold text-sm placeholder:text-white/40 focus:ring-0 shadow-inner group-focus-within:bg-white/20 transition-all"
              placeholder="Search tools & organic ingredients"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-6 px-6">
            {MARKET_CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex h-12 shrink-0 items-center justify-center px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-xl shadow-primary/30 border-2 border-primary'
                    : 'bg-white/5 text-white/70 border-2 border-white/10 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Recommended Grid */}
        <section className="px-6 py-12 space-y-8">
          <div className="flex items-end justify-between px-1">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                <span className="material-symbols-outlined text-xl font-black italic">recommend</span>
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Recommended for You</h3>
            </div>
            <button className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline underline-offset-4">View All</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {recommended.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </section>

        {/* Trending List */}
        <section className="px-6 py-4 space-y-8">
          <div className="flex items-center gap-3 px-1">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-xl font-black">trending_up</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Trending Now</h3>
          </div>

          <div className="grid gap-4">
            {trending.map((product, i) => (
              <ProductCard key={i} {...product} variant="list" />
            ))}
          </div>
        </section>
      </main>

      <AppNavigation activeTab="recipes" />
    </div>
  );
}
