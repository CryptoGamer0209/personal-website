# Personal Site

Modulare persönliche Website mit separaten Unterseiten für Portfolio und Links.

## Seiten
- `index.html` - Startseite mit Hero + Navigation zu den Unterseiten
- `portfolio.html` - Portfolio Unterseite
- `linktree.html` - Links Unterseite
- `impressum.html` - Impressum
- `datenschutz.html` - Datenschutzerklärung

## Struktur
- `assets/data/site-content.js` - Home-Inhalte (Profil + Stats)
- `assets/data/portfolio.json` - Portfolio-Inhalte
- `assets/data/links.json` - Links-Inhalte
- `assets/scripts/legal-consent.js` - Cookie-Hinweis + Einstellungen
- `assets/scripts/spa-router.js` - statisches SPA-Routing (laedt nur Main-Inhalt neu)
- `assets/scripts/persistent-footer.js` - persistente Legal-Leiste
- `assets/scripts/modules/` - wiederverwendbare Renderer + Utilities
- `assets/styles/` - Basis + Komponentenstyles
- `vercel.json` - Vercel Konfiguration

## JSON-Format und Pflege
Die Unterseiten `Portfolio` und `Links` lesen ihre Inhalte direkt aus JSON-Dateien.

### `assets/data/portfolio.json`
Array aus Projekt-Objekten:

```json
[
  {
    "title": "Projektname",
    "description": "Kurze Beschreibung",
    "stack": ["React", "TypeScript", "Supabase"],
    "url": "https://dein-link.tld"
  }
]
```

- `title`: Überschrift der Projektkarte
- `description`: Beschreibungstext
- `stack`: Tags unter dem Projekt
- `url`: Ziel von `Projekt ansehen ->`

Was ändern für welchen Effekt:
- Neues Projekt hinzufügen: neues Objekt im Array ergänzen
- Reihenfolge ändern: Objekte im Array verschieben
- Link deaktivieren: `url` auf `"#"` setzen

### `assets/data/links.json`
Array aus Link-Objekten:

```json
[
  {
    "label": "GitHub",
    "value": "github.com/deinname",
    "url": "https://github.com/deinname",
    "image": "/assets/svg/links/github.svg",
    "type": "external"
  }
]
```

- `label`: Name der Plattform
- `value`: sichtbarer Untertext
- `url`: Ziel-URL der Karte
- `image`: Bild/Icon für die Karte (lokale Datei im Projekt)
- `type`: `external` oder `file`
- `download` (optional): `true`, wenn Datei direkt heruntergeladen werden soll

Was ändern für welchen Effekt:
- Neuen Link hinzufügen: neues Objekt im Array ergänzen
- Reihenfolge ändern: Objekte verschieben
- Link entfernen: Objekt löschen

Lokale Datei verlinken (Beispiel):

```json
{
  "label": "Lebenslauf (PDF)",
  "value": "Download",
  "url": "/assets/files/lebenslauf.pdf",
  "image": "/assets/svg/links/github.svg",
  "type": "file",
  "download": true
}
```

Hinweise:
- JSON erlaubt keine Kommentare und kein Komma nach dem letzten Feld.
- Nach Änderungen Seite mit `Ctrl+F5` neu laden, falls alte Daten aus dem Cache angezeigt werden.

## Lokal starten
Im Ordner `personal-website`:
- `python -m http.server 5500`
- dann `http://localhost:5500`

## Vercel Analytics
- Analytics wird in Vercel im Projekt aktiviert.
- Die Website nutzt das offizielle Insights-Snippet `/_vercel/insights/script.js`.
- Datenschutzhinweise dazu stehen in `datenschutz.html`.

## Vercel Deployment
1. Projekt bei Vercel importieren.
2. Root Directory auf `personal-website` setzen.
3. Deploy ausführen.
4. Domains `nikovehrens.de` und `www.nikovehrens.de` im Vercel Domain-Bereich hinterlegen.
5. Für Subdomains in Vercel einen Wildcard-Eintrag `*.nikovehrens.de` konfigurieren und DNS entsprechend setzen.

## Wichtiger Rechtshinweis
Ohne vollständige ladungsfähige Anschrift (Straße + Hausnummer) ist das Impressum in Deutschland in der Regel nicht vollständig.
