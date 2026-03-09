import { useNavigate } from 'react-router-dom';

export function RecipeHeader() {
    const navigate = useNavigate();

    return (
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b to-transparent from-brand-green/60">
            <button
                className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white"
                onClick={() => navigate(-1)}
            >
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex gap-2">
                <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <span className="material-symbols-outlined">share</span>
                </button>
                <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <span className="material-symbols-outlined">more_vert</span>
                </button>
            </div>
        </div>
    );
}
