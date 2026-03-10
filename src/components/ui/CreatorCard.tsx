interface CreatorCardProps {
    rank?: number;
    name: string;
    handle: string;
    followers: string;
    imageSrc: string;
    isFollowing?: boolean;
    onToggleFollow?: () => void;
}

export function CreatorCard({
    rank,
    name,
    handle,
    followers,
    imageSrc,
    isFollowing = false,
    onToggleFollow,
}: CreatorCardProps) {
    return (
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all active:scale-[0.98]">
            <div className="relative shrink-0">
                <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-2 border-accent-sage shadow-inner">
                    <img
                        alt={`${name} Profile`}
                        className="h-full w-full object-cover"
                        src={imageSrc}
                    />
                </div>
                {rank && (
                    <div className="absolute -bottom-1 -right-1 bg-brand-green text-white text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-white dark:border-slate-900 shadow-sm">
                        #{rank}
                    </div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-base font-black text-slate-900 dark:text-slate-100 truncate leading-tight">
                    {name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-0.5 tracking-tight">
                    {handle} • {followers}
                </p>
            </div>
            <button
                onClick={onToggleFollow}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md active:scale-95 ${isFollowing
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-500 shadow-none border border-slate-200 dark:border-slate-700'
                        : 'bg-primary text-white hover:bg-orange-600 shadow-primary/20'
                    }`}
            >
                {isFollowing ? 'Following' : 'Follow'}
            </button>
        </div>
    );
}
