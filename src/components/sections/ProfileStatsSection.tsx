import { StatsCard } from '../ui/StatsCard';
import { useAppStore } from '../../lib/store';

export function ProfileStatsSection() {
    const user = useAppStore((s) => s.currentUser);
    const favCount = useAppStore((s) => s.favoritedRecipeIds.size);

    const formatNum = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

    return (
        <div className="flex flex-wrap gap-3 px-4 py-3">
            <StatsCard label="Followers" value={user ? formatNum(user.followers) : '0'} isActive={true} />
            <StatsCard label="Following" value={user ? formatNum(user.following) : '0'} />
            <StatsCard label="Recipes" value={user ? String(user.recipesCount) : '0'} />
            <StatsCard label="Saved" value={String(favCount)} />
        </div>
    );
}
