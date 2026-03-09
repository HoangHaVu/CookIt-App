# tasks-CookIt.md — Cooksy
<!-- Zuletzt aktualisiert: 2026-03-09 -->

---

## Kritisch (Sofort)

- [ ] State Management einrichten (Zustand / Context API) — alle Screens brauchen shared state
- [ ] React Router v6 konfigurieren — Routes aus map-navigation.md → src/app/ verbinden
      Ref: docs/maps/map-navigation.md
- [ ] Auth-Flow implementieren (Login, SignUp, PasswordReset, Onboarding)
      Screens: src/app/Login.tsx, src/app/SignUp.tsx, src/app/Onboarding.tsx
      Ref: docs/maps/map-login.md, map-sign-up.md, map-onboarding.md
- [ ] Protected Routes: Nur eingeloggte Nutzer sehen App-Screens

---

## Hoch (Diese Woche)

### Phase 1 MVP — Core Screens verdrahten

- [ ] Homepage (Green/Orange) — CategoryScroll + RecommendedRecipes mit echten Daten
      Screen: src/app/HomepageGreen.tsx, src/app/HomepageOrange.tsx
      Ref: docs/maps/map-homepage-green.md
- [ ] Recipe Detail — vollständige Darstellung (Zutaten, Schritte, Stats, Reviews)
      Screen: src/app/RecipeDetail.tsx
      Ref: docs/maps/map-recipe-detail.md
- [ ] Create Recipe — Form mit Bild-Upload, Zutaten, Schritte, Tags, Privatsphäre
      Screen: src/app/CreateRecipe.tsx
      Ref: docs/maps/map-create-recipe.md
- [ ] Profile Screen — eigenes Profil mit Stats + Rezept-Grid
      Screen: src/app/Profile.tsx
      Ref: docs/maps/map-profile.md
- [ ] Search & Filter — Volltextsuche + kombinierbare Filter
      Screen: src/app/SearchFilter.tsx
      Ref: docs/maps/map-search-filter.md

### Daten-Layer

- [ ] Mock-Daten / JSON-Fixtures für Rezepte, User, Kategorien anlegen
- [ ] Rezept-Datenmodell definieren (TypeScript Interfaces/Types)
- [ ] Like-System implementieren (optimistic updates im State)
- [ ] Favoriten-System implementieren

---

## Normal (Backlog)

### Phase 1 MVP — Restliche Screens

- [ ] Private Cookbook — Sammlungen + CollectionDetail
      Screens: src/app/PrivateCookbook.tsx, src/app/CollectionDetail.tsx
      Ref: docs/maps/map-private-cookbook.md
- [ ] AppNavigation einbauen → Tabs: Homepage / Planner / Recipes / Profile
      Komponente: src/components/layout/AppNavigation.tsx
      Ref: docs/maps/map-layout.md

### UX / Ergänzende Screens

- [ ] Empty States — alle Core-Screens brauchen Empty-State-Variante
- [ ] Loading States — Skeleton-Loader für Feed, Recipe Detail
- [ ] Error States — globales Error-Handling

### Phase 2 Vorbereitung (nur Architektur)

- [ ] Cook Mode Screen überprüfen — Timer-Logik-Struktur planen
      Screen: src/app/CookMode.tsx
      Ref: docs/maps/map-cook-mode.md
- [ ] Weekly Meal Planner — Kalender-Logik planen
      Screens: src/app/WeeklyMealPlanner.tsx, src/app/MealPlannerCalendar.tsx
      Ref: docs/maps/map-weekly-meal-planner.md

---

## Abgeschlossen

- [x] Projekt-Setup: React + Vite + TypeScript + Tailwind CSS v3 (2026-03-09)
- [x] Alle Screen-Dateien angelegt — 32 Screens in src/app/ (2026-03-09)
- [x] Komponenten-Struktur angelegt: src/components/layout/, sections/, ui/ (2026-03-09)
- [x] DNA-Datei erstellt mit Bereich 1 (Brief) + Bereich 2 (Stack) + Bereich 3 (Seiten-Baum) (2026-03-09)
- [x] ZUKUNFT-Datei erstellt mit Phase 2–8 Roadmap (2026-03-09)
- [x] Maps generiert: 34 Map-Dateien in docs/maps/ (2026-03-09)
