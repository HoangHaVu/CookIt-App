interface RecipeBannerProps {
    imageSrc: string;
    imageAlt: string;
}

export function RecipeBanner({ imageSrc, imageAlt }: RecipeBannerProps) {
    return (
        <div className="relative h-[400px] w-full">
            <div
                className="w-full h-full bg-center bg-no-repeat bg-cover"
                data-alt={imageAlt}
                style={{
                    backgroundImage: `url('${imageSrc}')`,
                }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
        </div>
    );
}
