import { siteContent } from "../data/site-content.js";
import { renderPortfolio } from "./modules/render-portfolio.js";
import { renderFooter } from "./modules/render-footer.js";
import { initReveal } from "./modules/init-reveal.js";

// Root-Container der Seite.
const app = document.querySelector("#app");

// Harte Absicherung, falls die HTML-Struktur geaendert wurde.
if (!app) {
  throw new Error("#app container not found");
}

// Portfolio-Seite aus Portfolio-Sektion + Footer zusammensetzen.
app.innerHTML = [renderPortfolio(siteContent), renderFooter(siteContent)].join("");

// Reveal-Animation nach dem Rendern aktivieren.
initReveal();
