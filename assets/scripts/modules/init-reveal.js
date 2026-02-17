// Beobachtet alle `.reveal`-Elemente und schaltet sie sichtbar,
// sobald sie in den Viewport kommen.
export function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  // Alle Kandidaten fuer die Reveal-Animation registrieren.
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}
