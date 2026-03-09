export function RecipeStickyFooter() {
    return (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-black tracking-wide text-center shadow-lg shadow-primary/20 active:scale-95 transition-transform uppercase bg-brand-green shadow-brand-green/20">
                Add to My Meal Plan
            </button>
        </div>
    );
}
