import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateRecipeHeader } from '../components/layout/CreateRecipeHeader';
import { PhotoUploadSection } from '../components/sections/PhotoUploadSection';
import { RecipeFormFields } from '../components/sections/RecipeFormFields';
import { RecipeTagsSection } from '../components/sections/RecipeTagsSection';
import { RecipePrivacySection } from '../components/sections/RecipePrivacySection';
import { AppNavigation } from '../components/layout/AppNavigation';

type Privacy = 'Private' | 'Friends' | 'Public';

export default function CreateRecipe() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [servings, setServings] = useState('1-2 Persons');
  const [cookTime, setCookTime] = useState('15-30 mins');
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
  const [steps, setSteps] = useState(['']);
  const [tags, setTags] = useState<string[]>(['Dinner']);
  const [privacy, setPrivacy] = useState<Privacy>('Public');

  const handleIngredientChange = (index: number, field: 'name' | 'amount', value: string) => {
    setIngredients((prev) => prev.map((ing, i) => i === index ? { ...ing, [field]: value } : ing));
  };
  const handleAddIngredient = () => setIngredients((prev) => [...prev, { name: '', amount: '' }]);
  const handleRemoveIngredient = (index: number) => setIngredients((prev) => prev.filter((_, i) => i !== index));

  const handleStepChange = (index: number, value: string) => {
    setSteps((prev) => prev.map((s, i) => i === index ? value : s));
  };
  const handleAddStep = () => setSteps((prev) => [...prev, '']);
  const handleRemoveStep = (index: number) => setSteps((prev) => prev.filter((_, i) => i !== index));

  const isValid = title.trim().length > 0 && ingredients.some((ing) => ing.name.trim());

  const handlePublish = () => {
    if (!isValid) return;
    // In a real app: dispatch to store/API here
    navigate('/privatecookbook');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <CreateRecipeHeader />

      <main className="flex-1 overflow-y-auto pb-48">
        <PhotoUploadSection />
        <RecipeFormFields
          title={title}
          onTitleChange={setTitle}
          servings={servings}
          onServingsChange={setServings}
          cookTime={cookTime}
          onCookTimeChange={setCookTime}
          ingredients={ingredients}
          onIngredientChange={handleIngredientChange}
          onAddIngredient={handleAddIngredient}
          onRemoveIngredient={handleRemoveIngredient}
          steps={steps}
          onStepChange={handleStepChange}
          onAddStep={handleAddStep}
          onRemoveStep={handleRemoveStep}
        />
        <RecipeTagsSection
          tags={tags}
          onAddTag={(tag) => setTags((prev) => [...prev, tag])}
          onRemoveTag={(tag) => setTags((prev) => prev.filter((t) => t !== tag))}
        />
        <RecipePrivacySection privacy={privacy} onPrivacyChange={setPrivacy} />

        <div className="px-6 py-8">
          <button
            onClick={handlePublish}
            disabled={!isValid}
            className="w-full font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white uppercase tracking-wider text-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:active:scale-100"
          >
            <span className="material-symbols-outlined text-2xl font-black">send</span>
            Publish Recipe
          </button>
          {!isValid && (
            <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-300 mt-3">
              Add a title and at least one ingredient to publish
            </p>
          )}
        </div>
      </main>

      <AppNavigation />
    </div>
  );
}
