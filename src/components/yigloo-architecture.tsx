"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Lang = "ts" | "python" | "go";
type NodeKind = "site" | "product-ui" | "product-backend" | "shared-service" | "database";

interface DiagramBox {
  id: string;
  label: string;
  sublabel: string;
  kind: NodeKind;
  lang?: Lang;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Edge {
  from: string;
  to: string;
}

// Public service names only — no internal codenames (see chat: authentication-service
// was "dna-service", ai-service was "brain-service", communication-service was
// "push-delivery-service" / "neuron-service" internally).
//
// Layout is a layered dependency diagram, not a hub-and-spoke: each product's UI
// sits above its own backend (ownership), each backend connects down to the
// shared services it actually uses (consumption — Yexit only uses
// authentication-service, since nothing in its feature set touches AI or
// notifications yet), and every shared service sits on the one shared database.
const SITE: DiagramBox = {
  id: "yigloo-ui",
  label: "Yigloo UI",
  sublabel: "Marketing site · Next.js",
  kind: "site",
  x: 16,
  y: 24,
  w: 152,
  h: 56,
};

const PRODUCT_BOXES: DiagramBox[] = [
  { id: "yendulum-ui", label: "Yendulum UI", sublabel: "PWA & Web · React", kind: "product-ui", x: 216, y: 24, w: 172, h: 56 },
  { id: "yendulum-be", label: "Yendulum Backend", sublabel: "NestJS", kind: "product-backend", x: 216, y: 118, w: 172, h: 56 },
  { id: "yexit-ui", label: "Yexit UI", sublabel: "PWA & Web · React", kind: "product-ui", x: 436, y: 24, w: 172, h: 56 },
  { id: "yexit-be", label: "Yexit Backend", sublabel: "NestJS", kind: "product-backend", x: 436, y: 118, w: 172, h: 56 },
];

const SHARED_SERVICES: DiagramBox[] = [
  { id: "auth", label: "authentication-service", sublabel: "SSO, Identity · NestJS", kind: "shared-service", lang: "ts", x: 155, y: 222, w: 150, h: 62 },
  { id: "ai", label: "ai-service", sublabel: "Agentic AI · pydantic-ai", kind: "shared-service", lang: "python", x: 325, y: 222, w: 150, h: 62 },
  { id: "comms", label: "communication-service", sublabel: "Push, email, SMS", kind: "shared-service", lang: "go", x: 495, y: 222, w: 150, h: 62 },
];

const DATABASE: DiagramBox = {
  id: "db",
  label: "Shared Postgres Database",
  sublabel: "Supabase · isolated schema per service",
  kind: "database",
  x: 110,
  y: 328,
  w: 580,
  h: 48,
};

const ALL_BOXES: DiagramBox[] = [SITE, ...PRODUCT_BOXES, ...SHARED_SERVICES, DATABASE];

const EDGES: Edge[] = [
  { from: "yendulum-ui", to: "yendulum-be" },
  { from: "yexit-ui", to: "yexit-be" },
  { from: "yendulum-be", to: "auth" },
  { from: "yendulum-be", to: "ai" },
  { from: "yendulum-be", to: "comms" },
  { from: "yexit-be", to: "auth" },
  { from: "auth", to: "db" },
  { from: "ai", to: "db" },
  { from: "comms", to: "db" },
];

const GROUP_LABELS = [
  { label: "PLATFORM", x: 92, y: 14 },
  { label: "YENDULUM", x: 302, y: 14 },
  { label: "YEXIT", x: 522, y: 14 },
  { label: "COMMON / SHARED SERVICES", x: 400, y: 210 },
];

const LANG_STROKE: Record<Lang, string> = {
  ts: "stroke-accent-azure",
  python: "stroke-accent-violet",
  go: "stroke-accent-plum",
};
const LANG_FILL: Record<Lang, string> = {
  ts: "fill-accent-azure",
  python: "fill-accent-violet",
  go: "fill-accent-plum",
};
const LANG_BG: Record<Lang, string> = {
  ts: "bg-accent-azure",
  python: "bg-accent-violet",
  go: "bg-accent-plum",
};
const LANG_LABEL: Record<Lang, string> = { ts: "TypeScript", python: "Python", go: "Go" };

const SIZE_W = 800;
const SIZE_H = 400;

function center(box: DiagramBox) {
  return { x: box.x + box.w / 2, y: box.y + box.h / 2 };
}

function byId(id: string) {
  return ALL_BOXES.find((b) => b.id === id)!;
}

// Adjacency map so hovering any node highlights every edge/node it touches,
// not just the ones it's a "from" of.
const adjacency = new Map<string, Set<string>>();
for (const box of ALL_BOXES) adjacency.set(box.id, new Set());
for (const edge of EDGES) {
  adjacency.get(edge.from)!.add(edge.to);
  adjacency.get(edge.to)!.add(edge.from);
}

export function YiglooArchitecture() {
  const [hovered, setHovered] = React.useState<string | null>(null);

  const related = hovered ? adjacency.get(hovered) : null;
  const isNodeActive = (id: string) => hovered === id;
  const isNodeDimmed = (id: string) => hovered !== null && hovered !== id && !related?.has(id);
  const isEdgeActive = (edge: Edge) => hovered === edge.from || hovered === edge.to;
  const isEdgeDimmed = (edge: Edge) => hovered !== null && !isEdgeActive(edge);

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
        role="img"
        aria-label="Yigloo architecture: Yendulum and Yexit each have their own UI and backend, which use shared platform services — authentication, AI, and communication — that all sit on one shared Postgres database. The Yigloo marketing site is a separate platform frontend with no backend dependencies."
        className="mx-auto h-auto w-full max-w-3xl"
      >
        {EDGES.map((edge) => {
          const from = center(byId(edge.from));
          const to = center(byId(edge.to));
          const active = isEdgeActive(edge);
          const dimmed = isEdgeDimmed(edge);
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              strokeWidth={active ? 1.75 : 1}
              className={cn(
                "transition-[stroke,opacity] duration-200",
                active ? "stroke-primary" : "stroke-border",
                dimmed ? "opacity-20" : "opacity-100"
              )}
            />
          );
        })}

        {GROUP_LABELS.map((group) => (
          <text
            key={group.label}
            x={group.x}
            y={group.y}
            textAnchor="middle"
            className="fill-muted-foreground font-mono text-[9px] tracking-[0.15em]"
          >
            {group.label}
          </text>
        ))}

        <rect
          x={DATABASE.x}
          y={DATABASE.y}
          width={DATABASE.w}
          height={DATABASE.h}
          rx={8}
          className={cn(
            "cursor-pointer transition-[stroke,opacity] duration-200",
            "fill-card",
            isNodeActive("db") || related?.has("db") ? "stroke-primary" : "stroke-border",
            isNodeDimmed("db") ? "opacity-45" : "opacity-100"
          )}
          strokeWidth={isNodeActive("db") ? 1.75 : 1.25}
          tabIndex={0}
          role="img"
          aria-label={`${DATABASE.label}, ${DATABASE.sublabel}`}
          onMouseEnter={() => setHovered("db")}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered("db")}
          onBlur={() => setHovered(null)}
        />
        <text
          x={center(DATABASE).x}
          y={center(DATABASE).y - 4}
          textAnchor="middle"
          className="fill-foreground font-mono text-[11px] font-semibold"
        >
          {DATABASE.label}
        </text>
        <text
          x={center(DATABASE).x}
          y={center(DATABASE).y + 12}
          textAnchor="middle"
          className="fill-muted-foreground text-[9px]"
        >
          {DATABASE.sublabel}
        </text>

        {SHARED_SERVICES.map((box) => {
          const c = center(box);
          const active = isNodeActive(box.id);
          const dimmed = isNodeDimmed(box.id);
          return (
            <g
              key={box.id}
              tabIndex={0}
              role="img"
              aria-label={`${box.label}, ${box.sublabel}, shared service`}
              onMouseEnter={() => setHovered(box.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(box.id)}
              onBlur={() => setHovered(null)}
              className={cn(
                "cursor-pointer outline-none transition-opacity duration-200",
                dimmed ? "opacity-45" : "opacity-100"
              )}
            >
              <rect
                x={box.x}
                y={box.y}
                width={box.w}
                height={box.h}
                rx={8}
                strokeDasharray="3 3"
                className={cn(
                  "fill-background transition-[stroke] duration-200",
                  active && box.lang ? LANG_STROKE[box.lang] : "stroke-border"
                )}
                strokeWidth={active ? 1.75 : 1.25}
              />
              {box.lang && (
                <circle cx={box.x + 16} cy={box.y + 20} r={3} className={LANG_FILL[box.lang]} />
              )}
              <text
                x={box.x + 26}
                y={box.y + 24}
                className="fill-foreground font-mono text-[10px] font-semibold"
              >
                {box.label}
              </text>
              <text x={c.x} y={box.y + 44} textAnchor="middle" className="fill-muted-foreground text-[8.5px]">
                {box.sublabel}
              </text>
            </g>
          );
        })}

        {[SITE, ...PRODUCT_BOXES].map((box) => {
          const c = center(box);
          const active = isNodeActive(box.id);
          const dimmed = isNodeDimmed(box.id);
          const isProduct = box.kind !== "site";
          return (
            <g
              key={box.id}
              tabIndex={0}
              role="img"
              aria-label={`${box.label}, ${box.sublabel}${isProduct ? "" : ", platform frontend, no backend"}`}
              onMouseEnter={() => setHovered(box.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(box.id)}
              onBlur={() => setHovered(null)}
              className={cn(
                "cursor-pointer outline-none transition-opacity duration-200",
                dimmed ? "opacity-45" : "opacity-100"
              )}
            >
              <rect
                x={box.x}
                y={box.y}
                width={box.w}
                height={box.h}
                rx={8}
                strokeDasharray={isProduct ? undefined : "3 3"}
                className={cn(
                  "fill-background transition-[stroke] duration-200",
                  active ? "stroke-primary" : "stroke-border"
                )}
                strokeWidth={active ? 1.75 : 1.25}
              />
              <text
                x={c.x}
                y={box.y + 24}
                textAnchor="middle"
                className="fill-foreground font-mono text-[11px] font-semibold"
              >
                {box.label}
              </text>
              <text x={c.x} y={box.y + 40} textAnchor="middle" className="fill-muted-foreground text-[9px]">
                {box.sublabel}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {(["ts", "go", "python"] as const).map((lang) => (
          <span key={lang} className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className={cn("size-2 rounded-full", LANG_BG[lang])} />
            {LANG_LABEL[lang]}
          </span>
        ))}
        <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="size-2 rounded-[2px] border border-dashed border-current" />
          Shared / platform
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="size-2 rounded-[2px] border border-current" />
          Product-owned
        </span>
      </div>
      <p className="mx-auto mt-3 max-w-lg text-center text-xs text-muted-foreground">
        Lines show which shared services each product actually calls today — Yexit only uses
        authentication, not the AI or communication services yet. Every product also has its own
        isolated schema on the same shared database.
      </p>
    </div>
  );
}
