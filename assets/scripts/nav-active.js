function resolveNavKey(pathname) {
  const path = pathname.toLowerCase();
  if (path === "/" || path.endsWith("/index.html")) return "home";
  if (path.endsWith("/portfolio.html")) return "portfolio";
  if (path.endsWith("/linktree.html")) return "linktree";
  if (path.endsWith("/stacks.html")) return "stacks";
  if (path.endsWith("/styleguide.html")) return "styleguide";
  if (path.endsWith("/impressum.html")) return "home";
  if (path.endsWith("/datenschutz.html")) return "home";
  return "home";
}

function getPill(container) {
  let pill = container.querySelector(".nav-active-pill");
  if (pill) return pill;

  pill = document.createElement("span");
  pill.className = "nav-active-pill";
  pill.setAttribute("aria-hidden", "true");
  container.prepend(pill);
  return pill;
}

function updatePillPosition(link) {
  const container = link.closest(".nav-links");
  if (!container) return;

  const pill = getPill(container);
  pill.style.width = `${link.offsetWidth}px`;
  pill.style.transform = `translateX(${link.offsetLeft}px)`;
  pill.style.opacity = "1";
}

export function setActiveNavByPath(pathname = window.location.pathname) {
  const links = document.querySelectorAll(".nav-links [data-nav-item]");
  links.forEach((item) => {
    item.classList.remove("nav-link-active");
    item.removeAttribute("aria-current");
  });

  const key = resolveNavKey(pathname);
  const link = document.querySelector(`[data-nav-item="${key}"]`);

  if (link) {
    link.setAttribute("aria-current", "page");
    window.requestAnimationFrame(() => {
      link.classList.add("nav-link-active");
      updatePillPosition(link);
    });
  }
}

setActiveNavByPath();

window.addEventListener("resize", () => {
  const activeLink = document.querySelector(".nav-links .nav-link-active");
  if (activeLink) {
    updatePillPosition(activeLink);
  }
});

window.addEventListener("load", () => {
  const activeLink = document.querySelector(".nav-links .nav-link-active");
  if (activeLink) {
    updatePillPosition(activeLink);
  }
});
