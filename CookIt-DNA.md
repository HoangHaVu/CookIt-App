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
<!-- Generiert via generate-maps.md -->

```
AchievementsBadges             → docs/maps/map-achievements-badges.md
  ├── Main View

ChallengeLeaderboard           → docs/maps/map-challenge-leaderboard.md
  ├── Main View

CollectionDetail               → docs/maps/map-collection-detail.md
  ├── Main View

CookMode                       → docs/maps/map-cook-mode.md
  ├── Main View

CreateChallenge                → docs/maps/map-create-challenge.md
  ├── Main View

CreateGroup                    → docs/maps/map-create-group.md
  ├── Main View

CreateRecipe                   → docs/maps/map-create-recipe.md
  ├── Main View

ExpirationTracking             → docs/maps/map-expiration-tracking.md
  ├── Main View

GroupActivityFeed              → docs/maps/map-group-activity-feed.md
  ├── Main View

HomepageGreen                  → docs/maps/map-homepage-green.md
  ├── Main View

HomepageOrange                 → docs/maps/map-homepage-orange.md
  ├── Main View

ImportConfirmation             → docs/maps/map-import-confirmation.md
  ├── Main View

InviteFriends                  → docs/maps/map-invite-friends.md
  ├── Main View

InviteMembers                  → docs/maps/map-invite-members.md
  ├── Main View

Login                          → docs/maps/map-login.md
  ├── Main View

MagicImportScan                → docs/maps/map-magic-import-scan.md
  ├── Main View

Marketplace                    → docs/maps/map-marketplace.md
  ├── Main View

MealPlannerCalendar            → docs/maps/map-meal-planner-calendar.md
  ├── Main View

Onboarding                     → docs/maps/map-onboarding.md
  ├── Main View

PantryInventory                → docs/maps/map-pantry-inventory.md
  ├── Main View

PasswordReset                  → docs/maps/map-password-reset.md
  ├── Main View

PrivateCookbook                → docs/maps/map-private-cookbook.md
  ├── Main View

Profile                        → docs/maps/map-profile.md
  ├── Main View

RecipeDetail                   → docs/maps/map-recipe-detail.md
  ├── Main View

RecipeImport                   → docs/maps/map-recipe-import.md
  ├── Main View

RecipeRankings                 → docs/maps/map-recipe-rankings.md
  ├── Main View

SearchFilter                   → docs/maps/map-search-filter.md
  ├── Main View

ShoppingList                   → docs/maps/map-shopping-list.md
  ├── Main View

SignUp                         → docs/maps/map-sign-up.md
  ├── Main View

SubmitToChallenge              → docs/maps/map-submit-to-challenge.md
  ├── Main View

TrendingCreators               → docs/maps/map-trending-creators.md
  ├── Main View

WeeklyMealPlanner              → docs/maps/map-weekly-meal-planner.md
  ├── Main View

Layout + geteilte UI           → docs/maps/map-layout.md
                               → docs/maps/map-ui-shared.md
```

---

## 🔮 Zukunfts-Features
→ Siehe CookIt-ZUKUNFT.md
<!-- Separate Datei — wird NUR gelesen bei Architektur-Entscheidungen oder expliziter Anfrage -->

---

## 📍 Resume-Point
→ Lies resume-point-CookIt.md
