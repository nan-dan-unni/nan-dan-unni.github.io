import { GraduationCapIcon } from "lucide-react";

import { EDUCATION } from "@/core/constants/experience.const";
import { Badge } from "@/views/components/shadcn/ui/badge";
import Reveal from "@/views/components/reveal";

function EducationSection() {
  return (
    <section
      id="education"
      className="border-border/60 scroll-mt-16 border-t px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Education
          </h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            The formal grounding behind the engineering - computer science, then
            a return for AI specifically.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {EDUCATION.map((entry, index) => (
            <Reveal
              key={entry.school}
              delay={index * 0.1}
              className="border-border/60 bg-card rounded-2xl border p-8"
            >
              <span className="bg-primary/10 text-primary inline-flex size-11 items-center justify-center rounded-xl">
                <GraduationCapIcon className="size-5" strokeWidth={1.75} />
              </span>

              <h3 className="mt-6 text-lg font-semibold">{entry.degree}</h3>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {entry.school}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge variant="secondary" className="font-normal">
                  {entry.detail}
                </Badge>
                <Badge variant="outline" className="font-normal">
                  {entry.period}
                </Badge>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
