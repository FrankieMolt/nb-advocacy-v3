"use client";

import { ReactNode } from "react";

interface ScrollLinkProps {
  href: string;
  className: string;
  "aria-label"?: string;
  children: ReactNode;
}

export function ScrollLink({ href, className, children, ...props }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
