export type Resource = {
  title: string;
  href: string;
  description: string;
};

export const PINNED: Resource[] = [
  {
    title: "Stop Exposing Secrets: Secure Your APIs in Postman Like a Pro",
    href: "https://community.postman.com/t/stop-exposing-secrets-secure-your-apis-in-postman-like-a-pro/76420",
    description:
      "A must-read on keeping API keys and tokens out of your shared collections: environment variables, the Postman Vault, and the habits that prevent leaked credentials.",
  },
  {
    title: "Discord Engineering Blog",
    href: "https://discord.com/category/engineering",
    description:
      "Deep dives on scaling real-time systems to millions of concurrent users. Some of the best distributed-systems writing on the web.",
  },
  {
    title: "Incident Report: Spotify Outage on April 16, 2025",
    href: "https://engineering.atspotify.com/2025/5/incident-report-spotify-outage-on-april-16-2025",
    description:
      "A transparent, well-written postmortem from Spotify Engineering. A masterclass in how to communicate failures and learn from production incidents.",
  },
];

export const RESOURCES: { category: string; items: Resource[] }[] = [
  {
    category: "Documentation & References",
    items: [
      {
        title: "MDN Web Docs",
        href: "https://developer.mozilla.org",
        description:
          "The definitive reference for HTML, CSS, and JavaScript. When in doubt, MDN is the answer.",
      },
      {
        title: "Next.js Docs",
        href: "https://nextjs.org/docs",
        description:
          "Exceptionally well-written docs. The App Router guides are worth reading even if you already know Next.js.",
      },
      {
        title: "TypeScript Handbook",
        href: "https://www.typescriptlang.org/docs/handbook/intro.html",
        description:
          "From basic types to advanced generics and type narrowing, this is the fastest path to writing real TypeScript.",
      },
      {
        title: "web.dev",
        href: "https://web.dev",
        description:
          "Google's guides on performance, accessibility, and Core Web Vitals. Practical and always up to date.",
      },
    ],
  },
  {
    category: "Tools I Use Daily",
    items: [
      {
        title: "npmlens",
        href: "https://www.npmjs.com/package/npmlens",
        description:
          "My own CLI. Check a package's health score, security, bundle size, and dependency tree before you install it.",
      },
      {
        title: "Json Tree",
        href: "https://json-treevis.vercel.app/",
        description:
          "Visualize JSON as interactive graphs and trees. I built this to debug deeply nested API responses.",
      },
      {
        title: "Bundlephobia",
        href: "https://bundlephobia.com",
        description:
          "See the real cost of adding an npm package to your bundle before you install it.",
      },
      {
        title: "Excalidraw",
        href: "https://excalidraw.com",
        description:
          "Hand-drawn style diagrams for system design discussions. Free, fast, collaborative.",
      },
      {
        title: "regex101",
        href: "https://regex101.com",
        description:
          "Build and debug regular expressions with live explanation of every token.",
      },
      {
        title: "transform.tools",
        href: "https://transform.tools",
        description:
          "Convert anything to anything: JSON to TypeScript interfaces, CSS to Tailwind, SVG to JSX.",
      },
    ],
  },
  {
    category: "Learning & Practice",
    items: [
      {
        title: "JavaScript.info",
        href: "https://javascript.info",
        description:
          "The most complete modern JavaScript tutorial on the web, from fundamentals to the event loop.",
      },
      {
        title: "Patterns.dev",
        href: "https://www.patterns.dev",
        description:
          "Design, rendering, and performance patterns for modern web apps, with React-focused examples.",
      },
      {
        title: "roadmap.sh",
        href: "https://roadmap.sh",
        description:
          "Community-driven roadmaps for frontend, backend, DevOps, and more. Great for finding your gaps.",
      },
      {
        title: "Exercism",
        href: "https://exercism.org",
        description:
          "Free coding exercises with human mentorship in 70+ languages.",
      },
    ],
  },
  {
    category: "System Design & Backend",
    items: [
      {
        title: "System Design Primer",
        href: "https://github.com/donnemartin/system-design-primer",
        description:
          "The most-starred guide to designing large-scale systems. Essential interview prep and real-world reference.",
      },
      {
        title: "HTTP Status Codes",
        href: "https://httpstatuses.io",
        description:
          "Quick reference for every HTTP status code and when to actually use it.",
      },
      {
        title: "JWT.io",
        href: "https://jwt.io",
        description:
          "Decode, verify, and debug JSON Web Tokens. Invaluable when building authentication.",
      },
      {
        title: "DB Fiddle",
        href: "https://www.db-fiddle.com",
        description:
          "Test SQL queries against MySQL, PostgreSQL, and SQLite right in the browser.",
      },
    ],
  },
];

export function resourceLogoUrl(href: string) {
  return `https://www.google.com/s2/favicons?domain=${new URL(href).hostname}&sz=128`;
}
