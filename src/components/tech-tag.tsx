import { categorizeTag, tagCategoryClasses } from "@/lib/tag-category";
import { getTagIcon } from "@/lib/tag-icon";
import { cn } from "@/lib/utils";

export function TechTag({ label, className }: { label: string; className?: string }) {
  const category = categorizeTag(label);
  const icon = getTagIcon(label);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-tight",
        tagCategoryClasses[category],
        className
      )}
    >
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="size-2.5 shrink-0"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      ) : null}
      {label}
    </span>
  );
}
