import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WeeklyPlannerHeader } from '../components/layout/WeeklyPlannerHeader';
import { DayPicker } from '../components/sections/DayPicker';
import { MealSection } from '../components/sections/MealSection';
import { MealCard } from '../components/ui/MealCard';
import { EmptyState } from '../components/ui/EmptyState';
import { AppNavigation } from '../components/layout/AppNavigation';
import { useAppStore } from '../lib/store';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getWeekRange(): string {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return `${MONTH_NAMES[monday.getMonth()]} ${monday.getDate()} – ${MONTH_NAMES[sunday.getMonth()]} ${sunday.getDate()}`;
}

// Static meal data per day index (0=Mon … 6=Sun)
const DAILY_MEALS = [
  { // Mon
    breakfast: { title: 'Avocado Toast & Poached Egg', subtitle: '12 mins • Easy • High Protein', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNCh_ljmYwjYUNYHiyaG-scDNYVlPazpGsE-7YEuyhZid4DmTP8N9RkR160XFiIt8_8PR0_pMWJK6rTefYgQq8txKoTkXk0HtiGBnWxFn60NDoIFmWkgAZGE3wVGLlx5zAiMXngiuEolPD2T3qSSUB_z4fgu-wSaBfPIxXNgdlJtRoSyU-EPh6Ub3g4hMsyjVDQUGOClVwk62LyEFN8fUZ5FOlFc7tmtmHyZ9h2rwmCZXtgtbC5DiMo4p1E5j1bIALksWNOGgNgY9o' },
    lunch: { title: 'Mediterranean Buddha Bowl', subtitle: '15 mins • Meal Prep • Vegan', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuKApeGnIHQGUq8f1PXfQGH-9t5MAI7RBcpFF1P6RmVj-9xQz2kbEjTeD2SPSRkhgNhnyy2rOVZeqdPaFKbj4Q3QticSRrM0Y-ilCe4duJfKwqh0jQQxuB0mv5OiWKuBLIOCx0geZDR2xAHpEafeaXxT_8UT0MAqc0ripMvcYNyyJAEaCO-CzIdl-e1JC-WkynyFlrI37izxSnPFqlWzagONGzxHqXmxaGlIQFEuj0yJ41QbMkpTLfktY5FrwfUbKUmbfHLPi6r4sd' },
    dinner: { title: 'Lemon Herb Grilled Salmon', subtitle: '25 mins • Keto • Omega-3', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC715fSRyDaBMqv6db5KUvCGw10HLdmPZ_aQ4CIKRluZBM110cXPSTcNIITjPqImkjiauLsiFoQDBuQ9kzd-mwZUZ2CliGF2QqXi1uE0rnW6BWBCFmbKLg5Lw5-Flq_uRD165UCimqUrBQM2H2L_-cOa3Ja5uUwii_jJT-s8QsX_khtEdYcTAhOBQ5DxJQ96NLHht_b21Jfrvl7ry6bdw1oO-1OoN6vON6yhDOA0jZX07cdILYuUo1hKfzJp8Nh3rDjZzqYo24qNXCF' },
  },
  null, // Tue — empty day
  null, // Wed
  {   // Thu
    breakfast: { title: 'Berry Smoothie Bowl', subtitle: '12 mins • Vegan • Antioxidants', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSw71LCG4r8d7OSE5aa1NzY15Hj-vBx0hriSCIlmC-H_g1jvN69zejJXYMDqgp12w0GYIIFQcsrbLfEjh4K_RInNHpmPT4zQ66NqH_hcEI8vlQ843_niqPzcLH6HFRDoNbn3RsFD0dm9Ixky0bXfDJhDzzjLpoZuIVaESw-p4wAvdfAdhF1aitMTjRUrQNOD7qkN6VCqldgzzxPZGPmdLNFq-cfSKT_dkpnh4EFWgmX7wg1lX9665Xlt9oMcxQITLR_OswDtr8WGE1' },
    lunch: null,
    dinner: { title: 'Watermelon Feta Salad', subtitle: '15 mins • Vegetarian • Refreshing', imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3898a_rWbr2l3QkMewEOQ0tsPWNVk4LCGUIDvHb3QI_Lr0hPhxIi9RBvavqpqGICT0UlZf1YSjsT8jfpno2ZtJnxKucmtpC-j6nQYPra7klBunCoWzBR4rqgaYj0Xzlo0mMj-RUJk9UEbdZ7GKobH0vCq7M6HVm7gHyAHto3mdmQJM2pkyfWR1rCh8Asq0jDaP5WecCS25Hk0Oznsp1vYnSLFQyg4__Y4wF95Gs_4__QCOhb57i13_WPqbUDBDOHEsN_Mbi2f8iVR' },
  },
  null, // Fri
  null, // Sat
  null, // Sun
];

export default function WeeklyMealPlanner() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(0);
  const mealPlanFromStore = useAppStore((s) => s.mealPlan);
  const weekRange = getWeekRange();

  const dayData = DAILY_MEALS[selectedDay];
  const storeMealsForDay = mealPlanFromStore.filter((_, i) => i % 7 === selectedDay);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark max-w-[480px] mx-auto shadow-2xl">
      <WeeklyPlannerHeader dateRange={weekRange} />
      <DayPicker onDayChange={setSelectedDay} />

      <main className="flex flex-col gap-6 p-4 pb-32">
        {!dayData && storeMealsForDay.length === 0 ? (
          <EmptyState
            icon="restaurant"
            title="No meals planned"
            subtitle="This day is free. Add a meal to your plan!"
            actionLabel="Browse Recipes"
          />
        ) : (
          <>
            {dayData?.breakfast && (
              <MealSection title="Breakfast" kcal="420 kcal" icon="wb_twilight">
                <MealCard title={dayData.breakfast.title} subtitle={dayData.breakfast.subtitle} imageSrc={dayData.breakfast.imageSrc} imageAlt={dayData.breakfast.title} />
              </MealSection>
            )}
            {dayData?.lunch && (
              <MealSection title="Lunch" kcal="580 kcal" icon="wb_sunny">
                <MealCard title={dayData.lunch.title} subtitle={dayData.lunch.subtitle} imageSrc={dayData.lunch.imageSrc} imageAlt={dayData.lunch.title} />
              </MealSection>
            )}
            {dayData?.dinner && (
              <MealSection title="Dinner" kcal="650 kcal" icon="dark_mode">
                <MealCard title={dayData.dinner.title} subtitle={dayData.dinner.subtitle} imageSrc={dayData.dinner.imageSrc} imageAlt={dayData.dinner.title} />
              </MealSection>
            )}
            {/* Store-added meals */}
            {storeMealsForDay.map((entry) => (
              <MealSection key={entry.id} title={entry.mealType} kcal="" icon="restaurant">
                <MealCard title={entry.recipe.title} subtitle={entry.recipe.time} imageSrc={entry.recipe.imageSrc} imageAlt={entry.recipe.title} />
              </MealSection>
            ))}
          </>
        )}

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-accent-sage p-4 text-header-green dark:text-accent-sage font-bold hover:bg-accent-sage/10 transition-colors active:scale-95">
          <span className="material-symbols-outlined">add_circle</span>
          Add Snack or Drink
        </button>

        <button
          onClick={() => navigate('/shoppinglist')}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-green text-white p-4 font-black text-sm uppercase tracking-widest shadow-lg shadow-brand-green/20 hover:bg-brand-green/90 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined font-black">shopping_cart</span>
          View Shopping List
        </button>
      </main>

      <AppNavigation activeTab="planner" />
    </div>
  );
}
