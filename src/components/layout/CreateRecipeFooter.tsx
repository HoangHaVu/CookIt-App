export function CreateRecipeFooter() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-brand-green/10 max-w-2xl mx-auto z-20">
            <button className="w-full font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white uppercase tracking-wider">
                <span className="material-symbols-outlined">send</span>
                Publish Recipe
            </button>
        </footer>
    );
}
