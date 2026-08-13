"use client";

import Link from "next/link";
import { motion } from "motion/react";

import SITE from "@/core/constants/site.const";
import { Badge } from "@/views/components/shadcn/ui/badge";
import { Button } from "@/views/components/shadcn/ui/button";

function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <motion.div
          className="bg-brand-yendulum/20 absolute top-1/4 left-1/5 size-72 rounded-full blur-3xl sm:size-96"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-brand-yexit/15 absolute top-1/3 right-1/5 size-72 rounded-full blur-3xl sm:size-96"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-brand-yournals/15 absolute bottom-1/4 left-1/3 size-72 rounded-full blur-3xl sm:size-96"
          animate={{ x: [0, 25, 0], y: [0, 25, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="mx-auto max-w-2xl space-y-8 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge
          variant="secondary"
          className="border-border rounded-full border px-3 py-1 text-xs font-normal"
        >
          {SITE.ROLE} · 3+ years
        </Badge>

        <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-balance sm:text-6xl">
          I build software people{" "}
          <span className="from-brand-yendulum via-brand-yexit to-brand-yournals bg-linear-to-r bg-clip-text text-transparent">
            actually keep using
          </span>
          .
        </h1>

        <p className="text-muted-foreground mx-auto max-w-lg text-lg leading-relaxed text-balance">
          I lead frontend engineering at FenixPyre by day, and build{" "}
          <span className="text-foreground font-medium">Yigloo</span> - an
          ecosystem of AI-powered apps - nights and weekends. I care about
          software that quietly earns a place in someone&apos;s day, not another
          install that gets deleted a week later.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="px-8">
            <Link href="#work">View my work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
