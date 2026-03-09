import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
    showBackButton?: boolean;
    showShareButton?: boolean;
    onBack?: () => void;
}

export function PageHeader({
    title,
    showBackButton = true,
    showShareButton = true,
    onBack
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
        <header className="flex items-center p-6 justify-between bg-brand-green text-white curved-header relative z-10 shadow-lg shadow-brand-green/10">
            {showBackButton ? (
                <button
                    className="size-10 flex items-center justify-center rounded-full transition-colors text-white/80 hover:bg-white/10"
                    onClick={handleBack}
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            ) : (
                <div className="size-10" />
            )}

            <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center truncate px-2">
                {title}
            </h1>

            {showShareButton ? (
                <button className="size-10 flex items-center justify-center rounded-full transition-colors text-white/80 hover:bg-white/10">
                    <span className="material-symbols-outlined">share</span>
                </button>
            ) : (
                <div className="size-10" />
            )}
        </header>
    );
}
