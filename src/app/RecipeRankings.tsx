import { RankingHeader } from '../components/layout/RankingHeader';
import { RankingCard } from '../components/ui/RankingCard';
import { AppNavigation } from '../components/layout/AppNavigation';

const TOP_RANKINGS = [
  {
    rank: 1,
    title: 'Truffle Mushroom Risotto',
    author: 'Chef Isabella',
    rating: 4.9,
    reviewsCount: '1.2k',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzH6E7wkqhO6pQse4NonHIY0eVx0-U5dkKMU4yBBptZGbcz2RPyj6djmqg92xOYOq11dZulIZlZwkA8qHdozyJr3uCPB9i3vTc8zVSDvLZQXR3S5R3CAWsvh-ip5dbWFNiajmTMVCObcUI18pPsvLUakWbk7axLOQNgsN4k4KhwmKVlqVW3J4-k4Qla_yKKdB4nD1_e0v1yYAqN3Kgq1PgQfj2LhrGv2m45DscPM1A94DMzdMXzwGaMzYJfK-d--7AN5ieODrvQjNs',
    isTopThree: true,
  },
  {
    rank: 2,
    title: 'Pan-Seared Scallops',
    author: 'Marcus Wareing',
    rating: 4.8,
    reviewsCount: '856',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtDcJLM6vkDpsPs0SfisWUmZ3nrQEQosPG7ZqLGiUqGm_JabnaTbwCO-1KDo5K6833ZgLBxIwWJmb8oj2BaV126yuKXpKi5KRD7YjIraQsjvqy-QOYP3mOrdFkNDStWxXlgvmK8rnLJ4Jo4rvxoL0_oDiC5OQ55xvvAzYWUVFXQg_dumZNy93KEDt7RxZ_8uAFWqbuJuyr2Q7qTJzzVDl-0G8kzYGFe7dMT9yioY6cwu-kEE_0AQkeAMnnH4OAmBGGO2VycMXBtWX3',
  },
  {
    rank: 3,
    title: 'Artisan Sourdough Pizza',
    author: 'Elena Rossi',
    rating: 4.8,
    reviewsCount: '2.1k',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv0pueYQmI62_V8WrpsXcXyZPrFNe08nKx_HGCp9836wE6_UudaV_Oau1GTbaMumKpZX1DAWJzMkXsWNRzHOmhXf74yk6R4OWwXhd3V_x7fqHhCb0r0gomw9qBbx4mB0gLBLAr1j-I3RZhoeVSmnWpApXm52U_GQJ2vRzGRvUhJNwkh3XQOgfuey7NSEHrCh90H1n4ZA9B7PBOOF1hAN_aTUpvC6jWgm4iC6VmuIoi-F-sk-voAfItR-q4KLCVLZlY1SbjKGqKbZWe',
  },
  {
    rank: 4,
    title: 'Honey Glazed Salmon',
    author: 'Julian Moore',
    rating: 4.7,
    reviewsCount: '432',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfo6sUoR1C1kzKja-NYkLHrUNCc3HVXgITPILLJXWKBXi0gpynDfKF3r01DcrIZvSN7anzJm4eTRNtKhX9j-JwfBETqmUfNIF53u61xgkx9kvgmIF_5pzyFIVHr6P_HqtAN1Bzy99m9ZM41gUFIZVAi3zpZtxy59b_Uj6WX8dQJwlTVEzu94MDro7-rGA78gPlPyFM9fxOfOAD-AQrfJCqd5czb8oalkg3BBnCoQKQk7AFWVxCGWbn1gNINkAy4l-sydHHLth8cCr4',
    badgeColor: 'bg-slate-400',
  },
  {
    rank: 5,
    title: 'Wild Berry Soufflé',
    author: 'Pastry Chef Chloe',
    rating: 4.7,
    reviewsCount: '677',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOBI2OL3NHElzkg_nvzTSzZk4f6Hk_zzlfk5OzyuwuonXwQZZ0rOO9H4ENyKxa2SW2-94B4SBghGaBNVxanMlmv55K4afA4LLppsfPHlxZ04RIuU0H61KUHy4mY0zZE-7aM-zgKG1oQwgw1lda5ob27TocvBTtF1KnB72Ywrx5LIEPe9WEwOPfdKJicn7kI9LjqlzHXhEdNdKeOSG7ACsSmVHiJzoCrfALQavi9O8Z6g4rdMGZ9P3F1Xvs5S3Ta4FMzf39Ena3cpCn',
    badgeColor: 'bg-slate-400',
  }
];

export default function RecipeRankings() {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <RankingHeader title="Top Rated Recipes" />

      <main className="flex-1 px-4 py-8 space-y-6 pb-32">
        {TOP_RANKINGS.map((item) => (
          <RankingCard key={item.rank} {...item} />
        ))}

        <div className="pt-8 flex flex-col items-center">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">You've reached the end</p>
          <button className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl text-slate-500 font-bold text-sm flex items-center gap-2 hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined">refresh</span>
            Load More Rankings
          </button>
        </div>
      </main>

      <AppNavigation activeTab="home" />
    </div>
  );
}
