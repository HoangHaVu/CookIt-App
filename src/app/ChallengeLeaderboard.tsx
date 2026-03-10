import { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ChallengePodium } from '../components/sections/ChallengePodium';
import { RankingRow } from '../components/ui/RankingRow';
import { StatsCard } from '../components/ui/StatsCard';
import { AppNavigation } from '../components/layout/AppNavigation';

type LeaderboardTab = 'Recipes' | 'Creators';

const TOP_USERS = [
  {
    rank: 2 as const,
    name: 'Sarah K.',
    points: '2.4k pts',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl7eLy0Lu7BiHboGcDQaPCrvgHt2kgz1qZpbhsxPge6rINs7qAfdE44pstLoB7wN1QToaeWKvCgp5Ji3-TBzK8mOlGQj-96XWexpwFDbKurryBGecCoz_DbbshdoQh1d9bMtSkoF3H3SzgXdXCkoPutHrGUCAljlwbyqprDu4FS9qNmzD_R85Ux_lnun0Pxf1RfIM2-E7rIU9Ckuacm5niNjMiiLbCfyfZsAfboBXC1LAvEJplk791kmvgsaDdv42cFLwpxIX8bQR9',
  },
  {
    rank: 1 as const,
    name: 'Chef Mike',
    points: '3.1k pts',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkro-U_wTAr5lYmnGFH-9eB2A0khg_iWq1fs3ea6MhOJ5z1GwnscIHUU4LUtckUt45fLZZJ4IzaIWGjSGLLF9vMk6KnLDeEYR9HWOxUwOYa1SVJtR_SE20neQ54wwkza84kXglTxhJFx6kd-guJF6gy5VQnlhZ9IIg6N8Z_Xx6pCj7ySqnq4mcyxT4zEkt_6QI9KpGhbfwxIVldnVeJhps57eOD6ynDilSr089YZ7EaOZCdNnuFbQh4Yny2w_50aCa6YpHxyHJLNRa',
  },
  {
    rank: 3 as const,
    name: 'Anna L.',
    points: '1.8k pts',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz7O9XMhurK7--P5whHIMKs_LK_SMobK-Y79YUOjCDiEW6PkfAG-rFCBjOftJUW66_ogewEyyi4XSisNP3VPvhwEl74TmczCuyw48COuEvl7lL2MVJc8t3Ki7lxaN5mlpzPD6R7rFE3Zr2kgpvLxjak4yrEk85y7k4PT5po8PA-ZHL_q5qSrWtYtzvzxTIvkwY4lhkizNnpqvt0WIaqK3R0fBhquJjVNz_rEy9_xTbpHSK6LSa-JCUNTBIPn6KSNKKJoZeuq3t7buq',
  }
];

const RECIPE_RANKINGS = [
  { rank: 4, name: 'David Chen', recipeName: 'Spicy BBQ Wings', points: '1,540', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHRyYMAnHXl9eNDfdWROix7-2byvqcrE1D4oiW9MPffGu_aGYjgPoq8obQGsg4o-BL_qznEDMNNu9JIOXRmO1xT0hRM-SZlB8H_Rjv_4jRf5KJoOPCkThKy0mod1uHzNqfw9t4n1j6grF4G1El_jrlRfeXZgqNr5E4VPqzyL6bV1K7tEj7s1No2iOuMzzAZJxJb2RF3iM7aW34Hq9KgPvIABosIay3RBJQp0WRHnxplCu-bfA725Nv6HBUDt8-ZZt5ao6oq-6KdkeY' },
  { rank: 5, name: 'Maria Garcia', recipeName: 'Grilled Peach Salad', points: '1,420', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvmfIOlQDF8O_XENkfDeGS5i66QmTYdO3CwvSQJJS-FLrSyZIUu94xUmY9RviixeWAjglYf2yr7TArKdLSZgynFP2vbb4_xrrRsrZabpUGGTdQ0mPs8ZZT3_ooodnV9Y3iOJxjGakvU4yC-HNgBvaYan0tNTKP7FjmPbtxRNa4vNIBniWpe8j_GeKHUd52defFhS7CPSiPdLGX76Pd9ZdkPLB5XCkK_n0HvyBM6RBxdNAGxfea' },
  { rank: 6, name: 'James Wilson', recipeName: 'Smoked Brisket', points: '1,210', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRXBcj1VhPi6iztOyYT-CntPqhOrV2oBt3JE3DEzq4xpBcII2c6Aeo8tVdZS6Q4xfK19-2NTYApfYWjXTFvdlHfIbW2y0Qn2hxRCJtdCGBq_4Y-ubp-uhi6DlnWk4W_W-UlyG7hlNAeZ-U7enZSDQb-HnDLJtOJ561L0PbKuTaGYT6hX1DHX8nJ5dYzE6DNX8zjG9oaNx4QzUqSyo0irUbv-aHNfcEPJQ8LBzlYlHaB09gM-6hq4fz527eJQEkFees6l2TgiV9vZXS' },
];

const CREATOR_RANKINGS = [
  { rank: 4, name: 'Lucia Romano', recipeName: '12 recipes submitted', points: '2,100', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl7eLy0Lu7BiHboGcDQaPCrvgHt2kgz1qZpbhsxPge6rINs7qAfdE44pstLoB7wN1QToaeWKvCgp5Ji3-TBzK8mOlGQj-96XWexpwFDbKurryBGecCoz_DbbshdoQh1d9bMtSkoF3H3SzgXdXCkoPutHrGUCAljlwbyqprDu4FS9qNmzD_R85Ux_lnun0Pxf1RfIM2-E7rIU9Ckuacm5niNjMiiLbCfyfZsAfboBXC1LAvEJplk791kmvgsaDdv42cFLwpxIX8bQR9' },
  { rank: 5, name: 'Tom Baker', recipeName: '9 recipes submitted', points: '1,750', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRXBcj1VhPi6iztOyYT-CntPqhOrV2oBt3JE3DEzq4xpBcII2c6Aeo8tVdZS6Q4xfK19-2NTYApfYWjXTFvdlHfIbW2y0Qn2hxRCJtdCGBq_4Y-ubp-uhi6DlnWk4W_W-UlyG7hlNAeZ-U7enZSDQb-HnDLJtOJ561L0PbKuTaGYT6hX1DHX8nJ5dYzE6DNX8zjG9oaNx4QzUqSyo0irUbv-aHNfcEPJQ8LBzlYlHaB09gM-6hq4fz527eJQEkFees6l2TgiV9vZXS' },
];

export default function ChallengeLeaderboard() {
  const [activeTab, setActiveTab] = useState<LeaderboardTab>('Recipes');

  const rankings = activeTab === 'Recipes' ? RECIPE_RANKINGS : CREATOR_RANKINGS;

  return (
    <div className="max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-x-hidden">
      <PageHeader title="Summer Grilling Challenge" />

      <div className="px-4 py-2">
        <div className="flex bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl mt-4 border border-slate-200 dark:border-slate-800">
          {(['Recipes', 'Creators'] as LeaderboardTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                activeTab === tab
                  ? 'bg-white dark:bg-slate-800 shadow-sm text-primary'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <ChallengePodium users={TOP_USERS} />

      <div className="flex flex-wrap gap-3 p-4">
        <StatsCard label="Entries" value="1,248" />
        <StatsCard label="Remaining" value="3d 12h" />
        <StatsCard label="Prize" value="$500" isActive={true} />
      </div>

      <main className="flex-1 p-4 space-y-4 pb-32">
        <h3 className="font-bold text-slate-800 dark:text-slate-200 px-1 text-lg mb-2 flex items-center justify-between">
          Full Rankings
          <span className="material-symbols-outlined text-slate-400 text-sm">sort</span>
        </h3>
        {rankings.map((item) => (
          <RankingRow key={item.rank} {...item} />
        ))}
      </main>

      <AppNavigation activeTab="home" />
    </div>
  );
}
