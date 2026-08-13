export interface Experience {
  role: string;
  company: string;
  companyType: string;
  location: string;
  period: string;
  duration: string;
  highlights: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer — Frontend Lead & Backend Engineer",
    company: "FenixPyre",
    companyType: "Data Security Startup",
    location: "Remote · Ohio, US",
    period: "Mar 2023 — Present",
    duration: "3+ yrs",
    highlights: [
      "Led the Egnyte integration's authentication migration from static to rotating tokens, designing a full token lifecycle system on LoopBack and Google Cloud Tasks — shipped ahead of the vendor's deprecation deadline with zero disruption for ~45% of customers and ~10,000 encrypted files.",
      "Built full-stack analytics dashboards (React, Chart.js, Express, InfluxDB), including a file inventory table with search, filtering, and server-side pagination tuned to handle 2M+ records.",
      "Led a 3-engineer frontend team through two critical sprints, owning code review, timelines, and release coordination — 100% of planned features shipped on schedule, plus audio file support delivered beyond scope.",
      "Designed a TypeScript SIEM event collection library adopted across 3 backend services and 2 frontends, forming the data foundation for the platform's security analytics.",
      "Introduced a spec-driven, AI-assisted engineering workflow — a per-repo documentation layer that doubles as a local MCP server, giving coding agents persistent project context.",
      "Built an AI chatbot (OpenAI, LangChain, Pinecone) that lets users query file access logs in natural language, and rewrote its backend from JavaScript to Python — improving accuracy and increasing supported file size by 200%.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "TechbyHeart",
    companyType: "Web & Mobile Applications",
    location: "Remote · Kochi, India",
    period: "May 2021 — May 2022",
    duration: "1 yr",
    highlights: [
      "Owned SEO end-to-end for a Next.js content platform - live RSS feed, dynamic per-article SEO, and social preview metadata - improving performance by 75% and cutting running costs by 90%.",
      "Built the customer, manager, and employee apps for a vehicle service management ecosystem in React Native and React, with biometric login, job tracking, and slot management, for a project that went on to raise $12M in pre-seed funding.",
    ],
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "3+ yrs", label: "Professional engineering experience" },
  { value: "2M+", label: "Records rendered in a single dashboard" },
  { value: "10K+", label: "Encrypted files migrated, zero disruption" },
  { value: "$12M", label: "Pre-seed raised by a product I helped build" },
];

export interface Education {
  degree: string;
  school: string;
  detail: string;
  period: string;
}

export const EDUCATION: Education[] = [
  {
    degree: "M.Tech, Artificial Intelligence and Data Science",
    school: "Indian Institute of Information Technology, Kottayam",
    detail: "CGPA 7.2",
    period: "Aug 2024 — Aug 2027",
  },
  {
    degree: "B.Tech, Computer Science and Engineering",
    school: "School of Engineering, CUSAT, Kochi",
    detail: "CGPA 8.4 · First Class with Distinction",
    period: "Jul 2019 — Jul 2023",
  },
];
