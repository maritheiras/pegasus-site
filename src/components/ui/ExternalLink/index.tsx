import type { AnchorHTMLAttributes, ReactNode } from "react";

import { withNewTabLabel } from "@/lib/utils";

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "rel" | "target"> {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
}

export function ExternalLink({ href, children, ariaLabel, ...props }: ExternalLinkProps) {
  const fallbackLabel = typeof children === "string" ? children : href;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={withNewTabLabel(ariaLabel ?? fallbackLabel)}
      {...props}
    >
      {children}
    </a>
  );
}
