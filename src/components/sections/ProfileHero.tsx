import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../lib/store';

export function ProfileHero() {
    const user = useAppStore((s) => s.currentUser);
    const updateProfile = useAppStore((s) => s.updateProfile);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    if (!user) return null;

    const handleEditStart = () => {
        setName(user.name);
        setBio(user.bio ?? '');
        setIsEditing(true);
    };

    const handleSave = () => {
        updateProfile({ name: name.trim() || user.name, bio: bio.trim() });
        setIsEditing(false);
    };

    return (
        <div className="flex p-4 @container">
            <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-accent-light"
                        style={{ backgroundImage: `url('${user.avatarUrl}')` }}
                    ></div>
                    {isEditing ? (
                        <div className="flex flex-col items-center gap-3 w-full px-6">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full text-center text-[22px] font-bold rounded-xl border-2 border-brand-green/30 bg-slate-50 dark:bg-slate-800 px-4 py-2 focus:outline-none focus:border-brand-green"
                                placeholder="Your name"
                            />
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                rows={2}
                                className="w-full text-center text-sm rounded-xl border-2 border-brand-green/30 bg-slate-50 dark:bg-slate-800 px-4 py-2 focus:outline-none focus:border-brand-green resize-none"
                                placeholder="Your bio..."
                            />
                        </div>
                    ) : (
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
                    )}
                </div>

                <div className="flex gap-3">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-10 px-6 text-white text-sm font-bold transition-all hover:bg-brand-green/90 bg-brand-green active:scale-95"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex min-w-[80px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 text-slate-600 dark:text-slate-300 text-sm font-bold transition-all hover:bg-slate-100 dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 active:scale-95"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleEditStart}
                                className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 text-white text-sm font-bold transition-all hover:bg-primary/90 bg-primary active:scale-95"
                            >
                                Edit Profile
                            </button>
                            <button
                                onClick={() => navigate('/invitefriends')}
                                className="flex cursor-pointer items-center justify-center rounded-xl size-10 text-brand-green border-2 border-brand-green/30 hover:bg-brand-green/10 transition-all active:scale-95"
                            >
                                <span className="material-symbols-outlined text-xl font-black">person_add</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
