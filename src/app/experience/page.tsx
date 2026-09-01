import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TechTag } from "@/components/tech-tag";
import { experience, experiencePageIntro } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "3+ years building zero-trust file security, SIEM pipelines, and AI-powered tooling at FenixPyre, Cura, and Revyu.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-iris">Experience</p>
      <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        What I&apos;ve actually built
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {experiencePageIntro}
      </p>

      <div className="mt-16 space-y-20">
        {experience.map((company, i) => (
          <section
            key={company.slug}
            id={company.slug}
            className="scroll-mt-24 border-l-2 border-border pl-6 sm:pl-8"
          >
            <div className="relative">
              <span
                className="absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-accent-iris sm:-left-[calc(2rem+5px)]"
                aria-hidden
              />
              <p className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {company.dates}
              </p>
              <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight">
                  <Building2 className="size-4 text-muted-foreground" strokeWidth={1.75} />
                  {company.company}
                </h2>
                {company.current ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-iris/30 bg-accent-iris/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-iris">
                    <span className="size-1.5 rounded-full bg-accent-iris" />
                    Current
                  </span>
                ) : null}
              </div>
              <p className="text-muted-foreground">{company.role}</p>
              <p className="font-mono text-xs text-muted-foreground">{company.location}</p>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {company.about}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed">{company.roleSummary}</p>

            <Accordion multiple className="mt-8 w-full">
              {company.features.map((feature, fi) => (
                <AccordionItem key={feature.title} value={`${company.slug}-${fi}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {feature.paragraphs.map((p, pi) => (
                        <p key={pi} className="text-sm leading-relaxed text-muted-foreground">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {feature.technologies.map((tech) => (
                        <TechTag key={tech} label={tech} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </div>
  );
}
