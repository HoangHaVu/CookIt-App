import { useNavigate } from 'react-router-dom';

interface WeeklyPlannerHeaderProps {
    dateRange?: string;
}

export function WeeklyPlannerHeader({ dateRange = 'Oct 23 - Oct 29' }: WeeklyPlannerHeaderProps) {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-10 flex items-center bg-header-green p-4 text-white shadow-md">
            <button
                className="flex size-10 items-center justify-center rounded-full hover:bg-white/10"
                onClick={() => navigate(-1)}
            >
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex-1 px-4 text-center">
                <h1 className="text-lg font-bold leading-tight">Weekly Planner</h1>
                <p className="text-xs opacity-80">{dateRange}</p>
            </div>
            <button onClick={() => navigate('/mealplannercalendar')} className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
                <span className="material-symbols-outlined">calendar_month</span>
            </button>
        </header>
    );
}
