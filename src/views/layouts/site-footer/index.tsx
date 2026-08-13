import Link from "next/link";
import { MailIcon } from "lucide-react";

import NAV_LINKS from "@/core/constants/nav-links.const";
import SITE from "@/core/constants/site.const";
import { GithubIcon, LinkedinIcon } from "@/views/components/icons";
import { Logo } from "@/views/components/logo";

const SOCIALS = [
  { label: "GitHub", href: SITE.GITHUB_URL, icon: GithubIcon },
  { label: "LinkedIn", href: SITE.LINKEDIN_URL, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${SITE.CONTACT_EMAIL}`, icon: MailIcon },
];

function SiteFooter() {
  return (
    <footer className="border-border/60 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xs space-y-3">
          <Logo />
          <p className="text-muted-foreground text-sm leading-relaxed">
            {SITE.DESCRIPTION}
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 sm:items-end">
          <nav className="flex flex-wrap items-center gap-6">
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

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={
                  social.label !== "Email" ? "noopener noreferrer" : undefined
                }
                aria-label={social.label}
                className="border-border/60 text-muted-foreground hover:text-foreground hover:border-border inline-flex size-9 items-center justify-center rounded-full border transition-colors"
              >
                <social.icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-border/60 border-t">
        <div className="text-muted-foreground mx-auto max-w-6xl px-6 py-6 text-xs">
          © {new Date().getFullYear()} {SITE.FULL_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
