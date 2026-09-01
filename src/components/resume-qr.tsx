"use client";

import * as React from "react";
import QRCode from "qrcode";
import { site } from "@/data/site";
import { resumeCopy } from "@/data/resume";

export function ResumeQr() {
  const [dataUrl, setDataUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(`${site.url}${resumeCopy.fileUrl}`, {
      margin: 1,
      width: 176,
      color: { dark: "#0a0a0a", light: "#ffffff" },
    }).then((url) => {
      if (!cancelled) setDataUrl(url);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!dataUrl) {
    return <div className="size-44 animate-pulse rounded-lg border border-border bg-muted" />;
  }

  return (
    <figure className="inline-flex flex-col items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element -- small client-generated data URI, next/image adds no value here */}
      <img
        src={dataUrl}
        alt="QR code linking to the resume PDF"
        width={176}
        height={176}
        className="rounded-lg border border-border bg-white p-2"
      />
      <figcaption className="font-mono text-xs text-muted-foreground">
        {resumeCopy.qrCaption}
      </figcaption>
    </figure>
  );
}
