import { useNavigate } from 'react-router-dom';

export function ProfileHeader() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center p-4 justify-between sticky top-0 bg-brand-green text-white z-10">
            <div
                className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer"
                onClick={() => navigate(-1)}
            >
                <span className="material-symbols-outlined text-white">
                    arrow_back
                </span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight flex-1 text-center text-white">
                Profile
            </h2>
            <div className="flex w-10 items-center justify-end">
                <button className="flex cursor-pointer items-center justify-center rounded-xl size-10 bg-transparent text-slate-900 dark:text-slate-100 text-white">
                    <span className="material-symbols-outlined text-white">
                        settings
                    </span>
                </button>
            </div>
        </div>
    );
}
