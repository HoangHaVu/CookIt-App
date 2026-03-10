interface InviteCardProps {
    name: string;
    subtitle: string;
    imageSrc?: string;
    initials?: string;
    isInvited?: boolean;
    onInvite?: () => void;
}

export function InviteCard({ name, subtitle, imageSrc, initials, isInvited, onInvite }: InviteCardProps) {
    return (
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 rounded-[2rem] px-6 py-4 justify-between shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-all hover:border-brand-green/30 group active:scale-[0.98]">
            <div className="flex items-center gap-5">
                <div className="relative">
                    {imageSrc ? (
                        <img
                            alt={name}
                            className="size-14 rounded-2xl object-cover border-2 border-slate-50 dark:border-slate-800 shadow-sm transition-transform group-hover:scale-105"
                            src={imageSrc}
                        />
                    ) : (
                        <div className="size-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green font-black text-xl border-2 border-brand-green/20 group-hover:scale-105 transition-transform">
                            {initials || name.substring(0, 2).toUpperCase()}
                        </div>
                    )}
                    <div className="absolute -bottom-1 -right-1 size-5 bg-brand-green rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[10px] text-white font-black">add</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center min-w-0 pr-2">
                    <p className="text-slate-900 dark:text-slate-100 text-sm font-black uppercase tracking-wider truncate">
                        {name}
                    </p>
                    <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-tight mt-0.5 truncate">
                        {subtitle}
                    </p>
                </div>
            </div>
            <div className="shrink-0 ml-2">
                <button
                    onClick={isInvited ? undefined : onInvite}
                    className={`flex min-w-[80px] items-center justify-center rounded-xl h-10 px-4 text-[10px] font-black uppercase tracking-widest transition-all ${isInvited
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-default'
                        : 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-90'
                        }`}
                >
                    {isInvited ? 'Sent' : 'Invite'}
                </button>
            </div>
        </div>
    );
}
