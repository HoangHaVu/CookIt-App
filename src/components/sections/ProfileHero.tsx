import { useAppStore } from '../../lib/store';

export function ProfileHero() {
    const user = useAppStore((s) => s.currentUser);
    if (!user) return null;

    return (
        <div className="flex p-4 @container">
            <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-accent-light"
                        style={{ backgroundImage: `url('${user.avatarUrl}')` }}
                    ></div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-slate-900 dark:text-slate-100 text-[22px] font-bold leading-tight text-center">
                            {user.name}
                        </p>
                        <p className="text-primary font-medium text-sm mb-2">
                            @{user.username}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed text-center px-4">
                            {user.bio}
                        </p>
                    </div>
                </div>
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 text-white text-sm font-bold transition-all hover:bg-primary/90 bg-primary">
                    <span>Edit Profile</span>
                </button>
            </div>
        </div>
    );
}
