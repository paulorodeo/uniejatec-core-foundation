/**
 * DetailView — feature genérica de página de detalhe.
 * Renderiza cabeçalho + corpo com estados loading / not-found.
 */

import { Container, Section } from "@/components/ui/layout-primitives";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { formatDate } from "@/utils";

interface Props {
  isLoading: boolean;
  entity:
    | {
        title: string;
        excerpt?: string;
        publishedAt?: string | null;
        body?: string;
      }
    | null
    | undefined;
  overline?: string;
}

export function DetailView({ isLoading, entity, overline }: Props) {
  if (isLoading) {
    return (
      <Container size="md" className="py-12">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-6 h-12 w-full" />
        <Skeleton className="mt-4 h-6 w-3/4" />
        <div className="mt-10 space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </Container>
    );
  }
  if (!entity) {
    return (
      <Container size="md" className="py-16">
        <EmptyState
          title="Conteúdo não encontrado"
          description="Verifique o endereço ou explore outras seções da plataforma."
        />
      </Container>
    );
  }
  return (
    <article>
      <PageHeader
        overline={overline}
        title={entity.title}
        description={entity.excerpt}
      />
      <Section>
        <Container size="md">
          {entity.publishedAt ? (
            <p className="type-caption">Publicado em {formatDate(entity.publishedAt)}</p>
          ) : null}
          <div className="mt-6 type-body text-text-secondary">
            {entity.body ?? "Conteúdo em preparação."}
          </div>
        </Container>
      </Section>
    </article>
  );
}
