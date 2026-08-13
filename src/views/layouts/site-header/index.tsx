import Link from "next/link";

import NAV_LINKS from "@/core/constants/nav-links.const";
import SITE from "@/core/constants/site.const";
import { Logo } from "@/views/components/logo";
import { Button } from "@/views/components/shadcn/ui/button";
import ThemeToggle from "@/views/components/theme-toggle";

function SiteHeader() {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href={`mailto:${SITE.CONTACT_EMAIL}`}>Get in touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
