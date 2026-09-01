export interface ExperienceFeature {
  title: string;
  paragraphs: string[];
  technologies: string[];
}

export interface ExperienceCompany {
  slug: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  current: boolean;
  about: string;
  roleSummary: string;
  features: ExperienceFeature[];
}

export const experiencePageIntro =
  "Five companies, one consistent pattern: given a real constraint — a vendor deprecation deadline, an under-specified requirement, a dataset too large for the frontend to render normally — I designed the system and built it, usually alone. Below is what I actually built, grouped by company, most recent first.";

export const experience: ExperienceCompany[] = [
  {
    slug: "fenixpyre",
    company: "FenixPyre",
    role: "Software Engineer — Frontend Lead & Backend Engineer",
    dates: "March 2023 – Present",
    location: "Remote (Ohio, United States)",
    current: true,
    about:
      "FenixPyre is a data-security product company building zero-trust file security — file-level encryption, secure collaboration, and sensitive-data discovery — with integrations across SharePoint, Box, and Egnyte.",
    roleSummary:
      "Joined as a frontend engineer and grew into Frontend Lead, while continuing to design and ship backend systems solo. Over three years, this has meant leading a team, mentoring an intern through a Microsoft add-in review, and independently building most of the platform's security-critical infrastructure: event collection, token lifecycle management, and an on-device ML classifier.",
    features: [
      {
        title: "SIEM Event Collection Platform",
        paragraphs: [
          "The platform's existing event collection only covered two backend services and only captured successful actions — a real security gap, since knowing what was blocked matters as much as knowing what succeeded. I designed and built a full SIEM pipeline solo: a TypeScript npm library integrated across 9+ services (2 React apps, 2 LoopBack services, 5 NestJS services), plus separate coverage paths for a Python service, two Go services, and a Windows desktop app that couldn't use the library directly. A Go/Gin service ingests everything, enriches it with geolocation, correlates a single logical event across multiple services even when it's asynchronous, and normalizes formats before storage. I migrated storage from InfluxDB, which was struggling under the data volume, to Amazon Timestream, dual-writing to InfluxDB during the transition so legacy consumers kept working. The result: failed and denied actions are now first-class, queryable events with error codes attached, not silently dropped.",
        ],
        technologies: ["TypeScript", "Go", "Gin", "Amazon Timestream", "InfluxDB", "AWS"],
      },
      {
        title: "Egnyte Token Lifecycle Management",
        paragraphs: [
          "Egnyte announced it was deprecating static access tokens for a token-pair model with a hard migration deadline, affecting roughly 45% of FenixPyre's customers and 10,000+ actively managed files, right as the rest of the team was tied up onboarding a major client. I designed the rotation system on a Miro board, reviewed it with the team, then built it solo: a Google Cloud Task scheduled 25 days into the 30-day token TTL (a 5-day safety buffer), automatic failure-triggered refresh with duplicate-task cleanup, retry-with-delay on transient errors, and a Slack alert if a refresh token itself became invalid. I personally led testing through every failure scenario before shipping, and later diagnosed and fixed a UTC timezone edge case that surfaced in production. Delivered ahead of the deadline with zero disruption to any affected customer.",
        ],
        technologies: ["LoopBack", "NestJS", "MongoDB", "Google Cloud Tasks", "Egnyte API"],
      },
      {
        title: "Sensitive File Classifier — On-Device ML (Rust) & Cloud Dashboard",
        paragraphs: [
          "Customers could encrypt files but had no way to know which files actually contained sensitive data. Sending file content to a cloud AI service to find out would have created a new exposure risk, so the team built an on-device classifier instead, a Windows desktop app that never sends file content off the machine. The team was skeptical Rust had mature enough ML tooling; I proposed ONNX as a portable runtime, which unblocked the whole approach. I built the post-processor: a rule-matching engine that evaluates each file's detected sensitive-data types against admin-configured rules (AND/OR type combinations) and resolves the resulting actions — encrypt, move, delete, or the mandatory action, label. I researched and implemented format-specific metadata labeling so a sensitivity label travels with the file itself across PDF, DOCX/XLSX/PPTX, SVG, and PNG formats, with no central lookup required.",
          "On the cloud side, I owned the dashboard end to end: a table view built to handle up to 2 million file paths without choking the frontend, a configuration page, and an analytics page whose entire widget set — most sensitive file, most sensitive folder, files/devices scanned, and more — I designed myself, including deciding per widget whether it should be a scheduled query, a precomputed value, or a live query. I also researched and proposed a radix-tree-based virtual folder-explorer view as a future direction, chosen specifically because it avoids loading all 2 million paths into memory at once.",
          "The first version became a customer magnet, impressing a major client and drawing interest from several prospective ones.",
        ],
        technologies: ["Rust", "ONNX", "egui", "React", "shadcn/ui", "Chart.js", "radix tree"],
      },
      {
        title: "Frontend Modernization & Design System Migration",
        paragraphs: [
          "The admin dashboard and file sharing platform were both running on an aging SCSS/Ant Design stack with Create React App, outdated dependencies, and no shared design system between the two apps. I worked alongside one other developer to rebuild both UI layers on shadcn/ui, Radix UI, and Tailwind CSS, added dark/light mode, migrated the build tooling from CRA to Vite, upgraded dependencies and Node.js across both apps, and built a dedicated mobile-responsive UI for the file sharing platform. I owned code review, release coordination, and knowledge-transfer for the whole effort, and established a shared Bit-based design system used by both applications going forward.",
        ],
        technologies: ["shadcn/ui", "Radix UI", "Tailwind CSS", "Vite", "Bit"],
      },
      {
        title: "AI-Powered File Activity Chatbot",
        paragraphs: [
          "Admins could already export a CSV of a user's file activity, but reading it meant digging through raw rows by hand. I built the chatbot interface solo, CSV upload, a chat session scoped to that file, real-time messaging, and led a JavaScript-to-Python rewrite of the backend after the original implementation underperformed on both speed and accuracy. The rewrite, built on LangChain and Pinecone with GPT-4 generating grounded answers, increased the maximum accepted file size by 200% and improved answer accuracy by 60%.",
        ],
        technologies: ["React", "LangChain", "Pinecone", "OpenAI GPT-4", "Python", "LoopBack"],
      },
      {
        title: "User Activity Analytics Dashboard",
        paragraphs: [
          "Built solo, frontend and backend: seven independently loading widgets over a custom date-range picker, backed by a Go/Gin service I wrote with a reusable InfluxDB query builder, later reused elsewhere in the platform beyond this dashboard. Performance improved with each iteration through lazy loading, decoupled loading states, and caching.",
        ],
        technologies: ["React", "Chart.js", "Go", "Gin", "InfluxDB"],
      },
      {
        title: "Frontend Leadership & Team Management",
        paragraphs: [
          "Led the file sharing platform's frontend team through 2024, code review, timeline management, release coordination, while personally building its file upload and download features, which went on to become the platform's most-used file actions. Promoted to Frontend Lead in 2025 after the team's other senior frontend developer left, taking over PR and UI review for the whole team (including reviewing AI-assisted contributions), becoming the de facto UI quality gate in the absence of a dedicated designer, and directly managing a 6-month intern who shipped a Microsoft Outlook add-in on schedule for Microsoft's own review process. Every feature shipped on time through this period despite recurring last-minute requirement changes.",
        ],
        technologies: ["React", "Microsoft Outlook Add-ins (Office.js)"],
      },
    ],
  },
  {
    slug: "cura",
    company: "Cura",
    role: "Software Engineer — Frontend & Backend (Freelance)",
    dates: "December 2025 – April 2026",
    location: "Remote (Thailand-based startup)",
    current: false,
    about:
      "Cura is an AI front-desk platform for booking-driven service businesses — salons, clinics, spas, hotels, studios. It unifies WhatsApp, Instagram, Messenger, and Telegram into one inbox and layers an AI agent on top that answers questions, books slots, and escalates to a human when needed.",
    roleSummary:
      "Brought on as a freelance engineer working directly with the founder/CEO, covering both frontend and backend. Built the core of the product: the unified multi-channel inbox, the AI agent's answer/booking/escalation flow, and the customer-facing booking experience. The CEO personally called the finished product, UI, and UX production-grade.",
    features: [
      {
        title: "AI Agent RAG Knowledge Base",
        paragraphs: [
          "The AI agent needed business-specific knowledge — every business's services, pricing, and policies differ and change over time — so generic model knowledge wasn't enough. I built the manager-facing document upload UI and the backend RAG ingestion and retrieval pipeline end to end, so every customer-facing answer is grounded in documents that business's own admins uploaded.",
        ],
        technologies: ["React", "TypeScript", "Convex", "Vercel AI SDK", "OpenRouter"],
      },
      {
        title: "AI Workflow Builder",
        paragraphs: [
          "Management's ask was loosely scoped: let admins build their own AI-driven marketing workflows without engineering involvement. There was no predefined spec for what a \"workflow\" even consisted of, so I designed the trigger/condition/action system myself, then built a drag-and-drop builder on React Flow, plus a template system for the marketing team and an AI-assisted mode where an admin describes a workflow in plain language and the system generates it. It became an integral, customer-attracting part of the product, specifically praised for how approachable it made automation for non-technical clinic owners.",
        ],
        technologies: ["React Flow", "TypeScript", "Convex", "Vercel AI SDK"],
      },
      {
        title: "AI Evaluation & Observability",
        paragraphs: [
          "Built the Langfuse-based evaluation and observability layer — escalation correctness, tone matching, instruction-following — that became the foundation for iteratively tuning the AI agent's prompts and debugging issues in production.",
        ],
        technologies: ["Langfuse", "TypeScript"],
      },
      {
        title: "Plan & Usage Limits Management",
        paragraphs: [
          "Built plan-based limits across contacts, services, file uploads, and AI tokens, plus an internal admin UI for staff to manage plans and view per-organization, per-conversation AI usage and cost for billing.",
        ],
        technologies: ["React", "TypeScript", "Convex"],
      },
    ],
  },
  {
    slug: "revyu",
    company: "Revyu",
    role: "Frontend Intern → Full-Stack Intern → Full-Stack Developer → Co-Founder",
    dates: "2020 – 2023",
    location: "Remote (India)",
    current: false,
    about:
      "Revyu is an AI-powered review-management platform for Shopify merchants, importing reviews from AliExpress and Amazon, customizable storefront widgets, and AI-assisted review generation from a few keywords.",
    roleSummary:
      "Joined as the first engineer and became the primary developer across the entire stack before eventually co-founding the company. Built close to 100% of the dashboard and frontend, most of the backend, and every Google Cloud Function powering automation.",
    features: [
      {
        title: "Post-Purchase Review Request Automation",
        paragraphs: [
          "Built the automated post-purchase review-request email workflow. Adoption drove a 75% increase in customer usage and a 75% increase in revenue.",
        ],
        technologies: ["Node.js", "Google Cloud Functions", "Google Cloud Tasks"],
      },
      {
        title: "AI-Powered Review Post-Processing",
        paragraphs: [
          "Built automated AI-driven review post-processing — grammar and spelling correction, date refresh — as part of the MVP. It drove early customer acquisition.",
        ],
        technologies: ["OpenAI API", "Google Cloud Functions"],
      },
      {
        title: "Popup Review Widget",
        paragraphs: [
          "Designed and built a non-blocking, animated popup review widget with dashboard-configurable themes. The theme designs were specifically praised by senior developers.",
        ],
        technologies: ["React", "Ant Design"],
      },
      {
        title: "AI Token Purchases & Usage Metering",
        paragraphs: [
          "Built Stripe-based AI credit purchases with real-time usage metering, turning the AI review-generation feature into a monetized capability.",
        ],
        technologies: ["Stripe", "Node.js"],
      },
    ],
  },
  {
    slug: "techbyheart",
    company: "TechByHeart",
    role: "Frontend Intern",
    dates: "May 2021 – May 2022",
    location: "Remote (Kochi, India)",
    current: false,
    about:
      "A service-based agency delivering full-stack web and mobile applications to client specifications. Worked across three client engagements over one year.",
    roleSummary:
      "Delivered 4+ mobile applications, 2+ SEO-focused websites, and 1 admin dashboard across three separate clients, primarily frontend, both API-integrated apps and apps built on Firebase.",
    features: [
      {
        title: "Automobile Content Platform",
        paragraphs: [
          "Built the Draft.js-based admin article editor with real-time cross-tab preview and role-based permissions, working around Firebase Storage's lack of native pagination with a Firestore-metadata workaround. On the reader side, built an SEO-rich Next.js site with a live RSS feed and rich social share previews, personally improving page performance by 75% and cutting Firebase costs by 90%.",
        ],
        technologies: ["Next.js", "Firebase", "Draft.js"],
      },
      {
        title: "Hotel Guest Services App",
        paragraphs: [
          "Built a cross-platform (Android/iOS) guest app for room service requests, meal-time menus, and local information for a Sri Lanka-based hospitality client, cutting app size 25% through image optimization.",
        ],
        technologies: ["React", "Capacitor"],
      },
    ],
  },
  {
    slug: "bitbrothers",
    company: "BitBrothers",
    role: "Frontend Intern",
    dates: "May 2022 – July 2022",
    location: "Remote (Mumbai, India)",
    current: false,
    about: "A service-based agency delivering client web applications.",
    roleSummary:
      "Solely developed a client website from scratch, a public marketing site and an authenticated startup-management portal, with no other developer involved.",
    features: [
      {
        title: "NGO Site & Startup Management Portal",
        paragraphs: [
          "Solely built a client website from scratch for startupmumbai.org — an SEO-rich public marketing site plus an authenticated portal for startups to manage board members, shares, and financials, with no other developer involved. Still live today with the original UI.",
        ],
        technologies: ["Next.js", "Tailwind CSS"],
      },
    ],
  },
];
