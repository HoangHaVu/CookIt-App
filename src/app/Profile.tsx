import { useState } from 'react';
import { ProfileHeader } from '../components/layout/ProfileHeader';
import { AppNavigation } from '../components/layout/AppNavigation';
import { ProfileHero } from '../components/sections/ProfileHero';
import { ProfileStatsSection } from '../components/sections/ProfileStatsSection';
import { ProfileTabs } from '../components/sections/ProfileTabs';
import { ProfileRecipeGrid } from '../components/sections/ProfileRecipeGrid';

type ProfileTab = 'My Recipes' | 'Saved' | 'Achievements';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('My Recipes');

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl">
      <ProfileHeader />
      <ProfileHero />
      <ProfileStatsSection />
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <ProfileRecipeGrid activeTab={activeTab} />
      <AppNavigation activeTab="profile" />
    </div>
  );
}
