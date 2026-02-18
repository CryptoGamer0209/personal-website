// Rendert die Links-Sektion mit externen Plattform-Links.
export function renderLinktree(content) {
  // Pro Link eine klickbare Karte erzeugen.
  const links = content.links
    .map(
      (item) => `
      <a class="link-card reveal" href="${item.url}" target="_blank" rel="noreferrer">
        <div>
          <strong>${item.label}</strong>
          <p class="project-meta">${item.value}</p>
        </div>
        <span aria-hidden="true">-></span>
      </a>
    `
    )
    .join("");

  return `
    <section class="section" id="linktree">
      <div class="container">
        <header class="section-head reveal">
          <div>
            <h2 class="section-title">Links</h2>
            <p class="section-sub">Alle wichtigen Kanäle und Kontaktpunkte in einem Bereich.</p>
          </div>
        </header>
        <div class="linktree-grid">${links}</div>
      </div>
    </section>
  `;
}
