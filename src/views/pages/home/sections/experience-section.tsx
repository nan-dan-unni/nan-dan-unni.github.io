import { EXPERIENCE, STATS } from "@/core/constants/experience.const";
import { Badge } from "@/views/components/shadcn/ui/badge";
import Reveal from "@/views/components/reveal";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-border/60 scroll-mt-16 border-t px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Experience
          </h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            Three-plus years shipping frontend-led, full-stack products in
            production.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-primary text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 space-y-6">
          {EXPERIENCE.map((role, index) => (
            <Reveal
              key={role.company}
              delay={index * 0.1}
              className="border-border/60 bg-card rounded-2xl border p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{role.role}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {role.company} · {role.companyType} · {role.location}
                  </p>
                </div>
                <Badge variant="secondary" className="font-normal">
                  {role.period} · {role.duration}
                </Badge>
              </div>

              <ul className="mt-6 space-y-3">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-muted-foreground flex gap-3 text-sm leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="bg-primary/50 mt-2 size-1.5 shrink-0 rounded-full"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
