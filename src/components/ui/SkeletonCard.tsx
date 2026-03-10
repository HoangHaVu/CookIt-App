export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-slate-50 dark:border-slate-800 animate-pulse">
      <div className="aspect-square bg-slate-100 dark:bg-slate-800"></div>
      <div className="p-6 space-y-3">
        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full w-1/3"></div>
        <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full w-4/5"></div>
        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full w-1/2"></div>
      </div>
    </div>
  );
}

export function SkeletonFeed() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}
