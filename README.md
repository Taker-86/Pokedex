# Pokedex

Eine einfache React- und Vite-basierte Frontend-Anwendung zum Testen von PokeAPI-Aufrufen.

## Funktionen

- Suche nach Pokémon über Namen oder ID
- Anzeige von Name, ID, Typ und Bild
- Moderne UI mit Tailwind CSS
- Frontend-only Struktur für einfache Erweiterungen

## Technologien

- React
- Vite
- Tailwind CSS
- PokeAPI

## Installation

1. Klone das Repository:

   ```bash
   git clone <dein-repository-url>
   cd pokedex
   ```

2. Installiere die Abhängigkeiten:

   ```bash
   npm install
   ```

3. Starte die Entwicklungsumgebung:

   ```bash
   npm run dev
   ```

4. Öffne die App im Browser unter:
   ```text
   http://localhost:5173
   ```

## Build

Für einen Produktionsbuild:

```bash
npm run build
```

## API-Konfiguration

Die App verwendet aktuell eine Platzhalter-URL für den API-Endpoint.

1. Öffne die offizielle PokeAPI-Dokumentation auf der Website.
2. Kopiere den passenden Endpoint für ein Pokémon.
3. Ersetze in [src/App.jsx](src/App.jsx) den Wert von `API_BASE_URL` durch deine URL.

Beispiel:

```js
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
```

## Projektstruktur

```text
src/
  App.jsx
  main.jsx
  index.css
```

## Lizenz

Dieses Projekt ist für Lern- und Demo-Zwecke gedacht.
