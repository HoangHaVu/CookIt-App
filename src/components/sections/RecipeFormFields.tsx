interface IngredientRow {
  name: string;
  amount: string;
}

interface RecipeFormFieldsProps {
  title: string;
  onTitleChange: (v: string) => void;
  servings: string;
  onServingsChange: (v: string) => void;
  cookTime: string;
  onCookTimeChange: (v: string) => void;
  ingredients: IngredientRow[];
  onIngredientChange: (index: number, field: 'name' | 'amount', value: string) => void;
  onAddIngredient: () => void;
  onRemoveIngredient: (index: number) => void;
  steps: string[];
  onStepChange: (index: number, value: string) => void;
  onAddStep: () => void;
  onRemoveStep: (index: number) => void;
}

export function RecipeFormFields({
  title, onTitleChange,
  servings, onServingsChange,
  cookTime, onCookTimeChange,
  ingredients, onIngredientChange, onAddIngredient, onRemoveIngredient,
  steps, onStepChange, onAddStep, onRemoveStep,
}: RecipeFormFieldsProps) {
  return (
    <div className="px-4 py-2 space-y-6">
      {/* Title */}
      <div className="flex flex-col">
        <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
          Recipe Name
        </label>
        <input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder:text-slate-400"
          placeholder="e.g. Grandma's Famous Lasagna"
          type="text"
        />
      </div>

      {/* Servings + Cook Time */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
            Portion Size
          </label>
          <div className="relative">
            <select
              value={servings}
              onChange={(e) => onServingsChange(e.target.value)}
              className="appearance-none w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all cursor-pointer"
            >
              <option>1-2 Persons</option>
              <option>3-4 Persons</option>
              <option>5-6 Persons</option>
              <option>Family Size (8+)</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 text-brand-green">
            Cooking Time
          </label>
          <div className="relative">
            <select
              value={cookTime}
              onChange={(e) => onCookTimeChange(e.target.value)}
              className="appearance-none w-full rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-slate-100 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all cursor-pointer"
            >
              <option>Under 15 mins</option>
              <option>15-30 mins</option>
              <option>30-60 mins</option>
              <option>Over 1 hour</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">schedule</span>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="flex flex-col">
        <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 flex items-center justify-between text-brand-green">
          Ingredients
          <button type="button" onClick={onAddIngredient} className="text-brand-green text-xs flex items-center gap-1 font-bold hover:underline">
            <span className="material-symbols-outlined text-sm">add</span> Add Row
          </button>
        </label>
        <div className="space-y-2">
          {ingredients.map((ing, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={ing.name}
                onChange={(e) => onIngredientChange(i, 'name', e.target.value)}
                placeholder="Ingredient"
                className="flex-[2] rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:border-brand-green outline-none placeholder:text-slate-300"
              />
              <input
                value={ing.amount}
                onChange={(e) => onIngredientChange(i, 'amount', e.target.value)}
                placeholder="Amount"
                className="flex-1 rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:border-brand-green outline-none placeholder:text-slate-300"
              />
              {ingredients.length > 1 && (
                <button type="button" onClick={() => onRemoveIngredient(i)} className="size-10 flex items-center justify-center rounded-xl text-slate-300 hover:text-primary hover:bg-primary/5 transition-all shrink-0">
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col">
        <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-2 flex items-center justify-between text-brand-green">
          Preparation Steps
          <button type="button" onClick={onAddStep} className="text-brand-green text-xs flex items-center gap-1 font-bold hover:underline">
            <span className="material-symbols-outlined text-sm">add_task</span> Add Step
          </button>
        </label>
        <div className="space-y-2">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="mt-3 size-7 rounded-full bg-brand-green/10 text-brand-green text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
              <textarea
                value={step}
                onChange={(e) => onStepChange(i, e.target.value)}
                rows={2}
                placeholder={`Step ${i + 1}...`}
                className="flex-1 rounded-xl border border-brand-green/10 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:border-brand-green outline-none resize-none placeholder:text-slate-300"
              />
              {steps.length > 1 && (
                <button type="button" onClick={() => onRemoveStep(i)} className="mt-2 size-10 flex items-center justify-center rounded-xl text-slate-300 hover:text-primary hover:bg-primary/5 transition-all shrink-0">
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
