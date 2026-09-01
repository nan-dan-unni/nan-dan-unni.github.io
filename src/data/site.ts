export const site = {
  name: "A S Nandanunni",
  url: "https://nandanunni.yigloo.app",
  titleDefault: "A S Nandanunni — Software Engineer",
  identityStatement:
    "Software Engineer building AI-powered, security-conscious products professionally — and solo-architecting a multi-language platform on the side.",
  shortBio:
    "Software Engineer with 3+ years building zero-trust file security products at FenixPyre — SIEM pipelines, on-device ML classification, AI copilots — currently as Frontend Lead. Outside work, I solo-design and run Yigloo, an 8-service platform spanning TypeScript, Python, and Go. Currently pursuing an M.Tech in AI & Data Science.",
  keywords: [
    "A S Nandanunni",
    "Software Engineer",
    "Frontend Lead",
    "Full Stack Engineer",
    "React",
    "TypeScript",
    "Go",
    "Python",
    "AI Engineer",
    "Zero Trust Security",
    "Bangalore",
  ],
  location: "Bangalore, India",
  tagline: "Building things that handle sensitive data carefully.",
  availability: "Open to remote and hybrid roles. Based in Bangalore, open to relocation.",
  freshnessNote: "Open to opportunities",
  lastUpdated: "2026-08-31",
  nav: [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
  ],
  socials: {
    github: "https://github.com/nan-dan-unni",
    linkedin: "https://www.linkedin.com/in/nan-dan-unni/",
    email: "asnqln@gmail.com",
  },
  footer: {
    explore: [
      { label: "Home", href: "/" },
      { label: "Experience", href: "/experience" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
    ],
    connect: [
      { label: "GitHub", href: "https://github.com/nan-dan-unni" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nan-dan-unni/" },
      { label: "Email", href: "mailto:asnqln@gmail.com" },
    ],
    resume: [
      { label: "View Resume", href: "/resume.pdf" },
      { label: "Download PDF", href: "/resume.pdf" },
    ],
  },
} as const;

/**
 * Privacy note: the phone number lives in exactly one place in this codebase —
 * src/data/vcard.ts, consumed only by the Save Contact (.vcf) generator. Do not
 * import it, hardcode it, or reference it from any other file. See
 * portfolio/content.md "Content questions — resolved" (#5) for why.
 */
