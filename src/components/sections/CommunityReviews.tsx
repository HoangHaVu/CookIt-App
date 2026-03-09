export function CommunityReviews() {
    return (
        <section className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Community Reviews</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col gap-2">
                    <p className="text-4xl font-black leading-tight tracking-tighter text-slate-900 dark:text-slate-100">
                        4.8
                    </p>
                    <div className="flex gap-0.5 text-brand-green">
                        {[1, 2, 3, 4].map(star => (
                            <span key={star} className="material-symbols-outlined !text-lg fill-1">
                                star
                            </span>
                        ))}
                        <span className="material-symbols-outlined !text-lg">
                            star
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        128 reviews
                    </p>
                </div>
                <div className="grid min-w-[150px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2">
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">5</p>
                    <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                            className="rounded-full bg-brand-green"
                            style={{ width: '70%' }}
                        ></div>
                    </div>
                    <p className="text-slate-500 text-[10px] font-bold text-right">
                        70%
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">4</p>
                    <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                            className="rounded-full bg-brand-green"
                            style={{ width: '20%' }}
                        ></div>
                    </div>
                    <p className="text-slate-500 text-[10px] font-bold text-right">
                        20%
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">3</p>
                    <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                            className="rounded-full bg-brand-green"
                            style={{ width: '10%' }}
                        ></div>
                    </div>
                    <p className="text-slate-500 text-[10px] font-bold text-right">
                        10%
                    </p>
                </div>
            </div>
        </section>
    );
}
