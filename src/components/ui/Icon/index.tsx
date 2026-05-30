import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  size?: number;
}

export function Icon({ children, className, size = 18, style, ...props }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("pg-icon", className)}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      {children}
    </span>
  );
}
