import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionKickerProps {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  children: ReactNode;
  className?: string;
}

/** Icon-led sub-section label (e.g. "Overview", "Architecture") — distinct from
 * the numbered "01 WHAT I DO" style top-level section markers on the home page. */
export function SectionKicker({ icon: Icon, children, className }: SectionKickerProps) {
  return (
    <h2
      className={cn(
        "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
        className
      )}
    >
      <Icon className="size-3.5 text-accent-iris" strokeWidth={1.75} />
      {children}
    </h2>
  );
}
