import { PageHeader } from '../components/layout/PageHeader';
import { ModuleNav, NavItem } from '../components/layout/ModuleNav';
import { CreatorCard } from '../components/ui/CreatorCard';

const TOP_CREATORS = [
  {
    rank: 1,
    name: 'Alex Rivera',
    handle: '@arivera',
    followers: '1.2M',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1tjirXIBma47XeN2ZRjF8u3vhVtdS2pF2koMStbbihJfmeQy4RwSyWU7f8OBg-ziWlV7OZh4uY6s-fFLB3bdxPusvB5GvCDKDIuwIWkJPdcM5ni0JtLH85BAKl9fsguC1YFFcxwGk3EhAgr_FDiNCWQn1R-XA2ONBMEbDRFZUmvg4BgdHfclg3jLiC6UCeffX50LVdfJJR_zJ9_3EIFbFTa4MHUikEDRLl2kxoS_OSzYxlgnOD-adXX0dZ3mEndbVKB2CCwIFjf5o',
  },
  {
    rank: 2,
    name: 'Sarah Chen',
    handle: '@sarahc',
    followers: '890K',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrajq3Nlr2OWCUsHh3ke7nAjqBoGAGn3dcm0XeDuc6jYRw8S8POm1DQqRKqQw_HwOToq9sp5TZdAa7f3VANWGFTA6lIeEy86jTN_lm7lzU-5Q5-RpoXaDxmeHoGU8i9_EenRexJrewzZF7smKRO5HkGaqWlbHBzO_E9DYOlsKiWCbyzuteLbXRqNJn3rvpIwrgJxEvTWrMesg9Ei2ihb8NOFE87uOGv5SmVYWrN3jRm85nRGwtepm4OBPOSyPUi1c5k6LKNtVDN7Ph',
  },
  {
    rank: 3,
    name: 'Marcus Jones',
    handle: '@mjones',
    followers: '750K',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1u8rq0SKR_pYYLYn3freCcNI9cN6YgAoOhZTTh5knPdOPRRYEZ86hvZgFfllD9KFnzBZnXopTpf2f0UVQ7XeITF4d2qRGX_SyAOqfi4h6cOyt6_utARc3GLa2qwEHbRiBHSoiliT8vsbIySLkmcysQxLes-W5oAU2QlEwfkOZT_H1SgzAu7qE4weknFTXAPrFVb4XePLSWNmbPxkPtbsj5rN-28Ji-fuEAZDvnTA60NLsXdYNcn_UKH5jAsWtRV7ylZTB92ROCxjr',
  },
  {
    rank: 4,
    name: 'Elena Glass',
    handle: '@eglass',
    followers: '640K',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALBS2kL84KnsmRGd1RzOu960uIIR-cxWIsPvTR7dO075b-cQgIEKua4fXYH2_vTp36kIxKDtTzA8h1Uxn7CMTqmYipr1k5eSh41VHmksAl1R3WOCrEO372Kj3O19izbAUDjiFyiBHsYsRvMVlfpRYyp-XmVqHloEx6RZqnk0Y7EjbFizSsZHrNR2wpvwHyxHe9b6IjUMZHPzjeAMKsFleDHbPcKF5A6MMKae-TQAfaLQ6oRILW7sgrlP2_W1JtxSAX73Srk9TWDSns',
    isFollowing: true,
  },
];

const ON_THE_RISE = [
  {
    name: 'Jordan Smith',
    growth: '+24% this week',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOwMu5YJOreBWH0J_oD00XaM6fLJb4kBCO9M79YNO8BmK2mPo3lQOzlPxLbP1dsVWz3YaoeMrAEs2Woza2NMrNsAdI7_kjtBg-VA1mGJrir3tgrB4Y-yBZ3uXT9p0z_gpcMRTFwyotXMVuzM9kVCNR1dXHVVl8KYzlDCEoDPiMlie9EeRzosCVWhkvAKfJFHoF-c2G6tr4p-jsF62p2AhjriMJSqAPABjINUnimM8zC68deodejPbRxNEN14inDrKoIpgMdB5_NZOq',
  },
  {
    name: 'Maya Gupta',
    growth: '+18% this week',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKpIRVVYyTy4vmdmhORDtcQ1SZEXO0K4FKW20gmNLKWNASCARCXRP9vGscm0o1SHOw75-8wxorvO319Xqa44b275TssnZ1eQB7xWoDRF7-eXJxw5dwkkE1VTdGVIJQV7gguffrxwRJZN6RpBYzRys39Ys6wK-rCv-JdyPoRP78eQvnYHghXYAtKq4D6R2hd3NmUark_zXzZmfHyHuJka5mxdVAzRq2iZU0pwU8cKhPRo7AamOLf19VvOx-DtcWP4cpv1SdPj8d2TNR',
  }
];

const TRENDING_NAV: NavItem[] = [
  { id: 'home', icon: 'home', label: 'Home', path: '/' },
  { id: 'explore', icon: 'explore', label: 'Explore', path: '/reciperankings' },
  { id: 'trending', icon: 'trending_up', label: 'Trending', path: '/trendingcreators', fill: true },
  { id: 'cook', icon: 'restaurant', label: 'Cook', path: '#' },
  { id: 'profile', icon: 'person', label: 'Profile', path: '/profile' },
];

export default function TrendingCreators() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <PageHeader title="Trending Creators" />

      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm sticky top-[72px] z-10 overflow-hidden">
        <div className="flex px-4 overflow-x-auto no-scrollbar">
          {['Daily', 'Weekly', 'Monthly', 'All Time'].map((tab) => {
            const isActive = tab === 'Weekly';
            return (
              <button
                key={tab}
                className={`flex-1 min-w-24 py-4 text-center text-xs font-black uppercase tracking-widest border-b-4 transition-all ${isActive
                    ? 'border-primary text-brand-green'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </nav>

      <main className="flex-1 p-4 space-y-8 pb-32">
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-1">
            Top Ranked
          </h2>
          <div className="space-y-4">
            {TOP_CREATORS.map((creator) => (
              <CreatorCard key={creator.handle} {...creator} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-1">
            On the Rise
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {ON_THE_RISE.map((creator) => (
              <div key={creator.name} className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 text-center transition-all active:scale-[0.98]">
                <div className="relative mx-auto mb-4 size-20">
                  <img
                    className="w-full h-full rounded-2xl object-cover border-2 border-accent-sage shadow-md"
                    src={creator.imageSrc}
                    alt={creator.name}
                  />
                  <div className="absolute -top-1 -right-1 bg-primary size-5 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900 shadow-sm">
                    <span className="material-symbols-outlined text-white text-[12px] font-black">trending_up</span>
                  </div>
                </div>
                <p className="font-black text-sm text-slate-900 dark:text-slate-100 truncate leading-tight">
                  {creator.name}
                </p>
                <p className="text-[10px] text-primary font-black uppercase tracking-wider mt-1 mb-4">
                  {creator.growth}
                </p>
                <button className="w-full bg-primary hover:bg-orange-600 shadow-lg shadow-primary/20 text-white text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl transition-all">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ModuleNav activeTab="trending" variant="brand" items={TRENDING_NAV} />
    </div>
  );
}
