import { siteContent } from "../data/site-content.js";
import { renderLinktree } from "./modules/render-linktree.js";
import { renderFooter } from "./modules/render-footer.js";
import { initReveal } from "./modules/init-reveal.js";

// Root-Container der Seite.
const app = document.querySelector("#app");

// Harte Absicherung, falls die HTML-Struktur geändert wurde.
if (!app) {
  throw new Error("#app container not found");
}

// Linktree-Seite aus Linktree-Sektion + Footer zusammensetzen.
app.innerHTML = [renderLinktree(siteContent), renderFooter(siteContent)].join("");

// Reveal-Animation nach dem Rendern aktivieren.
initReveal();
