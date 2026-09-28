import { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span";
  variant?: "default" | "muted" | "small";
}

export function Text({
  children,
  as: Component = "p",
  variant = "default",
  className = "",
  ...props
}: TextProps) {
  const variants = {
    default: "text-foreground text-base",
    muted: "text-text-secondary text-sm",
    small: "text-text-secondary text-xs",
  };

  return (
    <Component className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}