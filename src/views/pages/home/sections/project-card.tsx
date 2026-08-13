import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import type { YiglooProduct } from "@/core/constants/projects.const";
import { Badge } from "@/views/components/shadcn/ui/badge";
import Reveal from "@/views/components/reveal";

interface ProjectCardProps {
  product: YiglooProduct;
  delay?: number;
}

function ProjectCard({ product, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group border-border/60 hover:border-border bg-card block h-full rounded-2xl border p-8 transition-colors"
      >
        <div className="flex items-start justify-between">
          <span
            className="inline-flex size-11 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${product.color}1a` }}
          >
            <product.icon
              className="size-5"
              style={{ color: product.color }}
              strokeWidth={1.75}
            />
          </span>
          <Badge variant="secondary" className="font-normal">
            {product.status}
          </Badge>
        </div>

        <h3 className="mt-6 flex items-center gap-1.5 text-lg font-semibold">
          {product.name}
          <ArrowUpRightIcon className="text-muted-foreground size-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
        <p
          className="mt-1 text-sm font-medium"
          style={{ color: product.color }}
        >
          {product.tagline}
        </p>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          {product.description}
        </p>
      </Link>
    </Reveal>
  );
}

export default ProjectCard;
