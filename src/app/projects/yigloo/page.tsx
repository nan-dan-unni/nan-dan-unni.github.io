import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Network,
  ListChecks,
  Boxes,
  Wrench,
  KeyRound,
  Database,
  Sparkles,
  Bell,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { TechTag } from "@/components/tech-tag";
import { SectionKicker } from "@/components/section-kicker";
import { YiglooArchitecture } from "@/components/yigloo-architecture";
import { yigloo } from "@/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Yigloo",
  description: yigloo.tagline,
};

const accentTextClass = [
  "text-accent-iris",
  "text-accent-azure",
  "text-accent-violet",
  "text-accent-plum",
] as const;

const highlightIcons = [KeyRound, Database, Sparkles, Bell, ShieldCheck, Workflow];

export default function YiglooPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-iris">
        {yigloo.metaLine}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{yigloo.name}</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {yigloo.tagline}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {yigloo.tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5">
        <a
          href={yigloo.links.platform.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-accent-iris transition-colors hover:text-accent-plum"
        >
          {yigloo.links.platform.label} <ArrowRight className="size-3" />
        </a>
        <a
          href={yigloo.links.org.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-accent-iris transition-colors hover:text-accent-plum"
        >
          {yigloo.links.org.label} <ArrowRight className="size-3" />
        </a>
      </div>

      {/* Overview */}
      <section className="mt-16">
        <SectionKicker icon={BookOpen}>Overview</SectionKicker>
        <div className="mt-4 space-y-4">
          {yigloo.overview.map((p, i) => (
            <p key={i} className="max-w-2xl text-sm leading-relaxed sm:text-base">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="mt-16">
        <SectionKicker icon={Network}>Architecture</SectionKicker>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Hover or focus a service to see how it connects to the shared identity and database
          layer.
        </p>
        <div className="mt-8 rounded-lg border border-border/70 p-6 sm:p-10">
          <YiglooArchitecture />
        </div>
      </section>

      {/* Stack */}
      <section className="mt-16">
        <SectionKicker icon={ListChecks}>The stack, by the numbers</SectionKicker>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {yigloo.stack.map((line) => (
            <li
              key={line}
              className="rounded-md border border-border/70 px-4 py-3 text-sm text-muted-foreground"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      {/* Products */}
      <section className="mt-16">
        <SectionKicker icon={Boxes}>Products</SectionKicker>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {yigloo.products.map((product) => (
            <div key={product.name} className="rounded-lg border border-border/70 p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium">{product.name}</h3>
                {product.status === "live" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-iris/30 bg-accent-iris/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-iris">
                    <span className="size-1.5 rounded-full bg-accent-iris" />
                    Live
                  </span>
                ) : (
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    Designed
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              {"href" in product && product.href ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent-iris transition-colors hover:text-accent-plum"
                >
                  Visit <ArrowRight className="size-3" />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Engineering highlights */}
      <section className="mt-16">
        <SectionKicker icon={Wrench}>Engineering highlights</SectionKicker>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          What actually makes this hard, not just big.
        </p>
        <div className="mt-6 space-y-10">
          {yigloo.highlights.map((highlight, i) => {
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <div key={highlight.title} className="border-l-2 border-accent-plum/40 pl-5">
                <div className="flex items-center gap-2">
                  <Icon
                    className={cn("size-4", accentTextClass[i % accentTextClass.length])}
                    strokeWidth={1.75}
                  />
                  <p className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-1.5 text-lg font-medium tracking-tight">{highlight.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {highlight.description}
                </p>
                {highlight.href ? (
                  <a
                    href={highlight.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent-iris transition-colors hover:text-accent-plum"
                  >
                    {highlight.linkLabel ?? "View on GitHub"} <ArrowRight className="size-3" />
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
