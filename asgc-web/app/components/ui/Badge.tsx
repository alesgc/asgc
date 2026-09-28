import { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

export function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-surface-hover text-foreground border-border",
    outline: "bg-transparent text-text-secondary border-border",
    accent: "bg-accent/10 text-accent border-accent/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}