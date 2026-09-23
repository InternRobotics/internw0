import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FigureCardProps = {
  children: ReactNode;
  caption?: ReactNode;
  className?: string;
};

export function FigureCard({ children, caption, className }: FigureCardProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card p-4 shadow-sm sm:p-6",
        className,
      )}
    >
      {children}
      {caption ? (
        <figcaption className="px-2 pb-1 pt-3 text-sm leading-6 text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
