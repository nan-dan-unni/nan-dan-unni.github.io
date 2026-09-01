import type { Metadata } from "next";
import { ResumeActions } from "@/components/resume-actions";
import { ResumeQr } from "@/components/resume-qr";
import { resumeCopy } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download the resume for A S Nandanunni, Software Engineer.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-iris">
        {resumeCopy.header}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {resumeCopy.body}
      </h1>

      <div className="mt-10">
        <ResumeActions variant="full" />
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="overflow-hidden rounded-lg border border-border/70">
          <object
            data={resumeCopy.fileUrl}
            type="application/pdf"
            className="h-[70vh] w-full"
            aria-label="Resume preview"
          >
            <p className="p-6 text-sm text-muted-foreground">
              Your browser can&apos;t preview PDFs inline.{" "}
              <a href={resumeCopy.fileUrl} className="text-accent-iris underline">
                Open the resume directly
              </a>
              .
            </p>
          </object>
        </div>
        <div className="flex justify-center sm:justify-start">
          <ResumeQr />
        </div>
      </div>
    </div>
  );
}
