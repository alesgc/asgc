import { ReactNode } from "react";
import { Label } from "./Label";
import { Text } from "./Text";

export interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({
  label,
  error,
  required,
  htmlFor,
  children,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`w-full space-y-1.5 ${className}`}>
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {children}
      {error && <Text variant="small" className="text-red-400">{error}</Text>}
    </div>
  );
}