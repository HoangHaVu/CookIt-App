import { useNavigate } from 'react-router-dom';

export function CreateRecipeHeader() {
    const navigate = useNavigate();

    return (
        <header className="flex items-center bg-brand-green text-white p-6 sticky top-0 z-10 curved-header shadow-lg shadow-brand-green/10">
            <div
                className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer"
                onClick={() => navigate(-1)}
            >
                <span className="material-symbols-outlined">close</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 px-4 text-center">
                Create Recipe
            </h2>
            <div className="flex w-12 items-center justify-end">
                <p className="text-accent-light text-base font-bold leading-normal tracking-tight cursor-pointer">
                    Draft
                </p>
            </div>
        </header>
    );
}
