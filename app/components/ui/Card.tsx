import { HTMLAttributes, ReactNode } from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`bg-surface border border-border rounded-xl p-6 shadow-sm transition-all hover:border-accent/30 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 border-b border-border pb-3 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Heading as="h3" className={className} {...props}>
      {children}
    </Heading>
  );
}

export function CardDescription({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Text variant="muted" className={className} {...props}>
      {children}
    </Text>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`space-y-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mt-6 pt-4 border-t border-border flex items-center justify-between ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}