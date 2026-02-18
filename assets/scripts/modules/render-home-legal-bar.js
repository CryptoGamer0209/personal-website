// Rendert die feste Legal-Leiste der Startseite.
export function renderHomeLegalBar() {
  return `
    <section class="home-legal-bar-wrap">
      <div class="container">
        <p class="legal-links home-legal-links">
          <a href="/impressum.html">Impressum</a>
          <span aria-hidden="true">|</span>
          <a href="/datenschutz.html">Datenschutz</a>
          <span aria-hidden="true">|</span>
          <button class="legal-inline-button" type="button" data-open-cookie-settings>Cookies</button>
        </p>
      </div>
    </section>
  `;
}

