export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "data"
  | "cloud"
  | "ai"
  | "security"
  | "practices";

export const skillGroups: { category: SkillCategory; label: string; items: string[] }[] = [
  { category: "languages", label: "Languages", items: ["JavaScript", "TypeScript", "Python", "Go", "Rust"] },
  {
    category: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI", "Ant Design", "Zustand", "Chart.js", "React Flow"],
  },
  {
    category: "backend",
    label: "Backend",
    items: ["Node.js (NestJS, LoopBack)", "FastAPI", "Go (Gin, chi)", "Express.js"],
  },
  {
    category: "data",
    label: "Databases & Storage",
    items: ["PostgreSQL", "MongoDB", "InfluxDB", "Amazon Timestream", "Firebase", "Convex", "AWS S3"],
  },
  {
    category: "cloud",
    label: "Cloud & Infrastructure",
    items: ["AWS", "GCP (Cloud Run, Cloud Tasks, Scheduler, Pub/Sub)", "Cloudflare Workers", "Docker", "GitHub Actions"],
  },
  {
    category: "ai",
    label: "AI / ML",
    items: ["OpenAI (GPT-4)", "LangChain", "RAG pipelines", "Pinecone", "OpenRouter", "Vercel AI SDK", "Langfuse", "ONNX", "pydantic-ai"],
  },
  {
    category: "security",
    label: "Security",
    items: ["Zero-trust architecture", "SIEM pipelines", "JWT / OTP auth", "On-device ML classification", "Token lifecycle management"],
  },
  {
    category: "practices",
    label: "Practices",
    items: ["Solo system architecture", "Frontend leadership & code review", "RFC-style design docs", "CI/CD"],
  },
];

/** Compact snapshot for the home page — a subset of the full groups above. */
export const skillsSnapshot: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "Go", "Rust"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Radix UI"] },
  { label: "Backend", items: ["Node.js (NestJS, LoopBack)", "FastAPI", "Go (Gin, chi)"] },
  { label: "AI/ML", items: ["OpenAI", "LangChain", "RAG", "Pinecone", "OpenRouter", "On-device ML (ONNX)"] },
  { label: "Cloud & Data", items: ["GCP", "AWS", "Postgres", "MongoDB", "InfluxDB / Timestream"] },
];
