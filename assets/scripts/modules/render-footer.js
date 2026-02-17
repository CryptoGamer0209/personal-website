// Rendert die gemeinsame Kontaktsektion im Footer.
export function renderFooter(content) {
  return `
    <section class="section" id="kontakt">
      <div class="container">
        <footer class="footer-card reveal">
          <h2 class="section-title">Lass uns zusammenarbeiten</h2>
          <p class="section-sub">Standort: ${content.profile.location}</p>
          <p><a class="footer-mail" href="mailto:${content.profile.email}">${content.profile.email}</a></p>
          <p class="legal-links">
            <a href="./impressum.html">Impressum</a>
            <span aria-hidden="true">|</span>
            <a href="./datenschutz.html">Datenschutz</a>
            <span aria-hidden="true">|</span>
            <button class="legal-inline-button" type="button" data-open-cookie-settings>Cookie-Einstellungen</button>
          </p>
        </footer>
      </div>
    </section>
  `;
}
