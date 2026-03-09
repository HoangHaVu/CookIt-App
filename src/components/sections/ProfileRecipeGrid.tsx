import { GridRecipeCard } from '../ui/GridRecipeCard';

const RECIPES = [
    {
        title: 'Summer Quinoa Salad',
        time: '15 mins',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoUS8Gay9fKcvvM92Fh_PvqTZcRS5oIKyFat97tfKWs9XVGNrGsrG_MqXqAYZI_KWWC9n2NZgAlD589S96bidtZkJJwor9_olczsWUc8wm1r2OUVcX7DQPwCxPsniZ9cUQnoRIRdartIcaAO3SGPKQE79ZqzTJibTp2VWQcwpnzUpg9zmgCP5GRmrGEjRGloVJEn26bWaJoNO6QT0krbFD0WmWu3BVu7GbX8XnbyyXuxsvDKKab0dWFXfqgKZFR7tP1CYyZJ_C9O26',
        imageAlt: 'Healthy vibrant salad bowl with grilled chicken',
        isFavorite: true,
    },
    {
        title: 'Truffle Carbonara',
        time: '30 mins',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqL9nWyTkEe1oqVtFUpjd7A4sbxqrS49o1LvJktlb24t0TQs-FHX5hNopHqBofik1vBbkqaaA1LkJ_AgTFVAuEdIpUggMAIq8A6E08Fn3dnyBQuebmIMxFKs0D0VX3bWVBxNt2CLRXDXtN4Ce6deD4bp3_LX_gBgtyzZ_alZ-DNHfJOuyFvff8LaA5JUdrWCX6JJjBoEryo2EjTOt67yHOWMVQQQ3Noug97buNbROK6M_t3mNe8fNDlia9g5JERzRDBL3lPRMAJX4X',
        imageAlt: 'Gourmet pasta dish with truffle and cream',
        isFavorite: true,
    },
    {
        title: 'Sourdough Pizza',
        time: '45 mins',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo0v-3tf4iXswMWEn_DolnusTjwfQcU7gxt3p412WObNuCysjIHZMasn35LSIoKPJPGBYZgzCOtsFL-a1ibzXIcwJjtKViRYcYPCyX5T7zY0MNO9OQnnPshQ-K1zfVRVUtckTD6j4QsAGpTXDCHxER0Y_EmVPzBTIDv5CNN0CjU5gkwvk3pALP2E2mwB7l3jRh0grorl9FfPtDax6QFhrJKnyh0Ne0g9gXmJw9FAdZo9UKAHoqW0eDIrpu1uYWf1vYbGOR1hSOnanG',
        imageAlt: 'Crispy homemade sourdough pizza Margherita',
        isFavorite: true,
    },
    {
        title: 'Avocado Toast Deluxe',
        time: '10 mins',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgQzbdx8kBGBbXKhcwb1CfSHkQFvjgSWyHOQ0i5XMQWRDHuu7eYH0Ult4xatiBnpr-SeRCwFl_iSoJdoj5Q0c1dpazdpHnAmuVwACCqbxi5UXrkHKAql2jtF720jOG0Sx06diLThyp0nbTv3QIa9PWLdmzT3uLfj-ViPvRdZsd5E_tBJ8c9ht49p5jj2kaP9GZURBJM64FXVkkfacwcjniib4lZd8cpi86u2zaiKVmNpkZWAAqpIjvM0j5Jyv0OXKWHevK7QRM6a9q',
        imageAlt: 'Fancy avocado toast with poached egg',
        isFavorite: true,
    },
];

export function ProfileRecipeGrid() {
    return (
        <div className="p-4 grid grid-cols-2 gap-4 pb-24">
            {RECIPES.map((recipe, i) => (
                <GridRecipeCard key={i} {...recipe} />
            ))}
        </div>
    );
}
