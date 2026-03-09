interface AuthorCardProps {
    name: string;
    role: string;
    imageSrc: string;
    imageAlt: string;
}

export function AuthorCard({
    name,
    role,
    imageSrc,
    imageAlt,
}: AuthorCardProps) {
    return (
        <div className="flex items-center justify-between border-y border-slate-200 dark:border-slate-800 py-4 mb-6">
            <div className="flex items-center gap-3">
                <div
                    className="size-12 rounded-full bg-cover bg-center ring-2 ring-brand-green/20"
                    data-alt={imageAlt}
                    style={{
                        backgroundImage: `url('${imageSrc}')`,
                    }}
                ></div>
                <div>
                    <p className="font-bold leading-none mb-1 text-slate-900 dark:text-slate-100">{name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">
                        {role}
                    </p>
                </div>
            </div>
            <button className="bg-accent-light hover:bg-accent-light/80 text-brand-green px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                Follow
            </button>
        </div>
    );
}
