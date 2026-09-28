import { TextareaHTMLAttributes, forwardRef } from "react";
import { Label } from "./Label";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, required, className = "", id, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <Label htmlFor={id} required={required}>
            {label}
          </Label>
        )}
        <textarea
          id={id}
          ref={ref}
          rows={rows}
          className={`w-full px-3.5 py-2 bg-surface border border-border rounded-lg text-foreground text-sm placeholder-text-secondary focus:outline-none focus:border-accent transition-colors resize-y disabled:opacity-50 disabled:cursor-not-allowed ${
            error ? "border-red-500 focus:border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";