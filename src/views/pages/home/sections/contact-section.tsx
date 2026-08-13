import Link from "next/link";
import { MailIcon } from "lucide-react";

import SITE from "@/core/constants/site.const";
import { Button } from "@/views/components/shadcn/ui/button";
import { GithubIcon, LinkedinIcon } from "@/views/components/icons";
import Reveal from "@/views/components/reveal";

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-border/60 scroll-mt-16 border-t px-6 py-24 text-center"
    >
      <Reveal className="mx-auto max-w-md space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Have something worth building?
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          I&apos;m always open to a good conversation about products,
          engineering, or the odd interesting problem. Reach out - I read
          everything myself.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="px-8">
            <Link href={`mailto:${SITE.CONTACT_EMAIL}`}>
              <MailIcon className="size-4" />
              Email me
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="size-11 px-0"
            >
              <Link
                href={SITE.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="size-11 px-0"
            >
              <Link
                href={SITE.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ContactSection;
