import { WeeklyPlannerHeader } from '../components/layout/WeeklyPlannerHeader';
import { DayPicker } from '../components/sections/DayPicker';
import { MealSection } from '../components/sections/MealSection';
import { MealCard } from '../components/ui/MealCard';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function WeeklyMealPlanner() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto shadow-2xl">
      <WeeklyPlannerHeader dateRange="Oct 23 - Oct 29" />
      <DayPicker />

      <main className="flex flex-col gap-6 p-4 pb-32">
        <MealSection title="Breakfast" kcal="420 kcal" icon="wb_twilight">
          <MealCard
            title="Avocado Toast & Poached Egg"
            subtitle="12 mins • Easy • High Protein"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBNCh_ljmYwjYUNYHiyaG-scDNYVlPazpGsE-7YEuyhZid4DmTP8N9RkR160XFiIt8_8PR0_pMWJK6rTefYgQq8txKoTkXk0HtiGBnWxFn60NDoIFmWkgAZGE3wVGLlx5zAiMXngiuEolPD2T3qSSUB_z4fgu-wSaBfPIxXNgdlJtRoSyU-EPh6Ub3g4hMsyjVDQUGOClVwk62LyEFN8fUZ5FOlFc7tmtmHyZ9h2rwmCZXtgtbC5DiMo4p1E5j1bIALksWNOGgNgY9o"
            imageAlt="Close up of fresh avocado toast with poached egg"
          />
        </MealSection>

        <MealSection title="Lunch" kcal="580 kcal" icon="wb_sunny">
          <MealCard
            title="Mediterranean Buddha Bowl"
            subtitle="15 mins • Meal Prep • Vegan"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCuKApeGnIHQGUq8f1PXfQGH-9t5MAI7RBcpFF1P6RmVj-9xQz2kbEjTeD2SPSRkhgNhnyy2rOVZeqdPaFKbj4Q3QticSRrM0Y-ilCe4duJfKwqh0jQQxuB0mv5OiWKuBLIOCx0geZDR2xAHpEafeaXxT_8UT0MAqc0ripMvcYNyyJAEaCO-CzIdl-e1JC-WkynyFlrI37izxSnPFqlWzagONGzxHqXmxaGlIQFEuj0yJ41QbMkpTLfktY5FrwfUbKUmbfHLPi6r4sd"
            imageAlt="A colorful Mediterranean buddha bowl with quinoa and chickpeas"
          />
        </MealSection>

        <MealSection title="Dinner" kcal="650 kcal" icon="dark_mode">
          <MealCard
            title="Lemon Herb Grilled Salmon"
            subtitle="25 mins • Keto • Omega-3"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuC715fSRyDaBMqv6db5KUvCGw10HLdmPZ_aQ4CIKRluZBM110cXPSTcNIITjPqImkjiauLsiFoQDBuQ9kzd-mwZUZ2CliGF2QqXi1uE0rnW6BWBCFmbKLg5Lw5-Flq_uRD165UCimqUrBQM2H2L_-cOa3Ja5uUwii_jJT-s8QsX_khtEdYcTAhOBQ5DxJQ96NLHht_b21Jfrvl7ry6bdw1oO-1OoN6vON6yhDOA0jZX07cdILYuUo1hKfzJp8Nh3rDjZzqYo24qNXCF"
            imageAlt="Grilled salmon steak with asparagus and lemon slices"
          />
        </MealSection>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-accent-sage p-4 text-header-green dark:text-accent-sage font-bold hover:bg-accent-sage/10 transition-colors">
          <span className="material-symbols-outlined">add_circle</span>
          Add Snack or Drink
        </button>
      </main>

      <AppNavigation activeTab="planner" />
    </div>

  );
}
