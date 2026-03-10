interface PantryHeaderProps {
    onExpirationClick?: () => void;
}

export function PantryHeader({ onExpirationClick }: PantryHeaderProps) {
    return (
        <header className="flex items-center bg-nav-bg p-4 pb-4 justify-between sticky top-0 z-10 shadow-md">
            <div className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-white">menu</span>
            </div>
            <h2 className="text-white text-lg font-bold">My Pantry</h2>
            <div className="flex size-10 items-center justify-end">
                <button onClick={onExpirationClick} className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-white">notifications</span>
                </button>
            </div>
        </header>
    );
}
