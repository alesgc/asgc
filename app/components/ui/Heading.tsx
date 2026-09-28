import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({
  children,
  as: Component = "h2",
  className = "",
  ...props
}: HeadingProps) {
  const sizes = {
    h1: "text-3xl font-extrabold tracking-tight",
    h2: "text-2xl font-bold tracking-tight border-b border-border pb-2",
    h3: "text-xl font-semibold",
    h4: "text-lg font-medium",
  };

  return (
    <Component className={`${sizes[Component]} text-foreground ${className}`} {...props}>
      {children}
    </Component>
  );
}