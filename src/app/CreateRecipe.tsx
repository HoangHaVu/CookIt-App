import { CreateRecipeHeader } from '../components/layout/CreateRecipeHeader';
import { PhotoUploadSection } from '../components/sections/PhotoUploadSection';
import { RecipeFormFields } from '../components/sections/RecipeFormFields';
import { RecipeTagsSection } from '../components/sections/RecipeTagsSection';
import { RecipePrivacySection } from '../components/sections/RecipePrivacySection';
import { CreateRecipeFooter } from '../components/layout/CreateRecipeFooter';

export default function CreateRecipe() {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-2xl mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <CreateRecipeHeader />

      <main className="flex-1 overflow-y-auto pb-32">
        <PhotoUploadSection />
        <RecipeFormFields />
        <RecipeTagsSection />
        <RecipePrivacySection />
      </main>

      <CreateRecipeFooter />
    </div>
  );
}
