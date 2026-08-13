export interface SkillGroup {
  title: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Golang", "Python", "Rust"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Zustand",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Express",
      "NestJS",
      "LoopBack",
      "Gin-Gonic",
      "Flask",
      "Django",
      "RESTful APIs",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "InfluxDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "GCP (Cloud Run, Cloud Functions, Pub/Sub)",
      "AWS (S3)",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "OpenAI APIs",
      "LangChain",
      "RAG",
      "Pinecone",
      "On-device ML",
      "Langfuse",
      "ONNX",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Postman",
      "Datadog",
      "Jest",
      "Playwright",
      "GitHub Actions",
      "Cursor",
      "Claude Code",
    ],
  },
];
