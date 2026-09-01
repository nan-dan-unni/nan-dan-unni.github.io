import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Layers,
  Network,
  Files,
  ShieldCheck,
  Sparkles,
  Users,
  Radar,
  Workflow,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechTag } from "@/components/tech-tag";
import {
  hero,
  stats,
  focusAreas,
  currentRole,
  featuredWork,
  educationCallout,
  closingCta,
} from "@/data/home";
import { skillsSnapshot } from "@/data/skills";
import { cn } from "@/lib/utils";

const accentTextClass = [
  "text-accent-iris",
  "text-accent-azure",
  "text-accent-violet",
  "text-accent-plum",
] as const;

const statIcons = {
  clock: Clock,
  layers: Layers,
  network: Network,
  files: Files,
  "shield-check": ShieldCheck,
} as const;

const focusIcons = {
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  layers: Layers,
  users: Users,
} as const;

const featuredWorkIcons = {
  layers: Layers,
  radar: Radar,
  workflow: Workflow,
} as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="bg-grid-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] opacity-60" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-iris">
            {hero.eyebrow}
          </p>
          <h1 className="text-gradient-accent text-balance mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<Link href={hero.primaryCta.href} />}>
              {hero.primaryCta.label}
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href={hero.secondaryCta.href} />}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border/70 sm:grid-cols-5 sm:divide-y-0">
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2.5 px-4 py-10 text-center"
              >
                <Icon className="size-4 text-accent-iris" strokeWidth={1.75} />
                <p className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="max-w-[16ch] text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent-iris">01</span>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              What I do
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[area.icon];
              return (
                <div key={area.title} className="bg-background p-6 sm:p-8">
                  <Icon className={cn("mb-4 size-5", accentTextClass[i])} strokeWidth={1.75} />
                  <h3 className="text-lg font-medium tracking-tight">{area.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current role */}
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent-iris">02</span>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {currentRole.label}
            </h2>
          </div>
          <div className="rounded-lg border border-border/70 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-medium tracking-tight">{currentRole.title}</h3>
              <span className="text-muted-foreground">·</span>
              <span className="font-mono text-sm text-accent-iris">{currentRole.company}</span>
            </div>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{currentRole.dates}</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {currentRole.description}
            </p>
            <Link
              href="/experience"
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-accent-iris transition-colors hover:text-accent-plum"
            >
              Full experience breakdown <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent-iris">03</span>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Featured work
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredWork.map((item, i) => {
              const Icon = featuredWorkIcons[item.icon];
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col rounded-lg border border-border/70 p-6 transition-colors hover:border-accent-iris/50"
                >
                  <Icon className={cn("mb-4 size-5", accentTextClass[i])} strokeWidth={1.75} />
                  <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent-iris">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills + education */}
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent-iris">04</span>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Skills snapshot
              </h2>
            </div>
            <div className="space-y-5">
              {skillsSnapshot.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <TechTag key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent-iris">05</span>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Education
              </h2>
            </div>
            <ul className="space-y-5">
              {educationCallout.map((item) => (
                <li key={item.degree} className="flex gap-3 border-l-2 border-accent-plum/40 pl-4">
                  <GraduationCap className="mt-0.5 size-4 shrink-0 text-accent-plum" strokeWidth={1.75} />
                  <div>
                    <p className="text-sm font-medium leading-snug">{item.degree}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.institution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {closingCta.headline}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            {closingCta.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {closingCta.links.map((link, i) => (
              <Button
                key={link.href}
                size="lg"
                variant={i === 0 ? "default" : "outline"}
                nativeButton={false}
                render={<Link href={link.href} />}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
