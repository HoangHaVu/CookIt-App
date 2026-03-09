import { StatsCard } from '../ui/StatsCard';

export function ProfileStatsSection() {
    return (
        <div className="flex flex-wrap gap-3 px-4 py-3">
            <StatsCard label="Followers" value="1.2k" isActive={true} />
            <StatsCard label="Following" value="450" />
            <StatsCard label="Recipes" value="84" />
        </div>
    );
}
