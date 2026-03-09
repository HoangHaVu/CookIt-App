import { PageHeader } from '../components/layout/PageHeader';
import { AchievementCard } from '../components/ui/AchievementCard';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function AchievementsBadges() {
  return (
    <div className="max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-x-hidden">
      <PageHeader title="Achievements" />

      <section className="p-6 bg-white dark:bg-slate-900 shadow-sm border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              className="size-20 rounded-full object-cover border-4 border-accent-sage shadow-md"
              data-alt="Professional chef portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4S58cPNTkS3VfVglw8Z-onJx0yA6aHnhusVyoP8JUgA5e7HxpadlW4dPV4QT3Xyz7o66OCdtvAxSit_4RRZJF1FHhaeX0vH7xFOy-LJu8gBKZbVvqlZGXtbBxQVhjIgiRrSrtU1FO64UoJRoLkBAcqrhXydUehZHVoL48dboSG0Df4qcvxMDQIMbjqrz6yPFA2VGTeGNdbwNYWcCyieC8cQ3E8ZMeHjcuwGDtPmyRbPY0XzscjuJh8q7hGD6H1X14HLaw9jre75h-"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full ring-2 ring-white dark:ring-slate-900 shadow-sm">
              LVL 15
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Chef Alex Rivera</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              24 Badges Earned • Master Cook
            </p>
          </div>
          <button className="bg-primary hover:bg-orange-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-lg shadow-primary/20 transition-all active:scale-95">
            REDEEM
          </button>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
              Progress to Level 16
            </span>
            <span className="text-xs font-black text-brand-green uppercase tracking-wider">
              750 / 1000 XP
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden shadow-inner border border-slate-200 dark:border-slate-700">
            <div className="bg-brand-green h-full w-[75%] rounded-full shadow-[0_0_10px_rgba(33,83,67,0.3)] transition-all duration-1000"></div>
          </div>
          <p className="text-[11px] mt-2 text-slate-500 italic font-medium">
            Complete 2 more recipes to reach the next level!
          </p>
        </div>
      </section>

      <main className="flex-1 p-4 space-y-8 pb-32">
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-brand-green font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">restaurant</span> Master Chef
            </h3>
            <span className="bg-brand-green/10 text-brand-green text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest border border-brand-green/20">
              3/5 Unlocked
            </span>
          </div>
          <div className="space-y-4">
            <AchievementCard
              title="Sauté Specialist"
              description="Cooked 50 stir-fry dishes perfectly."
              icon="skillet"
              isUnlocked={true}
              colorVariant="orange"
            />
            <AchievementCard
              title="Rising Dough"
              description="Baked your first 10 artisan loaves."
              icon="bakery_dining"
              isUnlocked={true}
              colorVariant="blue"
            />
            <AchievementCard
              title="Pitmaster"
              description="Locked: Master 5 BBQ recipes."
              icon="outdoor_grill"
              isUnlocked={false}
              colorVariant="slate"
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-brand-green font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">groups</span> Social Butterfly
            </h3>
          </div>
          <AchievementCard
            title="Recipe Critic"
            description="Left 25 helpful reviews for others."
            icon="favorite"
            isUnlocked={true}
            colorVariant="pink"
          />
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-brand-green font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">eco</span> Healthy Eater
            </h3>
          </div>
          <AchievementCard
            title="Veggie Voyager"
            description="Cooked 7 plant-based meals in a row."
            icon="nutrition"
            isUnlocked={true}
            colorVariant="green"
          />
        </section>
      </main>

      <AppNavigation activeTab="profile" />
    </div>
  );
}
