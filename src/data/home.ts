export const hero = {
  eyebrow: "Software Engineer · Bangalore, India",
  headline: "I build products that handle sensitive data carefully, and ship them fast.",
  subheadline:
    "3+ years as a Frontend Lead & Backend Engineer on FenixPyre's zero-trust file security platform — SIEM pipelines, on-device ML classification, AI-powered tooling. Nights and weekends, I design and run Yigloo, a solo-built platform spanning 8 services across three backend languages.",
  primaryCta: { label: "View Resume", href: "/resume" },
  secondaryCta: { label: "See Projects", href: "/projects" },
};

export const stats: { value: string; label: string; icon: "clock" | "layers" | "network" | "files" | "shield-check" }[] = [
  { value: "3+ yrs", label: "professional software engineering (FenixPyre)", icon: "clock" },
  { value: "9+ services", label: "instrumented solo in FenixPyre's SIEM platform", icon: "layers" },
  { value: "8 services", label: "self-architected across Yigloo, 3 backend languages", icon: "network" },
  { value: "2M+ files", label: "scale of the sensitive-file classifier dashboard", icon: "files" },
  {
    value: "10,000+ files",
    label: "kept accessible with zero disruption in a vendor migration",
    icon: "shield-check",
  },
];

export const focusAreas: {
  title: string;
  description: string;
  icon: "sparkles" | "shield-check" | "layers" | "users";
}[] = [
  {
    title: "AI-powered product engineering",
    description:
      "I've shipped AI features end to end in production: a RAG-grounded customer support agent, a natural-language workflow generator, an on-device ML file classifier, and a CSV activity chatbot, each one integrated into a real product, not a demo.",
    icon: "sparkles",
  },
  {
    title: "Security-conscious systems",
    description:
      "Zero-trust file encryption is FenixPyre's whole product. I've built the SIEM pipeline that captures denied and failed events, the token-rotation system that survived a vendor deprecation deadline, and the on-device classifier that keeps sensitive file content off the cloud entirely.",
    icon: "shield-check",
  },
  {
    title: "Full-stack ownership, solo when needed",
    description:
      "Most of what's on this site I built alone, start to finish: architecture, backend, frontend, and infra. Yigloo is 8 independently deployable services across TypeScript, Python, and Go, designed and run by one person.",
    icon: "layers",
  },
  {
    title: "Frontend leadership",
    description:
      "Led FenixPyre's file sharing platform frontend team through 2024, then stepped up to Frontend Lead in 2025, owning PR and UI review, mentoring an intern, and staying the direct technical point of contact for the CTO and engineering manager.",
    icon: "users",
  },
];

export const currentRole = {
  label: "Currently",
  title: "Software Engineer, Frontend Lead & Backend Engineer",
  company: "FenixPyre",
  dates: "March 2023 to present",
  description:
    "FenixPyre builds zero-trust file security: encryption, secure collaboration, and sensitive-data discovery across SharePoint, Box, and Egnyte. I lead frontend delivery and ship backend systems in Go, TypeScript, and Python, most recently the platform's SIEM event collection pipeline and its Rust-based on-device sensitive-file classifier.",
};

export const featuredWork: {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: "layers" | "radar" | "workflow";
}[] = [
  {
    title: "Yigloo",
    description:
      "A platform I designed and built alone: 8 independently deployable services across TypeScript, Python, and Go, sharing one identity system and one Postgres database. First product, Yendulum, shipped to production in August 2026.",
    tags: ["TypeScript", "Python", "Go", "Postgres", "Solo project"],
    href: "/projects/yigloo",
    icon: "layers",
  },
  {
    title: "SIEM Event Collection Platform",
    description:
      "Designed and built solo: an npm event-collection library and a Go ingestion service tracking a single logical event across 9+ services, closing a gap where denied and failed actions weren't being captured at all.",
    tags: ["Go", "TypeScript", "Amazon Timestream", "Security"],
    href: "/experience#fenixpyre",
    icon: "radar",
  },
  {
    title: "AI Workflow Builder",
    description:
      "A drag-and-drop, n8n-style automation builder designed from a loose spec and built with React Flow, including a natural-language mode that lets non-technical clinic owners describe a workflow in plain English.",
    tags: ["React Flow", "TypeScript", "AI"],
    href: "/experience#cura",
    icon: "workflow",
  },
];

export const educationCallout = [
  {
    degree: "M.Tech, Artificial Intelligence & Data Science",
    institution: "IIIT Kottayam, 2024–2027 (in progress)",
  },
  {
    degree: "B.Tech, Computer Science Engineering",
    institution: "CUSAT, 2019–2023, First Class with Distinction",
  },
];

export const closingCta = {
  headline: "Want the details?",
  body: "The Experience page has the full breakdown of what I've shipped at FenixPyre, Cura, and earlier. The Projects page is where Yigloo lives.",
  links: [
    { label: "View Experience", href: "/experience" },
    { label: "View Projects", href: "/projects" },
    { label: "View Resume", href: "/resume" },
  ],
};
