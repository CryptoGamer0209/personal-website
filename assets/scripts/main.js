import { siteContent } from "../data/site-content.js";
import { renderHero } from "./modules/render-hero.js";
import { renderHomeLegalBar } from "./modules/render-home-legal-bar.js";
import { initReveal } from "./modules/init-reveal.js";

// Root-Container der Seite.
const app = document.querySelector("#app");

// Harte Absicherung, falls die HTML-Struktur geändert wurde.
if (!app) {
  throw new Error("#app container not found");
}

// Startseite nur mit Hero und Legal-Leiste aufbauen.
app.innerHTML = [renderHero(siteContent), renderHomeLegalBar()].join("");

// Reveal-Animation nach dem Rendern aktivieren.
initReveal();
