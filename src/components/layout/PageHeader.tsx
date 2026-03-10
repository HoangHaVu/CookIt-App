import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
    showBackButton?: boolean;
    showShareButton?: boolean;
    onBack?: () => void;
    onRightAction?: () => void;
    transparent?: boolean;
    rightActionIcon?: string;
}

export function PageHeader({
    title,
    showBackButton = true,
    showShareButton = true,
    onBack,
    onRightAction,
    transparent = false,
    rightActionIcon = 'share'
}: PageHeaderProps) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(-1);
        }
    };

    return (
        <header className={`flex items-center p-6 justify-between relative z-10 transition-all ${transparent
                ? 'bg-transparent text-white'
                : 'bg-brand-green text-white curved-header shadow-lg shadow-brand-green/10'
            }`}>
            {showBackButton ? (
                <button
                    className={`size-12 flex items-center justify-center rounded-2xl transition-all active:scale-95 ${transparent ? 'hover:bg-white/10' : 'hover:bg-white/10'
                        }`}
                    onClick={handleBack}
                >
                    <span className="material-symbols-outlined font-black">arrow_back</span>
                </button>
            ) : (
                <div className="size-12" />
            )}

            <h1 className="text-xl font-black leading-tight tracking-tight flex-1 text-center truncate px-4 uppercase">
                {title}
            </h1>

            {showShareButton ? (
                <button onClick={onRightAction} className="size-12 flex items-center justify-center rounded-2xl transition-all active:scale-95 hover:bg-white/10">
                    <span className="material-symbols-outlined font-black">{rightActionIcon}</span>
                </button>
            ) : (
                <div className="size-12" />
            )}
        </header>
    );
}
