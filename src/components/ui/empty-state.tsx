import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * EmptyState — estado obrigatório em toda listagem.
 * Fonte: DESIGN_SYSTEM.md.
 */
export function EmptyState({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface px-6 py-16 text-center",
        className,
      )}
    >
      <h3 className="type-h4">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-md type-small text-text-secondary">{description}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
