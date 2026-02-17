// Rendert die Hero-Sektion inklusive Stats-Panels.
export function renderHero(content) {
  // Stats aus den Content-Daten in kleine Panels umwandeln.
  const stats = content.stats
    .map(
      (item) => `
        <article class="panel reveal">
          <p class="panel-label">${item.label}</p>
          <p class="panel-value">${item.value}</p>
        </article>
      `
    )
    .join("");

  return `
    <section class="section">
      <div class="container hero-grid">
        <article class="hero-card reveal">
          <p class="kicker">Personal Website</p>
          <h1 class="hero-title">${content.profile.name}<br/>${content.profile.role}</h1>
          <p class="hero-text">${content.profile.tagline}</p>
          <div class="hero-actions">
            <a class="btn primary" href="./portfolio.html">Portfolio ansehen</a>
            <a class="btn" href="./linktree.html">Zu meinen Links</a>
          </div>
        </article>
        <aside class="hero-side">${stats}</aside>
      </div>
    </section>
  `;
}
