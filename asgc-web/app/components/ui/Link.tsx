import { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export function CustomLink({
  children,
  href,
  external,
  className = "",
  ...props
}: LinkProps) {
  const isExternal = external || href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 text-accent hover:underline font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
      {isExternal && <span className="text-xs">↗</span>}
    </a>
  );
}