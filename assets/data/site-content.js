// Zentrale Inhaltsquelle fuer alle Seiten.
// Hier kannst du Texte, Projekte und externe Links pflegen,
// ohne die Renderer selbst anzupassen.
export const siteContent = {
  // Profildaten fuer Hero und Footer.
  profile: {
    name: "Niko Vehrens",
    role: "Developer & Creator",
    location: "23843 Travenbrueck, Deutschland",
    tagline:
      "Ich baue schnelle, klare Web-Projekte und digitale Erlebnisse mit Fokus auf Design, Performance und Modularitaet.",
    email: "legal@nikovehrens.de"
  },

  // Kurze Kennzahlen in der Hero-Seitenleiste.
  stats: [
    { label: "Projekte", value: "18+ live builds" },
    { label: "Stack", value: "JS / TS / React" },
    { label: "Fokus", value: "Brand + Product Sites" }
  ],

  // Portfolio-Karten fuer die Portfolio-Unterseite.
  projects: [
    {
      title: "Creator Dashboard",
      description: "Analytics und Content-Management fuer Personal Brand Kanaele.",
      stack: ["React", "TypeScript", "Supabase"],
      url: "#"
    },
    {
      title: "Event Landing Suite",
      description: "Modulares Event-System mit Pages, Ticket-Links und CRM Hooks.",
      stack: ["Next.js", "Node", "Stripe"],
      url: "#"
    },
    {
      title: "E-Commerce Funnel",
      description: "Schneller Product Funnel mit A/B-ready Komponenten.",
      stack: ["Vite", "Tailwind", "Cloudflare"],
      url: "#"
    },
    {
      title: "Client Portal",
      description: "Projektstatus, Dateiupload und Feedback-Loops in einem Bereich.",
      stack: ["Vue", "Firebase", "Functions"],
      url: "#"
    },
    {
      title: "Brand Microsites",
      description: "Wiederverwendbare Microsite-Vorlagen fuer Kampagnen.",
      stack: ["Astro", "MDX", "Framer Motion"],
      url: "#"
    },
    {
      title: "Automation Hub",
      description: "No-code + Script Automations fuer Onboarding und Lead-Flows.",
      stack: ["n8n", "Node", "PostgreSQL"],
      url: "#"
    }
  ],

  // Linktree-Eintraege fuer die Links-Unterseite.
  links: [
    { label: "GitHub", value: "github.com/deinname", url: "https://github.com" },
    { label: "LinkedIn", value: "linkedin.com/in/deinname", url: "https://www.linkedin.com" },
    { label: "Instagram", value: "instagram.com/deinname", url: "https://www.instagram.com" },
    { label: "YouTube", value: "youtube.com/@deinname", url: "https://www.youtube.com" },
    { label: "Calendly", value: "calendly.com/deinname", url: "https://calendly.com" },
    { label: "Discord", value: "discord.gg/deinserver", url: "https://discord.com" }
  ]
};
