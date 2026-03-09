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
<!-- Generiert via generate-maps.md (in Antigravity oder Cursor/Ollama) -->
<!-- Flache Übersicht: Seite → Sections — Claude liest das immer -->
<!-- Für tiefere Details: docs/maps/map-SEITENNAME.md -->
<!-- Layout + UI-Shared stehen NICHT hier — nur in ihren zentralen Map-Dateien -->

---

## 🔮 Zukunfts-Features
→ Siehe CookIt-ZUKUNFT.md
<!-- Separate Datei — wird NUR gelesen bei Architektur-Entscheidungen oder expliziter Anfrage -->

---

## 📍 Resume-Point
→ Lies resume-point-CookIt.md
