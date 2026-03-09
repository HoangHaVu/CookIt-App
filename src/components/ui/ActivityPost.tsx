interface ActivityPostProps {
    author: string;
    authorImage: string;
    authorBadge?: string;
    timeAgo: string;
    content: string;
    postImage?: string;
    likes: number;
    comments: number;
    shares: number;
    recipeCard?: {
        title: string;
        prepTime: string;
        cookTime: string;
        rating: number;
        reviews: number;
        imageSrc: string;
    };
}

export function ActivityPost({
    author,
    authorImage,
    authorBadge,
    timeAgo,
    content,
    postImage,
    likes,
    comments,
    shares,
    recipeCard
}: ActivityPostProps) {
    return (
        <div className="flex flex-col rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-2xl">
            <div className="flex items-center gap-4 p-6">
                <img
                    alt={author}
                    className="size-12 rounded-2xl border-2 border-brand-green/10 shadow-sm object-cover"
                    src={authorImage}
                />
                <div className="flex flex-col flex-1">
                    <span className="font-black text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                        {author}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                        {timeAgo} •{' '}
                        {authorBadge && (
                            <span className="text-brand-green font-black">
                                {authorBadge}
                            </span>
                        )}
                    </span>
                </div>
                <button className="text-slate-300 hover:text-slate-600 dark:hover:text-slate-100 transition-colors">
                    <span className="material-symbols-outlined font-black">more_horiz</span>
                </button>
            </div>

            <div className="px-6 pb-4">
                <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">
                    {content}
                </p>
            </div>

            {postImage && (
                <div className="px-4 pb-4">
                    <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-inner border border-slate-100 dark:border-slate-800">
                        <img
                            alt="Post media"
                            className="w-full h-full object-cover select-none"
                            src={postImage}
                        />
                    </div>
                </div>
            )}

            {recipeCard && (
                <div className="px-6 pb-6">
                    <div className="bg-brand-green/5 dark:bg-brand-green/10 border-2 border-brand-green/20 rounded-[2rem] p-5 flex gap-5 group cursor-pointer hover:bg-brand-green/10 transition-all">
                        <div className="size-20 bg-white dark:bg-slate-800 rounded-2xl border border-brand-green/10 shrink-0 flex items-center justify-center overflow-hidden shadow-md group-hover:scale-110 transition-transform">
                            <img
                                alt={recipeCard.title}
                                className="object-cover h-full w-full"
                                src={recipeCard.imageSrc}
                            />
                        </div>
                        <div className="flex flex-col justify-center flex-1 min-w-0 pr-2">
                            <h4 className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-sm truncate mb-0.5">
                                {recipeCard.title}
                            </h4>
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                                {recipeCard.prepTime} • {recipeCard.cookTime}
                            </p>
                            <div className="flex items-center mt-2 text-brand-green">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className={`material-symbols-outlined text-[14px] ${s <= Math.floor(recipeCard.rating) ? 'fill-1' : ''}`}>
                                        star
                                    </span>
                                ))}
                                <span className="text-[10px] ml-1.5 text-slate-400 font-black">
                                    ({recipeCard.reviews})
                                </span>
                            </div>
                        </div>
                        <div className="self-center">
                            <span className="material-symbols-outlined text-brand-green font-black group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between px-6 pb-2">
                <div className="flex -space-x-3">
                    {[1, 2].map(i => (
                        <div key={i} className={`size-7 rounded-full ${i === 1 ? 'bg-primary' : 'bg-blue-500'} border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-sm`}>
                            <span className="material-symbols-outlined text-[10px] text-white font-black">
                                {i === 1 ? 'favorite' : 'thumb_up'}
                            </span>
                        </div>
                    ))}
                    <span className="pl-6 text-[10px] font-black uppercase tracking-widest text-slate-400 self-center">
                        {likes} Likes
                    </span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {comments} comments • {shares} shares
                </span>
            </div>

            <div className="flex items-center justify-around p-3 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 mt-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-white dark:hover:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95">
                    <span className="material-symbols-outlined text-sm font-black">favorite</span> Like
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-white dark:hover:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95">
                    <span className="material-symbols-outlined text-sm font-black">chat_bubble</span> Comment
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-white dark:hover:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95">
                    <span className="material-symbols-outlined text-sm font-black">share</span> Share
                </button>
            </div>
        </div>
    );
}
