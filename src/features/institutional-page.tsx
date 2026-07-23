/**
 * InstitutionalPage — layout compartilhado por páginas institucionais estáticas.
 */
import { Container, Section } from "@/components/ui/layout-primitives";
import { PageHeader } from "@/components/layout/page-header";
import type { ReactNode } from "react";

export function InstitutionalPage({
  overline,
  title,
  description,
  children,
}: {
  overline?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <PageHeader overline={overline} title={title} description={description} />
      <Section>
        <Container size="md" className="type-body text-text-secondary">
          {children ?? (
            <p>
              Conteúdo institucional em preparação. Esta página faz parte da fundação
              técnica da plataforma e será populada em sprints editoriais futuras.
            </p>
          )}
        </Container>
      </Section>
    </>
  );
}
