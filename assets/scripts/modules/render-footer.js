// Rendert die gemeinsame Kontaktsektion im Footer.
export function renderFooter(content) {
  return `
    <section class="section" id="kontakt">
      <div class="container">
        <footer class="footer-card reveal">
          <h2 class="section-title">Lass uns zusammenarbeiten</h2>
          <p class="section-sub">Standort: ${content.profile.location}</p>
          <p><a class="footer-mail" href="mailto:${content.profile.email}">${content.profile.email}</a></p>
        </footer>
      </div>
    </section>
  `;
}
