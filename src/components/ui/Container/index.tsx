import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("pg-container", className)} {...props}>
      {children}
    </div>
  );
}
