import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  variant = "default",
  ...rest
}: HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "accent";
  children: ReactNode;
}) {
  const styles = {
    default: "bg-muted text-text-primary",
    outline: "border border-border text-text-secondary",
    accent: "bg-accent text-accent-foreground",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        styles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
