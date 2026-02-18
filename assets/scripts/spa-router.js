import { setActiveNavByPath } from "./nav-active.js";
import {
  renderHomePage,
  renderPortfolioPage,
  renderLinksPage,
  renderStaticPage,
  preloadRouteAssets
} from "./page-renderers.js";

const ROUTES = {
  "/": { key: "home", title: "Personal Website", render: () => renderHomePage() },
  "/index.html": { key: "home", title: "Personal Website", render: () => renderHomePage() },
  "/portfolio.html": { key: "portfolio", title: "Portfolio | Niko Vehrens", render: () => renderPortfolioPage() },
  "/linktree.html": { key: "linktree", title: "Links | Niko Vehrens", render: () => renderLinksPage() },
  "/stacks.html": { key: "stacks", title: "Stacks | Niko Vehrens", render: () => renderStaticPage("stacks.html") },
  "/styleguide.html": { key: "styleguide", title: "Styleguide | Niko Vehrens", render: () => renderStaticPage("styleguide.html") }
};

function normalizePath(pathname) {
  const lower = pathname.toLowerCase();
  if (lower.endsWith("/")) return "/";
  const file = lower.split("/").pop();
  if (!file) return "/";
  if (ROUTES[`/${file}`]) return `/${file}`;
  return lower;
}

function isSpaRoute(pathname) {
  return Boolean(ROUTES[normalizePath(pathname)]);
}

function updateHomeBodyMode(pathname) {
  const isHome = normalizePath(pathname) === "/" || normalizePath(pathname) === "/index.html";
  document.body.classList.toggle("home-page", isHome);
}

async function renderRoute(pathname) {
  const normalized = normalizePath(pathname);
  const route = ROUTES[normalized];
  if (!route) {
    setActiveNavByPath(pathname);
    return false;
  }

  await route.render();
  document.title = route.title;
  updateHomeBodyMode(normalized);
  setActiveNavByPath(normalized);
  return true;
}

document.addEventListener("click", async (event) => {
  if (!(event.target instanceof Element)) return;
  const anchor = event.target.closest("a");
  if (!anchor) return;
  if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return;
  if (!isSpaRoute(url.pathname)) return;

  event.preventDefault();
  if (url.pathname !== window.location.pathname) {
    history.pushState({}, "", url.pathname);
  }
  await renderRoute(url.pathname);
});

window.addEventListener("popstate", async () => {
  await renderRoute(window.location.pathname);
});

await renderRoute(window.location.pathname);

function scheduleIdlePrefetch() {
  const task = () => {
    preloadRouteAssets("/portfolio.html").catch(() => {});
    preloadRouteAssets("/linktree.html").catch(() => {});
    preloadRouteAssets("/stacks.html").catch(() => {});
    preloadRouteAssets("/styleguide.html").catch(() => {});
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(task, { timeout: 1500 });
  } else {
    setTimeout(task, 300);
  }
}

document.addEventListener("pointerenter", (event) => {
  if (!(event.target instanceof Element)) return;
  const anchor = event.target.closest("a");
  if (!anchor) return;
  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return;
  if (!isSpaRoute(url.pathname)) return;
  preloadRouteAssets(url.pathname).catch(() => {});
}, true);

document.addEventListener("focusin", (event) => {
  if (!(event.target instanceof Element)) return;
  const anchor = event.target.closest("a");
  if (!anchor) return;
  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return;
  if (!isSpaRoute(url.pathname)) return;
  preloadRouteAssets(url.pathname).catch(() => {});
});

scheduleIdlePrefetch();
