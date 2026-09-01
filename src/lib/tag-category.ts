export type TagCategory = "ai" | "backend" | "frontend" | "neutral";

const AI_KEYWORDS = [
  "openai",
  "gpt",
  "langchain",
  "rag",
  "pinecone",
  "openrouter",
  "vercel ai",
  "langfuse",
  "onnx",
  "pydantic-ai",
  "ai",
  "ml",
];

const BACKEND_KEYWORDS = [
  "node",
  "nestjs",
  "loopback",
  "fastapi",
  "go",
  "gin",
  "chi",
  "express",
  "python",
  "rust",
  "mongo",
  "postgres",
  "influxdb",
  "timestream",
  "aws",
  "gcp",
  "google cloud",
  "docker",
  "s3",
  "convex",
  "supabase",
  "prisma",
  "security",
];

const FRONTEND_KEYWORDS = [
  "typescript",
  "javascript",
  "react",
  "next.js",
  "vite",
  "tailwind",
  "shadcn",
  "radix",
  "antd",
  "ant design",
  "zustand",
  "chart.js",
  "react flow",
  "scss",
  "egui",
  "capacitor",
  "draft.js",
];

/** Categorizes a free-text tech tag for the accent-tinted chip styling described in ui-requirements.md §6. */
export function categorizeTag(tag: string): TagCategory {
  const value = tag.toLowerCase();
  if (AI_KEYWORDS.some((k) => value.includes(k))) return "ai";
  if (BACKEND_KEYWORDS.some((k) => value.includes(k))) return "backend";
  if (FRONTEND_KEYWORDS.some((k) => value.includes(k))) return "frontend";
  return "neutral";
}

export const tagCategoryClasses: Record<TagCategory, string> = {
  ai: "border-accent-violet/35 text-accent-violet bg-accent-violet/8",
  backend: "border-accent-plum/35 text-accent-plum bg-accent-plum/8",
  frontend: "border-accent-azure/35 text-accent-azure bg-accent-azure/8",
  neutral: "border-border text-muted-foreground bg-muted/40",
};
