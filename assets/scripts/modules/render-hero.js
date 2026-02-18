// Rendert die Hero-Sektion inklusive Stats-Panels.
export function renderHero(content) {
  // Stats aus den Content-Daten in kleine Panels umwandeln.
  const statPages = [
    { label: "Projekte", page: "Portfolio", href: "./portfolio.html" },
    { label: "Links", page: "Links", href: "./linktree.html" },
    { label: "Stack", page: "Stacks", href: "./stacks.html" },
    { label: "Fokus", page: "Styleguide", href: "./styleguide.html" }
  ];

  const stats = statPages
    .map(
      (item) => `
        <a class="panel panel-link panel-link-only reveal" href="${item.href}">
          <p class="panel-value">${item.page}</p>
        </a>
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
        </article>
        <aside class="hero-side">${stats}</aside>
      </div>
    </section>
  `;
}
