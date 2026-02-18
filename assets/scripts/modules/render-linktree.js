// Rendert die Links-Sektion mit externen Plattform-Links.
export function renderLinktree(content) {
  // Pro Link eine klickbare Karte erzeugen.
  const links = content.links
    .map((item) => {
      const href = item.url || item.path || "#";
      const isFile = item.type === "file";
      const isExternal = !isFile && /^https?:\/\//i.test(href);
      const targetAttr = isExternal ? ' target="_blank" rel="noreferrer"' : "";
      const downloadAttr = item.download ? " download" : "";
      const image = item.image || "./assets/svg/links/github.svg";
      const arrow = isFile ? "Datei" : "->";

      return `
      <a class="link-card reveal" href="${href}"${targetAttr}${downloadAttr}>
        <div class="link-card-main">
          <img class="link-thumb" src="${image}" alt="${item.label} Logo" loading="lazy" />
          <div class="link-copy">
            <strong>${item.label}</strong>
            <p class="project-meta">${item.value}</p>
          </div>
        </div>
        <span aria-hidden="true">${arrow}</span>
      </a>
    `;
    })
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
