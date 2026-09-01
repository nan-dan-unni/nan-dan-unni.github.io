"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent-iris"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {site.nav.map((item, i) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="mr-1.5 text-accent-iris/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px bg-accent-iris transition-opacity",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="font-mono text-sm">{site.name}</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pb-6">
                  {site.nav.map((item, i) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <SheetClose
                        key={item.href}
                        nativeButton={false}
                        render={
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center gap-2 rounded-md px-2 py-2.5 font-mono text-sm uppercase tracking-wider transition-colors",
                              active
                                ? "text-accent-iris"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          />
                        }
                      >
                        <span className="text-xs text-accent-iris/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
