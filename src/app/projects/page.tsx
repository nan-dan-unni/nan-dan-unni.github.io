import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Component, ServerCog } from "lucide-react";
import { TechTag } from "@/components/tech-tag";
import { projectsPageIntro, yigloo, voidDesign, voidProton } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Yigloo: a solo-built 8-service platform across TypeScript, Python, and Go. Plus two open-source packages, Void Design and Void Proton.",
};

function ExternalLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-accent-iris transition-colors hover:text-accent-plum"
        >
          {link.label} <ArrowRight className="size-3" />
        </a>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-iris">Projects</p>
      <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Independent work
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {projectsPageIntro}
      </p>

      {/* Yigloo teaser */}
      <Link
        href="/projects/yigloo"
        className="group mt-16 block rounded-lg border border-border/70 p-6 transition-colors hover:border-accent-iris/50 sm:p-8"
      >
        <Layers className="size-5 text-accent-iris" strokeWidth={1.75} />
        <p className="mt-4 font-mono text-xs text-muted-foreground">{yigloo.metaLine}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-iris">
          {yigloo.name}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {yigloo.teaser}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {yigloo.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-accent-iris">
          View the full case study <ArrowRight className="size-3.5" />
        </span>
      </Link>

      {/* Void Design + Void Proton */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border/70 p-6 sm:p-8">
          <Component className="size-5 text-accent-azure" strokeWidth={1.75} />
          <p className="mt-4 font-mono text-xs text-muted-foreground">{voidDesign.metaLine}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">{voidDesign.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{voidDesign.tagline}</p>
          <div className="mt-4 space-y-3">
            {voidDesign.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {voidDesign.components.map((c) => (
              <TechTag key={c} label={c} />
            ))}
          </div>
          <ExternalLinks links={[voidDesign.links.npm, voidDesign.links.github]} />
        </div>

        <div className="rounded-lg border border-border/70 p-6 sm:p-8">
          <ServerCog className="size-5 text-accent-violet" strokeWidth={1.75} />
          <p className="mt-4 font-mono text-xs text-muted-foreground">{voidProton.metaLine}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">{voidProton.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{voidProton.tagline}</p>
          <div className="mt-4 space-y-3">
            {voidProton.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {voidProton.tags.map((c) => (
              <TechTag key={c} label={c} />
            ))}
          </div>
          <ExternalLinks links={[voidProton.links.pypi, voidProton.links.github]} />
        </div>
      </div>
    </div>
  );
}
