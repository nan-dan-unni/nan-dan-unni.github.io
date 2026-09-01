export type ShareResult = "file" | "link" | "unsupported";

interface ShareResumeOptions {
  fileUrl: string;
  fileName: string;
  title: string;
  pageUrl: string;
}

/**
 * Tries, in order: native file share (the OS app picker with the actual PDF
 * attached), then native link share, then reports "unsupported" so the
 * caller can fall back to the WhatsApp/Telegram/Email/Copy-Link menu.
 * See portfolio/ui-requirements.md §7.4 for why each tier exists.
 */
export async function shareResume({
  fileUrl,
  fileName,
  title,
  pageUrl,
}: ShareResumeOptions): Promise<ShareResult> {
  if (typeof navigator === "undefined" || !navigator.share) {
    return "unsupported";
  }

  // Tier 1: hand the actual file to the OS share sheet.
  try {
    if (navigator.canShare) {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const file = new File([blob], fileName, { type: "application/pdf" });

      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title });
        return "file";
      }
    }
  } catch (error) {
    // AbortError means the user dismissed the share sheet, not a real
    // failure, silently fall through to the link tier below.
    if (error instanceof DOMException && error.name === "AbortError") {
      return "file";
    }
  }

  // Tier 2: native share sheet with a link instead of the file.
  try {
    await navigator.share({ title, url: pageUrl });
    return "link";
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return "link";
    }
    return "unsupported";
  }
}

export function buildShareLinks(pageUrl: string, message: string) {
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedMessage = encodeURIComponent(`${message} ${pageUrl}`);
  return {
    whatsapp: `https://wa.me/?text=${encodedMessage}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(message)}`,
    email: `mailto:?subject=${encodeURIComponent(message)}&body=${encodedMessage}`,
  };
}
