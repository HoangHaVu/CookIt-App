// ============================================================
// FILE: types.ts
// PATH: /Users/hoanghavu/myprojects/CookIt!/src/lib/types.ts
// PROJECT: CookIt!
// PURPOSE: Shared TypeScript interfaces for all data models
// ============================================================

export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  bio?: string;
  badge?: string;
  followers: number;
  following: number;
  recipesCount: number;
  isFollowing?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color?: string;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit?: string;
}

export interface Step {
  order: number;
  instruction: string;
  duration?: number;
  tip?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  time: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  rating?: number;
  reviewsCount?: number;
  likesCount: number;
  isFavorite: boolean;
  isLiked: boolean;
  author: User;
  ingredients?: Ingredient[];
  steps?: Step[];
  nutrition?: NutritionInfo;
  tags?: string[];
  createdAt: string;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  likesCount: number;
  createdAt: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  recipesCount: number;
  type: 'Personal' | 'Shared' | 'Public';
  recipes?: Recipe[];
}

export interface MealPlanEntry {
  id: string;
  recipe: Recipe;
  date: string;
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
}

export interface PantryItem {
  id: string;
  name: string;
  quantity: string;
  imageSrc?: string;
  imageAlt?: string;
  levelWidth: string;
  levelColor?: 'green' | 'yellow' | 'red';
  actionIcon?: string;
  expiresAt?: string;
  category: string;
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  coverImage?: string;
  membersCount: number;
  isPrivate: boolean;
}

export interface ActivityPost {
  id: string;
  author: User;
  content: string;
  postImage?: string;
  recipeCard?: Pick<Recipe, 'id' | 'title' | 'imageSrc' | 'rating' | 'reviewsCount'> & {
    prepTime?: string;
    cookTime?: string;
  };
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  timeAgo: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}
