import { useNavigate } from 'react-router-dom';

interface MealCardProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    recipeId?: string;
}

export function MealCard({ title, subtitle, imageSrc, imageAlt, recipeId }: MealCardProps) {
    const navigate = useNavigate();
    const detailPath = recipeId ? `/recipedetail/${recipeId}` : '/recipedetail';
    return (
        <div className="rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 transition-all active:scale-[0.98]">
            <div className="flex h-32">
                <div
                    className="w-1/3 bg-center bg-cover"
                    data-alt={imageAlt}
                    style={{
                        backgroundImage: `url('${imageSrc}')`,
                    }}
                ></div>
                <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white line-clamp-1">
                            {title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => navigate(detailPath)} className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-orange-600 transition-colors">
                            Recipe{' '}
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
