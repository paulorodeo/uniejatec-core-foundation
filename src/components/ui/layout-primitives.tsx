import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Container — define largura máxima confortável para leitura. */
export function Container({
  className,
  children,
  size = "lg",
  ...rest
}: HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" | "lg" | "xl"; children: ReactNode }) {
  const sizes = { sm: "max-w-3xl", md: "max-w-5xl", lg: "max-w-6xl", xl: "max-w-7xl" };
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)} {...rest}>
      {children}
    </div>
  );
}

/** Section — agrupa conteúdo com espaçamento vertical padronizado. */
export function Section({
  className,
  children,
  spacing = "md",
  ...rest
}: HTMLAttributes<HTMLElement> & { spacing?: "sm" | "md" | "lg"; children: ReactNode }) {
  const map = { sm: "py-8", md: "py-12 md:py-16", lg: "py-16 md:py-24" };
  return (
    <section className={cn(map[spacing], className)} {...rest}>
      {children}
    </section>
  );
}

/** Stack — empilhamento vertical com gap padronizado. */
export function Stack({
  className,
  children,
  gap = 4,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { gap?: 2 | 3 | 4 | 6 | 8; children: ReactNode }) {
  const gaps = { 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" };
  return (
    <div className={cn("flex flex-col", gaps[gap], className)} {...rest}>
      {children}
    </div>
  );
}

/** Grid responsivo. */
export function Grid({
  className,
  children,
  cols = 3,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { cols?: 2 | 3 | 4; children: ReactNode }) {
  const map = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };
  return (
    <div className={cn("grid gap-6", map[cols], className)} {...rest}>
      {children}
    </div>
  );
}
