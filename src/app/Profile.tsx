import { ProfileHeader } from '../components/layout/ProfileHeader';
import { AppNavigation } from '../components/layout/AppNavigation';
import { ProfileHero } from '../components/sections/ProfileHero';
import { ProfileStatsSection } from '../components/sections/ProfileStatsSection';
import { ProfileTabs } from '../components/sections/ProfileTabs';
import { ProfileRecipeGrid } from '../components/sections/ProfileRecipeGrid';

export default function Profile() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl">
      <ProfileHeader />
      <ProfileHero />
      <ProfileStatsSection />
      <ProfileTabs />
      <ProfileRecipeGrid />
      <AppNavigation activeTab="profile" />
    </div>
  );
}
