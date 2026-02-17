// Lokaler Speicherkey fuer die Cookie-Entscheidung.
const CONSENT_KEY = "nv_cookie_consent_v1";

function getDecision() {
  return localStorage.getItem(CONSENT_KEY);
}

function setDecision(value) {
  localStorage.setItem(CONSENT_KEY, value);
}

function closeBanner() {
  const node = document.querySelector(".cookie-banner");
  if (node) {
    node.remove();
  }
}

function openBanner() {
  closeBanner();

  const banner = document.createElement("aside");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-live", "polite");

  banner.innerHTML = `
    <p class="cookie-title">Cookie-Hinweis</p>
    <p class="cookie-text">
      Diese Website verwendet Vercel Analytics sowie technisch notwendige lokale Speicherungen
      fuer deine Cookie-Auswahl. Details findest du in der
      <a href="./datenschutz.html">Datenschutzerklaerung</a>.
    </p>
    <div class="cookie-actions">
      <button class="cookie-btn secondary" type="button" data-cookie-action="deny">Schliessen</button>
      <button class="cookie-btn primary" type="button" data-cookie-action="accept">Verstanden</button>
    </div>
  `;

  document.body.appendChild(banner);

  banner.querySelectorAll("[data-cookie-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-cookie-action");
      setDecision(action === "accept" ? "accepted" : "denied");
      closeBanner();
    });
  });
}

// Falls noch keine Auswahl getroffen wurde, Banner automatisch zeigen.
if (!getDecision()) {
  openBanner();
}

// Footer-Button zum erneuten Oeffnen der Cookie-Einstellungen.
document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  if (target.matches("[data-open-cookie-settings]")) {
    event.preventDefault();
    openBanner();
  }
});
