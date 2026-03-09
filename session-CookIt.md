# session-CookIt.md — Cooksy
<!-- Zuletzt aktualisiert: 2026-03-09 -->

---

## Aktuelle Session

- Datum: 2026-03-09
- Status: Projekt-Setup abgeschlossen — bereit für Implementierung
- Version: 0.1.0 (Pre-Alpha)
- Phase: Phase 1 — Core Kochbuch MVP

## Stack

| Technologie   | Wert                          |
|---------------|-------------------------------|
| Framework     | React + Vite                  |
| Sprache       | TypeScript                    |
| Styling       | Tailwind CSS v3               |
| Package Mgr   | npm                           |
| Auth/Backend  | N/A (noch nicht definiert)    |
| Deployment    | N/A                           |

## Projekt-Struktur

```
src/app/          → 32 Screen-Dateien (alle Phase 1–8 Screens)
src/components/
  layout/         → Header-Komponenten, AppNavigation
  sections/       → Seiten-spezifische Sektionen
  ui/             → Geteilte UI-Komponenten
docs/maps/        → 34 Navigations-Map-Dateien
```

## Letzte Änderungen

- 2026-03-09: Projekt initialisiert mit React + Vite + TypeScript + Tailwind
- 2026-03-09: Alle 32 Screen-Dateien in src/app/ angelegt
- 2026-03-09: Komponenten-Struktur in src/components/ angelegt
- 2026-03-09: DNA, ZUKUNFT und alle Pflichtdateien erstellt
- 2026-03-09: 34 Maps in docs/maps/ generiert (inkl. map-navigation.md)

## Nächste Schritte

- [ ] React Router v6 — Routes aus map-navigation.md einbauen
- [ ] State Management wählen und konfigurieren (Zustand empfohlen)
- [ ] Auth-Flow implementieren (Login → Homepage)
- [ ] Mock-Daten für Rezepte + User anlegen

## Offene Entscheidungen

- Backend: Supabase vs. Firebase vs. Mock-only für MVP?
- State Management: Zustand vs. Context API vs. TanStack Query?
