# map-ui-shared.md
# Letzte Aktualisierung: 2026-03-09

## Geteilte UI-Komponenten
Diese Komponenten werden auf verschiedenen Seiten verwendet, um Daten modular anzuzeigen.

### RecipeCard
Datei: src/components/ui/RecipeCard.tsx
Props: imageSrc, imageAlt, badgeText, title, description, rating, reviewsCount, isBookmarked
Verwendung: RecommendedRecipes Section (Homepage)

### RecipeThumbnail
Datei: src/components/ui/RecipeThumbnail.tsx
Props: title, category, time, imageSrc, isFavorite
Verwendung: SearchFilter

### GridRecipeCard
Datei: src/components/ui/GridRecipeCard.tsx
Verwendung: Explore / Discovery

### MealCard
Datei: src/components/ui/MealCard.tsx
Verwendung: MealSection (Planner)

### PantryItemCard
Datei: src/components/ui/PantryItemCard.tsx
Verwendung: PantryCategory (Inventory)

### StatsCard
Datei: src/components/ui/StatsCard.tsx
Verwendung: Profile

### AchievementCard
Datei: src/components/ui/AchievementCard.tsx
Verwendung: AchievementsBadges

### ActivityPost
Datei: src/components/ui/ActivityPost.tsx
Verwendung: GroupActivityFeed

### AuthorCard
Datei: src/components/ui/AuthorCard.tsx
Verwendung: RecipeDetail

### CollectionCard
Datei: src/components/ui/CollectionCard.tsx
Verwendung: PrivateCookbook

### CreatorCard
Datei: src/components/ui/CreatorCard.tsx
Verwendung: TrendingCreators

### ExpirationItem
Datei: src/components/ui/ExpirationItem.tsx
Verwendung: ExpirationTracking

### InviteCard
Datei: src/components/ui/InviteCard.tsx
Verwendung: InviteFriends, InviteMembers

### ProductCard
Datei: src/components/ui/ProductCard.tsx
Verwendung: Marketplace

### RankingCard
Datei: src/components/ui/RankingCard.tsx
Verwendung: RecipeRankings

### RankingRow
Datei: src/components/ui/RankingRow.tsx
Verwendung: RecipeRankings

### ShoppingItem
Datei: src/components/ui/ShoppingItem.tsx
Verwendung: ShoppingCategory (ShoppingList)