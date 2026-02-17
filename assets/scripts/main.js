import { siteContent } from "../data/site-content.js";
import { renderHero } from "./modules/render-hero.js";
import { renderHomeHub } from "./modules/render-home-hub.js";
import { renderFooter } from "./modules/render-footer.js";
import { initReveal } from "./modules/init-reveal.js";

// Root-Container der Seite.
const app = document.querySelector("#app");

// Harte Absicherung, falls die HTML-Struktur geaendert wurde.
if (!app) {
  throw new Error("#app container not found");
}

// Startseite aus modularen Sektionen zusammensetzen.
app.innerHTML = [renderHero(siteContent), renderHomeHub(), renderFooter(siteContent)].join("");

// Reveal-Animation nach dem Rendern aktivieren.
initReveal();
