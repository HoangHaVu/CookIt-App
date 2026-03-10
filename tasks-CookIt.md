# tasks-CookIt.md — Cooksy
<!-- Zuletzt aktualisiert: 2026-03-09 -->

---

## Kritisch (Sofort)

- [x] State Management einrichten — Zustand installiert + src/lib/store.ts erstellt (2026-03-09)
- [x] React Router v6 konfiguriert — alle 32 Screens verdrahtet (2026-03-09)
- [x] Auth-Flow: Login/SignUp/Onboarding rufen store.login() auf → App.tsx leitet auth-basiert weiter (2026-03-09)
- [x] Protected Routes: ProtectedRoute-Komponente + alle 28 App-Screens abgesichert (2026-03-09)

---

## Hoch (Diese Woche)

### Phase 1 MVP — Core Screens verdrahten

- [x] Homepage — CategoryScroll (MOCK_CATEGORIES) + RecommendedRecipes (MOCK_RECIPES) + Loading Skeleton + personalisiertes Greeting (2026-03-09)
- [x] Recipe Detail — Zutaten, Schritte, Stats aus MOCK_RECIPES[0], Like-Button mit Store verdrahtet (2026-03-09)
- [x] Create Recipe — vollständige Form-State (Zutaten dynamisch, Schritte dynamisch, Tags, Privacy) (2026-03-09)
- [x] Profile Screen — currentUser aus Store, echte Stats (Followers, Saved-Count) (2026-03-09)
- [x] Search & Filter — MOCK_RECIPES + Live-Suche + EmptyState (2026-03-09)

### Daten-Layer

- [x] Mock-Daten angelegt — src/lib/mockData.ts mit 5 Rezepten, 2 Usern, Kategorien (2026-03-09)
- [x] TypeScript Interfaces definiert — src/lib/types.ts (Recipe, User, Comment, Collection, ...) (2026-03-09)
- [x] Like-System implementiert — optimistic updates via Zustand Set (2026-03-09)
- [x] Favoriten-System implementiert — RecipeCard + RecipeThumbnail verdrahtet (2026-03-09)

---

## Normal (Backlog)

### Phase 1 MVP — Restliche Screens

- [x] Private Cookbook — Sammlungen + CollectionDetail mit Tab-Filter (All Recipes / Recently Added) (2026-03-09)
- [x] AppNavigation einbauen → Tabs: Homepage / Planner / Recipes / Profile (2026-03-09)

### Interaktivität (Batch-Update 2)

- [x] ShoppingList — checkable Items (controlled), dynamischer Checkout-Zähler (2026-03-09)
- [x] ExpirationTracking — Tab-Filter (All / Expiring Soon / Expired) mit useState (2026-03-09)
- [x] TrendingCreators — Tab-Auswahl (Daily/Weekly/Monthly/All Time) + Follow-Toggle für alle Creator (2026-03-09)
- [x] AchievementsBadges — User-Name + Avatar aus Zustand-Store (2026-03-09)
- [x] Profile — Tab-State (My Recipes/Saved/Achievements) in Profile.tsx gelifted, ProfileRecipeGrid filtert nach Favoriten (2026-03-09)
- [x] CollectionDetail — Tab-Filter (All Recipes / Recently Added) mit useState (2026-03-09)
- [x] PantryInventory — Kategorie-Pills (All/Grains/Spices/Canned) aktiv schaltbar (2026-03-09)
- [x] Marketplace — Kategorie-Filter + Live-Suche beide gleichzeitig aktiv (2026-03-09)

### Interaktivität (Batch-Update 3)

- [x] ChallengeLeaderboard — Recipes/Creators Tab-Toggle mit getrennten Ranking-Daten (2026-03-09)
- [x] GroupActivityFeed — Feed/Recipes/Members Tabs, EmptyState für nicht-Feed-Tabs (2026-03-09)
- [x] InviteCard — onInvite Callback Prop hinzugefügt (2026-03-09)
- [x] InviteMembers — Invited-Set mit useState, "Done Inviting (N)"-Zähler (2026-03-09)
- [x] InviteFriends — Invited-Set + Copy-Feedback mit setTimeout (2026-03-09)
- [x] SubmitToChallenge — kontrollierte Radio-Selektion via useState statt defaultChecked (2026-03-09)
- [x] CreateGroup — Form-State (name, description, isPublic) + Validierung + echter Privacy-Toggle (2026-03-09)
- [x] CreateChallenge — Form-State (name, rules, prize, dates) + disabled Launch-Button (2026-03-09)
- [x] MealPlannerCalendar — echter dynamischer Kalender: prev/next Monat, selectedDay, firstDayOfWeek (2026-03-09)

### UX / Ergänzende Screens

- [x] Empty States — EmptyState-Komponente erstellt, verdrahtet in SearchFilter + PrivateCookbook (2026-03-09)
- [x] Loading States — SkeletonCard/SkeletonFeed-Komponente + 800ms Simulation in HomepageGreen (2026-03-09)
- [x] Error States — React ErrorBoundary + "Try Again"-Button in main.tsx eingebunden (2026-03-09)

### Phase 2 Vorbereitung (nur Architektur)

- [x] Cook Mode — funktionierender Countdown-Timer mit Play/Pause, Schritt-Navigation, Done-State (2026-03-09)
- [x] Weekly Meal Planner — DayPicker mit echtem Wochendatum, tagbasierte Mahlzeiten, EmptyState für leere Tage (2026-03-09)
- [x] Catch-All Route `*` → Navigate to `/` (auth-aware redirect) (2026-03-10)

### MVP Launch Status

- [x] BUILD CLEAN — 127 Module, 0 TypeScript-Fehler, 398 KB Bundle (2026-03-10)

---

## Abgeschlossen

- [x] Projekt-Setup: React + Vite + TypeScript + Tailwind CSS v3 (2026-03-09)
- [x] Alle Screen-Dateien angelegt — 32 Screens in src/app/ (2026-03-09)
- [x] Komponenten-Struktur angelegt: src/components/layout/, sections/, ui/ (2026-03-09)
- [x] DNA-Datei erstellt mit Bereich 1 (Brief) + Bereich 2 (Stack) + Bereich 3 (Seiten-Baum) (2026-03-09)
- [x] ZUKUNFT-Datei erstellt mit Phase 2–8 Roadmap (2026-03-09)
- [x] Maps generiert: 34 Map-Dateien in docs/maps/ (2026-03-09)
