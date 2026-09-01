export const projectsPageIntro =
  "Personal, independent work, built on my own time, for no one but myself, with no deadline but the one I set. This is where I make every decision: architecture, stack, scope, and when to ship.";

export interface YiglooHighlight {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

export const yigloo = {
  slug: "yigloo",
  name: "Yigloo",
  tagline:
    "A platform I designed and built alone. 8 independently deployable services across TypeScript, Python, and Go, sharing one identity system, one multi-tenant Postgres database, and a consistent engineering process I wrote myself.",
  teaser:
    "A platform I designed and built alone: 8 independently deployable services across TypeScript, Python, and Go, sharing one identity system and one Postgres database. First product, Yendulum, shipped to production in August 2026.",
  metaLine: "Solo project · Active since June 2026 · First product live August 2026",
  tags: ["TypeScript", "Python", "Go", "Postgres", "Solo project"],
  overview: [
    "Yigloo hosts multiple independent products, each solving one specific piece of everyday friction, sharing common infrastructure — identity, notifications, AI — so each new product doesn't rebuild the basics from zero. It's structured as platform → product → container: the platform is the shared identity and infrastructure layer; a product is a distinct app (like Yendulum); a container is one independently deployable service belonging to a product or to the platform itself.",
    "I'm the sole architect and engineer: every backend service, every frontend client, and every piece of shared infrastructure below is something I designed and built myself, across three backend languages and two frontend approaches, without a team to split decisions with.",
  ],
  stack: [
    "8 independently deployable services",
    "3 backend languages: TypeScript (NestJS), Python (FastAPI), Go",
    "2 frontend approaches: Vite + React, Next.js",
    "Deployed on Cloudflare Workers (frontends) and Google Cloud Run (backend services)",
    "One shared multi-tenant Postgres database (Supabase)",
    "Google Cloud Scheduler driving all background/cron work",
  ],
  products: [
    {
      name: "Yendulum",
      description:
        'A daily task/habit "operating system." Builds a prioritized day plan around fixed commitments, tasks, and habits, now AI-generated, with configurable per-item notifications. The first product shipped, and the most mature code in the platform.',
      href: "https://yendulum.yigloo.app",
      status: "live" as const,
    },
    {
      name: "Yexit",
      description:
        "A personal finance tracker: transaction CRUD with a monthly overview, money lent/borrowed tracking, shared-expense splitting, and tag-based grouping.",
      href: "https://yexit.yigloo.app",
      status: "live" as const,
    },
    {
      name: "Designed, not yet built",
      description:
        "An accountability-first messenger, an AI assistant, an artist portfolio platform, and a student-verification tool built on DigiLocker.",
      status: "designed" as const,
    },
  ],
  highlights: [
    {
      title: "Cross-service identity, without a shared user database",
      description:
        "Every product needs sign-in, but I didn't want a separate login and user database per product, and I didn't want one monolithic user table coupling every product together either. I built a platform-wide SSO: a single service issues JWTs after email/OTP sign-in, scoped per-product via the token's audience claim, verified locally by each product's own service. Identity issuance is centralized; every other piece of domain data, profiles, tasks, transactions, stays owned entirely by the product it belongs to. Alongside it, I built a lightweight request-tracing convention, passport headers carried through every inter-service call, implemented independently in all three backend languages, so I can tell which container really called which mid-request, without adopting a full distributed-tracing system.",
    },
    {
      title: "Multi-tenant isolation on one shared database",
      description:
        "Every service runs on one Postgres instance, but I wanted each product's data properly isolated and each one extractable to its own database later without a rewrite. I designed schema-and-role-level isolation across every service, and resolved a real Prisma Migrate conflict that came up while doing it, not a hypothetical concern, an actual bug I had to design around.",
    },
    {
      title: "AI-generated daily plans, with zero request-time latency",
      description:
        "Yendulum's core promise is a prioritized day plan. Generating it live on every app open would mean paying LLM latency every single time. Instead, I built a stateless FastAPI service with no database of its own, driven by a Cloud Scheduler job that runs once daily plus a catch-up pass for anyone the primary run missed, each user's plan is generated ahead of time and persisted, so opening the app is a pure database read. This was the platform's first AI feature, and the pattern it established, a stateless AI service plus product-owned scheduling, is now the template for every AI feature since.",
      href: "https://github.com/yigloo/yigloo-brain-service",
      linkLabel: "ai-service on GitHub",
    },
    {
      title: "A reusable push notification pipeline",
      description:
        "Split Web Push subscription and scheduling logic (owned per-product) from a shared Go delivery service, so any future product can plug into push notifications without re-implementing delivery from scratch.",
    },
    {
      title: "Securing every background job the same way",
      description:
        "Every cron-triggered internal endpoint on the platform uses the same reusable, timing-attack-resistant shared-secret pattern, one convention, applied everywhere, instead of ad hoc auth per service.",
    },
    {
      title: "Engineering process, solo",
      description:
        "Working alone across three languages and eight services creates a real risk: diverging conventions per service, and tribal knowledge that only I could reconstruct. I built process specifically to prevent that: an RFC-style design-doc workflow for non-trivial features (used for the AI daily-plan feature's mid-flight redesign from request-driven to cron-driven, among others), consistent per-container documentation, a layered source structure applied to every frontend regardless of framework, and GitHub Actions CI on every client, install, lint, test, build, and a dependency audit that also runs weekly on a cron, purely to catch newly disclosed CVEs even in weeks with no code changes. When Python became the platform's first non-TypeScript service, I translated the existing TypeScript conventions into that language's own guideline docs, so it could act as the template for the next one.",
    },
  ] satisfies YiglooHighlight[],
  links: {
    platform: { label: "yigloo.app", href: "https://yigloo.app" },
    org: { label: "github.com/yigloo", href: "https://github.com/yigloo" },
    yendulumWeb: { label: "yendulum-web-client", href: "https://github.com/yigloo/yendulum-web-client" },
  },
};

export const voidDesign = {
  slug: "void-design",
  name: "Void Design",
  tagline: "An open-source React component library, published to npm.",
  metaLine: "Solo project · 2022–2023 · 9 published versions",
  paragraphs: [
    "Most component libraries ship style-only components and leave the functionality to the consumer. I built Void Design the opposite way: every component shipped fully functional, so a consumer only had to restyle it, not rebuild it. The table component, for example, came with sorting, filtering, searching, and pagination already built in.",
    "I designed and built the whole thing alone, the component API, a consistent interaction-state model (loading, disabled, progress, semantic color variants, sizing) applied the same way across every component rather than reinvented per-component, and the npm package build, versioning, and publishing pipeline itself. Nine releases between May and December 2022, with real early traction, npm downloads and GitHub stars, before development slowed.",
  ],
  components: ["Button", "Input", "Drawer", "Toast/Snackbar", "Table", "Card", "Form", "Slider", "Spinner", "Divider"],
  links: {
    npm: { label: "void-design on npm", href: "https://www.npmjs.com/package/void-design" },
    github: { label: "Nandan-unni/void-design", href: "https://github.com/Nandan-unni/void-design" },
  },
  tags: ["React", "npm", "Design system"],
};

export const voidProton = {
  slug: "void-proton",
  name: "Void Proton",
  tagline: "An Express-inspired Python backend web framework, published to PyPI.",
  metaLine: "Solo project · 2022–2023",
  paragraphs: [
    "Built the core abstractions of a backend framework from scratch: a radix-tree-based router (rather than building on an existing routing library), a hierarchical middleware pipeline where handlers can be attached at any nesting level, global, per group, or per route, a context object wrapping the raw request and response so route handlers never touch them directly, and an inbuilt SQL ORM. Served via Gunicorn. Published to PyPI with its initial release in July 2022.",
  ],
  links: {
    pypi: { label: "void-proton on PyPI", href: "https://pypi.org/project/void-proton/" },
    github: { label: "Nandan-unni/proton-py", href: "https://github.com/Nandan-unni/proton-py" },
  },
  tags: ["Python", "PyPI", "Web framework"],
};
