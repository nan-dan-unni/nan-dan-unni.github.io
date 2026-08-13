import SITE from "@/core/constants/site.const";
import { cn } from "@/core/utils/cn.util";

interface LogoMarkProps {
  className?: string;
}

/** The personal mark - a monogram on a soft primary-tinted tile. */
function LogoMark({ className }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "bg-primary/10 text-primary inline-flex items-center justify-center rounded-lg font-mono text-sm font-semibold",
        className,
      )}
      aria-hidden="true"
    >
      N
    </span>
  );
}

interface LogoProps {
  className?: string;
  iconClassName?: string;
  wordmark?: boolean;
}

function Logo({ className, iconClassName, wordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("size-8", iconClassName)} />
      {wordmark && (
        <span className="text-base font-semibold tracking-tight">
          {SITE.NAME}
        </span>
      )}
    </span>
  );
}

export { Logo, LogoMark };
