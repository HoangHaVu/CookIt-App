
import { RecipeCard } from '../ui/RecipeCard';

const RECIPES = [
    {
        title: 'Miso-Glazed Salmon Bowl',
        description: 'Fresh atlantic salmon served with quinoa and seasonal greens.',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPal1VHbuNfED9ncVgsW4A8xgXIp_YxJz8Iz-vdtOQkaspVQC-yWpXgurR8vXTLgzl2q2NHEh9gQFe3H-TT_87OZQo8g3RNuDrXZeOl5ag70CLctRSdCk93IFV3_pOIEXHJ7im5_HOXoSdoECyEypxneorzqdZGGa6_SQBoY9f0ChFW78nsys7f7WHsRnf-yd85zGmc24Eo3PyhAanigxYMKcqL25iujfdGKF35NFF3tex1r57yhAidusx4qxoC3HiT5ocMpjjcxTG',
        imageAlt: 'Vibrant healthy salad bowl with salmon and avocado',
        badgeText: 'Easy • 20 mins',
        rating: 4.8,
        reviewsCount: '1.2k',
        isBookmarked: true,
    },
    {
        title: 'Truffle Mushroom Linguine',
        description: 'Rich and creamy pasta infused with black truffle oil and wild mushrooms.',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPNqhb9s9v8sfq5rYu6Jb2T8vn61UKwzwm1zjg8XNOsVKQ0kLo60kp1K-eWjVj896Qt5OpJs_A7xIxqENpdwrRIzyV1gVRE2XAjNXuwhuMxN1HWRdAzJgnkfACUDp4Vnxoc7OdSKsW3LOXS5ifkGRZdXow3c9EXzajj2Wvr0u4cnQ7dBYR0RdR1nwCWFvyPOez6QlRt8zyobhlQP_Tj5PyEikpKoOhR73QYulYCckWweY7l4XsJXgRNeo4SEgZkWU98UY2qH_Q0eVW',
        imageAlt: 'Creamy mushroom pasta with fresh herbs',
        badgeText: 'Medium • 45 mins',
        rating: 4.9,
        reviewsCount: '850',
        isBookmarked: false,
    },
];

export function RecommendedRecipes() {
    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">Recommended for you</h3>
                <button className="text-primary text-sm font-semibold">Refresh</button>
            </div>
            <div className="space-y-6">
                {RECIPES.map((r, i) => (
                    <RecipeCard key={i} {...r} />
                ))}
            </div>
        </section>
    );
}
