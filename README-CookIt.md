# Cooksy — README

> Dein persönliches digitales Kochbuch. Rezepte erstellen, entdecken und mit anderen teilen.

---

## Über das Projekt

**Cooksy** ist eine mobile-first Web-App als digitales Kochbuch und Social Cooking Platform.
Nutzer erstellen eigene Rezepte, entdecken Rezepte anderer, liken, kommentieren und verwalten ihre Favoriten.

**Zielgruppe:** Home Cooks, Food Enthusiasts, Familien

---

## Stack

| Technologie   | Wert              |
|---------------|-------------------|
| Framework     | React + Vite      |
| Sprache       | TypeScript        |
| Styling       | Tailwind CSS v3   |
| Package Mgr   | npm               |

---

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## Projekt-Struktur

```
CookIt!/
├── src/
│   ├── app/                  ← Screen-Dateien (32 Screens)
│   ├── components/
│   │   ├── layout/           ← Header-Komponenten, AppNavigation
│   │   ├── sections/         ← Seiten-spezifische Sektionen
│   │   └── ui/               ← Geteilte UI-Komponenten
│   ├── lib/                  ← Utilities, Helpers
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   └── maps/                 ← Navigations-Maps (34 Dateien)
├── CookIt-DNA.md             ← Projekt-Brief + Stack + Seiten-Baum
├── CookIt-ZUKUNFT.md         ← Roadmap Phase 2–8
├── tasks-CookIt.md           ← Offene Tasks & TODOs
├── session-CookIt.md         ← Aktueller Projektstatus
└── resume-point-CookIt.md   ← Schnell-Einstieg nach Pause
```

---

## Phase 1 — Core Kochbuch MVP (aktueller Scope)

**Screens:**
- Auth: Onboarding, Login, Register
- Core: Homepage Feed, Explore, Recipe Detail, Create Recipe, Edit Recipe
- Organisation: Search, Filter, Category Screen
- User: Profile, Public Profile
- UX: Empty States, Loading, Error States, Share Recipe

**Key Features:**
- Rezept erstellen mit Bild-Upload, Zutaten, Schritten, Tags, Kategorien
- Feed mit Pagination und Like-System (optimistic updates)
- Kombinierbare Suche (Volltext + Kategorie-Filter + Tag-Filter)
- Favoriten-System

---

## Roadmap Phase 2+ (Überblick)

| Phase | Fokus |
|-------|-------|
| Phase 2 | Cook Mode, Timer, Nährwerte, Einkaufslisten, Pantry |
| Phase 3 | Social: Follow, Activity Feed, Notifications, Rankings |
| Phase 4 | Gruppen & Challenges |
| Phase 5 | Import (URL/PDF), Offline, Versioning |
| Phase 6 | Meal Planning, Wochenplaner |
| Phase 7 | Marketplace (Affiliate) |
| Phase 8 | Growth: Invite, Referral, Creator Profiles |

→ Details: `CookIt-ZUKUNFT.md`

---

## Navigation

Vollständiger Screen-Graph und alle React-Router-Routes:
→ `docs/maps/map-navigation.md`

Alle Screens mit ihren Komponenten:
→ `docs/maps/map-*.md`
