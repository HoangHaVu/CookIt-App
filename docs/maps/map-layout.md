# map-layout.md
# Letzte Aktualisierung: 2026-03-09

## Layout-Komponenten
Dies sind Komponenten, die auf mehreren Seiten für die Struktur und Navigation verwendet werden.

### PageHeader
Datei: src/components/layout/PageHeader.tsx
Props: title, subtitle, rightActionIcon, transparent, onBack, leftIcon
Verwendung: Fast alle Screens

### AppNavigation
Datei: src/components/layout/AppNavigation.tsx
Props: activeTab
Verwendung: Core Navigation (Homepage, Planner, Recipes, Profile)

### SearchHeader
Datei: src/components/layout/SearchHeader.tsx
Verwendung: HomepageGreen, HomepageOrange

### WeeklyPlannerHeader
Datei: src/components/layout/WeeklyPlannerHeader.tsx
Verwendung: WeeklyMealPlanner

### CookbookHeader
Datei: src/components/layout/CookbookHeader.tsx
Verwendung: PrivateCookbook

### PantryHeader
Datei: src/components/layout/PantryHeader.tsx
Verwendung: PantryInventory

### ProfileHeader
Datei: src/components/layout/ProfileHeader.tsx
Verwendung: Profile

### RankingHeader
Datei: src/components/layout/RankingHeader.tsx
Verwendung: RecipeRankings

### ShoppingHeader
Datei: src/components/layout/ShoppingHeader.tsx
Verwendung: ShoppingList

### CookHeader
Datei: src/components/layout/CookHeader.tsx
Verwendung: CookMode

### CreateRecipeHeader
Datei: src/components/layout/CreateRecipeHeader.tsx
Verwendung: CreateRecipe

### RecipeHeader
Datei: src/components/layout/RecipeHeader.tsx
Verwendung: RecipeDetail