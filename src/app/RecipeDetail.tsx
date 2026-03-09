import { RecipeHeader } from '../components/layout/RecipeHeader';
import { RecipeBanner } from '../components/sections/RecipeBanner';
import { RecipeInfoHeader } from '../components/sections/RecipeInfoHeader';
import { AuthorCard } from '../components/ui/AuthorCard';
import { RecipeQuickStats } from '../components/sections/RecipeQuickStats';
import { IngredientsList } from '../components/sections/IngredientsList';
import { InstructionsList } from '../components/sections/InstructionsList';
import { CommunityReviews } from '../components/sections/CommunityReviews';
import { RecipeStickyFooter } from '../components/layout/RecipeStickyFooter';

export default function RecipeDetail() {
  return (
    <div className="relative mx-auto max-w-md min-h-screen bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <RecipeHeader />
      <RecipeBanner
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCAiOKD6g9WxXgiYp-aj_ghuB8Yy8PxZERcA1cUjphA8YHUp8bxbm9QikqPL13_Umiii0CM7DOyDnexryX60YvCxn-ShzNSRCjgxogR6TsHtZS9j8tSQfKVijTEqvCEZidAzL316mV8Vb1IKKXecYyLad9vkT6UOiBdfQyQJKyESz1tbDVPsP_N8n-bV2JGvWDNHWzITmYNzSAuwz4eg9azeb83WkhKvRQtcrBF6rEJaa4URVznOi0FeZ_-Y8XdmGg6Bnn3tcSP8ojp"
        imageAlt="Close up of gourmet garlic butter pasta with herbs"
      />
      <div className="relative -mt-10 px-4 pb-24 bg-background-light dark:bg-background-dark rounded-t-xl">
        <RecipeInfoHeader
          category="Italian Cuisine"
          rating={4.8}
          reviewsCount={128}
          title="Homemade Garlic Butter Pasta"
        />
        <AuthorCard
          name="Elena Gilbert"
          role="Chef & Food Blogger"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuArLYUAvwQCxlT2m7Em9oLpO9csC_VQpNgQznLmXjNmdjFt5u3gKs09httUOT-tPkHIbBTrBoDlMAF175jIOFomoM4Ig8By0szv7fYomv63IczyU_Z6VRuMWo-GgiOpoZqcTrqDQFLdQ_LknleFElKS61Ze9IiIN1xyPAa1_K0GNG2vmFxzu8QV2Zb30Z0t9o2cgW3fKf9LCmimbe6yexBLLc3NQGoJeb-s-PhmctS_F_UUgQWRwh56ApoYiHveh9GoTJN7ouPdDhEk"
          imageAlt="Professional chef Elena Gilbert portrait"
        />
        <RecipeQuickStats />
        <IngredientsList />
        <InstructionsList />
        <CommunityReviews />
      </div>
      <RecipeStickyFooter />
    </div>
  );
}
