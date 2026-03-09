import { CreateRecipeHeader } from '../components/layout/CreateRecipeHeader';
import { PhotoUploadSection } from '../components/sections/PhotoUploadSection';
import { RecipeFormFields } from '../components/sections/RecipeFormFields';
import { RecipeTagsSection } from '../components/sections/RecipeTagsSection';
import { RecipePrivacySection } from '../components/sections/RecipePrivacySection';
import { AppNavigation } from '../components/layout/AppNavigation';

export default function CreateRecipe() {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-2xl mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <CreateRecipeHeader />

      <main className="flex-1 overflow-y-auto pb-48">
        <PhotoUploadSection />
        <RecipeFormFields />
        <RecipeTagsSection />
        <RecipePrivacySection />

        <div className="px-6 py-8">
          <button className="w-full font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white uppercase tracking-wider text-lg">
            <span className="material-symbols-outlined text-2xl font-black">send</span>
            Publish Recipe
          </button>
        </div>
      </main>

      <AppNavigation />
    </div>
  );
}
