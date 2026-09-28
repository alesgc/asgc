import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
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

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed select-none ${variants[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";