import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve('./src/app');
const MAPS_DIR = path.resolve('./docs/maps');

if (!fs.existsSync(MAPS_DIR)) {
    fs.mkdirSync(MAPS_DIR, { recursive: true });
}

const files = fs.readdirSync(SRC_DIR).filter(f => f.endsWith('.tsx'));

let dnaOverview = [];

files.forEach(file => {
    const compName = file.replace('.tsx', '');
    const kebabName = compName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const mapFile = `map-${kebabName}.md`;

    // Read first 30 lines
    const content = fs.readFileSync(path.join(SRC_DIR, file), 'utf-8');
    const lines = content.split('\n').slice(0, 30);

    // Very rough heuristic to pick up standard UI blocks
    // Since we imported giant monolithic files from Stitch, we'll document it generally.

    const mapContent = `# ${mapFile}
# Letzte Aktualisierung: ${new Date().toISOString().split('T')[0]}

## Seite: ${compName}
Route: /${compName.toLowerCase()}

## Sections & Komponenten

### Main View
Datei: src/app/${compName}.tsx
Props: None (Generated Monolith)
Imports: React
`;

    fs.writeFileSync(path.join(MAPS_DIR, mapFile), mapContent);

    dnaOverview.push(`${compName.padEnd(30, ' ')} → docs/maps/${mapFile}`);
    dnaOverview.push(`  ├── Main View`);
    dnaOverview.push(``);
});

// Create layout and shared maps
fs.writeFileSync(path.join(MAPS_DIR, 'map-layout.md'), `# map-layout.md\n# Letzte Aktualisierung: ${new Date().toISOString().split('T')[0]}\n\n## Layout Components\n\n(No strictly modular layouts yet, currently embedded in monolithic screens)`);
fs.writeFileSync(path.join(MAPS_DIR, 'map-ui-shared.md'), `# map-ui-shared.md\n# Letzte Aktualisierung: ${new Date().toISOString().split('T')[0]}\n\n## Shared UI Components\n\n(No strictly modular UI components yet, currently embedded in monolithic screens)`);

dnaOverview.push(`Layout + geteilte UI           → docs/maps/map-layout.md`);
dnaOverview.push(`                               → docs/maps/map-ui-shared.md`);

// Update CookIt-DNA.md Bereich 3
const dnaPath = path.resolve('./CookIt-DNA.md');
let dnaStr = fs.readFileSync(dnaPath, 'utf8');

const targetStr = '## 🗺️ Bereich 3 — Seiten-Baum';
const splitArr = dnaStr.split(targetStr);

let newDna = splitArr[0] + targetStr + '\n<!-- Generiert via generate-maps.md -->\n\n```\n' + dnaOverview.join('\n') + '\n```\n\n' + '---' + splitArr[1].split('---').slice(1).join('---');

fs.writeFileSync(dnaPath, newDna);
console.log("Docs generated!");
