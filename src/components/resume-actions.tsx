"use client";

import * as React from "react";
import { toast } from "sonner";
import { Eye, Download, Link2, Share2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatsappIcon, TelegramIcon } from "@/components/icons/brand-icons";
import { resumeCopy } from "@/data/resume";
import { site } from "@/data/site";
import { shareResume, buildShareLinks } from "@/lib/share";
import { cn } from "@/lib/utils";

interface ResumeActionsProps {
  variant?: "full" | "compact";
  className?: string;
}

export function ResumeActions({ variant = "full", className }: ResumeActionsProps) {
  const [shareMenuOpen, setShareMenuOpen] = React.useState(false);
  const pageUrl = `${site.url}/resume`;
  const shareMessage = `${site.name} — Resume`;
  const shareLinks = buildShareLinks(pageUrl, shareMessage);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(`${site.url}${resumeCopy.fileUrl}`);
      toast.success(resumeCopy.actions.copiedConfirmation);
    } catch {
      toast.error("Couldn't copy the link — try again.");
    }
  }

  async function handleShare() {
    const result = await shareResume({
      fileUrl: resumeCopy.fileUrl,
      fileName: resumeCopy.fileName,
      title: shareMessage,
      pageUrl,
    });

    if (result === "unsupported") {
      setShareMenuOpen(true);
    }
  }

  const buttonSize = variant === "compact" ? "sm" : "default";
  const showLabels = variant === "full";

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Button
        size={buttonSize}
        variant="default"
        nativeButton={false}
        render={<a href={resumeCopy.fileUrl} target="_blank" rel="noreferrer" />}
      >
        <Eye />
        {showLabels && resumeCopy.actions.view}
      </Button>

      <Button
        size={buttonSize}
        variant="outline"
        nativeButton={false}
        render={<a href={resumeCopy.fileUrl} download={resumeCopy.fileName} />}
      >
        <Download />
        {showLabels && resumeCopy.actions.download}
      </Button>

      <Button size={buttonSize} variant="outline" onClick={handleCopyLink}>
        <Link2 />
        {showLabels && resumeCopy.actions.copyLink}
      </Button>

      <DropdownMenu open={shareMenuOpen} onOpenChange={setShareMenuOpen}>
        <DropdownMenuTrigger
          render={<Button size={buttonSize} variant="outline" onClick={handleShare} />}
        >
          <Share2 />
          {showLabels && resumeCopy.actions.share}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem render={<a href={shareLinks.whatsapp} target="_blank" rel="noreferrer" />}>
            <WhatsappIcon className="size-4" /> WhatsApp
          </DropdownMenuItem>
          <DropdownMenuItem render={<a href={shareLinks.telegram} target="_blank" rel="noreferrer" />}>
            <TelegramIcon className="size-4" /> Telegram
          </DropdownMenuItem>
          <DropdownMenuItem render={<a href={shareLinks.email} />}>Email</DropdownMenuItem>
          <DropdownMenuItem onClick={handleCopyLink}>Copy Link</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        size={buttonSize}
        variant="outline"
        nativeButton={false}
        render={<a href="/api/vcard" download />}
      >
        <UserPlus />
        {showLabels && resumeCopy.actions.saveContact}
      </Button>
    </div>
  );
}
