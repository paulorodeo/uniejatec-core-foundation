import type { ReactNode } from "react";
import { Container } from "@/components/ui/layout-primitives";

/** PageHeader — cabeçalho oficial de páginas hub / conteúdo. */
export function PageHeader({
  overline,
  title,
  description,
  actions,
}: {
  overline?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-surface">
      <Container size="xl" className="py-10 md:py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            {overline ? <p className="type-overline text-primary">{overline}</p> : null}
            <h1 className="mt-2 type-h1">{title}</h1>
            {description ? (
              <p className="mt-3 type-lead">{description}</p>
            ) : null}
          </div>
          {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
        </div>
      </Container>
    </header>
  );
}
