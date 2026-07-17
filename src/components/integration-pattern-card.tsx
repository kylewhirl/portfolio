import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function IntegrationPatternCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "rounded-sm border-[#d5d3c8] bg-[#fbfaf5] shadow-[0_16px_45px_rgba(59,49,36,0.08)]",
        className
      )}
    >
      <CardContent className="space-y-2">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  );
}
