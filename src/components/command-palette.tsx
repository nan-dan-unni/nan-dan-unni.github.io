"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  Briefcase,
  FolderGit2,
  User,
  FileText,
  Mail,
  SunMoon,
  Download,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { site } from "@/data/site";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = React.useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const openExternal = React.useCallback((href: string) => {
    setOpen(false);
    window.open(href, "_blank", "noreferrer");
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen} title="Command palette" description="Jump to a page or action">
      <CommandInput placeholder="Jump to a page, or run a command…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => go("/")}>
            <Home /> Home
          </CommandItem>
          <CommandItem onSelect={() => go("/experience")}>
            <Briefcase /> Experience
          </CommandItem>
          <CommandItem onSelect={() => go("/projects")}>
            <FolderGit2 /> Projects
          </CommandItem>
          <CommandItem onSelect={() => go("/projects/yigloo")}>
            <FolderGit2 /> Projects — Yigloo
          </CommandItem>
          <CommandItem onSelect={() => go("/about")}>
            <User /> About
          </CommandItem>
          <CommandItem onSelect={() => go("/resume")}>
            <FileText /> Resume
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            <SunMoon /> Toggle theme
          </CommandItem>
          <CommandItem onSelect={() => openExternal("/resume.pdf")}>
            <Download /> Download resume
          </CommandItem>
          <CommandItem onSelect={() => openExternal(site.socials.github)}>
            <GithubIcon className="size-4" /> Open GitHub
          </CommandItem>
          <CommandItem onSelect={() => openExternal(site.socials.linkedin)}>
            <LinkedinIcon className="size-4" /> Open LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => openExternal(`mailto:${site.socials.email}`)}>
            <Mail /> Send email
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
