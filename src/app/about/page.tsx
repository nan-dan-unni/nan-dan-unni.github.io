import type { Metadata } from "next";
import { Route, Wrench, GraduationCap, Feather } from "lucide-react";
import { SectionKicker } from "@/components/section-kicker";
import { aboutIntro, journeyParagraphs, howIWork, education, beyondWork } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer based in Bangalore, currently pursuing an M.Tech in AI & Data Science at IIIT Kottayam.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-iris">About</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{aboutIntro}</h1>

      <section className="mt-14 space-y-5">
        <SectionKicker icon={Route}>Journey</SectionKicker>
        {journeyParagraphs.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </section>

      <section className="mt-14">
        <SectionKicker icon={Wrench}>How I work</SectionKicker>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{howIWork}</p>
      </section>

      <section className="mt-14">
        <SectionKicker icon={GraduationCap}>Education</SectionKicker>
        <ul className="mt-5 space-y-6">
          {education.map((item) => (
            <li key={item.degree} className="border-l-2 border-accent-plum/40 pl-5">
              <p className="font-medium">{item.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {item.dates} · {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-border/70 pt-10">
        <SectionKicker icon={Feather}>Beyond work</SectionKicker>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{beyondWork}</p>
      </section>
    </div>
  );
}
