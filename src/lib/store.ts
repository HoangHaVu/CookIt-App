// ============================================================
// FILE: store.ts
// PATH: /Users/hoanghavu/myprojects/CookIt!/src/lib/store.ts
// PROJECT: CookIt!
// PURPOSE: Zustand global state — auth, likes, favorites
// ============================================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, MealPlanEntry } from './types';
import { MOCK_CURRENT_USER } from './mockData';

interface AppState {
  // Auth
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (user?: User) => void;
  logout: () => void;

  // Liked recipes (set of recipe IDs)
  likedRecipeIds: Set<string>;
  toggleLike: (recipeId: string) => void;
  isLiked: (recipeId: string) => boolean;

  // Favorited recipes (set of recipe IDs)
  favoritedRecipeIds: Set<string>;
  toggleFavorite: (recipeId: string) => void;
  isFavorited: (recipeId: string) => boolean;

  // Meal plan
  mealPlan: MealPlanEntry[];
  addToMealPlan: (entry: MealPlanEntry) => void;
  removeFromMealPlan: (entryId: string) => void;

  // Recently viewed
  recentlyViewedIds: string[];
  markRecipeViewed: (recipeId: string) => void;
}

// Sets aren't JSON-serializable, so we persist as arrays and rehydrate
interface PersistedState {
  isAuthenticated: boolean;
  currentUser: User | null;
  likedRecipeIds: string[];
  favoritedRecipeIds: string[];
  mealPlan: MealPlanEntry[];
  recentlyViewedIds: string[];
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // ── Auth ───────────────────────────────────────────────
      isAuthenticated: false,
      currentUser: null,

      login: (user = MOCK_CURRENT_USER) =>
        set({ isAuthenticated: true, currentUser: user }),

      logout: () =>
        set({ isAuthenticated: false, currentUser: null }),

      // ── Likes ──────────────────────────────────────────────
      likedRecipeIds: new Set<string>(),

      toggleLike: (recipeId) =>
        set((state) => {
          const next = new Set(state.likedRecipeIds);
          if (next.has(recipeId)) {
            next.delete(recipeId);
          } else {
            next.add(recipeId);
          }
          return { likedRecipeIds: next };
        }),

      isLiked: (recipeId) => get().likedRecipeIds.has(recipeId),

      // ── Favorites ──────────────────────────────────────────
      favoritedRecipeIds: new Set<string>(),

      toggleFavorite: (recipeId) =>
        set((state) => {
          const next = new Set(state.favoritedRecipeIds);
          if (next.has(recipeId)) {
            next.delete(recipeId);
          } else {
            next.add(recipeId);
          }
          return { favoritedRecipeIds: next };
        }),

      isFavorited: (recipeId) => get().favoritedRecipeIds.has(recipeId),

      // ── Meal Plan ──────────────────────────────────────────
      mealPlan: [],

      addToMealPlan: (entry) =>
        set((state) => ({ mealPlan: [...state.mealPlan, entry] })),

      removeFromMealPlan: (entryId) =>
        set((state) => ({ mealPlan: state.mealPlan.filter((e) => e.id !== entryId) })),

      // ── Recently Viewed ────────────────────────────────────
      recentlyViewedIds: [],

      markRecipeViewed: (recipeId) =>
        set((state) => {
          const filtered = state.recentlyViewedIds.filter((id) => id !== recipeId);
          return { recentlyViewedIds: [recipeId, ...filtered].slice(0, 20) };
        }),
    }),
    {
      name: 'cookit-storage',
      // Serialize/deserialize Sets as arrays for localStorage
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const parsed: { state: PersistedState } = JSON.parse(str);
          return {
            ...parsed,
            state: {
              ...parsed.state,
              likedRecipeIds: new Set(parsed.state.likedRecipeIds ?? []),
              favoritedRecipeIds: new Set(parsed.state.favoritedRecipeIds ?? []),
            },
          };
        },
        setItem: (name, value) => {
          const serialized = {
            ...value,
            state: {
              ...value.state,
              likedRecipeIds: Array.from((value.state as AppState).likedRecipeIds),
              favoritedRecipeIds: Array.from((value.state as AppState).favoritedRecipeIds),
            },
          };
          localStorage.setItem(name, JSON.stringify(serialized));
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
