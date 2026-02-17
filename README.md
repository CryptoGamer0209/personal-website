# Personal Site

Modulare persoenliche Website mit separaten Unterseiten fuer Portfolio und Linktree.

## Seiten
- `index.html` - Startseite mit Hero + Navigation zu den Unterseiten
- `portfolio.html` - Portfolio Unterseite
- `linktree.html` - Linktree Unterseite
- `impressum.html` - Impressum
- `datenschutz.html` - Datenschutzerklaerung

## Struktur
- `assets/data/site-content.js` - alle Inhalte zentral
- `assets/data/legal-config.js` - GA4 Measurement ID
- `assets/scripts/legal-consent.js` - Cookie-Banner + Consent + GA4-Loading
- `assets/scripts/main.js` - Startseite
- `assets/scripts/portfolio-page.js` - Portfolio Seite
- `assets/scripts/linktree-page.js` - Linktree Seite
- `assets/scripts/modules/` - wiederverwendbare Renderer + Utilities
- `assets/styles/` - Basis + Komponentenstyles
- `vercel.json` - Vercel Konfiguration

## Lokal starten
Im Ordner `personal-site`:
- `python -m http.server 5500`
- dann `http://localhost:5500`

## Google Analytics 4 (kostenlos)
1. In Google Analytics eine GA4 Property anlegen.
2. Measurement ID (Format `G-XXXXXXXXXX`) kopieren.
3. In `assets/data/legal-config.js` bei `ga4MeasurementId` eintragen.
4. Tracking wird erst nach Einwilligung im Cookie-Banner geladen.

## Vercel Deployment
1. Projekt bei Vercel importieren.
2. Root Directory auf `personal-site` setzen.
3. Deploy ausfuehren.
4. Domains `nikovehrens.de` und `www.nikovehrens.de` im Vercel Domain-Bereich hinterlegen.
5. Fuer Subdomains in Vercel einen Wildcard-Eintrag `*.nikovehrens.de` konfigurieren und DNS entsprechend setzen.

## Wichtiger Rechtshinweis
Ohne vollstaendige ladungsfaehige Anschrift (Strasse + Hausnummer) ist das Impressum in Deutschland in der Regel nicht vollstaendig.
