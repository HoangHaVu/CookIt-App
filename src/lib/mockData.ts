// ============================================================
// FILE: mockData.ts
// PATH: /Users/hoanghavu/myprojects/CookIt!/src/lib/mockData.ts
// PROJECT: CookIt!
// PURPOSE: Centralized mock data for all screens
// ============================================================

import type { User, Recipe, Collection, Category, PantryItem, MealPlanEntry } from './types';

// ── Users ──────────────────────────────────────────────────

export const MOCK_CURRENT_USER: User = {
  id: 'user-0',
  name: 'Alex Johnson',
  username: 'alexcooks',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC2rYzDk03cl2XFv17aeO0ttaVyqNcZdEHOz_pBOphQCgPrNJS3FV7pFq_ih-72ChyxfO1q4DTeoq6RRZrYNlSsRxdleK2LpVZmiopUB2ki1lHggGBiuYrRHJp7KqUwfh69V-ZwqFSGDOg4O0bMKxbVzeF5JlD-angOWTjUm0UnxnketBXnl9HsaKAUPHe07aNwnd8l2hObGKdKEzsk7iM2TMngc5rfGVTUjUmn6Uga36jfmiZF5zHpyiRw4eTOy8oMi-ntr1TLAL',
  bio: 'Home cook & recipe explorer. I love experimenting with seasonal ingredients.',
  badge: 'Home Chef',
  followers: 284,
  following: 103,
  recipesCount: 42,
};

export const MOCK_USERS: User[] = [
  {
    id: 'user-1',
    name: 'Maria Chen',
    username: 'mariabakes',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiM4XY9tWcMnzEPcKcY0T_QlaIxDyGBkGV-rm1UvZH8g1JudJraYwKSbeyf7QF95VwwpyiPpFQ6-j7JTrfSZ7zUeuPxqT1MCJqkdo5UZPlZXgcS7cBo-QcsMAmQz8-qniiEBggc961PQs1Gl1V9fR_HC-Zebm1eJLf0jxR7QuOA7z-20IzqA7Rds_eGbFBS0fCZnV_aefOFa42Rs33fP2zI4uZzZLP1hMZI3ATdgq4HLQay8ZXaHBRbWprWcgkbYEq5WxzAAJTSWYi',
    bio: 'Baking is my therapy',
    badge: 'Baking Expert',
    followers: 1240,
    following: 87,
    recipesCount: 156,
  },
  {
    id: 'user-2',
    name: 'David Wilson',
    username: 'davidgrills',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCrcJdkggMY9psbNJnYduuKEuNRwoS5iLG-aZqMJqO1VqAVXpwfKt92PLwW2r_O6D0AetcRMFKzaQ1VjDK5LhJyP0zJjeadxJn7wJpmNP5qQiWpXwMpqmvZcwh-6xdxv5X4qViTzkQbLSl-mGy6UMReVD9Gbtt27QXGoKxNiLc5FrMYjBWwxBqq_bgNuUsYLcu91eEFDeauVNURvaUgIVAw1WBlZwvaCBVlVRRskNUzLuE_kXcEw3Exr7vdxjXGt-IGZwnOUEZ0hIl',
    bio: 'Weekend BBQ champion. Ask me about my dry rub.',
    badge: 'Grill Master',
    followers: 3500,
    following: 210,
    recipesCount: 89,
  },
];

// ── Categories ─────────────────────────────────────────────

export const MOCK_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'Breakfast', icon: 'egg' },
  { id: 'cat-2', name: 'Salad', icon: 'eco' },
  { id: 'cat-3', name: 'Main Course', icon: 'set_meal' },
  { id: 'cat-4', name: 'Dessert', icon: 'cake' },
  { id: 'cat-5', name: 'Beverage', icon: 'local_cafe' },
  { id: 'cat-6', name: 'Snack', icon: 'fastfood' },
];

// ── Recipes ────────────────────────────────────────────────

export const MOCK_RECIPES: Recipe[] = [
  {
    id: 'recipe-1',
    title: 'Watermelon Feta Salad',
    description: 'A refreshing summer salad combining sweet watermelon with tangy feta cheese, fresh mint, and a light honey-lime dressing.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3898a_rWbr2l3QkMewEOQ0tsPWNVk4LCGUIDvHb3QI_Lr0hPhxIi9RBvavqpqGICT0UlZf1YSjsT8jfpno2ZtJnxKucmtpC-j6nQYPra7klBunCoWzBR4rqgaYj0Xzlo0mMj-RUJk9UEbdZ7GKobH0vCq7M6HVm7gHyAHto3mdmQJM2pkyfWR1rCh8Asq0jDaP5WecCS25Hk0Oznsp1vYnSLFQyg4__Y4wF95Gs_4__QCOhb57i13_WPqbUDBDOHEsN_Mbi2f8iVR',
    category: 'Salad',
    time: '15 mins',
    prepTime: '15 mins',
    servings: 4,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 128,
    likesCount: 342,
    isFavorite: true,
    isLiked: false,
    author: MOCK_USERS[0],
    ingredients: [
      { name: 'Watermelon', amount: '4', unit: 'cups cubed' },
      { name: 'Feta cheese', amount: '150', unit: 'g crumbled' },
      { name: 'Fresh mint', amount: '1/4', unit: 'cup' },
      { name: 'Lime juice', amount: '2', unit: 'tbsp' },
      { name: 'Honey', amount: '1', unit: 'tbsp' },
      { name: 'Olive oil', amount: '2', unit: 'tbsp' },
    ],
    steps: [
      { order: 1, instruction: 'Cut watermelon into bite-sized cubes and place in a large bowl.', duration: 5 },
      { order: 2, instruction: 'Whisk together lime juice, honey, and olive oil in a small bowl.', duration: 2 },
      { order: 3, instruction: 'Drizzle dressing over watermelon and toss gently.', duration: 1 },
      { order: 4, instruction: 'Top with crumbled feta and fresh mint leaves. Serve immediately.', duration: 2, tip: 'Best served chilled!' },
    ],
    nutrition: { calories: 185, protein: 6, carbs: 24, fat: 8, fiber: 1 },
    tags: ['summer', 'salad', 'vegetarian', 'quick'],
    createdAt: '2024-06-15',
  },
  {
    id: 'recipe-2',
    title: 'Grilled Lemon Chicken',
    description: 'Juicy chicken marinated in lemon, garlic, and fresh herbs, then grilled to perfection.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3LLpe8dPcvqoAwxUy7iqLnfKqCgDVMlKfpU1-zWuQCDZS7rAM6Njwrq1oC4ddz1D1xzZjBumbHdByFckJBobnmF_1D6Udf6o2LwNQtg17s3YiezVCiTsbK63rEzBeb8eCwm0xgR1czcFVe46bk1s7kSbz09O2iysQsR0xB7PF6nFY6ji98Ivjdvs9v0pR9tl0wWn0MFppZlxRCOrfCw6fyEJZVBKyQHdhtjzZ4EWV62j3FX2XW1DmoTQmlfsp4UMKehrNBZsKmsyf',
    category: 'Main Course',
    time: '30 mins',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Medium',
    rating: 4.6,
    reviewsCount: 89,
    likesCount: 215,
    isFavorite: false,
    isLiked: false,
    author: MOCK_USERS[1],
    ingredients: [
      { name: 'Chicken breasts', amount: '4', unit: 'pieces' },
      { name: 'Lemon', amount: '2', unit: 'whole' },
      { name: 'Garlic', amount: '4', unit: 'cloves' },
      { name: 'Fresh thyme', amount: '2', unit: 'tbsp' },
      { name: 'Olive oil', amount: '3', unit: 'tbsp' },
      { name: 'Salt & pepper', amount: '', unit: 'to taste' },
    ],
    steps: [
      { order: 1, instruction: 'Mix lemon juice, garlic, thyme, and olive oil. Marinate chicken for at least 30 minutes.', duration: 30, tip: 'Longer marination = more flavor' },
      { order: 2, instruction: 'Heat grill to medium-high heat.', duration: 5 },
      { order: 3, instruction: 'Grill chicken 6-7 minutes per side until internal temp reaches 165°F.', duration: 14 },
      { order: 4, instruction: 'Rest 5 minutes before slicing. Serve with grilled lemon halves.', duration: 5 },
    ],
    nutrition: { calories: 310, protein: 42, carbs: 3, fat: 14 },
    tags: ['chicken', 'grilled', 'healthy', 'protein'],
    createdAt: '2024-05-20',
  },
  {
    id: 'recipe-3',
    title: 'Smoked BBQ Ribs',
    description: 'Fall-off-the-bone ribs with a secret dry rub and tangy BBQ glaze. Low and slow is the only way.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARrMyiBKop-gIkpcK191B3_g8aEpTBQ844e5CyWC_jK68Blqlis73Tg0pmKDnPC67e0wMUY1kbSp-c7W6M1yVTclHrPJ_wP9UOCzk7W5Ed46cep59Z19V7_R8Zs_SPVHGNBtvfkLbNztO6rBP22KYsU5jyyEjKSS09QvnSURkEHtRMh5V-2afhhqz7wt5S080YBGYa4FuYH-jtXegarnqgWsxlRVlT6c9KXuyrWWUJKwVN8wAZEKS3VprHv5-qNiLCxvuJKxZ3OV8A',
    category: 'Main Course',
    time: '6 hrs',
    prepTime: '15 mins',
    cookTime: '6 hours',
    servings: 6,
    difficulty: 'Hard',
    rating: 4.9,
    reviewsCount: 245,
    likesCount: 892,
    isFavorite: false,
    isLiked: false,
    author: MOCK_USERS[1],
    tags: ['bbq', 'ribs', 'smoked', 'weekend'],
    createdAt: '2024-04-10',
  },
  {
    id: 'recipe-4',
    title: 'Berry Smoothie Bowl',
    description: 'Thick blended berry base topped with granola, fresh fruit, and a drizzle of honey.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSw71LCG4r8d7OSE5aa1NzY15Hj-vBx0hriSCIlmC-H_g1jvN69zejJXYMDqgp12w0GYIIFQcsrbLfEjh4K_RInNHpmPT4zQ66NqH_hcEI8vlQ843_niqPzcLH6HFRDoNbn3RsFD0dm9Ixky0bXfDJhDzzjLpoZuIVaESw-p4wAvdfAdhF1aitMTjRUrQNOD7qkN6VCqldgzzxPZGPmdLNFq-cfSKT_dkpnh4EFWgmX7wg1lX9665Xlt9oMcxQITLR_OswDtr8WGE1',
    category: 'Breakfast',
    time: '12 mins',
    servings: 2,
    difficulty: 'Easy',
    rating: 4.7,
    reviewsCount: 63,
    likesCount: 178,
    isFavorite: false,
    isLiked: false,
    author: MOCK_USERS[0],
    tags: ['breakfast', 'smoothie', 'healthy', 'vegan'],
    createdAt: '2024-07-01',
  },
  {
    id: 'recipe-5',
    title: 'Peach Iced Tea',
    description: 'Homemade iced tea infused with fresh peaches and a hint of ginger.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH1OmCqsU6XHfTp4mOKQKaIh835045Kc51x29i9qcOJ49EWkYKFq0V31pUz-ghqlWWnsgXUgt3A_8ZqEtKJ0uiH2ovYlEAPORfE3voKSrQ2yrCthnGhvLcABZW-B0yptCUiUGkV9fwFqzR74nO0C5LTK4HMW7WOdDqVbv4p6Rsr15_ogDz3zdPSlKPqBJjuBOcwvWCB8f5JbvE60xJfByULmtPMrTir0CB3pyRIqo3UJiIXzeKlhppwCHCyawkXKGnPfsvLVyfjySG',
    category: 'Beverage',
    time: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    rating: 4.5,
    reviewsCount: 41,
    likesCount: 94,
    isFavorite: false,
    isLiked: false,
    author: MOCK_USERS[0],
    tags: ['beverage', 'summer', 'refreshing'],
    createdAt: '2024-07-12',
  },
];

// ── Collections ────────────────────────────────────────────

export const MOCK_COLLECTIONS: Collection[] = [
  {
    id: 'col-1',
    title: 'Summer Favorites',
    description: 'A curated collection of refreshing meals and drinks for the sunny season.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUPSuMT_RlbYT2j4JUwcfSttElMHvPNaYQ8MLAw0wUjkUu6mQRSLgRkIA_dHmpb9e0xBPN3CrN0IWk2EPo7fd-2_xv7MNlRcAMhVAepO42L4UtEkb37v8b7uibYcUByoslpLydsY0pIFUYEkumnCGJ0zkX1xHKSi_MbElT6xSgFtEN2XDFKQx6oezkG7X8KekW-DuieP8nz7_2cuFRMAVDiKWIYkv_B80cgjp1WOMBrZ11HUnwB5oVO5b8PnvfaXD84r65PQt2C1xt',
    recipesCount: 24,
    type: 'Personal',
  },
  {
    id: 'col-2',
    title: 'Quick Weeknight Meals',
    description: 'Ready in under 30 minutes. Because weeknights are hectic.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3LLpe8dPcvqoAwxUy7iqLnfKqCgDVMlKfpU1-zWuQCDZS7rAM6Njwrq1oC4ddz1D1xzZjBumbHdByFckJBobnmF_1D6Udf6o2LwNQtg17s3YiezVCiTsbK63rEzBeb8eCwm0xgR1czcFVe46bk1s7kSbz09O2iysQsR0xB7PF6nFY6ji98Ivjdvs9v0pR9tl0wWn0MFppZlxRCOrfCw6fyEJZVBKyQHdhtjzZ4EWV62j3FX2XW1DmoTQmlfsp4UMKehrNBZsKmsyf',
    recipesCount: 18,
    type: 'Personal',
  },
];

// ── Pantry Items ───────────────────────────────────────────

export const MOCK_PANTRY_ITEMS: PantryItem[] = [
  {
    id: 'pantry-1',
    name: 'Basmati Rice',
    quantity: '2.5 kg left',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUBCyeraeUUlEW4SMEsN-_A9VNrV1rAD2m7mXFHBMIbkZooRicyrYem6-6zRQGzTOqjTDI0evhe7DkJGd3RsD1TwYjaLaPAfS3PG2WYUPsMrztc5DpS3ix2MpU6VqUjReJXZ-paXiDNsn9y_VCYvz3HZfgMmhudNqWP8uISKSwHATMQjsbsI6nwVgIRVHnptVCihHFZjWujQrEa17Q1TFjpDZAdEQ37nSIyVqt3wpyJHvXPddoizDBW4_UYGYnum8qmKeKaVf1PhDN',
    imageAlt: 'Close up of uncooked white rice grains',
    levelWidth: '80%',
    category: 'Grains',
  },
  {
    id: 'pantry-2',
    name: 'Rolled Oats',
    quantity: '0.2 kg left',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuwAWl79ws80HyIpw7BvHMxrWVf2cDIdWs2jGMp-i0XxckVL01zFiLtu2vwSenaGcmCOkXsmbH7BRsDIkRhO_XpwXKnbbRTh75cs3_PlXd6Zj4NQqERPQuWm4g-MWXBgO03IMN62pjk1Ku7w7fYoz4shYhVgsW5dtUj9nPnxU2XHqs1ouHIHvRd-rigtYM8woL7hI_alQJ56IVMYqhB1_69HKuY6O1N_IFIAn-wkXDYe32iLW0jdWistZV0Lm8RE01iya0KrA6p0wr',
    imageAlt: 'Organic rolled oats in a jar',
    levelColor: 'red',
    levelWidth: '10%',
    actionIcon: 'shopping_cart',
    category: 'Grains',
    expiresAt: '2024-08-15',
  },
];

// ── Meal Plan ──────────────────────────────────────────────

export const MOCK_MEAL_PLAN: MealPlanEntry[] = [
  { id: 'mp-1', recipe: MOCK_RECIPES[3], date: '2024-10-07', mealType: 'Breakfast' },
  { id: 'mp-2', recipe: MOCK_RECIPES[0], date: '2024-10-07', mealType: 'Lunch' },
  { id: 'mp-3', recipe: MOCK_RECIPES[1], date: '2024-10-07', mealType: 'Dinner' },
];
