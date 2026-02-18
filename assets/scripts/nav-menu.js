export function initMobileNav() {
  const navWrap = document.querySelector(".nav-wrap");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (!navWrap || !toggle || !links) {
    return;
  }

  const setOpen = (open) => {
    navWrap.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  toggle.addEventListener("click", () => {
    setOpen(!navWrap.classList.contains("nav-open"));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setOpen(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }
    if (!navWrap.contains(event.target)) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      setOpen(false);
    }
  });
}
