import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <p className="eyebrow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-3xl tracking-[-0.03em] text-[#183a2b] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-balance text-sm leading-7 text-[#666a60] md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
