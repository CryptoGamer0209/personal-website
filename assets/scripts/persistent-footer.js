import { renderHomeLegalBar } from "./modules/render-home-legal-bar.js";

function ensurePersistentFooter() {
  const mount = document.querySelector("#global-legal-bar");
  if (!mount) return;
  if (mount.dataset.mounted === "true") return;

  mount.innerHTML = renderHomeLegalBar();
  mount.dataset.mounted = "true";
}

ensurePersistentFooter();
