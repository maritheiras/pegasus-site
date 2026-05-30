import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("pg-section", className)} {...props}>
      {children}
    </section>
  );
}
