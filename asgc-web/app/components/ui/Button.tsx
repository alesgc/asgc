import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Icon } from "@/app/components/ui/Icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "bg-accent text-white hover:bg-accent/90 border-transparent",
      secondary:
        "bg-surface-hover text-foreground hover:bg-border border-border",
      outline:
        "bg-transparent text-foreground border-border hover:bg-surface-hover",
      danger: "bg-red-600 text-white hover:bg-red-700 border-transparent",
      ghost:
        "bg-transparent text-text-secondary hover:text-foreground hover:bg-surface-hover border-transparent",
    };

    const sizes = {
      sm: "px-2.5 py-1 text-xs rounded-md",
      md: "px-4 py-2 text-sm rounded-lg",
      lg: "px-5 py-2.5 text-base rounded-lg",
    };

    const iconSizes = {
      sm: 14,
      md: 16,
      lg: 18,
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`inline-flex items-center justify-center gap-2 font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed select-none ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Icon name="spinner" size={iconSizes[size]} />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";