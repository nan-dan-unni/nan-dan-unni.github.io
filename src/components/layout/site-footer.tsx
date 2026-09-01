import Link from "next/link";
import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";

const connectIcons: Record<string, ReactNode> = {
  GitHub: <GithubIcon className="size-3.5" />,
  LinkedIn: <LinkedinIcon className="size-3.5" />,
  Email: <Mail className="size-3.5" />,
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-mono text-sm font-medium">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{site.tagline}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent-iris/30 bg-accent-iris/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-iris">
              <span className="size-1.5 rounded-full bg-accent-iris" />
              {site.freshnessNote}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-3 space-y-2">
              {site.footer.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent-iris"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Connect
            </h2>
            <ul className="mt-3 space-y-2">
              {site.footer.connect.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-accent-iris"
                  >
                    {connectIcons[item.label]}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            © {year} {site.name}. Built with Next.js.
          </p>
          <div className="flex items-center gap-4 font-mono">
            <Link href="/resume.pdf" className="transition-colors hover:text-accent-iris">
              View Resume
            </Link>
            <a
              href="/resume.pdf"
              download
              className="transition-colors hover:text-accent-iris"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
