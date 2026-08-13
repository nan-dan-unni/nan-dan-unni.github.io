import { SKILL_GROUPS } from "@/core/constants/skills.const";
import { Badge } from "@/views/components/shadcn/ui/badge";
import Reveal from "@/views/components/reveal";

function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-border/60 scroll-mt-16 border-t px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Skills &amp; tools
          </h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            The stack I reach for most, across frontend, backend, and AI.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={(index % 2) * 0.1}>
              <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-foreground/80 rounded-full px-3 py-1 font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
