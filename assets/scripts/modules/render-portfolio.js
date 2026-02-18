// Rendert die Portfolio-Sektion mit dynamischen Projektkarten.
export function renderPortfolio(content) {
  // Pro Projekt eine Karte erzeugen.
  const cards = content.projects
    .map(
      (project) => `
      <article class="project-card reveal">
        <h3>${project.title}</h3>
        <p class="project-meta">${project.description}</p>
        <div class="stack-list">
          ${project.stack.map((tech) => `<span class="tag">${tech}</span>`).join("")}
        </div>
        <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">Projekt ansehen -></a>
      </article>
    `
    )
    .join("");

  return `
    <section class="section" id="portfolio">
      <div class="container">
        <header class="section-head reveal">
          <div>
            <h2 class="section-title">Portfolio</h2>
            <p class="section-sub">Ausgewählte Arbeiten im modularen Aufbau. Jede Karte kann als eigenes Template erweitert werden.</p>
          </div>
        </header>
        <div class="portfolio-grid">${cards}</div>
      </div>
    </section>
  `;
}
