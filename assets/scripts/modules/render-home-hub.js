// Rendert den Hub der Startseite mit Links zu Unterseiten.
export function renderHomeHub() {
  return `
    <section class="section">
      <div class="container">
        <header class="section-head reveal">
          <div>
            <h2 class="section-title">Unterseiten</h2>
            <p class="section-sub">Portfolio und Linktree laufen als getrennte Seiten, damit du beide Bereiche unabhaengig erweitern kannst.</p>
          </div>
        </header>

        <div class="hub-grid">
          <a class="hub-card reveal" href="./portfolio.html">
            <p class="kicker">Projects</p>
            <h3>Portfolio Seite</h3>
            <p class="project-meta">Alle Referenzen, Tech-Stacks und Projektkarten auf einer separaten Unterseite.</p>
          </a>
          <a class="hub-card reveal" href="./linktree.html">
            <p class="kicker">Socials</p>
            <h3>Linktree Seite</h3>
            <p class="project-meta">Alle Plattformen, Kontaktwege und externen Links als eigener Bereich.</p>
          </a>
        </div>
      </div>
    </section>
  `;
}
