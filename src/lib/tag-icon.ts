import {
  siTypescript,
  siJavascript,
  siPython,
  siRust,
  siGo,
  siGin,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siNestjs,
  siLoopback,
  siFastapi,
  siExpress,
  siVite,
  siTailwindcss,
  siShadcnui,
  siRadixui,
  siAntdesign,
  siChartdotjs,
  siPostgresql,
  siMongodb,
  siInfluxdb,
  siFirebase,
  siConvex,
  siDocker,
  siGithubactions,
  siGooglecloud,
  siCloudflareworkers,
  siLangchain,
  siOpenrouter,
  siOnnx,
  siPydantic,
  siNpm,
  siPypi,
  siStripe,
  siPrisma,
  siCapacitor,
  siVercel,
  siSass,
} from "simple-icons";

interface TagIcon {
  path: string;
  title: string;
}

/**
 * Ordered, word-boundary keyword -> Simple Icons brand mark for the tech tags
 * rendered across the site (TechTag). Order matters where one phrase is a
 * substring of another (e.g. "radix ui" must be checked as a full phrase so
 * the unrelated tag "radix tree" doesn't pick up the Radix UI logo).
 *
 * Deliberately not every tag resolves to an icon — Simple Icons has no mark
 * for OpenAI, AWS, or Pinecone (trademark takedowns), and generic/internal
 * labels ("Solo project", "RAG pipelines", "Egnyte API") were never meant to
 * have one. Those fall through to the plain colored-text chip.
 */
const RULES: { keyword: string; icon: TagIcon }[] = [
  { keyword: "next.js", icon: siNextdotjs },
  { keyword: "typescript", icon: siTypescript },
  { keyword: "javascript", icon: siJavascript },
  { keyword: "python", icon: siPython },
  { keyword: "rust", icon: siRust },
  { keyword: "go", icon: siGo },
  { keyword: "gin", icon: siGin },
  { keyword: "react", icon: siReact },
  { keyword: "node.js", icon: siNodedotjs },
  { keyword: "nestjs", icon: siNestjs },
  { keyword: "loopback", icon: siLoopback },
  { keyword: "fastapi", icon: siFastapi },
  { keyword: "express", icon: siExpress },
  { keyword: "vite", icon: siVite },
  { keyword: "tailwind", icon: siTailwindcss },
  { keyword: "shadcn", icon: siShadcnui },
  { keyword: "radix ui", icon: siRadixui },
  { keyword: "ant design", icon: siAntdesign },
  { keyword: "chart.js", icon: siChartdotjs },
  { keyword: "postgres", icon: siPostgresql },
  { keyword: "mongodb", icon: siMongodb },
  { keyword: "influxdb", icon: siInfluxdb },
  { keyword: "firebase", icon: siFirebase },
  { keyword: "convex", icon: siConvex },
  { keyword: "docker", icon: siDocker },
  { keyword: "github actions", icon: siGithubactions },
  { keyword: "google cloud", icon: siGooglecloud },
  { keyword: "gcp", icon: siGooglecloud },
  { keyword: "cloudflare", icon: siCloudflareworkers },
  { keyword: "langchain", icon: siLangchain },
  { keyword: "openrouter", icon: siOpenrouter },
  { keyword: "onnx", icon: siOnnx },
  { keyword: "pydantic", icon: siPydantic },
  { keyword: "npm", icon: siNpm },
  { keyword: "pypi", icon: siPypi },
  { keyword: "stripe", icon: siStripe },
  { keyword: "prisma", icon: siPrisma },
  { keyword: "capacitor", icon: siCapacitor },
  { keyword: "vercel", icon: siVercel },
  { keyword: "sass", icon: siSass },
  { keyword: "scss", icon: siSass },
];

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function getTagIcon(tag: string): TagIcon | null {
  const value = tag.toLowerCase();
  for (const rule of RULES) {
    const pattern = new RegExp(`\\b${escapeRegExp(rule.keyword)}\\b`, "i");
    if (pattern.test(value)) return rule.icon;
  }
  return null;
}
