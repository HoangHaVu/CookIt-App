interface GridRecipeCardProps {
    title: string;
    time: string;
    imageSrc: string;
    imageAlt: string;
    isFavorite?: boolean;
}

export function GridRecipeCard({
    title,
    time,
    imageSrc,
    imageAlt,
    isFavorite = false,
}: GridRecipeCardProps) {
    return (
        <div className="flex flex-col gap-2 group cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden relative">
                <div className={`absolute top-2 right-2 bg-black/40 backdrop-blur-md rounded-full p-1.5 text-white ${isFavorite ? 'text-primary' : 'text-white'}`}>
                    <span className={`material-symbols-outlined text-sm ${isFavorite ? 'fill-1' : ''}`}>
                        favorite
                    </span>
                </div>
                <div
                    className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                    data-alt={imageAlt}
                    style={{
                        backgroundImage: `url('${imageSrc}')`,
                    }}
                ></div>
            </div>
            <p className="text-sm font-bold line-clamp-1">{title}</p>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                <span className="material-symbols-outlined text-xs">schedule</span>
                <span>{time}</span>
            </div>
        </div>
    );
}
