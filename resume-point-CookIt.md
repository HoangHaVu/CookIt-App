# resume-point-CookIt.md — Cooksy
<!-- Zuletzt aktualisiert: 2026-03-09 -->

---

## Sofort nach Neustart

### Kontext
- Projekt: **Cooksy** — digitales Kochbuch + Social Cooking App
- Stack: React + Vite + TypeScript + Tailwind CSS v3
- Phase: **Phase 1 MVP** — alle Screens angelegt, noch nicht verdrahtet

### Was zuletzt gemacht wurde
- MVP Phase 1 vollständig abgeschlossen + Build clean (2026-03-10)
- Catch-All Route `*` → Navigate to `/` eingebaut
- Build: 127 Module, 0 Fehler, 398 KB Bundle

### Nächster Schritt
→ **MVP ist launch-ready.** Phase 2 vorbereiten:
1. Backend-Entscheidung: Supabase vs. eigener Server?
2. Code-Splitting (lazy imports) für Performance
3. Real Auth (Supabase Auth / Firebase) ersetzen Mock-Login

### Offene Blocker
- Kein Backend — alles Mock-Daten (bewusste MVP-Entscheidung)

### Wichtige Pfade & Befehle
- Server starten: `npm run dev`
- Screens: `src/app/`
- Komponenten: `src/components/layout/`, `src/components/sections/`, `src/components/ui/`
- Maps: `docs/maps/`

### Aktive Map
docs/maps/map-navigation.md
