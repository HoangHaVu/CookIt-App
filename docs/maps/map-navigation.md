# map-navigation.md
# Navigations-Graph — nur für App-Projekte
# Letzte Aktualisierung: 2026-03-09

## Screen-Graph

Auth-Flow:
  Onboarding → SignUp → Homepage
  Onboarding → Login → Homepage
  Login → PasswordReset

Haupt-Navigation (AppNavigation):
  HomepageGreen/Orange → WeeklyMealPlanner
  HomepageGreen/Orange → PrivateCookbook
  HomepageGreen/Orange → Profile

Innere Flows:
  PrivateCookbook → CollectionDetail → RecipeDetail
  WeeklyMealPlanner → MealPlannerCalendar
  RecipeDetail → CookMode
  PantryInventory → ExpirationTracking
  Marketplace → ProductDetail (n/a)
  CreateGroup → GroupActivityFeed → InviteMembers
  CreateChallenge → ChallengeLeaderboard → SubmitToChallenge

## Routes (react-router)
  /                      → Homepage (Green/Orange)
  /onboarding            → Onboarding
  /login                 → Login
  /signup                → SignUp
  /passwordreset         → PasswordReset
  /weeklymealplanner     → WeeklyMealPlanner
  /mealplannercalendar   → MealPlannerCalendar
  /privatecookbook       → PrivateCookbook
  /collectiondetail      → CollectionDetail
  /recipedetail          → RecipeDetail
  /cookmode              → CookMode
  /profile               → Profile
  /pantryinventory       → PantryInventory
  /expirationtracking    → ExpirationTracking
  /shoppinglist          → ShoppingList
  /marketplace           → Marketplace
  /trendingcreators      → TrendingCreators
  /reciperankings        → RecipeRankings
  /achievementsbadges    → AchievementsBadges
  /creategroup           → CreateGroup
  /groupactivityfeed     → GroupActivityFeed
  /invitemembers         → InviteMembers
  /createchallenge       → CreateChallenge
  /challengeleaderboard  → ChallengeLeaderboard
  /submittochallenge     → SubmitToChallenge
  /recipeimport          → RecipeImport
  /magicimportscan       → MagicImportScan
  /importconfirmation    → ImportConfirmation
  /invitefriends         → InviteFriends

## Shared State zwischen Screens
  AppState (Context/Store) → alle Screens (implizit)
  NavigationState         → AppNavigation, alle Main Screens
