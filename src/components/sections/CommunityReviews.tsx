interface CommunityReviewsProps {
    rating?: number;
    reviewsCount?: number;
}

const DISTRIBUTION = [
  { stars: 5, pct: 70 },
  { stars: 4, pct: 20 },
  { stars: 3, pct: 10 },
];

export function CommunityReviews({ rating = 4.8, reviewsCount = 128 }: CommunityReviewsProps) {
    const filledStars = Math.floor(rating);

    return (
        <section className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Community Reviews</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col gap-2">
                    <p className="text-4xl font-black leading-tight tracking-tighter text-slate-900 dark:text-slate-100">
                        {rating.toFixed(1)}
                    </p>
                    <div className="flex gap-0.5 text-brand-green">
                        {[1, 2, 3, 4, 5].map(star => (
                            <span key={star} className={`material-symbols-outlined !text-lg ${star <= filledStars ? 'fill-1' : ''}`}>
                                star
                            </span>
                        ))}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        {reviewsCount} reviews
                    </p>
                </div>
                <div className="grid min-w-[150px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2">
                    {DISTRIBUTION.map(({ stars, pct }) => (
                        <>
                            <p key={`s${stars}`} className="text-xs font-bold text-slate-900 dark:text-slate-100">{stars}</p>
                            <div key={`b${stars}`} className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                                <div className="rounded-full bg-brand-green" style={{ width: `${pct}%` }}></div>
                            </div>
                            <p key={`p${stars}`} className="text-slate-500 text-[10px] font-bold text-right">{pct}%</p>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}
