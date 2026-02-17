import { legalConfig } from "../data/legal-config.js";

// Lokaler Speicherkey fuer die Cookie-Entscheidung.
const CONSENT_KEY = "nv_cookie_consent_v1";

function getDecision() {
  return localStorage.getItem(CONSENT_KEY);
}

function setDecision(value) {
  localStorage.setItem(CONSENT_KEY, value);
}

function loadGa4IfConfigured() {
  const measurementId = legalConfig.ga4MeasurementId.trim();

  // Ohne Measurement ID wird kein Tracking eingebunden.
  if (!measurementId || window.__ga4Loaded) {
    return;
  }

  window.__ga4Loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  window.gtag("js", new Date());
  window.gtag("consent", "update", {
    analytics_storage: "granted"
  });
  window.gtag("config", measurementId, { anonymize_ip: true });
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
      Wir verwenden optionale Analyse-Cookies (Google Analytics 4) nur mit deiner Einwilligung.
      Details findest du in der <a href="./datenschutz.html">Datenschutzerklaerung</a>.
    </p>
    <div class="cookie-actions">
      <button class="cookie-btn secondary" type="button" data-cookie-action="deny">Nur notwendige</button>
      <button class="cookie-btn primary" type="button" data-cookie-action="accept">Alle akzeptieren</button>
    </div>
  `;

  document.body.appendChild(banner);

  banner.querySelectorAll("[data-cookie-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-cookie-action");

      if (action === "accept") {
        setDecision("accepted");
        loadGa4IfConfigured();
      } else {
        setDecision("denied");
      }

      closeBanner();
    });
  });
}

// Bereits gespeicherte Entscheidung anwenden.
if (getDecision() === "accepted") {
  loadGa4IfConfigured();
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
