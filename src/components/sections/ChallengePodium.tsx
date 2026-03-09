interface PodiumUser {
    name: string;
    points: string;
    imageSrc: string;
    rank: 1 | 2 | 3;
}

export function ChallengePodium({ users }: { users: PodiumUser[] }) {
    const sortedUsers = [...users].sort((a, b) => {
        // Order: 2, 1, 3 for visual podium
        const order = { 2: 1, 1: 2, 3: 3 };
        return order[a.rank] - order[b.rank];
    });

    return (
        <div className="flex items-end justify-center gap-2 px-4 py-8 bg-gradient-to-b to-transparent from-brand-green/5">
            {sortedUsers.map((user) => {
                const isFirst = user.rank === 1;
                const sizeClass = isFirst ? 'size-24' : 'size-20';
                const borderClass = isFirst ? 'border-primary' : (user.rank === 2 ? 'border-slate-300' : 'border-amber-600/30');
                const rankBg = isFirst ? 'bg-primary text-white' : (user.rank === 2 ? 'bg-slate-300 text-slate-800' : 'bg-amber-600/40 text-slate-800');
                const translateClass = isFirst ? '-translate-y-4' : '';

                return (
                    <div key={user.rank} className={`flex flex-col items-center gap-2 ${translateClass}`}>
                        <div className="relative">
                            {isFirst && (
                                <span className="material-symbols-outlined absolute -top-8 left-1/2 -translate-x-1/2 text-primary text-3xl animate-bounce">
                                    emoji_events
                                </span>
                            )}
                            <div
                                className={`${sizeClass} rounded-full border-4 ${borderClass} bg-cover bg-center overflow-hidden ${isFirst ? 'shadow-lg shadow-primary/20' : ''}`}
                                style={{ backgroundImage: `url('${user.imageSrc}')` }}
                            ></div>
                            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 ${rankBg} ${isFirst ? 'text-sm px-3 py-1' : 'text-xs px-2 py-0.5'} font-bold rounded-full`}>
                                {user.rank}
                            </div>
                        </div>
                        <p className={`font-bold ${isFirst ? 'text-base' : 'text-sm'}`}>{user.name}</p>
                        <p className={`text-xs ${isFirst ? 'text-primary font-semibold' : 'text-slate-500'}`}>{user.points}</p>
                    </div>
                );
            })}
        </div>
    );
}
