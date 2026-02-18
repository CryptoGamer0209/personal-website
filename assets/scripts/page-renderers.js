import { siteContent } from "../data/site-content.js";
import { renderHero } from "./modules/render-hero.js";
import { renderPortfolio } from "./modules/render-portfolio.js";
import { renderLinktree } from "./modules/render-linktree.js";
import { initReveal } from "./modules/init-reveal.js";

const dataCache = new Map();
const staticMainCache = new Map();

function ensureAppMain() {
  let app = document.querySelector("#app");

  if (app) {
    return app;
  }

  app = document.querySelector("main");
  if (app) {
    app.id = "app";
    return app;
  }

  app = document.createElement("main");
  app.id = "app";
  document.body.appendChild(app);
  return app;
}

export function renderHomePage() {
  const app = ensureAppMain();
  app.removeAttribute("class");
  app.innerHTML = renderHero(siteContent);
  initReveal();
}

async function loadJsonData(path) {
  if (dataCache.has(path)) {
    return dataCache.get(path);
  }

  const request = fetch(path).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to load data from ${path}`);
    }
    return response.json();
  });

  dataCache.set(path, request);
  return request;
}

export async function renderPortfolioPage() {
  const app = ensureAppMain();
  app.removeAttribute("class");
  const projects = await loadJsonData("./assets/data/portfolio.json");
  app.innerHTML = renderPortfolio({ projects });
  initReveal();
}

export async function renderLinksPage() {
  const app = ensureAppMain();
  app.removeAttribute("class");
  const links = await loadJsonData("./assets/data/links.json");
  app.innerHTML = renderLinktree({ links });
  initReveal();
}

export async function renderStaticPage(fileName) {
  const sourceMain = await loadStaticMain(fileName);
  const app = ensureAppMain();

  if (!sourceMain) {
    throw new Error(`No <main> found in ${fileName}`);
  }

  app.className = sourceMain.className || "";
  app.innerHTML = sourceMain.innerHTML;
}

async function loadStaticMain(fileName) {
  if (staticMainCache.has(fileName)) {
    return staticMainCache.get(fileName);
  }

  const request = fetch(`./${fileName}`).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to load ${fileName}`);
    }

    const html = await response.text();
    const parsed = new DOMParser().parseFromString(html, "text/html");
    const sourceMain = parsed.querySelector("main");
    return sourceMain ? sourceMain.cloneNode(true) : null;
  });

  staticMainCache.set(fileName, request);
  return request;
}

export function preloadRouteAssets(pathname) {
  const path = pathname.toLowerCase();
  if (path.endsWith("/portfolio.html")) {
    return loadJsonData("./assets/data/portfolio.json");
  }
  if (path.endsWith("/linktree.html")) {
    return loadJsonData("./assets/data/links.json");
  }
  if (path.endsWith("/stacks.html")) {
    return loadStaticMain("stacks.html");
  }
  if (path.endsWith("/styleguide.html")) {
    return loadStaticMain("styleguide.html");
  }
  return Promise.resolve();
}
