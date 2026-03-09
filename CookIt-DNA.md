# CookIt-DNA.md
# Erstellt: 2026-03-09
# Stack befüllt: Schritt 2 — Antigravity
# Seiten-Baum + Maps: Schritt 2 (Antigravity) oder Schritt 3 (Cursor + Ollama)

---

## 🎯 Bereich 1 — Projekt-Brief

### Projekt
Name: Cooksy
Typ: Mobile App (iOS & Android) — digitales Kochbuch + Social Cooking Platform
Zielgruppe: Home Cooks, Food Enthusiasts, Familien — alle die kochen und Rezepte organisieren wollen
Core Message: Dein persönliches digitales Kochbuch — Rezepte erstellen, entdecken und mit anderen teilen.

### Ziel
Eine mobile App die als vollständiges digitales Kochbuch funktioniert (Phase 1 MVP).
Nutzer können eigene Rezepte erstellen, bearbeiten, in einem Feed entdecken, liken,
kommentieren, favorisieren und nach Kategorien/Tags filtern & suchen.

### Conversion-Ziele
Primär: Nutzer erstellt sein erstes Rezept
Sekundär: Nutzer liked oder favorisiert ein fremdes Rezept

### Phase 1 — Core Kochbuch (MVP) Screens
<!-- Phase 1 ist der Scope für den initialen Build -->

Auth & Onboarding:
  - Onboarding
  - Login
  - Register

Core Screens:
  - Homepage Feed
  - Explore / Discover
  - Recipe Detail
  - Create Recipe
  - Edit Recipe
  - Search
  - Filter
  - Category Screen
  - Profile
  - Public Profile

Ergänzende UX:
  - Empty States
  - Loading Screens
  - Error States
  - Share Recipe

### Wichtigste User-Flows
1. Register → Onboarding → Rezept erstellen → im Feed sehen
2. Login → Feed durchsuchen → Rezept öffnen → liken / favorisieren
3. Suche → Filter → Category → Recipe Detail → Kommentieren

### Komplexe Features (mehrere Ebenen)
- Rezept erstellen: Titel, Beschreibung, Zutaten, Schritte, Bild-Upload, Tags, Kategorien
- Feed: Pagination, Like-System (optimistic updates), Favoriten
- Suche + Filter: Volltextsuche, Kategorie-Filter, Tag-Filter kombinierbar
- Auth: Login / Register / Profil / Public Profile

---

## 🛠️ Bereich 2 — Stack & Struktur
<!-- Wird von Antigravity in Schritt 2 befüllt -->

```
Framework: React + Vite + TypeScript
Styling: Tailwind CSS v3
Sprache: TypeScript
Package Mgr: npm
CMS: N/A
Auth/Backend: N/A
3D/Animation: N/A
Deployment: N/A
```

### Dateistruktur
```
CookIt/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── ui/
│   │   ├── sections/
│   │   └── layout/
│   └── lib/
├── docs/
│   └── maps/              ← Navigations-Maps
│       ├── map-layout.md      ← Layout-Komponenten (zentral)
│       ├── map-ui-shared.md   ← Geteilte UI-Komponenten (zentral)
│       └── map-*.md           ← Seiten-Maps
├── CookIt-DNA.md
└── CookIt-ZUKUNFT.md
```

### Konventionen
```
Komponenten:   PascalCase, .tsx
Hooks:         useCamelCase.ts
Ordner:        kebab-case
```

### Scripts
```bash
npm run dev
npm run build
npm run preview
```

### Externe Ressourcen
```
Spline-URL: N/A
CMS-Project: N/A
GitHub-Repo: N/A (lokal initialisiert)
Vercel-URL: N/A
```

---

## 🗺️ Bereich 3 — Seiten-Baum

```
Homepage (Green/Orange)           → docs/maps/map-homepage-green.md
  ├── SearchHeader
  ├── CategoryScroll
  └── RecommendedRecipes

Recipe Detail                     → docs/maps/map-recipe-detail.md
  ├── RecipeHeader
  ├── RecipeBanner
  ├── RecipeInfoHeader
  ├── RecipeQuickStats
  ├── IngredientsList
  ├── InstructionsList
  └── CommunityReviews

Create Recipe                     → docs/maps/map-create-recipe.md
  ├── CreateRecipeHeader
  ├── PhotoUploadSection
  ├── RecipeFormFields
  ├── RecipeTagsSection
  └── RecipePrivacySection

Profile                           → docs/maps/map-profile.md
  ├── ProfileHeader
  ├── ProfileHero
  ├── ProfileStatsSection
  ├── ProfileTabs
  └── ProfileRecipeGrid

Weekly Meal Planner               → docs/maps/map-weekly-meal-planner.md
  ├── WeeklyPlannerHeader
  ├── DayPicker
  └── MealSection

Shopping List                     → docs/maps/map-shopping-list.md
  ├── ShoppingHeader
  └── ShoppingCategory

Pantry Inventory                  → docs/maps/map-pantry-inventory.md
  ├── PantryHeader
  ├── PantrySearch
  └── PantryCategory

Private Cookbook                  → docs/maps/map-private-cookbook.md
  ├── CookbookHeader
  └── CollectionCard

Search & Filter                  → docs/maps/map-search-filter.md
  ├── PageHeader
  └── RecipeThumbnail

Marketplace                       → docs/maps/map-marketplace.md
  ├── PageHeader
  └── ProductCard

Recipe Rankings                   → docs/maps/map-recipe-rankings.md
  ├── RankingHeader
  ├── RankingCard
  └── RankingRow

Trending Creators                 → docs/maps/map-trending-creators.md
  ├── PageHeader
  └── CreatorCard

Achievements & Badges             → docs/maps/map-achievements-badges.md
  ├── PageHeader
  └── AchievementCard

Challenge Leaderboard             → docs/maps/map-challenge-leaderboard.md
  ├── PageHeader
  └── ChallengePodium

Group Activity Feed              → docs/maps/map-group-activity-feed.md
  ├── PageHeader
  └── ActivityPost

Cook Mode                         → docs/maps/map-cook-mode.md
  └── CookHeader

Layout + geteilte UI              → docs/maps/map-layout.md
                                  → docs/maps/map-ui-shared.md
Navigation Graph                  → docs/maps/map-navigation.md
```


---

## 🔮 Zukunfts-Features
→ Siehe CookIt-ZUKUNFT.md
<!-- Separate Datei — wird NUR gelesen bei Architektur-Entscheidungen oder expliziter Anfrage -->

---

## 📍 Resume-Point
→ Lies resume-point-CookIt.md
