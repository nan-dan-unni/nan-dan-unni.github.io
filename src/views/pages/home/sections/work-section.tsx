import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import {
  YIGLOO_PLATFORM,
  YIGLOO_PRODUCTS,
} from "@/core/constants/projects.const";
import { Badge } from "@/views/components/shadcn/ui/badge";
import Reveal from "@/views/components/reveal";

import ProjectCard from "./project-card";

function WorkSection() {
  return (
    <section
      id="work"
      className="border-border/60 scroll-mt-16 border-t px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Selected work
          </h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            My main project outside of client work - an ecosystem of AI-powered
            apps, built end to end.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <Link
            href={YIGLOO_PLATFORM.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border/60 hover:border-border bg-card relative block overflow-hidden rounded-2xl border p-8 transition-colors sm:p-10"
          >
            <div
              aria-hidden="true"
              className="from-brand-yendulum via-brand-yexit to-brand-yournals absolute inset-x-0 top-0 h-px bg-linear-to-r"
            />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <Badge variant="secondary" className="font-normal">
                  Personal project · Ecosystem
                </Badge>
                <h3 className="mt-4 flex items-center gap-1.5 text-2xl font-semibold tracking-tight">
                  {YIGLOO_PLATFORM.name}
                  <ArrowUpRightIcon className="text-muted-foreground size-5 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-primary mt-1 text-sm font-medium">
                  {YIGLOO_PLATFORM.tagline}
                </p>
              </div>
              <div
                aria-hidden="true"
                className="flex items-center gap-1.5 pt-1"
              >
                <span className="bg-brand-yendulum size-2.5 rounded-full" />
                <span className="bg-brand-yexit size-2.5 rounded-full" />
                <span className="bg-brand-yournals size-2.5 rounded-full" />
              </div>
            </div>
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
              {YIGLOO_PLATFORM.description}
            </p>
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {YIGLOO_PRODUCTS.map((product, index) => (
            <ProjectCard
              key={product.id}
              product={product}
              delay={0.15 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
