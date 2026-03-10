import { useNavigate, useParams } from 'react-router-dom';
import { RecipeHeader } from '../components/layout/RecipeHeader';
import { RecipeBanner } from '../components/sections/RecipeBanner';
import { RecipeInfoHeader } from '../components/sections/RecipeInfoHeader';
import { AuthorCard } from '../components/ui/AuthorCard';
import { RecipeQuickStats } from '../components/sections/RecipeQuickStats';
import { IngredientsList } from '../components/sections/IngredientsList';
import { InstructionsList } from '../components/sections/InstructionsList';
import { CommunityReviews } from '../components/sections/CommunityReviews';
import { AppNavigation } from '../components/layout/AppNavigation';
import { MOCK_RECIPES } from '../lib/mockData';

export default function RecipeDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const recipe = MOCK_RECIPES.find((r) => r.id === id) ?? MOCK_RECIPES[0];

  return (
    <div className="relative mx-auto max-w-md min-h-screen bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <RecipeHeader />
      <RecipeBanner
        imageSrc={recipe.imageSrc}
        imageAlt={recipe.title}
      />
      <div className="relative -mt-10 px-4 pb-24 bg-background-light dark:bg-background-dark rounded-t-xl">
        <RecipeInfoHeader
          category={recipe.category}
          rating={recipe.rating ?? 4.8}
          reviewsCount={recipe.reviewsCount ?? 0}
          title={recipe.title}
        />
        <AuthorCard
          name={recipe.author.name}
          role={recipe.author.badge ?? 'Chef'}
          imageSrc={recipe.author.avatarUrl}
          imageAlt={recipe.author.name}
        />
        <RecipeQuickStats
          recipeId={recipe.id}
          likesCount={recipe.likesCount}
          time={recipe.time}
          servings={recipe.servings}
        />
        <IngredientsList ingredients={recipe.ingredients} />
        <InstructionsList steps={recipe.steps} />
        <CommunityReviews rating={recipe.rating ?? 4.8} reviewsCount={recipe.reviewsCount ?? 128} />

        {/* CTA Buttons */}
        <div className="mt-12 mb-20 px-4 flex flex-col gap-4">
          <button
            onClick={() => navigate('/cookmode')}
            className="w-full bg-primary text-white py-5 rounded-[2rem] font-black tracking-widest text-center shadow-2xl shadow-primary/30 active:scale-95 transition-all uppercase text-xs flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined font-black">play_arrow</span>
            Start Cooking
          </button>
          <button
            onClick={() => navigate('/weeklymealplanner')}
            className="w-full bg-brand-green text-white py-5 rounded-[2rem] font-black tracking-widest text-center shadow-2xl shadow-brand-green/30 active:scale-95 transition-all uppercase text-xs"
          >
            Add to My Meal Plan
          </button>
        </div>
      </div>
      <AppNavigation activeTab="recipes" />
    </div>
  );
}
